import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {prisma} from "./prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        user: { label: "User", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.user || !credentials?.password) return null;

        // ค้นหาข้อมูลผู้ใช้งานในระบบ
        const dbUser = await prisma.user.findUnique({
          where: { user: credentials.user }
        });

        if (dbUser && dbUser.password === credentials.password) {
          // คืนค่าข้อมูลพร้อมระดับสิทธิ์การใช้งาน
          return { 
            id: dbUser.id, 
            name: dbUser.user, 
            email: dbUser.email,
            role: dbUser.role 
          };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      // บันทึกสิทธิ์การใช้งานลงในโทเค็น
      if (user) {
        token.name = user.name;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      // ส่งข้อมูลสิทธิ์การใช้งานไปยังฝั่งไคลเอนต์
      if (session.user) {
        session.user.name = token.name;
        (session.user as any).role = token.role;
      }
      return session;
    }
  },
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
};
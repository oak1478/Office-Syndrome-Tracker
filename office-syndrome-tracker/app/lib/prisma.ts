import { PrismaClient } from "@prisma/client";

// กำหนดตัวแปรระดับโกลบอลเพื่อจัดการอินสแตนซ์ของ Prisma
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// เรียกใช้อินสแตนซ์เดิมหรือสร้างใหม่หากยังไม่มี
export const prisma = globalForPrisma.prisma || new PrismaClient();

// ป้องกันการสร้างการเชื่อมต่อซ้ำซ้อนในสภาพแวดล้อมการพัฒนา
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
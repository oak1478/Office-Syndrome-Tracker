import { NextResponse } from "next/server";
import {prisma} from "../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

// จัดการคำขอเปลี่ยนแปลงสิทธิ์ผู้ใช้งาน
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    // ตรวจสอบความถูกต้องของสิทธิ์ผู้ดูแลระบบ
    if (!session || (session.user as any).role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const { userId, newRole } = await req.json();

    // ปรับปรุงระดับสิทธิ์ในฐานข้อมูล
    await prisma.user.update({
      where: { id: userId },
      data: { role: newRole }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Server encountered an error" }, { status: 500 });
  }
}
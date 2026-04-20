import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth"; 
import { prisma } from "../../../lib/prisma"; 

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    // ตรวจสอบสิทธิ์ผู้ดูแลระบบก่อนอนุญาตให้เปลี่ยนแปลงข้อมูล
    if (!session || (session.user as any).role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const { userId, newRole } = await req.json();

    // ตรวจสอบความครบถ้วนของข้อมูลที่ส่งมา
    if (!userId || !newRole) {
      return NextResponse.json({ error: "Invalid data payload" }, { status: 400 });
    }

    // ดำเนินการอัปเดตระดับสิทธิ์ในฐานข้อมูล
    await prisma.user.update({
      where: { id: userId },
      data: { role: newRole }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    // บันทึกข้อผิดพลาดสำหรับการตรวจสอบของนักพัฒนา
    console.error("Role Update Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
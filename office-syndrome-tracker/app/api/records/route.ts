import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth"; // โปรดตรวจสอบ Path ของ authOptions ให้ตรงกับระบบ
import { prisma } from "../../lib/prisma";

// ระบบดึงข้อมูลทั้งหมด (สำหรับแสดงผลหน้าประวัติและแดชบอร์ด)
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.name) {
      return NextResponse.json({ error: "ไม่อนุญาตให้เข้าถึงข้อมูล" }, { status: 401 });
    }

    const dbUser = await prisma.user.findUnique({
      where: { user: session.user.name },
    });

    if (!dbUser) {
      return NextResponse.json({ error: "ไม่พบข้อมูลผู้ใช้งานในระบบ" }, { status: 404 });
    }

    const records = await prisma.healthRecord.findMany({
      where: { authorId: dbUser.id },
      orderBy: { updatedAt: "desc" }, // เรียงลำดับจากข้อมูลที่แก้ไขล่าสุด
    });

    return NextResponse.json(records);
  } catch (error) {
    console.error("GET API Error:", error);
    return NextResponse.json({ error: "เกิดข้อผิดพลาดในการดึงข้อมูล" }, { status: 500 });
  }
}

// ระบบเพิ่มบันทึกข้อมูลใหม่ (แก้ไข Error 405)
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.name) {
      return NextResponse.json({ error: "ไม่อนุญาตให้เข้าถึงข้อมูล" }, { status: 401 });
    }

    const dbUser = await prisma.user.findUnique({
      where: { user: session.user.name },
    });

    if (!dbUser) {
      return NextResponse.json({ error: "ไม่พบข้อมูลผู้ใช้งานในระบบ" }, { status: 404 });
    }

    const data = await req.json();

    const newRecord = await prisma.healthRecord.create({
      data: {
        neckPain: data.neckPain,
        backPain: data.backPain,
        eyeStrain: data.eyeStrain,
        wristPain: data.wristPain,
        headache: data.headache,
        fingerNumbness: data.fingerNumbness,
        legNumbness: data.legNumbness,
        tookBreaks: data.tookBreaks,
        stressLevel: parseInt(data.stressLevel),
        note: data.note,
        authorId: dbUser.id, // เชื่อมโยงข้อมูลกับผู้ใช้งานปัจจุบัน
      },
    });

    return NextResponse.json(newRecord, { status: 201 });
  } catch (error) {
    console.error("POST API Error:", error);
    return NextResponse.json({ error: "ไม่สามารถบันทึกข้อมูลใหม่ได้" }, { status: 500 });
  }
}
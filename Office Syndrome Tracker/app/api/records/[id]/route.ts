import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

// ระบบดึงข้อมูลสำหรับนำมาแสดงผล
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const record = await prisma.healthRecord.findUnique({ 
      where: { id: resolvedParams.id } 
    });
    
    if (!record) {
      return NextResponse.json({ error: "ไม่พบข้อมูลในระบบ" }, { status: 404 });
    }
    
    return NextResponse.json(record);
  } catch (error) {
    console.error("GET API Error:", error);
    return NextResponse.json({ error: "เกิดข้อผิดพลาดที่เซิร์ฟเวอร์" }, { status: 500 });
  }
}

// ระบบบันทึกการแก้ไขข้อมูล
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const data = await req.json();
    
    const updated = await prisma.healthRecord.update({
      where: { id: resolvedParams.id },
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
      },
    });
    
    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT API Error:", error);
    return NextResponse.json({ error: "ไม่สามารถอัปเดตข้อมูลได้" }, { status: 500 });
  }
}

// ระบบลบข้อมูลออกจากฐานข้อมูล
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    
    await prisma.healthRecord.delete({
      where: { id: resolvedParams.id },
    });

    return NextResponse.json({ message: "ดำเนินการลบข้อมูลสำเร็จ" });
  } catch (error) {
    console.error("DELETE API Error:", error);
    return NextResponse.json({ error: "ไม่สามารถลบข้อมูลได้" }, { status: 500 });
  }
}
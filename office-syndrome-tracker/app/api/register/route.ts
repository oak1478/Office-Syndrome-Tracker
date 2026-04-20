import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, user, email, password, jobTitle } = await req.json();

    // ระบบดักความยาวรหัสผ่านระดับ Backend
    if (password.length < 8) {
      return NextResponse.json({ error: "รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร" }, { status: 400 });
    }

    // ตรวจสอบความซ้ำซ้อนของชื่อผู้ใช้งาน
    const existingUser = await prisma.user.findUnique({
      where: { user }
    });

    if (existingUser) {
      return NextResponse.json({ error: "ชื่อผู้ใช้งานนี้มีอยู่ในระบบแล้ว" }, { status: 400 });
    }

    // บันทึกข้อมูลลงฐานข้อมูล Supabase
    const newUser = await prisma.user.create({
      data: {
        name,
        user,
        email,
        password,
        jobTitle
      }
    });

    return NextResponse.json({ message: "Success" }, { status: 201 });
  } catch (error) {
    console.error("Register Error:", error);
    return NextResponse.json({ error: "เกิดข้อผิดพลาดในการบันทึกข้อมูล" }, { status: 500 });
  }
}
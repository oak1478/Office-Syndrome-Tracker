import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { prisma } from "../../lib/prisma";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // รับค่าเดือนและปีจาก URL Query Parameters
    const { searchParams } = new URL(req.url);
    const month = parseInt(searchParams.get("month") || String(new Date().getMonth() + 1));
    const year = parseInt(searchParams.get("year") || String(new Date().getFullYear()));

    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    const records = await prisma.healthRecord.findMany({
      where: {
        author: { user: session.user.email },
        date: { gte: startDate, lte: endDate },
      },
    });

    // ส่วนการคำนวณสถิติ (คงเดิมตามที่เราเคยเขียนไว้ค่ะ)
    return NextResponse.json({ records, total: records.length });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
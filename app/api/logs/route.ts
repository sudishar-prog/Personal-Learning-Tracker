import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit");

    const logs = await prisma.logEntry.findMany({
      where: { userId: session.user.id },
      include: {
        skill: {
          select: {
            name: true,
            color: true,
          },
        },
      },
      orderBy: { date: "desc" },
      take: limit ? parseInt(limit) : undefined,
    });

    return NextResponse.json(logs);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch logs" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { skillId, date, durationMinutes, type, note } = body;

    const log = await prisma.logEntry.create({
      data: {
        userId: session.user.id,
        skillId,
        date: new Date(date),
        durationMinutes: parseInt(durationMinutes),
        type,
        note: note || null,
      },
    });

    return NextResponse.json(log);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create log" }, { status: 500 });
  }
}

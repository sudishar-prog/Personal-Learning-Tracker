import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const skills = await prisma.skill.findMany({
      where: { userId: session.user.id },
      include: {
        logs: {
          select: {
            durationMinutes: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    const skillsWithTotal = skills.map((skill) => ({
      ...skill,
      totalMinutes: skill.logs.reduce((sum, log) => sum + log.durationMinutes, 0),
      logs: undefined,
    }));

    return NextResponse.json(skillsWithTotal);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch skills" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { name, category, status, targetHours, color } = body;

    const skill = await prisma.skill.create({
      data: {
        userId: session.user.id,
        name,
        category,
        status,
        targetHours: targetHours ? parseInt(targetHours) : null,
        color,
      },
    });

    return NextResponse.json(skill);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create skill" }, { status: 500 });
  }
}

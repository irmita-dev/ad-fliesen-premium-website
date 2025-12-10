import { NextResponse } from "next/server";
import { getProjects } from "@/core/usecases/getProjects";

export async function GET() {
  const projects = await getProjects();
  return NextResponse.json(projects, { status: 200 });
}
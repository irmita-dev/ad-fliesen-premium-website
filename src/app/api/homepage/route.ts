import { NextResponse } from "next/server";
import { getHomepageContent } from "@/core/usecases/getHomepageContent";

export async function GET() {
  const content = await getHomepageContent();
  return NextResponse.json(content, { status: 200 });
}
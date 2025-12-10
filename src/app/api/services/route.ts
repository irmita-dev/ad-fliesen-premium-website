import { NextResponse } from "next/server";
import { getServices } from "@/core/usecases/getServices";

export async function GET() {
  const services = await getServices();
  return NextResponse.json(services, { status: 200 });
}
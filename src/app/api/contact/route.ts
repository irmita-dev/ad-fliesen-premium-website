import { NextResponse } from "next/server";
import { submitContactRequest } from "@/core/usecases/submitContactRequest";
import { ContactValidationError } from "@/core/domain/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await submitContactRequest({
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    if (error instanceof ContactValidationError) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Unexpected error." },
      { status: 500 }
    );
  }
}
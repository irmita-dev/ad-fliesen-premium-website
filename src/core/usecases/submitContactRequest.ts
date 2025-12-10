import {
  ContactRequest,
  ContactResult,
  ContactValidationError,
} from "@/core/domain/contact";
import { ConsoleEmailGateway } from "@/infrastructure/email/emailGateway";

const MIN_MESSAGE_LENGTH = 10;

export async function submitContactRequest(
  request: ContactRequest
): Promise<ContactResult> {
  validateContactRequest(request);

  const referenceId = generateReferenceId();
  const emailGateway = new ConsoleEmailGateway();

  await emailGateway.sendContactEmail(request, referenceId);

  return {
    success: true,
    referenceId,
  };
}

function validateContactRequest(request: ContactRequest): void {
  if (!request.name || !request.name.trim()) {
    throw new ContactValidationError("Name is required.");
  }

  if (!request.email || !request.email.trim()) {
    throw new ContactValidationError("Email is required.");
  }

  if (!request.message || request.message.trim().length < MIN_MESSAGE_LENGTH) {
    throw new ContactValidationError("Message is too short.");
  }
}

function generateReferenceId(): string {
  const suffix = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `FLS-${suffix}`;
}
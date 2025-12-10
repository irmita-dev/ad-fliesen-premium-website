import {
  submitContactRequest,
} from "@/core/usecases/submitContactRequest";
import {
  ContactValidationError,
  ContactRequest,
} from "@/core/domain/contact";

describe("submitContactRequest usecase", () => {
  const validRequest: ContactRequest = {
    name: "Max Mustermann",
    email: "max@example.com",
    phone: "+43 660 1234567",
    message: "Ich plane eine Badsanierung in Salzburg.",
  };

  it("returns success and reference id for valid contact request", async () => {
    const result = await submitContactRequest(validRequest);

    expect(result.success).toBe(true);
    expect(result.referenceId).toMatch(/^FLS-/);
  });

  it("throws ContactValidationError when email is missing", async () => {
    const invalid: ContactRequest = { ...validRequest, email: "" };

    await expect(submitContactRequest(invalid)).rejects.toBeInstanceOf(
      ContactValidationError
    );
  });

  it("throws ContactValidationError when message is too short", async () => {
    const invalid: ContactRequest = { ...validRequest, message: "Hi" };

    await expect(submitContactRequest(invalid)).rejects.toBeInstanceOf(
      ContactValidationError
    );
  });
});
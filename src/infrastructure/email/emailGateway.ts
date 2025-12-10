import { ContactRequest } from "@/core/domain/contact";

export interface EmailGateway {
  sendContactEmail(request: ContactRequest, referenceId: string): Promise<void>;
}

export class ConsoleEmailGateway implements EmailGateway {
  async sendContactEmail(request: ContactRequest, referenceId: string): Promise<void> {
    // Minimal stub – lahko kasneje zamenjaš z realnim providerjem (SMTP, SendGrid itd.)
    console.log("CONTACT_REQUEST", { referenceId, ...request });
  }
}
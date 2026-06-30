import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy (Draft)",
};

export default function PrivacyPage() {
  return (
    <section className="py-14 sm:py-16">
      <Container className="max-w-2xl">
        <div className="mb-8 rounded-sm border border-rust/40 bg-rust/10 p-4 text-sm leading-relaxed text-rust-deep">
          <strong>Draft — not yet reviewed by an attorney.</strong> Replace this with a real
          privacy policy reviewed by counsel before collecting personal data at any meaningful
          scale, and before launching in any state with specific privacy-law requirements (e.g.
          Texas&apos;s data privacy and security act).
        </div>

        <h1 className="font-display text-3xl font-extrabold text-ink">Privacy Policy</h1>
        <p className="mt-4 text-ink-soft">
          When you submit a job request or craftsman application, {site.name} collects the
          information you provide directly — name, email, phone, zip code, and job or trade
          details — to contact you about your request and, for craftsmen, to evaluate your
          application.
        </p>
        <p className="mt-4 text-ink-soft">
          We don&apos;t sell personal information to third parties. Information may be shared
          with service providers that help us operate the site (such as email delivery and
          hosting providers) solely to provide the service.
        </p>
        <p className="mt-4 text-ink-soft">
          To ask us to delete your information, email{" "}          <a href={`mailto:${site.supportEmail}`} className="text-rust hover:text-rust-deep">
            {site.supportEmail}
          </a>
          .
        </p>
      </Container>
    </section>
  );
}

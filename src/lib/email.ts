import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const notifyEmail = process.env.LEAD_NOTIFICATION_EMAIL;

const resend = apiKey ? new Resend(apiKey) : null;

/**
 * Sends an internal notification email when a new lead or craftsman
 * application comes in. If RESEND_API_KEY isn't set yet (e.g. local dev,
 * or before you've connected Resend), this silently no-ops instead of
 * failing the request — the lead is already safely saved to the database
 * either way.
 */
export async function notifyNewLead(subject: string, html: string) {
  if (!resend || !notifyEmail) {
    console.log(`[email skipped — no RESEND_API_KEY/LEAD_NOTIFICATION_EMAIL set] ${subject}`);
    return;
  }

  try {
    await resend.emails.send({
      from: "CraftsmanOnDemand <notifications@craftsmanondemand.com>",
      to: notifyEmail,
      subject,
      html,
    });
  } catch (err) {
    // Never let a notification-email failure break the lead submission.
    console.error("Failed to send lead notification email:", err);
  }
}

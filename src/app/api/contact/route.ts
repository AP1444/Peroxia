import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Peroxia Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Inquiry from ${name}${service ? ` — ${service}` : ""}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0f1e; color: #e2e8f0; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="font-size: 24px; font-weight: 800; margin: 0;">
              <span style="background: linear-gradient(135deg, #2563eb, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Peroxia</span>
              <span style="color: #64748b;"> — New Inquiry</span>
            </h1>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 15px;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
            </tr>
            ${phone ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 15px;">${phone}</td>
            </tr>` : ""}
            ${service ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Service</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 15px;">${service}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 24px; padding: 20px; background: #111827; border-radius: 8px; border: 1px solid #1e293b;">
            <p style="font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; margin: 0 0 8px;">Message</p>
            <p style="color: #f1f5f9; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #475569; text-align: center;">
            Sent via Peroxia website contact form
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

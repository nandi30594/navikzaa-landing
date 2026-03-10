import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiting (max 5 requests per IP in 10 minutes)
const rateLimitMap = new Map<string, { count: number; lastRequest: number }>();

const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record) {
        rateLimitMap.set(ip, { count: 1, lastRequest: now });
        return false;
    }

    if (now - record.lastRequest > RATE_LIMIT_WINDOW) {
        rateLimitMap.set(ip, { count: 1, lastRequest: now });
        return false;
    }

    if (record.count >= MAX_REQUESTS) {
        return true;
    }

    record.count += 1;
    record.lastRequest = now;
    return false;
}

export async function POST(req: Request) {
    try {
        const ip = req.headers.get("x-forwarded-for") || "anonymous";
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        const body = await req.json();
        const { name, email, business, message, website } = body;

        // Log the incoming request for debugging
        console.log("Demo Request received:", { name, email, business, website });
        console.log("Environment Check:", {
            EMAIL_USER: process.env.EMAIL_USER ? `${process.env.EMAIL_USER.substring(0, 3)}...` : "MISSING",
            EMAIL_PASS: process.env.EMAIL_PASS ? `${process.env.EMAIL_PASS.substring(0, 3)}...` : "MISSING",
            USER_LENGTH: process.env.EMAIL_USER?.length,
            PASS_LENGTH: process.env.EMAIL_PASS?.length
        });

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || process.env.EMAIL_PASS === "your_password") {
            const missing = !process.env.EMAIL_USER ? "USER" : (!process.env.EMAIL_PASS ? "PASS" : "STILL PLACEHOLDER");
            console.error(`Missing or Invalid credentials: ${missing}`);
            return NextResponse.json(
                { error: "Server configuration error: Missing or invalid email credentials.", debug_missing: missing },
                { status: 500 }
            );
        }

        // Honeypot check
        if (website) {
            return NextResponse.json({ error: "Bot detected." }, { status: 400 });
        }

        // Validation
        if (!name || name.length < 2) {
            return NextResponse.json({ error: "Name is required (min 2 characters)." }, { status: 400 });
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return NextResponse.json({ error: "A valid work email is required." }, { status: 400 });
        }
        if (!business) {
            return NextResponse.json({ error: "Business name is required." }, { status: 400 });
        }
        if (!message || message.length < 10) {
            return NextResponse.json({ error: "Message is required (min 10 characters)." }, { status: 400 });
        }

        // Sanitize basic inputs (Next.js/React handles most XSS, but good to be safe)
        const sanitizedName = name.trim();
        const sanitizedEmail = email.trim().toLowerCase();
        const sanitizedBusiness = business.trim();
        const sanitizedMessage = message.trim();

        // Nodemailer configuration
        const user = (process.env.EMAIL_USER || "").trim();
        const pass = (process.env.EMAIL_PASS || "").trim();

        const transporter = nodemailer.createTransport({
            host: "smtpout.secureserver.net",
            port: 465,
            secure: true,
            auth: {
                user: user,
                pass: pass,
            },
        });

        const mailOptions = {
            from: `"Navikzaa Demo" <${user}>`,
            to: "hello@navikzaa.com",
            subject: "New Demo Request - Navikzaa",
            text: `
Name: ${sanitizedName}
Email: ${sanitizedEmail}
Business: ${sanitizedBusiness}
Message: ${sanitizedMessage}
      `,
            html: `
        <h3>New Demo Request</h3>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Business:</strong> ${sanitizedBusiness}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, "<br>")}</p>
      `,
        };
await transporter.verify();
console.log("SMTP connection successful");
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error: any) {
        console.error("Contact API Full Error:", error);
        return NextResponse.json(
            {
                error: "Failed to send request. Please check the 'details' below.",
                details: error.message || "Unknown error",
                code: error.code,
                command: error.command,
                response: error.response
            },
            { status: 500 }
        );
    }
}

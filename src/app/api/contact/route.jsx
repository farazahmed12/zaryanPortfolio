import { EmailTemplate } from "@/app/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_YFfYSYjh_KKS4BZQHuuUss2mbLFTHRoES");

export async function POST(request) {
  const body = await request.json();
  const { name, email, message, subject } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: [email],
      subject: subject,
      react: EmailTemplate({ firstName: name, message }),
    });

    if (error) {
      console.log("err ==>", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.log("err ==>", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

// re_YFfYSYjh_KKS4BZQHuuUss2mbLFTHRoES

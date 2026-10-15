import { NextResponse } from "next/server";

/**
 * Newsletter signup stub.
 * Does NOT call Resend, does NOT persist emails, does NOT send mail.
 * Wire Resend (or another provider) here later when Steven connects credentials.
 */
export async function POST(request: Request) {
  let email = "";
  try {
    const body = (await request.json()) as { email?: string };
    email = typeof body.email === "string" ? body.email.trim() : "";
  } catch {
    return NextResponse.json(
      {
        ok: false,
        placeholder: true,
        message: "请求格式不对。",
      },
      { status: 400 },
    );
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      {
        ok: false,
        placeholder: true,
        message: "请填写有效邮箱。",
      },
      { status: 400 },
    );
  }

  // Intentionally no Resend / no DB write.
  return NextResponse.json({
    ok: true,
    placeholder: true,
    provider: "none",
    message:
      "订阅功能即将开通：邮箱未保存、未发信。接入 Resend 后才会真正收集名单。",
  });
}

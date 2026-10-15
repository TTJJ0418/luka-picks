"use client";

import { FormEvent, useState } from "react";

type Variant = "home" | "footer";

export function NewsletterSignup({ variant = "home" }: { variant?: Variant }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = (await res.json()) as { message?: string; ok?: boolean };
      setStatus(res.ok ? "ok" : "error");
      setMessage(
        data.message ??
          (res.ok
            ? "订阅功能即将开通，邮箱暂未保存。"
            : "暂时无法提交，请稍后再试。"),
      );
      if (res.ok) setEmail("");
    } catch {
      setStatus("error");
      setMessage("网络异常，请稍后再试。");
    }
  }

  const compact = variant === "footer";

  return (
    <div
      className={
        compact
          ? "w-full max-w-md"
          : "rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-orange-50/40 to-white px-6 py-8 shadow-sm sm:px-8"
      }
    >
      {!compact ? (
        <>
          <p className="text-sm font-medium text-amber-800">邮件简报 · 筹备中</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-stone-900">
            每周一封，中小型犬少踩雷清单
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-stone-600">
            想第一时间收到场景榜更新与 Luka 实测短评？留下邮箱预约。
            <span className="font-medium text-stone-800">
              目前尚未接通发送服务（Resend），提交不会真正发信或入库。
            </span>
          </p>
        </>
      ) : (
        <p className="mb-2 text-sm font-medium text-stone-700">
          预约周报（即将开通）
        </p>
      )}

      <form
        onSubmit={onSubmit}
        className={`mt-4 flex flex-col gap-2 sm:flex-row sm:items-stretch ${compact ? "mt-0" : ""}`}
      >
        <label className="sr-only" htmlFor={`newsletter-email-${variant}`}>
          邮箱
        </label>
        <input
          id={`newsletter-email-${variant}`}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="你的邮箱"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm text-stone-800 outline-none ring-amber-200 placeholder:text-stone-400 focus:ring-2"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-amber-900 px-5 py-2.5 text-sm font-medium text-amber-50 hover:bg-amber-800 disabled:opacity-60"
        >
          {status === "loading" ? "提交中…" : "预约订阅"}
        </button>
      </form>

      {message ? (
        <p
          className={`mt-3 text-sm ${
            status === "ok" ? "text-emerald-800" : "text-red-700"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : compact ? (
        <p className="mt-2 text-xs text-stone-400">
          占位接口 · 未连接 Resend · 不会发信
        </p>
      ) : null}
    </div>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { budgets, services } from "@/lib/data";
import { ArrowUpRight, Check } from "./icons";

const field =
  "mt-2 w-full border-b border-white/15 bg-transparent pb-3 text-lg text-white transition-colors outline-none placeholder:text-white/25 focus:border-accent";
const label = "font-mono text-[11px] tracking-[0.16em] text-white/50 uppercase";
const choice =
  "cursor-pointer rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors select-none hover:border-white/40 has-checked:border-white has-checked:bg-white has-checked:text-black has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-accent";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [name, setName] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setName(String(data.get("name") ?? "").trim());
    setStatus("sending");
    // No backend yet — wire this up to email/CRM before launch.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex min-h-[32rem] flex-col items-start justify-center rounded-3xl border border-line bg-white/[0.02] p-6 md:p-10"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-accent text-black">
          <Check className="size-6" />
        </span>
        <h3 className="mt-8 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
          Баярлалаа{name ? `, ${name}` : ""}!
        </h3>
        <p className="mt-4 max-w-md leading-relaxed text-white/60">
          Таны хүсэлтийг хүлээж авлаа. Манай менежер 24 цагийн дотор тантай
          холбогдож, үнэгүй зөвлөгөө өгнө.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-10 text-sm text-white/60 underline underline-offset-4 hover:text-white"
        >
          Дахин илгээх
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-white/[0.02] p-6 md:p-10"
    >
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Нэр *</span>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Таны нэр"
            className={field}
          />
        </label>
        <label className="block">
          <span className={label}>Утас *</span>
          <input
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="9911 2233"
            className={field}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className={label}>И-мэйл</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.mn"
            className={field}
          />
        </label>
      </div>

      <fieldset className="mt-10">
        <legend className={label}>Сонирхож буй үйлчилгээ</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {services.map((s) => (
            <label key={s.id} className={choice}>
              <input type="checkbox" name="services" value={s.id} className="sr-only" />
              {s.title}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-10">
        <legend className={label}>Төсөв</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {budgets.map((b) => (
            <label key={b} className={choice}>
              <input type="radio" name="budget" value={b} className="sr-only" />
              {b}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-10 block">
        <span className={label}>Төслийн талаар</span>
        <textarea
          name="message"
          rows={3}
          placeholder="Брэнд, зорилго, хугацааны талаар товч бичээрэй"
          className={`${field} resize-none`}
        />
      </label>

      <div className="mt-10 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/40">
          Илгээснээр бид тантай зөвхөн энэ төслийн талаар холбогдоно.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-8 font-medium text-black transition-colors hover:bg-accent disabled:opacity-60"
        >
          {status === "sending" ? "Илгээж байна…" : "Хүсэлт илгээх"}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </form>
  );
}

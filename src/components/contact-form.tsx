"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/dictionaries";
import { services } from "@/lib/data";
import { ArrowRight } from "./icons";
import { Cross } from "./scribbles";
import { labelStyle } from "./ui";

// Styled as a paper brief: ruled lines and boxes you tick by hand.
const field =
  "mt-1 w-full border-b border-ink bg-transparent pt-1 pb-2 text-lg text-ink transition-[border-color,box-shadow] outline-none placeholder:text-ink/30 focus:border-signal focus:shadow-[0_1px_0_0_var(--color-signal)]";
const label = `${labelStyle} text-ink/60`;
const focusRing =
  "has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-signal";

export function ContactForm({
  t,
  serviceCopy,
}: {
  t: Dictionary["form"];
  serviceCopy: Dictionary["services"]["items"];
}) {
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
        className="flex min-h-[34rem] flex-col items-start justify-center bg-paper p-6 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.45)] md:p-12"
      >
        <p className="headline -rotate-6 border-4 border-signal px-4 pt-2 pb-1 text-5xl text-signal md:text-6xl">
          {t.stamp}
        </p>
        <h3 className="mt-10 text-3xl font-semibold tracking-[-0.01em] md:text-4xl">
          {t.thanks}
          {name ? `, ${name}` : ""}!
        </h3>
        <p className="mt-4 max-w-md text-lg leading-snug text-ink/70">{t.sentBody}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-10 font-semibold underline decoration-signal decoration-2 underline-offset-4"
        >
          {t.again}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-paper p-6 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.45)] md:p-10"
    >
      <p className="headline border-b-2 border-ink pb-3 text-4xl">{t.title}</p>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className={label}>{t.name}</span>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder={t.namePlaceholder}
            className={field}
          />
        </label>
        <label className="block">
          <span className={label}>{t.phone}</span>
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
          <span className={label}>{t.email}</span>
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
        <legend className={label}>{t.services}</legend>
        <div className="mt-3 grid gap-x-6 sm:grid-cols-2">
          {services.map((s) => (
            <label
              key={s.id}
              className={`flex cursor-pointer items-center gap-3 py-2 select-none ${focusRing}`}
            >
              <input type="checkbox" name="services" value={s.id} className="sr-only" />
              <span className="relative size-5 shrink-0 border-[1.5px] border-ink">
                <Cross className="scribble scribble-toggle absolute -top-1.5 -left-1 size-7 overflow-visible text-signal" />
              </span>
              {serviceCopy[s.id].title}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-8 block">
        <span className={label}>{t.message}</span>
        <textarea
          name="message"
          rows={4}
          placeholder={t.messagePlaceholder}
          className="mt-1 w-full resize-none bg-[linear-gradient(to_bottom,transparent_calc(2rem-1px),rgb(23_21_18/0.3)_calc(2rem-1px))] bg-local [background-size:100%_2rem] text-lg leading-8 text-ink outline-none placeholder:text-ink/30"
        />
      </label>

      <div className="mt-8 flex sm:justify-end">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex h-14 w-full items-center justify-between gap-8 bg-ink px-6 font-semibold text-paper transition-colors hover:bg-signal hover:text-ink disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? t.sending : t.submit}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}

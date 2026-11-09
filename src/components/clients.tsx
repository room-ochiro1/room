import type { Dictionary } from "@/dictionaries";
import { clients } from "@/lib/data";
import { Label } from "./ui";

// Set like the credits roll: one run of names, slashes in between.
export function Clients({ t }: { t: Dictionary["clients"] }) {
  return (
    <section aria-labelledby="clients-title" className="mt-20 md:mt-32">
      <div className="shell grid gap-6 border-t border-ink pt-4 lg:grid-cols-12 lg:gap-12">
        <Label className="text-ink/60 lg:col-span-3">
          <span id="clients-title">{t.label}</span> ({clients.length})
        </Label>
        <ul className="headline text-[clamp(2.25rem,4.9vw,4.75rem)] leading-[0.95] lg:col-span-9">
          {clients.map((name, i) => (
            <li key={name} className="inline">
              {name}
              {i < clients.length - 1 && (
                <span aria-hidden className="mx-[0.22em] text-signal">
                  /
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

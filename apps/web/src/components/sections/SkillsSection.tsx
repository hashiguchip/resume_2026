import { H2 } from "@/components/ui/H2";
import { TECH_CATEGORY_LABELS, TECH_CATEGORY_ORDER, TECHS, type Tech } from "@/constants/tech";

const GROUPED: { category: (typeof TECH_CATEGORY_ORDER)[number]; items: Tech[] }[] = TECH_CATEGORY_ORDER.map(
  (category) => ({
    category,
    items: TECHS.filter((t) => t.category === category),
  }),
).filter((g) => g.items.length > 0);

export function SkillsSection() {
  return (
    <section id="skills" className="bg-white px-5 pb-10">
      <div className="mx-auto max-w-[1220px]">
        <H2>スキル・技術スタック</H2>
        <div className="rounded border border-neutral-300 bg-white p-5">
          <div className="space-y-3">
            {GROUPED.map((g) => (
              <div key={g.category} className="flex flex-col gap-2 sm:flex-row sm:items-baseline">
                <span className="w-[140px] shrink-0 font-bold text-[13px] text-neutral-900">
                  {TECH_CATEGORY_LABELS[g.category]}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((t) => (
                    <span
                      key={t.id}
                      className="rounded-sm bg-neutral-100 px-2.5 py-1 text-neutral-800 text-xs ring-1 ring-neutral-200"
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

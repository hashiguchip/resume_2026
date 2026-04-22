import { CONTENT } from "../_constants/content";

export function AboutHero() {
  return (
    <section className="px-5 pt-16 pb-10">
      <div className="mb-4 font-mono text-kicker tracking-kicker text-primary-500">{CONTENT.hero.kicker}</div>
      <h1 className="whitespace-pre-line text-heading-large font-black leading-[1.3] tracking-heading text-slate-950 lg:text-[40px]">
        {CONTENT.hero.title}
      </h1>
      <p className="mt-4 whitespace-pre-line text-sm leading-[1.8] text-slate-500">{CONTENT.hero.sub}</p>
    </section>
  );
}

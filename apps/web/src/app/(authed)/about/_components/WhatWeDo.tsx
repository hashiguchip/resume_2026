import { CONTENT } from "../_constants/content";

export function WhatWeDo() {
  return (
    <section className="px-5 py-8">
      <div className="mb-2.5 font-mono text-kicker tracking-kicker text-primary-500">{CONTENT.what.kicker}</div>
      <h2 className="mb-4 whitespace-pre-line text-heading-section font-extrabold tracking-heading text-slate-950">
        {CONTENT.what.title}
      </h2>
      <div className="flex flex-col gap-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-badge bg-primary-50 font-mono text-body-small font-bold text-primary-500">
            01
          </div>
          <div className="mb-1.5 text-sm font-bold text-slate-950">マッチング</div>
          <div className="text-body-small leading-body-compact text-slate-500">
            エンジニアと企業が直接出会える場を提供します。
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-badge bg-primary-50 font-mono text-body-small font-bold text-primary-500">
            02
          </div>
          <div className="mb-1.5 text-sm font-bold text-slate-950">直接契約</div>
          <div className="text-body-small leading-body-compact text-slate-500">
            契約形態・条件交渉・報酬はすべて当事者間で自由に決定。
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-badge bg-primary-50 font-mono text-body-small font-bold text-primary-500">
            03
          </div>
          <div className="mb-1.5 text-sm font-bold text-slate-950">自由な関係</div>
          <div className="text-body-small leading-body-compact text-slate-500">
            間に誰も入らない。対等な関係をそのまま続けられます。
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { showPopover } from "@/libs/global-popover";
import { showDummyPopover } from "@/utils/showDummyPopover";

const comingSoonContent = (
  <>
    <p>現在準備中です 🙏</p>
    <p className="mt-1 text-[#aaa]">もう少々お待ちください！</p>
  </>
);

export function Contact() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    showDummyPopover(e.currentTarget);
  };

  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    showPopover({ content: comingSoonContent, anchor: e.currentTarget });
  };

  return (
    <section id="contact" className="bg-white px-5 py-14">
      <div className="mx-auto max-w-[1220px]">
        <div className="rounded border border-[#ddd] bg-white text-center">
          <div className="border-[#eee] border-b bg-primary-500 px-5 py-4">
            <h2 className="font-bold text-[18px] text-white">応募方法</h2>
          </div>
          <div className="px-5 py-8">
            <p className="mb-6 text-[#555] text-[14px]">
              ご興味をお持ちの方は、下記よりお気軽にお問い合わせください。
              <br />
              書類選考なし・カジュアル面談歓迎です。
            </p>
            <button
              type="button"
              onClick={handleApplyClick}
              className="mb-3 inline-block w-full max-w-sm cursor-pointer rounded bg-primary-500 py-4 font-bold text-[16px] text-white transition hover:bg-primary-700"
            >
              応募フォームへ進む
            </button>
            <p className="mb-6 text-[#999] text-[11px]">※ 応募から面談まで最短即日で対応いたします</p>
            <div className="flex justify-center gap-5 text-[13px]">
              <a href="https://github.com/hashiguchip" className="text-primary-500 underline">
                GitHub
              </a>
              <button type="button" className="cursor-pointer text-primary-500 underline" onClick={handleClick}>
                LinkedIn
              </button>
              <button type="button" className="cursor-pointer text-primary-500 underline" onClick={handleClick}>
                Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

export function PrintButton() {
  return (
    <div className="print-hidden sticky top-0 z-10 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[210mm] items-center justify-between gap-4 px-1 py-3">
        <p className="text-sm leading-6 text-neutral-600">
          인쇄 창에서 대상을 PDF로 저장으로 선택하세요. 여백은 기본값, 머리글과
          바닥글은 끄면 종이에 맞게 저장됩니다.
        </p>
        <button
          type="button"
          onClick={() => window.print()}
          className="shrink-0 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
        >
          PDF로 저장
        </button>
      </div>
    </div>
  );
}

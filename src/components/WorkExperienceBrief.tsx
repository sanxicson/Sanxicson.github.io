export function WorkExperienceBrief() {
  return (
    <section className="flex flex-col mb-2">
      <div className="flex justify-between items-end mb-4">
        <h3 className="text-xs font-bold uppercase text-slate-400 border-b border-slate-200 pb-2 w-full tracking-wider">
          WORK EXPERIENCE
        </h3>
      </div>
      <article className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col transition-colors group hover:border-blue-400">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-slate-800 text-lg">
            Customer Service Associate
          </h4>
          <span className="text-[10px] bg-blue-50 text-blue-600 font-bold px-2 py-0.5 rounded-full border border-blue-100 shrink-0 mt-0.5 tracking-wider uppercase">
            Oct 2021 - May 2026
          </span>
        </div>
        <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-wider">Sutherland Global LTD</p>
        <p className="text-sm text-slate-600 leading-relaxed font-medium">
          Guided new hires through their training, handled a high volume of customer inquiries while maintaining great performance metrics, and helped users resolve various application issues. My day-to-day involved both retail customer support and troubleshooting video app problems.
        </p>
      </article>
    </section>
  );
}

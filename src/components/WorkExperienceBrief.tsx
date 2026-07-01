export function WorkExperienceBrief() {
  return (
    <section className="flex flex-col mb-2">
      <div className="flex justify-between items-end mb-4">
        <h3 className="text-xs font-bold uppercase text-slate-400 border-b border-slate-200 pb-2 w-full tracking-wider">
          WORK EXPERIENCE
        </h3>
      </div>
      <article className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col transition-colors group hover:border-blue-400">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-slate-800 text-lg">
            Customer Service Associate
          </h4>
          <span className="text-[10px] bg-blue-50 text-blue-600 font-bold px-2 py-0.5 rounded-full border border-blue-100 shrink-0 mt-0.5 tracking-wider uppercase">
            Oct 2021 - May 2026
          </span>
        </div>
        <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-wider">Sutherland Global LTD</p>
        <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6">
          Guided new hires through their training, handled a high volume of customer inquiries while maintaining great performance metrics, and helped users resolve various application issues. My day-to-day involved both retail customer support and troubleshooting video app problems.
        </p>
        
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Took on the responsibility of training new hires in June 2025, guiding them until they were fully ready to handle real customer interactions independently.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Received the "Best Performer" award (Nov 2021–Jan 2022 and Aug 2025) for consistently providing high-quality support while working efficiently.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Handled a busy stream of customer chats and emails for a major e-commerce platform, keeping my performance metrics above 87% and always meeting the company's response time goals.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Helped users figure out what was wrong with their accounts or the application, using a step-by-step approach to find the root cause and get them back up and running quickly.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Worked closely with technical teams to document tricky issues and escalate them when necessary, making sure the user's problem was clearly understood by the people fixing the system.
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
}

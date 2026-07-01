import { skills } from "../data";

export function Skills() {
  return (
    <section id="skills" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col flex-1">
      <h3 className="text-xs font-bold uppercase text-slate-400 mb-4 border-b border-slate-100 pb-2 tracking-wider">
        Core Expertise
      </h3>
      <div className="space-y-5">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category}>
            <p className="text-[10px] font-bold text-blue-600 uppercase mb-2 tracking-wider">
              {skillGroup.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 bg-slate-50 text-slate-700 text-[11px] rounded border border-slate-200 font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

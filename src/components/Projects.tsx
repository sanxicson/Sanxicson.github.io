import { projects } from "../data";

export function Projects() {
  return (
    <section id="projects" className="flex flex-col h-full">
      <div className="flex justify-between items-end mb-4">
        <h3 className="text-xs font-bold uppercase text-slate-400 border-b border-slate-200 pb-2 w-full tracking-wider">
          INDEPENDENT TECHNICAL EXPERIENCE/PROJECTS DONE
        </h3>
      </div>

      <div className="flex flex-col gap-4">
        {projects.map((project, index) => {
          return (
            <article
              key={project.title}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-blue-400 flex flex-col transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-slate-800 text-lg pr-4">
                  {project.title}
                </h4>
                <span className="text-[10px] bg-blue-50 text-blue-600 font-bold px-2 py-0.5 rounded-full border border-blue-100 shrink-0 mt-0.5 tracking-wider">
                  PROJECT 0{index + 1}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 text-xs">
                <div className="md:col-span-1">
                  <p className="text-slate-400 font-bold uppercase mb-1.5 text-[9px] tracking-widest">
                    Situation
                  </p>
                  <p className="text-slate-700 font-medium">
                    {project.situation}
                  </p>
                </div>
                <div className="md:col-span-1">
                  <p className="text-slate-400 font-bold uppercase mb-1.5 text-[9px] tracking-widest">
                    Task
                  </p>
                  <p className="text-slate-700 font-medium">
                    {project.task}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-slate-400 font-bold uppercase mb-1.5 text-[9px] tracking-widest">
                    Action & Result
                  </p>
                  <p className="text-slate-600 italic leading-relaxed">
                    <span className="font-bold text-slate-700 not-italic block mb-1">Action:</span>
                    {project.action}
                    <br/><br/>
                    <span className="font-bold text-slate-700 not-italic block mb-1">Result:</span>
                    {project.result}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

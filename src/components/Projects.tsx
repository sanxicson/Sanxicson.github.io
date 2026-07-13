import { projects } from "../data";

export function Projects() {
  // Group projects by category
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <section id="projects" className="flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <h3 className="text-xs font-bold uppercase text-slate-400 border-b border-slate-200 pb-2 w-full tracking-wider">
          INDEPENDENT TECHNICAL EXPERIENCE / PROJECTS DONE
        </h3>
      </div>

      <div className="space-y-8">
        {categories.map((category) => {
          const catProjects = projects.filter((p) => p.category === category);
          return (
            <div key={category} className="space-y-4">
              <h4 className="text-sm font-bold text-slate-800 border-l-2 border-blue-500 pl-2.5 tracking-wide uppercase">
                {category}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {catProjects.map((project) => {
                  const Icon = project.icon;
                  return (
                    <article
                      key={project.title}
                      className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-blue-400 flex gap-4 transition-all group duration-200 hover:shadow-md"
                    >
                      <div className="p-2.5 bg-blue-50 rounded-lg h-fit shrink-0 group-hover:bg-blue-100 transition-colors">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="space-y-1.5">
                        <h5 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h5>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
                          {project.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

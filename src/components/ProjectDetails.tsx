import { motion } from "motion/react";
import { projects } from "../data";
import { ArrowLeft } from "lucide-react";

export function ProjectDetails({ onBack }: { onBack: () => void }) {
  // Group projects by category
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6 flex-1"
    >
      <div className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </button>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Detailed Lab Overviews</h2>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {categories.map((category) => {
          const catProjects = projects.filter((p) => p.category === category);
          return (
            <section key={category} className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800 border-l-4 border-blue-500 pl-3 tracking-wide uppercase">
                {category}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {catProjects.map((project) => {
                  const Icon = project.icon;
                  return (
                    <article key={project.title} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col md:flex-row gap-6">
                      <div className="flex items-start gap-4 md:w-1/3 shrink-0">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900 mb-1">{project.title}</h4>
                          <span className="text-[10px] bg-slate-100 text-slate-600 font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Active Project
                          </span>
                        </div>
                      </div>
                      <div className="md:w-2/3 flex flex-col gap-4">
                        <div>
                          <h5 className="text-xs font-bold uppercase text-slate-400 mb-2 border-b border-slate-100 pb-1 tracking-wider">Implementation & Details</h5>
                          <p className="text-sm text-slate-700 leading-relaxed font-medium">{project.description}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </motion.main>
  );
}

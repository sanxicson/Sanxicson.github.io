import { motion } from "motion/react";
import { projects } from "../data";
import { ArrowLeft } from "lucide-react";

export function ProjectDetails({ onBack }: { onBack: () => void }) {
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
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Detailed Case Studies</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <article key={project.title} className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="w-full md:w-1/3 shrink-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-[10px] bg-blue-50 text-blue-600 font-bold px-2 py-0.5 rounded-full border border-blue-100 tracking-wider">
                    PROJECT 0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{project.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {project.situation}
                </p>
              </div>
              <div className="w-full md:w-2/3 flex flex-col gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400 mb-2 border-b border-slate-100 pb-1 tracking-wider">Task</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{project.task}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400 mb-2 border-b border-slate-100 pb-1 tracking-wider">Action</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{project.action}</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="text-xs font-bold uppercase text-blue-600 mb-2 tracking-wider">Result</h4>
                  <p className="text-sm text-blue-900 font-medium leading-relaxed">{project.result}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </motion.main>
  );
}

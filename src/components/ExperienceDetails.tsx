import { motion } from "motion/react";
import { ArrowLeft, Briefcase } from "lucide-react";

export function ExperienceDetails({ onBack }: { onBack: () => void }) {
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
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Work Experience</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <article className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-[10px] bg-blue-50 text-blue-600 font-bold px-2 py-0.5 rounded-full border border-blue-100 tracking-wider">
                Oct 2021 - May 2026
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Customer Service Associate</h3>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-4">Sutherland Global LTD</p>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Retail Customer Service & Video App Troubleshooting
            </p>
          </div>
          <div className="w-full md:w-2/3 flex flex-col gap-4">
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
          </div>
        </article>
      </div>
    </motion.main>
  );
}

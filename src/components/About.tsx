import { motion } from "motion/react";
import { Terminal, Award, BookOpen } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col">
      <h3 className="text-xs font-bold uppercase text-slate-400 mb-4 border-b border-slate-100 pb-2 tracking-wider">
        About Me
      </h3>
      
      <div className="space-y-3 text-slate-700 text-sm leading-relaxed mb-6 font-medium">
        <p>
          I'm a Google Certified IT Support Professional who enjoys diving into technical issues and figuring out how things work. With hands-on experience in customer service, I know how to explain technical concepts simply and get things fixed efficiently.
        </p>
        <p>
          I focus on applying my troubleshooting skills to maintain reliable IT systems and ensure smooth daily operations. I thrive on continuous learning and adapting to new technical challenges across the industry.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100 rounded-lg">
          <Award className="w-5 h-5 text-blue-600 shrink-0" />
          <div>
            <h4 className="text-slate-800 font-bold text-xs">Google IT Support</h4>
            <p className="text-[10px] text-blue-600 font-mono uppercase font-bold tracking-wider">Professional Certificate</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100 rounded-lg">
          <BookOpen className="w-5 h-5 text-blue-600 shrink-0" />
          <div>
            <h4 className="text-slate-800 font-bold text-xs">Google AI</h4>
            <p className="text-[10px] text-blue-600 font-mono uppercase font-bold tracking-wider">Professional Certificate</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
          <Terminal className="w-5 h-5 text-slate-500 shrink-0" />
          <div>
            <h4 className="text-slate-800 font-bold text-xs">Professional Roles</h4>
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed">IT Support • System Administrator • Technical Support Specialist • OS Troubleshooting Specialist</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100">
        <a 
          href="https://www.credly.com/users/santy-c/badges/credly" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          Verify my credentials on Credly →
        </a>
      </div>
    </section>
  );
}

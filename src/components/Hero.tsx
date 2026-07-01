import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, Mail, Linkedin } from "lucide-react";

interface HeroProps {
  onViewChange?: (view: 'home' | 'projects' | 'experience') => void;
}

export function Hero({ onViewChange }: HeroProps) {
  const [showConnectOptions, setShowConnectOptions] = useState(false);
  const connectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (connectRef.current && !connectRef.current.contains(event.target as Node)) {
        setShowConnectOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-blue-600 font-mono text-[10px] mb-3 tracking-wide uppercase font-bold">
          Professional Overview
        </h2>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4">
          Solving technical problems & <br className="hidden sm:block" />
          <span className="text-slate-500">keeping systems running.</span>
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
          I'm an IT professional with a background in customer service, focused on fixing technical issues and helping users get the most out of their technology.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onViewChange && onViewChange('experience')}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-sm transition-colors cursor-pointer"
          >
            Past Experience
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
          
          <div className="relative" ref={connectRef}>
            <button
              onClick={() => setShowConnectOptions(!showConnectOptions)}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-bold transition-colors border border-slate-200"
            >
              <Mail className="w-3.5 h-3.5" />
              Let's Connect
            </button>
            
            <AnimatePresence>
              {showConnectOptions && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden z-10"
                >
                  <a
                    href="mailto:sanxicson@zohomail.in"
                    className="flex items-center gap-2 px-4 py-3 hover:bg-slate-50 text-sm font-medium text-slate-700 border-b border-slate-100 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-blue-600" />
                    Email Me
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sanxicson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 hover:bg-slate-50 text-sm font-medium text-slate-700 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    LinkedIn
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

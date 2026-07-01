export function Contact() {
  return (
    <footer id="contact" className="mt-4 pt-4 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">Available for Full-Time Roles</span>
        </div>
        <div className="text-[12px] text-slate-500 flex gap-4 font-medium">
          <a href="https://www.linkedin.com/in/sanxicson/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn: /in/sanxicson</a>
        </div>
      </div>
    </footer>
  );
}


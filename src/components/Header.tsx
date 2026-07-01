import { useState } from "react";
import { X } from "lucide-react";

interface HeaderProps {
  onViewChange?: (view: 'home' | 'projects' | 'experience') => void;
}

export function Header({ onViewChange }: HeaderProps) {
  const [isProfileEnlarged, setIsProfileEnlarged] = useState(false);

  return (
    <>
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-slate-200 pb-4 gap-4">
        <div 
          className={`flex items-center gap-3 ${onViewChange ? 'cursor-pointer group' : ''}`}
          onClick={() => onViewChange && onViewChange('home')}
        >
          <div 
            className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-sm shrink-0 ring-2 ring-transparent group-hover:ring-blue-200 transition-all cursor-zoom-in"
            onClick={(e) => {
              e.stopPropagation();
              setIsProfileEnlarged(true);
            }}
          >
            <img 
              src="/profile.png" 
              alt="Santy C" 
              className="w-full h-full object-cover pointer-events-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">SANTY C</h1>
            <p className="text-xs font-mono uppercase tracking-widest text-blue-600">IT Support & SysAdmin</p>
          </div>
        </div>
        <div className="text-left md:text-right flex flex-col justify-center mt-2 md:mt-0">
          <h2 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">Resolving technical issues.</h2>
          <p className="text-sm text-slate-500 font-medium">Keeping systems running smoothly.</p>
        </div>
      </header>

      {isProfileEnlarged && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setIsProfileEnlarged(false)}
        >
          <div 
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src="/profile.png" 
              alt="Santy C" 
              className="w-full h-full object-cover pointer-events-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <button 
              className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-md"
              onClick={() => setIsProfileEnlarged(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

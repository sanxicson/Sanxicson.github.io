/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ProjectDetails } from "./components/ProjectDetails";
import { ExperienceDetails } from "./components/ExperienceDetails";
import { WorkExperienceBrief } from "./components/WorkExperienceBrief";

export default function App() {
  const [view, setView] = useState<'home' | 'projects' | 'experience'>('home');

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 p-4 md:p-6 lg:p-8 flex flex-col gap-6 max-w-[1400px] mx-auto">
      <Header onViewChange={setView} />
      {view === 'home' ? (
        <main className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[400px] xl:w-[450px] flex flex-col gap-6 shrink-0">
            <Hero onViewChange={setView} />
            <About />
            <Skills />
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-6">
            <WorkExperienceBrief />
            <Projects />
          </div>
        </main>
      ) : view === 'experience' ? (
        <ExperienceDetails onBack={() => setView('home')} />
      ) : (
        <ProjectDetails onBack={() => setView('home')} />
      )}
      <Contact />
    </div>
  );
}

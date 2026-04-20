import React from 'react';
import { motion } from 'motion/react';

import { Magnetic } from './Magnetic';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 px-6 container mx-auto text-left lg:px-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full border border-blue-500/30 flex items-center justify-center bg-white/50 backdrop-blur-md">
            <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_12px_#3B82F6]"></div>
          </div>
          <span className="text-sm font-semibold tracking-widest uppercase opacity-60">Метод Василия Алешина</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-sans font-bold leading-none tracking-tight mb-8">
          <span className="block text-slate-900">ВЕРНИТЕ СВОЙ</span>
          <span className="text-6xl md:text-7xl lg:text-9xl bg-linear-to-r from-slate-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent">ПРИРОДНЫЙ ИММУНИТЕТ</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-slate-500 font-normal leading-relaxed mb-12">
          Метод глубокой биометрической перезагрузки дыхательной системы при хронической аллергии и астме.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Magnetic>
            <button className="px-10 py-5 bg-slate-900 text-white font-bold rounded-full shadow-xl shadow-slate-900/20 hover:scale-105 transition-all duration-300">
              Начать диагностику
            </button>
          </Magnetic>
          <Magnetic>
            <button className="px-10 py-5 bg-white text-slate-800 font-bold rounded-full border border-slate-200 hover:bg-slate-50 transition-all duration-300">
              Узнать о методе
            </button>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
};

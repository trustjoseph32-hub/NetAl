/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Fingerprint, 
  Activity, 
  Microscope, 
  Atom, 
  ShieldCheck, 
  Wind, 
  Zap, 
  Heart,
  Baby,
  User,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Hero } from './components/Hero';
import { BioCard } from './components/BioCard';
import { Magnetic } from './components/Magnetic';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-pulse/30 overflow-x-hidden pt-10">
      <div className="grainy-overlay" />
      <BackgroundCanvas />

      {/* Static Blobs from Theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pulse/10 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-neural/10 blur-[120px]"></div>
      </div>

      {/* Decorative Borders */}
      <div className="fixed top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-blue-400/50 to-transparent z-50"></div>
      <div className="fixed bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-emerald-400/50 to-transparent z-50"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/40 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-blue-500/30 flex items-center justify-center bg-white/50 backdrop-blur-md">
              <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_12px_#3B82F6]"></div>
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase opacity-60">Immune Rebirth / Алешин</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 px-6 py-2 bg-white/60 rounded-full border border-white/40 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-medium opacity-50 uppercase tracking-tighter">Live Bio-Sync: Active</span>
            </div>
            <div className="h-4 w-px bg-slate-300/30" />
            <div className="text-xs font-mono opacity-50 uppercase tracking-widest">
              Protocol: v.4.02.Oxygen
            </div>
          </div>

          <button className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all">
            Login
          </button>
        </div>
      </nav>

      <main>
        <Hero />

        {/* Bento Grid Section */}
        <section className="container mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
            
            {/* Adult Hub */}
            <BioCard className="md:col-span-4 lg:col-span-4 row-span-2 group/card" highlightColor="#3B82F6">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-white/80 rounded-2xl shadow-sm">
                    <User className="w-6 h-6 text-neural" />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-500 block">Adult Ecosystem</h3>
                    <p className="text-xl font-semibold text-slate-800">ВЗРОСЛЫМ</p>
                  </div>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-sans font-bold text-slate-800 mb-6 leading-tight">
                  Нейронная перезагрузка <br />
                  <span className="text-neural">клеточной памяти</span>
                </h2>
                
                <p className="text-lg text-slate-500 font-light mb-10 max-w-xl leading-relaxed">
                  Система нейро-синхронизации и восстановление фаз глубокого дыхания. Удаление психосоматических триггеров.
                </p>

                <div className="mt-auto space-y-4 max-w-sm">
                  <div className="space-y-3">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "74%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-blue-500" 
                      />
                    </div>
                    <div className="flex justify-between text-[10px] font-mono font-bold opacity-40 uppercase tracking-widest">
                      <span>Neural Load</span>
                      <span>74% Optimized</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <button className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-slate-900/40">
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </BioCard>

            {/* Child Hub */}
            <BioCard className="md:col-span-4 lg:col-span-2 row-span-2" highlightColor="#F59E0B">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-white/80 rounded-2xl shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-amber-life" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500">Protective Shield</h3>
                    <p className="text-xl font-semibold text-slate-800">ДЕТЯМ</p>
                  </div>
                </div>
                
                <p className="text-sm leading-relaxed text-slate-500 mb-6">
                  Мягкая активация иммунного ответа через игровые механики биоуправления. Безопасно с 4 лет.
                </p>

                <div className="grid grid-cols-4 gap-2 mb-6 mt-auto">
                  <div className="h-12 bg-amber-100/50 rounded-lg flex items-end p-1">
                    <div className="w-full bg-amber-400 rounded-sm" style={{ height: "40%" }}></div>
                  </div>
                  <div className="h-12 bg-amber-100/50 rounded-lg flex items-end p-1">
                    <div className="w-full bg-amber-400 rounded-sm" style={{ height: "70%" }}></div>
                  </div>
                  <div className="h-12 bg-amber-100/50 rounded-lg flex items-end p-1">
                    <div className="w-full bg-amber-400 rounded-sm" style={{ height: "55%" }}></div>
                  </div>
                  <div className="h-12 bg-amber-100/50 rounded-lg flex items-end p-1">
                    <div className="w-full bg-amber-400 rounded-sm" style={{ height: "90%" }}></div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                    <ArrowRight className="w-5 h-5 text-slate-400" />
                  </button>
                </div>
              </div>
            </BioCard>

            {/* Stats Modules */}
            <BioCard className="md:col-span-2 lg:col-span-2" highlightColor="#10B981">
              <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/80 rounded-2xl shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-4xl font-light text-emerald-700">98%</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-emerald-900">Клиническая ремиссия</h3>
                  <p className="text-xs text-emerald-700/60 uppercase tracking-wider font-bold">Средний показатель восстановления</p>
                </div>
              </div>
            </BioCard>

            <BioCard className="md:col-span-2 lg:col-span-2" highlightColor="#3B82F6">
              <div className="flex flex-col">
                <div className="text-[10px] font-bold text-blue-500 mb-1 uppercase tracking-widest">Next Session</div>
                <div className="text-3xl font-light text-slate-800">12 ОКТЯБРЯ</div>
                <div className="text-[10px] opacity-40 uppercase tracking-[0.2em] mt-2 font-bold">Групповой старт</div>
              </div>
            </BioCard>

            <BioCard className="md:col-span-2 lg:col-span-2 bg-slate-900 border-none" highlightColor="#3B82F6">
              <div className="flex flex-col relative overflow-hidden h-full justify-center">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/20 blur-2xl"></div>
                <div className="text-[10px] font-bold text-emerald-400 mb-1 uppercase tracking-widest">Immune Hub Active</div>
                <div className="text-4xl font-semibold text-white">3,421</div>
                <div className="text-[10px] opacity-40 uppercase tracking-[0.2em] mt-1 font-bold text-white">Участников в сети</div>
              </div>
            </BioCard>
            
          </div>
        </section>

        {/* Biometric CTA */}
        <section className="container mx-auto px-6 mb-32">
          <BioCard className="bg-slate-900 border-none group/cta overflow-hidden h-[400px]" highlightColor="white">
            <div className="h-full flex flex-col items-center justify-center text-center relative z-10">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute w-[500px] h-[500px] bg-neural/20 rounded-full blur-[100px]"
              />
              
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 max-w-3xl">
                Готовы к глубокой <br />
                <span className="text-pulse italic">иммунной перезагрузке?</span>
              </h2>
              
              <p className="text-slate-400 max-w-xl mb-10">
                Запишитесь на первичную онлайн-консультацию с экспертом BIOHUB и узнайте, как быстро вы сможете вернуться к активной жизни.
              </p>
              
              <Magnetic>
                <button className="flex items-center gap-3 px-10 py-5 bg-pulse text-white font-bold rounded-full hover:bg-pulse/90 transition-all group/btn">
                  Бесплатная консультация
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </Magnetic>
            </div>
          </BioCard>
        </section>
      </main>

      <footer className="bg-white/30 backdrop-blur-sm border-t border-white/60 py-12">
        <div className="container mx-auto px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-8 items-center">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Explore Protocols</div>
            <div className="flex gap-2">
              <div className="px-4 py-2 bg-white rounded-full text-xs font-bold uppercase tracking-widest text-[#3B82F6] border border-slate-100 shadow-sm">Дыхание</div>
              <div className="px-4 py-2 bg-white rounded-full text-xs font-bold uppercase tracking-widest text-slate-400 border border-slate-100 shadow-sm">Биоритмы</div>
              <div className="px-4 py-2 bg-white rounded-full text-xs font-bold uppercase tracking-widest text-slate-400 border border-slate-100 shadow-sm">Питание</div>
            </div>
          </div>
          
          <div className="flex gap-6 items-center">
            <div className="text-right">
              <div className="text-[10px] font-bold opacity-30 uppercase tracking-widest">System Status</div>
              <div className="text-[11px] font-mono font-bold text-emerald-600">STABLE / ALL SYSTEMS GO</div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <User className="w-6 h-6" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

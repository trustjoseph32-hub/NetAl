import React from 'react';
import { motion } from 'motion/react';

interface BioCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  highlightColor?: string;
}

export const BioCard: React.FC<BioCardProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  highlightColor = "white"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      whileHover={{ scale: 1.01 }}
      className={`relative p-6 glass-organic rounded-[40px] overflow-hidden group/card-wrapper ${className}`}
    >
      {/* Bioluminescent Border */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/card-wrapper:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-[-2px] rounded-[40px] bg-conic-gradient from-transparent via-transparent to-current opacity-20 animate-spin [animation-duration:4s]" 
             style={{ color: highlightColor }}
        />
        <div className="absolute inset-[1px] rounded-[39px] bg-white/10 backdrop-blur-3xl" />
      </div>

      {/* Glossy Reflection */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-linear-to-br from-white/10 to-transparent rotate-12 pointer-events-none" />
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

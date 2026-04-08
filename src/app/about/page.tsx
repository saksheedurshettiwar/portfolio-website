"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const router = useRouter();
  
  return (
    <div className="pt-20 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <AnimatedSection>
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 mb-6 transition-colors"
          >
            <span>←</span> Back
          </button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            About
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed mb-12">
            [Your about content goes here]
          </p>
        </AnimatedSection>
        
        <div className="space-y-8">
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Background
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-2xl">
              [Add your background story here]
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Experience
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-2xl">
              [Add your work experience here]
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Skills
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-2xl">
              [Add your skills here]
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Education
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-2xl">
              [Add your education here]
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

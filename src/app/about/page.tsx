"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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

const tools = ["Figma", "Claude", "Cursor", "Framer", "Jitter", "Notion", "Jira", "OpenCode"];

function ToolsChips() {
  return (
    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
      {tools.map((tool, i) => (
        <motion.span
          key={tool}
          className="text-base text-gray-400 cursor-default"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.08 }}
        >
          {tool}
        </motion.span>
      ))}
    </div>
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
          <p className="text-base md:text-lg text-gray-500 max-w-6xl leading-relaxed mb-12 text-justify">
            I turn messy, complex problems into products people can actually use.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-6xl text-justify">
            I'm a product designer with 5+ years of experience working across B2B SaaS, enterprise software, and healthcare. My background started in engineering, which means I think about systems, constraints, and edge cases as naturally as I think about interfaces.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-6xl mt-8 text-justify">
            Over the years I've worked on products where the stakes were real: clinical workflows, financial decision-making, enterprise tooling used by teams who can't afford confusion. That exposure changed how I design. I don't lead with aesthetics. I lead with understanding.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-6xl mt-8 text-justify">
            My process is deliberate. I spend more time in the problem than most people expect, because I've seen what happens when teams skip that part. I think in flows before frames, systems before screens, and I push back when a brief doesn't hold up.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-6xl mt-8 text-justify">
            I'm at my best in cross-functional teams, working closely with product and engineering from day one, not handing off at the end. The work is better for it, and so are the relationships.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.5}>
          <div className="flex items-center gap-4 mt-12 max-w-6xl">
            <div className="w-[3px] h-12 bg-gray-900 rounded-full"></div>
            <p className="text-base md:text-lg text-gray-900 leading-relaxed font-medium text-justify">
              I see design as a quiet conversation between intent and imagination, one that never really ends, it just evolves.
            </p>
          </div>
        </AnimatedSection>

        {/* Bento Grid */}
        <AnimatedSection delay={0.6}>
          <div className="mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Card 1 - Tools */}
              <motion.div 
                className="group bg-white border border-gray-200 rounded-2xl p-6 min-h-[300px] flex flex-col justify-between overflow-hidden hover:bg-gray-900 hover:border-gray-700"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg font-bold text-gray-900 group-hover:text-white">
                  Tools I can use
                </p>
                <div className="group-hover:text-gray-300">
                  <ToolsChips />
                </div>
              </motion.div>

              {/* Card 2 - Experience */}
              <motion.div 
                className="group bg-white border border-gray-200 rounded-2xl p-6 min-h-[300px] flex items-center justify-center hover:bg-gray-900 hover:border-gray-700"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-white">
                    Designing Tomorrow's
                  </p>
                  <p className="text-2xl font-bold text-gray-900 leading-tight mt-4 group-hover:text-white">
                    Experiences
                  </p>
                </div>
              </motion.div>

              {/* Card 3 - AI First */}
              <motion.div 
                className="group bg-white border border-gray-200 rounded-2xl p-6 min-h-[300px] flex items-center justify-center overflow-hidden hover:bg-gray-900 hover:border-gray-700"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <motion.div
                    className="absolute w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <svg viewBox="0 0 300 300" className="w-full h-full">
                      <defs>
                        <path id="circlePath" d="M 150,150 m -110,0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0" />
                      </defs>
                      <text
                        className="fill-gray-900 group-hover:fill-white transition-colors duration-300"
                        fontSize="16"
                        fontWeight="bold"
                        fontFamily="system-ui, sans-serif"
                        letterSpacing="3"
                      >
                          <textPath href="#circlePath" startOffset="0%">
                            AI FIRST • PRODUCT DESIGNER • B2B SAAS •
                          </textPath>
                      </text>
                    </svg>
                  </motion.div>
                  <motion.div
                    className="w-16 h-16 rounded-full overflow-hidden"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <rect width="24" height="24" rx="12" fill="#1E1E1E"/>
                      <path d="M7.41382 14.4951C7.84607 15.2055 8.46183 15.7914 9.2015 16.1961C9.94117 16.6009 10.7797 16.849 11.6359 16.8437L11.6539 15.6232C11.0136 15.6272 10.3866 15.4702 9.83345 15.1676C9.28033 14.8649 8.81986 14.4267 8.49663 13.8955L7.41382 14.4951Z" fill="white"/>
                      <path d="M11.6335 7.14718C10.9616 7.1136 10.29 7.21992 9.66131 7.45942C9.03261 7.69892 8.4605 8.06637 7.98121 8.53849C7.50192 9.01062 7.1259 9.57714 6.87696 10.2022C6.62803 10.8272 6.51161 11.4971 6.53507 12.1695L7.75973 12.1267C7.74219 11.6239 7.82925 11.123 8.0154 10.6556C8.20155 10.1882 8.48274 9.76454 8.84115 9.41149C9.19957 9.05843 9.62739 8.78365 10.0975 8.60455C10.5677 8.42546 11.0699 8.34595 11.5724 8.37106L11.6335 7.14718Z" fill="white"/>
                      <rect x="6.69238" y="10.9366" width="4.89713" height="1.22428" fill="white"/>
                      <rect x="10.5182" y="10.9366" width="1.14777" height="3.13723" fill="white"/>
                      <path d="M10.4418 7.87613C10.4418 7.47467 10.7672 7.14922 11.1687 7.14922H11.6661V9.59778H10.4418V7.87613Z" fill="white"/>
                      <path d="M12.5288 7.15685C13.7718 7.22876 14.9397 7.77509 15.7916 8.68309C16.6435 9.5911 17.1144 10.7915 17.1069 12.0365C17.0995 13.2816 16.6145 14.4763 15.7518 15.3741C14.8892 16.2719 13.753 16.8043 12.5093 16.8614L12.4913 15.6372C13.4214 15.5945 14.2231 15.1964 14.8682 14.5251C15.5133 13.8537 15.876 12.9603 15.8816 12.0292C15.8871 11.0982 15.535 10.2005 14.898 9.52154C14.2609 8.84253 13.4258 8.43398 12.4963 8.38021L12.5288 7.15685Z" fill="white"/>
                      <path d="M12.4777 7.14825V7.14825C13.1539 7.14825 13.702 7.69638 13.702 8.37253V14.0866H12.4777V7.14825Z" fill="white"/>
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Card 4 - Experience */}
              <motion.div 
                className="group bg-white border border-gray-200 rounded-2xl h-[395px] flex flex-col items-center justify-center hover:bg-gray-900 hover:border-gray-700"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.p 
                  className="text-6xl font-bold text-gray-900"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="group-hover:text-white">5+</span>
                </motion.p>
                <p className="text-base text-gray-500 mt-4 group-hover:text-gray-300">
                  Years of experience
                </p>
              </motion.div>

              {/* Card 5 - Photo */}
              <motion.div 
                className="rounded-2xl h-[395px] overflow-hidden"
                whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/sakshee.png" 
                  alt="Sakshee Durshettiwar" 
                  width={400}
                  height={395}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              {/* Card 6 - Sectors */}
              <motion.div 
                className="group bg-white border border-gray-200 rounded-2xl h-[395px] flex flex-col items-center justify-center hover:bg-gray-900 hover:border-gray-700"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.p 
                  className="text-6xl font-bold text-gray-900"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <span className="group-hover:text-white">6+</span>
                </motion.p>
                <p className="text-base text-gray-500 mt-4 group-hover:text-gray-300">
                  Sectors Navigated
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Design Values */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <AnimatedSection>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-400 border border-gray-200 px-3 py-1 rounded-full mb-6">
            Design Values
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 max-w-6xl">
            My guiding stars as a designer
          </h2>
          <p className="text-base text-gray-500 mb-12 max-w-6xl">
            These aren't rules I follow. They're how I show up for every project, every team, every problem.
          </p>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "I clarify before I create", description: "I don't design until the problem is sharp. Vague briefs make expensive mistakes." },
                { title: "I design for the system, not the screen", description: "Every component fits into something bigger. I think in patterns, not one-off pages." },
                { title: "I own my decisions", description: "Every choice comes with a reason. You'll always know why, not just what." },
                { title: "I flag problems early", description: "I don't save issues for the final review. Problems raised late cost everyone time." },
                { title: "I work with the team, not ahead of it", description: "Eng and product are in the loop from day one. No surprises, no handoff friction." },
                { title: "I let evidence lead", description: "I back decisions with research and data. Gut feel is a starting point, not a conclusion." },
              ].map((value, i) => (
                <motion.div 
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer"
                >
                  <svg className="w-6 h-6 mb-4 text-gray-600" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 5 C55 35, 85 45, 95 50 C85 55, 55 65, 50 95 C45 65, 15 55, 5 50 C15 45, 45 35, 50 5 Z" />
                    <circle cx="75" cy="20" r="6" />
                  </svg>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
        </AnimatedSection>
      </section>
    </div>
  );
}

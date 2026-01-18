'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight, Bot, Smartphone, Code2, Layout, ShieldCheck, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    id: 1,
    category: 'UI/UX Design',
    title: 'Crafting Intuitive Digital Experiences',
    description: 'We do not just design pixels; we design user journeys. Our UI/UX process ensures high conversion rates and seamless navigation for your customers.',
    cta: 'See Design Portfolio',
    icon: <Layout className="text-purple-600" />,
    color: 'bg-purple-100 text-purple-600',
    // Visual: Wireframe Mockup
    visual: (
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl p-6 border border-gray-100">
        <div className="flex gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl">Aa</div>
          <div className="space-y-2">
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
            <div className="h-3 w-20 bg-gray-100 rounded"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="h-24 bg-purple-50 rounded-lg border border-purple-100"></div>
          <div className="h-24 bg-gray-50 rounded-lg border border-gray-100"></div>
        </div>
        <button className="w-full py-3 bg-purple-600 text-white rounded-lg font-medium text-sm">Primary Button</button>
        {/* Floating Badge */}
        <div className="absolute -right-8 top-20 bg-white p-3 rounded-lg shadow-xl border border-gray-100 animate-bounce delay-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-green-500" />
            <span className="text-xs font-bold text-gray-700">User Approved</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    category: 'Mobile Development',
    title: 'High-Performance Mobile Apps',
    description: 'Reach customers on the go with native (iOS/Android) or cross-platform (Flutter/React Native) applications that are fast, responsive, and engaging.',
    cta: 'View Mobile Projects',
    icon: <Smartphone className="text-pink-600" />,
    color: 'bg-pink-100 text-pink-600',
    // Visual: Mobile Phone Mockup
    visual: (
      <div className="w-full max-w-xs mx-auto bg-gray-900 rounded-[2.5rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden h-[400px] relative">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-xl z-10"></div>

        {/* App Header */}
        <div className="bg-pink-600 h-24 w-full rounded-b-3xl pt-10 px-6 flex justify-between items-center text-white">
          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
        </div>

        {/* App Body */}
        <div className="p-4 space-y-4">
          {/* Card 1 */}
          <div className="bg-white p-3 rounded-xl shadow-md flex gap-3 items-center">
            <div className="w-10 h-10 bg-pink-100 rounded-lg shrink-0"></div>
            <div className="space-y-1 w-full">
              <div className="h-2 w-20 bg-gray-200 rounded-full"></div>
              <div className="h-2 w-12 bg-gray-100 rounded-full"></div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-3 rounded-xl shadow-md flex gap-3 items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-lg shrink-0"></div>
            <div className="space-y-1 w-full">
              <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
              <div className="h-2 w-16 bg-gray-100 rounded-full"></div>
            </div>
          </div>
          {/* Chart Area */}
          <div className="bg-gray-50 h-32 rounded-xl border-dashed border-2 border-gray-200 flex items-center justify-center">
            <span className="text-xs text-gray-400">Interactive Chart</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    category: 'Web Development',
    title: 'Robust & Scalable Engineering',
    description: 'From simple landing pages to complex SaaS platforms. We build secure, fast, and SEO-optimized web applications using modern tech stacks.',
    cta: 'View Tech Stack',
    icon: <Code2 className="text-blue-600" />,
    color: 'bg-blue-100 text-blue-600',
    // Visual: Code Editor
    visual: (
      <div className="w-full max-w-md bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-700">
        <div className="bg-slate-800 px-4 py-2 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="p-6 font-mono text-sm">
          <div className="text-purple-400">
            const <span className="text-blue-400">Secha</span> = <span className="text-yellow-400">async</span> () ={'>'} {'{'}
          </div>
          <div className="pl-4 text-slate-300">
            <span className="text-purple-400">await</span> build(<span className="text-green-400">'Next.js'</span>);
          </div>
          <div className="pl-4 text-slate-300">
            <span className="text-purple-400">await</span> deploy(<span className="text-green-400">'Securely'</span>);
          </div>
          <div className="pl-4 text-slate-300">
            <span className="text-purple-400">return</span> <span className="text-green-400">"Success"</span>;
          </div>
          <div className="text-purple-400">{'}'}</div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    category: 'Artificial Intelligence',
    title: 'Smart Automation & AI Solutions',
    description: 'Integrate GenAI, chatbots, and predictive models into your business. We build intelligent systems that automate workflows and personalize user experiences.',
    cta: 'Explore AI Solutions',
    icon: <Bot className="text-orange-600" />,
    color: 'bg-orange-100 text-orange-600',
    // Visual: AI Chat Interface
    visual: (
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Chat Header */}
        <div className="bg-orange-50 px-4 py-3 border-b border-orange-100 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold text-orange-700">Secha AI Assistant</span>
        </div>
        {/* Chat Body */}
        <div className="p-4 space-y-4 h-48 bg-gray-50/50">
          {/* User Bubble */}
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white text-xs py-2 px-4 rounded-l-xl rounded-tr-xl max-w-[80%]">Analyze sales data for Q4.</div>
          </div>
          {/* Bot Bubble */}
          <div className="flex justify-start gap-2">
            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
              <Bot size={14} />
            </div>
            <div className="bg-white border border-gray-200 text-gray-700 text-xs py-2 px-4 rounded-r-xl rounded-tl-xl shadow-sm max-w-[80%]">
              <p className="mb-2">Processing...</p>
              <div className="h-16 w-full bg-orange-50 rounded border border-orange-100 flex items-end justify-between px-2 pb-1 gap-1">
                <div className="w-full bg-orange-300 h-[40%] rounded-t-sm"></div>
                <div className="w-full bg-orange-400 h-[70%] rounded-t-sm"></div>
                <div className="w-full bg-orange-500 h-[50%] rounded-t-sm"></div>
                <div className="w-full bg-orange-600 h-[90%] rounded-t-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    category: 'Cloud Infrastructure',
    title: 'Secure by Design',
    description: 'DevSecOps is at our core. We set up resilient cloud architecture (AWS/GCP) that scales with your traffic while keeping threats at bay.',
    cta: 'Consult on Security',
    icon: <ShieldCheck className="text-teal-600" />,
    color: 'bg-teal-100 text-teal-600',
    // Visual: Server Status
    visual: (
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
          <span className="font-bold text-gray-700 text-sm">Server Status</span>
          <span className="flex items-center gap-1.5 bg-green-100 text-green-700 px-2 py-1 rounded-full text-[10px] font-bold">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            OPERATIONAL
          </span>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Uptime</span>
            <span className="font-mono font-bold">99.99%</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Latency</span>
            <span className="font-mono font-bold">24ms</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-2">
            <div className="bg-teal-500 h-full w-[35%]"></div>
          </div>
          <div className="text-xs text-gray-400 text-right">CPU Usage: 35%</div>
        </div>
      </div>
    ),
  },
];

const Feature = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.feature-section');

      sections.forEach((section: any) => {
        const leftCol = section.querySelector('.feature-text');
        const rightCol = section.querySelector('.feature-visual');

        // Animate Text sliding up
        gsap.from(leftCol, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });

        // Animate Visual scaling in
        gsap.from(rightCol, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          scale: 0.9,
          opacity: 0,
          duration: 1,
          ease: 'back.out(1.7)',
          delay: 0.2,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-blue-50/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        {/* Main Section Header */}
        <div className="max-w-3xl mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">modern businesses.</span>
          </h2>
          <p className="text-lg text-gray-500">We don't just write code; we build digital ecosystems. Explore how our core services can transform your idea into a market-ready product.</p>
        </div>

        {/* Feature Rows */}
        <div className="space-y-32">
          {features.map((feature) => (
            <div key={feature.id} className="feature-section flex flex-col md:flex-row items-center gap-12 md:gap-24">
              {/* Left Column: Text */}
              <div className="feature-text w-full md:w-1/2 space-y-6">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${feature.color} w-fit`}>
                  {feature.icon}
                  {feature.category}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{feature.title}</h3>

                <p className="text-lg text-gray-500 leading-relaxed">{feature.description}</p>

                <button className="group flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                  {feature.cta}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Column: Visual Component */}
              <div className="feature-visual w-full md:w-1/2 flex justify-center md:justify-end">
                {/* Decorative Background Blob */}
                <div className="relative w-full max-w-md">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl -z-10"></div>
                  {feature.visual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;

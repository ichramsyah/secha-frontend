'use client';

import { useLayoutEffect, useRef } from 'react';
import { ArrowRight, Bot, Smartphone, Code2, Layout, ShieldCheck, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    // === VISUAL: UI/UX Wireframe ===
    visual: (
      <div className="ui-bg relative w-full max-w-md bg-white rounded-xl shadow-2xl p-6 border border-gray-100 opacity-0 scale-95">
        <div className="flex gap-4 mb-6">
          <div className="ui-header w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl opacity-0 scale-0">Aa</div>
          <div className="space-y-2">
            <div className="ui-header h-4 w-32 bg-gray-200 rounded opacity-0 -translate-x-4"></div>
            <div className="ui-header h-3 w-20 bg-gray-100 rounded opacity-0 -translate-x-4"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="ui-box h-24 bg-purple-50 rounded-lg border border-purple-100 opacity-0 scale-90"></div>
          <div className="ui-box h-24 bg-gray-50 rounded-lg border border-gray-100 opacity-0 scale-90"></div>
        </div>
        <div className="ui-btn w-full py-3 bg-purple-600 text-white rounded-lg font-medium text-sm text-center opacity-0 translate-y-4">Primary Button</div>
        <div className="ui-badge absolute -right-8 top-20 bg-white p-3 rounded-lg shadow-xl border border-gray-100 opacity-0 scale-0 origin-bottom-left">
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
    // === VISUAL: Mobile Phone ===
    visual: (
      <div className="mobile-frame w-full max-w-xs mx-auto bg-gray-900 rounded-[2.5rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden h-[400px] relative opacity-0 translate-y-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-xl z-10"></div>
        <div className="mobile-header bg-pink-600 h-24 w-full rounded-b-3xl pt-10 px-6 flex justify-between items-center text-white opacity-0 -translate-y-full">
          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
        </div>
        <div className="p-4 space-y-4">
          <div className="mobile-card bg-white p-3 rounded-xl shadow-md flex gap-3 items-center opacity-0 translate-y-8">
            <div className="w-10 h-10 bg-pink-100 rounded-lg shrink-0"></div>
            <div className="space-y-1 w-full">
              <div className="h-2 w-20 bg-gray-200 rounded-full"></div>
              <div className="h-2 w-12 bg-gray-100 rounded-full"></div>
            </div>
          </div>
          <div className="mobile-card bg-white p-3 rounded-xl shadow-md flex gap-3 items-center opacity-0 translate-y-8">
            <div className="w-10 h-10 bg-blue-100 rounded-lg shrink-0"></div>
            <div className="space-y-1 w-full">
              <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
              <div className="h-2 w-16 bg-gray-100 rounded-full"></div>
            </div>
          </div>
          <div className="mobile-card bg-gray-50 h-32 rounded-xl border-dashed border-2 border-gray-200 flex items-center justify-center opacity-0 scale-90">
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
    // === VISUAL: Code Editor ===
    visual: (
      <div className="code-bg w-full max-w-md bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-700 opacity-0 scale-95">
        <div className="bg-slate-800 px-4 py-2 flex gap-2">
          <div className="code-dot w-3 h-3 rounded-full bg-red-500 opacity-0 scale-0"></div>
          <div className="code-dot w-3 h-3 rounded-full bg-yellow-500 opacity-0 scale-0"></div>
          <div className="code-dot w-3 h-3 rounded-full bg-green-500 opacity-0 scale-0"></div>
        </div>
        <div className="p-6 font-mono text-sm space-y-1">
          <div className="code-line text-purple-400 opacity-0 -translate-x-4">
            const <span className="text-blue-400">Secha</span> = <span className="text-yellow-400">async</span> () ={'>'} {'{'}
          </div>
          <div className="code-line pl-4 text-slate-300 opacity-0 -translate-x-4">
            <span className="text-purple-400">await</span> build(<span className="text-green-400">'Next.js'</span>);
          </div>
          <div className="code-line pl-4 text-slate-300 opacity-0 -translate-x-4">
            <span className="text-purple-400">await</span> deploy(<span className="text-green-400">'Securely'</span>);
          </div>
          <div className="code-line pl-4 text-slate-300 opacity-0 -translate-x-4">
            <span className="text-purple-400">return</span> <span className="text-green-400">"Success"</span>;
          </div>
          <div className="code-line text-purple-400 opacity-0 -translate-x-4">{'}'}</div>
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
    // === VISUAL: AI Chat ===
    visual: (
      <div className="ai-bg w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 opacity-0 translate-y-4">
        <div className="ai-header bg-orange-50 px-4 py-3 border-b border-orange-100 flex items-center gap-2 opacity-0">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold text-orange-700">Secha AI Assistant</span>
        </div>
        <div className="p-4 space-y-4 h-48 bg-gray-50/50">
          <div className="flex justify-end">
            <div className="ai-msg-user bg-blue-600 text-white text-xs py-2 px-4 rounded-l-xl rounded-tr-xl max-w-[80%] opacity-0 translate-x-4">Analyze sales data for Q4.</div>
          </div>
          <div className="flex justify-start gap-2">
            <div className="ai-bot-icon w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 opacity-0 scale-0">
              <Bot size={14} />
            </div>
            <div className="ai-msg-bot bg-white border border-gray-200 text-gray-700 text-xs py-2 px-4 rounded-r-xl rounded-tl-xl shadow-sm max-w-[80%] opacity-0 -translate-x-4">
              <p className="mb-2">Processing...</p>
              <div className="h-16 w-full bg-orange-50 rounded border border-orange-100 flex items-end justify-between px-2 pb-1 gap-1">
                <div className="ai-bar w-full bg-orange-300 h-[10%] rounded-t-sm"></div>
                <div className="ai-bar w-full bg-orange-400 h-[10%] rounded-t-sm"></div>
                <div className="ai-bar w-full bg-orange-500 h-[10%] rounded-t-sm"></div>
                <div className="ai-bar w-full bg-orange-600 h-[10%] rounded-t-sm"></div>
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
    // === VISUAL: Server Status ===
    visual: (
      <div className="cloud-bg w-full max-w-md bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden opacity-0 scale-95">
        <div className="cloud-header p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center opacity-0">
          <span className="font-bold text-gray-700 text-sm">Server Status</span>
          <span className="flex items-center gap-1.5 bg-green-100 text-green-700 px-2 py-1 rounded-full text-[10px] font-bold">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            OPERATIONAL
          </span>
        </div>
        <div className="p-4 space-y-3">
          <div className="cloud-row flex justify-between items-center text-sm opacity-0 -translate-x-4">
            <span className="text-gray-500">Uptime</span>
            <span className="font-mono font-bold">99.99%</span>
          </div>
          <div className="cloud-row flex justify-between items-center text-sm opacity-0 -translate-x-4">
            <span className="text-gray-500">Latency</span>
            <span className="font-mono font-bold">24ms</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-2">
            <div className="cloud-progress bg-teal-500 h-full w-[0%]"></div>
          </div>
          <div className="cloud-text text-xs text-gray-400 text-right opacity-0">CPU Usage: 35%</div>
        </div>
      </div>
    ),
  },
];

const Feature = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const sections = gsap.utils.toArray('.desktop-content-section') as Element[];
      const visuals = gsap.utils.toArray('.desktop-visual-item') as HTMLElement[];

      // --- INITIAL SETUP ---
      // 1. Hide all visuals initially
      gsap.set(visuals, { autoAlpha: 0, scale: 0.95 });
      // 2. Make the FIRST visual visible immediately so there's no gap at the start
      if (visuals[0]) {
        gsap.set(visuals[0], { autoAlpha: 1, scale: 1 });
      }

      sections.forEach((section: any, index) => {
        const visualContainer = visuals[index];

        // ----------------------------------------------------
        // 1. CROSSFADE VISIBILITY LOGIC (Fix for "Disappearing too quickly")
        // ----------------------------------------------------
        // Instead of hiding on leave, we animate the CURRENT one In,
        // and the PREVIOUS one Out manually.

        ScrollTrigger.create({
          trigger: section,
          start: 'top 60%', // Trigger slightly earlier for smoother transition
          end: 'bottom 60%',

          // On Enter (Scrolling Down): Show Current, Hide Previous
          onEnter: () => {
            // Show current
            gsap.to(visualContainer, { autoAlpha: 1, scale: 1, duration: 0.5, overwrite: 'auto' });
            // Hide previous (if exists)
            if (index > 0) {
              gsap.to(visuals[index - 1], { autoAlpha: 0, scale: 0.95, duration: 0.5, overwrite: 'auto' });
            }
          },

          // On Leave Back (Scrolling Up): Hide Current, Show Previous
          onLeaveBack: () => {
            // Hide current
            gsap.to(visualContainer, { autoAlpha: 0, scale: 0.95, duration: 0.5, overwrite: 'auto' });
            // Show previous (if exists)
            if (index > 0) {
              gsap.to(visuals[index - 1], { autoAlpha: 1, scale: 1, duration: 0.5, overwrite: 'auto' });
            }
          },
        });

        // ----------------------------------------------------
        // 2. DETAILED ANIMATIONS (Scrub Logic - Unchanged)
        // ----------------------------------------------------
        // This triggers the internal animations (dots, lines, graphs)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        });

        // CASE 0: UI/UX DESIGN
        if (index === 0) {
          const bg = visualContainer.querySelector('.ui-bg');
          const header = visualContainer.querySelectorAll('.ui-header');
          const boxes = visualContainer.querySelectorAll('.ui-box');
          const btn = visualContainer.querySelector('.ui-btn');
          const badge = visualContainer.querySelector('.ui-badge');

          tl.to(bg, { opacity: 1, scale: 1, duration: 0.4 })
            .to(header, { opacity: 1, scale: 1, x: 0, stagger: 0.1, duration: 0.3 })
            .to(boxes, { opacity: 1, scale: 1, stagger: 0.1, duration: 0.3 })
            .to(btn, { opacity: 1, y: 0, duration: 0.3 })
            .to(badge, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.7)' });
        }

        // CASE 1: MOBILE APP
        else if (index === 1) {
          const frame = visualContainer.querySelector('.mobile-frame');
          const header = visualContainer.querySelector('.mobile-header');
          const cards = visualContainer.querySelectorAll('.mobile-card');

          tl.to(frame, { opacity: 1, y: 0, duration: 0.5 }).to(header, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2').to(cards, { opacity: 1, y: 0, scale: 1, stagger: 0.2, duration: 0.5 }, '-=0.2');
        }

        // CASE 2: WEB DEVELOPMENT (Code Editor)
        else if (index === 2) {
          const bg = visualContainer.querySelector('.code-bg');
          const dots = visualContainer.querySelectorAll('.code-dot');
          const lines = visualContainer.querySelectorAll('.code-line');

          tl.to(bg, { opacity: 1, scale: 1, duration: 0.4 }).to(dots, { opacity: 1, scale: 1, stagger: 0.1, duration: 0.3 }).to(lines, { opacity: 1, x: 0, stagger: 0.1, duration: 0.5 }, '-=0.2');
        }

        // CASE 3: ARTIFICIAL INTELLIGENCE
        else if (index === 3) {
          const bg = visualContainer.querySelector('.ai-bg');
          const header = visualContainer.querySelector('.ai-header');
          const userMsg = visualContainer.querySelector('.ai-msg-user');
          const botIcon = visualContainer.querySelector('.ai-bot-icon');
          const botMsg = visualContainer.querySelector('.ai-msg-bot');
          const bars = visualContainer.querySelectorAll('.ai-bar');

          tl.to(bg, { opacity: 1, y: 0, duration: 0.4 })
            .to(header, { opacity: 1, duration: 0.3 })
            .to(userMsg, { opacity: 1, x: 0, duration: 0.4 })
            .to(botIcon, { opacity: 1, scale: 1, duration: 0.3 })
            .to(botMsg, { opacity: 1, x: 0, duration: 0.4 })
            .to(bars, { height: (i) => [40, 70, 50, 90][i] + '%', duration: 0.5, stagger: 0.1 }, '-=0.2');
        }

        // CASE 4: CLOUD INFRASTRUCTURE
        else if (index === 4) {
          const bg = visualContainer.querySelector('.cloud-bg');
          const header = visualContainer.querySelector('.cloud-header');
          const rows = visualContainer.querySelectorAll('.cloud-row');
          const bar = visualContainer.querySelector('.cloud-progress');
          const text = visualContainer.querySelector('.cloud-text');

          tl.to(bg, { opacity: 1, scale: 1, duration: 0.4 })
            .to(header, { opacity: 1, duration: 0.3 })
            .to(rows, { opacity: 1, x: 0, stagger: 0.1, duration: 0.4 })
            .to(bar, { width: '35%', duration: 0.6, ease: 'power2.out' })
            .to(text, { opacity: 1, duration: 0.3 }, '-=0.3');
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-blue-50/30">
      {/* MOBILE VIEW (Original Layout) */}
      <div className="md:hidden max-w-7xl mx-auto md:px-4 px-8 py-24 space-y-30">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">modern businesses.</span>
          </h2>
        </div>
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col gap-8">
            <div className="space-y-4">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${feature.color} w-fit`}>
                {feature.icon}
                {feature.category}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
              <button className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                {feature.cta} <ArrowRight size={16} />
              </button>
            </div>
            <div className="w-full flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl -z-10"></div>
                {/* Mobile Visibility Fix */}
                <div className="opacity-100 visible [&_*]:opacity-100 [&_*]:scale-100 [&_*]:translate-x-0 [&_*]:translate-y-0">{feature.visual}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 lg:px-8 py-0 relative border-2 border-dashed border-t-0 border-b-0 border-gray-200">
        {/* Left Column: Scrolling Text */}
        <div className="w-1/2 relative z-10">
          <div className="space-y-[80vh] pb-[10vh]">
            {features.map((feature) => (
              <div key={feature.id} className="desktop-content-section min-h-[100vh] flex flex-col justify-center space-y-6 pr-12">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${feature.color} w-fit`}>
                  {feature.icon}
                  {feature.category}
                </div>
                <h3 className="text-5xl font-bold text-gray-900 leading-tight">{feature.title}</h3>
                <p className="text-lg text-gray-500 leading-relaxed">{feature.description}</p>
                <button className="group flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                  {feature.cta}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Pinned Visuals */}
        <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl -z-10"></div>

            {features.map((feature, index) => (
              <div key={feature.id} className="desktop-visual-item absolute inset-0 flex items-center justify-center">
                {feature.visual}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

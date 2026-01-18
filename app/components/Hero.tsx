import { ArrowRight, Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full min-h-[1000px] bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-400 overflow-hidden">
      {/* Background Decor (Optional glow) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 w-fit">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider">Powered by AI</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Build, Secure, <br className="hidden md:block" />
            and Scale Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">Digital Ideas.</span>
          </h1>

          {/* Subtext */}
          <p className="text-blue-50 text-lg md:text-xl max-w-lg leading-relaxed">
            Secha provides end-to-end services for your digital needs, from stunning UI/UX design and responsive website development to machine learning integration and secure cloud infrastructure.
          </p>

          {/* CTA Input Group */}
          <div className="bg-white p-2 rounded-full max-w-md flex items-center shadow-2xl transform transition hover:scale-105 duration-300">
            <input type="text" placeholder="Hello There" className="flex-grow bg-transparent px-6 text-gray-700 placeholder-gray-400 focus:outline-none" disabled />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition">
              Start Now <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Content - CSS Mockups */}
        <div className="relative hidden md:block h-[600px] ml-10">
          {/* Frosted Glass Background Box */}
          <div className="absolute top-15 right-[-125px] w-[130%] h-[102%] bg-white/20 backdrop-blur-xl rounded-[4rem] -z-10 transform translate-x-24 -translate-y-16 border border-white/30 shadow-xl">
            <div className="flex items-center gap-2 p-4 absolute top-5 left-10">
              <img src="./images/icon.png" className="w-[26px]" alt="" />
              <span className="font-bold text-white text-3xl">Secha</span>
            </div>
          </div>

          {/* Mockup 1: Dashboard Card (Back Layer) */}
          <div className="absolute top-10 right-[-150px] bg-white rounded-xl p-6 w-96 z-10 transform rotate-1 ">
            {/* Search Bar Header */}
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-4">
              <Search className="text-gray-400" size={20} />
              <div className="h-4 w-32 bg-gray-100 rounded-full"></div>
            </div>

            <h3 className="font-bold text-gray-800 mb-4">Build Projects</h3>

            {/* 2x2 Grid Layout matching the reference image */}
            <div className="grid grid-cols-2 gap-3">
              {/* Project Item 1 */}
              <div className="bg-white border border-gray-100 p-2.5 rounded-lg flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gray-200 rounded-md shrink-0"></div>
                <div className="w-full space-y-1.5">
                  <div className="h-2 w-full bg-[#5bb5c3] rounded-full"></div> {/* Teal Bar */}
                  <div className="h-2 w-2/3 bg-gray-200 rounded-full"></div> {/* Gray Bar */}
                </div>
              </div>

              {/* Project Item 2 */}
              <div className="bg-white border border-gray-100 p-2.5 rounded-lg flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gray-200 rounded-md shrink-0"></div>
                <div className="w-full space-y-1.5">
                  <div className="h-2 w-full bg-[#5bb5c3] rounded-full"></div>
                  <div className="h-2 w-2/3 bg-gray-200 rounded-full"></div>
                </div>
              </div>

              {/* Project Item 3 */}
              <div className="bg-white border border-gray-100 p-2.5 rounded-lg flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gray-200 rounded-md shrink-0"></div>
                <div className="w-full space-y-1.5">
                  <div className="h-2 w-full bg-[#5bb5c3] rounded-full"></div>
                  <div className="h-2 w-2/3 bg-gray-200 rounded-full"></div>
                </div>
              </div>

              {/* Project Item 4 */}
              <div className="bg-white border border-gray-100 p-2.5 rounded-lg flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gray-200 rounded-md shrink-0"></div>
                <div className="w-full space-y-1.5">
                  <div className="h-2 w-full bg-[#5bb5c3] rounded-full"></div>
                  <div className="h-2 w-2/3 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mockup 2: Graph Card (Bottom Layer) */}
          <div className="absolute bottom-8 right-[-110px] bg-white rounded-xl p-6 w-85 z-20 rotate-[-1deg]">
            <h3 className="font-bold text-gray-800 mb-4">Evaluate</h3>

            {/* Chart Container */}
            <div className="relative h-32 w-full">
              {/* 1. Background Grid (New) - Creates the graph paper look */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className={`border-gray-50 ${i < 18 ? 'border-b' : ''} ${(i + 1) % 6 !== 0 ? 'border-r' : ''}`}></div>
                ))}
              </div>

              {/* 2. CSS Line Chart */}
              <svg className="absolute bottom-0 left-0 w-full h-full" overflow="visible" preserveAspectRatio="none">
                {/* The Line (Teal color #5bb5c3 to match Build Projects) */}
                <path d="M0 100 L 50 70 L 100 80 L 150 40 L 200 50 L 250 20 L 300 10" fill="none" stroke="#5bb5c3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                {/* The Gradient Fill Area */}
                <path d="M0 100 L 50 70 L 100 80 L 150 40 L 200 50 L 250 20 L 300 10 V 130 H 0 Z" fill="url(#tealGradient)" opacity="0.2" />

                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="tealGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#5bb5c3" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Optional: Axis Labels (Simplified) */}
              <div className="absolute -left-4 top-0 h-full flex flex-col justify-between text-[8px] text-gray-300 font-medium">
                <span>100</span>
                <span>50</span>
                <span>0</span>
              </div>
            </div>
          </div>

          {/* Mockup 3: Mobile Phone (Front Layer) */}
          <div className="absolute top-24 left-0 bg-white border-[8px] border-gray-100 rounded-[2.5rem] shadow-2xl w-72 h-[550px] z-30 overflow-hidden">
            {/* Phone Content Scrollable Container */}
            <div className="bg-gray-50 h-full overflow-y-auto scrollbar-hide relative leading-tight">
              {/* Custom Teal Curved Header */}
              <div className="bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 p-5 pt-6 pb-40 rounded-b-[2.5rem] flex items-center gap-2 absolute top-0 w-full z-10">
                <img src="./images/icon.png" className="w-[20px]" alt="" />
                <span className="font-bold text-white text-lg">Secha</span>
              </div>

              {/* Main Content Body underneath header */}
              <div className="mt-13 p-4 relative z-10">
                {/* --- MAIN ILLUSTRATION PLACEHOLDER --- */}

                <div className="w-full h-44 bg-white rounded-2xl mb-6 flex items-center justify-center  text-gray-400 text-xs font-medium text-center p-3">
                  <img src="./images/heroo.png" className="w-[200px]" alt="" />
                </div>

                {/* Headline */}
                <h4 className="font-extrabold text-[#0e4f61] text-xl leading-tight mb-2">
                  Grow Your Digital Business! <br /> Explore Services
                </h4>

                {/* 3-Column Services Grid */}
                <div className="grid grid-cols-3 gap-2 mt-6 mb-6">
                  {/* Card 1: UI/UX */}
                  <div className="bg-white p-2 pb-3 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] flex flex-col items-center text-center">
                    {/* Placeholder for small card illustration */}
                    <div className="h-8 w-full mb-2">
                      <img src="./images/uiux.JPG" alt="" />
                    </div>
                    <span className="text-[9px] font-bold text-[#0e4f61] leading-tight">UI/UX</span>
                  </div>
                  {/* Card 2: Web Dev */}
                  <div className="bg-white p-2 pb-3 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] flex flex-col items-center text-center">
                    <div className="h-8 w-full   mb-2">
                      {' '}
                      <img src="./images/webdev.JPG" alt="" />
                    </div>
                    <span className="text-[9px] font-bold text-[#0e4f61] leading-tight">Web</span>
                  </div>
                  {/* Card 3: Cloud */}
                  <div className="bg-white p-2 pb-3 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] flex flex-col items-center text-center">
                    <div className="h-8 w-full   mb-2">
                      {' '}
                      <img src="./images/cloud.JPG" alt="" />
                    </div>
                    <span className="text-[9px] font-bold text-[#0e4f61] leading-tight">Cloud</span>
                  </div>
                  {/* Card 4: Mobile */}
                  <div className="bg-white p-2 pb-3 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] flex flex-col items-center text-center">
                    <div className="h-8 w-full flex items-center justify-center mb-2">
                      {' '}
                      <img src="./images/mobile.JPG" className="h-8 w-12" alt="" />
                    </div>
                    <span className="text-[9px] font-bold text-[#0e4f61] leading-tight">Mobile</span>
                  </div>
                  {/* Card 5: ML */}
                  <div className="bg-white p-2 pb-3 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] flex flex-col items-center text-center">
                    <div className="h-8 w-full mb-2">
                      {' '}
                      <img src="./images/ml.JPG" className="h-8" alt="" />
                    </div>
                    <span className="text-[9px] font-bold text-[#0e4f61] leading-tight">ML</span>
                  </div>
                  {/* Card 6: AI */}
                  <div className="bg-white p-2 pb-3 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] flex flex-col items-center text-center">
                    <div className="h-8 w-full mb-2">
                      {' '}
                      <img src="./images/ai.JPG" className="h-8" alt="" />
                    </div>
                    <span className="text-[9px] font-bold text-[#0e4f61] leading-tight">AI</span>
                  </div>
                </div>

                {/* Recent Projects Section */}
                <h5 className="font-bold text-[#0e4f61] text-sm mb-3">Recent Projects</h5>
                <div className="flex gap-3 overflow-hidden mb-6 relative h-20">
                  {/* Project Card Placeholders showing just the top part */}
                  <div className="bg-white rounded-t-xl shadow-sm w-28 h-full flex-shrink-0 border-t border-l border-r border-gray-100"></div>
                  <div className="bg-white rounded-t-xl shadow-sm w-28 h-full flex-shrink-0 border-t border-l border-r border-gray-100"></div>
                  <div className="bg-white rounded-t-xl shadow-sm w-28 h-full flex-shrink-0 border-t border-l border-r border-gray-100"></div>
                  {/* Gradient fade at bottom of projects to show cut-off */}
                  <div className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-gray-50 to-transparent"></div>
                </div>

                {/* Main CTA Button */}
                <button className="w-full bg-[#087ea4] hover:bg-[#066a8a] transition text-white py-2 rounded-lg text-sm shadow-md">View All Service</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Wave Separator - Flipped vertically with -scale-y-100 */}
      <div className="absolute bottom-[-2px] w-full leading-none z-0 -scale-y-100">
        <svg className="relative block w-full h-16 md:h-32" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </div>
  );
}

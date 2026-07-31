'use client';

import Image from 'next/image';
import SearchResult from '@/components/SearchResult';

export default function MePage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl pt-2">
      
      {/* Top Entity Info */}
      <div className="flex flex-col mb-1">
        <h1 className="text-[2.5rem] text-[var(--text-main)] font-normal leading-tight font-[var(--font-inter)]">
          Dhakshinesh S T
        </h1>
        <div className="text-[14px] text-[var(--text-muted)] mt-1 flex items-center gap-2">
          <span className="border border-[var(--border-color)] px-2 py-0.5 rounded text-[12px] font-medium text-[var(--text-main)]">Mechatronics</span>
          <span>2024-2028</span>
          <span>•</span>
          <span>Kumaraguru College of Technology</span>
        </div>
      </div>

      {/* Main Grid: 3 Columns */}
      <div className="flex flex-col md:flex-row gap-3 h-auto md:h-[280px]">
        
        {/* Column 1: Images Grid */}
        <div className="flex flex-1 gap-1 rounded-[20px] overflow-hidden h-[280px]">
          {/* Main Image Placeholder */}
          <div className="w-full relative group cursor-pointer bg-[var(--bg-hover)] flex items-center justify-center border border-[var(--border-color)]">
             <span className="text-[var(--text-muted)] text-sm">Main Image Placeholder</span>
          </div>
        </div>

        {/* Column 2: Academics Card (Mimicking "Virat on X") */}
        <div className="w-full md:w-[280px] h-[280px] border border-[var(--border-color)] rounded-[20px] overflow-hidden flex flex-col bg-[var(--bg-panel)] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          {/* Top Image Placeholder */}
          <div className="h-[170px] w-full relative group overflow-hidden bg-[var(--bg-hover)] border-b border-[var(--border-color)] flex items-center justify-center">
             <Image src="/kct-profile.png" alt="Dhakshinesh KCT" fill className="object-cover object-[50%_25%]" priority />
          </div>
          
          {/* Bottom Info Section */}
          <div className="flex-1 p-4 flex flex-col gap-2 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-[#ea4335] rounded-full flex items-center justify-center text-white text-[9px] font-bold">KCT</div>
              <h2 className="text-[14px] font-medium text-[var(--text-main)]">Academics</h2>
            </div>
            <p className="text-[13px] text-[var(--text-muted)] line-clamp-2">
              Currently in 3rd year. Current CGPA stands at 7.8 / 10 at Kumaraguru College of Technology.
            </p>
          </div>
        </div>

        {/* Column 3: Age & Info Cards */}
        <div className="w-full md:w-[320px] h-[280px] flex flex-col gap-3">
          {/* Top Row: Two small cards */}
          <div className="flex gap-3 h-[134px]">
            {/* Age Card */}
            <div className="flex-1 flex flex-col justify-center p-4 bg-[var(--bg-panel)] border border-[var(--border-color)] rounded-[20px] hover:shadow-md transition-shadow cursor-pointer">
              <span className="text-[13px] text-[var(--text-main)] mb-1">Age</span>
              <span className="text-[18px] text-[var(--text-main)] leading-tight mb-1">19 years</span>
              <span className="text-[13px] text-[var(--text-muted)]">21 Aug 2006</span>
            </div>
            {/* Location Card */}
            <div className="flex-1 flex flex-col justify-center p-4 bg-[var(--bg-panel)] border border-[var(--border-color)] rounded-[20px] hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[13px] text-[var(--text-main)]">Location</span>
                <span className="text-[13px] text-[var(--text-muted)]">&rsaquo;</span>
              </div>
              <span className="text-[16px] text-[var(--text-main)] leading-tight mb-1">Coimbatore, Tamil Nadu</span>
            </div>
          </div>
          
          {/* Bottom Row: Wide image placeholder */}
          <div className="w-full h-[134px] relative group cursor-pointer overflow-hidden bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-[20px] flex items-center justify-center hover:shadow-md transition-shadow">
             <span className="text-[var(--text-muted)] text-sm">Image Placeholder</span>
          </div>
        </div>

      </div>

      {/* Horizontal Divider */}
      <div className="w-full h-[1px] bg-[var(--border-color)] mt-3 mb-1" />

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row gap-10 mt-1">
        {/* Left Column: Clubs & Search Results */}
        <div className="flex-1 flex flex-col gap-8">
          
          {/* Clubs Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[20px] text-[var(--text-main)] font-normal">Clubs</h2>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              
              {/* Garage Card */}
              <div className="flex flex-col items-center gap-2 cursor-pointer group w-[100px] shrink-0">
                <div className="w-[100px] h-[100px] relative rounded-full overflow-hidden border border-[var(--border-color)] bg-white shadow-sm group-hover:shadow-md transition-shadow flex-shrink-0">
                  <Image src="/garage-logo.png" alt="Garage" fill className="object-cover" />
                </div>
                <span className="text-[14px] text-[var(--text-main)] leading-tight px-0.5 text-center">Garage</span>
              </div>

              {/* Admira Card */}
              <div className="flex flex-col items-center gap-2 cursor-pointer group w-[100px] shrink-0">
                <div className="w-[100px] h-[100px] relative rounded-full overflow-hidden border border-[var(--border-color)] bg-white shadow-sm group-hover:shadow-md transition-shadow flex-shrink-0">
                  <Image src="/admira-logo.png" alt="Admira" fill className="object-cover scale-110" />
                </div>
                <span className="text-[14px] text-[var(--text-main)] leading-tight px-0.5 text-center">Admira</span>
              </div>

            </div>
          </div>

          {/* Search Results Links */}
          <div className="flex flex-col gap-6">
            {/* Mock Search Result 1 */}
            <SearchResult 
              title="Dhakshinesh S T"
              url="https://dhakshinesh.portfolio"
              heading="About Me - Dhakshinesh"
              snippet="Hi, I'm Dhakshinesh! I'm a third-year Mechatronics Engineering student passionate about the intersection of mechanical engineering, motorsport, and storytelling. When I'm not running simulations in SolidWorks or ANSYS, you'll find me behind a camera, directing short films or curating soundtracks."
            />

            {/* Mock Search Result 2 */}
            <SearchResult 
              title="Dhakshinesh | Interests"
              url="https://dhakshinesh.portfolio/interests"
              heading="Music, Movies, and Motorsport"
              snippet="I draw heavy inspiration from cinema, often blending cinematic techniques with engineering logic. My work in Club Admira has trained me to look at problems through a creative lens, while my time at E-Blitz keeps me grounded in hard engineering data."
            />
          </div>
        </div>

        {/* Right Column: About Section */}
        <div className="w-full md:w-[320px] flex flex-col border-t md:border-t-0 md:border-l border-[var(--border-color)] pt-6 md:pt-0 md:pl-8">
          <h2 className="text-[20px] text-[var(--text-main)] font-normal mb-2">About</h2>
          <p className="text-[14px] text-[var(--text-main)] leading-[1.58]">
            Dhakshinesh S T is a Mechatronics Engineering student at Kumaraguru College of Technology, currently in his 3rd year. He is part of Team E-Blitz, a student racing team, where he works on rollcage design for their competition vehicles. He has represented his team at national-level racing competitions across India. Beyond engineering, he is an active member of Club Admira, the college's film club, and has been involved in short filmmaking, including acting and assistant direction. He has a keen interest in music, movies, and motorsport engineering.
          </p>
        </div>
      </div>
      
    </div>
  );
}

'use client';

import SearchResult from '@/components/SearchResult';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[652px] pt-4">
      
      {/* Result 1 */}
      <SearchResult 
        title="E-Blitz Motorsports"
        url="https://eblitz.com > rollcage-analyst"
        heading="Junior Analyst   Rollcage Analyst"
        snippet={
          <>
            Designed and analyzed rollcage structures using <strong>SolidWorks, ANSYS, and CATIA</strong>. 
            Competed in SAE Pithampur (33rd/100+) and ATVC (13th/50+).
          </>
        }
      />

      {/* Result 2 */}
      <SearchResult 
        title="iQube"
        url="https://iqube.io > bionic-hand"
        heading="Bionic Hand Internship"
        snippet="Developed mechanical systems and control algorithms for a functional bionic hand prototype."
      />

    </div>
  );
}


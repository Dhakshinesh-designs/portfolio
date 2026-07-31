'use client';

import SearchResult from '@/components/SearchResult';

export default function ResumePage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[652px] pt-4">
      
      {/* Result 1 */}
      <SearchResult 
        title="Resume (PDF)"
        url="https://dhakshinesh.portfolio > resume.pdf"
        heading="Dhakshinesh_ST_Resume.pdf"
        snippet={
          <>
            <p className="mb-3">
              Download or view my full professional resume, detailing my experience at E-Blitz, Club Admira, iQube, and academic background at Kumaraguru College of Technology.
            </p>
            <div>
              <button className="bg-[#1a73e8] hover:bg-[#1b66c9] text-white px-6 py-2 rounded-md font-medium text-sm transition-colors shadow-sm">
                Download PDF
              </button>
            </div>
          </>
        }
      />

    </div>
  );
}


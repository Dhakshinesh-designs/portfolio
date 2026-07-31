import SearchResult from '@/components/SearchResult';

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[652px] pt-4">
      
      {/* Result 1 */}
      <SearchResult 
        title="Club Admira"
        url="https://admira.club › dhakshinesh"
        heading="Filmmaking & Direction - Club Admira"
        snippet={
          <>
            Directed and shot multiple projects including the short film <strong>"DELETE"</strong> (lead role). 
            Worked as an Assistant Director on secondary films. Mentored under DOPs Chandru Selvaraj & Madhesh Manickam.
          </>
        }
      />

    </div>
  );
}

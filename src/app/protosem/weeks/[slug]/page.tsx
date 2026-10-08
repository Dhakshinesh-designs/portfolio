import { getWeekData } from '@/actions/protosem';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import WeekEditor from '@/components/WeekEditor';

export default async function WeekPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || '';
  
  // Support both "week-0", "week-12", "0", "12"
  const weekNumberMatch = slug.match(/(?:week-)?(\d+)/i);
  
  if (!weekNumberMatch) {
    notFound();
  }
  
  const weekNumber = parseInt(weekNumberMatch[1], 10);
  const weekData = await getWeekData(weekNumber);
  
  if (!weekData) {
    notFound();
  }
  
  return (
    <div className="flex flex-col w-full max-w-3xl pt-4 mx-auto pb-20">
      <div className="mb-6">
        <Link 
          href="/protosem" 
          className="text-[#1a73e8] hover:underline flex items-center gap-2 text-sm font-medium"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to ProtoSem Timeline
        </Link>
      </div>

      <div className="flex items-center gap-4 mb-4 border-b border-[var(--border-color)] pb-4">
        <div className="w-12 h-12 rounded-full bg-[var(--bg-hover)] flex items-center justify-center text-xl font-bold text-[var(--text-main)]">
          W{weekData.week}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-main)]">ProtoSem Week {weekData.week}</h1>
          <p className="text-[var(--text-muted)] text-sm">Graduate Innovation Engineer Certification</p>
        </div>
      </div>

      <WeekEditor initialData={weekData} />
    </div>
  );
}

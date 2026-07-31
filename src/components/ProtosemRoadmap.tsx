'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getWeeksData, WeekData } from '@/actions/protosem';

export default function ProtosemRoadmap() {
  const [weeks, setWeeks] = useState<WeekData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getWeeksData();
        setWeeks(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return <div className="py-4 text-[var(--text-muted)]">Loading roadmap...</div>;
  }

  return (
    <div className="mt-4 flex flex-col">
      <p className="text-[var(--text-main)] text-sm mb-6">
        Select a week to view details, add activities, and update progress.
      </p>

      <div className="relative border-l-2 border-[var(--border-color)] ml-3 md:ml-4 flex flex-col gap-6">
        {weeks.map((weekData) => {
          const hasContent = weekData.date || weekData.activities.length > 0;
          
          return (
            <div key={weekData.week} className="relative pl-6">
              {/* Timeline dot */}
              <div 
                className={`absolute left-[-9px] top-1 w-4 h-4 rounded-full border-2 border-[var(--bg-main)] ${
                  hasContent ? 'bg-[#1a73e8]' : 'bg-[var(--border-color)]'
                }`} 
              />
              
              <Link 
                href={`/protosem/weeks/week-${weekData.week}`}
                className="group block"
              >
                <div className="flex flex-col">
                  <h3 className={`text-[16px] font-medium group-hover:underline transition-colors ${
                    hasContent ? 'text-[var(--link-title)]' : 'text-[var(--text-muted)]'
                  }`}>
                    Week {weekData.week}
                  </h3>
                  
                  {hasContent ? (
                    <div className="mt-1 flex flex-col gap-1 text-[13px] text-[var(--text-main)]">
                      {weekData.date && <span className="text-[var(--text-muted)] text-[12px]">{weekData.date}</span>}
                      {weekData.activities.length > 0 && (
                        <span className="line-clamp-1">{weekData.activities[0].heading || weekData.activities[0].description} {weekData.activities.length > 1 && '...'}</span>
                      )}
                    </div>
                  ) : (
                    <span className="text-[12px] text-[var(--text-muted)] mt-1">
                      No updates yet. Click to add.
                    </span>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

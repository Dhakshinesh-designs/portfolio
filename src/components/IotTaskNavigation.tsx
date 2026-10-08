'use client';

import Link from 'next/link';

export default function IotTaskNavigation({ currentTask }: { currentTask: number }) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <Link href="/protosem/iot" className="px-4 py-2 rounded-full border border-[var(--border-color)] text-xs text-[var(--text-muted)] hover:bg-[var(--bg-hover)] transition-colors uppercase tracking-wider flex items-center gap-1">
        <span>&larr;</span> Week 7
      </Link>
      {[1, 2, 3, 4, 5].map(t => (
        <Link 
          key={t}
          href={`/protosem/iot/task-${t}`} 
          className={`px-4 py-2 rounded-full border text-xs uppercase tracking-wider transition-colors ${
            t === currentTask 
              ? 'border-[var(--link-title)] text-[var(--text-main)] font-bold' 
              : 'border-[var(--border-color)] text-[var(--text-muted)] hover:bg-[var(--bg-hover)]'
          }`}
        >
          Task {t}
        </Link>
      ))}
    </div>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SearchResult({ 
  title, 
  url, 
  heading, 
  snippet,
  preview,
  logo
}: { 
  title: string; 
  url: string; 
  heading: string; 
  snippet: React.ReactNode;
  preview?: string;
  logo?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const initialLetter = title ? title.charAt(0).toUpperCase() : 'D';

  return (
    <div className="flex flex-col mt-4 first:mt-0">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-7 h-7 bg-[var(--bg-hover)] rounded-full flex items-center justify-center text-[10px] text-[var(--text-main)] overflow-hidden relative">
          {logo ? (
            <Image src={logo} alt={title} fill className="object-cover" />
          ) : (
            initialLetter
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-[14px] text-[var(--text-main)] leading-tight">{title}</span>
          <span className="text-[12px] text-[var(--url-color)] leading-tight">{url}</span>
        </div>
      </div>
      <h2 
        onClick={() => setExpanded(!expanded)}
        className="text-[var(--link-title)] text-[20px] font-medium hover:underline cursor-pointer mb-1"
      >
        {heading}
      </h2>
      <div className="text-[var(--text-muted)] text-[14px] leading-[1.58] mt-1">
        {!expanded ? (
          <div className="line-clamp-1">{preview || (typeof snippet === 'string' ? snippet : 'Click to expand...')}</div>
        ) : (
          <div>{snippet}</div>
        )}
      </div>
    </div>
  );
}

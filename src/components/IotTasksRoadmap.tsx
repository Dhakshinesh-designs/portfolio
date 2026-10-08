'use client';

import Link from 'next/link';

export default function IotTasksRoadmap() {
  const tasks = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
    { id: 4, title: 'Task 4' },
    { id: 5, title: 'Task 5' },
  ];

  return (
    <div className="mt-4 flex flex-col mb-8">
      <div className="flex items-center gap-2 mb-4">
        <div className="border border-[var(--border-color)] text-[var(--link-title)] text-[10px] font-semibold tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 uppercase bg-[var(--bg-hover)]">
          <span className="text-[12px]">✨</span> Published Session Log
        </div>
      </div>
      
      <h1 className="text-4xl font-bold tracking-tight text-[var(--text-main)] mb-4">
        IoT &amp; Connectivity — Smart Home Automation
      </h1>
      
      <p className="text-[var(--text-muted)] text-[15px] leading-relaxed mb-8 max-w-2xl">
        A complete smart home build across three days — from local HTTP control on an ESP32, to a cloud MQTT dashboard, to Google Assistant voice commands, to a full-stack sensor-driven platform called <strong>Forge</strong>, built on Firebase.
      </p>

      <div className="relative border-l-2 border-[var(--border-color)] ml-3 md:ml-4 flex flex-col gap-6">
        {tasks.map((task) => (
          <div key={task.id} className="relative pl-6">
            <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full border-2 border-[var(--bg-main)] bg-[var(--border-color)]" />
            
            <Link 
              href={`/protosem/iot/task-${task.id}`}
              className="group block"
            >
              <div className="flex flex-col">
                <h3 className="text-[16px] font-medium group-hover:underline transition-colors text-[var(--link-title)]">
                  {task.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

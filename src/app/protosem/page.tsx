'use client';

import SearchResult from '@/components/SearchResult';
import ProtosemRoadmap from '@/components/ProtosemRoadmap';

export default function ProtosemPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[652px] pt-4">
      
      {/* Result 1 */}
      <SearchResult 
        title="Protosem"
        url="https://www.protosem.tech > about"
        heading="ProtoSem | Innovation Engineers"
        logo="/protosem-logo.jpg"
        snippet={
          <>
            <p className="mb-3">
              ProtoSem is a 20 weeks Graduate Innovation Engineer Certification offered as a comprehensive skills and competency development program that embeds an innovation-centered approach to engineering education. This program helps students to work towards designing, developing and deploying innovative solutions to solve real world problems provided by the Industry. In this process they get transformed into employable individuals or even emerge as technical entrepreneurs.
            </p>
            <p className="mb-3">
              This first of its kind program offers expert training, technology &amp; innovation mentoring, adaptive learning in a flipped classroom apart from deep exposure to tools and techniques for prototyping innovative solutions using creative technologies covering IoT sensors, Edge Computing &amp; Networks, Additive Manufacturing, Industrial Automation, Robotics, Artificial Intelligence, AR/VR etc.
            </p>
            <a href="https://www.protosem.tech/#:~:text=ProtoSem%20is%20a%2020%20weeks,innovation%2Dcentered%20approach%20to%20engineering%20education." target="_blank" rel="noopener noreferrer" className="text-[var(--link-title)] hover:underline font-medium">
              Read more &raquo;
            </a>
          </>
        }
      />

      {/* Result 2 */}
      <SearchResult 
        title="My Work"
        url="https://dhakshinesh.portfolio > protosem > weeks"
        heading="ProtoSem Timeline & Weekly Updates"
        preview="Track my weekly progress, activities, and learnings from Week 0 to Week 20."
        snippet={<ProtosemRoadmap />}
      />

    </div>
  );
}


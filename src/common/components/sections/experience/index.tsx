

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from 'next-themes';
import { useHasMounted, useSectionInView } from '@/common/lib/hooks';
import SectionHeading from '@/common/components/shared/section-heading';
import { experiencesData, educationData } from '@/common/lib/data';
import SectionDivider from '@/common/components/shared/section-divider';

type SectionId = "home" | "about" | "education" | "experience" | "projects" | "skills" | "contact";

type ExperienceProps = {
  iid: SectionId;
};

export default function EduExe({ iid }: ExperienceProps) {
  const { ref } = useSectionInView(iid); 
  const { theme } = useTheme();
  const ihasMounted = useHasMounted();
  const alldata = iid === "experience" ? experiencesData : educationData;

  return (
    <section
      id={iid}
      ref={ref}
      className="w-full scroll-mt-20 dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>{iid.toUpperCase()}</SectionHeading>
      <VerticalTimeline animate={false}>
        {ihasMounted &&
          alldata.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: theme === 'light' ? '0.4rem solid #9ca3af' : '0.4rem solid rgba(255, 255, 255, 0.5)',
                display: theme === 'dark' ? 'none' : 'block',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === 'light' ? '#fff' : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
                display: theme === 'dark' ? 'none' : 'flex',
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-0 font-normal">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}

import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';

function Timeline() {
  return (
    <div className='flex flex-col md:flex-row my-20 justify-center'>
      <div className='w-full md:w-10/12 lg:w-7/12'>
        <h1 className='ml-10 text-xl md:text-3xl mb-3  font-bold text-headline'>
          Timeline
        </h1>
        {timeline.map((item) => (
          <TimelineItem
            key={item.details}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;

function TimelineItem({ year, title, duration, details }) {
  return (
    <ol className='mx-16  flex flex-col md:flex-row relative border-l border-paragraph  '>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-button rounded-full mt-1.5 -left-1.5 border border-paragraph' />
        <div className='flex flex-werap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='text-paragraph bg-year-bg text-xs inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md'>
            {year}
          </span>
          <h3 className='text-headline text-sm md:text-base lg:text-lg font-semibold text-stone-900'>
            {title}
          </h3>
          <div className='text-paragraph my-1 text-xs md:text-sm font-normal leading-none text-stone-400 '>
            {duration}
          </div>
        </div>
        <p className='text-paragraph my-2 text-base font-normal text-stone-500'>
          {details}
        </p>
      </li>
    </ol>
  );
}

export default TimelineItem;

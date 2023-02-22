const PortfolioItem = ({ title, imageUrl, stack, link }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='border-4 border-paragraph rounded-md overflow-hidden bg-card-bg'
    >
      <img
        src={imageUrl}
        alt='portfolio'
        className='w-full h-36 object-cover cursor-pointer'
      />
      <div className='w-full p-4'>
        <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold text-card-headline'>
          {title}
        </h3>
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start md:text-sm'>
          {stack.map((item) => (
            <span
              key={item}
              className='inline-block px-2 py-1 font-semibold border-2 border-paragraph-1000 rounded-md text-paragraph hover:bg-button bg-card-tag-bg'
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
};

export default PortfolioItem;

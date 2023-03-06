const PortfolioItem = ({ title, imageUrl, stack, link, repo }) => {
  return (
    <div className='border-4 border-paragraph rounded-md overflow-hidden bg-card-bg'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img
          src={imageUrl}
          alt='portfolio'
          className={`w-full h-36 object-cover ${
            link ? 'cursor-pointer' : 'cursor-default'
          }`}
        />
      </a>

      <div className='w-full p-4'>
        <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold text-card-headline'>
          {title}
        </h3>
        <p className='mb-2 flex flex-wrap gap-2 flex-row items-center justify-start md:text-sm'>
          {stack.map((item) => (
            <span
              key={item}
              className='text-xs md:text-sm inline-block px-2 py-1 font-semibold border-2 border-paragraph-1000 rounded-md text-paragraph hover:bg-button bg-card-tag-bg hover:cursor-default'
            >
              {item}
            </span>
          ))}
        </p>
        <div className='flex gap-3'>
          {repo && (
            <a
              className='text-card-text underline underline-offset-4 decoration-button decoration-4 hover:bg-button'
              target={'_blank'}
              href={repo}
            >
              Source code
            </a>
          )}

          {link && (
            <a
              className='text-card-text underline underline-offset-4 decoration-button decoration-4 hover:bg-button'
              target={'_blank'}
              href={link}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;

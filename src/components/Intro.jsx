const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-6 pb-6'>
      <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold text-headline'>
        Ronnen Podolsky
      </h1>
      <p className='text-headline text-base md:text-xl mb-3 font-medium underline underline-offset-8 decoration-2 decoration-card-tag-bg '>
        Full Stack Engineer
      </p>
      <p className='px-2 text-sm max-w-[670px] mb-6 font-bold text-paragraph'>
        I'm a Web Developer, but also have vast product management and data
        analysis experience.
        <br />
        <br />
        Passionate about technology and software development, my aim is to build
        products while bringing a strong business and product sense to the
        table.
        <br />
      </p>
    </div>
  );
};

export default Intro;

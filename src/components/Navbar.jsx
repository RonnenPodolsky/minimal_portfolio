const Navbar = () => {
  return (
    <div className='bg-main flex justify-end items-center gap-2'>
      <a
        href='#contact'
        className='mr-auto underline underline-offset-4 decoration-2 decoration-nav-highligt p-4 hover:bg-nav-highligt '
      >
        Contact
      </a>
      <a
        href='https://github.com/RonnenPodolsky/'
        target='_blank'
        rel='noreferer noopener'
        className=' underline underline-offset-4 decoration-2 decoration-nav-highligt p-4 hover:bg-nav-highligt '
      >
        GitHub
      </a>
      <a
        href='https://www.linkedin.com/in/ronnen-podolsky-806905172/'
        target='_blank'
        rel='noreferer noopener'
        className=' underline underline-offset-4 decoration-2 decoration-nav-highligt p-4  hover:bg-nav-highligt'
      >
        Linkedin
      </a>
    </div>
  );
};

export default Navbar;

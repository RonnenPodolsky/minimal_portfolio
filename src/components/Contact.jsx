const Contact = () => {
  return (
    <div
      id='contact'
      className='bg-main	p-10 flex justify-center items-center flex-col mb-10 mx-auto'
    >
      <div className='w-2/3 md:w-full flex justify-center items-center'>
        <form
          action='https://getform.io/f/ae725966-87aa-4bba-b488-b3a243e51f81'
          method='POST'
          className='flex flex-col w-full md:w-7/12'
        >
          <h1 className='text-xl md:text-3xl mb-3  font-bold text-headline'>
            Contact me
          </h1>

          <input
            type='text'
            name='name'
            placeholder='Name'
            className='p-2 bg-transparent border-2 rounded-md focus:outline-none '
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='p-2 my-2 bg-transparent border-2 rounded-md focus:outline-none '
          />
          <textarea
            name='message'
            placeholder='Message'
            rows='10'
            className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
          ></textarea>
          <button
            type='submit'
            className='text-center inline-block px-8 py-3 w-max text-base text-white bg-paragraph hover:bg-nav-highligt rounded-md shadow hover:shadow-2xl'
          >
            Reach out
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

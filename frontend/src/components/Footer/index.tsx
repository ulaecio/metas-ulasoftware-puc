const Footer = () => {
  return (
    <footer className='footer mt-auto py-3 bg-dark'>
      <div className='px-4'>
        <p className='text-light'
        >
          Copy right 2021 ©
          <a className='a'
            href='https://www.instagram.com/ulaecio'
            target='_blank'
            rel='noreferrer'
          > Ulasoftware Tecnologia
          </a>
            
          </p>
          </div>
          <div className='px-4'>
        <p className='text-light'
        >
          Developed by
          <a className='a'
            href='https://facebook.com/ulaecio'
            target='_blank'
            rel='noreferrer'
          >
            {''} Ulaecio
          </a>

        </p>
      </div>
    </footer>
  );
};

export default Footer;
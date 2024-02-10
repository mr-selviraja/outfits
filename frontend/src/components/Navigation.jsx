import React from 'react';
import { Navbar, Button, IconButton, Collapse } from '@material-tailwind/react';
import NavigationLink from './NavigationLink';

const Navigation = () => {
  // State to hold navigation status
  const [openNav, setOpenNav] = React.useState(false);

  // Side-effect to automatically reset navigation status based on vw
  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // Navigation links properties
  const navLinks = [
    {
      id: 1,
      text: 'Mens',
    },
    {
      id: 2,
      text: 'Womens',
    },
    {
      id: 3,
      text: 'Teens',
    },
    {
      id: 4,
      text: 'Kids',
    },
  ];

  // Navigation list component
  const navList = (
    <ul className='mt-6 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-16'>
      {navLinks.map((navLink) => (
        <NavigationLink
          key={navLink.id}
          navText={navLink.text}
          classes={['flex', 'items-center', 'text-grey  hover:text-dark']}
        />
      ))}
    </ul>
  );

  return (
    <Navbar className='navigation font-sans sticky top-0 z-10 h-max max-w-full rounded-none p-6 lg:px-8 lg:py-4'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between text-blue-gray-900'>
          <img
            style={{ width: '5rem' }}
            className='cursor-pointer'
            src='/assets/outfits-logo.svg'
            alt='outfits logo'
          />

          <div className='flex items-center gap-16'>
            <div className='mr-4 hidden lg:block'>{navList}</div>

            <Button
              size='sm'
              className='hidden lg:inline-block shadow-none hover:shadow-none'
              color='blue-gray'
            >
              Login
            </Button>

            {/* Toggle Button */}
            <IconButton
              variant='text'
              className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        <Collapse open={openNav}>
          {navList}

          <Button fullWidth size='sm' color='blue-gray'>
            <span>Login</span>
          </Button>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;

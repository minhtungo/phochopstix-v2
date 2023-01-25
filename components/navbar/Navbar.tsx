import React, { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Inter } from '@next/font/google';

import { Container, Logo } from '@/components';
import { FadeContainer } from '@/lib/framerVariants';
import HamBurgerIcon from './HamBurgerIcon';
import MobileMenu from './MobileMenu';
import NavItem from './NavItem';

const inter = Inter({ subsets: ['latin'] });

const navigationRoutes: string[] = ['home', 'about', 'menu', 'contact'];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  const control = useAnimation();

  // Adding Shadow, backdrop to the navbar as user scroll the screen
  const addShadowToNavbar = useCallback(() => {
    if (window.pageYOffset > 10) {
      navRef.current!.classList.add(
        ...[
          'shadow',
          'backdrop-blur-xl',
          'bg-background-dark',
          'border-b',
          'border-transparent-white',
        ]
      );
      control.start('visible');
    } else {
      navRef.current!.classList.remove(
        ...[
          'shadow',
          'backdrop-blur-xl',
          'bg-background-dark',
          'border-b',
          'border-transparent-white',
        ]
      );
      control.start('hidden');
    }
  }, [control]);

  useEffect(() => {
    window.addEventListener('scroll', addShadowToNavbar);
    return () => {
      window.removeEventListener('scroll', addShadowToNavbar);
    };
  }, [addShadowToNavbar]);

  //lock the scroll when mobile is open
  const lockScroll = () => {
    const root = document.getElementsByTagName('html')[0];
    root.classList.toggle('lock-scroll');
  };

  const handleClick = () => {
    lockScroll();
    setNavOpen(!navOpen);
  };

  return (
    <header
      className={`${inter.className} fixed w-full top-0 left-0 right-0 z-50 backdrop-filter`}
      ref={navRef}
    >
      <Container className='flex items-center justify-between py-[8px]'>
        <HamBurgerIcon open={navOpen} handleClick={handleClick} />
        <AnimatePresence>
          {navOpen && (
            <MobileMenu links={navigationRoutes} handleClick={handleClick} />
          )}
        </AnimatePresence>
        <Logo />
        {/* Top Nav list */}
        <motion.nav className='hidden sm:flex z-10 md:inset-0 md:justify-center'>
          <motion.ul
            initial='hidden'
            animate='visible'
            variants={FadeContainer}
            className='flex items-center md:gap-2'
          >
            {navigationRoutes.map((link, index) => {
              return (
                <li key={index}>
                  <NavItem href={`${link}`} text={link} />
                </li>
              );
            })}
          </motion.ul>
        </motion.nav>
        <div className='flex items-center space-x-4'>
          <motion.div className='hidden md:flex items-center space-x-4 text-gray-300'>
            <Link
              href='https://github.com/minhtungo'
              className='hover:text-blue-500'
              target='_blank'
            >
              <button
                type='button'
                className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
              >
                View Menu
              </button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </header>
  );
};
export default Header;

import React, { useState, useEffect } from 'react';
import { DesktopNavbar } from './navbar/DesktopNavbar';
import { MobileNavbar } from './navbar/MobileNavbar';

const links = [
  { name: 'Inicio', href: '/' },
  { name: 'Acerca', href: '/about' },
  { name: 'Servicios', href: '/services' },
]

export const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const [background, setBackground] = useState('transparent');
  const [color, setColor] = useState('white');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [background]);

  const handleScroll = () => {
    const newScroll = window.pageYOffset;
    setScroll(newScroll);
    if (newScroll > 100) {
      setBackground('white');
      setColor('black');
    } else {
      setBackground('transparent');
      setColor('white');
    }
  };
  

  return (
    <>
      <div className="navbar" style={{color, background, position: 'fixed', top: 0, width: '100%', zIndex: 10 }}>
        <div className="mobile-navbar">
          <MobileNavbar links={links} />
        </div>
        <div className="desktop-navbar">
          <DesktopNavbar links={links}/>
        </div>
      </div>
      <style jsx>
        {`
          .navbar {
            transition: background 0.6s ease;
          }
          .mobile-navbar {
            display: block;
          }
          .desktop-navbar {
            display: none;
          }
          @media (min-width: 768px) {
            .mobile-navbar {
              display: none;
            }
            .desktop-navbar {
              display: block;
            }
          }
        `}
      </style>
    </>
  );
};

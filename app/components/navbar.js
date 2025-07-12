'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // Lock scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return;

      const currentY = window.scrollY;
      setShowNavbar(currentY < lastScrollY || currentY < 10);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500 ${
          showNavbar || isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-end">
          {/* Mobile Hamburger Only */}
          <button
            className="relative w-6 h-5 flex flex-col justify-between  items-center z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className="w-full h-[2px] transition-transform duration-300 ease-in-out bg-white"
                style={{
                  transform: isMenuOpen
                    ? i === 0
                      ? 'rotate(45deg) translateY(9px)'
                      : i === 1
                      ? 'scale(0)'
                      : 'rotate(-45deg) translateY(-9px)'
                    : 'none',
                }}
              />
            ))}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 h-full bg-black text-white transform transition-transform duration-300 z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-light ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
       

        
          <Link  href={`/`} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link  href={`/#tracklist`} onClick={() => setIsMenuOpen(false)}>
            TrackList
          </Link>
          <Link  href={`https://kdmexclusive.com/contact-us/`} onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        

        <div className="font-sans absolute bottom-10 text-sm text-white/60">
          © {new Date().getFullYear()} TE Studio. All rights reserved.
        </div>
      </div>
    </>
  );
}

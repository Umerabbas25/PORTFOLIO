'use client';

import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container">
          <div className="navbar__inner">
            {/* Logo */}
            <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, '#hero')}>
              <div className="navbar__monogram">UA</div>
              <span className="navbar__logo-text">Umer Abbas</span>
            </a>

            {/* Desktop Links */}
            <ul className="navbar__links">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="navbar__link" onClick={(e) => handleNavClick(e, l.href)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="navbar__actions">
              <a href="#" className="navbar__cta">
                <FiDownload size={15} />
                <span>Resume</span>
              </a>
            </div>

            {/* Hamburger */}
            <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <button className="mobile-menu__close" onClick={() => setMenuOpen(false)}>
          <HiX size={28} />
        </button>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} className="mobile-menu__link" onClick={(e) => handleNavClick(e, l.href)}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}

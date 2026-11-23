'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  FiArrowRight, FiDownload, FiChevronDown,
  FiLinkedin, FiGithub, FiMail
} from 'react-icons/fi';
import NeuralCanvas from './NeuralCanvas';
import './Hero.css';

const ROLES = ['AI/ML Engineer', 'GenAI Developer', 'RAG Specialist', 'Agentic AI Builder'];

function TypewriterRoles() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  const currentRole = ROLES[roleIdx];
  const text = currentRole.slice(0, charIdx);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting) {
      if (charIdx < currentRole.length) {
        timeout = setTimeout(() => setCharIdx(c => c + 1), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx(c => c - 1), 45);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIdx(i => (i + 1) % ROLES.length);
        }, 300);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, currentRole.length]);

  return (
    <div className="hero__typewriter">
      <span>{text}</span>
      <span className="hero__cursor" />
    </div>
  );
}

export default function Hero() {
  const handleScroll = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero__grid">
          {/* Left Content */}
            <div className="hero__content">

            <h1 className="hero__title">
              Hi, I&apos;m<br />
              <span className="gradient-text">Umer Abbas</span>
            </h1>

            <TypewriterRoles />

            <p className="hero__subtext">
              Building intelligent systems that solve real-world problems — from RAG pipelines
              to Agentic AI. AI/ML Engineer &amp; AI Undergraduate at COMSATS University Islamabad.
            </p>

            <div className="hero__buttons">
              <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                <FiArrowRight size={16} />
                View Projects
              </a>
              <a href="/Umer_Abbas.pdf" className="btn-outline" download="Umer_Abbas_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <FiDownload size={16} />
                Download Resume
              </a>
            </div>

            <div className="hero__socials">
              <a href="https://linkedin.com/in/umer25" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">
                <FiLinkedin size={18} />
              </a>
              <a href="https://github.com/Umerabbas25" target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">
                <FiGithub size={18} />
              </a>
              <a href="mailto:umerabbas756@gmail.com" className="social-btn" title="Email">
                <FiMail size={18} />
              </a>
            </div>
          </div>

          {/* Right — Neural Canvas & Profile Image */}
          <div className="hero__canvas-wrap">
            <div className="hero__canvas-glow" />
            <div className="hero__canvas-bg">
              <NeuralCanvas />
            </div>
            <div className="hero__profile-wrap">
              <Image
                src="/profile.png"
                alt="Umer Abbas Profile"
                width={280}
                height={280}
                priority
                sizes="(max-width: 768px) 240px, 280px"
                className="hero__profile-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="hero__scroll" onClick={handleScroll} aria-label="Scroll down">
        <span>Scroll</span>
        <FiChevronDown size={20} className="hero__scroll-icon" />
      </button>
    </section>
  );
}

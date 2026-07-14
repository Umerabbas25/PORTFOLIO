'use client';

import { useEffect, useRef, useState } from 'react';
import { SKILLS } from './Skills';
import './About.css';

const STATS = [
  { target: 10, suffix: '+', label: 'AI Projects' },
];

interface CounterCardProps {
  target: number;
  suffix: string;
  label: string;
}

function CounterCard({ target, suffix, label }: CounterCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        const duration = 1800;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          setCount(Math.floor(current));
        }, 16);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="stat-card glass-card">
      <div className="stat-card__number">{count}{suffix}</div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-wrapper about">
      <div className="container">
        <div className="about__grid">
          {/* Avatar / Orbits */}
          <div className="about__avatar-col reveal-left">
            <div className="about__avatar-frame">
              {/* Orbit Rings */}
              {[
                { radius: 100, items: SKILLS.slice(0, 7), duration: 25, reverse: false },
                { radius: 160, items: SKILLS.slice(7, 17), duration: 35, reverse: true },
                { radius: 220, items: SKILLS.slice(17, 29), duration: 45, reverse: false },
              ].map((ring, ringIdx) => (
                <div 
                  key={ringIdx} 
                  className={`orbit-ring ${ring.reverse ? 'orbit-ring-reverse' : ''}`}
                  style={{ 
                    width: ring.radius * 2, 
                    height: ring.radius * 2,
                    animationDuration: `${ring.duration}s`
                  }}
                >
                  {ring.items.map((skill, i) => {
                    const angle = (i / ring.items.length) * 360;
                    return (
                      <div 
                        key={skill.name} 
                        className="orbit-pos"
                        style={{ 
                          transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${ring.radius}px) rotate(-${angle}deg)` 
                        }}
                      >
                        <div 
                          className="orbit-icon-wrapper" 
                          style={{ 
                            animationDuration: `${ring.duration}s`,
                            animationName: ring.reverse ? 'counterSpinReverse' : 'counterSpin'
                          }}
                          title={skill.name}
                        >
                          <skill.Icon size={18} color={skill.color} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="about__text reveal">
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              Passionate About <span className="gradient">Intelligent Systems</span>
            </h2>
            <p className="about__para">
              I am an <strong className="highlight">Artificial Intelligence undergraduate</strong> at
              COMSATS University Islamabad, Lahore Campus — currently in my{' '}
              <strong className="highlight">7th Semester</strong>. My passion lies in building
              intelligent systems that bridge cutting-edge research with real-world impact.
            </p>
            <p className="about__para">
              I specialize in <strong className="highlight">Machine Learning</strong>,{' '}
              <strong className="highlight">Generative AI</strong>,{' '}
              <strong className="highlight">Retrieval-Augmented Generation (RAG)</strong>, and{' '}
              <strong className="highlight">Agentic AI</strong>. I love working at the intersection
              of NLP, LLMs, and backend engineering — crafting systems that think, reason, and respond.
            </p>
            <p className="about__para">
              Currently gaining industry experience as a{' '}
              <strong className="highlight">Machine Learning Engineer Intern at FlyRank AI</strong>,
              building production-grade ML pipelines and RAG systems.
            </p>

            <div className="about__stats">
              {STATS.map((s) => (
                <CounterCard key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import {
  SiPython, SiPytorch, SiTensorflow, SiScikitlearn,
  SiHuggingface, SiFastapi, SiFlask, SiDjango,
  SiNodedotjs, SiMongodb, SiPostgresql, SiMysql,
  SiSqlite, SiGit, SiGithub, SiDocker,
  SiLinux, SiHtml5, SiCss, SiJavascript, SiReact,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FiLink2, FiServer } from 'react-icons/fi';
import { BsDatabaseFill } from 'react-icons/bs';
import { MdMemory } from 'react-icons/md';
import './Skills.css';

export const SKILLS = [
  // AI/ML
  { name: 'Python', Icon: SiPython, color: '#3776AB', cat: 'ai' },
  { name: 'PyTorch', Icon: SiPytorch, color: '#EE4C2C', cat: 'ai' },
  { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00', cat: 'ai' },
  { name: 'scikit-learn', Icon: SiScikitlearn, color: '#F7931E', cat: 'ai' },
  { name: 'Hugging Face', Icon: SiHuggingface, color: '#FFD21E', cat: 'ai' },
  { name: 'LangChain', Icon: FiLink2, color: '#1C8A5A', cat: 'ai' },
  { name: 'FAISS', Icon: MdMemory, color: '#7C3AED', cat: 'ai' },
  { name: 'Pinecone', Icon: BsDatabaseFill, color: '#06B6D4', cat: 'ai' },
  { name: 'OpenAI API', Icon: MdMemory, color: '#10A37F', cat: 'ai' },
  { name: 'Groq API', Icon: MdMemory, color: '#F55036', cat: 'ai' },
  // Backend
  { name: 'FastAPI', Icon: SiFastapi, color: '#009688', cat: 'backend' },
  { name: 'Flask', Icon: SiFlask, color: '#94A3B8', cat: 'backend' },
  { name: 'Django', Icon: SiDjango, color: '#092E20', cat: 'backend' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933', cat: 'backend' },
  { name: 'REST APIs', Icon: FiServer, color: '#06B6D4', cat: 'backend' },
  // Database
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248', cat: 'database' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1', cat: 'database' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1', cat: 'database' },
  { name: 'ChromaDB', Icon: BsDatabaseFill, color: '#9D5CF5', cat: 'database' },
  { name: 'SQLite', Icon: SiSqlite, color: '#003B57', cat: 'database' },
  // DevTools
  { name: 'Git', Icon: SiGit, color: '#F05032', cat: 'devtools' },
  { name: 'GitHub', Icon: SiGithub, color: 'var(--text-primary)', cat: 'devtools' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED', cat: 'devtools' },
  { name: 'VS Code', Icon: VscVscode, color: '#007ACC', cat: 'devtools' },
  { name: 'Linux', Icon: SiLinux, color: '#FCC624', cat: 'devtools' },
  // Web
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26', cat: 'web' },
  { name: 'CSS3', Icon: SiCss, color: '#1572B6', cat: 'web' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', cat: 'web' },
  { name: 'React', Icon: SiReact, color: '#61DAFB', cat: 'web' },
];

const TABS = [
  { key: 'all', label: 'All' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Databases' },
  { key: 'devtools', label: 'DevTools' },
  { key: 'web', label: 'Web' },
];

export default function Skills() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? SKILLS : SKILLS.filter((s) => s.cat === active);

  return (
    <section id="skills" className="section-wrapper skills">
      <div className="container">
        <div className="skills__header reveal" style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="section-label">Tech Stack</div>
          <h2 className="section-title">My Tech <span className="gradient">Arsenal</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            The tools and technologies I use to bring intelligent systems to life.
          </p>
        </div>

        <div className="skills__tabs reveal">
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`skills__tab ${active === t.key ? 'skills__tab--active' : ''}`}
              onClick={() => setActive(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="skills__grid">
          {filtered.map(({ name, Icon, color }, i) => (
            <div
              key={name}
              className="skill-card glass-card"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div className="skill-card__icon" style={{ color }}>
                <Icon size={36} />
              </div>
              <span className="skill-card__name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

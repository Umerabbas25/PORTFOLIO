import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const PROJECTS = [
  {
    id: 'doc-butler',
    image: '/doc_butler.png',
    imageAlt: 'Document Butler RAG Platform Screenshot',
    badge: 'RAG · AI Platform',
    badgeColor: '#06b6d4',
    title: 'Document Butler',
    subtitle: 'RAG AI Platform',
    desc: 'A fully functional Retrieval-Augmented Generation (RAG) web application built with Python, FastAPI, and Next.js. Upload documents and get AI-powered answers with exact source citations and an in-browser document viewer.',
    highlights: [
      'Upload PDF, DOCX & Markdown — auto-chunked & vectorized',
      'Context-aware Q&A powered by state-of-the-art LLMs',
      'Exact source citations linking back to documents',
      'In-browser file viewer alongside chat',
    ],
    tags: ['Python', 'FastAPI', 'Next.js', 'LangChain', 'Qdrant', 'Groq'],
    github: 'https://github.com/Umerabbas25/Document_Butler-RAG',
    accentColor: '#06b6d4',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.18) 0%, rgba(157,92,245,0.12) 100%)',
  },
  {
    id: 'study-bud',
    image: '/study-budy.png',
    imageAlt: 'StudyBud AI Social Learning Platform Screenshot',
    badge: 'Full-Stack · AI',
    badgeColor: '#9D5CF5',
    title: 'StudyBud',
    subtitle: 'AI-Powered Social Learning Platform',
    desc: "A full-stack social learning web application built with Django and Django REST Framework. Students create study rooms, discuss topics, and learn faster using Groq's Llama-3 AI for room summarization, smart reply suggestions, and a virtual study assistant.",
    highlights: [
      'Study rooms & threaded discussions with JWT auth',
      'AI room summarization with Llama-3 via Groq API',
      'Smart reply suggestions & floating study assistant',
      'Full RESTful API backend with DRF',
    ],
    tags: ['Django', 'DRF', 'Groq API', 'Llama-3', 'SQLite', 'JWT'],
    github: 'https://github.com/Umerabbas25/STUDY_BUDY',
    accentColor: '#9D5CF5',
    gradient: 'linear-gradient(135deg, rgba(157,92,245,0.18) 0%, rgba(234,179,8,0.10) 100%)',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper projects">
      <div className="container">
        <div className="section-label reveal">Portfolio</div>
        <h2 className="section-title reveal">Featured <span className="gradient">Projects</span></h2>
        <p className="section-subtitle reveal" style={{ marginBottom: '56px' }}>
          Real-world AI applications — from research to production.
        </p>

        <div className="projects__list">
          {PROJECTS.map(({ id, image, imageAlt, badge, badgeColor, title, subtitle, desc, highlights, tags, github, accentColor, gradient }, i) => (
            <div
              key={id}
              className={`project-feature-card glass-card reveal ${i % 2 === 1 ? 'reverse' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s`, ['--accent' as string]: accentColor }}
            >
              {/* Screenshot Panel */}
              <div className="pfc__image-wrap" style={{ background: gradient }}>
                <div className="pfc__image-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image} alt={imageAlt} className="pfc__screenshot" />
                  <div className="pfc__image-glow" style={{ background: `radial-gradient(ellipse at center, ${accentColor}33 0%, transparent 70%)` }} />
                </div>
              </div>

              {/* Content Panel */}
              <div className="pfc__content">
                <span className="pfc__badge" style={{ color: badgeColor, borderColor: `${badgeColor}44`, background: `${badgeColor}14` }}>
                  {badge}
                </span>
                <h3 className="pfc__title">{title}</h3>
                <p className="pfc__subtitle">{subtitle}</p>
                <p className="pfc__desc">{desc}</p>

                <ul className="pfc__highlights">
                  {highlights.map((h) => (
                    <li key={h} className="pfc__highlight-item">
                      <span className="pfc__bullet" style={{ background: accentColor }} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="pfc__tags">
                  {tags.map((t) => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>

                <div className="pfc__actions">
                  <a href={github} target="_blank" rel="noopener noreferrer" className="btn-code pfc__btn-github">
                    <FiGithub size={14} /> View on GitHub
                  </a>
                  <span className="pfc__coming-soon">
                    <FiExternalLink size={13} /> Live Demo — Coming Soon
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

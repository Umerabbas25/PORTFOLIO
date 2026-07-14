import { HiAcademicCap, HiLocationMarker, HiLightningBolt } from 'react-icons/hi';
import { MdWork, MdWorkHistory } from 'react-icons/md';
import { BsCircleFill } from 'react-icons/bs';
import { FiCalendar, FiGlobe } from 'react-icons/fi';
import './Experience.css';

const ASIDE_CARDS = [
  {
    Icon: HiAcademicCap,
    color: '#9D5CF5',
    title: 'COMSATS University Islamabad',
    desc: 'BS Artificial Intelligence · Lahore Campus\n7th Semester · Expected Graduation 2026',
  },
  {
    Icon: MdWorkHistory,
    color: '#06B6D4',
    title: 'Core Focus Areas',
    desc: 'Machine Learning · NLP · Retrieval-Augmented Generation · Agentic AI Systems',
  },
  {
    Icon: HiLocationMarker,
    color: '#F59E0B',
    title: 'Location',
    desc: 'Lahore, Punjab, Pakistan\nOpen to remote opportunities worldwide',
  },
  {
    Icon: HiLightningBolt,
    color: '#10B981',
    title: 'Currently Learning',
    desc: 'Advanced RAG · Multi-agent systems · LLM fine-tuning with QLoRA · Kubernetes for ML',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper experience">
      <div className="container">
        <div className="section-label reveal">Career</div>
        <h2 className="section-title reveal">Work <span className="gradient">Experience</span></h2>
        <p className="section-subtitle reveal" style={{ marginBottom: '52px' }}>
          Real-world impact through hands-on AI engineering.
        </p>

        <div className="experience__layout">
          {/* Timeline */}
          <div className="experience__timeline reveal-left">
            <div className="timeline__line" />

            <div className="timeline__item">
              <div className="timeline__dot">
                <BsCircleFill size={10} color="white" />
              </div>
              <div className="timeline__card glass-card">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__role">Machine Learning Engineer Intern</h3>
                    <div className="timeline__company">
                      <MdWork size={14} color="var(--violet-light)" />
                      FlyRank AI
                    </div>
                  </div>
                  <span className="timeline__badge">
                    <BsCircleFill size={6} color="#10B981" />
                    Current Role
                  </span>
                </div>

                <div className="timeline__meta">
                  <span><FiCalendar size={12} /> Jun 2026 – Present</span>
                  <span><FiGlobe size={12} /> Remote · Internship</span>
                </div>

                <ul className="timeline__duties">
                  {[
                    'Designing end-to-end ML pipelines for content ranking and relevance scoring using XGBoost and transformer-based models.',
                    "Implementing RAG systems with FAISS vector stores and Groq's Llama 3.1 API for intelligent document QA.",
                    'Developing NLP preprocessing pipelines for multilingual and Roman-Urdu text — tokenization, normalization, embedding generation.',
                    'Integrating LangChain agentic workflows to automate multi-step content research and SEO optimization tasks.',
                    'Deploying FastAPI-based ML microservices to production environments with the engineering team.',
                  ].map((duty, i) => (
                    <li key={i}>
                      <span className="duty-dot" />
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Aside Cards */}
          <div className="experience__aside reveal">
            {ASIDE_CARDS.map(({ Icon, color, title, desc }) => (
              <div key={title} className="exp-card glass-card">
                <div className="exp-card__icon" style={{ color }}>
                  <Icon size={28} />
                </div>
                <h4 className="exp-card__title">{title}</h4>
                <p className="exp-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

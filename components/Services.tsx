import { MdPsychology, MdLink, MdSmartToy, MdFlashOn, MdMemory, MdBarChart } from 'react-icons/md';
import './Services.css';

const SERVICES = [
  {
    Icon: MdPsychology,
    color: '#9D5CF5',
    title: 'AI/ML Development',
    desc: 'Build and deploy custom ML models, classifiers, and regression systems tailored to your business needs and data.',
  },
  {
    Icon: MdLink,
    color: '#06B6D4',
    title: 'RAG Pipeline Development',
    desc: 'Design retrieval-augmented generation systems with FAISS, Pinecone, or ChromaDB for intelligent document search.',
  },
  {
    Icon: MdSmartToy,
    color: '#F59E0B',
    title: 'Agentic AI Systems',
    desc: 'Build LangChain-powered autonomous agents for complex task automation and multi-step reasoning workflows.',
  },
  {
    Icon: MdFlashOn,
    color: '#10B981',
    title: 'FastAPI Backend Development',
    desc: 'Production-ready REST APIs with ML model integration, authentication, async processing, and full documentation.',
  },
  {
    Icon: MdMemory,
    color: '#EF4444',
    title: 'NLP & LLM Integration',
    desc: 'Integrate OpenAI, Groq, or Hugging Face models into your product with custom fine-tuning when needed.',
  },
  {
    Icon: MdBarChart,
    color: '#7C3AED',
    title: 'Data Analysis & Visualization',
    desc: 'EDA, interactive dashboards, and actionable insight reports using Python, Pandas, and Plotly.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-wrapper services">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div className="section-label reveal">What I Offer</div>
          <h2 className="section-title reveal">What I Can Do <span className="gradient">For You</span></h2>
          <p className="section-subtitle reveal" style={{ margin: '0 auto' }}>
            End-to-end AI engineering — from concept and research to production deployment.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map(({ Icon, color, title, desc }, i) => (
            <div key={title} className="service-card glass-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="service-card__icon" style={{ color }}>
                <Icon size={44} />
              </div>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

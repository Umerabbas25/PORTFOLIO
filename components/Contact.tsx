'use client';

import { useState, useRef } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiSend, FiCheck, FiAlertTriangle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const CONTACT_ITEMS = [
  { Icon: FiMail, label: 'Email', value: 'umerabbas756@gmail.com', href: 'mailto:umerabbas756@gmail.com', color: '#9D5CF5' },
  { Icon: FiPhone, label: 'Phone', value: '+92-3354506534', href: 'tel:+923354506534', color: '#06B6D4' },
  { Icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/umer25', href: 'https://linkedin.com/in/umer25', color: '#0A66C2' },
  { Icon: FiMapPin, label: 'Location', value: 'Lahore, Punjab, Pakistan', href: null, color: '#F59E0B' },
];

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    if (!name || !email || !subject || !message) { setStatus('error'); setTimeout(() => setStatus('idle'), 2500); return; }
    
    setStatus('sending');
    
    // Provided EmailJS IDs
    const serviceId = 'service_llhtdxn';
    const templateId = 'template_adlxlhq';
    const publicKey = 'rMmiQn-OLjYID0qvv';

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      time: new Date().toLocaleString(), // Added to match your template 'time' variable
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      });
  };

  const btnContent: Record<Status, React.ReactNode> = {
    idle: <><FiSend size={16} /> Send Message</>,
    sending: <><span className="contact__spinner" /> Sending...</>,
    success: <><FiCheck size={16} /> Message Sent!</>,
    error: <><FiAlertTriangle size={16} /> Fill All Fields</>,
  };

  const btnClass = `contact__submit ${status !== 'idle' ? `contact__submit--${status}` : ''}`;

  return (
    <section id="contact" className="section-wrapper contact">
      <div className="container">
        <div className="section-label reveal">Get In Touch</div>
        <h2 className="section-title reveal">Let&apos;s <span className="gradient">Work Together</span></h2>
        <p className="section-subtitle reveal" style={{ marginBottom: '52px' }}>
          Have a project in mind or want to collaborate? I&apos;d love to hear from you.
        </p>

        <div className="contact__grid">
          {/* Info Cards */}
          <div className="contact__info reveal-left">
            {CONTACT_ITEMS.map(({ Icon, label, value, href, color }) =>
              href ? (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                   rel="noopener noreferrer" className="contact-card glass-card">
                  <div className="contact-card__icon" style={{ background: `${color}22`, border: `1px solid ${color}44`, color }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="contact-card__label">{label}</div>
                    <div className="contact-card__value">{value}</div>
                  </div>
                </a>
              ) : (
                <div key={label} className="contact-card glass-card">
                  <div className="contact-card__icon" style={{ background: `${color}22`, border: `1px solid ${color}44`, color }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="contact-card__label">{label}</div>
                    <div className="contact-card__value">{value}</div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Form */}
          <div className="contact__form-wrap glass-card reveal">
            <h3 className="contact__form-title">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} />
                </div>
              </div>
              <div className="contact__field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Project Collaboration" value={form.subject} onChange={handleChange} />
              </div>
              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell me about your project or idea..." value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className={btnClass} disabled={status === 'sending'}>
                {btnContent[status]}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

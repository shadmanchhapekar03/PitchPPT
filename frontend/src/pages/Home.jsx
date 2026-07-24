import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Layers, Presentation, Sparkles, MessageSquare, Download, CheckCircle } from 'lucide-react';
const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    // Calculate percentage position
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="home-wrapper" onMouseMove={handleMouseMove}>
      {/* Hero Section with Mouse Tracking */}
      <section className="hero-section">
        <div 
          className="hero-glow-blob" 
          style={{ 
            left: `${mousePos.x}%`, 
            top: `${mousePos.y}%` 
          }} 
        />
        <div className="hero-content">
          <h1 className="hero-title">
            Craft Perfect Pitches with <br/><span>AI Intelligence</span>
          </h1>
          <p className="hero-subtitle">
            PitchMaster is the ultimate professional platform that turns your raw ideas into stunning, ready-to-present PowerPoint decks in seconds. Harness the power of advanced LLMs.
          </p>
          <div className="hero-actions">
            <Link to="/chat" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Launch Workspace <ArrowRight size={20} />
            </Link>
            <a href="#features" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <h2 className="section-title">Why <span>PitchMaster?</span></h2>
        <div className="features-grid">
          <div className="feature-card">
            <Zap size={40} color="var(--primary)" />
            <h3>Lightning Fast Generation</h3>
            <p>Our distributed backend ensures your entire pitch deck, complete with AI-generated visuals, is compiled and ready for download in just a few seconds.</p>
          </div>
          <div className="feature-card">
            <Layers size={40} color="var(--primary)" />
            <h3>Smart Structuring</h3>
            <p>Don't worry about formatting. Our engine understands business narratives and structures your input into problem, solution, market size, and business model slides seamlessly.</p>
          </div>
          <div className="feature-card">
            <Presentation size={40} color="var(--primary)" />
            <h3>Native PPTX Export</h3>
            <p>Unlike other tools that lock you into proprietary web editors, PitchMaster generates native Microsoft PowerPoint (.pptx) files that you can edit offline.</p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', maxWidth: '100%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title">How It <span>Works</span></h2>
          <div className="features-grid" style={{ gap: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: 'var(--bg-dark)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', border: '1px solid var(--primary)', color: 'var(--primary)', fontSize: '2rem', fontWeight: 'bold' }}>1</div>
              <h3 style={{ marginBottom: '1rem' }}>Provide Concept</h3>
              <p style={{ color: 'var(--text-muted)' }}>Type a quick summary of your startup or idea in the PitchMaster dashboard.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: 'var(--bg-dark)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', border: '1px solid var(--primary)', color: 'var(--primary)', fontSize: '2rem', fontWeight: 'bold' }}>2</div>
              <h3 style={{ marginBottom: '1rem' }}>AI Processing</h3>
              <p style={{ color: 'var(--text-muted)' }}>Our specialized AI agents break down the idea and draft persuasive slide copy and image prompts.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: 'var(--bg-dark)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', border: '1px solid var(--primary)', color: 'var(--primary)', fontSize: '2rem', fontWeight: 'bold' }}>3</div>
              <h3 style={{ marginBottom: '1rem' }}>Download & Pitch</h3>
              <p style={{ color: 'var(--text-muted)' }}>Instantly download your fully formatted presentation and walk into your meeting with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">Get in <span>Touch</span></h2>
        <div className="contact-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="form-input" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" className="form-input" placeholder="john@company.com" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea className="form-input" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div style={{ textAlign: 'left', maxWidth: '300px' }}>
            <Link to="/" className="logo" style={{ marginBottom: '1rem' }}>
              <Sparkles size={24} color="var(--primary)" />
              PitchMaster
            </Link>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>
              The professional AI standard for generating high-quality presentations and pitch decks instantly.
            </p>
          </div>
          <div className="footer-links">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left' }}>
              <strong style={{ color: 'white', marginBottom: '0.5rem' }}>Product</strong>
              <Link to="/chat">Workspace</Link>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left' }}>
              <strong style={{ color: 'white', marginBottom: '0.5rem' }}>Company</strong>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
              <a href="#privacy">Privacy Policy</a>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'var(--text-muted)' }}>Twitter</a>
            <a href="#" style={{ color: 'var(--text-muted)' }}>Github</a>
            <a href="#" style={{ color: 'var(--text-muted)' }}>LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} PitchMaster AI. All rights reserved. Built for professionals.
        </div>
      </footer>
    </div>
  );
};

export default Home;

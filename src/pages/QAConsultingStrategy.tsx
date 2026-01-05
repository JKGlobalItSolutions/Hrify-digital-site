import React from 'react';
import { getAssetPath } from '../utils/assetPath';

const QaCon = getAssetPath('assets/images/Banner/newbanimg/qa_con.webp');
const QaBanner = getAssetPath('assets/images/newBanner/Qua.Eng (2).webp');

const QAConsultingStrategy = () => {
  return (
    <main>
      {/* Static Banner Section - Similar to Home but Single Image */}
      <div className="slider">
        <div className="slides">
          <div className="slide">
            <img src={QaBanner} alt="QA Consulting Strategy Banner" />
          </div>
        </div>
      </div>

      <div className="container py-5">
        <style>
          {`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: white;
              border-radius: 16px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
            }

            .icon-wrapper {
              width: 80px;
              height: 80px;
              background: #1B8DBB;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 1.5rem;
            }

            .icon-wrapper svg {
              width: 40px;
              height: 40px;
              stroke: white;
            }

            .feature-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}
        </style>

        {/* Hero Section Below Banner */}
        <div className="text-center">
          <h1 className="main-title">
            Superior Product Quality With QA Consulting & Strategy
          </h1>
          <p className="main-subtitle">
            A tailored quality engineering strategy that aligns with your business goals, best practices, appropriate tools, and robust testing frameworks to ensure quality.
          </p>

          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <div className="feature-card">
              <h4>Assessment</h4>
              <p>Comprehensive evaluation of your current QA processes</p>
            </div>
            <div className="feature-card">
              <h4>Strategy</h4>
              <p>Tailored QA approach aligned with your business goals</p>
            </div>
            <div className="feature-card">
              <h4>Implementation</h4>
              <p>Seamless execution of QA strategies and frameworks</p>
            </div>
            <div className="feature-card">
              <h4>Quality Engineering</h4>
              <p>End-to-end quality assurance throughout development</p>
            </div>
          </div>

          <a href="#contact" className="cta-button">
            Schedule a Consultation
          </a>
        </div>

        {/* Our Approach Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Approach</h2>
            <p className="main-subtitle">
              Entrust your software development to Hrify Digital's QA Consulting & Strategy solutions, experts in shift left testing, test automation, and agile & DevOps methodologies to experience seamless, reliable, and setback-free software development.
            </p>
            <p className="main-subtitle">
              Hrify Digital's QA Consulting & Strategy solutions streamline early-stage software development by efficiently managing test data, non-functional validations, and test cycles. Hrify Digital minimizes deployment time and enhances overall software quality with a focus on optimal testing processes. Through automation, test data management, and result utilization, we at Hrify Digital ensure a smooth and effective software development journey, allowing you to save time and resources while achieving top-notch software quality.
            </p>
          </div>
        </section>

        {/* Support Features Section */}
        <section className="section" style={{ backgroundColor: '#E8F4FA' }}>
          <div className="container">
            <h2 className="section-title">Support Features</h2>

            <div className="features-grid">
              <div className="feature-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h4>Regulatory Compliance</h4>
                <p>Agile QA Implementation: Our team seamlessly integrates agile QA practices into the existing development workflow of our clients. We adopt a gradual approach, starting with smaller pilot projects and then expanding to larger engagements, minimizing resistance and disruption.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                <h4>Security Protocols</h4>
                <p>Customized QA Metrics: Hrify Digital collaborates closely with each client to define tailor-made QA objectives and metrics that align with their unique business goals. These metrics include defect density, test coverage, customer feedback, and response time.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                </div>
                <h4>Control Preferences</h4>
                <p>Optimal QA Tool Selection: Hrify Digital diligently evaluates and recommends QA testing tools that perfectly fit the technologies and systems used by our clients, enhancing the efficiency and effectiveness of testing.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <h4>Costs & Infrastructure</h4>
                <p>Client-Specific Cost-Benefit Analysis: Hrify Digital provides comprehensive client-specific cost-benefit analyses, showcasing the tangible value of our QA services. Our expert team highlights how investing in QA upfront leads to long-term benefits, such as reduced bug-fixing costs and increased customer loyalty.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <h4>Empowering Data Governance</h4>
                <p>Advanced Automated Testing Frameworks: Hrify Digital develops and implements customized automated testing frameworks, streamlining the testing process and expediting time-to-market for their clients.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                </div>
                <h4>Risk-based Testing Approach</h4>
                <p>We collaborate with clients to identify critical areas of our services, focusing QA efforts on high-priority items to ensure comprehensive testing where it matters most.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready for Superior Product Quality?</h2>
            <p>Let us design a tailored QA strategy that ensures flawless software delivery.</p>
            <a href="#contact" className="btn-white">
              Schedule a Consultation
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default QAConsultingStrategy;

import React from 'react';
import { getAssetPath } from '@/utils/assetPath';
const SiteReliabilityImg = getAssetPath('/assets/images/newBanner/ma_ser4.webp');

const SiteReliability = () => {
  return (
    <main>
      {/* Static Banner Section - Similar to Home but Single Image */}
      <div className="slider">
        <div className="slides">
          <div className="slide">
            <img src={SiteReliabilityImg} alt="Site Reliability Banner" />
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

            .tags-container {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 1rem;
              margin: 4rem 0;
            }

            .tag-btn {
              background-color: #1B8DBB;
              color: white;
              padding: 0.7rem 1.8rem;
              border-radius: 9999px;
              font-size: 1.1rem;
              font-weight: 600;
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

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
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
            Site Reliability Engineering
          </h1>
          <p className="main-subtitle">
            Ensure the Smooth Run of Your System With Site Reliability Engineering
          </p>
          <p className="main-subtitle">
            Elevate efficiency and improve collaboration and operations planning in automation for reliability improvement.
          </p>

          <div className="tags-container">
            <div className="tag-btn">SLAs / SLOs / SLIs</div>
            <div className="tag-btn">Performance Metric</div>
            <div className="tag-btn">Monitors & Alerts</div>
            <div className="tag-btn">Managed Services</div>
          </div>

          <p className="main-subtitle">
            Hrify Digital's Site Reliability Solutions automate IT operations tasks, speed software delivery, and reduce IT risks, easing the friction between development and operations teams. Experience seamless software performances with Hrify Digital's Site Reliability Solutions! We at Hrify Digital bridge the gap between development and operations teams, streamlining the process for continuous updates and reducing operational risks.
          </p>
        </div>

        {/* Features Section */}
        <section className="section" style={{ backgroundColor: '#E8F4FA' }}>
          <div className="container">
            <h2 className="section-title">Key Capabilities</h2>

            <div className="features-grid">
              <div className="feature-card">
                <h4>Cultural Collaboration</h4>
                <p>Hrify Digital fosters a culture of collaboration, breaking down silos between development and operations teams.</p>
              </div>

              <div className="feature-card">
                <h4>Vendor Support & SLAs</h4>
                <p>Hrify Digital strategically phases the implementation, using automation to simplify complex challenges.</p>
              </div>

              <div className="feature-card">
                <h4>Performance Metrics</h4>
                <p>Our experts define meaningful SLOs and continuously review performance to optimize SRE processes.</p>
              </div>

              <div className="feature-card">
                <h4>Incident Response</h4>
                <p>Hrify Digital's proactive monitoring ensures swift incident detection and resolution, reducing downtime.</p>
              </div>

              <div className="feature-card">
                <h4>Monitoring & Alerting</h4>
                <p>We deploy intelligent monitoring with actionable alerts and fine-tuned configurations for real-time insights.</p>
              </div>

              <div className="feature-card">
                <h4>Risk Management</h4>
                <p>Our team's risk management framework prioritizes and mitigates risks, ensuring stability and future-proofing for clients.</p>
              </div>
            </div>

            <a href="#contact" className="cta-button">
              Book a Meeting
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready to Achieve Unwavering Reliability?</h2>
            <p>Let us help you build resilient, high-performance systems with expert Site Reliability Engineering.</p>
            <a href="#contact" className="btn-white">
              Schedule a Consultation
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SiteReliability;


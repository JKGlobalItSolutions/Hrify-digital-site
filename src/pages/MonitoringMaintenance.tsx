import React from 'react';
const Monitoring = '/assets/images/Banner/newbanimg/monitoring.webp';

const MonitoringMaintenance = () => {
  return (
    <main>
      {/* Static Banner Section - Similar to Home but Single Image */}
      <div className="slider">
        <div className="slides">
          <div className="slide">
            <img src="/assets/images/newBanner/data.an.webp" alt="Monitoring & Maintenance Banner" />
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
              text-align: left;
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
            Monitoring & Maintenance
          </h1>
          <p className="main-subtitle">
            Maximize Outputs & Ensure Service Excellence
          </p>
          <p className="main-subtitle">
            JK Global IT Solutions' 360 Monitoring and Maintenance services deliver rapid response times and reliable systems, tailored to your unique needs—on-site or remote.
          </p>

          <div className="tags-container">
            <div className="tag-btn">Managed Services</div>
            <div className="tag-btn">Compliance & Transparency</div>
            <div className="tag-btn">Escalation Procedures</div>
            <div className="tag-btn">Root Cause Analysis</div>
          </div>

          <p className="main-subtitle">
            At JK Global IT Solutions, we provide agile 360 Managed Services to monitor and maintain your business infrastructure. By overseeing a vast array of devices and ensuring they stay updated, we emphasize compliance, transparency, and regular communication. Our well-defined escalation procedures and integration requirements minimize disruptions, reduce risks, and optimize operational costs.
          </p>
        </div>

        {/* Key Features Section */}
        <section className="section" style={{ backgroundColor: '#E8F4FA' }}>
          <div className="container">
            <h2 className="section-title">Key Capabilities</h2>

            <div className="features-grid">
              <div className="feature-card">
                <h4>Reliable IT Operations</h4>
                <p>Our flexible approach handles complex IT environments with clear onboarding and customization.</p>
              </div>

              <div className="feature-card">
                <h4>Cost Efficiency</h4>
                <p>Continuous assessments optimize costs and minimize disruptions with defined integration timelines.</p>
              </div>

              <div className="feature-card">
                <h4>Proactive Support</h4>
                <p>Regular checkpoints and clear escalation procedures ensure rapid response and SLA alignment.</p>
              </div>

              <div className="feature-card">
                <h4>Compliance & Security</h4>
                <p>Industry-standard protocols and transparent processes uphold brand reliability and regulatory adherence.</p>
              </div>

              <div className="feature-card">
                <h4>System Availability</h4>
                <p>Root cause analysis and proactive monitoring maximize content availability and node reliability.</p>
              </div>
            </div>

            <a href="#contact" className="cta-button">
              Talk to Our Experts
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready to Maximize Your IT Performance?</h2>
            <p>Let us provide proactive monitoring and maintenance to keep your systems running smoothly.</p>
            <a href="#contact" className="btn-white">
              Schedule a Consultation
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MonitoringMaintenance;


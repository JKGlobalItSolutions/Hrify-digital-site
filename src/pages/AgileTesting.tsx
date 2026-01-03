import React from 'react';
import { getAssetPath } from '../utils/assetPath';

const TestEngineer = getAssetPath('assets/images/Banner/newbanimg/testengineer.webp');
const AgileBanner = getAssetPath('assets/images/newBanner/Qua.Eng (1).webp');

const AgileTesting = () => {
  return (
    <main>
      {/* Static Banner Section - Similar to Home but Single Image */}
      <div className="slider">
        <div className="slides">
          <div className="slide">
            <img src={AgileBanner} alt="Agile Testing Banner" />
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
            Continuous Integration & Issue Resolution With Agile Testing
          </h1>
          <p className="main-subtitle">
            A strong collaboration involving integration and testing, ensuring new changes do not negatively impact existing functionality of all operations.
          </p>

          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <div className="feature-card">
              <h4>Result Driven</h4>
              <p>Focused on delivering measurable outcomes and tangible results</p>
            </div>
            <div className="feature-card">
              <h4>Systematic</h4>
              <p>Organized approach to testing with clear methodologies</p>
            </div>
            <div className="feature-card">
              <h4>Scalable</h4>
              <p>Adaptable testing solutions that grow with your needs</p>
            </div>
            <div className="feature-card">
              <h4>Quality Engineering</h4>
              <p>End-to-end quality assurance throughout development</p>
            </div>
          </div>

          <a href="#contact" className="cta-button">
            Talk to Our Experts
          </a>
        </div>

        {/* Our Approach Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Approach</h2>
            <p className="main-subtitle">
              With JK Global IT Solution's Agile Testing services, achieve continuous testing in software development by automated tests and a collaborative team, ensuring adaptability to changing requirements for effective results.
            </p>
            <p className="main-subtitle">
              JK Global IT Solution's Agile Testing services, seamlessly embedded with development, ensure swift feature verification, defect identification, and rapid fixes, minimizing bugs in production. With continuous integration and delivery, our expert team provides your business experience with faster, high-quality software delivery aligned with your goals for enhanced productivity. JK Global IT Solution's technology pods ensure close collaboration with your teams, shifting quality gates to the left and providing superior testing support at every step of the development process.
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h4>Integrated Agile Teams</h4>
                <p>Our cross-functional Agile teams at JK Global IT Solution work collaboratively, ensuring seamless communication and integration between team members.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                <h4>Contextual Understanding</h4>
                <p>We at JK Global IT Solution use test impact analysis tools to identify critical areas affected by changes and prioritize testing efforts accordingly.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4"></path>
                    <path d="M12 18v4"></path>
                    <path d="m4.93 4.93 2.83 2.83"></path>
                    <path d="m16.24 16.24 2.83 2.83"></path>
                    <path d="M2 12h4"></path>
                    <path d="M18 12h4"></path>
                    <path d="m4.93 19.07 2.83-2.83"></path>
                    <path d="m16.24 7.76 2.83-2.83"></path>
                  </svg>
                </div>
                <h4>Real-world Variability</h4>
                <p>We promote a culture of teamwork and resource pooling at JK Global IT Solution, facilitating support among testers during peak workloads.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <path d="M14 2v6h6"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                    <path d="M10 9H8"></path>
                  </svg>
                </div>
                <h4>Report Customization</h4>
                <p>JK Global IT Solution uses an automated regression reporting system to swiftly detect and resolve regressions, ensuring smooth and stable software updates.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h4>Security Concerns</h4>
                <p>Our Team at JK Global IT Solution prioritizes testing efforts based on critical features and functionalities, following a risk-based testing strategy.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9h.01M21 9h.01M3 15h.01M21 15h.01M15 3v.01M15 21v.01M9 3v.01M9 21v.01M3.5 3.5l17 17"></path>
                  </svg>
                </div>
                <h4>Cloud-Based Device Labs</h4>
                <p>JK Global IT Solution utilizes cloud-based device labs to access diverse environments for testing, optimizing time and resources.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                  </svg>
                </div>
                <h4>Seamless Model Deployment & Version Control</h4>
                <p>We at JK Global IT Solution have implemented dynamic data masking techniques to protect sensitive data in testing environments without compromising data integrity.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                  </svg>
                </div>
                <h4>Optimized Data Lake Architecture</h4>
                <p>At JK Global IT Solution, we employ an innovative Smart Data Generator tool to create realistic and relevant test data tailored to our clients' application requirements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready for Continuous Integration & Issue Resolution?</h2>
            <p>Let us implement agile testing that ensures seamless, high-quality software delivery.</p>
            <a href="#contact" className="btn-white">
              Talk to Our Experts
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AgileTesting;

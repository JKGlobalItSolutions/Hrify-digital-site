import React from 'react';
const BannerImage = '/assets/images/newBanner/cy13.webp';
const Govtrisk11 = '/assets/images/govtrisk1-(1).webp';
const Govtrisk12 = '/assets/images/govtrisk1-(2).webp';
const Govtrisk13 = '/assets/images/govtrisk1-(3).webp';
const Govtrisk = '/assets/images/govtrisk.webp';


const GovernanceRiskManagementCompliance = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="Governance Risk Management Compliance Banner" className="banner-img" />
      </div>

      {/* Banner styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `
      }} />

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
              margin-bottom: 4rem;
            }

            .tag-btn {
              background-color: #1B8DBB;
              color: white;
              padding: 0.6rem 1.8rem;
              border-radius: 9999px;
              font-size: 1rem;
              font-weight: 500;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 3rem auto;
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

            .service-card {
              background: white;
              border-radius: 16px;
              padding: 3rem;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
              text-align: center;
              max-width: 1000px;
              margin: 0 auto;
            }

            .service-card p {
              font-size: 1.15rem;
              line-height: 1.8;
              color: #444;
            }

            .features-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
              margin-bottom: 4rem;
            }

            @media (min-width: 768px) {
              .features-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            @media (min-width: 1024px) {
              .features-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .feature-card {
              background: white;
              border-radius: 12px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: all 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 12px 25px rgba(0,0,0,0.12);
            }

            .feature-icon {
              width: 70px;
              height: 70px;
              color: #1B8DBB;
              margin: 0 auto 1.5rem;
            }

            .feature-title {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-desc {
              color: #666;
              line-height: 1.7;
            }

            .case-studies-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2.5rem;
            }

            @media (min-width: 768px) {
              .case-studies-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            @media (min-width: 1024px) {
              .case-studies-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .case-card {
              background: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
              transition: all 0.3s ease;
            }

            .case-card:hover {
              transform: translateY(-10px);
            }

            .case-image-wrapper {
              overflow: hidden;
              height: 220px;
            }

            .case-image {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.4s ease;
            }

            .case-card:hover .case-image {
              transform: scale(1.08);
            }

            .case-content {
              padding: 2rem;
              text-align: left;
            }

            .case-title {
              font-size: 1.3rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .case-desc {
              color: #666;
              line-height: 1.7;
            }
          `}
        </style>

        {/* Hero Section Below Banner */}
        <div className="text-center">
          <h1 className="main-title">
            Streamline Your Approach to Operations With Governance, Risk Management & Compliance
          </h1>
          <p className="main-subtitle">
            Improve decision-making for your ideal IT investments, avoid reputational damage and legal hassles, and ensure your business operates at the highest level of responsibility.
          </p>

          <div className="tags-container">
            <div className="tag-btn">Risk Management</div>
            <div className="tag-btn">Compliance</div>
            <div className="tag-btn">Strategy</div>
          </div>

          <a href="#" className="cta-button">
            Get a Free Consultation
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }}>
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>

        {/* Cybersecurity Services Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Cybersecurity Services</h2>
            <p className="section-intro">
              Enhance the security of your digital environment and stay up-to-date with JK Global IT Solutions's state-of-the-art Governance, Risk Management & Compliance solutions.
            </p>

            <div className="service-card">
              <p>
                JK Global IT Solutions specializes in cybersecurity, providing top-notch GRC services. We navigate complex frameworks and regulations to align robust cybersecurity measures with clients' business objectives. Leveraging technology advancements, JK Global IT Solutions delivers cutting-edge GRC services to provide real-time risk monitoring and compliance tracking. With proactive monitoring and a security-conscious culture, JK Global IT Solutions empowers clients to navigate the cybersecurity landscape confidently.
              </p>
              <div className="text-center mt-4">
                <a href="#" className="cta-button">
                  Get a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Support Features Section */}
        <section className="section" style={{ backgroundColor: '#fff5f5' }}>
          <div className="container">
            <h2 className="section-title">Support Features</h2>

            <div className="features-grid">
              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
                <h3 className="feature-title">Unparalleled Expertise</h3>
                <p className="feature-desc">
                  Our professionals have extensive GRC knowledge and guide organizations to adopt robust practices aligned with their business objectives.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
                <h3 className="feature-title">Optimal Resource Allocation</h3>
                <p className="feature-desc">
                  Our team provides tailored GRC services with qualified personnel and ample budgets to meet client requirements.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                <h3 className="feature-title">Streamlined Integration</h3>
                <p className="feature-desc">
                  JK Global IT Solutions integrates GRC practices into clients' processes and systems, working closely with departments and teams for smooth implementation and optimized efficiency.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"></path>
                </svg>
                <h3 className="feature-title">Continuous Monitoring & Improvement</h3>
                <p className="feature-desc">
                  We at JK Global IT Solutions regularly monitor and review clients' GRC activities to ensure compliance, identify areas for improvement, and provide proactive recommendations for a strong cybersecurity posture.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <h3 className="feature-title">Promoting a Security-Conscious Culture</h3>
                <p className="feature-desc">
                  We promote security and compliance culture in clients' organizations by prioritizing cybersecurity awareness and accountability and embedding security practices into their culture.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="20" y1="14" x2="23" y2="14"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                  <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
                <h3 className="feature-title">Technological Advancements</h3>
                <p className="feature-desc">
                  JK Global IT Solutions uses advanced technology to improve services. With GRC software and automation tools, Dimiour streamlines processes, monitors risk, tracks compliance, and generates reports in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Cybersecurity Case Studies</h2>

            <div className="case-studies-grid">
              <div className="case-card">
                <div className="case-image-wrapper">
                  <img src={Govtrisk11} alt="Financial Services Security" className="case-image" />
                </div>
                <div className="case-content">
                  <h3 className="case-title">Financial Services Security</h3>
                  <p className="case-desc">
                    How we helped a major bank implement robust GRC practices to protect sensitive financial data.
                  </p>
                </div>
              </div>

              <div className="case-card">
                <div className="case-image-wrapper">
                  <img src={Govtrisk12} alt="Healthcare Compliance" className="case-image" />
                </div>
                <div className="case-content">
                  <h3 className="case-title">Healthcare Compliance</h3>
                  <p className="case-desc">
                    Ensuring HIPAA compliance while strengthening security posture for a healthcare provider.
                  </p>
                </div>
              </div>

              <div className="case-card">
                <div className="case-image-wrapper">
                  <img src={Govtrisk13} alt="Retail Risk Management" className="case-image" />
                </div>
                <div className="case-content">
                  <h3 className="case-title">Retail Risk Management</h3>
                  <p className="case-desc">
                    Developing a comprehensive risk management strategy for a multinational retail chain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default GovernanceRiskManagementCompliance;

import React from 'react';
const BannerImage = '/assets/images/newBanner/cy11.webp';

const CyberResilience = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="Cyber Resilience Banner" className="banner-img" />
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
              color: white;
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
              margin-bottom: 2rem;
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
              background: #E8F4FA;
              border: 1px solid #B3D9FF;
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
              transition: all 0.3s ease;
              z-index: 2;
              position: relative;
            }

            .feature-card:hover .feature-icon {
              transform: scale(1.1);
              color: #15749A;
              filter: drop-shadow(0 4px 8px rgba(27, 141, 187, 0.3));
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
          `}
        </style>

        {/* Hero Section Below Banner */}
        <div className="text-center">
          <h1 className="main-title">
            A Resilient Cyber Network Built on Cyber-Resilient Solutions
          </h1>
          <p className="main-subtitle">
            A holistic approach to safeguarding your digital infrastructure, ensuring continuous operation, and swiftly implementing recovering and adapting strategies to stay ahead of evolving cyber threats.
          </p>

          <div className="tags-container">
            <div className="tag-btn">Preparedness</div>
            <div className="tag-btn">Response</div>
            <div className="tag-btn">Recovery</div>
          </div>
        </div>

        {/* Services Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Cybersecurity Services</h2>
            <p className="section-intro">
              From end-to-end detection capabilities to data-led intelligence solutions, Hrify Digital, using advanced expertise and cutting-edge technology, excels in delivering comprehensive Cyber resilience solutions that help businesses mitigate various cyber risks effectively.
            </p>

            <div className="service-card">
              <p>
                Hrify Digital provides robust cyber resilience solutions for organizations to ensure uninterrupted business continuity amidst complex IT landscapes and challenging cyber threats. With customized awareness programs, optimized resource allocation, threat intelligence collaboration, and user-centric security measures, trust Hrify Digital to safeguard your business swiftly and expertly against all cyber threats.
              </p>
              <a href="#contact" className="cta-button">
                Talk to Our Expert
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }}>
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Support Features Section */}
        <section className="section" style={{ backgroundColor: '#E8F4FA' }}>
          <div className="container">
            <h2 className="section-title">Support Features</h2>

            <div className="features-grid">
              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
                <h3 className="feature-title">Resource Optimization</h3>
                <p className="feature-desc">
                  Hrify Digital helps clients optimize cybersecurity investments through thorough risk assessments and prioritization of resource allocation based on risk levels.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
                <h3 className="feature-title">Threat Intelligence & Collaboration</h3>
                <p className="feature-desc">
                  Hrify Digital partners with industry peers and threat intelligence providers to gather and share timely threat information with clients, helping them defend against emerging cyber threats.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3 className="feature-title">Simplified Security Solutions</h3>
                <p className="feature-desc">
                  Hrify Digital provides user-friendly security platforms with centralized dashboards for effective management and monitoring of comprehensive protection for clients.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                <h3 className="feature-title">Legacy System Upgrades</h3>
                <p className="feature-desc">
                  Hrify Digital helps clients upgrade or replace legacy systems while implementing compensating controls to reduce vulnerabilities and risks.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <h3 className="feature-title">Third-Party Risk Management</h3>
                <p className="feature-desc">
                  Hrify Digital provides third-party risk management services, ensuring clients' vendors and partners meet high-security standards through assessments and contractual agreements.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <h3 className="feature-title">Awareness</h3>
                <p className="feature-desc">
                  Hrify Digital provides tailored cybersecurity awareness programs, including webinars, to help organizations educate their employees on cyber resilience and threat recognition.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CyberResilience;

import React from 'react';
import { getAssetPath } from '../utils/assetPath';

const BannerImage = getAssetPath('assets/images/newBanner/cy10.webp');

const SecurityEngineering = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="Security Engineering Banner" className="banner-img" />
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
              margin: 3rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #666;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              font-size: 1.15rem;
            }

            .tags-container {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 1rem;
              margin-bottom: 4rem;
            }

            .tag-btn {
              border: 1px solid #ddd;
              background: white;
              color: #333;
              padding: 0.5rem 1.5rem;
              border-radius: 9999px;
              font-size: 0.95rem;
              text-decoration: none;
              transition: all 0.2s;
            }

            .tag-btn:hover {
              background: #f5f5f5;
            }

            .intro-para, .long-para {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 2rem;
              color: #555;
              line-height: 1.8;
              font-size: 1.05rem;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 3rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.85rem 2rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 500;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .features-title {
              text-align: center;
              font-size: 2.2rem;
              font-weight: 700;
              color: #1B8DBB;
              margin: 4rem 0 3rem;
            }

            .cards-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
              margin-bottom: 4rem;
            }

            @media (min-width: 768px) {
              .cards-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            @media (min-width: 1024px) {
              .cards-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .card {
              background: white;
              border: 1px solid #eaeaea;
              border-radius: 12px;
              padding: 2rem 1.5rem;
              text-align: center;
              box-shadow: 0 4px 12px rgba(0,0,0,0.05);
              transition: transform 0.3s;
            }

            .card:hover {
              transform: translateY(-8px);
            }

            .card-icon {
              width: 56px;
              height: 56px;
              color: #1B8DBB;
              margin: 0 auto 1.2rem;
            }

            .card-title {
              font-size: 1.3rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .card-desc {
              color: #666;
              font-size: 0.98rem;
              line-height: 1.6;
            }

            .case-section {
              text-align: center;
              padding: 4rem 0;
            }

            .case-title {
              font-size: 2rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 1.5rem;
            }

            .view-btn {
              background: #1B8DBB;
              color: white;
              padding: 0.85rem 2rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 500;
            }

            .view-btn:hover {
              background: #15749A;
            }
          `}
        </style>

        {/* Title Section */}
        <h1 className="main-title">Resilience &amp; Trust Through Security Engineering</h1>
        <p className="main-subtitle">
          Secure architectures by identifying potential threats &amp; implementing effective measures to uphold confidentiality &amp; compliance.
        </p>

        <div className="tags-container">
          <a href="#" className="tag-btn">Awareness</a>
          <a href="#" className="tag-btn">Compliance</a>
          <a href="#" className="tag-btn">Compatibility</a>
          <a href="#" className="tag-btn">Cybersecurity Services</a>
        </div>

        {/* Content Paragraphs */}
        <p className="intro-para">
          Experience Hrify Digital's innovative approach to Security Engineering Solutions through threat monitoring,
          user-centric design, tailored solutions, training, partnerships, and cutting-edge technology.
        </p>

        <p className="long-para">
          Hrify Digital, with a strategic focus on Security Engineering Solutions, prioritizes training and development
          for up-to-date security practices. We allocate resources based on client needs and partnerships.
          Our research team monitors threats and collaborates, and we focus on user-centric design, ensuring
          that time-to-market pressure doesn't compromise necessary security considerations. Dimiour conducts
          assessments, provides tailored solutions, and offers comprehensive security training and compliance
          services. We stay abreast of technology advancements to give businesses a competitive edge.
        </p>

        <a href="#" className="cta-button">
          Schedule a Consultation
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '0.5rem', verticalAlign: 'middle'}}>
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>

        {/* Support Features */}
        <h2 className="features-title">Support Features</h2>
        <div className="cards-grid">
          <div className="card">
            <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
            </svg>
            <h3 className="card-title">Intuitive Security Solutions</h3>
            <p className="card-desc">
              Hrify Digital invests in security training and development, leveraging expertise to create user-friendly solutions.
              We provide comprehensive documentation for streamlined processes.
            </p>
          </div>

          <div className="card">
            <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
            <h3 className="card-title">Data Security &amp; Compliance</h3>
            <p className="card-desc">
              Hrify Digital prioritizes client security needs and strategically develops collaborations with specialists
              to expand the resource pool to offer comprehensive security services.
            </p>
          </div>

          <div className="card">
            <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <h3 className="card-title">Rapid Technology Advancements</h3>
            <p className="card-desc">
              At Hrify Digital, security is our top priority, and we achieve this by constantly assessing new technologies,
              investing in research and development, and collaborating with vendors and experts.
            </p>
          </div>

          <div className="card">
            <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11V6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-5"></path>
              <path d="M13 13 4 4"></path>
              <path d="M9 17v-5H4v5h5Z"></path>
            </svg>
            <h3 className="card-title">Regulatory Compliance</h3>
            <p className="card-desc">
              Hrify Digital creates customized compliance frameworks and tools for our security services to meet industry
              regulations and data protection laws. Additionally, we offer compliance auditing services to identify
              gaps and ensure adherence to necessary standards.
            </p>
          </div>

          <div className="card">
            <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
            </svg>
            <h3 className="card-title">Legacy Systems &amp; Compatibility</h3>
            <p className="card-desc">
              Hrify Digital provides security assessments and migration services to ensure clients' systems are secure
              and compatible. We can also develop custom security gateways for legacy systems.
            </p>
          </div>

          <div className="card">
            <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <h3 className="card-title">Awareness &amp; Training</h3>
            <p className="card-desc">
              Hrify Digital offers industry-specific security awareness training programs, ongoing education through webinars,
              and user-friendly security controls and dashboards for real-time feedback and reminders to make secure choices.
            </p>
          </div>
        </div> <br/>


        {/* Case Studies */}
        <div className="case-section">
          <h2 className="case-title">Cybersecurity Case Studies</h2> <br/>
          <a href="#" className="view-btn">
            View Case Studies
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '0.5rem', verticalAlign: 'middle'}}>
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
};

export default SecurityEngineering;


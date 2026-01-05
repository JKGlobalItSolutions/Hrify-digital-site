import React from 'react';
import { getAssetPath } from '../utils/assetPath';

const BannerImage = getAssetPath('assets/images/newBanner/cy15.webp');
const Cybermanifacter1 = getAssetPath('assets/images/cyber_manifacter-(1).webp');
const CyberSecurity = getAssetPath('assets/images/cyber-security.webp');
const Cyber_finace = getAssetPath('assets/images/cyber_finace.webp');
const Cyber_helth = getAssetPath('assets/images/cyber_helth.webp');

const CyberAdvisory = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="Cyber Advisory Banner" className="banner-img" />
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

            .icon-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 1.5rem;
              max-width: 700px;
              margin: 4rem auto;
            }

            .icon-card {
              text-align: center;
              padding: 1.8rem;
              background: white;
              border: 1px solid #eaeaea;
              border-radius: 16px;
              box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            }

            .icon-card h3 {
              font-size: 1.3rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-top: 1rem;
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
              background: #1B8DBB;
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
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .case-desc {
              color: #666;
              line-height: 1.7;
            }

            .cta-section {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
            }

            .cta-content h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .cta-content p {
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
            A Risk-Conscious Approach to Cyber Threats With Our Cyber Advisory
          </h1>
          <p className="main-subtitle">
            Necessary insights to navigate through all evolving threats, assess risks, and create response strategies that blend in within your organization's core operations to meet the required security regulations.
          </p>

          {/* Icon Cards */}
          <div className="icon-grid">
            <div className="icon-card">
              <h3>Communication</h3>
            </div>
            <div className="icon-card">
              <h3>Decision</h3>
            </div>
            <div className="icon-card">
              <h3>Incident Response</h3>
            </div>
            <div className="icon-card">
              <h3>IT Services</h3>
            </div>
          </div>

          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a href="#schedule" className="cta-button">
              Schedule a Meeting
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }}>
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a href="#learn-more" className="cta-button" style={{ background: 'transparent', border: '2px solid #1B8DBB', color: '#1B8DBB' }}>
              Learn More
            </a>
          </div>
        </div>

        {/* Services Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Cyber Security Services</h2>
            <p className="section-intro">
              Safeguard your digital assets with Hrify Digital's Advisory Services through comprehensive risk management, threat intelligence, incident response planning, and security awareness training.
            </p>

            <div className="service-card">
              <p>
                Hrify Digital extends IT Advisory Services to encompass a comprehensive risk management process, bolstering organizations' capabilities in threat intelligence, incident response planning, and security awareness training. Our expertise enables us to assess and address emerging cyber threats while providing proactive guidance and strategies to our clients. With a focus on risk mitigation and resilience, Hrify Digitalempowers organizations to enhance their security posture and effectively respond to incidents.
              </p>
              <a href="#schedule" className="cta-button">
                Schedule a Meeting
              </a>
            </div>
          </div>
        </section>

        {/* Support Features Section */}
        <section className="section" style={{ backgroundColor: '#E8F4FA' }}>
          <div className="container">
            <h2 className="section-title">Support Features</h2>
            <p className="section-intro">
              Comprehensive IT solutions tailored to your organization's needs
            </p>

            <div className="features-grid">
              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <h3 className="feature-title">Balancing Security & Usability</h3>
                <p className="feature-desc">
                  Hrify Digital balances security and usability for clients by optimizing workflow practices without compromising security.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <h3 className="feature-title">Regulatory Compliance</h3>
                <p className="feature-desc">
                  Hrify Digital helps organizations with regulatory compliance, including audits, policy development, and guidance for IT security requirements.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3 className="feature-title">Stay Updated</h3>
                <p className="feature-desc">
                  Our team is highly trained in the latest technology trends to provide proactive solutions for emerging IT challenges.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
                <h3 className="feature-title">Scalable Solutions</h3>
                <p className="feature-desc">
                  Hrify Digital offers flexible pricing models to accommodate clients with limited resources, ensuring they receive necessary IT services within their budget.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
                <h3 className="feature-title">Legacy Systems & Infrastructure</h3>
                <p className="feature-desc">
                  Hrify Digital consults on legacy system vulnerabilities, updating and securing infrastructure for modern IT requirements.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <h3 className="feature-title">Vendor Risk Management</h3>
                <p className="feature-desc">
                  Hrify Digital manages vendor risk for clients, ensuring third-party vendors meet IT security standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Cyber Solution Case Studies</h2>
            <p className="section-intro">
              See how we've helped organizations strengthen their IT infrastructure
            </p>

            <div className="case-studies-grid">
              <div className="case-card">
                <div className="case-image-wrapper">
                  <img src={Cyber_finace} alt="Financial Services" className="case-image" />
                </div>
                <div className="case-content">
                  <h3 className="case-title">Financial Services</h3>
                  <p className="case-desc">
                    How we helped a financial institution secure their digital infrastructure and meet compliance requirements.
                  </p>
                </div>
              </div>

              <div className="case-card">
                <div className="case-image-wrapper">
                  <img src={Cyber_helth} alt="Healthcare" className="case-image" />
                </div>
                <div className="case-content">
                  <h3 className="case-title">Healthcare</h3>
                  <p className="case-desc">
                    Implementing robust security measures for a healthcare provider while ensuring HIPAA compliance.
                  </p>
                </div>
              </div>

              <div className="case-card">
                <div className="case-image-wrapper">
                  <img src={Cybermanifacter1} alt="Manufacturing" className="case-image" />
                </div>
                <div className="case-content">
                  <h3 className="case-title">Manufacturing</h3>
                  <p className="case-desc">
                    Securing operational technology and IT infrastructure for a global manufacturing company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" id="contact">
          <div className="container">
            <h2 className="section-title">Ready to Secure Your Organization?</h2>
            <p className="section-intro" style={{color:'black'}}>
              Schedule a consultation with our IT experts today
            </p>
            <a href="#schedule" className="btn-white">
              Schedule a Meeting
            </a> <br/> <br/>
            <p className="mt-3 opacity-90" style={{textAlign:'center'}}>
              Our team will get back to you within 24 hours
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CyberAdvisory;

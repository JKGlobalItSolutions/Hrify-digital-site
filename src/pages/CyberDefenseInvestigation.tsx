import React from 'react';
const BannerImage = '/assets/images/newBanner/cy14.webp';
const Cyberdefrnse = '/assets/images/cyberdefrnse.webp';

const CyberDefenseInvestigation = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="Cyber Defense Investigation Banner" className="banner-img" />
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
              grid-template-columns: repeat(3, 1fr);
              gap: 1.5rem;
              max-width: 600px;
              margin: 4rem auto;
            }

            .icon-card {
              text-align: center;
              padding: 1.5rem;
              background: #f9f9f9;
              border-radius: 12px;
            }

            .icon-card svg {
              width: 48px;
              height: 48px;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .icon-card span {
              font-weight: 600;
              font-size: 1.1rem;
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
                grid-template-columns: repeat(2, 1fr);
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
              background: #e9ecef;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .case-image-wrapper svg {
              width: 80px;
              height: 80px;
              color: #adb5bd;
            }

            .case-content {
              padding: 2rem;
              text-align: left;
            }

            .case-category {
              font-size: 0.95rem;
              color: #888;
              margin-bottom: 0.5rem;
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

            .contact-section {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
            }

            .contact-form {
              max-width: 600px;
              margin: 3rem auto 0;
              background: rgba(255,255,255,0.1);
              padding: 2.5rem;
              border-radius: 16px;
              backdrop-filter: blur(10px);
            }

            .contact-form label {
              display: block;
              margin-bottom: 0.5rem;
              font-weight: 500;
            }

            .contact-form input,
            .contact-form textarea {
              width: 100%;
              padding: 0.8rem 1rem;
              border-radius: 8px;
              border: none;
              margin-bottom: 1.5rem;
              background: rgba(255,255,255,0.9);
              color: #333;
            }

            .contact-form textarea {
              min-height: 120px;
              resize: vertical;
            }

            .submit-btn {
              background: white;
              color: #1B8DBB;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              border: none;
              cursor: pointer;
              width: 100%;
            }

            .submit-btn:hover {
              background: #f0f0f0;
            }
          `}
        </style>

        {/* Hero Section Below Banner */}
        <div className="text-center">
          <h1 className="main-title">
            Identify, Analyze & Mitigate Malicious Activities
          </h1>
          <p className="main-subtitle">
            A strong cyber defense solution where everything and everyone is accounted for to uphold security and ensure the countermeasures are up-to-date with current innovations.
          </p>

          {/* Icon Cards */}
          <div className="icon-grid">
            <div className="icon-card">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>Confidentiality</span>
            </div>
            <div className="icon-card">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Integrity</span>
            </div>
            <div className="icon-card">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Availability</span>
            </div>
          </div>

          <a href="#contact" className="cta-button">
            Schedule a Consultation
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }}>
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>

        {/* Services Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Elevate your Cyber Defense with JK Global IT Solutions</h2>
            <p className="section-intro">
              Align, automate, collaborate, excel in investigations, and ensure compliance effortlessly.
            </p>

            <div className="service-card">
              <p>
                JK Global IT Solutions, a leading provider of integrated Cyber Defense and Investigation services, seamlessly aligns cybersecurity measures with your organizational goals. Skilled professionals and legal experts tackle complexities, ensuring compliance. With robust data acquisition and preservation, including advanced forensics, evidence integrity is maintained. Facilitating collaboration through a centralized system, we advocate for increased budgets and prioritize resource investments. Committed to fortifying cyber defense, JK Global IT Solutions excels in investigations.
              </p>
              <a href="#contact" className="cta-button">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Support Features Section */}
        <section className="section" style={{ backgroundColor: '#fff5f5' }}>
          <div className="container">
            <h2 className="section-title">Support Features</h2>
            <p className="section-intro">
              Comprehensive cybersecurity solutions tailored to your organization's needs
            </p>

            <div className="features-grid">
              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
                <h3 className="feature-title">Threat Intelligence Network</h3>
                <p className="feature-desc">
                  JK Global IT Solutions extensive partnerships provide real-time threat intelligence, trend updates, and collaborative sharing.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <h3 className="feature-title">User-Centric Security Measures</h3>
                <p className="feature-desc">
                  We use employee input to create user-friendly security measures, including multi-factor authentication, secure remote access, and password managers.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h3 className="feature-title">Legacy System Risk Mitigation Plan</h3>
                <p className="feature-desc">
                  JK Global IT Solutions addresses vulnerable legacy systems using network segmentation, intrusion detection, patching, and upgrades/replacements.
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
                <h3 className="feature-title">Compliance Management Framework</h3>
                <p className="feature-desc">
                  Our expert team ensures compliance with cybersecurity regulations and standards using automated tools.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3 className="feature-title">Strategic Budget Allocation</h3>
                <p className="feature-desc">
                  We at JK Global IT Solutions take cybersecurity seriously, investing in tech and skilled professionals to avoid financial and reputational harm from cyber attacks.
                </p>
              </div>

              <div className="feature-card">
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <h3 className="feature-title">Cybersecurity Awareness Program</h3>
                <p className="feature-desc">
                  JK Global IT Solutions implements a comprehensive cybersecurity awareness program, encompassing training, workshops, and campaigns to educate employees on threats and best practices for security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Cybersecurity Case Studies</h2>
            <p className="section-intro">
              Real-world examples of how we've helped organizations strengthen their security posture
            </p>

            <div className="case-studies-grid">
              <div className="case-card">
                <div className="case-image-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <div className="case-content">
                  <p className="case-category">Banking & Finance</p>
                  <h3 className="case-title">Financial Institution Breach Prevention</h3>
                  <p className="case-desc">
                    A major financial institution faced sophisticated phishing attacks targeting customer data. JK Global IT Solutions implemented advanced threat detection systems and employee training, reducing successful attacks by 98% within three months.
                  </p>
                </div>
              </div>

              <div className="case-card">
                <div className="case-image-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="case-content">
                  <p className="case-category">Healthcare</p>
                  <h3 className="case-title">Healthcare Data Protection</h3>
                  <p className="case-desc">
                    A healthcare network with 12 facilities needed to strengthen HIPAA compliance and protect patient data. Our team implemented a comprehensive security framework that achieved 100% compliance while improving system performance.
                  </p>
                </div>
              </div>

              <div className="case-card">
                <div className="case-image-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="case-content">
                  <p className="case-category">Manufacturing</p>
                  <h3 className="case-title">Manufacturing Supply Chain Security</h3>
                  <p className="case-desc">
                    A global manufacturer experienced supply chain disruptions due to security vulnerabilities. JK Global IT Solutions secured their entire supply chain network, preventing an estimated $4.2M in potential losses from future attacks.
                  </p>
                </div>
              </div>

              <div className="case-card">
                <div className="case-image-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="case-content">
                  <p className="case-category">Public Sector</p>
                  <h3 className="case-title">Government Agency Compliance</h3>
                  <p className="case-desc">
                    A government agency needed to meet stringent new cybersecurity requirements. Our team implemented a compliance management framework that achieved certification in record time while strengthening overall security posture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / CTA Section */}
        <section className="contact-section" id="contact">
          <div className="container text-center">
            <h2 className="section-title" style={{ color: 'white' }}>Schedule a Consultation</h2>
            <p className="section-intro" style={{ color: '#f0f0f0' }}>
              Ready to strengthen your cybersecurity posture? Our experts are ready to help.
            </p>

            <div className="contact-form">
              <form>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Enter your name" required />

                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Enter your email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell us about your cybersecurity needs" required></textarea>

                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CyberDefenseInvestigation;


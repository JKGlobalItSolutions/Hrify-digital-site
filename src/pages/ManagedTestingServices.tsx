import React from 'react';
const ManagedTestingServices1 = '/assets/images/newBanner/ma.ser.webp';
const Performance = '/assets/images/placeholder.webp';
const Ci = '/assets/images/placeholder.webp';
const Softwarvald = '/assets/images/placeholder.webp';
const Softwareqa = '/assets/images/placeholder.webp';





const ManagedTestingServices = () => {
  return (
    <main>
      {/* Static Banner Section - Similar to Home but Single Image */}
      <div className="slider">
        <div className="slides">
          <div className="slide">
            <img src="/assets/images/newBanner/ma.ser.webp" alt="Managed Testing Services Banner" />
          </div>
        </div>
      </div>

      <div className="container py-5">
        <style>
          {`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin-bottom: 1.5rem;
            }

            .main-subtitle {
              color: #444;
              max-width: 900px;
              font-size: 1.2rem;
              line-height: 1.7;
              margin-bottom: 2rem;
            }

            .cta-button {
              display: block;
              width: fit-content;
              background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
              transition: all 0.3s ease;
              border: none;
            }

            .cta-button:hover {
              background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
              color: white;
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin-bottom: 3rem;
            }

            .feature-card {
              background: white;
              border-radius: 16px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              height: 100%;
              display: flex;
              flex-direction: column;
            }

            .feature-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            }

            .feature-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
              flex-grow: 1;
            }

            .icon-wrapper {
              width: 80px;
              height: 80px;
              background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
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

            .image-grid-container {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
              max-width: 500px;
              width: 100%;
            }

            .grid-card {
              background: white;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 2px 8px rgba(0,0,0,0.1);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .grid-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 6px 16px rgba(0,0,0,0.15);
            }

            .grid-image {
              width: 100%;
              height: 140px;
              object-fit: cover;
            }

            .grid-card-content {
              padding: 1rem;
              text-align: center;
            }

            .grid-card-title {
              font-size: 1rem;
              font-weight: 600;
              background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin-bottom: 0.5rem;
            }

            .grid-card-description {
              font-size: 0.75rem;
              color: #666;
              line-height: 1.4;
            }

            @media (max-width: 992px) {
              .main-title {
                font-size: 2.4rem;
              }
              .image-grid-container {
                max-width: 450px;
              }
              .grid-image {
                height: 120px;
              }
              .grid-card-title {
                font-size: 0.95rem;
              }
              .grid-card-description {
                font-size: 0.7rem;
              }
            }

            @media (max-width: 768px) {
              .main-title {
                font-size: 2rem;
              }
              .main-subtitle {
                font-size: 1.1rem;
              }
              .image-grid-container {
                max-width: 400px;
                margin: 0 auto;
              }
              .grid-image {
                height: 110px;
              }
            }

            @media (max-width: 576px) {
              .main-title {
                font-size: 1.8rem;
              }
              .image-grid-container {
                max-width: 350px;
              }
              .grid-image {
                height: 100px;
              }
              .grid-card-content {
                padding: 0.75rem;
              }
            }

            .hero-section-bg {
              background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            }
          `}
        </style>

        {/* Hero Section Below Banner */}
        <section className="hero-section-bg py-5" style={{ marginTop: '0', borderRadius: '16px' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-7 mb-4 mb-lg-0">
                <h1 className="main-title">
                  Managed Testing Services That Ensure Precise Software Execution
                </h1>
                <p className="main-subtitle">
                  Alleviate testing complexities with confidence. Get comprehensive testing solutions and deliver high-quality results with software excellence.
                </p>
                <a href="#contact" className="cta-button">
                  Book a Meeting
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px', display: 'inline-block', verticalAlign: 'middle' }}>
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end">
                <div className="image-grid-container">
                  <div className="grid-card">
                    <img className="grid-image" src={Performance} alt="Performance Testing" />
                    <div className="grid-card-content">
                      <h3 className="grid-card-title">Performance Testing</h3>
                      <p className="grid-card-description">Comprehensive evaluation of system performance under various conditions</p>
                    </div>
                  </div>
                  <div className="grid-card">
                    <img className="grid-image" src={Ci} alt="Continuous Integration" />
                    <div className="grid-card-content">
                      <h3 className="grid-card-title">Continuous Integration</h3>
                      <p className="grid-card-description">Seamless integration of testing into your development pipeline</p>
                    </div>
                  </div>
                  <div className="grid-card">
                    <img className="grid-image" src={Softwarvald} alt="Software Validation" />
                    <div className="grid-card-content">
                      <h3 className="grid-card-title">Software Validation</h3>
                      <p className="grid-card-description">Ensuring your software meets all requirements and specifications</p>
                    </div>
                  </div>
                  <div className="grid-card">
                    <img className="grid-image" src={Softwareqa} alt="Quality Engineering" />
                    <div className="grid-card-content">
                      <h3 className="grid-card-title">Quality Engineering</h3>
                      <p className="grid-card-description">End-to-end quality assurance throughout development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Approach</h2>
            <p className="main-subtitle " style={{textAlign:'justify', alignItems:'center'}}>
              JK Global IT Solution's Managed Testing Services deliver meticulous and specialized testing, ensuring precise software execution. We alleviate testing complexities and time-to-market pressures, empowering excellence in applications.
            </p>
            <p className="main-subtitle " style={{textAlign:'justify'}}>
              JK Global IT Solution's Managed Testing Services offer a complete solution for testing and certifying business functionality, performance, and security. We use our in-house tools and our team's expertise to deliver high-quality output, measurable improvements, and effective defect identification in the production ecosystem. By maintaining proactive and transparent communication with our clients, JK Global IT Solution enhances businesses to focus on their core activities with confidence, knowing that their software is reliable and precise.
            </p>
          </div>
        </section>

        {/* Support Features Section */}
        <section className="section" style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)', borderRadius: '16px', padding: '4rem 2rem' }}>
          <div className="container">
            <h2 className="section-title">Support Features</h2>
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature-card">
                  <div className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <h4>Costs & Infrastructure</h4>
                  <p className="text-muted">Cost Management</p>
                  <p>
                    Our team consistently evaluates the cost-effectiveness of our Managed Testing Services through careful analysis of expenses and benefits to optimize our pricing models.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature-card">
                  <div className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <h4>Data Security & Privacy</h4>
                  <p className="text-muted">Data Security & Confidentiality</p>
                  <p>
                    JK Global IT Solution prioritizes data security and confidentiality. By implementing robust encryption protocols, secure data storage practices, and adherence to industry regulations, we instill confidence in clients regarding protecting their sensitive information.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature-card">
                  <div className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                      <path d="M12 13v8"></path>
                      <path d="M5 13v6a2 2 0 0 0 2 2h8"></path>
                    </svg>
                  </div>
                  <h4>Minimizing Business Outages</h4>
                  <p className="text-muted">Reducing Dependency</p>
                  <p>
                    We actively engage our clients' development teams during testing. By involving clients in planning sessions and discussions, we ensure seamless integration of our services with the development process.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature-card">
                  <div className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h4>Parameter Optimization</h4>
                  <p className="text-muted">Integration With Development</p>
                  <p>
                    We position ourselves as a strategic partner in the development process. By collaborating closely with clients from the early stages, we align our testing efforts with development goals and timelines.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature-card">
                  <div className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 7v6h-6"></path>
                      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"></path>
                    </svg>
                  </div>
                  <h4>Continuous Improvement</h4>
                  <p className="text-muted">Flexibility & Scalability</p>
                  <p>
                    JK Global IT Solution offers flexible service packages to accommodate varying testing needs. The ability to scale resources ensures clients receive tailored testing solutions.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature-card">
                  <div className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                      <path d="M8 21h8"></path>
                      <path d="M12 17v4"></path>
                    </svg>
                  </div>
                  <h4>Legacy Systems Compatibility</h4>
                  <p className="text-muted">Monitoring & Accountability</p>
                  <p>
                    We adhere to clear SLAs with our clients, defining key performance indicators (KPIs) and ensuring regular reporting and progress updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section">
          <div className="container text-center">
            <div style={{
              background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
              color: 'white',
              padding: '4rem 2rem',
              borderRadius: '16px',
              boxShadow: '0 8px 30px rgba(30, 58, 138, 0.2)'
            }}>
              <h2 className="text-white mb-4" style={{ fontSize: '2.5rem', fontWeight: '700' }}>
                Quality Engineering Case Studies
              </h2>
              <p className="mb-4" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2rem', opacity: '0.95' }}>
                Discover how we've helped businesses achieve excellence through our comprehensive testing solutions
              </p>
              <a href="#" style={{
                background: 'white',
                color: '#1e3a8a',
                padding: '1rem 2.5rem',
                borderRadius: '9999px',
                fontWeight: '600',
                fontSize: '1.1rem',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => (e.target as HTMLAnchorElement).style.background = '#f0f0f0'}
              onMouseOut={(e) => (e.target as HTMLAnchorElement).style.background = 'white'}
              >
                View Case Studies
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px', display: 'inline-block', verticalAlign: 'middle' }}>
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Bootstrap JS Bundle with Popper */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </main>
  );
};

export default ManagedTestingServices;

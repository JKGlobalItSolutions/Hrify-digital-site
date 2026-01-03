import React from 'react';

const BannerImage = '/assets/images/newBanner/data.an8.webp';
const DataFabricImg = '/assets/images/Banner/newbanimg/Data-Fabric.webp';

const DataFabric = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="Data Fabric Banner" className="banner-img" />
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
            :root {
              --primary: #1B8DBB;
              --primary-dark: #15749A;
              --secondary: #4FC3F7;
              --dark: #1e293b;
              --light: #f8fafc;
              --gray: #64748b;
              --light-gray: #e2e8f0;
              --gradient-start: #15749A;
              --gradient-end: #1B8DBB;
              --light-red: #E8F4FA;
            }

            body {
              font-family: 'Poppins', sans-serif;
              color: var(--dark);
              background-color: var(--light);
              line-height: 1.6;
            }

            .section-title {
              font-weight: 700;
              margin-bottom: 1rem;
              position: relative;
              display: inline-block;
              color: var(--primary);
            }

            .section-title::after {
              content: '';
              position: absolute;
              bottom: -10px;
              left: 0;
              width: 50px;
              height: 4px;
              background: var(--secondary);
              border-radius: 2px;
            }

            .text-center .section-title::after {
              left: 50%;
              transform: translateX(-50%);
            }

            .hero-section {
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              color: white;
              padding: 7rem 0;
              position: relative;
              overflow: hidden;
            }

            .hero-section::before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0,0,0,0.1);
              z-index: 0;
            }

            .hero-content {
              position: relative;
              z-index: 1;
            }

            .hero-image {
              position: relative;
              z-index: 1;
            }

            .benefit-card {
              background-color: rgba(255, 255, 255, 0.15);
              backdrop-filter: blur(10px);
              border-radius: 12px;
              padding: 1.5rem;
              transition: transform 0.3s ease;
              height: 100%;
              border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .benefit-card:hover {
              transform: translateY(-5px);
            }

            .feature-card {
              background-color: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
              transition: all 0.3s ease;
              height: 100%;
              border: 1px solid var(--light-gray);
            }

            .feature-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            }

            .feature-icon {
              width: 80px;
              height: 80px;
              background-color: var(--light-red);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 1.5rem;
              color: var(--primary);
              font-size: 2rem;
            }

            .feature-card h3 {
              color: var(--primary);
              font-weight: 600;
              margin-bottom: 1rem;
            }

            .case-study-card {
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
              height: 100%;
              background-color: white;
              border: 1px solid var(--light-gray);
              transition: all 0.3s ease;
            }

            .case-study-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            }

            .case-study-image {
              height: 200px;
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            }

            .case-study-tag {
              position: absolute;
              top: 1rem;
              left: 1rem;
              background-color: rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(5px);
              padding: 0.5rem 1rem;
              border-radius: 30px;
              font-size: 0.8rem;
              font-weight: 500;
            }

            .contact-section {
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              color: white;
              padding: 5rem 0;
              position: relative;
              overflow: hidden;
            }

            .contact-section::before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0,0,0,0.05);
              z-index: 0;
            }

            .contact-form {
              background-color: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
              padding: 2.5rem;
              position: relative;
              z-index: 1;
            }

            .form-control, .form-select {
              padding: 0.8rem 1.2rem;
              border-radius: 8px;
              border: 1px solid var(--light-gray);
              background-color: var(--light);
              transition: all 0.3s ease;
            }

            .form-control:focus, .form-select:focus {
              border-color: var(--primary);
              box-shadow: 0 0 0 3px rgba(27, 141, 187, 0.1);
            }

            .btn-primary {
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              border: none;
              padding: 0.8rem 2rem;
              border-radius: 8px;
              font-weight: 500;
              transition: all 0.3s ease;
            }

            .btn-primary:hover {
              background: linear-gradient(135deg, var(--primary-dark), var(--gradient-start));
              transform: translateY(-3px);
              box-shadow: 0 10px 20px rgba(27, 141, 187, 0.2);
            }

            .btn-outline {
              background: transparent;
              border: 2px solid white;
              color: white;
              padding: 0.8rem 2rem;
              border-radius: 8px;
              font-weight: 500;
              transition: all 0.3s ease;
            }

            .btn-outline:hover {
              background: white;
              color: var(--primary);
              transform: translateY(-3px);
              box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
            }

            .section-bg {
              background-color: var(--light-red);
            }

            .service-box {
              background-color: white;
              border-radius: 16px;
              padding: 2.5rem;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
              border: 1px solid var(--light-gray);
            }

            .floating-shape {
              position: absolute;
              opacity: 0.1;
              z-index: 0;
            }

            .shape-1 {
              top: 10%;
              left: 5%;
              width: 300px;
              height: 300px;
              border-radius: 50%;
              background: var(--secondary);
            }

            .shape-2 {
              bottom: 10%;
              right: 5%;
              width: 200px;
              height: 200px;
              border-radius: 50%;
              background: var(--primary);
            }
          `}
        </style>

        {/* Hero Section - Fully Preserved from Original */}
        <section className="hero-section">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0 hero-content">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-2 bg-white text-primary px-3 py-1 rounded-pill" style={{ fontSize: '0.8rem', fontWeight: '600' }}>
                    Home » Data Analytics » Data Fabric
                  </div>
                </div>
                <h1 className="display-4 fw-bold mb-4">Connect Data & Synchronize With Data Fabric</h1>
                <p className="lead mb-5">Data is challenging. It always has been. With our data fabric solutions, enable your company to make more informed decisions and stay one step ahead of the competition.</p>
                <div className="row mb-4">
                  <div className="col-md-4">
                    <div className="benefit-card">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-network-wired me-3" style={{ fontSize: '1.5rem' }}></i>
                        <h5 className="fw-semibold mb-0">Data Fabric Architecture</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="benefit-card">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-expand-arrows-alt me-3" style={{ fontSize: '1.5rem' }}></i>
                        <h5 className="fw-semibold mb-0">Data Scalable Solutions</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="benefit-card">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-project-diagram me-3" style={{ fontSize: '1.5rem' }}></i>
                        <h5 className="fw-semibold mb-0">Enterprise Data Integration</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#contact" className="btn btn-outline btn-lg px-4 rounded-pill">Book a Meeting</a>
              </div>
              <div className="col-lg-6 hero-image">
                <img src="https://via.placeholder.com/600x500" alt="Data Fabric Visualization" className="img-fluid rounded-4 shadow" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Preserved with Better Spacing */}
        <section className="py-5 section-bg">
          <div className="container py-5">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="display-5 fw-bold section-title mb-4">Data & Analytics</h2>
                <p className="lead text-muted">
                  By integrating and synchronizing data from various sources in real-time, JK Global IT Solution ensures accuracy and security for your business with Data Fabric solutions.
                </p>
              </div>
            </div>
            <div className="service-box mb-5">
              <p className="text-muted mb-0">
                JK Global IT Solution's data fabric solution is designed to provide your business with the best-in-class data integration to provide a unified view of data from various sources, allowing your business to integrate data from different systems and applications quickly. Our team ensures accuracy and real-time access while maintaining strong data security against unauthorized access or loss. Seamlessly integrate, access, and protect your data with our comprehensive solution.
              </p>
            </div>
            <div className="text-center">
              <a href="#contact" className="btn btn-primary btn-lg px-5 rounded-pill">Book a Meeting</a>
            </div>
          </div>
        </section>

        {/* Support Features Section - Preserved with Better Spacing */}
        <section className="py-5">
          <div className="container py-5">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="display-5 fw-bold section-title mb-4">Support Features</h2>
                <p className="lead text-muted">
                  Our comprehensive Data Fabric capabilities to help you connect, integrate, and synchronize your enterprise data.
                </p>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-link"></i>
                  </div>
                  <h3>Seamless Data Integration</h3>
                  <p className="text-muted mb-0">
                    We at JK Global IT Solution excel in connecting data sources seamlessly, empowering our clients with easy access to unified data.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h3>Top-tier Data Security</h3>
                  <p className="text-muted mb-0">
                    At JK Global IT Solution, Data Security is our top priority. We implement strong encryption, strict access controls, and regulatory compliance to ensure data safety.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-arrows-alt"></i>
                  </div>
                  <h3>Scalability on Demand</h3>
                  <p className="text-muted mb-0">
                    Our team at JK Global IT Solution offers cloud-based solutions that scale effortlessly to meet our clients' growing data demands.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-balance-scale"></i>
                  </div>
                  <h3>Empowering Data Governance</h3>
                  <p className="text-muted mb-0">
                    JK Global IT Solution empowers our clients with comprehensive data cataloging and lineage tracking, fostering better data governance practices.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>Reliable Data Quality</h3>
                  <p className="text-muted mb-0">
                    At JK Global IT Solution, we are committed to delivering reliable data quality management, providing our clients with accurate and consistent data.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-history"></i>
                  </div>
                  <h3>Legacy Systems Compatibility</h3>
                  <p className="text-muted mb-0">
                    Our team at JK Global IT Solution specializes in the seamless integration of legacy systems with modern data fabric technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section - Preserved */}
        <section className="py-5 section-bg">
          <div className="container py-5">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="display-5 fw-bold section-title mb-4">Data & Analytics Case Studies</h2>
                <p className="lead text-muted">
                  Discover how our Data Fabric solutions have transformed businesses through seamless data integration and synchronization.
                </p>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="case-study-card">
                  <div className="case-study-image">
                    <span className="case-study-tag">Healthcare</span>
                    <i className="fas fa-heartbeat" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <div className="p-4">
                    <h3 className="h4 fw-bold mb-3">Unified Patient Data</h3>
                    <p className="text-muted mb-3">
                      Reduced data access time by 85% and improved care coordination by 47% through a unified patient data platform for a major healthcare provider.
                    </p>
                    <a href="#" className="btn btn-primary btn-sm px-3 rounded-pill">View Case Study</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="case-study-card">
                  <div className="case-study-image">
                    <span className="case-study-tag">Financial Services</span>
                    <i className="fas fa-university" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <div className="p-4">
                    <h3 className="h4 fw-bold mb-3">Real-time Risk Assessment</h3>
                    <p className="text-muted mb-3">
                      Enhanced fraud detection by 68% and reduced risk assessment time by 73% with our real-time data fabric solution for a global financial institution.
                    </p>
                    <a href="#" className="btn btn-primary btn-sm px-3 rounded-pill">View Case Study</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="case-study-card">
                  <div className="case-study-image">
                    <span className="case-study-tag">Retail</span>
                    <i className="fas fa-shopping-cart" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <div className="p-4">
                    <h3 className="h4 fw-bold mb-3">Omnichannel Data Integration</h3>
                    <p className="text-muted mb-3">
                      Increased cross-channel sales by 52% and improved inventory accuracy by 38% through seamless omnichannel data integration for a national retail chain.
                    </p>
                    <a href="#" className="btn btn-primary btn-sm px-3 rounded-pill">View Case Study</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DataFabric;


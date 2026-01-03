import React from 'react';

const BannerImage = '/assets/images/newBanner/data.an5.webp';

const Analytics = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="Analytics Banner" className="banner-img" />
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
              background-image: url('https://via.placeholder.com/1920x1080');
              background-size: cover;
              opacity: 0.1;
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
              background-image: url('https://via.placeholder.com/1920x1080');
              background-size: cover;
              opacity: 0.05;
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

        {/* Hero Section - Fully Restored from Original */}
        <section className="hero-section" style={{borderRadius:10}}>
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0 hero-content">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-2 bg-white text-primary px-3 py-1 rounded-pill" style={{ fontSize: '0.8rem', fontWeight: '600' }}>
                    Home » Data Analytics » Analytics
                  </div>
                </div>
                <h1 className="display-4 fw-bold mb-4">Make Every Decision Count</h1>
                <p className="lead mb-5">Go beyond basic reporting to uncover hidden patterns, predict future trends, with actionable insights to optimize performance and achieve your business goals.</p>
                <div className="row mb-4">
                  <div className="col-md-4">
                    <div className="benefit-card">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-lightbulb me-3" style={{ fontSize: '1.5rem' }}></i>
                        <h5 className="fw-semibold mb-0">Actionable Insights</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="benefit-card">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-chart-bar me-3" style={{ fontSize: '1.5rem' }}></i>
                        <h5 className="fw-semibold mb-0">Data-Driven Decisions</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="benefit-card">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-rocket me-3" style={{ fontSize: '1.5rem' }}></i>
                        <h5 className="fw-semibold mb-0">Optimize Performance</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#contact" className="btn btn-outline btn-lg px-4 rounded-pill">Schedule a Meeting</a>
              </div>
              <div className="col-lg-6 hero-image">
                <img src="https://placehold.co/600x400" alt="Analytics Visualization" className="img-fluid rounded-4 shadow" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Restored */}
        <section className="py-5 section-bg">
          <div className="container py-5">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="display-5 fw-bold section-title mb-4">Data & Analytics</h2>
                <p className="lead text-muted">
                  Explore JK Global IT Solution's Analytics For Advanced Statistics, Powerful Visualization, And Cutting-Edge Machine Learning For Precise Insights And Smart Decisions.
                </p>
              </div>
            </div>
            <div className="service-box mb-5">
              <p className="text-muted mb-0">
                JK Global IT Solution's Data Analytics can offer top-notch risk management where analytics can identify potential threats and vulnerabilities by analyzing data, helping your business minimize losses and protect your reputation. In contrast, predictive analysis helps to anticipate changes in the markets and optimize operations and strategic decisions based on reliable data to ready your business for radical changes in the ever-changing business environment.
              </p>
            </div>
            <div className="text-center">
              <a href="#contact" className="btn btn-primary btn-lg px-5 rounded-pill">Schedule a Meeting</a>
            </div>
          </div>
        </section>

        {/* Support Features Section - Restored with Better Spacing */}
        <section className="py-5">
          <div className="container py-5">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="display-5 fw-bold section-title mb-4">Support Features</h2>
                <p className="lead text-muted">
                  Our comprehensive analytics capabilities to help you transform data into strategic business advantages.
                </p>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-database"></i>
                  </div>
                  <h3>Data Quality & Availability</h3>
                  <p className="text-muted mb-0">
                    We at JK Global IT Solution have successfully implemented data quality checks and data cleansing processes, ensuring accurate and reliable insights. Centralizing data sources will streamline access, enabling our team to collaborate more efficiently.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h3>Data Security & Privacy</h3>
                  <p className="text-muted mb-0">
                    JK Global IT Solution takes data security seriously, enforcing strict access controls and authentication mechanisms, safeguarding sensitive information. Our commitment to compliance with data privacy regulations builds trust with customers and partners.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-link"></i>
                  </div>
                  <h3>Integration of Data Sources</h3>
                  <p className="text-muted mb-0">
                    JK Global IT Solution's centralized data landscape fosters better cross-departmental collaboration and data-driven decision-making. Data governance protocols facilitate seamless integration, minimizing data silos.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-coins"></i>
                  </div>
                  <h3>Costs & Infrastructure</h3>
                  <p className="text-muted mb-0">
                    By adopting cloud-based solutions, JK Global IT Solution optimizes costs and gains scalable data analytics resources. Utilizing open-source tools strategically maximizes our return on investment.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-balance-scale"></i>
                  </div>
                  <h3>Data Governance & Compliance</h3>
                  <p className="text-muted mb-0">
                    JK Global IT Solution's centralized data landscape fosters better cross-departmental collaboration and data-driven decision-making. Data governance protocols facilitate seamless integration, minimizing data silos.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <h3>Time Constraints</h3>
                  <p className="text-muted mb-0">
                    Our team prioritizes analytics projects based on impact and efficiently manages resources. Automating data processing tasks allows us to focus on strategic analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section - Restored */}
        <section className="py-5 section-bg">
          <div className="container py-5">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="display-5 fw-bold section-title mb-4">Data & Analytics Case Studies</h2>
                <p className="lead text-muted">
                  Discover how our Analytics solutions have transformed businesses through data-driven insights.
                </p>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="case-study-card">
                  <div className="case-study-image">
                    <span className="case-study-tag">E-Commerce</span>
                    <i className="fas fa-shopping-cart" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <div className="p-4">
                    <h3 className="h4 fw-bold mb-3">Customer Behavior Analysis</h3>
                    <p className="text-muted mb-3">
                      Increased conversion rates by 37% for an online retailer through advanced customer journey analytics and personalized recommendations.
                    </p>
                    <a href="#" className="btn btn-primary btn-sm px-3 rounded-pill">View Case Study</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="case-study-card">
                  <div className="case-study-image">
                    <span className="case-study-tag">Healthcare</span>
                    <i className="fas fa-heartbeat" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <div className="p-4">
                    <h3 className="h4 fw-bold mb-3">Operational Efficiency</h3>
                    <p className="text-muted mb-3">
                      Reduced patient wait times by 42% and optimized resource allocation for a hospital network using our advanced analytics platform.
                    </p>
                    <a href="#" className="btn btn-primary btn-sm px-3 rounded-pill">View Case Study</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="case-study-card">
                  <div className="case-study-image">
                    <span className="case-study-tag">Financial Services</span>
                    <i className="fas fa-chart-line" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <div className="p-4">
                    <h3 className="h4 fw-bold mb-3">Risk Management</h3>
                    <p className="text-muted mb-3">
                      Improved fraud detection accuracy by 68% and reduced false positives by 45% for a major financial institution using our predictive analytics.
                    </p>
                    <a href="#" className="btn btn-primary btn-sm px-3 rounded-pill">View Case Study</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Fully Restored */}
        <section id="contact" className="contact-section">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="display-5 fw-bold mb-3">Transform Your Data Into Strategic Advantage</h2>
                <p className="lead mb-0">
                  Our analytics experts are ready to help you uncover actionable insights that drive business growth.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="contact-form">
                  <form>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label fw-semibold text-dark">Your Name</label>
                        <input type="text" className="form-control" id="name" placeholder="John Smith" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label fw-semibold text-dark">Business Email</label>
                        <input type="email" className="form-control" id="email" placeholder="john@company.com" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="company" className="form-label fw-semibold text-dark">Company Name</label>
                        <input type="text" className="form-control" id="company" placeholder="Your Company, Inc." />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="industry" className="form-label fw-semibold text-dark">Industry</label>
                        <select className="form-select" id="industry">
                          <option selected>Select your industry</option>
                          <option value="finance">Finance & Banking</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="retail">Retail & E-commerce</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="technology">Technology</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label fw-semibold text-dark">Tell Us About Your Analytics Needs</label>
                        <textarea className="form-control" id="message" rows={4} placeholder="Describe your current analytics challenges and goals..."></textarea>
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary px-5 py-3 rounded-pill mt-3">Schedule a Meeting</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Analytics;


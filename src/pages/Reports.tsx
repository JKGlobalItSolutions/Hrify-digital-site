import React from 'react';
import { getAssetPath } from '@/utils/assetPath';

const ReportsImg = getAssetPath('/assets/images/newBanner/Evaluation.webp');

const Reports = () => {
  return (
    <main>
      {/* Static Banner Section - Similar to Home but Single Image */}
      <div className="slider">
        <div className="slides">
          <div className="slide">
            <img src={ReportsImg} alt="Reports Banner" />
          </div>
        </div>
      </div>

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

        {/* Hero Section - Fully Preserved from Original */}
        <section className="hero-section">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0 hero-content">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-2 bg-white text-primary px-3 py-1 rounded-pill" style={{ fontSize: '0.8rem', fontWeight: '600' }}>
                    Home » Data Analytics » Reporting
                  </div>
                </div>
                <h1 className="display-4 fw-bold mb-4">Streamline Reporting & Gain Strategic Advantage</h1>
                <p className="lead mb-5">Simplify complex data workflows and unlock strategic insights with our intelligent Reporting solutions.</p>
                <div className="row mb-4">
                  <div className="col-md-4">
                    <div className="benefit-card">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-robot me-3" style={{ fontSize: '1.5rem' }}></i>
                        <h5 className="fw-semibold mb-0">Automated Efficiency</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="benefit-card">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-sliders-h me-3" style={{ fontSize: '1.5rem' }}></i>
                        <h5 className="fw-semibold mb-0">Customizable Insights</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="benefit-card">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-bolt me-3" style={{ fontSize: '1.5rem' }}></i>
                        <h5 className="fw-semibold mb-0">Real-Time Advantage</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#contact" className="btn btn-outline btn-lg px-4 rounded-pill">Schedule a Consultation</a>
              </div>
              <div className="col-lg-6 hero-image">
                <img src="https://placehold.co/600x400" alt="Reporting Solutions Visualization" className="img-fluid rounded-4 shadow" />
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
                  Gain valuable insights for performance monitoring, business intelligence, risk management, forecasting, and informed decision-making with Hrify Digital's Report solutions.
                </p>
              </div>
            </div>
            <div className="service-box mb-5">
              <p className="text-muted mb-0">
                Hrify Digital's approach in reports with Data & Analytics is very valuable, enabling your business to analyze data, gain insights, and make informed decisions. In our structured format, reports can further help your business monitor performance, gain business intelligence, manage risks, and forecast future trends and outcomes, ultimately helping them to achieve better business outcomes.
              </p>
            </div>
            <div className="text-center">
              <a href="#contact" className="btn btn-primary btn-lg px-5 rounded-pill">Schedule a Consultation</a>
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
                  Our comprehensive reporting capabilities to help you transform raw data into actionable business intelligence.
                </p>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  <h3>Performance & Latency</h3>
                  <p className="text-muted mb-0">
                    Hrify Digital's experienced database optimization team continuously fine-tunes queries and indexing, ensuring efficient data retrieval for faster report generation.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-desktop"></i>
                  </div>
                  <h3>User Interface & Experience</h3>
                  <p className="text-muted mb-0">
                    Hrify Digital's customizable report templates and interactive visualizations allow clients to tailor reports according to their preferences easily.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-plug"></i>
                  </div>
                  <h3>Integration with Existing Systems</h3>
                  <p className="text-muted mb-0">
                    Hrify Digital offers seamless integration with various data warehouses and analytics tools, supported by their extensive library of data connectors and APIs.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-edit"></i>
                  </div>
                  <h3>Report Customization</h3>
                  <p className="text-muted mb-0">
                    Hrify Digital's report is designed with flexibility in mind, allowing clients to create custom reports using the company's intuitive report builder.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                  <h3>Costs & Licensing</h3>
                  <p className="text-muted mb-0">
                    Hrify Digital offers transparent pricing models, tailoring solutions to each client's unique needs, ensuring a cost-effective service without compromising quality.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-card p-4">
                  <div className="feature-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h3>Report Performance Optimization</h3>
                  <p className="text-muted mb-0">
                    Hrify Digital implements data optimization strategies, such as materialized views and query optimization, to enhance report performance and reduce processing times for their clients.
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
                  Discover how our Reporting solutions have transformed businesses through streamlined data insights.
                </p>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="case-study-card">
                  <div className="case-study-image">
                    <span className="case-study-tag">Retail</span>
                    <i className="fas fa-chart-pie" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <div className="p-4">
                    <h3 className="h4 fw-bold mb-3">Sales Performance Dashboard</h3>
                    <p className="text-muted mb-3">
                      Reduced reporting time by 85% and increased sales team productivity by 32% through automated daily performance dashboards for a national retail chain.
                    </p>
                    <a href="#" className="btn btn-primary btn-sm px-3 rounded-pill">View Case Study</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="case-study-card">
                  <div className="case-study-image">
                    <span className="case-study-tag">Manufacturing</span>
                    <i className="fas fa-industry" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <div className="p-4">
                    <h3 className="h4 fw-bold mb-3">Supply Chain Visibility</h3>
                    <p className="text-muted mb-3">
                      Improved inventory management by 47% and reduced stockouts by 62% with real-time supply chain reporting for a global manufacturing company.
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
                    <h3 className="h4 fw-bold mb-3">Patient Care Analytics</h3>
                    <p className="text-muted mb-3">
                      Enabled data-driven decision making that improved patient outcomes by 28% and reduced administrative reporting time by 75% for a regional hospital network.
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

export default Reports;


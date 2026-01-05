import React from 'react';
import { getAssetPath } from '../utils/assetPath';

const MlMlOpsBanner = getAssetPath('assets/images/M_MLOPS.jpg');

const MlMlOps = () => {
  return (
    <main>
        {/* Full-width Banner Image */}
        <div className="banner-full-image">
          <img src={MlMlOpsBanner} alt="ML / MLOps Banner" className="banner-img" />
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
              padding: 2.5rem 2rem;
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

            .icon-wrapper i {
              font-size: 2.2rem;
              color: white;
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

            .case-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .case-card {
              background: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            }

            .case-image {
              height: 200px;
              background: #1B8DBB;
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.2rem;
              font-weight: 600;
            }

            .case-content {
              padding: 2rem;
            }

            .case-content h4 {
              font-size: 1.3rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .case-content p {
              color: #666;
              line-height: 1.7;
              margin-bottom: 1.5rem;
            }

            .case-link {
              color: #1B8DBB;
              font-weight: 600;
              text-decoration: none;
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
            Transform Your Business with AI Excellence
          </h1>
          <p className="main-subtitle">
            Leverage cutting-edge machine learning solutions to drive innovation and stay ahead of the competition.
          </p>

          <div className="d-flex justify-content-center gap-4 flex-wrap mb-5">
            <div className="bg-white px-4 py-3 rounded-pill shadow-sm">
              <strong>Rapid Deployment</strong>
            </div>
            <div className="bg-white px-4 py-3 rounded-pill shadow-sm">
              <strong>Enhanced Accuracy</strong>
            </div>
            <div className="bg-white px-4 py-3 rounded-pill shadow-sm">
              <strong>Scalable Solutions</strong>
            </div>
          </div>

          <a href="#contact" className="cta-button">
            Get a Free Consultation
          </a>
        </div>

        {/* Services Description */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Intelligent Data Solutions</h2>
            <p className="main-subtitle">
              Hrify Digital delivers state-of-the-art ML & MLOps services that transform raw data into actionable intelligence for your business.
            </p>
            <p className="main-subtitle">
              Our advanced machine learning algorithms unlock hidden patterns in your data, enabling smarter decision-making across your organization. With our MLOps expertise, we ensure your AI models remain accurate, up-to-date, and continuously improving. From predictive analytics to natural language processing, our solutions are tailored to your specific industry challenges. We don't just implement technology – we partner with you to create sustainable competitive advantages through data-driven innovation.
            </p>

            <a href="#contact" className="cta-button">
              Request a Demo
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="section" style={{ backgroundColor: '#E8F4FA' }}>
          <div className="container">
            <h2 className="section-title">Our AI Capabilities</h2>

            <div className="features-grid">
              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-microchip"></i>
                </div>
                <h4>Industry Expertise</h4>
                <p>Our team works closely with industry specialists to develop ML solutions that address specific challenges in healthcare, finance, retail, and manufacturing sectors.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-server"></i>
                </div>
                <h4>High-Performance Computing</h4>
                <p>We leverage cutting-edge GPU clusters and distributed computing frameworks to train complex models in a fraction of the time required by traditional methods.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-cogs"></i>
                </div>
                <h4>Automated Optimization</h4>
                <p>Our proprietary optimization engine automatically tunes model parameters, saving countless hours of manual adjustment while achieving superior performance metrics.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-box"></i>
                </div>
                <h4>Containerized Deployment</h4>
                <p>We package models in Docker containers with Kubernetes orchestration, ensuring consistent performance across development, testing, and production environments.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-eye"></i>
                </div>
                <h4>Continuous Monitoring</h4>
                <p>Our advanced monitoring systems track model performance in real-time, alerting you to potential issues before they impact your business operations.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <h4>Adaptive Learning</h4>
                <p>Our models continuously learn from new data, automatically adapting to changing market conditions and customer behaviors without manual intervention.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-intro">
              See how our AI solutions have delivered measurable results for organizations like yours.
            </p>

            <div className="case-grid">
              <div className="case-card">
                <div className="case-image">
                  Financial Services
                </div>
                <div className="case-content">
                  <h4>Fraud Detection System</h4>
                  <p>Reduced fraudulent transactions by 87% for a major credit card provider using our advanced anomaly detection algorithms.</p>
                  <a href="#" className="case-link">View Case Study →</a>
                </div>
              </div>

              <div className="case-card">
                <div className="case-image">
                  Healthcare
                </div>
                <div className="case-content">
                  <h4>Patient Outcome Prediction</h4>
                  <p>Improved treatment planning accuracy by 42% for a hospital network using our predictive analytics platform.</p>
                  <a href="#" className="case-link">View Case Study →</a>
                </div>
              </div>

              <div className="case-card">
                <div className="case-image">
                  E-Commerce
                </div>
                <div className="case-content">
                  <h4>Personalization Engine</h4>
                  <p>Boosted conversion rates by 53% and average order value by 27% for an online retailer with our recommendation system.</p>
                  <a href="#" className="case-link">View Case Study →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Start Your AI Journey Today</h2>
            <p>Our experts are ready to discuss your unique challenges and how our AI solutions can drive measurable results for your business.</p>
            <a href="#contact" className="btn-white">
              Get a Free Consultation
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MlMlOps;

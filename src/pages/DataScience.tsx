import React from 'react';
const BannerImage = '/assets/images/newBanner/data.an4.webp';
const DataScienceImg = '/assets/images/Banner/newbanimg/datascience.webp';

const DataScience = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="Data Science Banner" className="banner-img" />
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
              text-align: justify;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .image-showcase {
              display: flex;
              justify-content: center;
              margin: 3rem 0;
            }

            .image-showcase img {
              max-width: 700px;
              width: 100%;
              height: auto;
              border-radius: 16px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            }

            @media (max-width: 768px) {
              .image-showcase img {
                max-width: 500px;
              }
            }

            @media (max-width: 576px) {
              .image-showcase img {
                max-width: 100%;
              }
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
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            }

            .case-tag {
              position: absolute;
              top: 1rem;
              left: 1rem;
              background: rgba(255,255,255,0.2);
              padding: 0.5rem 1rem;
              border-radius: 9999px;
              font-size: 0.9rem;
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
            From Data to Insights
          </h1>
          <p className="main-subtitle">
            Transform raw data into actionable insights and extract meaningful information to solve complex business problems.
          </p>

          <div className="d-flex justify-content-center gap-4 flex-wrap mb-5">
            <div className="bg-white px-4 py-3 rounded-pill shadow-sm">
              <strong>Data-Driven Decisions</strong>
            </div>
            <div className="bg-white px-4 py-3 rounded-pill shadow-sm">
              <strong>Improved Efficiency</strong>
            </div>
            <div className="bg-white px-4 py-3 rounded-pill shadow-sm">
              <strong>Predictive Analytics</strong>
            </div>
          </div>

          <a href="#contact" className="cta-button">
            Book a Meeting
          </a>
        </div>

        {/* Services Description */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Data & Analytics</h2>
            <p className="main-subtitle">
              Hrify Digital's expert Data Science services use statistical analysis, Machine Learning, and Data Insights for accurate prediction models and solutions.
            </p>
            <p className="main-subtitle">
              Hrify Digital's Data Science strategy helps businesses make better decisions by analyzing a large amount of data and identifying patterns and trends, which ensures data-driven decisions that are more accurate, reliable, and informed. Our strategy also helps your business detect and prevent fraud by analyzing transactional data and identifying anomalous patterns. This can help your business minimize losses and protect your reputation.
            </p>

            <a href="#contact" className="cta-button">
              Book a Meeting
            </a>
          </div>
        </section>

        {/* Support Features Section */}
        <section className="section" style={{ backgroundColor: '#E8F4FA' }}>
          <div className="container">
            <h2 className="section-title">Support Features</h2>
            <p className="section-intro">
              Our comprehensive data science capabilities to help you extract maximum value from your data.
            </p>

            <div className="features-grid">
              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Collaborating for Success</h4>
                <p>Hrify Digital facilitates interdisciplinary collaboration through regular meetings, workshops, and data visualization techniques to ensure insights are accessible to all stakeholders.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>Robust Privacy Measures</h4>
                <p>At Hrify Digital, we prioritize data privacy and security by implementing robust measures, including encryption and strict access controls.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4>Understanding Complexity</h4>
                <p>Hrify Digital offers model interpretability solutions, including the use of interpretable models and model-agnostic techniques for complex models.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-chart-pie"></i>
                </div>
                <h4>Maximizing ROI</h4>
                <p>Hrify Digital defines clear objectives and KPIs for Data Science projects, regularly assessing and measuring their impact for a strong ROI.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-cogs"></i>
                </div>
                <h4>Seamless Integration</h4>
                <p>We at Hrify Digital ensure the seamless adoption and integration of Data Science solutions by involving stakeholders from the beginning and providing ongoing support.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <h4>Ethical Data Governance</h4>
                <p>Hrify Digital emphasizes ethical data governance through well-defined policies, designated data stewards, and continuous education for our Data Science teams.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Data & Analytics Case Studies</h2>
            <p className="section-intro">
              Discover how our Data Science solutions have helped organizations unlock the value of their data.
            </p>

            <div className="case-grid">
              <div className="case-card">
                <div className="case-image">
                  <span className="case-tag">Retail Analytics</span>
                </div>
                <div className="case-content">
                  <h4>Customer Segmentation</h4>
                  <p>Increased marketing ROI by 45% for a retail chain through advanced customer segmentation and personalized targeting strategies.</p>
                  <a href="#" className="case-link">View Case Study →</a>
                </div>
              </div>

              <div className="case-card">
                <div className="case-image">
                  <span className="case-tag">Financial Services</span>
                </div>
                <div className="case-content">
                  <h4>Fraud Detection System</h4>
                  <p>Reduced fraudulent transactions by 78% for a banking institution using our anomaly detection and machine learning algorithms.</p>
                  <a href="#" className="case-link">View Case Study →</a>
                </div>
              </div>

              <div className="case-card">
                <div className="case-image">
                  <span className="case-tag">Manufacturing</span>
                </div>
                <div className="case-content">
                  <h4>Predictive Maintenance</h4>
                  <p>Decreased equipment downtime by 62% and maintenance costs by 35% through our predictive maintenance data science solution.</p>
                  <a href="#" className="case-link">View Case Study →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready to Unlock the Power of Your Data?</h2>
            <p>Our data science experts are ready to help you transform your raw data into valuable business insights.</p>
            <a href="#contact" className="btn-white">
              Schedule a Consultation
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DataScience;


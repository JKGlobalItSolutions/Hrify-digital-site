import React from 'react';
import { getAssetPath } from '../utils/assetPath';

const ComputerVisionImg = getAssetPath('assets/images/Banner/newbanimg/computervision.webp');

const ComputerVision = () => {
  return (
    <main>
      {/* Static Banner Section - Similar to Home but Single Image */}
      <div className="slider">
        <div className="slides">
          <div className="slide">
            <img src="/assets/images/newBanner/Data_an.webp" alt="Computer Vision Banner" />
          </div>
        </div>
      </div>

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
              background: #E8F4FA;
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
            Computer Vision
          </h1>
          <p className="main-subtitle">
            Advance Your Business With Computer Vision
          </p>
          <p className="main-subtitle">
            Create flawless products and a safe working environment with visual data recognition.
          </p>

          {/* <div className="image-shodowcase">
            <img src={ComputerVisionImg} alt="Computer Vision Solutions" />
          </div> */}

          <p className="main-subtitle">
            Hrify Digital's Computer Vision is a powerful tool for your business that enables machines to interpret and understand visual data, providing valuable insights that can inform decision-making and improve processes for more streamlined business operations. From manufacturing to healthcare, our solutions leverage advanced algorithms to enhance efficiency, safety, and innovation.
          </p>

          <p className="main-subtitle">
            Our Computer Vision services go beyond basic functionality, offering robust support features that ensure reliability, adaptability, and performance in real-world applications. We empower businesses to harness visual data for actionable outcomes.
          </p>

          <p className="main-subtitle">
            Hrify Digital's cutting-edge Computer Vision services empower AI experts to analyze visuals, unlock facial recognition, object detection, autonomous vehicles, and medical image analysis. Whether you're enhancing quality control, improving safety protocols, or driving innovation, our tailored solutions deliver measurable results that transform how businesses operate and compete in a data-driven world.
          </p>
        </div>

        {/* Core Capabilities Section */}
        <section className="section" style={{ backgroundColor: '#E8F4FA' }}>
          <div className="container">
            <h2 className="section-title">Core Capabilities</h2>

            <div className="features-grid">
              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-font"></i>
                </div>
                <h4>Optical Character Recognition (OCR)</h4>
                <p>Extract text from images and documents with high accuracy for automated data processing.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                <h4>Real-Time Processing</h4>
                <p>Optimize for real-time results with lightweight models for seamless edge device integration.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-video"></i>
                </div>
                <h4>Automate Surveillance</h4>
                <p>Enhance security with automated monitoring and detection of unusual activities.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-database"></i>
                </div>
                <h4>Data Quality & Quantity</h4>
                <p>Prioritize data curation and augmentation to ensure high-quality training datasets.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-globe"></i>
                </div>
                <h4>Real-World Variability</h4>
                <p>Specialized datasets for unique scenarios ensure effective performance in diverse environments.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-cogs"></i>
                </div>
                <h4>Model Size & Deployment</h4>
                <p>Flexible model options and continuous support for various computational needs.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-sync"></i>
                </div>
                <h4>Updates & Maintenance</h4>
                <p>Structured updates and proactive communication keep services reliable and current.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-bug"></i>
                </div>
                <h4>Edge Cases & Errors</h4>
                <p>Feedback-driven improvements enhance model robustness for challenging scenarios.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h4>Data & Analytics</h4>
                <p>Unlock valuable insights through advanced visual data analysis and case studies.</p>
              </div>
            </div>

            <a href="#contact" className="cta-button">
              Schedule a Consultation
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready to See the Future?</h2>
            <p>Let us implement powerful Computer Vision solutions that transform how your business sees the world.</p>
            <a href="#contact" className="btn-white">
              Talk to Our Experts
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ComputerVision;


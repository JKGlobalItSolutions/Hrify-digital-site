import React from 'react';
import { getAssetPath } from '../utils/assetPath';

const BannerImage = getAssetPath('assets/images/newBanner/data.an.webp');
const InternetOfThingsImg = getAssetPath('assets/images/Banner/newbanimg/Internet-of-Things.webp');
const Iot = getAssetPath('assets/images/erp/iot.webp');

const InternetOfThings = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="Internet of Things Banner" className="banner-img" />
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
              text-align: Justify;
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
            Internet of Things (IoT)
          </h1>
          <p className="main-subtitle">
            Lead Enterprise Integrity & Monetize Your Experience With IoT
          </p>
          <p className="main-subtitle">
            Develop and encompass user experience with IoT-powered data aggregation layer. Our solutions provide unrivaled edge-to-cloud connectivity, robust data security, and seamless device management for businesses of all scales.
          </p>

          <p className="main-subtitle">
            At Hrify Digital, we take IoT to the next level by offering a comprehensive suite of services that include governance, security, data analytics, and seamless integration. Our layered IoT architecture ensures smooth connectivity and intelligent automation, empowering businesses to make informed decisions.
          </p>

          <div className="image-showcase">
            <img src={Iot} alt="IoT Solutions" />
          </div>

          <p className="main-subtitle">
            Our IoT solutions integrate automation, data-driven decision-making, and robust security protocols, enabling businesses to unlock new opportunities and optimize performance. Whether you're improving device connectivity, securing data exchange, or leveraging real-time analytics, we have the expertise to transform your IoT vision into reality.
          </p>
        </div>

        {/* Key Features Section */}
        <section className="section" style={{ backgroundColor: '#E8F4FA' }}>
          <div className="container">
            <h2 className="section-title">Key Capabilities</h2>

            <div className="features-grid">
              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-cloud"></i>
                </div>
                <h4>Edge-To-Cloud Connectivity</h4>
                <p>Seamless data flow between edge devices and the cloud ensures uninterrupted performance.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>End-To-End Security</h4>
                <p>Encryption and authentication mechanisms ensure safe and reliable data exchange.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-cogs"></i>
                </div>
                <h4>Simplified Device Management</h4>
                <p>Effortless management and configuration of IoT devices through an intuitive platform.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-lock"></i>
                </div>
                <h4>Security Measures for Data Integrity</h4>
                <p>Advanced encryption techniques protect data against unauthorized access and breaches.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>Advanced Analytics Capabilities</h4>
                <p>Leverage real-time data insights to drive strategic decision-making and operational efficiency.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-network-wired"></i>
                </div>
                <h4>Standardized Communication Protocols</h4>
                <p>Ensuring seamless integration of diverse systems and IoT devices through standard protocols.</p>
              </div>
            </div>

            <a href="#contact" className="cta-button">
              Talk to Our Experts
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready to Transform with IoT?</h2>
            <p>Let us build intelligent, connected solutions that drive your business forward.</p>
            <a href="#contact" className="btn-white">
              Schedule a Consultation
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default InternetOfThings;


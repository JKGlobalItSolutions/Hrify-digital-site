import React from 'react';
const HyperledgerImg = '/assets/images/Banner/newbanimg/Hyperledger.webp';
import image from '../public/assets/images/newBanner/Block_Chain.jpg';


const Hyperledger = () => {
  return (
    <main>
      {/* Static Banner Section - Similar to Home but Single Image */}
      <div className="slider">
        <div className="slides">
          <div className="slide">
            <img src="/assets/images/newBanner/BL_11.webp" alt="Hyperledger Banner" />
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
              margin: 3rem 0; /* Reduced margin */
            }

            .image-showcase img {
              max-width: 700px; /* Medium size instead of full-width large */
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

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .process-grid,
            .benefits-grid,
            .industries-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .process-card,
            .benefit-card,
            .industry-card {
              background: white;
              border-top: 4px solid #1B8DBB;
              border-radius: 16px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
            }

            .process-card:hover,
            .benefit-card:hover,
            .industry-card:hover {
              transform: translateY(-8px);
            }

            .process-card h3,
            .benefit-card h3,
            .industry-card h3 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .process-card p,
            .benefit-card p,
            .industry-card p {
              color: #666;
              line-height: 1.7;
            }

            .testimonial-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
              max-width: 1000px;
              margin: 4rem auto;
            }

            @media (min-width: 768px) {
              .testimonial-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .testimonial-card {
              background: #fafafa;
              border-left: 5px solid #1B8DBB;
              border-radius: 12px;
              padding: 2rem;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            }

            .testimonial-card p {
              font-style: italic;
              color: #555;
              margin-bottom: 1.5rem;
            }

            .testimonial-author {
              font-weight: 600;
              color: #333;
              text-align: right;
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
            Empower Your Enterprise with Hyperledger
          </h1>
          <p className="main-subtitle">
            Unlock the future of secure and scalable blockchain solutions with Hyperledger technology.
          </p>

          <div className="image-showcase">
            <img src="/assets/images/blockchain/blockchain.webp" alt="Enterprise Blockchain Solution" />
          </div>
        </div>

        {/* Process Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Process</h2>
            <p className="section-intro">
              From idea to implementation, we deliver secure blockchain solutions tailored to your business needs.
            </p>

            <div className="process-grid">
              <div className="process-card">
                <h3>Discovery & Planning</h3>
                <p>Analyze your business challenges and identify how Hyperledger can drive efficiency and security.</p>
              </div>

              <div className="process-card">
                <h3>Development</h3>
                <p>Design and build customized blockchain solutions leveraging Hyperledger frameworks.</p>
              </div>

              <div className="process-card">
                <h3>Integration</h3>
                <p>Integrate blockchain seamlessly with your existing systems, ensuring smooth data flow and transparency.</p>
              </div>

              <div className="process-card">
                <h3>Deployment & Support</h3>
                <p>Deploy robust solutions with ongoing monitoring, updates, and support to ensure continued success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section" style={{ backgroundColor: '#E8F4FA' }}>
          <div className="container">
            <h2 className="section-title">Key Benefits</h2>
            <p className="section-intro">
              Why choose Hyperledger for your enterprise blockchain solution?
            </p>

            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Enhanced Security</h3>
                <p>Permissioned networks ensure data privacy and control over sensitive business transactions.</p>
              </div>

              <div className="benefit-card">
                <h3>Scalable & Modular</h3>
                <p>Hyperledger frameworks offer scalability and flexibility to meet evolving business demands.</p>
              </div>

              <div className="benefit-card">
                <h3>Faster Transactions</h3>
                <p>Streamline processes and reduce transaction time with distributed ledger technology.</p>
              </div>

              <div className="benefit-card">
                <h3>Cost Efficiency</h3>
                <p>Lower operational costs by reducing intermediaries and automating complex processes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-intro">
              Hyperledger solutions designed for a variety of industries.
            </p>

            <div className="industries-grid">
              <div className="industry-card">
                <h3>Finance & Banking</h3>
                <p>Enhance transparency and security for cross-border payments, KYC, and asset management.</p>
              </div>

              <div className="industry-card">
                <h3>Healthcare</h3>
                <p>Enable secure data sharing, patient consent management, and interoperable EHR systems.</p>
              </div>

              <div className="industry-card">
                <h3>Supply Chain</h3>
                <p>Track and trace goods from source to destination with real-time verification and trust.</p>
              </div>

              <div className="industry-card">
                <h3>Government</h3>
                <p>Digitize public services, improve identity verification, and ensure transparent governance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">What Our Clients Say</h2>

            <div className="testimonial-grid">
              <div className="testimonial-card">
                <p>"The Hyperledger solution they implemented streamlined our entire supply chain process. We now have complete transparency and trust in our data!"</p>
                <div className="testimonial-author">— Rohan M., Supply Chain Director</div>
              </div>

              <div className="testimonial-card">
                <p>"We successfully launched our blockchain-based health record system. Data privacy and interoperability have improved significantly!"</p>
                <div className="testimonial-author">— Dr. Priya S., Healthcare Administrator</div>
              </div>

              <div className="testimonial-card">
                <p>"Their expertise in Hyperledger helped us modernize government services with secure digital identity management."</p>
                <div className="testimonial-author">— Arun K., E-Governance Consultant</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready to Start Your Blockchain Journey?</h2>
            <p>Partner with us to implement enterprise-grade blockchain solutions powered by Hyperledger.</p>
            <a href="#contact" className="btn-white">
              Get a Free Consultation
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hyperledger;


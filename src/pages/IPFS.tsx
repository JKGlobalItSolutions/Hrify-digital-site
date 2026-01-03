import React from 'react';
const BannerImage = '/assets/images/newBanner/bl9.webp';
const Ipfs = '/assets/images/Banner/newbanimg/ipfs.webp';

const IPFS = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="IPFS Banner" className="banner-img" />
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

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .about-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 4rem;
              align-items: center;
              max-width: 1200px;
              margin: 4rem auto;
            }

            @media (max-width: 992px) {
              .about-grid {
                grid-template-columns: 1fr;
                text-align: center;
              }
            }

            .about-text h2 {
              font-size: 2.2rem;
              color: #1B8DBB;
              margin-bottom: 1.5rem;
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
              border: 2px solid #1B8DBB;
              border-radius: 16px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
            }

            .feature-card:hover {
              transform: translateY(-8px);
            }

            .feature-card h3 {
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
            Faster, Safer & Decentralized Web With IPFS
          </h1>
          <p className="main-subtitle">
            Eliminate centralized servers, accelerate content delivery, and scale applications efficiently with JK Global IT Solutions IPFS solutions.
          </p>

          <a href="#contact" className="cta-button">
            Get Started
          </a>
        </div>

        {/* About Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Why Choose IPFS?</h2>

            <div className="about-grid">
              <div className="about-text">
                <p className="section-intro">
                  IPFS revolutionizes web storage by tracking file versions, enabling direct interactions, and removing reliance on centralized servers. JK Global IT Solutions solution ensures reliable access, privacy, and decentralized file sharing.
                </p>
                <p className="section-intro">
                  With blockchain integration, advanced encryption, and efficient content delivery, we provide an optimal storage system that enhances security while reducing costs.
                </p>

                <a href="#contact" className="cta-button">
                  Learn More
                </a>
              </div>

              <div className="image-showcase">
                <img src="/assets/images/blockchain/blockchain.webp" alt="IPFS Storage" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="section" style={{ backgroundColor: '#E8F4FA' }}>
          <div className="container">
            <h2 className="section-title">Key Features</h2>

            <div className="features-grid">
              <div className="feature-card">
                <h3>Decentralized Storage</h3>
                <p>IPFS removes reliance on a single server, ensuring your data is always available.</p>
              </div>

              <div className="feature-card">
                <h3>Enhanced Security</h3>
                <p>Data encryption and blockchain integration protect your digital assets from unauthorized access.</p>
              </div>

              <div className="feature-card">
                <h3>Scalability</h3>
                <p>Designed to support high traffic and large-scale applications without slowdowns.</p>
              </div>

              <div className="feature-card">
                <h3>Efficient File Sharing</h3>
                <p>Quick and direct peer-to-peer transfers make data retrieval seamless.</p>
              </div>

              <div className="feature-card">
                <h3>Version Control</h3>
                <p>IPFS ensures access to past versions of files, preventing accidental data loss.</p>
              </div>

              <div className="feature-card">
                <h3>Cost Optimization</h3>
                <p>Storage costs are reduced by leveraging decentralized providers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Secure Your Data With IPFS</h2>
            <p>Join the decentralized web revolution with JK Global IT Solutions advanced storage solutions.</p>
            <a href="#contact" className="btn-white">
              Schedule a Consultation
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default IPFS;

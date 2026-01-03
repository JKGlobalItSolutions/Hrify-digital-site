import React from 'react';
const BannerImage = '/assets/images/newBanner/bl10.webp';

const Ethereum = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="Ethereum Banner" className="banner-img" />
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
              margin: 4rem 0;
            }

            .image-showcase img {
              max-width: 100%;
              height: auto;
              border-radius: 16px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            }

            .features-list {
              list-style: none;
              padding: 0;
              max-width: 800px;
              margin: 3rem auto;
            }

            .features-list li {
              padding: 1rem 0;
              font-size: 1.1rem;
              display: flex;
              align-items: center;
              border-bottom: 1px solid #eee;
            }

            .features-list li::before {
              content: "";
              display: inline-block;
              width: 1.5rem;
              height: 1.5rem;
              background: #1B8DBB;
              color: white;
              border-radius: 50%;
              text-align: center;
              line-height: 1.5rem;
              margin-right: 1rem;
              font-weight: bold;
            }

            .features-list li span {
              color: #444;
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

            .content-text {
              max-width: 900px;
              margin: 0 auto 3rem;
              text-align: center;
              color: #555;
              font-size: 1.15rem;
              line-height: 1.8;
            }

            .use-case-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .use-case-card {
              background: #E8F4FA;
              border: 1px solid #B3D9FF;
              border-radius: 16px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.05);
              transition: transform 0.3s ease;
            }

            .use-case-card:hover {
              transform: translateY(-8px);
            }

            .use-case-card h4 {
              font-size: 1.3rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .use-case-card p {
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
          `}
        </style>

        {/* Hero Section Below Banner */}
        <div className="text-center">
          <h1 className="main-title">
            Empower Your Business with Ethereum Smart Contracts
          </h1>
          <p className="main-subtitle">
            Secure, scalable, and decentralized solutions powered by Ethereum Blockchain technology.
          </p>

          <div className="image-showcase">
            <img src="/assets/images/blockchain/ethereumvector.webp" alt="Ethereum Network" />
          </div>

          <h2 className="section-title">Why Choose Ethereum?</h2>

          <ul className="features-list">
            <li><span>Unmatched Security with Smart Contract Audits</span></li>
            <li><span>Fast & Scalable Layer 2 Solutions</span></li>
            <li><span>Lower Transaction Costs with Optimized Gas Fees</span></li>
            <li><span>Seamless Integration for DApps & DeFi Platforms</span></li>
            <li><span>Regulatory Compliant & Transparent Solutions</span></li>
          </ul>

          <a href="#contact" className="cta-button">
            Schedule a Demo
          </a>
        </div>

        {/* Use Cases Section */}
        <section className="section" style={{ backgroundColor: '#E8F4FA' }}>
          <div className="container">
            <h2 className="section-title">Real-World Applications on Ethereum</h2>

            <div className="use-case-grid">
              <div className="use-case-card">
                <h4>DeFi Platforms</h4>
                <p>Enable lending, staking, and yield farming through decentralized finance protocols.</p>
              </div>

              <div className="use-case-card">
                <h4>Tokenization</h4>
                <p>Fractional ownership of assets including real estate, art, and intellectual property.</p>
              </div>

              <div className="use-case-card">
                <h4>Supply Chain Transparency</h4>
                <p>Track products end-to-end with tamper-proof records on Ethereum.</p>
              </div>

              <div className="use-case-card">
                <h4>Healthcare Data</h4>
                <p>Secure and interoperable EHRs to improve data privacy and sharing.</p>
              </div>

              <div className="use-case-card">
                <h4>Digital Identity Verification</h4>
                <p>Enable secure and decentralized identity management for individuals and organizations.</p>
              </div>

              <div className="use-case-card">
                <h4>Gaming & NFTs</h4>
                <p>Create and trade NFTs, power play-to-earn models, and ensure asset ownership in blockchain games.</p>
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
                <p>"Their Ethereum smart contract expertise helped us launch our DeFi platform in record time. Highly recommend!"</p>
                <div className="testimonial-author">— Anjali K., CEO of FinTech Startup</div>
              </div>

              <div className="testimonial-card">
                <p>"We streamlined our supply chain using Ethereum-based solutions by this amazing team. Complete transparency and efficiency!"</p>
                <div className="testimonial-author">— Rahul V., Supply Chain Manager</div>
              </div>

              <div className="testimonial-card">
                <p>"The NFT marketplace they built for us is intuitive and secure. Ethereum was the right choice!"</p>
                <div className="testimonial-author">— Varun S., Game Developer</div>
              </div>
            </div>

            <a href="#contact" className="cta-button">
              Get Started with Ethereum
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Ethereum;


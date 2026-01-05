import React from 'react';
const BannerImage = '/assets/images/newBanner/bl8.webp';
const Nft = '/assets/images/Banner/newbanimg/nft.webp';

const NFT = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="NFT Banner" className="banner-img" />
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

            .tags-container {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 1rem;
              margin: 4rem 0;
            }

            .tag-btn {
              background-color: #1B8DBB;
              color: white;
              padding: 0.7rem 1.8rem;
              border-radius: 9999px;
              font-size: 1.1rem;
              font-weight: 600;
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

            .service-card {
              background: #E8F4FA;
              border-radius: 16px;
              padding: 3rem;
              box-shadow: 0 8px 25px rgba(27, 141, 187, 0.1);
              text-align: center;
              max-width: 1000px;
              margin: 0 auto;
            }

            .service-card p {
              font-size: 1.15rem;
              line-height: 1.8;
              color: #444;
              margin-bottom: 2rem;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: white;
              border: 1px solid #B3D9FF;
              border-radius: 16px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: border-color 0.3s ease;
            }

            .feature-card:hover {
              border-color: #1B8DBB;
            }

            .feature-card h4 {
              font-size: 1.3rem;
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
            Unleash the Power of NFTs for Your Business
          </h1>
          <p className="main-subtitle">
            We craft innovative NFT solutions to help you engage audiences, create value, and lead the decentralized future.
          </p>

          <a href="#contact" className="cta-button">
            Get Started
          </a>
        </div>

        {/* Main NFT Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">
              Claim Unique Ownership for Your Digital Assets With NFT
            </h2>
            <p className="section-intro">
              Utilize NFT services on blockchain to acquire ownership of all your digital assets and virtual items with unique cryptographic tokens built for authenticity.
            </p>

            <div className="tags-container">
              <div className="tag-btn">Unique Digital Assets</div>
              <div className="tag-btn">Blockchain Authentication</div>
              <div className="tag-btn">Ownership</div>
              <div className="tag-btn">Blockchain Services</div>
            </div>

            <div className="service-card">
              <p>
                Discover Hrify Digital's NFT services, offering a seamless solution for digital asset ownership and secure exchanges. Safeguard your NFTs hassle-free, with easy ownership claims and smooth transfers during selling.
              </p>
              <p>
                Hrify Digital cutting-edge NFT services can help protect your creative work, whether it is your digital art, music album, design, or property, making hefty processes like ownership claims and transactions easier than ever in the digital marketplace. Our expert team offers user-friendly interfaces, eco-conscious practices, and secure blockchain technology to ensure a seamless experience for our users. With Hrify Digital NFT services, you can protect your intellectual property and enjoy the benefits of automated royalties while exploring exclusive partnerships and cross-chain support for added value.
              </p> 
              
              <a href="#contact" className="cta-button">
                Schedule a Consultation
              </a>
            </div>

            <h2 className="section-title">Support Features</h2>

            <div className="features-grid">
              <div className="feature-card">
                <h4>Copyright & IP Protection</h4>
                <p>Hrify Digital automatically allocates a percentage of secondary sales to creators through smart contracts and implements a robust DRM system for intellectual property protection.</p>
              </div>

              <div className="feature-card">
                <h4>Security Concerns</h4>
                <p>Hrify Digital conducts regular security audits, offers optional cold wallet storage, and strongly focuses on user asset protection.</p>
              </div>

              <div className="feature-card">
                <h4>Environmental Impact</h4>
                <p>Hrify Digital migrates to a proof-of-stake blockchain and supports environmental initiatives to offset the platform's carbon footprint.</p>
              </div>

              <div className="feature-card">
                <h4>Cost of Transactions</h4>
                <p>Hrify Digital optimizes gas fees through efficient smart contract coding and implements Layer 2 scaling solutions for cost-effectiveness.</p>
              </div>

              <div className="feature-card">
                <h4>Regulatory Compliance</h4>
                <p>Hrify Digital collaborates with legal experts, communicates platform policies transparently, and ensures compliance with relevant regulations.</p>
              </div>

              <div className="feature-card">
                <h4>Optimizing Market Saturation</h4>
                <p>Hrify Digital forms exclusive partnerships with renowned creators and emphasizes the long-term value and utility of NFTs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready to Embrace the Future?</h2>
            <p>Let us build your NFT solution today. Book a free consultation and take the first step!</p>
            <a href="#contact" className="btn-white">
              Schedule Now
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NFT;


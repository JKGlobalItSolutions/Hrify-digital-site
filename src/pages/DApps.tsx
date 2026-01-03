import React from 'react';
const BannerImage = '/assets/images/newBanner/bl12.webp';
const Dapps = '/assets/images/Banner/newbanimg/dapps.webp';

const DApps = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="DApps Banner" className="banner-img" />
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

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .benefits-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .benefit-card {
              background: white;
              border-radius: 16px;
              padding: 2.5rem 2rem;
              text-align: center;
              box-shadow: 0 8px 30px rgba(27, 141, 187, 0.1);
              transition: transform 0.3s ease;
            }

            .benefit-card:hover {
              transform: translateY(-10px);
            }

            .benefit-card i {
              font-size: 3rem;
              color: #1B8DBB;
              margin-bottom: 1.5rem;
            }

            .benefit-card h3 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .benefit-card p {
              color: #666;
              line-height: 1.7;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: #1B8DBB;
              border-radius: 16px;
              padding: 2rem;
              border: 1px solid #B3D9FF;
              transition: border-color 0.3s ease;
            }

            .feature-card:hover {
              border-color: white;
            }

            .feature-card h3 {
              color: white;
              font-size: 1.4rem;
              font-weight: 600;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #E8F4FA;
              line-height: 1.7;
            }

            .industries-list {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .industry-card {
              background: white;
              border-radius: 16px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 6px 20px rgba(27, 141, 187, 0.15);
              transition: transform 0.3s ease;
            }

            .industry-card:hover {
              transform: translateY(-8px);
            }

            .industry-card h4 {
              font-size: 1.3rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .industry-card p {
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
            Unleash DApps Power for Your Business
          </h1>
          <p className="main-subtitle">
            We deliver cutting-edge decentralized applications with secure, scalable blockchain solutions tailored to your needs.
          </p>

          <a href="#contact" className="cta-button">
            Get Started
          </a>
        </div>

        {/* Benefits Section */}
        <section className="section">
          <div className="container">
            <div className="benefits-grid">
              <div className="benefit-card">
                <i className="fas fa-lock"></i>
                <h3>Secure & Transparent</h3>
                <p>Enjoy unparalleled security and transparency with blockchain-backed decentralized applications.</p>
              </div>

              <div className="benefit-card">
                <i className="fas fa-coins"></i>
                <h3>Reduced Costs</h3>
                <p>Streamline operations and reduce fees by eliminating middlemen with automated smart contracts.</p>
              </div>

              <div className="benefit-card">
                <i className="fas fa-network-wired"></i>
                <h3>Global Access</h3>
                <p>Reach users worldwide anytime, with 24/7 decentralized systems that never sleep.</p>
              </div>

              <div className="benefit-card">
                <i className="fas fa-cogs"></i>
                <h3>Flexible Solutions</h3>
                <p>We design DApps to fit your industry and specific business needs, ensuring perfect integration.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section" style={{ backgroundColor: 'white' }}>
          <div className="container">
            <h2 className="section-title">DApp Features You Can Trust</h2>

            <div className="features-grid">
              <div className="feature-card">
                <h3>Smart Contract Creation</h3>
                <p>Robust, tamper-proof contracts to automate processes, ensuring reliability and security.</p>
              </div>

              <div className="feature-card">
                <h3>Custom Token Launch</h3>
                <p>Launch your native tokens or NFTs to unlock new opportunities and customer engagement.</p>
              </div>

              <div className="feature-card">
                <h3>DeFi Solutions</h3>
                <p>Build decentralized finance platforms for lending, staking, and seamless financial services.</p>
              </div>

              <div className="feature-card">
                <h3>Scalable Blockchain Networks</h3>
                <p>From Ethereum to Polygon, we build on the most trusted blockchains for scalability and speed.</p>
              </div>

              <div className="feature-card">
                <h3>Wallet Integration</h3>
                <p>Seamlessly integrate popular crypto wallets like MetaMask for easy and secure user transactions.</p>
              </div>

              <div className="feature-card">
                <h3>DAO Development</h3>
                <p>Empower your community with decentralized autonomous organization (DAO) platforms for transparent governance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Industries We Empower</h2>

            <div className="industries-list">
              <div className="industry-card">
                <h4>Finance & DeFi</h4>
                <p>Revolutionize financial services with decentralized and peer-to-peer transactions.</p>
              </div>

              <div className="industry-card">
                <h4>Healthcare</h4>
                <p>Protect sensitive data and streamline healthcare processes with secure DApps.</p>
              </div>

              <div className="industry-card">
                <h4>Supply Chain</h4>
                <p>Ensure end-to-end transparency and traceability across your supply chain networks.</p>
              </div>

              <div className="industry-card">
                <h4>Gaming & Metaverse</h4>
                <p>Develop NFT economies and immersive experiences for the next-gen virtual world.</p>
              </div>

              <div className="industry-card">
                <h4>Real Estate</h4>
                <p>Automate real estate deals with secure smart contracts and reduce paperwork.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready to Embrace the Future?</h2>
            <p>Let us build your decentralized app today. Book a free consultation and take the first step!</p>
            <a href="#contact" className="btn-white">
              Schedule Now
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DApps;

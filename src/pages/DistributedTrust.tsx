import React from 'react';
import { getAssetPath } from '../utils/assetPath';

const BannerImage = getAssetPath('assets/images/newBanner/bl7.webp');

const DistributedTrust = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="Distributed Trust Banner" className="banner-img" />
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
              content: "✔️";
              font-size: 1.4rem;
              margin-right: 1rem;
              color: #1B8DBB;
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
            Execute and Validate Smart Contracts with Confidence
          </h1>
          <p className="main-subtitle">
            Harness Ethereum's Ecosystem to Build Next-Gen Decentralized Solutions
          </p>

          <div className="image-showcase">
            <img src="/assets/images/blockchain/bitcoin.webp" alt="Blockchain Network" />
          </div>

          <p className="content-text">
            <strong>What We Offer:</strong> Smart Contract Development, ERC Protocol Implementations, Community & Ecosystem Support, Comprehensive Blockchain Solutions tailored to your business needs.
          </p>

          <p className="content-text">
            <strong>Hrify Digital</strong> leverages Ethereum's rapid transaction capabilities to empower businesses and developers alike. By providing seamless decentralized applications (DApps) and robust smart contract creation without intermediaries, we are committed to fostering transparency, security, and innovation across industries.
          </p>

          <p className="content-text">
            <strong>Why Choose Hrify Digital Ethereum Solutions?</strong> Our strategic partnership with Ethereum opens opportunities for industries to leverage decentralized finance (DeFi), supply chain transparency, healthcare, gaming, real estate, and more.
          </p>

          <ul className="features-list">
            <li>Transparent processes for trust and reliability</li>
            <li>Uncompromising security through robust audits</li>
            <li>Scalable solutions that grow with your business</li>
            <li>Accountability through immutable records</li>
          </ul>

          <p className="content-text">
            Our expert team enables businesses to minimize fraud, increase efficiency, and stay ahead in the decentralized ecosystem. With Hrify Digital, you gain access to an evolving infrastructure that delivers real-world value through blockchain technology.
          </p>

          <a href="#contact" className="cta-button">
            Schedule a Consultation
          </a>
        </div>

        {/* Key Features Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Key Features & Capabilities</h2>

            <div className="image-showcase">
              <img src="/assets/images/blockchain/blockchain.webp" alt="Key Features" />
            </div>

            <p className="content-text"><strong>🚀 Enhanced Scalability:</strong> Adopting Ethereum 2.0's Proof-of-Stake and sharding mechanisms, we offer optimized transaction processing and scalability for high-performance decentralized applications.</p>
            <p className="content-text"><strong>💰 Predictable & Lower Transaction Fees:</strong> Utilizing EIP-1559 and Layer 2 solutions, we provide cost-effective and predictable transaction models with customizable options for businesses of any size.</p>
            <p className="content-text"><strong>🛡️ Smart Contract Security:</strong> Formal verification, penetration testing, and third-party audits ensure our smart contracts are secure, reliable, and fully tested before deployment.</p>
            <p className="content-text"><strong>🔧 Seamless Upgrade Pathways:</strong> Our proactive involvement in Ethereum's Improvement Proposals (EIPs) allows us to stay ahead of the curve and deliver seamless upgrades that ensure compatibility and efficiency.</p>
            <p className="content-text"><strong>👨‍💻 User-Centric Interfaces:</strong> We design intuitive interfaces and user-friendly wallets that simplify onboarding for users while integrating Layer 2 scaling solutions for seamless user experiences.</p>
            <p className="content-text"><strong>📜 Regulatory Compliance:</strong> Hrify Digital collaborates with legal teams and regulatory experts to ensure our solutions are compliant with evolving regulations across multiple jurisdictions.</p>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="section" style={{ backgroundColor: '#E8F4FA' }}>
          <div className="container">
            <h2 className="section-title">Explore Real-World Blockchain Applications</h2>

            <div className="image-showcase">
              <img src="/assets/images/blockchain/bitcon1.webp" alt="Blockchain Use Cases" />
            </div>

            <ul className="features-list">
              <li><strong>DeFi Platforms:</strong> Peer-to-peer lending, staking, and yield farming with security and transparency.</li>
              <li><strong>Supply Chain Management:</strong> End-to-end product tracking and verification with immutable blockchain records.</li>
              <li><strong>Healthcare:</strong> Secure and interoperable electronic health records management with patient privacy.</li>
              <li><strong>Real Estate:</strong> Tokenization of property assets for fractional ownership and simplified transactions.</li>
              <li><strong>Gaming:</strong> NFT-based asset ownership and play-to-earn gaming ecosystems on Ethereum.</li>
            </ul>

            <h2 className="section-title">Innovative Use Cases Powered by Ethereum</h2>

            <ul className="features-list">
              <li><strong>Cross-Border Payments:</strong> Fast and affordable remittance services powered by Ethereum's decentralized network.</li>
              <li><strong>Identity Verification:</strong> Decentralized Identity (DID) frameworks ensuring secure and verifiable digital identities.</li>
              <li><strong>Voting Systems:</strong> Transparent and tamper-proof election systems powered by smart contracts.</li>
              <li><strong>Charity & Donations:</strong> Traceable and transparent fund distribution to ensure accountability in charitable organizations.</li>
            </ul>

            <a href="#contact" className="cta-button">
              Discover More Solutions
            </a>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">What Our Clients Say</h2>

            <div className="testimonial-grid">
              <div className="testimonial-card">
                <p>"Hrify Digital transformed our supply chain transparency with their Ethereum blockchain solutions. We now have real-time product tracking and complete trust from our customers!"</p>
                <div className="testimonial-author">— Rahul V., Supply Chain Manager</div>
              </div>

              <div className="testimonial-card">
                <p>"With Hrify Digital's help, we launched our DeFi lending platform in record time. Their smart contract expertise is unmatched!"</p>
                <div className="testimonial-author">— Anjali K., CEO of FinTech Startup</div>
              </div>

              <div className="testimonial-card">
                <p>"The team at Hrify Digital guided us through every step of our NFT-based game development. They made complex blockchain technology simple and effective!"</p>
                <div className="testimonial-author">— Varun S., Lead Game Developer</div>
              </div>
            </div>

            <a href="#contact" className="cta-button">
              Get Started with Hrify Digital
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DistributedTrust;


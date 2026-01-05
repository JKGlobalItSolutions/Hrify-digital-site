import React from 'react';
import { getAssetPath } from '../utils/assetPath';

const BannerImage = getAssetPath('assets/images/newBanner/ma_ser4.webp');
const Endusercom = getAssetPath('assets/images/Banner/newbanimg/endusercom.webp');

const HelpDesk = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="Help Desk Banner" className="banner-img" />
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
              padding: 2rem;
              text-align: left;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
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
            End User Compute
          </h1>
          <p className="main-subtitle">
            Configure Streamline Operations With Reliable Help Desk Compute
          </p>
          <p className="main-subtitle">
            Ensure your business tasks with End-User assistance and Help desk support.
          </p>

          <div className="tags-container">
            <div className="tag-btn">User Diversity</div>
            <div className="tag-btn">IT Help Desk</div>
            <div className="tag-btn">Workspace Management</div>
            <div className="tag-btn">Managed Services</div>
          </div>

          <p className="main-subtitle">
            Offering the right computer support services and assistance, Hrify Digital's Help Desk/End User services provide efficient IT issue resolution, ensuring smooth business functioning, enhanced productivity, and long-term success.
          </p>

          <p className="main-subtitle">
            Hrify Digital srecognizes the significance of Help Desk/End User Computing services in minimizing business IT risks. Our team provides prompt and dependable support to end-users, reducing the downtime associated with IT issues. By proactively addressing challenges, we help maximize productivity, reduce costs associated with expensive downtime, and minimize the need for costly IT repairs. We recognize the significance of a robust support system that can elevate your business operations, and with a customer-centric mindset, our team strives to promptly address real-time queries, ensuring that your team can work seamlessly without disruptions.
          </p>

          <a href="#contact" className="cta-button">
            Book a Meeting
          </a>
        </div>

        {/* Support Features Section */}
        <section className="section" style={{ backgroundColor: '#E8F4FA' }}>
          <div className="container">
            <h2 className="section-title">Support Features</h2>

            <div className="features-grid">
              <div className="feature-card">
                <h4>Vendor Support & SLAs</h4>
                <p>Hrify Digital sempowers its users by offering a comprehensive knowledge base and intuitive self-help resources, allowing them to resolve common issues independently. Regular user training sessions are conducted to enhance technical skills and optimize IT resource utilization.</p>
              </div>

              <div className="feature-card">
                <h4>Ticket Volume Management</h4>
                <p>Hrify Digital sefficiently manages ticket volume through a streamlined ticket triage process that prioritizes urgent issues. Leveraging automation tools, routine tasks are automated, enabling the support team to focus on complex challenges.</p>
              </div>

              <div className="feature-card">
                <h4>Handling Complex IT Environment</h4>
                <p>Hrify Digital's standardized hardware and software configurations facilitate seamless troubleshooting and support. Our support tiers efficiently handle different levels of complexity within the diverse IT environment.</p>
              </div>

              <div className="feature-card">
                <h4>Ticket Escalation Procedures</h4>
                <p>Hrify Digital's well-defined escalation procedures enable swift handling of complex issues, ensuring that they reach the appropriate teams promptly for resolution.</p>
              </div>

              <div className="feature-card">
                <h4>Remote Support</h4>
                <p>Through remote desktop software and other advanced tools, Hrify Digital delivers efficient support to off-site users, resolving issues promptly.</p>
              </div>

              <div className="feature-card">
                <h4>Integration & Automation</h4>
                <p>We optimize our operations by implementing integrated IT service management (ITSM) platforms, automating routine tasks, and enhancing overall efficiency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready to Streamline Your IT Support?</h2>
            <p>Let us deliver reliable, proactive Help Desk and End User Compute services for your team.</p>
            <a href="#contact" className="btn-white">
              Schedule a Consultation
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HelpDesk;


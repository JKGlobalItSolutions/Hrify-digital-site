import React from 'react';
const BannerImage = '/assets/images/newBanner/enterprise.webp';
const EnterpriseImg = '/assets/images/Banner/newbanimg/enterprise.webp';


const Enterprise = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="Enterprise Banner" className="banner-img" />
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

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 2rem;
              max-width: 1400px;
              margin: 4rem auto;
            }

            .feature-card {
              background: white;
              border-radius: 16px;
              padding: 2.5rem 2rem;
              text-align: center;
              box-shadow: 0 8px 25px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
            }

            .feature-card:hover {
              transform: translateY(-10px);
            }

            .feature-card img {
              width: 120px;
              height: 120px;
              object-fit: contain;
              margin-bottom: 1.5rem;
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

            .benefits-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .benefit-card {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              border-radius: 16px;
              padding: 2.5rem;
              text-align: left;
              box-shadow: 0 8px 25px rgba(0,0,0,0.15);
              transition: transform 0.3s ease;
            }

            .benefit-card:hover {
              transform: translateY(-8px);
            }

            .benefit-number {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 50px;
              height: 50px;
              background: rgba(255,255,255,0.2);
              border-radius: 50%;
              font-size: 1.4rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .benefit-card h4 {
              font-size: 1.4rem;
              margin-bottom: 1rem;
            }

            .benefit-card p {
              opacity: 0.95;
              line-height: 1.7;
            }

            .empower-list {
              max-width: 900px;
              margin: 4rem auto;
              padding: 0 2rem;
            }

            .empower-list li {
              font-size: 1.2rem;
              margin-bottom: 1.5rem;
              padding-left: 2rem;
              position: relative;
              color: #555;
            }

            .empower-list li::before {
              content: '→';
              position: absolute;
              left: 0;
              color: #1B8DBB;
              font-size: 1.5rem;
              font-weight: bold;
            }

            .empower-list strong {
              color: #1B8DBB;
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
            Streamline Your Business with Hrify ERP Solutions
          </h1>
          <p className="main-subtitle">
            Experience seamless integration of finance, HR, operations, and more ERP. Manage every aspect of your business efficiently and effectively, all from a single, powerful platform.
          </p>

          <a href="#contact" className="cta-button">
            Explore Features
          </a>
        </div>

        {/* Main Features Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Transform Your Business with JK ERP</h2>

            <div className="features-grid">
              <div className="feature-card">
                <img src="/assets/images/erp/finace.png" alt="Finance Management" />
                <h4>Finance Management</h4>
                <p>Streamline financial operations, manage budgets, automate financial reporting, and ensure cash flow for better decision-making.</p>
              </div>

              <div className="feature-card">
                <img src="/assets/images/erp/procumment.png" alt="Procurement Simplified" />
                <h4>Procurement Simplified</h4>
                <p>Streamline vendor management, automate procurement processes, and ensure cost-effective purchasing.</p>
              </div>

              <div className="feature-card">
                <img src="/assets/images/erp/inventory.png" alt="Inventory Control" />
                <h4>Inventory Control</h4>
                <p>Monitor stock levels, manage inventory across multiple locations, and ensure optimal stock with real-time tracking.</p>
              </div>

              <div className="feature-card">
                <img src="/assets/images/erp/hrm.png" alt="Human Resource Management" />
                <h4>Human Resource Management</h4>
                <p>Simplify HR tasks, manage employee records, payroll, and performance seamlessly on a unified platform.</p>
              </div>

              <div className="feature-card">
                <img src="/assets/images/erp/crm.png" alt="Customer Relationship Management" />
                <h4>Customer Relationship Management</h4>
                <p>Build and manage customer relationships, track sales, and drive actionable insights with CRM tools.</p>
              </div>

              <div className="feature-card">
                <img src="/assets/images/erp/vendormanagement.jpg" alt="Supply Chain Optimization" />
                <h4>Supply Chain Optimization</h4>
                <p>Enhance supply chain efficiency, improve demand planning, and reduce operational costs in real-time.</p>
              </div>

              <div className="feature-card">
                <img src="/assets/images/erp/warehouse.png" alt="Warehouse Management" />
                <h4>Warehouse Management</h4>
                <p>Optimize warehouse operations, improve inventory tracking, and manage storage efficiently.</p>
              </div>

              <div className="feature-card">
                <img src="/assets/images/erp/marketing.png" alt="Marketing Automation" />
                <h4>Marketing Automation</h4>
                <p>Automate marketing campaigns, monitor lead generation, and measure ROI effortlessly.</p>
              </div>

              <div className="feature-card">
                <img src="/assets/images/erp/procumment.png" alt="E-commerce Integration" />
                <h4>E-commerce Integration</h4>
                <p>Integrate seamlessly with e-commerce platforms, manage orders, and sync inventory with ease.</p>
              </div>

              <div className="feature-card">
                <img src="/assets/images/erp/bi.png" alt="Business Intelligence" />
                <h4>Business Intelligence</h4>
                <p>Unlock actionable insights with advanced analytics, reporting, and data-driven strategies for growth.</p>
              </div>

              <div className="feature-card">
                <img src="/assets/images/erp/rolebasedaccess.png" alt="Role-Based Access" />
                <h4>Role-Based Access</h4>
                <p>Ensure data security with role-specific access to sensitive data and features.</p>
              </div>

              <div className="feature-card">
                <img src="/assets/images/erp/mobilefrendly.png" alt="Mobile Accessibility" />
                <h4>Mobile Accessibility</h4>
                <p>Access JK ERP on the go with a user-friendly mobile app, anywhere, anytime.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section" style={{ backgroundColor: '#E8F4FA' }}>
          <div className="container">
            <h2 className="section-title">Unlock Your Business Potential with Our Game-Changing ERP Software</h2>

            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-number">1</div>
                <h4>User-Friendly Interface</h4>
                <p>Our intuitive design ensures easy navigation and quick adoption for all users, enhancing productivity.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-number">2</div>
                <h4>Seamless Management</h4>
                <p>Integrate and manage all business operations—finance, HR, inventory, and more—from a single platform.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-number">3</div>
                <h4>Tailored for Every Industry</h4>
                <p>Customizable solutions to meet the unique needs of various industries, ensuring flexibility and scalability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Empower Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Empower Your Business with JK ERP</h2>

            <ul className="empower-list">
              <li><strong>Reduce Manual Work and Human Errors:</strong> Automate processes to increase efficiency and accuracy, minimizing human errors.</li>
              <li><strong>Access Real-Time Data:</strong> Stay updated with live data, enabling smarter and more timely decisions.</li>
              <li><strong>Scale Seamlessly as Your Business Grows:</strong> JK ERP adapts to your growing business, ensuring consistent performance as you expand.</li>
              <li><strong>24/7 Access to All Modules:</strong> Stay connected and manage your business from anywhere, at any time.</li>
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready to Transform Your Business?</h2>
            <p>Partner with us to implement powerful, scalable ERP solutions tailored to your enterprise.</p>
            <a href="#contact" className="btn-white">
              Get a Free Consultation
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Enterprise;

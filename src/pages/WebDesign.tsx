import React from 'react';

const WebDesign = () => {
  return (
    <main>
      {/* Banner section */}
      <div className="banner container-fluid">
        <div className="row h-100">
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center text-light">
            <h2 className="fw-bolder text-center">Web Design</h2>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src="/assets/images/design image 1.webp" alt="" />
          </div>
        </div>
      </div>
      <style>
        {`
          .banner {
            background-image: url(/assets/images/business web design banner.webp);
            height: 600px;
          }
          h2 {
            font-size: 36px;
            color: black;
          }
          @media only screen and (max-width: 600px) {
            .banner {
              height: 400px;
            }
            h2 {
              font-size: 30px;
            }
          }
        `}
      </style>

      {/* Content Section */}
      <section className="py-5 bg-white text-center">
        <div className="container py-4">
          <h2 className="display-5 text-primary fw-bold mb-4">Web Design Services</h2>
          <p className="lead text-muted mx-auto mb-3" style={{ maxWidth: '800px' }}>
            Create Stunning, User-Friendly Websites with Our Expert Web Design Services
          </p>
          <p className="text-muted mx-auto mb-5" style={{ maxWidth: '900px' }}>
            Our web design services focus on creating visually appealing, responsive, and functional websites that drive results. We combine creativity with technical expertise to deliver designs that engage users and support your business goals.
          </p>

          <p className="text-dark mx-auto mb-5" style={{ maxWidth: '900px' }}>
            At JK Global IT Solutions, we specialize in custom web design that reflects your brand identity and provides an exceptional user experience. Our team uses the latest design trends and technologies to build websites that are not only beautiful but also optimized for performance and SEO.
          </p>

          {/* Feature Section */}
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-palette"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">Custom Design</h4>
                <p className="text-muted">Unique, tailored designs that match your brand vision and audience preferences.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">Responsive Design</h4>
                <p className="text-muted">Mobile-first approach ensuring perfect display across all devices and screen sizes.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-search"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">SEO Optimized</h4>
                <p className="text-muted">Built-in SEO best practices to improve search engine visibility and rankings.</p>
              </div>
            </div>
          </div>

          {/* Additional Content Section */}
          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-rocket"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">Fast Loading</h4>
                <p className="text-muted">Optimized code and assets for lightning-fast page load times.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">Security Focused</h4>
                <p className="text-muted">Built with security best practices to protect your website and users.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-headset"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">Ongoing Support</h4>
                <p className="text-muted">Continuous maintenance and updates to keep your website current and secure.</p>
              </div>
            </div>
          </div>

          <p className="text-dark mx-auto mt-5" style={{ maxWidth: '900px' }}>
            Our web design process involves thorough research, strategic planning, creative design, and rigorous testing to ensure your website not only looks great but also performs exceptionally. We work closely with you throughout the project to bring your vision to life.
          </p>

          {/* CTA Section */}
          <div className="mt-5">
            <a href="#" className="btn btn-danger btn-lg px-5 py-3 fw-bold rounded-pill">Get Your Website Designed</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WebDesign;

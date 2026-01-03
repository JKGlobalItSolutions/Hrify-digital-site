import React from 'react';
const Cybersecuritybackground = '/assets/images/Rectangle-27.webp';
const Cybersecurity_banner = '/assets/images/cyber-security.webp';




const Cybersecurity = () => {
  return (
    <main>
      {/* Banner section */}
      <div className="banner container-fluid">
        <div className="row h-100">
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center text-light">
            <h2 className="fw-bolder text-center">Cybersecurity</h2>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={Cybersecurity_banner} alt="" />
          </div>
        </div>
      </div>
      <style>
        {`
          .banner {
            background-image: url(${Cybersecuritybackground});
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
          <h2 className="display-5 text-primary fw-bold mb-4">Cybersecurity Services</h2>
          <p className="lead text-muted mx-auto mb-3" style={{ maxWidth: '800px' }}>
            Protect Your Digital Assets with Advanced Cybersecurity Solutions
          </p>
          <p className="text-muted mx-auto mb-5" style={{ maxWidth: '900px' }}>
            In today's digital landscape, cybersecurity is paramount. Our comprehensive cybersecurity services protect your organization from evolving threats, ensuring data integrity, compliance, and business continuity.
          </p>

          <p className="text-dark mx-auto mb-5" style={{ maxWidth: '900px' }}>
            At JK Global IT Solutions, we offer end-to-end cybersecurity solutions tailored to your specific needs. From threat assessment and risk management to incident response and compliance, our expert team implements robust security measures to safeguard your valuable assets.
          </p>

          {/* Feature Section */}
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">Threat Assessment</h4>
                <p className="text-muted">Comprehensive vulnerability assessments and threat analysis to identify potential risks.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-lock"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">Access Control</h4>
                <p className="text-muted">Multi-factor authentication and role-based access control implementation.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-eye"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">Monitoring & Detection</h4>
                <p className="text-muted">24/7 security monitoring and real-time threat detection systems.</p>
              </div>
            </div>
          </div>

          {/* Additional Content Section */}
          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-user-shield"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">Incident Response</h4>
                <p className="text-muted">Rapid response plans and procedures for cybersecurity incidents.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-gavel"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">Compliance Management</h4>
                <p className="text-muted">GDPR, HIPAA, and other regulatory compliance assistance.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">Security Training</h4>
                <p className="text-muted">Employee awareness programs and cybersecurity training sessions.</p>
              </div>
            </div>
          </div>

          <p className="text-dark mx-auto mt-5" style={{ maxWidth: '900px' }}>
            Our cybersecurity experts stay ahead of emerging threats, implementing cutting-edge technologies and best practices to protect your organization. Partner with us for comprehensive security that evolves with your business needs.
          </p>

          {/* CTA Section */}
          <div className="mt-5">
            <a href="#" className="btn btn-danger btn-lg px-5 py-3 fw-bold rounded-pill">Secure Your Business</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cybersecurity;

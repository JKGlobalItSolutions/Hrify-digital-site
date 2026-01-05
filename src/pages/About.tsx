import React from 'react';
import { getAssetPath } from '../utils/assetPath';

const AboutImg = getAssetPath('assets/images/About.png');
const Biggest = getAssetPath('assets/images/biggest.webp');
const AboutBannerImg = getAssetPath('assets/images/about-banner.webp');



const About = () => {
  const SDECartoon = ".";
  return (
    <div>
      {/* Static Banner Section - Similar to Home but Single Image */}
      <div className="slider">
        <div className="slides">
          <div className="slide">
            <img src={AboutImg} alt="About Banner" />
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-12 col-lg-6">
              <img className="img-fluid" src={AboutBannerImg} alt="About Hrify Digital" />
            </div>
            <div className="col-12 col-lg-6">
              <h2 style={{ color: '#1B8DBB' }} className="fw-bold mb-4">About Hrify Digital</h2>
              <p className="text-muted">
                Hrify Digital is a leading provider of comprehensive IT services and solutions. With years of experience in the industry, we have established ourselves as a trusted partner for businesses seeking innovative technology solutions.
              </p>
              <p className="text-muted">
                Our team of skilled professionals brings together expertise in software development, web design, cloud computing, cybersecurity, and digital transformation. We are committed to delivering high-quality services that drive business growth and success.
              </p>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-12 col-lg-6 order-lg-2">
              <h3 style={{ color: '#1B8DBB' }} className="fw-bold mb-4">Our Mission</h3>
              <p className="text-muted">
                To empower businesses with cutting-edge technology solutions that enhance productivity, security, and competitiveness in the digital age.
              </p>
              <p className="text-muted">
                We strive to deliver innovative IT services that not only meet current business needs but also anticipate future challenges and opportunities.
              </p>
            </div>
            <div className="col-12 col-lg-6 order-lg-1">
              <img className="img-fluid" src={Biggest} alt="Mission" />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <h3 style={{ color: '#1B8DBB' }} className="fw-bold mb-4">Our Vision</h3>
              <p className="text-muted">
                To be the premier IT solutions provider, recognized for excellence in service delivery, technological innovation, and customer satisfaction.
              </p>
              <p className="text-muted">
                We envision a future where businesses leverage technology seamlessly to achieve their goals and create lasting value for their stakeholders.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <img className="img-fluid" src={Biggest} alt="Vision" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 style={{ color: '#1B8DBB' }} className="text-center fw-bold mb-5">Why Choose Us?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-users fa-3x mb-3" style={{ color: '#1B8DBB' }}></i>
                <h4 className="fw-bold mb-3">Expert Team</h4>
                <p className="text-muted">Our certified professionals bring years of experience and expertise to every project.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-cogs fa-3x mb-3" style={{ color: '#1B8DBB' }}></i>
                <h4 className="fw-bold mb-3">Customized Solutions</h4>
                <p className="text-muted">We tailor our services to meet your specific business requirements and goals.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-clock fa-3x mb-3" style={{ color: '#1B8DBB' }}></i>
                <h4 className="fw-bold mb-3">Timely Delivery</h4>
                <p className="text-muted">We are committed to delivering projects on time without compromising quality.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-shield-alt fa-3x mb-3" style={{ color: '#1B8DBB' }}></i>
                <h4 className="fw-bold mb-3">Security First</h4>
                <p className="text-muted">We prioritize the security and confidentiality of your data and systems.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-handshake fa-3x mb-3" style={{ color: '#1B8DBB' }}></i>
                <h4 className="fw-bold mb-3">Reliable Partnership</h4>
                <p className="text-muted">We build long-term relationships based on trust, transparency, and mutual success.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-award fa-3x mb-3" style={{ color: '#1B8DBB' }}></i>
                <h4 className="fw-bold mb-3">Proven Track Record</h4>
                <p className="text-muted">Our satisfied clients and successful projects speak to our commitment to excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-5 text-white text-center" style={{ backgroundColor: '#1B8DBB' }}>
        <div className="container">
          <h3 className="fw-bold mb-3">Ready to Transform Your Business?</h3>
          <p className="mb-4" style={{textAlign:'center'}}>Contact us today to discuss how we can help you achieve your technology goals.</p>
          <a href="/contact" className="btn btn-light btn-lg px-5 py-3 fw-bold">Get In Touch</a>
        </div>
      </section>
    </div>
  );
};

export default About;

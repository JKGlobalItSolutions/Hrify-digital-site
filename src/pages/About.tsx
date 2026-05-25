import React from 'react';
import { getAssetPath } from '../utils/assetPath';

const AboutImg = getAssetPath('assets/images/About.png');
const Biggest = getAssetPath('assets/images/biggest.webp');
const cl1 = getAssetPath('assets/images/clientlogo/cl1.jpeg');
const cl2 = getAssetPath('assets/images/clientlogo/cl2.jpeg');
const cl3 = getAssetPath('assets/images/clientlogo/cl3.jpeg');
const cl4 = getAssetPath('assets/images/clientlogo/cl4.jpeg');
const cl5 = getAssetPath('assets/images/clientlogo/cl5.jpeg');
const cl6 = getAssetPath('assets/images/clientlogo/cl6.jpeg');
const cl7 = getAssetPath('assets/images/clientlogo/cl7.jpeg');
const cl8 = getAssetPath('assets/images/clientlogo/cl8.jpeg');
const cl9 = getAssetPath('assets/images/clientlogo/cl9.jpeg');
const cl10 = getAssetPath('assets/images/clientlogo/cl10.jpeg');
const cl11 = getAssetPath('assets/images/clientlogo/cl11.jpeg');
const cl12 = getAssetPath('assets/images/clientlogo/cl12.jpeg');
const cl13 = getAssetPath('assets/images/clientlogo/cl13.jpeg');
const cl14 = getAssetPath('assets/images/clientlogo/cl14.jpeg');
const cl15 = getAssetPath('assets/images/clientlogo/cl15.jpeg');
const cl16 = getAssetPath('assets/images/clientlogo/cl16.jpeg');
const cl17 = getAssetPath('assets/images/clientlogo/cl17.jpeg');
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








      {/* Trusted Partners */}
      <section className="text-center py-5" style={{ backgroundColor: '#E0F7FF' }}>
        <h5 className="fw-bold mb-4" style={{color:"#1B8DBB", fontSize:"30px"}}>Our Valued Clients</h5>

        {/* Row 1: Left to Right */}
        <div className="marquee-container mb-3">
          <div className="marquee-track marquee-track-right">
            {/* First set of logos */}
            {[cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8, cl9, cl10, cl11, cl12, cl13, cl14, cl15, cl16, cl17 ].map((img, i) => (
              <div key={`partner-a-${i}`} className="marquee-item">
                <img
                  src={img}
                  alt={`partner-${i}`}
                  className="marquee-logo"
                />
              </div>
            ))}
            {/* Duplicate set of logos for seamless infinite looping */}
            {[cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8, cl9, cl10, cl11,cl12, cl13, cl14, cl15, cl16, cl17].map((img, i) => (
              <div key={`partner-b-${i}`} className="marquee-item">
                <img
                  src={img}
                  alt={`partner-dup-${i}`}
                  className="marquee-logo"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="marquee-container">
          <div className="marquee-track marquee-track-left">
            {/* First set of logos in reversed order for visual variety */}
            {[cl11, cl10, cl9, cl8, cl7, cl6, cl5, cl4, cl3, cl2, cl1].map((img, i) => (
              <div key={`partner-c-${i}`} className="marquee-item">
                <img
                  src={img}
                  alt={`partner-rev-${i}`}
                  className="marquee-logo"
                />
              </div>
            ))}
            {/* Duplicate set of logos for seamless infinite looping */}
            {[cl11, cl10, cl9, cl8, cl7, cl6, cl5, cl4, cl3, cl2, cl1].map((img, i) => (
              <div key={`partner-d-${i}`} className="marquee-item">
                <img
                  src={img}
                  alt={`partner-rev-dup-${i}`}
                  className="marquee-logo"
                />
              </div>
            ))}
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
          <p className="mb-4" style={{ textAlign: 'center' }}>Contact us today to discuss how we can help you achieve your technology goals.</p>
          <a href="/contact" className="btn btn-light btn-lg px-5 py-3 fw-bold">Get In Touch</a>
        </div>
      </section>
    </div>
  );
};

export default About;

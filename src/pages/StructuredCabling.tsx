import React from 'react';
import { Link } from 'react-router-dom';
const Rectangle27 = '/assets/images/Rectangle-27.webp';
const StrucuturedCablingBanner = '/assets/images/StructuredCabling.png';
const StrucutredImage2 = '/assets/images/strucutred-image-2.webp';
const BringLogo1 = '/assets/images/bring-logo-1.webp';
const BringLogo2 = '/assets/images/bring-logo-2.webp';
const BringLogo3 = '/assets/images/bring-logo-3.webp';
const BringLogo4 = '/assets/images/bring-logo-4.webp';
const BringLogo5 = '/assets/images/bring-logo-5.webp';
const SysLog1 = '/assets/images/sys-log-1.webp';
const SysLogo2 = '/assets/images/sys-logo-2.webp';
const SysLogo3 = '/assets/images/sys-logo-3.webp';
const SysLogo4 = '/assets/images/sys-logo-4.webp';
const SysLogo5 = '/assets/images/sys-logo-5.webp';
const SysLogo6 = '/assets/images/sys-logo-6.webp';
const SysLogo7 = '/assets/images/sys-logo-7.webp';

const StructuredCabling = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={StrucuturedCablingBanner} alt="Structured Cabling Banner" className="banner-img" />
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

      {/* Content Section */}
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-12 col-lg-8">
            <p style={{ color: '#686D76', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif', textAlign: 'justify' }}>
              At JK Global IT Solutions, we recognize that digitization drives the demand for seamless online collaboration with partners, customers, and employees. As markets become increasingly dynamic, the need for reliable and continuous network services and infrastructure grows. Unlike outdated point-to-point cabling, the demand for efficient cable networking is on the rise. Our structured cabling systems provide a streamlined, clutter-free solution, eliminating the complexities of traditional wiring and enhancing your commercial network's efficiency and performance.</p>
            <p style={{ color: '#686D76', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif', textAlign: 'justify' }}>
              JK Global IT Solutions offers fast, reliable, and scalable wired and wireless connectivity solutions. Our comprehensive networking package includes advanced Layer 2/3 VLANs, paired with top-tier switching and routing technologies, to ensure seamless connectivity. Stay ahead in the digital transformation journey with our robust and efficient networking solutions designed to meet the evolving needs of your business.</p>
            <p style={{ color: '#686D76', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif', textAlign: 'justify' }}>
              Be it high-performance cabling or the new optical fiber network adopt to structured cabling systems with cables and associated hardware for all kinds of needs within a specific building or across buildings or within a huge campus</p>
          </div>
          <div className="col-12 col-lg-4">
            <img className="img-fluid" src={StrucutredImage2} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <h2 style={{ color: '#1B8DBB' }} className="text-center fw-bolder">What We Bring</h2>
        <p style={{ color: '#686D76', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif', textAlign: 'justify' }}>
          JK Global IT Solutions specializes in building robust infrastructure using copper and fiber, offering end-to-end networking solutions for secure and well-managed systems—from data center networks to end-user needs. Our core focus areas include high-intensity network consultation, structured cabling, and setting up wireless and fiber-optic-based networks to ensure seamless connectivity and performance.
        </p>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <style dangerouslySetInnerHTML={{
            __html: `
              .hov-container {
                position: relative;
                overflow: hidden;
              }

              .hov {
                position: relative;
                display: inline-block;
                width: 100%;
              }

              .hov img {
                border-radius: 50%;
                transition: opacity 0.3s ease, filter 0.3s ease;
              }

              .hov:hover img {
                filter: brightness(50%);
              }

              .description {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                text-align: center;
                width: 100%;
                opacity: 0;
                transition: opacity 0.3s ease;
                padding: 0 10px;
              }

              .hov:hover .description {
                opacity: 1;
              }

              .mobile-font {
                font-size: inherit;
              }

              @media (max-width: 767px) {
                .mobile-font {
                  font-size: 13px;
                }
                .mob-font {
                  font-size: 13px;
                }
              }
            `
          }} />
          <div className="col-12 col-lg-4 hov-container">
            <div className="hov">
              <img className="img-fluid" src={BringLogo1} alt="" />
              <div className="description p-5">
                <p style={{ backgroundColor: '#1B8DBB', border: '1px solid #1B8DBB', borderRadius: '20px' }} className="fw-bolder py-3 mobile-font">
                  Structured Cabling Solutions
                </p>
                <p className="fw-bold mob-font">Modern, organized cabling systems that replace outdated point-to-point models, providing a cleaner and more efficient infrastructure.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 hov-container my-3 my-lg-0">
            <div className="hov">
              <img className="img-fluid" src={BringLogo2} alt="" />
              <div className="description p-5">
                <p style={{ backgroundColor: '#1B8DBB', border: '1px solid #1B8DBB', borderRadius: '20px' }} className="fw-bolder py-3 mobile-font">Reliable and Scalable
                  Networking Services</p>
                <p className="fw-bold mob-font">Ensuring continuous and dependable network performance to support dynamic business needs and seamless online collaboration.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 hov-container my-3 my-lg-0">
            <div className="hov">
              <img className="img-fluid" src={BringLogo3} alt="" />
              <div className="description p-5">
                <p style={{ backgroundColor: '#1B8DBB', border: '1px solid #1B8DBB', borderRadius: '20px' }} className="fw-bolder py-3 mobile-font">End-to-End Network
                  Infrastructure</p>
                <p className="fw-bold mob-font">From data centers to end-user requirements, we deliver comprehensive networking solutions tailored to enhance connectivity and efficiency.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5 my-3 my-lg-0">
          <div className="col-12 col-lg-4 hov-container">
            <div className="hov">
              <img className="img-fluid" src={BringLogo4} alt="" />
              <div className="description p-5">
                <p style={{ backgroundColor: '#1B8DBB', border: '1px solid #1B8DBB', borderRadius: '20px' }} className="fw-bolder py-3 mobile-font">Customized IT Solutions</p>
                <p className="fw-bold mob-font">We adapt our services to meet the specific needs of your business, ensuring optimal performance and scalability as you grow.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 hov-container my-3 my-lg-0">
            <div className="hov">
              <img className="img-fluid" src={BringLogo5} alt="" />
              <div className="description p-5">
                <p style={{ backgroundColor: '#1B8DBB', border: '1px solid #1B8DBB', borderRadius: '20px' }} className="fw-bolder py-3 mobile-font">Network Performance
                  Optimization</p>
                <p className="fw-bold mob-font">Continuous monitoring and optimization services to ensure your network performs at its best, supporting your business operations without interruptions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 style={{ color: '#686D76', textAlign: 'center' }}><b>Networking Solutions</b></h1>
        <br />
        <div className="row justify-content-center gx-3">
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/systemintegration">
              <span className="box">
                <img src={SysLog1} alt="" className="me-2" />
                <b>System Integration &Maintenance</b>
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/infrastructure">
              <span className="box">
                <img src={SysLogo2} alt="" className="me-2" />
                <b>Infrastructure Management</b>
              </span>
            </Link>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/serverstorage">
              <span className="box">
                <img src={SysLogo3} alt="" className="me-2" />
                <b>Server & Storage</b>
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/networksecurity">
              <span className="box">
                <img src={SysLogo4} alt="" className="me-2" />
                <b>Network security</b>
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/structuredcabling">
              <span style={{ backgroundColor: 'black', border: 'none' }} className="box">
                <img src={SysLogo5} alt="" className="me-2" />
                <b>Structured Cabling</b>
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/cloudnative">
              <span className="box">
                <img src={SysLogo6} alt="" className="me-2" />
                <b>Cloud Native Solution</b>
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/workplace">
              <span className="box">
                <img src={SysLogo7} alt="" className="me-2" />
                <b>Workpalce Surveillance</b>
              </span>
            </Link>
          </div>

        </div>
      </div>

      <style>
        {`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
          .box {
            display: inline-block;
            padding: 10px 20px;
            background-color: #f0ebe3;
            border: 2px solid #1B8DBB;
            border-radius: 8px;
            text-align: center;
            transition: background-color 0.3s ease;
          }
          .box:hover {
            background-color: #1B8DBB;
            color: white;
          }
        `}
      </style>
    </main>
  );
};

export default StructuredCabling;

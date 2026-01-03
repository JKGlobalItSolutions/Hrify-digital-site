import React from 'react';
import { Link } from 'react-router-dom';
const Rectangle27 = '/assets/images/Rectangle-27.webp';
const WorkplaceBanner = '/assets/images/WorkplaceSurveillance.png';
const WoekplaceImage2 = '/assets/images/woekplace-image-2.webp';
const WorkplaceGlobe1 = '/assets/images/workplace-globe-1.webp';
const SysLog1 = '/assets/images/sys-log-1.webp';
const SysLogo2 = '/assets/images/sys-logo-2.webp';
const SysLogo3 = '/assets/images/sys-logo-3.webp';
const SysLogo4 = '/assets/images/sys-logo-4.webp';
const SysLogo5 = '/assets/images/sys-logo-5.webp';
const SysLogo6 = '/assets/images/sys-logo-6.webp';
const SysLogo7 = '/assets/images/sys-logo-7.webp';

const WorkplaceSurveillance = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={WorkplaceBanner} alt="Workplace Surveillance Banner" className="banner-img" />
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
      <div className="container" style={{textAlign:'justify'}}>
        <div className="row align-items-center my-5">
          <div className="col-12 col-lg-8" >
            <p style={{ color: '#686D76', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif'}}>
              At JK Global IT Solutions, we understand the critical importance of workplace surveillance in enhancing security, monitoring activities, and ensuring safety. Our advanced surveillance solutions provide real-time oversight, helping businesses deter potential threats, manage access, and address compliance issues promptly. By integrating our cutting-edge technologies, companies can protect their operations, secure sensitive information, and maintain a safe, productive environment for employees and assets.</p>
            <p style={{ color: '#686D76', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }}>
              We offer a range of customizable solutions, from high-definition CCTV cameras and biometric access control systems to integrated fire alarms and remote monitoring capabilities. These tools collectively ensure that your workplace is continuously monitored, compliant with safety regulations, and prepared to respond effectively to any incident.</p>
            <p style={{ color: '#686D76', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }}>
              By partnering with JK Global IT Solutions, you're investing in a secure, well-managed, and efficient workplace where safety and productivity go hand in hand. Our goal is to empower your business with the technology needed to stay ahead of security challenges, enabling you to focus on growth and success with peace of mind.</p>
            <div style={{ gap: '5px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }} className="d-flex">
              <span style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>○</span>
              <p style={{ color: '#686D76' }}>Enhanced Security</p>
            </div>
            <div style={{ gap: '5px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }} className="d-flex">
              <span style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>○</span>
              <p style={{ color: '#686D76' }}>Real-Time Monitoring</p>
            </div>
            <div style={{ gap: '5px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }} className="d-flex">
              <span style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>○</span>
              <p style={{ color: '#686D76' }}>Improved Compliance and Safety</p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <img className="img-fluid" src={WoekplaceImage2} alt="" />
          </div>
        </div>

      </div>

      <div style={{ backgroundColor: '#F1F1F1' }} className="container-fluid p-2 p-lg-5 py-5">
        <div className="container">
          <h3 style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className=" fw-bolder text-center">Comprehensive Surveillance Solutions</h3> <br/>

          <div style={{ gap: '5px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }} className="d-flex">
            <span style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>○</span>
            <p style={{ color: '#686D76' }}><span style={{ fontWeight: '700', color: 'black' }}>CCTV Systems:</span> High-definition cameras with night vision, motion detection, and remote access features.</p>
          </div>
          <div style={{ gap: '5px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }} className="d-flex">
            <span style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>○</span>
            <p style={{ color: '#686D76' }}><span style={{ color: 'black', fontWeight: '700' }}>Access Control:</span> Secure entry systems including biometric scanners, keycards, and smart locks.</p>
          </div>
          <div style={{ gap: '5px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }} className="d-flex">
            <span style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>○</span>
            <p style={{ color: '#686D76' }}><span style={{ fontWeight: '700', color: 'black' }}>Biometric Surveillance:</span> Facial recognition, fingerprint scanning, and other biometric solutions for high security.</p>
          </div>
          <div style={{ gap: '5px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }} className="d-flex">
            <span style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>○</span>
            <p style={{ color: '#686D76' }}><span style={{ fontWeight: '700', color: 'black' }}>Fire Alarm and Safety Systems:</span> Integration of fire alarms and emergency response systems for comprehensive safety.</p>
          </div>
        </div>
      </div> <br/>

      <div className="container justify-content-center ">

        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-8 col-md-8 text-center d-flex justify-content-center  ">
            <h4 style={{ color: '#F1F1F1', border: '1px solid #1B8DBB', borderRadius: '100px', backgroundColor: '#1B8DBB' }} className="text-center ninety my-3 py-4 px-3"><b>"Why Choose Our Surveillance Solutions?"</b> </h4>
          </div>
        </div> <br/>

        <div className="row my-4">
          <div className="col-12 col-lg-3 image-container my-4 my-lg-0">
            <img className="img-fluid" src={WorkplaceGlobe1} alt="Workplace Globe" />
            <div className="description">
              <h3 className="fw-bolder" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>24/7 Monitoring</h3>
              <p style={{ color: 'black' }} className="fw-bolder">Continuous surveillance to ensure round-the-clock security.</p>
            </div>
          </div>
          <div className="col-12 col-lg-3 image-container my-4 my-lg-0">
            <img className="img-fluid" src={WorkplaceGlobe1} alt="Workplace Globe" />
            <div className="description">
              <h3 className="fw-bolder" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Scalable Solutions</h3>
              <p style={{ color: 'black' }} className="fw-bolder">Tailored for businesses of all sizes, from small offices to large enterprises.</p>
            </div>
          </div>
          <div className="col-12 col-lg-3 image-container my-4 my-lg-0">
            <img className="img-fluid" src={WorkplaceGlobe1} alt="Workplace Globe" />
            <div className="description">
              <h3 className="fw-bolder" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Easy Integration</h3>
              <p style={{ color: 'black' }} className="fw-bolder">Compatible with existing IT infrastructure and scalable to future needs.</p>
            </div>
          </div>
          <div className="col-12 col-lg-3 image-container my-4 my-lg-0">
            <img src={WorkplaceGlobe1} alt="Workplace Globe" />
            <div className="description">
              <h3 className="fw-bolder" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Remote Access</h3>
              <p style={{ color: 'black' }} className="fw-bolder">Monitor your workplace from anywhere via mobile or web applications.</p>
            </div>
          </div> <br/>
          <style dangerouslySetInnerHTML={{
            __html: `
              .image-container {
                position: relative;
                display: inline-block;
              }

              .image-container img {
                display: block;
                width: 100%;
                height: auto;
              }

              .description {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                text-align: center;
                padding: 10px;
                border-radius: 5px;
                width: 80%;
              }
            `
          }} />
          <div className="col-12 col-lg-3"></div>
          <div className="col-12 col-lg-3"></div>
          <div className="col-12 col-lg-3"></div>

        </div>


      </div>


      <br/>
      <div className="container">
        <h1 style={{ color: '#686D76', textAlign: 'center' }}><b>Networking Solutions</b></h1> <br/>
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
              <span className="box">
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
              <span style={{ backgroundColor: 'black', border: 'none' }} className="box">
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

export default WorkplaceSurveillance;

import React from 'react';
import { Link } from 'react-router-dom';
const Rectangle27 = '/assets/images/Rectangle-27.webp';
const SystemImage = '/assets/images/system-image.webp';
const InternImage2 = '/assets/images/intern-image-2.webp';
const SysLog1 = '/assets/images/sys-log-1.webp';
const SysLogo2 = '/assets/images/sys-logo-2.webp';
const SysLogo3 = '/assets/images/sys-logo-3.webp';
const SysLogo4 = '/assets/images/sys-logo-4.webp';
const SysLogo5 = '/assets/images/sys-logo-5.webp';
const SysLogo6 = '/assets/images/sys-logo-6.webp';
const SysLogo7 = '/assets/images/sys-logo-7.webp';












const SystemIntegrationMaintenance = () => {
  return (
    <main>
      {/* Banner section */}
      <div className="banner container-fluid" style={{backgroundColor:'rgba(111, 212, 23, 0.66)'}}>
        <div className="row h-100">
          <div className=" col-12 col-lg-6 d-flex justify-content-center align-items-center text-light">
            <h2 style={{ color: 'black' }} className="fw-bolder">System Integration &
              Maintenance</h2>
            <style dangerouslySetInnerHTML={{
              __html: `
                h2 {
                  font-size: 40px;
                  color: black;
                }

                @media only screen and (max-width: 600px) {
                  h2 {
                    font-size: 30px;
                  }
                }
              `
            }} />
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={SystemImage} alt="" />
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          .banner {
            background-image: url(${Rectangle27});
            height: 300px;
          }
        `
      }} />

      {/* Content Section */}
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-12 col-lg-7">
            <p style={{ color: '#686D76', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif', textAlign: 'justify' }}> At JK Global IT Solutions we specialize in seamless systems integration and reliable maintenance services. Our team ensures that your IT infrastructure operates efficiently by integrating various systems into a cohesive and optimized environment. We provide ongoing support and maintenance to keep your systems running smoothly, minimizing downtime and enhancing overall performance. With our expertise, your technology infrastructure will be robust, scalable, and aligned with your business needs.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '18px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '2px', flexShrink: 0, lineHeight: 1 }}>○</span>
                <span style={{ color: '#686D76' }}>Seamless Integration</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '18px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '2px', flexShrink: 0, lineHeight: 1 }}>○</span>
                <span style={{ color: '#686D76' }}>Optimized Performance</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '18px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '2px', flexShrink: 0, lineHeight: 1 }}>○</span>
                <span style={{ color: '#686D76' }}>Scalability</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '18px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '2px', flexShrink: 0, lineHeight: 1 }}>○</span>
                <span style={{ color: '#686D76' }}>Reliability</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '18px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '2px', flexShrink: 0, lineHeight: 1 }}>○</span>
                <span style={{ color: '#686D76' }}>Proactive Maintenance</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '18px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '2px', flexShrink: 0, lineHeight: 1 }}>○</span>
                <span style={{ color: '#686D76' }}>Customization</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '18px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '2px', flexShrink: 0, lineHeight: 1 }}>○</span>
                <span style={{ color: '#686D76' }}>Cost efficiency</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '18px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '2px', flexShrink: 0, lineHeight: 1 }}>○</span>
                <span style={{ color: '#686D76' }}>Expert Support</span>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-5 text-center">
            <img className="img-fluid " src={InternImage2} alt="" />
          </div>
        </div>
      </div>

      <div className="container">
        <h1 style={{ color: '#686D76', textAlign: 'center' }}><b>Networking Solutions</b> </h1>
        <br />
        <div className="row justify-content-center gx-3">
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/systemintegration">
              <span style={{ backgroundColor: 'black', border: 'none' }} className="box">
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
        `}
      </style>
    </main>
  );
};

export default SystemIntegrationMaintenance;

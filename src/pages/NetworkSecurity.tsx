import React from 'react';
import { Link } from 'react-router-dom';
const NetworkImage = '/assets/images/network-image.webp';
const NetworkImage2 = '/assets/images/network-image-2.webp';
const NetworkLogo1 = '/assets/images/network-logo-1.webp';
const NetworkLogo2 = '/assets/images/network-logo-2.webp';
const NetworkLogo3 = '/assets/images/network-logo-3.webp';
const NetworkLogo4 = '/assets/images/network-logo-4.webp';
const NetworkLogo5 = '/assets/images/network-logo-5.webp';
const NetworkLogo6 = '/assets/images/network-logo-6.webp';
const SysLog1 = '/assets/images/sys-log-1.webp';
const SysLogo2 = '/assets/images/sys-logo-2.webp';
const SysLogo3 = '/assets/images/sys-logo-3.webp';
const SysLogo4 = '/assets/images/sys-logo-4.webp';
const SysLogo5 = '/assets/images/sys-logo-5.webp';
const SysLogo6 = '/assets/images/sys-logo-6.webp';
const SysLogo7 = '/assets/images/sys-logo-7.webp';
const Rectangle27 = '/assets/images/Rectangle-27.webp';

const NetworkSecurity = () => {
  return (
    <main>
      {/* Banner section */}
      <div className="banner container-fluid d-flex justify-content-center align-items-center" style={{ height: '400px', backgroundImage: `url(${Rectangle27})`, position: 'relative', backgroundColor:'#eea166ff' }}>
        <h2 style={{ color: 'black', textAlign: 'center', marginLeft:'-60%' }} className="fw-bolder">Network Security</h2>
        <div style={{ position: 'absolute', right: '10%', top: '50%', transform: 'translateY(-50%)' }}>
          <img className="img-fluid" src={NetworkImage} alt="" />
        </div>
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
      {/* Banner section */}
      {/* Content  Section*/}


      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-12 col-lg-7">
            <p style={{ color: '#686D76', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif', textAlign:'justify' }}>At JK Global IT Solutions, we understand that securing a network is essential for enhancing performance and ensuring continuous access to information by safeguarding business assets from potential threats. As businesses rapidly transition to the digital world, they face new risks, vulnerabilities, and attacks. By strengthening your cyber resilience, we help keep your business running smoothly and securely. Protecting your software systems is critical, and securing your IT infrastructure with the right firewall is equally important. Computer networks are increasingly vulnerable to ransomware, Denial-of-Service (DoS) attacks, and destructive viruses that can compromise valuable data across your network. Let us help you fortify your defenses and protect your business.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '18px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '2px', flexShrink: 0, lineHeight: 1 }}>○</span>
                <span style={{ color: '#686D76' }}>Maintain network security</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '18px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '2px', flexShrink: 0, lineHeight: 1 }}>○</span>
                <span style={{ color: '#686D76' }}>Cyber Resilience</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '18px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '2px', flexShrink: 0, lineHeight: 1 }}>○</span>
                <span style={{ color: '#686D76' }}>Critical IT Infrastructure Protection</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '18px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '2px', flexShrink: 0, lineHeight: 1 }}>○</span>
                <span style={{ color: '#686D76' }}>Threat Mitigation</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '18px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '2px', flexShrink: 0, lineHeight: 1 }}>○</span>
                <span style={{ color: '#686D76' }}>Safeguarding Valuable Data</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '18px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '2px', flexShrink: 0, lineHeight: 1 }}>○</span>
                <span style={{ color: '#686D76' }}>Avoids unauthorized entry</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '18px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '2px', flexShrink: 0, lineHeight: 1 }}>○</span>
                <span style={{ color: '#686D76' }}>Effectively stop data leakages</span>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-5">
            <img className="img-fluid" src={NetworkImage2} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <h1 style={{ color: '#1B8DBB' }} className="text-center fw-bolder d-none d-lg-block">Solutions for Network Security in Tamilnadu | Guarantee Network Security | Chennai Display Solution Service</h1>
        <h5 style={{ color: '#1B8DBB' }} className="text-center fw-bolder d-lg-none">Solutions for Network Security in Tamilnadu | Guarantee Network Security | Chennai Display Solution Service</h5>
        <div className="row mt-4">
          <div className="col-12 col-lg-4 align-items-center text-center">
            <img style={{ height: '50px', display: 'block', margin: '0 auto' }} src={NetworkLogo1} alt="" />
            <p className="mt-3 fw-bolder"> Network Defense As a Service ( NDaas )</p>
          </div>
          <div className="col-12 col-lg-4 align-items-center text-center">
            <img style={{ height: '50px', display: 'block', margin: '0 auto' }} src={NetworkLogo2} alt="" />
            <p className="mt-3 fw-bolder">Backup Solutions</p>
          </div>
          <div className="col-12 col-lg-4 align-items-center text-center">
            <img style={{ height: '50px', display: 'block', margin: '0 auto' }} src={NetworkLogo3} alt="" />
            <p className="mt-3 fw-bolder">Server Security</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-lg-4 align-items-center text-center">
            <img style={{ height: '50px', display: 'block', margin: '0 auto' }} src={NetworkLogo4} alt="" />
            <p className="mt-3 fw-bolder">Endpoint Security</p>
          </div>
          <div className="col-12 col-lg-4 align-items-center text-center">
            <img style={{ height: '50px', display: 'block', margin: '0 auto' }} src={NetworkLogo5} alt="" />
            <p className="mt-3 fw-bolder">Secure Remote Enabling</p>
          </div>
          <div className="col-12 col-lg-4 align-items-center text-center">
            <img style={{ height: '50px', display: 'block', margin: '0 auto' }} src={NetworkLogo6} alt="" />
            <p className="mt-3 fw-bolder">Gateway Audits</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 style={{ color: '#686D76', textAlign: 'center' }}><b>Networking Solutions</b> </h1>
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
              <span style={{ backgroundColor: 'black', border: 'none' }} className="box">
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

export default NetworkSecurity;


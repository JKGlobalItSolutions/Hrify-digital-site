import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/assetPath';

const Rectangle27 = getAssetPath('assets/images/Rectangle-27.webp');
const InfraLogo1 = getAssetPath('assets/images/InfrastructureManagement.png');
const InfraImage2 = getAssetPath('assets/images/infra-image-2.webp');
const InfraL1 = getAssetPath('assets/images/infra-l-1.webp');
const InfraL2 = getAssetPath('assets/images/infra-l-2.webp');
const InfraL3 = getAssetPath('assets/images/infra-l-3.webp');
const InfraL4 = getAssetPath('assets/images/infra-l-4.webp');
const SysLog1 = getAssetPath('assets/images/sys-log-1.webp');
const SysLogo2 = getAssetPath('assets/images/sys-logo-2.webp');
const SysLogo3 = getAssetPath('assets/images/sys-logo-3.webp');
const SysLogo4 = getAssetPath('assets/images/sys-logo-4.webp');
const SysLogo5 = getAssetPath('assets/images/sys-logo-5.webp');
const SysLogo6 = getAssetPath('assets/images/sys-logo-6.webp');
const SysLogo7 = getAssetPath('assets/images/sys-logo-7.webp');

const InfrastructureManagement = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={InfraLogo1} alt="Infrastructure Management Banner" className="banner-img" />
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
            <p style={{ color: '#686D76', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif', textAlign: 'justify' }}>At Hrify Digital, our Infrastructure Management services are designed to ensure that your IT environment operates at peak efficiency. We manage and optimize your entire infrastructure, from servers and networks to cloud services and data centers. Our proactive approach includes continuous monitoring, regular updates, and strategic planning to prevent issues and minimize downtime. By leveraging the latest technologies and best practices, we provide a stable, scalable, and secure infrastructure that supports your business's growth and adaptability in an ever-changing digital landscape.</p>
          </div>
          <div className="col-12 col-lg-4 text-center">
            <img className="img-fluid" src={InfraImage2} alt="" />
          </div>
        </div>
      </div>

      <div className="container">
        <h5 className="text-center" style={{ color: '#1B8DBB' }}><b>Our Offerings</b></h5>
        <div className="row">
          <div className="col-12 col-lg-6 justify-content-center">
            <div className="text-center">
              <img className="text-center" style={{ height: '50px', filter: 'hue-rotate(180deg) saturate(1.5) brightness(0.8)' }} src={InfraL1} alt="" />
            </div>
            <p>A complete range of server and storage solutions with reliable backup systems to securely manage your data.</p>
          </div>
          <div className="col-12 col-lg-6 justify-content-center">
            <div className="text-center">
              <img className="text-center" style={{ height: '50px', filter: 'hue-rotate(180deg) saturate(1.5) brightness(0.8)' }} src={InfraL2} alt="" />
            </div>
            <p>We offer high-performance laptops with licensed software, the latest Windows OS, and fast M.2 SSDs, plus customizable desktops and laptops from authorized vendors, all ready for instant use.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 justify-content-center">
            <div className="text-center">
              <img className="text-center" style={{ height: '50px', filter: 'hue-rotate(180deg) saturate(1.5) brightness(0.8)' }} src={InfraL3} alt="" />
            </div>
            <p>Hrify Digital delivers SaaS solutions tailored to meet customers' on-demand and dynamic needs.</p>
          </div>
          <div className="col-12 col-lg-6 justify-content-center">
            <div className="text-center">
              <img className="text-center" style={{ height: '50px', filter: 'hue-rotate(180deg) saturate(1.5) brightness(0.8)' }} src={InfraL4} alt="" />
            </div>
            <p>Hrify Digital designs and delivers high-end, Intel-based IT infrastructure with customizable configurations and top processors on demand.</p>
          </div>
        </div>
      </div>

      <div className="container mobile-only">
        <h1 style={{ color: '#686D76', textAlign: 'center' }}><b>Networking Solutions</b></h1>
        <br />
        <div className="row justify-content-center gx-3">
          <div className="col-12 col-md-12 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/systemintegration">
              <span className="box">
                <img src={SysLog1} alt="" className="me-2" />
                <b>System Integration &Maintenance</b>
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-12 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/infrastructure">
              <span style={{ backgroundColor: 'black', border: 'none' }} className="box">
                <img src={SysLogo2} alt="" className="me-2" />
                <b>Infrastructure Management</b>
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-12 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/serverstorage">
              <span className="box">
                <img src={SysLogo3} alt="" className="me-2" />
                <b>Server & Storage</b>
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-12 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/networksecurity">
              <span className="box">
                <img src={SysLogo4} alt="" className="me-2" />
                <b>Network security</b>
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-12 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/structuredcabling">
              <span className="box">
                <img src={SysLogo5} alt="" className="me-2" />
                <b>Structured Cabling</b>
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-12 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/cloudnative">
              <span className="box">
                <img src={SysLogo6} alt="" className="me-2" />
                <b>Cloud Native Solution</b>
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-12 col-lg-4 mb-3">
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
            display: block;
          }
        `}
      </style>
    </main>
  );
};

export default InfrastructureManagement;

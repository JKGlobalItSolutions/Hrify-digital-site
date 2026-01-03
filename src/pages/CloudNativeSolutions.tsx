import React from 'react';
import { Link } from 'react-router-dom';

const CloudNativeSolutions = () => {
  return (
    <main>
      {/* Banner section */}
      <div className="banner container-fluid" style={{backgroundColor:'#e0ed6cff'}} >
        <div className="row h-100">
          <div className=" col-12 col-lg-6 d-flex justify-content-center align-items-center text-center text-light">
            <h2 className="fw-bolder">Cloud Native Solutions</h2>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src="/assets/images/cloud native banner.webp" alt="Network Security" />
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          .banner {
            background-image: url(/assets/images/Rectangle 27.webp);
            height: 600px;
          }

          h2 {
            font-size: 40px;
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
        `
      }} />
      {/* Banner section */}
      {/* Content  Section*/}


      <div className="container" style={{textAlign:'justify'}}>
        <div className="row align-items-center my-5">
          <div className="col-12 col-lg-8">
            <p style={{ color: '#686D76', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }}>
              Stay ahead in today's fast-changing business environment and climb the ladder of success by embracing innovative business models. By adopting a wide range of cloud services, you can enhance cost-efficiency, boost productivity, and improve operational effectiveness. This approach not only reduces operational costs but also optimizes your business processes, setting you on a path of accelerated growth and success.</p>
            <p style={{ color: '#686D76', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }}>
              We have collaborated with Crayon to provide Infrastructure-as-a-Service (IaaS), allowing organizations to employ cloud-native tools that streamline software application management and operation via cloud computing. The pay-per-usage model, which is now popular, allows businesses to pay only for the services that they use. Our cloud solutions are designed to be adaptable, allowing businesses to optimize expenses while leveraging cloud capabilities.</p>
            <p style={{ color: '#686D76', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }}>
              Be it high-performance cabling or the new optical fiber network adopt to structured cabling systems with cables and associated hardware for all kinds of needs within a specific building or across buildings or within a huge campus</p>
          </div>
          <div className="col-12 col-lg-4">
            <img className="img-fluid" src="/assets/images/cloud native image 1.webp" alt="" />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#F1F1F1',textAlign:'justify' }} className="container-fluid p-2 p-lg-5 py-5">
        <div className="container">
          <h3 style={{ color: '#1B8DBB' }} className=" fw-bolder text-center">Secure Cloud Solution</h3>
          <p style={{ color: '#686D76', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }}>At JK Global IT Solutions, in partnership with Crayon, we offer Infrastructure-as-a-Service (IaaS) and design private cloud solutions tailored for individual organizations. We provide training and knowledge transfer to empower clients to manage their private clouds independently.</p>
          <p style={{ color: '#686D76', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }}>Experience the benefits of an 'Intelligent Cloud' with our flexible pay-as-you-go model and a broad range of cloud services to meet your project or managed service needs. We help build smart multi-cloud strategies to optimize business costs and operations, ensuring a secure and centralized cloud environment.</p>
          <p style={{ color: '#686D76', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }}>Easily migrate your existing software to our intelligent cloud platform, and modernize your workplace with seamless, cost-effective transitions—guided every step of the way by JK Global IT Solutions and Crayon.</p>
          <div style={{ gap: '5px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }} className="d-flex">
            <span style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>○</span>
            <p style={{ color: '#686D76' }}>Infra iQ – A centralized platform to monitor, analyze, and manage all your infrastructure environments efficiently.</p>
          </div>
          <div style={{ gap: '5px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }} className="d-flex">
            <span style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>○</span>
            <p style={{ color: '#686D76' }}>Cloud iQ – A one-stop comprehensive self-service portal enabling you to manage Amazon Web Services and Microsoft Cloud Suite of Technology products.</p>
          </div>
          <div style={{ gap: '5px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' }} className="d-flex">
            <span style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>○</span>
            <p style={{ color: '#686D76' }}>Cloud Easy – A huge cloud portfolio to manage project-specific or managed cloud services.</p>
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
                <img src="/assets/images/sys log 1.webp" alt="" className="me-2" />
                <b>System Integration &Maintenance</b>
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/infrastructure">
              <span className="box">
                <img src="/assets/images/sys logo 2.webp" alt="" className="me-2" />
                <b>Infrastructure Management</b>
              </span>
            </Link>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/serverstorage">
              <span className="box">
                <img src="/assets/images/sys logo 3.webp" alt="" className="me-2" />
                <b>Server & Storage</b>
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/networksecurity">
              <span className="box">
                <img src="/assets/images/sys logo 4.webp" alt="" className="me-2" />
                <b>Network security</b>
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/structuredcabling">
              <span className="box">
                <img src="/assets/images/sys logo 5.webp" alt="" className="me-2" />
                <b>Structured Cabling</b>
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/cloudnative">
              <span style={{ backgroundColor: 'black', border: 'none' }} className="box">
                <img src="/assets/images/sys logo 6.webp" alt="" className="me-2" />
                <b>Cloud Native Solution</b>
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/workplace">
              <span className="box">
                <img src="/assets/images/sys logo 7.webp" alt="" className="me-2" />
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

export default CloudNativeSolutions;


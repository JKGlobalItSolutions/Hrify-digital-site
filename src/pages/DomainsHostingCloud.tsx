import React from 'react';
import { Link } from 'react-router-dom';
const DomainImage1 = '/assets/images/domain-image-1.webp';
const DomainImage2 = '/assets/images/domain-image-2.webp';
const DomainImage3 = '/assets/images/domain-image-3.webp';
const Rectangle27 = '/assets/images/Rectangle-27.webp';
const Trip = '/assets/images/trip.webp';


const DomainsHostingCloud = () => {
  return (
    <main>
      {/* Banner section */}
      <div className="banner container-fluid" style={{backgroundImage: `url(${Rectangle27})`, height: '400px', backgroundColor:'#65d8daff'}}>
        <div className="row h-100 p-lg-5">
          <div className=" col-12 col-lg-6 d-flex justify-content-center align-items-center text-light">
            <h2 style={{color: 'black'}} className="fw-bolder text-center">Domains, Hosting and Cloud Solutions</h2>
            <style>
              {`
                h2 {
                  font-size: 50px;
                  color: black;
                }
                @media only screen and (max-width: 600px) {
                  h2 {
                    font-size: 30px;
                  }
                }
              `}
            </style>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={DomainImage1} alt="" />
          </div>
        </div>
      </div>
      {/* Banner section */}
      {/* Content  Section*/}
      <div className="container" style={{textAlign:'justify'}}>
        <div className="row p-lg-4 p-2 align-items-center justify-content-center">
          <div className="col-12 col-lg-8">
            <p style={{color: '#686D76'}}>    JK Global IT Solutions offers comprehensive hosting services including domain registration, SSL certificates, and maintenance, all backed by superior support. We cater to specific hosting and cloud solution needs with customized options that align with your requirements and budget. Our dedicated Server Support Team and partnerships with global hosting companies and data centers ensure seamless handling of even the most complex demands. We also provide expert assistance in selecting and installing SSL certificates, ensuring you choose the right solution for your business and receive professional setup and installation support.</p>
          </div>
          <div className="col-12 col-lg-4 my-5 my-lg-0">
            <img className="img-fluid" src={DomainImage2} alt="" />
          </div>
        </div>
      </div>
      <div className="container" style={{textAlign:'justify'}}>
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-lg-8 p-4">
            <h3>Advantages of choosing our Hosting and Cloud Services:</h3> <br />
            <ul>
              <li>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i>Customized Remedies tailored cloud and hosting solutions to meet your unique
              requirements and financial constraints.</p>
              </li>
              <li>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i>Constant monitoring of websites</p>
              </li>
              <li>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i>Our Server Support Team delivers efficient management and
                troubleshooting assistance.</p>
              </li>
              <li>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> 99.9% uptime assurance</p>
              </li>
              <li>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i>Enhance operational effectiveness and flexibility with our customized hosting
                and cloud services.</p>
              </li>
              <li>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i>committed backup upkeep</p>
              </li>
              <li>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i>specific server assistance</p>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-4">
            <img className="img-fluid" src={DomainImage3} alt="" />
          </div>
        </div>
      </div>
      <div className="container mobile-only">
        <h1 style={{color: '#686D76', textAlign: 'center'}}>Prime Commercial Services</h1>
        <br /><br /><br />
        <div className="row justify-content-center gx-3">
          <div className="col-12 col-md-4 mb-3">
            <Link style={{textDecoration: 'none'}} to="/domains">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Dominas, HGosting and Cloud
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{textDecoration: 'none'}} to="/personalemail">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Personal and Enterprise Email
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{textDecoration: 'none'}} to="/googlework">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Google Apps and Services
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{textDecoration: 'none'}} to="/emailcampaign">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Email Campaign Management
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{textDecoration: 'none'}} to="/awsimpl">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                AWS Servcies Implementations
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{textDecoration: 'none'}} to="/designbranding">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Design and Branding
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{textDecoration: 'none'}} to="/digitalmarketing">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Digital Marketing and Social Media
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

export default DomainsHostingCloud;

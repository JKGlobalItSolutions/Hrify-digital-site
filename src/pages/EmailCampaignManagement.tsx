import React from 'react';
import { Link } from 'react-router-dom';
const Rectangle27 = '/assets/images/Rectangle-27.webp';
const Email1Image = '/assets/images/email-1-image.webp';
const EmailImage2 = '/assets/images/email-image-2.webp';
const EmailImage3 = '/assets/images/email-image-3.webp';
const Trip = '/assets/images/trip.webp';







const EmailCampaignManagement = () => {
  return (
    <main>
      {/* Banner section */}
      <div className="banner container-fluid" style={{backgroundColor: '#6ca5f0ff'}}>
        <div className="row h-100 p-lg-5">
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center text-light">
            <h2 className="fw-bolder text-center">Email Campaign 
              Management Solutions
            </h2>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={Email1Image} alt="" />
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          .banner {
            background-image: url(${Rectangle27});
            height: 300px;
          }
          h2 {
            font-size: 36px;
            color: black;
          }
          @media only screen and (max-width: 600px) {
            h2 {
              font-size: 24px;
            }
          }
        `
      }} />

      {/* Content Section */}
      <div className="container">
        <div className="row p-lg-4 p-2 align-items-center justify-content-center">
          <div className="col-12 col-lg-9">
            <p style={{ color: '#686D76' , textAlign: 'justify'}}> Sending email campaigns to your customers and authorized leads has long been a fundamental marketing practice. However, due to advancements in spam filters and increasing complexities, this task has become more challenging. This is where JK Global IT Solutions offers a straightforward Email Campaign Management Solution for your business, leveraging the AWS SES mailing platform. This system is tailored for managing large volumes of email IDs efficiently. While focused on genuine user mailing and mail list management, its robust features make it a compelling choice.</p>
          </div>
          <div className="col-12 col-lg-3 my-5 my-lg-0 justify-content-center">
            <img className="img-fluid" src={EmailImage2} alt="" />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#F1F1F1', textAlign: 'justify'}} className="p-4">
        <div className="row align-items-center justify-content-center ms-lg-3">
          <div className="col-12 col-lg-8 p-4">
            <h3>Advantages of choosing our Hosting and Cloud Services:</h3> <br />
            <ul>
              <li>
                <p style={{ color: '#686D76' }}><i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Simplified Management: Easily handle email campaigns with streamlined processes.</p>
              </li>

              <li>
                <p style={{ color: '#686D76' }}><i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Management of mailing lists</p>
              </li>

              <li>
                <p style={{ color: '#686D76' }}><i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Scheduling of campaign mail</p>
              </li>
            
              <li>
                <p style={{ color: '#686D76' }}><i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; 99.9% uptime assurance</p>
              </li>

              <li>
                <p style={{ color: '#686D76' }}><i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; All-inclusive Features: Get strong instruments designed for actual user mailing
              and list administration.</p>
              </li>

              <li>
                <p style={{ color: '#686D76' }}><i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp;Plans that are adaptable and solely limit the quantity of emails sent, rather than 
              the number of contacts addressed</p>
              </li>

              <li>
                <p style={{ color: '#686D76' }}><i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Reliable Support Take advantage of JK Global IT Solutions' proficiency in email 
              campaign optimization.</p>
              </li>

            </ul>
          </div>
          <div className="col-12 col-lg-3">
            <img className="img-fluid" src={EmailImage3} alt="" />
          </div>
        </div>
      </div>

      <div className="container mobile-only">
        <h1 style={{ color: '#686D76', textAlign: 'center' }}>Prime Commercial Services</h1>
        <br /><br /><br />
        <div className="row justify-content-center gx-3">
          <div className="col-12 col-md-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/domains">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Domains, Hosting and Cloud
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/personalemail">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Personal and Enterprise Email
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/googlework">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Google Apps and Services
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/emailcampaign">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Email Campaign Management
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/awsimpl">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                AWS Services Implementations
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/designbranding">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Design and Branding
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/digitalmarketing">
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

export default EmailCampaignManagement;

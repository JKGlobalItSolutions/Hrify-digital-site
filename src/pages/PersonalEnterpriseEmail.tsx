import React from 'react';
import { Link } from 'react-router-dom';
const PersonalImage1 = '/assets/images/Personal-and-Enterprise-Email-Solutions.png';
const PersonalImage2 = '/assets/images/personal-image-2.webp';
const Rectangle27 = '/assets/images/Rectangle-27.webp';
const Trip = '/assets/images/trip.webp';


const PersonalEnterpriseEmail = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={PersonalImage1} alt="Personal and Enterprise Email Solutions Banner" className="banner-img" />
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
      <br />
      {/* Banner section */}
      {/* Content  Section*/}
      <div className="container" style={{textAlign:'justify'}}>
        <div className="row p-lg-4 p-2 align-items-center justify-content-center">
          <div className="col-12 col-lg-8">
            <p style={{color: '#686D76'}}> Emails have always been the most important form of formal communication, even though digital technology has advanced to the point where new channels and modes of communication appear on a daily basis. Email solutions are still getting better nowadays in terms of simplicity, versatility, and new features.  A professional email address is necessary for any size of organization. It builds your professionalism and brand while also enhancing the quality of your communications. The major competitors like Google and Microsoft have made the email channels more feature-rich and streamlined.</p>
          </div>
          <br />
          <br />
          <div className="col-12 col-lg-4 my-5 my-lg-5">
            <img className="img-fluid" src={PersonalImage2} alt="" />
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

export default PersonalEnterpriseEmail;

import React from 'react';
import { Link } from 'react-router-dom';
const Rectangle27 = '/assets/images/Rectangle-27.webp';
const DigitalImage1 = '/assets/images/DigitalMarketing&SocialMediaSolutions.png';
const DigitalImage2 = '/assets/images/digital-image-2.webp';
const Trip = '/assets/images/trip.webp';

const DigitalMarketingSocialMedia = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={DigitalImage1} alt="Digital Marketing & Social Media Solutions Banner" className="banner-img" />
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
      <div className="container my-4">
        <div className="row align-items-center justify-content-center ms-lg-3">
          <div className="col-12 col-lg-8 p-4">
            <p style={{ color: '#686D76',  textAlign: 'justify' }}>Over the last ten years, social media and digital marketing have emerged as the most sought-after strategies for driving online sales and clientele for businesses. The method of advertising websites to search engines and social media platforms has never changed, even when the platforms, algorithms, and techniques for these are updated annually.</p>
            <p style={{ color: '#686D76',  textAlign: 'justify' }}>At JK Global IT Solutions, we have a particular plan that uses only a few tactics to have targeted digital marketing for businesses. Better ranking, more traffic, and more traction are the outcomes of this.  We carefully combine off-page advertising and organic SEO to improve your search engine ranking. Improved traffic and more business conversions are the outcomes when combined with our focused social media marketing.</p>
          </div>
          <div className="col-12 col-lg-4">
            <img className="img-fluid" src={DigitalImage2} alt="" />
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

export default DigitalMarketingSocialMedia;

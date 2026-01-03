import React from 'react';
import { Link } from 'react-router-dom';
const Rectangle27 = '/assets/images/Rectangle-27.webp';
const DesignImage1 = '/assets/images/design-image-1.webp';
const DesignImage2 = '/assets/images/design-image-2.webp';
const Trip = '/assets/images/trip.webp';






const DesignBranding = () => {
  return (
    <main>
      {/* Banner section */}
      <div className="banner container-fluid" style={{backgroundColor: '#ef9debff'}}>
        <div className="row h-100 p-lg-5">
          <div className=" col-12 col-lg-6 d-flex justify-content-center align-items-center text-light">
            <h2 style={{ color: 'black' }} className="fw-bolder text-center">Design and Branding Solutions</h2>
            <style dangerouslySetInnerHTML={{
              __html: `
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
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={DesignImage1} alt="" />
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
      }} /> <br/>

      {/* Content Section */}
      <div className="container">
        <div className="row align-items-center justify-content-center ms-lg-0">
          <div className="col-12 col-lg-8 p-4" style={{textAlign:'justify'}}>
            <p style={{ color: '#686D76', textAlign: 'justify' }}>Whether you need a logo designed or a complete branding solution that includes design for all of your business props, JK Global IT Solution provides customized design and branding solutions for your company. To deliver the greatest results for your business design expectations, we have devoted designers that only use Photoshop and Illustrator. Please provide me with a concise explanation in the exact same terms.</p> <br/>
            <h3>Services Included in Our Design Solutions:</h3> <br/>
            <ul>
              <li>
                <p style={{ color: '#686D76' }}><i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Design of a Logo Make unique, enduring logos for your company.</p>
              </li>
              <li>
                <p style={{ color: '#686D76' }}><i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Solutions for Branding Create thorough branding materials and tactics.</p>
              </li>
              <li>
                <p style={{ color: '#686D76' }}><i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Graphic Design Create a range of marketing collateral and business accessories.</p>
              </li>
              <li>
                <p style={{ color: '#686D76' }}><i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Proficiency in Software For detailed design work, use Adobe Illustrator and Photoshop.</p>
              </li>
              <li>
                <p style={{ color: '#686D76' }}><i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Banner Image Designs & Visiting Card Custom Designs</p>
              </li>
              <li>
                <p style={{ color: '#686D76' }}><i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp;Print Material and Label Designs</p>
              </li>
              <li>
                <p style={{ color: '#686D76' }}><i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp;Social Media Promotion Image Designs</p>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3">
            <img className="img-fluid" src={DesignImage2} alt="" />
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

export default DesignBranding;

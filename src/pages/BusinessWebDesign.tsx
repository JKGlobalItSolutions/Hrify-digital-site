import React from 'react';
import { Link } from 'react-router-dom';
const Rectangle27 = '/assets/images/Rectangle-27.webp';
const BusinessWebDesignBanner = '/assets/images/business-web-design-banner.webp';
const WorkFlow = '/assets/images/work-flow.webp';
const Trip = '/assets/images/trip.webp';






const BusinessWebDesign = () => {
  return (
    <main>
      {/* Banner section */}
      <div className="banner container-fluid">
        <div className="row h-100">
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center text-light">
            <h2 className="fw-bolder text-center">Business Web-Design</h2>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={BusinessWebDesignBanner} alt="" />
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          .banner {
            background-image: url(${Rectangle27});
            height: 600px;
          }
          h2 {
            font-size: 50px;
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

      <br/><br/><br/>

      <div className="container mb-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-8">
            <h3 className="text-primary"><b>Website Design Services</b></h3><br/>
            <p style={{ color: '#686D76' }}>Our wide range of web design solutions caters to each customer's unique requirements, taking into account their industry and the kind of solution needed. Any business, no matter how big or little, needs a dedicated website that caters to a certain audience. It is crucial to identify the target and create an engaging website that will fulfill the objective of the company.</p>
            <p style={{ color: '#686D76' }}>JK Global IT Solutions is aware of this, and we use our knowledge and experience to recommend the best website design for your company. Business web design is appropriate for individual professionals seeking a website for their portfolio or for multinational companies needing a large corporate gateway. A basic static website or a complex website with a content-management system for regularly updated content are the options available here. We provide our professional services for both custom and template-driven mobile responsive website designs.</p>
          </div>
          <div className="col-12 col-lg-4">
          <img className="img-fluid my-4" src={WorkFlow} alt="" />
          </div>
        </div>
      </div>

      <div className="container mobile-only">
        <h1 style={{ color: '#686D76', textAlign: 'center' }}>Leading Web Design Firms</h1>
        <br /><br /><br />
        <div className="row justify-content-center gx-3">
          <div className="col-12 col-md-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/businessweb">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Business web-design
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/resweb">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Responsive web-design
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/cmsweb">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                CMS Web-design solution
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

export default BusinessWebDesign;

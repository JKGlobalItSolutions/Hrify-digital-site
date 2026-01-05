import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/assetPath';

const ECommerceImage1 = getAssetPath('assets/images/E-Commerce-Web-Solutions.png');
const ECommerceImage2 = getAssetPath('assets/images/e-commerce-image-2.webp');
const Rectangle27 = getAssetPath('assets/images/Rectangle-27.webp');
const Trip = getAssetPath('assets/images/trip.webp');


const ECommerceWebSolutions = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={ECommerceImage1} alt="E-Commerce Web Solutions Banner" className="banner-img" />
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
      {/* Banner section */}
      {/* Content  Section*/}
      <div className="container my-4">
        <div className="row justify-content-center align-items-center" style={{textAlign:"justify"}}>
          <div className="col-12 col-lg-8">
            <p style={{color: '#686D76'}}>Selling your products or services online is the simplest method to operate in this digital age, and it is far simpler with our specialized e-Commerce Web Solutions. We offer adaptable e-commerce and shopping cart solutions that are full featured, safe, and simple to use for small and medium-sized enterprises. Our solutions at Hrify Digital are tailored to your product type, target market, business procedure, and operability. We have effectively provided simple-to-manage B2C and B2B e-Commerce solutions. We create e-commerce solutions for WordPress and Opencart as , which may be adjusted to your specifications and integrated with extra plugins to function.</p>
            <p style={{color: '#686D76'}}>Our e-commerce and shopping cart solutions are safe and user-friendly, making them suitable for small and medium enterprises. Hrify Digital offers solutions tailored to your product type, target audience, business process, and operability. We have implemented manageable e-Commerce solutions for both B2C and B2B. We offer customized eCommerce solutions for Wordpress and Opencart, with optional plugins to meet your specific needs.</p>
          </div>
          <div className="col-12 col-lg-4">
            <img className="img-fluid" src={ECommerceImage2} alt="" />
          </div>
        </div>
      </div>
      <div className="container" style={{textAlign:"justify"}}>
        <h3 className="my-3" style={{color: '#686D76'}}>Typical features that come with our products</h3>
        <div className="row">
          <div className="col-12 col-lg-4 ">
            <ul className="" style={{color: '#686D76'}}>
              <li className="my-2">Personalized Front End Layout</li>
              <li className="my-2">Endless possibilities</li>
              <li className="my-2">Multilingual capabilities</li>
              <li className="my-2">Customer feedback and ratings</li>
              <li className="my-2">infinite pages of information</li>
              <li className="my-2">Data insights</li>
              <li className="my-2">Integration of Social Sharing</li>
            </ul>
          </div>
          <div className="col-12 col-lg-4">
            <ul style={{color: '#686D76'}}>
              <li className="my-2">Automatic Image Resizing</li>
              <li className="my-2">No End to the Categories</li>
              <li className="my-2">Support for multiple currencies</li>
              <li className="my-2">Support for multiple tax rates.</li>
              <li className="my-2">Incorporating payment gateways.</li>
              <li className="my-2">Orders via Email</li>
              <li className="my-2">Education and Assistance for Managing</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mobile-only">
        <h1 style={{color: '#686D76', textAlign: 'center'}}>Distinguished Online Programs</h1>
        <br /><br /><br />
        <div className="row justify-content-center gx-3">
          <div className="col-12 col-md-4 mb-3">
            <Link style={{textDecoration: 'none'}} to="/customweb">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Custom web applications
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{textDecoration: 'none'}} to="/ecommerceweb">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                E-Commerce web solutions
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{textDecoration: 'none'}} to="/matrimonyweb">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Matrimony Web Solutions
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

export default ECommerceWebSolutions;

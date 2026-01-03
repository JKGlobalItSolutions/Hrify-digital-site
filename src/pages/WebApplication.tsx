import React from 'react';
import { Link } from 'react-router-dom';
const CustomImage1 = '/assets/images/custom-image-1.webp';
const CustomWebImage2 = '/assets/images/custom-web-image-2.webp';
const Rectangle27 = '/assets/images/Rectangle-27.webp';
const Trip = '/assets/images/trip.webp';


const WebApplication = () => {
  return (
    <main>
          {/* Banner section */}
          <div className="banner container-fluid" style={{backgroundImage: `url(${Rectangle27})`, height: '400px'}}>
            <div className="row h-100">
              <div className=" col-12 col-lg-6 d-flex justify-content-center align-items-center text-light">
                <h2 style={{color: 'black'}} className="fw-bolder text-center">Custom Web Applications</h2>
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
                <img className="img-fluid" src={CustomImage1} alt="" />
              </div>
            </div>
          </div>
          {/* Banner section */}
          {/* Content  Section*/}
          <div className="container my-4">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-lg-8">
                <p style={{color: '#686D76'}}>Customized web apps are now in high demand. Custom web apps are necessary for providing more functionality or sophistication to your team or consumers after establishing a website. JK Global IT Solutions can provide extra capabilities based on your specific requirements.</p>
                <p style={{color: '#686D76'}}>JK Global IT Solutions has provided high-quality, cost-effective IT solutions to organizations of all sizes for over a decade. We can handle both small and large scale bespoke web applications. Our services include third-party integrations and API implementations. Our team has extensive expertise dealing with APIs such as eBay, Amazon, AWS, Facebook, MailChimp, SMS gateways, and payment gateways.</p>
              </div>
              <div className="col-12 col-lg-4">
                <img className="img-fluid" src={CustomWebImage2} alt="" />
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

export default WebApplication;

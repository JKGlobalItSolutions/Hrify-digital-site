import React from 'react';
import { Link } from 'react-router-dom';
const MatrimonyImage1 = '/assets/images/matrimony-image-1.webp';
const MatrimonyImage2 = '/assets/images/matrimony-image-2.webp';
const Rectangle27 = '/assets/images/Rectangle-27.webp';
const Trip = '/assets/images/trip.webp';


const MatrimonyWebSolutions = () => {
  return (
    <main>
      {/* Banner section */}
      <div className="banner container-fluid p-3" style={{backgroundImage: `url(${Rectangle27})`, height: '400px', backgroundColor:'#e3b1e4ff'}}>
        <div className="row h-100">
          <div className=" col-12 col-lg-6 d-flex justify-content-center align-items-center text-light">
            <h2 style={{color: 'black'}} className="fw-bolder text-center">Matrimony Web Solutions</h2>
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
            <img className="img-fluid " src={MatrimonyImage1} alt="" />
          </div>
        </div>
      </div>
      {/* Banner section */}
      {/* Content  Section*/}
      <div className="container my-4 justify-content-center p-3" style={{textAlign:'justify'}}>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-8">
            <p style={{color: '#686D76'}}>Marriages are formed in paradise, and marriage websites are built using the JK
              Global IT Solutions. We are well-known for the numerous successful matrimony websites that we have supplied
              to our clientele. We have developed successful matrimonial websites with thousands of profiles. Our
              expertise in understanding marriage requirements and user experience distinguishes us in providing
              exceptional solutions.</p>
            <p style={{color: '#686D76'}}>We specialize in creating highly effective marriage matching websites capable of
              managing thousands of profiles. What sets us apart is our deep understanding of user experience and
              matrimonial needs. Our solutions range from simple profiling systems to complex, multi-database platforms
              with optional services. We provide expert guidance to implement the right solution for your needs.</p>
          </div>
          <div className="col-12 col-lg-4">
            <img className="img-fluid " src={MatrimonyImage2} alt="" />
          </div>
        </div>
      </div>
      <div className="container p-4" style={{textAlign:'justify'}}>
        <h3 style={{color: '#686D76'}}>Standard Features Our Matrimony Solutions Offer</h3>
        <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp; Thorough user
          registration that collects all personal information</p>
        <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp; Beautiful and
          distinctive website design created by our gifted designers</p>
        <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp; Completely
          individualized for your hobbies and community </p>
        <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp; Easy and
          efficient matchmaking services</p>
        <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp; Search for
          profiles in full according to community, age, religion, location, and a host of other factors. </p>
        <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp; extensive
          administrative panel for controlling every aspect of the website </p>
        <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp; Outstanding
          returns on investment, as demonstrated by our current clientele</p> <br />
        <h3 style={{color: '#686D76'}}>Matrimony websites are accessible to who?</h3>
        <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp; Matrimony
          consultants operating independently can elevate their business with our feature-rich solutions designed to
          efficiently
          manage large member bases.</p>
        <p style={{color: '#686D76',textAlign:'justify'}}><i className="fa fa-circle-o" style={{fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp; Prospective
          investors looking to launch a matrimony business can kickstart their venture with our comprehensive solutions,
          equipped with everything necessary to initiate and &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; successfully operate a matrimony business.</p>
        <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp; &nbsp;Individuals who
          currently operate a matrimony website with a substantial profile base and aim to expand their
          business to the next level. </p>
      </div>
      <div className="container mobile-only" style={{textAlign:'justify'}}>
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

export default MatrimonyWebSolutions;

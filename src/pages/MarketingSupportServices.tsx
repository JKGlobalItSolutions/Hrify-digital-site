import React, { useEffect } from 'react';
const MarketImage1 = '/assets/images/market-image-1.webp';
const MarketImage2 = '/assets/images/market-image-2.webp';
const MarketImage3 = '/assets/images/market-image-3.webp';

const MarketingSupportServices = () => {
  useEffect(() => {
    // Enquiry Form Popup Logic
    const enquiryLink = document.getElementById('enquiry-link');
    const popupForm = document.getElementById('popup-form');
    const closeBtn = document.getElementById('close-btn');

    if (enquiryLink && popupForm && closeBtn) {
      const showPopup = () => {
        popupForm.style.display = 'flex';
      };
      const hidePopup = () => {
        popupForm.style.display = 'none';
      };

      enquiryLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPopup();
      });
      closeBtn.addEventListener('click', hidePopup);
      window.addEventListener('click', (event) => {
        if (event.target === popupForm) hidePopup();
      });

      const form = document.getElementById('enquiry-form');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted!');
        hidePopup();
      });
    }

    // Download Brochure Popup Logic
    const downloadBtn = document.getElementById('downloadBtn');
    const brochurePopup = document.getElementById('popup');

    if (downloadBtn && brochurePopup) {
      downloadBtn.onclick = function (e) {
        e.preventDefault();
        brochurePopup.style.display = 'block';
      };

      brochurePopup.onclick = function (e) {
        if (e.target === brochurePopup) {
          brochurePopup.style.display = 'none';
        }
      };
    }
  }, []);

  return (
    <div>
      {/* Hero Banner Section - Matching Referral Program style */}
      <div className="banner container-fluid d-flex align-items-center justify-content-center" style={{ backgroundColor: '#e6f7ff' }}>
        <div className="row w-100 h-100 gx-0">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center text-center px-4 py-5">
            <h1 className="fw-bolder mb-0" style={{ fontSize: '4rem', color: '#000', lineHeight: '1.2' }}>
              Marketing<br />Support Services
            </h1>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center p-4">
            <img
              className="img-fluid"
              src={MarketImage1}
              alt="Marketing Support Services"
              style={{ maxHeight: '520px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      {/* Banner Responsive Styles - Matching Referral Program */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .banner {
            min-height: 600px;
            background-color: #e6f7ff;
          }

          @media (max-width: 992px) {
            .banner h1 {
              font-size: 3.2rem !important;
            }
          }

          @media (max-width: 768px) {
            .banner {
              min-height: 500px;
            }
            .banner h1 {
              font-size: 2.8rem !important;
            }
          }

          @media (max-width: 576px) {
            .banner {
              min-height: 450px;
            }
            .banner h1 {
              font-size: 2.3rem !important;
            }
            .banner img {
              max-height: 300px !important;
            }
          }
        `
      }} />

      {/* Content Section */}
      <div className="content container-fluid">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col d-flex flex-column justify-content-center m-4">
            <p style={{ color: '#686D76' }}>
              In order to connect with new customers and prospects who are interested in their goods and services, a firm must first engage in the lead generation process, which is known as marketing support services. The sales cycle and sales funnel start with this phase. The deliberate process of generating leads, tracking them, and converting them is known as lead generation. While there are many different lead generation strategies utilized by sales and business professionals worldwide, we provide a tried-and-true approach that can help you grow your company. We produce high-quality leads for your company, which multiplies the likelihood that they will convert.
            </p>
          </div>
          <div className="col d-flex flex-column justify-content-center m-4">
            <img className="img-fluid" src={MarketImage2} alt="Marketing Support Services" />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#F1F1F1' }} className="container p-4">
        <h3 style={{ color: '#686D76' }}>Significance of Marketing Support Services for Businesses:</h3>
        <p style={{ color: '#686D76' }}>
          Any firm must do it, and if you do it well, you can boost revenue for your enterprise. The process of generating leads has been made much simpler by social media and search engines. To convert into sales, a corporation must first create potential customers and pique people's interest in its efforts, operations, goods, and other offerings. Understanding the quality of leads and how to handle them is essential for successful lead creation.
        </p>
        <br />
        <br />
        <h3 style={{ color: '#686D76' }}>For what reason are marketing support services needed?</h3>
        <div className="content container-fluid">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-12 col-lg-3 d-flex flex-column justify-content-center m-4">
              <p style={{ color: '#686D76' }}>
                <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Business uninterruptedness
              </p>
              <p style={{ color: '#686D76' }}>
                <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Knowledge of the market
              </p>
              <p style={{ color: '#686D76' }}>
                <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Increased Revenue and Turnover
              </p>
            </div>
            <div className="col-12 col-lg-3 d-flex flex-column justify-content-center m-4">
              <p style={{ color: '#686D76' }}>
                <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Sales forecasting
              </p>
              <p style={{ color: '#686D76' }}>
                <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; steady pipeline
              </p>
              <p style={{ color: '#686D76' }}>
                <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Cross selling opportunities
              </p>
            </div>
            <div className="col-12 col-lg-3 d-flex flex-column justify-content-center m-4">
              <p style={{ color: '#686D76' }}>
                <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Customer Engagement
              </p>
              <p style={{ color: '#686D76' }}>
                <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Business Growth
              </p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-4">
        <h3 style={{ color: '#686D76' }}>Our Priceless Offering:</h3>
        <p style={{ color: '#686D76' }}>
          In Tiruvanaamalai, JK Global IT Solutions was a pioneer in the internet industry. We have created thousands of portals that are successfully used by several enterprises. We also have experience creating, managing, and advertising public interface sites that have a large audience and generate a lot of traffic.
        </p>
        <p style={{ color: '#686D76' }}>
          We have built tools to monitor and operate the leads in addition to strategizing the right lead production formula thanks to our combined knowledge and exposure. Our firms' experiments have led to this evolving experience. With this knowledge, we can provide businesses with real lead generating services that will spur their expansion. We can provide quality leads that are well-targeted and have a high conversion rate. Our combined experience with our changing tactics gives companies a cutting-edge marketing advantage and a reliable platform for generating leads.
        </p>
      </div>

      <div className="container p-4">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="row">
            <h2 style={{ color: '#686D76', }}>Several strategies used in lead generation include:</h2>
          </div>
          <div className="col-12 col-lg-3 d-flex flex-column justify-content m-4">
            <p style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; campaigns for digital marketing
            </p>
            <p style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; email marketing
            </p>
            <p style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Google ad words
            </p>
          </div>
          <div className="col-12 col-lg-3 d-flex flex-column justify-content-center m-4">
            <p style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Advertisements on Portals
            </p>
            <p style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Website search engine optimization
            </p>
            <div className="d-flex">
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i>
              <p style={{ color: '#686D76' }}> &nbsp; Social media marketing and promotions</p>
            </div>
          </div>
          <div className="col-12 col-lg-3 d-flex flex-column justify-content-center m-4">
            <p style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; SMS marketing
            </p>
          </div>
        </div>
      </div>

      <div className="container p-4">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h3 className="text-muted">Our System of Values:</h3>
            <p style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; We don't sell leads to other people twice.
            </p>
            <p style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Our sole method of generating leads is pull marketing.
            </p>
            <p style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; We only use safe techniques to provide high-quality leads.
            </p>
            <p style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; We abide by all GDPR regulations.
            </p>
            <br />
            <h3 className="text-muted">Benefits of Services:</h3>
            <p style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Authentic outcomes in full.
            </p>
            <p style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Delivery depending on ROI.
            </p>
            <p style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Thorough reporting and updates.
            </p>
            <p style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Frequent advice for enhancing business operations.
            </p>
            <p style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Technology-driven strategies.
            </p>
            <p style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Additional resources and services.
            </p>
            <p style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Advantage of network.
            </p>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img className="img-fluid" src={MarketImage3} alt="Marketing Support Services" />
          </div>
        </div>
      </div>

      <br />
      <br />

      {/* Enquiry Popup Form */}
      <div id="popup-form" className="popup-form" style={{ display: 'none' }}>
        <div className="form-container">
          <span className="close-btn" id="close-btn">&times;</span>
          <h2>Enquiry Form</h2>
          <form id="enquiry-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="mobile">Mobile:</label>
            <input type="tel" id="mobile" name="mobile" required />

            <label htmlFor="company">Your Company:</label>
            <input type="text" id="company" name="company" required />

            <label htmlFor="description">Describe what you need:</label>
            <textarea id="description" name="description" rows="4" required></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      {/* Enquiry Link Styles */}
      <style>
        {`
          .popup-form {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
          }

          .form-container {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            width: 80%;
            max-width: 500px;
            position: relative;
          }

          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 24px;
            cursor: pointer;
          }

          form {
            display: flex;
            flex-direction: column;
          }

          label {
            margin-top: 10px;
          }

          input, textarea {
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #d21312;
            border-radius: 4px;
          }

          button {
            margin-top: 10px;
            padding: 10px;
            background-color: #d21312;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          button:hover {
            background-color: #a10c0c;
          }
        `}
      </style>
    </div>
  );
};

export default MarketingSupportServices;

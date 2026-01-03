import React, { useEffect } from 'react';

const ResponsiveWebDesign = () => {
  useEffect(() => {
    const enquiryLink = document.getElementById('enquiry-link');
    const popupForm = document.getElementById('popup-form');
    const closeBtn = document.getElementById('close-btn');

    if (enquiryLink && popupForm && closeBtn) {
      enquiryLink.addEventListener('click', () => {
        popupForm.style.display = 'flex';
      });

      closeBtn.addEventListener('click', () => {
        popupForm.style.display = 'none';
      });

      window.addEventListener('click', (event) => {
        if (event.target === popupForm) {
          popupForm.style.display = 'none';
        }
      });

      const form = document.getElementById('enquiry-form');
      if (form) {
        form.addEventListener('submit', (event) => {
          event.preventDefault();
          alert('Form submitted!');
        });
      }
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
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
          p {
            text-align: justify;
            hyphens: auto;
          }
        `
      }} />

      <main>
        {/* Banner section */}
        <div className="banner container-fluid">
          <div className="row h-100">
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center text-light">
              <h2 className="fw-bolder text-center">Responsive Web-Design</h2>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
              <img className="img-fluid" src="/assets/images/res web bannner.webp" alt="" />
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{
          __html: `
            .banner {
              background-image: url(/assets/images/Rectangle\\ 27.webp);
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

        {/* Content Section */}
        <div className="container my-4">
          <div className="row justify-content-center" >
            <div className="col-12 col-lg-8">
              <p style={{ color: '#686D76' }}>At JK Global IT Solutions, we assist companies in creating standards-compliant, mobile-friendly websites. We can help you with responsive design even if your website isn't functional on other internet-connected devices. Google's most recent search algorithm filters out webpages that are mobile-friendly and displays them when users search on a mobile device.</p>
              <p style={{ color: '#686D76' }}>Our professionals are well-aware of this and provide purpose-specific, lightweight, responsive web design solutions. A responsive site design that works on all platforms or a mobile-specific design layout are the two options available.</p>
              <p style={{ color: '#686D76' }}>As responsive web design is widely recognized as a standard in the online world, we ensure that all our new web design solutions include this feature by default. However, if you currently have a website that lacks a responsive layout, we are equipped to assist you in converting it to a responsive design.</p>
              <p style={{ color: '#686D76' }}>As responsive web design is widely recognized as a standard in the online world, we ensure that all our new web design solutions include this feature by default. However, if you currently have a website that lacks a responsive layout, we are equipped to assist you in converting it to a responsive design.</p>
              <p style={{ color: '#686D76' }}>Benefits of having a responsive website</p>
              <p style={{ color: '#686D76' }}><i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Enhanced search engine ranking and a well-established online presence</p>
              <p style={{ color: '#686D76' }}><i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Fixing your domain name will relieve you of the burden of maintaining separate desktop and mobile webpages.</p>
              <p style={{ color: '#686D76' }}><i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Reduced bounces as a result of the website's structured content display</p>
            </div>
            <div className="col-12 col-lg-4">
              <img className="img-fluid" src="/assets/images/res web image 2.webp" alt="" />
            </div>
          </div>
        </div>

        <div className="container mobile-only">
          <h1 style={{ color: '#686D76', textAlign: 'center' }}>Leading Web Design Firms</h1>
          <br /><br /><br />
          <div className="row justify-content-center gx-3">
            <div className="col-12 col-md-4 mb-3">
              <a style={{ textDecoration: 'none' }} href="businessweb.html">
                <span className="box">
                  <img src="/assets/images/trip.webp" alt="" className="me-2" />
                  Business web-design
                </span>
              </a>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <a style={{ textDecoration: 'none' }} href="resweb.html">
                <span className="box">
                  <img src="/assets/images/trip.webp" alt="" className="me-2" />
                  Responsive web-design
                </span>
              </a>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <a style={{ textDecoration: 'none' }} href="cmsweb.html">
                <span className="box">
                  <img src="/assets/images/trip.webp" alt="" className="me-2" />
                  CMS Web-design solution
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Enquiry Form Popup */}
      <div id="popup-form" className="popup-form">
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
    </>
  );
};

export default ResponsiveWebDesign;

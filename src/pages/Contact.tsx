import React, { useEffect } from 'react';
const ContactImage1 = '/assets/images/contact-image-1.webp';
const Frame637 = '/assets/images/contactLogos/Frame 637.png';
const Frame636 = '/assets/images/contactLogos/Frame 636.png';
const Frame638 = '/assets/images/contactLogos/Frame 638.png';
const Frame639 = '/assets/images/contactLogos/Frame 639.png';
const Frame641 = '/assets/images/contactLogos/Frame 641.png';
const Frame640 = '/assets/images/contactLogos/Frame 640.png';
const DownloadIcon = '/assets/images/download-icon.webp';
const Fevicol = '/assets/images/fevicol.webp';


const Contact = () => {
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
                Contact
              </h1>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center p-4">
              <img
                className="img-fluid"
                src={ContactImage1}
                alt="Contact JK Global IT Solutions"
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

        {/* Registered Office */}
        <div className="container my-4 p-4">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="text-primary my-2" style={{ fontWeight: 700 }}>
                Registered Office:
              </h3>
              <p style={{ color: '#686D76' }}>
                <i className="fa fa-map-marker" style={{ fontSize: '30px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} aria-hidden="true"></i>{' '}
                NO.7 4th Street, Shanmuga Nagar-2, Near Collector Office, Vengikkal, Tiruvannamalai 606604
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info - Phone & Email */}
        <div className="container p-4">
          <div className="row align-items-center text-center">
            <div className="col-lg-5 col-12">
              <h3 className="text-primary" style={{ color: '#686D76' }}>
                Phone
              </h3>
              <p style={{ color: '#686D76' }}>8438438413</p>
            </div>
            <div className="col-2 d-none d-lg-block">
              <h1 style={{ color: '#686D76' }}>|</h1>
            </div>
            <div className="col-lg-5 col-12">
              <h3 style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Email</h3>
              <p>jkglobalitsolution@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Quick Links Grid */}
        <div className="container my-4 p-4">
          <div className="row text-center">
            <div className="col-4 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '150px' }}>
              <img src={Frame637} alt="Download Brochure" className="img-fluid mb-2" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              <p style={{ color: '#686D76', margin: 0 }}>Download Brochure</p>
            </div>
            <div className="col-4 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '150px' }}>
              <img src={Frame636} alt="Payment Options" className="img-fluid mb-2" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              <p style={{ color: '#686D76', margin: 0 }}>Payment Options</p>
            </div>
            <div className="col-4 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '150px' }}>
              <a href="careers.html" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={Frame637} alt="Career" className="img-fluid mb-2" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              </a>
              <p style={{ color: '#686D76', margin: 0 }}>Career</p>
            </div>
          </div>
          <div className="row my-4 text-center">
            <div className="col-4 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '150px' }}>
              <img src={Frame639} alt="Feedback" className="img-fluid mb-2" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              <p style={{ color: '#686D76', margin: 0 }}>Feedback</p>
            </div>
            <div className="col-4 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '150px' }}>
              <img src={Frame641} alt="Privacy Policy" className="img-fluid mb-2" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              <p style={{ color: '#686D76', margin: 0 }}>Privacy Policy</p>
            </div>
            <div className="col-4 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '150px' }}>
              <img src={Frame640} alt="FAQ" className="img-fluid mb-2" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              <p style={{ color: '#686D76', margin: 0 }}>FAQ</p>
            </div>
          </div>
        </div>

      {/* Enquiry Popup Form */}
      <div id="popup-form" className="popup-form" style={{ display: 'none' }}>
        <div className="form-container">
          <span className="close-btn" id="close-btn">
            &times;
          </span>
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
            <textarea id="description" name="description" rows={4} required></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      {/* Download Brochure Trigger Button (placed where it was in footer) */}
      <div className="pop" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 999 }}>
        <a
          href="#"
          className="text-light p-3 px-4 rounded shadow"
          style={{ backgroundColor: '#1e3a8a', textDecoration: 'none' }}
          id="downloadBtn"
        >
          Download Brochure
        </a>
      </div>

      {/* Brochure Download Popup */}
      <div id="popup" className="popup" style={{ display: 'none' }}>
        <div className="popup-content">
          <div className="container">
            <img src={Fevicol} alt="JK Global IT Solutions Logo" className="logo img-fluid" />
            <hr style={{ border: '2px solid black' }} />
            <div className="row d-flex align-items-center brochure py-3">
              <div className="col-12 col-lg-9 text-center text-lg-start">
                <h4>Download IT Brochure</h4>
              </div>
              <div className="col-12 col-lg-3 text-center">
                <a href="/assets/images/JK Global IT Solutions Portfolio.pdf" target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid" src={DownloadIcon} alt="Download IT Brochure" />
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <hr style={{ border: '2px solid black' }} />
            <div className="row d-flex align-items-center brochure py-3">
              <div className="col-12 col-lg-9 text-center text-lg-start">
                <h4>Download Networking Solutions Brochure</h4>
              </div>
              <div className="col-12 col-lg-3 text-center">
                <a href="/assets/images/Networking Solutions Brochure.pdf" target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid" src={DownloadIcon} alt="Download Networking Brochure" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Required Inline Styles */}
      <style>{`
        .popup {
          display: none;
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          overflow: auto;
        }

        .popup-content {
          position: relative;
          margin: 10% auto;
          padding: 20px;
          background-color: white;
          width: 90%;
          max-width: 700px;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .brochure {
          margin-bottom: 15px;
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
          z-index: 1001;
        }

        .form-container {
          background: #fff;
          padding: 30px;
          border-radius: 8px;
          width: 90%;
          max-width: 500px;
          position: relative;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
          color: #aaa;
        }

        .close-btn:hover {
          color: #000;
        }

        label {
          margin-top: 15px;
          font-weight: 500;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border: 1px solid #1e3a8a;
          border-radius: 4px;
        }

        button {
          margin-top: 20px;
          padding: 12px;
          background-color: #1e3a8a;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }

        button:hover {
          background-color: #3b82f6;
        }

        @media (max-width: 768px) {
          .popup-content {
            width: 95%;
            margin: 20% auto;
          }
          .brochure {
            flex-direction: column;
          }
          .brochure img {
            margin-top: 15px;
            width: 60%;
          }
        }

        @media (max-width: 480px) {
          .brochure img {
            width: 80%;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;


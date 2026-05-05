import React, { useEffect } from 'react';
import { getAssetPath } from '../utils/assetPath';

const ContactImage1 = getAssetPath('assets/images/Contact.png');
const Frame637 = getAssetPath('assets/images/contactLogos/Frame 637.png');
const Frame636 = getAssetPath('assets/images/contactLogos/Frame 636.png');
const Frame638 = getAssetPath('assets/images/contactLogos/Frame 638.png');
const Frame639 = getAssetPath('assets/images/contactLogos/Frame 639.png');
const Frame641 = getAssetPath('assets/images/contactLogos/Frame 641.png');
const Frame640 = getAssetPath('assets/images/contactLogos/Frame 640.png');


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
  }, []);

  return (
    <div>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={ContactImage1} alt="Contact Banner" className="banner-img" />
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

        {/* Registered Office */}
        <div className="container my-4 p-4">
          <div className="row">
            <div className="col-12 text-center">
              <h3 style={{ color: '#1B8DBB', fontWeight: 700 }} className="my-2">
                Registered Office:
              </h3>
              <h6 style={{ color: '#686D76' }}>
                <i
                  className="fa fa-map-marker"
                  style={{
                    fontSize: '30px',
                    // background: 'linear-gradient(135deg, #1B8DBB 0%, #00C6FF 100%)',
                    WebkitBackgroundClip: 'border-box',
                    WebkitTextFillColor: 'initial',
                    color: '#1B8DBB'
                  }}
                  aria-hidden="true"
                ></i>{' '}
                1794 Annai Parvathi Nagar, Opp. collectorate Office, Vengikkal, Tiruvannamalai - 606 604.
              </h6>

            </div>
          </div>
        </div>

        {/* Contact Info - Phone & Email */}
        <div className="container p-4">
          <div className="row align-items-center text-center">
            <div className="col-lg-5 col-12">
              <h3 style={{ color: '#1B8DBB' }}>
                Phone
              </h3>
              <h6 style={{ color: '#686D76' }}>8438438413</h6>
            </div>
            <div className="col-2 d-none d-lg-block">
              <h1 style={{ color: '#686D76' }}>|</h1>
            </div>
            <div className="col-lg-5 col-12">
              <h3 style={{ background: 'linear-gradient(135deg, #1B8DBB 0%, #1B8DBB 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Email</h3>
              <h6>hrifydigital@gmail.com</h6>
              <h6>support@hrifydigital.com</h6>
            </div>
          </div>
        </div>

        {/* Quick Links Grid */}
        <div className="container my-4 p-4">
          <div className="row text-center">
            <div className="col-6 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '150px' }}>
              <img src={Frame636} alt="Payment Options" className="img-fluid mb-2" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              <p style={{ color: '#686D76', margin: 0 }}>Payment Options</p>
            </div>
            <div className="col-6 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '150px' }}>
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
          border: 1px solid #1B8DBB;
          border-radius: 4px;
        }

        button {
          margin-top: 20px;
          padding: 12px;
          background-color: #1B8DBB;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }

        button:hover {
          background-color: #15749A;
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

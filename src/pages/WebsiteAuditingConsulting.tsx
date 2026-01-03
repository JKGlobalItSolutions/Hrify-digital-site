import React, { useEffect } from 'react';
const WebAudiitImage1 = '/assets/images/WebsiteAuditing&ConsultingService.png';
const WebAuditImage2 = '/assets/images/web-audit-image-2.webp';

const WebsiteAuditingConsulting = () => {
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

      brochurePopup.onclick = function (event) {
        if (event.target === brochurePopup) {
          brochurePopup.style.display = 'none';
        }
      };
    }
  }, []);

  return (
    <div>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={WebAudiitImage1} alt="Website Auditing & Consulting Service Banner" className="banner-img" />
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
      <div className="content container-fluid">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col d-flex flex-column justify-content-center m-4">
            <h3 style={{ color: '#686D76' }}>Welcome to our Website Auditing & Consulting Service.</h3>
            <p style={{ color: '#686D76' }}>
              Does your website's performance fall short of your expectations? Are you having trouble bringing in leads, converting visitors into customers, or drawing in visitors? Our website audits and consulting service can assist you in determining the problems with your website and offer practical suggestions for enhancing its functionality.
            </p>
            <p style={{ color: '#686D76' }}>
              Your website will get a thorough audit by our team of knowledgeable website auditors and consultants, who will examine several aspects including user experience, design, functionality, and content. We'll point out any technical problems or potential areas for development and give you a thorough report with our conclusions and suggestions.
            </p>
            <p style={{ color: '#686D76' }}>
              We offer more than simply problem identification with our website consulting service. We'll collaborate closely with you to put the suggested adjustments and website optimizations into action. Since every website is different, we'll work with you to create a personalized plan that complements your company's aims and ambitions.
            </p>
          </div>
          <div className="col d-flex flex-column justify-content-center m-4">
            <img className="img-fluid" src={WebAuditImage2} alt="Website Auditing Service" />
          </div>
        </div>
      </div>

      <div className="p-4" style={{ backgroundColor: '#F1F1F1' }}>
        <h3 className="text-muted">For what reason are marketing support services needed?</h3>
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <p style={{ color: '#686D76' }}>
            <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Make the user experience on your website better
          </p>
          <p style={{ color: '#686D76' }}>
            <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Increase the number of leads and sales.
          </p>
          <p style={{ color: '#686D76' }}>
            <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Boost traffic to websites
          </p>
          <p style={{ color: '#686D76' }}>
            <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Make your website conversion-friendly.
          </p>
          <p style={{ color: '#686D76' }}>
            <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Boost the visibility of your website in search engines
          </p>
          <br />
        </div>
      </div>

      <div className="container p-5">
        <p style={{ color: '#686D76' }}>
          We take great satisfaction in our ability to offer companies of all sizes and sectors top-notch website audits and consulting services.
          We are dedicated to exceeding your expectations with our exceptional results, and we have years of expertise working with clients in
          a variety of industries.
        </p>
        <p style={{ color: '#686D76' }}>
          Reach out to us to discover more about our website audits and consulting services if you're prepared to elevate your website to new
          heights. Our goal is to support your success!
        </p>
      </div>

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
            <textarea id="description" name="description" rows={4} required></textarea>

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
            border: 1px solid #1B8DBB;
            border-radius: 4px;
          }

          button {
            margin-top: 10px;
            padding: 10px;
            background-color: #1B8DBB;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          button:hover {
            background-color: #15749A;
          }
        `}
      </style>
    </div>
  );
};

export default WebsiteAuditingConsulting;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/assetPath';

const HrifyLogo = getAssetPath('assets/images/Hrify-white-bg.webp');
const Fb = getAssetPath('assets/images/footer-icon/fb.webp');
const YoutubeIcon = getAssetPath('assets/images/youtube-icon.webp');
const X = getAssetPath('assets/images/footer-icon/x.webp');
const Linkdin = getAssetPath('assets/images/footer-icon/linkdin.webp');
const Insta = getAssetPath('assets/images/footer-icon/insta.webp');
const WhatsappSymbolSvg = getAssetPath('assets/images/whatsapp_symbol.svg.webp');
const DownloadIcon = getAssetPath('assets/images/download-icon.webp');
const Brochure = getAssetPath('assets/images/JK Global IT Solutions Portfolio.pdf');
const NetworkingBrochure = getAssetPath('assets/images/Networking Solutions Brochure.pdf');

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDownloadClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <footer style={{ backgroundColor: 'black' }} className="container-fluid p-5 fw-normal">
        <div className="row">
          <div className="col-12 col-lg-8 col-md-8">
            <div className="row">
              <div className="col-12 col-md-4 mb-4" style={{ textAlign: 'left' }}>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Home</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>About</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Contact</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Careers</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Clients</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Responsive Web Design</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Web Design</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Web Maintenance</h6>
              </div>
              <div className="col-12 col-md-4 mb-4" style={{ textAlign: 'left' }}>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Custom Web Applications</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>E Commerce Web Solutions</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Business Web Design</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>CMS Web Design</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Web Application</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Matrimony Web Solutions</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Business Solutions</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Talent Management</h6>
              </div>
              <div className="col-12 col-md-4 mb-4" style={{ textAlign: 'left' }}>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Domains, Hosting and Cloud</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Google Work Partner</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>AWS Services Implementations</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Digital Marketing and Social Media</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Mobile Applications</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Marketing Support Services</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Personal and Enterprise Email</h6>
                <h6 style={{ fontWeight: '400', color: '#686D76' }}>Email Campaign Management</h6>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4 col-md-4 d-flex flex-column justify-content-center align-items-center">
            <div className="py-2 mb-3 d-flex justify-content-center align-items-center">
              <img src={HrifyLogo} style={{ width: 'auto', height: '70px', display: 'block' }} alt="HRify Logo" />
            </div>
            <div className="pop mb-3">
              <button
                className="text-white p-3 px-4"
                style={{ background: '#1B8DBB', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: '600', boxShadow: '0 4px 15px rgba(27, 141, 187, 0.3)', transition: 'all 0.3s ease', borderRadius:'50px' }}
                onClick={handleDownloadClick}
                onMouseOver={(e) => (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => (e.target as HTMLButtonElement).style.transform = 'translateY(0)'}
              >
                Download Brochure
              </button>
            </div>
            <p style={{ fontSize: '15px', color: '#686D76', textAlign: 'center' }} className="mb-4">
              <a href="mailto:hrifydigital@gmail.com">hrifydigital@gmail.com</a>
            </p>
            <p style={{ fontSize: '15px', color: '#686D76', textAlign: 'center' }} className="mb-2">
              <a href="tel:+918438438413">+91 8438438413</a>
            </p>
            <div className="d-flex justify-content-center align-items-center mt-3">
              <a href="https://www.facebook.com/profile.php?id=61559888076422" style={{ color: '#686D76', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>f</a>
              <a href="http://www.youtube.com/@Jkglobalitsolutions_official" style={{ color: '#686D76', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>▶</a>
              <a href="https://x.com/Jkglobalitsol" style={{ color: '#686D76', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>𝕏</a>
              <a href="https://www.linkedin.com/company/jk-global-it-solutions/" style={{ color: '#686D76', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>in</a>
              <a href="https://www.instagram.com/jkglobalitsolutions_officials/" style={{ color: '#686D76', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>📷</a>
              <a href={`https://api.whatsapp.com/send?phone=${encodeURIComponent('+91 8438438413')}`} style={{ color: '#686D76', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>💬</a>
            </div>
          </div>
        </div>
      </footer>

      {showPopup && (
        <div className="popup" onClick={handlePopupClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="container">
              <img src={HrifyLogo} style={{ width: 'auto', height: '70px', display: 'block', margin: '0 auto' }} alt="HRify Logo" className="logo" />
              <hr style={{ color: 'black', fontWeight: '900' }} />
              <div className="row d-flex align-items-center brochure">
                <div className="col-12 col-lg-9 text-center text-lg-start">
                  <h4>Download IT Brochure</h4>
                </div>
                <div className="col-3">
                  <a href={Brochure} download>
                    <img className="img-fluid" src={DownloadIcon} alt="Download" />
                  </a>
                </div>
              </div>
            </div>
            <div className="container">
              <hr style={{ color: 'black', fontWeight: '900' }} />
              <div className="row d-flex align-items-center brochure">
                <div className="col-12 col-lg-9 text-center text-lg-start">
                  <h4 className="text-center text-lg-start">Download Networking Solutions Brochure</h4>
                </div>
                <div className="col-3">
                  <a href={NetworkingBrochure} download>
                    <img className="img-fluid" src={DownloadIcon} alt="Download" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          .popup {
            display: block;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
          }

          .popup-content {
            position: relative;
            margin: auto;
            padding: 20px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border-radius: 10px;
            background-color: white;
            width: 700px;
            top: 50%;
            transform: translateY(-50%);
          }

          /* Responsive styles */
          @media (max-width: 768px) {
            .popup-content {
              width: 90%;
              padding: 15px;
            }

            .brochure {
              flex-direction: column;
              align-items: flex-start;
              margin-bottom: 15px;
            }

            .brochure img {
              margin-top: 10px;
              width: 50%;
            }
          }

          @media (max-width: 480px) {
            .popup-content {
              width: 95%;
              padding: 10px;
            }

            .brochure {
              align-items: center;
            }

            .brochure img {
              width: 70%;
            }
          }
        `}
      </style>
    </>
  );
};

export default Footer;

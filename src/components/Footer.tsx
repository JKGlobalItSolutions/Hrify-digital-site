import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/assetPath';

const HrifyLogo = getAssetPath('assets/images/Hrify-white-bg.webp');
const Fb = getAssetPath('assets/images/footer-icon/fb.webp');
const YoutubeIcon = getAssetPath('assets/images/youtube-icon.webp');
const X = getAssetPath('assets/images/footer-icon/x.webp');
const Linkdin = getAssetPath('assets/images/footer-icon/linkdin.webp');
const Insta = getAssetPath('assets/images/footer-icon/insta.webp');
const WhatsappSymbolSvg = getAssetPath('assets/images/whatsapp_symbol.svg.webp');

const Footer = () => {

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


    </>
  );
};

export default Footer;

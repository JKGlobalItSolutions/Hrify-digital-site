// import React from 'react';
// import { Link } from 'react-router-dom';
// import { getAssetPath } from '../utils/assetPath';

// const HrifyLogo = getAssetPath('assets/images/Hrify-white-bg.webp');
// const Fb = getAssetPath('assets/images/footer-icon/fb.webp');
// const YoutubeIcon = getAssetPath('assets/images/youtube-icon.webp');
// const X = getAssetPath('assets/images/footer-icon/x.webp');
// const Linkdin = getAssetPath('assets/images/footer-icon/linkdin.webp');
// const Insta = getAssetPath('assets/images/footer-icon/insta.webp');
// const WhatsappSymbolSvg = getAssetPath('assets/images/whatsapp_symbol.svg.webp');

// const Footer = () => {

//   return (
//     <>
//       <footer style={{ backgroundColor: 'black' }} className="container-fluid p-5 fw-normal">
//         <div className="row">
//           <div className="col-12 col-lg-8 col-md-8">
//             <div className="row">
//               <div className="col-12 col-md-4 mb-4" style={{ textAlign: 'left' }}>
//                 <h6 style={{ fontWeight: '400', color: '#686D76' }}>Home</h6>
//                 <h6 style={{ fontWeight: '400', color: '#686D76' }}>About</h6>
//                 <h6 style={{ fontWeight: '400', color: '#686D76' }}>Contact</h6>
//                 <h6 style={{ fontWeight: '400', color: '#686D76' }}>Careers</h6>
//                 <h6 style={{ fontWeight: '400', color: '#686D76' }}>Clients</h6>
//                 <h6 style={{ fontWeight: '400', color: '#686D76' }}>Responsive Web Design</h6>
//                 <h6 style={{ fontWeight: '400', color: '#686D76' }}>Web Design</h6>
//                 <h6 style={{ fontWeight: '400', color: '#686D76' }}>Web Maintenance</h6>
//               </div>
             
//             </div>
//           </div>

//           <div className="col-12 col-lg-4 col-md-4 d-flex flex-column justify-content-center align-items-center">
//             <div className="py-2 mb-3 d-flex justify-content-center align-items-center">
//               <img src={HrifyLogo} style={{ width: 'auto', height: '70px', display: 'block' }} alt="HRify Logo" />
//             </div>

//             <p style={{ fontSize: '15px', color: '#686D76', textAlign: 'center' }} className="mb-4">
//               <a href="mailto:hrifydigital@gmail.com">hrifydigital@gmail.com</a>
//             </p>
//             <p style={{ fontSize: '15px', color: '#686D76', textAlign: 'center' }} className="mb-2">
//               <a href="tel:+918438438413">+91 8438438413</a>
//             </p>
//             <div className="d-flex justify-content-center align-items-center mt-3">
//               <a href="https://www.facebook.com/profile.php?id=61559888076422" style={{ color: '#686D76', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>f</a>
//               <a href="http://www.youtube.com/@Jkglobalitsolutions_official" style={{ color: '#686D76', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>▶</a>
//               <a href="https://x.com/Jkglobalitsol" style={{ color: '#686D76', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>𝕏</a>
//               <a href="https://www.linkedin.com/company/jk-global-it-solutions/" style={{ color: '#686D76', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>in</a>
//               <a href="https://www.instagram.com/jkglobalitsolutions_officials/" style={{ color: '#686D76', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>📷</a>
//               <a href={`https://api.whatsapp.com/send?phone=${encodeURIComponent('+91 8438438413')}`} style={{ color: '#686D76', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>💬</a>
//             </div>
//           </div>
//         </div>
//       </footer>


//     </>
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import { getAssetPath } from "../utils/assetPath";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const HrifyLogo = getAssetPath("assets/images/Hrify-white-bg.webp");

const Footer = () => {
  const linkStyle = {
    color: "#aaa",
    textDecoration: "none",
    display: "inline-block",
    width: "100%",
    transition: "0.3s",
  };

  const hoverStyle = (e, enter) => {
    e.target.style.color = enter ? "#fff" : "#aaa";
    e.target.style.transform = enter ? "translateX(5px)" : "translateX(0px)";
  };

  const iconHover = (e, enter) => {
    e.target.style.color = enter ? "#fff" : "#aaa";
    e.target.style.transform = enter ? "translateY(-4px)" : "translateY(0)";
  };

  return (
    <footer
      style={{
        background: "#000",
        color: "#aaa",
        padding: "60px 0 20px",
      }}
    >
      <div className="container">
        <div className="row">

          {/* LEFT */}
          <div className="col-12 col-md-4 mb-4">
            <h5 style={{ color: "#fff", marginBottom: "20px" }}>
              Quick Links
            </h5>

            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link
                  to="/"
                  style={linkStyle}
                  onMouseEnter={(e) => hoverStyle(e, true)}
                  onMouseLeave={(e) => hoverStyle(e, false)}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  style={linkStyle}
                  onMouseEnter={(e) => hoverStyle(e, true)}
                  onMouseLeave={(e) => hoverStyle(e, false)}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  style={linkStyle}
                  onMouseEnter={(e) => hoverStyle(e, true)}
                  onMouseLeave={(e) => hoverStyle(e, false)}
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/careers"
                  style={linkStyle}
                  onMouseEnter={(e) => hoverStyle(e, true)}
                  onMouseLeave={(e) => hoverStyle(e, false)}
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  to="/clients"
                  style={linkStyle}
                  onMouseEnter={(e) => hoverStyle(e, true)}
                  onMouseLeave={(e) => hoverStyle(e, false)}
                >
                  Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* CENTER */}
          <div className="col-12 col-md-4 mb-4 text-md-center">
            <h5 style={{ color: "#fff", marginBottom: "20px" }}>
              Services
            </h5>

            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link
                  to="/resweb"
                  style={linkStyle}
                  onMouseEnter={(e) => hoverStyle(e, true)}
                  onMouseLeave={(e) => hoverStyle(e, false)}
                >
                  Responsive Web Design
                </Link>
              </li>

              <li>
                <Link
                  to="/businessweb"
                  style={linkStyle}
                  onMouseEnter={(e) => hoverStyle(e, true)}
                  onMouseLeave={(e) => hoverStyle(e, false)}
                >
                  Web Design
                </Link>
              </li>

              <li>
                <Link
                  to="/webmaintenance"
                  style={linkStyle}
                  onMouseEnter={(e) => hoverStyle(e, true)}
                  onMouseLeave={(e) => hoverStyle(e, false)}
                >
                  Web Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div
            className="col-12 col-md-4 mb-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <img
              src={HrifyLogo}
              alt="HRify Logo"
              style={{ height: "65px", marginBottom: "15px" }}
            />

            {/* EMAIL */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <FaEnvelope style={{ fontSize: "14px" }} />
              <a
                href="mailto:hrifydigital@gmail.com"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                hrifydigital@gmail.com
              </a>
            </div>

            {/* PHONE */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <FaPhoneAlt style={{ fontSize: "14px" }} />
              <a
                href="tel:+918438438413"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                +91 8438438413
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div
              style={{
                display: "flex",
                gap: "15px",
                fontSize: "18px",
              }}
            >
              {[FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{ color: "#aaa" }}
                    onMouseEnter={(e) => iconHover(e, true)}
                    onMouseLeave={(e) => iconHover(e, false)}
                  >
                    <Icon />
                  </a>
                )
              )}

              <a
                href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
                  "+918438438413"
                )}&text=${encodeURIComponent("Hello, I need your services")}`}
                style={{ color: "#aaa" }}
                onMouseEnter={(e) => iconHover(e, true)}
                onMouseLeave={(e) => iconHover(e, false)}
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            fontSize: "14px",
            color: "#666",
          }}
        >
          © 2026 HRify Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
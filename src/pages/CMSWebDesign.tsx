import React from 'react';
import { getAssetPath } from '../utils/assetPath';

const Rectangle27 = getAssetPath('assets/images/Rectangle-27.webp');
const CmsWebBanner = getAssetPath('assets/images/CMS-Web-Design.png');
const CmsImage2 = getAssetPath('assets/images/cms-image-2.webp');
const Trip = getAssetPath('assets/images/trip.webp');






const CMSWebDesign = () => {
  return (
    <main>
        {/* Full-width Banner Image */}
        <div className="banner-full-image">
          <img src={CmsWebBanner} alt="CMS Web Design Banner" className="banner-img" />
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
        {/* Banner section */}
        {/* Content  Section*/}

        <br/><br/>
        
        <div className="container my- p-3">
            <div className="row justify-content-center" style={{textAlign: 'justify'}}>
                <div className="col-12 col-lg-8">
                    <p style={{color: '#686D76'}}>Websites have been the most successful marketing tool since the beginning of the internet, and
                        the one thing on these websites that guarantees your target traffic is brought towards you and
                        allows you to conduct business is the content. The king is the content.</p>
                    <p style={{color: '#686D76'}}>A content management system is essential if you want your website's material to be current,
                        relevant, and green at all times. JK Global IT Solutions offers CMS websites on WordPress with
                        the newest trends in technology and security by utilizing the characteristics of the WordPress
                        backend system.</p>
                    <p style={{color: '#686D76'}}>Our CMS solutions are easy to use and quick to pick up, giving business owners the advantage of
                        being able to update their websites constantly. With our extensive blogging features, they can
                        even publish regular content that benefits their target audience and brings in more revenue.</p>
                </div>
                <div className="col-12 col-lg-4">
                    <img className="img-fluid" src={CmsImage2} alt="" />
                </div>
            </div>
        </div>
        <div className="container">
          <div className="row">
            <div  className="p-4  col-12" style={{textAlign:'justify'}}> <br/>
                <h3 style={{color: '#686D76'}}>Benefits of Content Management System</h3> <br/>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize:'20px',background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp; we provide effortless website maintenance and seamless platform updates for smooth operation.</p>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize:'20px',background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp; Small adjustments can be performed quickly.</p>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize:'20px',background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp; Infinite production of pages</p>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize:'20px',background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp; Editing with CMS is feasible anywhere and on any device.</p>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize:'20px',background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp; We specialize in seamless plugin integration for optimizing websites effortlessly.</p>

            </div>
        </div>
        </div>




        {/*  */}

        {/*  */}



        <div className="container mobile-only">
          <h1 style={{color: '#686D76', textAlign: 'center'}}>Leading Web Design Firms</h1>
          <br /><br /><br />
          <div className="row justify-content-center gx-3">
            <div className="col-12 col-md-4 mb-3">
              <a style={{textDecoration: 'none'}} href="businessweb.html">
                <span className="box">
                  <img className="img-fluid" src={Trip} alt="" />
                  Business web-design
                </span>
              </a>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <a style={{textDecoration: 'none'}} href="resweb.html">
                <span className="box">
                  <img className="img-fluid me-2" src={Trip} alt="" />
                  Responsive web-design
                </span>
              </a>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <a style={{textDecoration: 'none'}} href="cmsweb.html">
                <span className="box">
                  <img className="img-fluid me-2" src={Trip} alt="" />
                  CMS Web-design solution
                </span>
              </a>
            </div>
          </div>
        </div>

        <style>
          {`
            /* Hide the container by default */
            .container.mobile-only {
              display: none;
            }

            /* Display the container only on mobile devices */
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

export default CMSWebDesign;

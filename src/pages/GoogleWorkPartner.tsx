import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/assetPath';

const GoogleImage1 = getAssetPath('assets/images/Google-Work-Partner.png');
const GoogleImage2 = getAssetPath('assets/images/google-image-2.webp');
const GIm1 = getAssetPath('assets/images/g-im-1.webp');
const GIm2 = getAssetPath('assets/images/g-im-2.webp');
const GIm3 = getAssetPath('assets/images/g-im-3.webp');
const GIm4 = getAssetPath('assets/images/g-im-4.webp');
const GIm5 = getAssetPath('assets/images/g-im-5.webp');
const GIm6 = getAssetPath('assets/images/g-im-6.webp');
const GIm7 = getAssetPath('assets/images/g-im-7.webp');
const GIm8 = getAssetPath('assets/images/g-im-8.webp');
const GIm9 = getAssetPath('assets/images/g-im-9.webp');
const Rectangle27 = getAssetPath('assets/images/Rectangle-27.webp');
const Trip = getAssetPath('assets/images/trip.webp');


const GoogleWorkPartner = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={GoogleImage1} alt="Google Work Partner Banner" className="banner-img" />
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
      <div className="container my-3" style={{textAlign:'justify'}}>
        <div className="row p-lg-1 align-items-center justify-content-center">
          <div className="col-12 col-lg-8">
            <p style={{color: '#686D76'}}> We provide G Suite implementations that are customized for companies of all sizes and give the highest caliber of expert support for any required number of user accounts. G Suite, originally Google Apps for Work, is a collection of Google Cloud's intelligent business apps. As a licensed reseller, we help you with implementation, support, and administration to guarantee a smooth integration and operation.</p>
          </div> <br /> <br />
          <div className="col-12 col-lg-4 my-5 my-lg-0">
            <img className="img-fluid" src={GoogleImage2} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-lg-4 justify-content-center align-items-center text-center p-5">
            <img className="img-fluid mx-auto d-block" src={GIm1} alt="" />
            <br/><br/>
            <h3 style={{ color: '#686D76'}}>Drive</h3>
            <br/>
            <p style={{color: '#686D76', textAlign: 'center'}}>Organize all of your files in one location so you can always have the most recent version with you. Sync files automatically from your desktop.</p>
          </div>
          <div className="col-12 col-lg-4 justify-content-center align-items-center text-center p-5">
            <img className="img-fluid mx-auto d-block" src={GIm2} alt="" />
            <br/><br/>
            <h3 style={{ color: '#686D76'}}>Gmail</h3>
            <br/>
            <p style={{color: '#686D76', textAlign: 'center'}}>Expert, ad-free email with 40GB of mailbox space and round-the-clock help. Compatible with different email clients as well as Microsoft Outlook.</p>
          </div>
          <div className="col-12 col-lg-4 justify-content-center align-items-center text-center p-5">
            <img className="img-fluid mx-auto d-block" src={GIm3} alt="" />
            <br/><br/>
            <h3 style={{ color: '#686D76'}}>Slides</h3>
            <br/>
            <p style={{color: '#686D76', textAlign: 'center'}}>You can create, edit, and deliver polished presentations from any smart device. Multiple collaborators can simultaneously work on the presentation.</p>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-lg-4 justify-content-center align-items-center text-center p-5">
            <img className="img-fluid mx-auto d-block" src={GIm4} alt="" />
            <br/><br/>
            <h3 style={{ color: '#686D76'}}>DOCS</h3>
            <br/>
            <br/>
            <p style={{color: '#686D76', textAlign: 'center'}}>You can create and modify text documents using any smart device. Multiple users can collaborate on the same document simultaneously, with changes being automatically saved.</p>
          </div>
          <div className="col-12 col-lg-4 justify-content-center align-items-center text-center p-5">
            <img className="img-fluid mx-auto d-block" src={GIm5} alt="" />
            <br/><br/>
            <h3 style={{ color: '#686D76'}}>Meet</h3>
            <br/>
            <p style={{color: '#686D76', textAlign: 'center'}}>Easily communicate through text chats, voice calls, or high-definition video calls with integrated screen sharing. Save both time and costs on travel while enjoying the advantages of face-to-face interactions.</p>
          </div>
          <div className="col-12 col-lg-4 justify-content-center align-items-center text-center p-5">
            <img className="img-fluid mx-auto d-block" src={GIm6} alt="" />
            <br/><br/>
            <h3 style={{ color: '#686D76'}}>Sites</h3>
            <br/>
            <p style={{color: '#686D76', textAlign: 'center'}}>Create a mobile-friendly website for your team or project, or a customer portal effortlessly using intuitive drag-and-drop tools.</p>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-lg-4 justify-content-center align-items-center text-center p-5">
            <img className="img-fluid mx-auto d-block" src={GIm7} alt="" />
            <br/><br/>
            <h3 style={{ color: '#686D76'}}>Sheets</h3>
            <br/>
            <p style={{color: '#686D76', textAlign: 'center'}}>You can create and modify spreadsheets on any smart device. Manage everything from basic task lists to advanced data analysis, including charts, filters, and pivot tables.</p>
          </div>
          <div className="col-12 col-lg-4 justify-content-center align-items-center text-center p-5">
            <img className="img-fluid mx-auto d-block" src={GIm8} alt="" />
            <br/><br/>
            <h3 style={{ color: '#686D76'}}>Calendar</h3>
            <br/>
            <p style={{color: '#686D76', textAlign: 'center'}}>Save time organizing your schedule and focus more on productivity with shareable calendars that seamlessly integrate with Gmail, Drive, and Hangouts, keeping you informed about upcoming events and tasks.</p>
          </div>
          <div className="col-12 col-lg-4 justify-content-center align-items-center text-center p-5">
            <img className="img-fluid mx-auto d-block" src={GIm9} alt="" />
            <br/><br/>
            <h3 style={{ color: '#686D76'}}>Admin</h3>
            <br/>
            <p style={{color: '#686D76', textAlign: 'center'}}>Managing your system shouldn't be complicated. Effortlessly add users, oversee devices, and adjust security and settings to ensure your data remains secure without the need for extensive manuals or guides.</p>
          </div>
        </div>
      </div>
      <div className="container mobile-only">
        <h1 style={{color: '#686D76', textAlign: 'center'}}>Prime Commercial Services</h1>
        <br /><br /><br />
        <div className="row justify-content-center gx-3">
          <div className="col-12 col-md-4 mb-3">
            <Link style={{textDecoration: 'none'}} to="/domains">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Dominas, HGosting and Cloud
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{textDecoration: 'none'}} to="/personalemail">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Personal and Enterprise Email
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{textDecoration: 'none'}} to="/googlework">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Google Apps and Services
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{textDecoration: 'none'}} to="/emailcampaign">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Email Campaign Management
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{textDecoration: 'none'}} to="/awsimpl">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                AWS Servcies Implementations
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{textDecoration: 'none'}} to="/designbranding">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Design and Branding
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{textDecoration: 'none'}} to="/digitalmarketing">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Digital Marketing and Social Media
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

export default GoogleWorkPartner;

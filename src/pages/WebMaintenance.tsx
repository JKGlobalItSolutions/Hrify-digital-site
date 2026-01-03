import React from 'react';
const Rectangle27 = '/assets/images/Rectangle-27.webp';
const WebMainBanner = '/assets/images/web-main-banner.webp';
const WebMainImage2 = '/assets/images/web-main-image-2.webp';




const WebMaintenance = () => {
  return (
    <main>
        {/* Banner section */}
        <div className="banner container-fluid" style={{backgroundColor: '#e38b8bff'}}>
          <div className="row h-100">
              <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center text-light">
                  <h2 className="fw-bolder">Web Maintenance</h2>
              </div>
              <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                  <img className="img-fluid" src={WebMainBanner} alt="Web Maintenance" />
              </div>
          </div>
      </div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap');

          /* Internal CSS for the banner and heading */
          .banner {
              background-image: url(${Rectangle27});
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
        `}
      </style>
        {/* Banner section */}
         {/* Content  Section*/}
        

        <div className="content container p-3">
            <div className="row h-100 justify-content-center align-items-center mt-4">
              <div className="col-12 col-lg-8 d-flex flex-column justify-content-center ">
              
            
               <p style={{color: '#686D76'}}>Launching a website or web application online marks the initial phase in achieving business results on the web, but the journey doesn't conclude there; it's where the real process and responsibility begin. The ultimate success hinges on the meticulous maintenance and upkeep of your website or web application online.
                <br /><br />Web maintenance is a core service that JK Global IT Solutions offers. We take on the duty of keeping your website updated and up to date, meeting all necessary standards and requirements. Web maintenance is a core service that JK Global IT Solutions offers. We take on the duty of keeping your website updated and up to date, meeting all necessary standards and requirements.
                <br /> <br />We offer ongoing support to ensure your website receives timely updates, fixes, redesigns, and more. Our priority is to provide dedicated support, addressing your queries promptly to enhance your online performance effectively.
               </p>
              </div>
              <div className="col-12 col-lg-4 d-flex flex-column justify-content-center ">
              <img className="" src={WebMainImage2} alt="" />
           
              </div>
              
            </div>
           
          </div>

          <div className="container p-3" style={{textAlign:'justify'}}>
            <br></br>
            <h1 style={{color: '#594bd2ff',fontSize:'30px', fontFamily: '"Google Sans", sans-serif'}}>WE ENSURE THE AFTERGOING</h1><br></br>
            <ul>
              <li type="square" style={{color: '#2110bdff', fontSize:'20px'}}>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize:'20px',background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp;   Maintaining the uniqueness of your website.</p>
              </li>

              <li type="square" style={{color: '#2110bdff', fontSize:'20px'}}>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize:'20px',background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp;  Ensures seamless navigation and readability across devices, enhancing 
                user satisfaction.</p>
              </li>

              <li type="square" style={{color: '#2110bdff', fontSize:'20px'}}>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize:'20px',background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp;  Updating the core and guaranteeing uptime and security will help you maintain your website and hosting.</p>
              </li>

              <li type="square" style={{color: '#2110bdff', fontSize:'20px'}}>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize:'20px',background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp;  In the event that a problem arises, offer prompt restoration support.</p>
              </li>

              <li type="square" style={{color: '#2110bdff', fontSize:'20px'}}>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize:'20px',background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp; Providing responsive assistance for any issues or inquiries.</p>
              </li>

              <li type="square" style={{color: '#2110bdff', fontSize:'20px'}}> 
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize:'20px',background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp;  Improving your site's performance and user experience over time.</p>
              </li>

              <li type="square" style={{color: '#2110bdff', fontSize:'20px'}}>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize:'20px',background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp;  Keeping your website secure and protected from cyber threats.</p>
              </li>

              <li type="square" style={{color: '#2110bdff', fontSize:'20px'}}>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize:'20px',background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp;  Keeping your website secure and protected from cyber threats.</p>
              </li>

              <li type="square" style={{color: '#2110bdff', fontSize:'20px'}}>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize:'20px',background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp; Timely reminders and information regarding your hosting and domain.</p>
              </li>

              <li type="square" style={{color: '#2110bdff', fontSize:'20px'}}>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize:'20px',background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp;  Ensuring that your website is responsive and user-friendly.</p>
              </li>

              <li type="square" style={{color: '#2110bdff', fontSize:'20px'}}>
                <p style={{color: '#686D76'}}><i className="fa fa-circle-o" style={{fontSize:'20px',background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i> &nbsp;  Assistance with mail servers, analytics, and hosting servers.</p>
              </li>
            </ul>
          


        
            

          </div>


          


       <br /><br />
       
        </main>
  );
};

export default WebMaintenance;

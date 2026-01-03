import React from 'react';
import './CIAM.css';
const BannerImage = '/assets/images/newBanner/cy9.webp';
const Rectangle27 = '/assets/images/Rectangle-27.webp';
const Ciam = '/assets/images/about-image.webp';


const CIAM = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="CIAM Banner" className="banner-img" />
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

      {/* Overview Section */}
      <section className="overview" style={{ backgroundColor: '#f8fafc', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ maxWidth: '800px', margin: '0 auto 30px', fontSize: '1.1rem', color: '#475569', textAlign: 'justify' }}>
            Our CIAM integration services provide secure cloud infrastructure, seamless user experience, and compliance
            with data regulations. We offer comprehensive APIs and integration support to facilitate smooth integration with
            client systems. Our up-to-date data protection regulations, advanced identity verification, and consent
            management tools give you complete control over your data. Our dedicated maintenance support ensures that your
            data remains secure at all times.
          </p>
          <a href="#" className="btn btn-primary" style={{
            display: 'inline-block',
            padding: '12px 24px',
            borderRadius: '6px',
            fontWeight: 600,
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backgroundColor: '#1B8DBB',
            color: 'white',
            border: '2px solid #1B8DBB',
            textDecoration: 'none'
          }}>Book a Meeting</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" style={{ padding: '80px 0'}}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '60px' }}>Support Features</h2>
          <div className="features-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {/* Feature 1 */}
            <div className="feature-card" style={{
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '20px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
              <div className="feature-icon" style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'rgba(27, 141, 187, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px', color: '#1B8DBB' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>Identity Verification</h3>
              <p style={{ color: '#64748b' }}>We provide various identity verification options such as two-factor authentication, biometric verification,
                or identity proofing services, collaborating with trusted providers for accurate results.</p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card" style={{
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '20px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
              <div className="feature-icon" style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'rgba(27, 141, 187, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px', color: '#1B8DBB' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>Data Security</h3>
              <p style={{ color: '#64748b' }}>We use encryption and access controls to protect customer data in their CIAM system and regularly conduct
                security audits to identify and address vulnerabilities.</p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card" style={{
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '20px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
              <div className="feature-icon" style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'rgba(27, 141, 187, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px', color: '#1B8DBB' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>User Experience</h3>
              <p style={{ color: '#64748b' }}>We offer a smooth registration and login experience. Our streamlined form has minimal required fields, and
                we provide social login options for easy account access.</p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card" style={{
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '20px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
              <div className="feature-icon" style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'rgba(27, 141, 187, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px', color: '#1B8DBB' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>Scalability</h3>
              <p style={{ color: '#64748b' }}>Our CIAM system is scalable and flexible, utilizing cloud-based infrastructure. We ensure efficient traffic
                handling with load balancing and caching and proactively scale resources for growth.</p>
            </div>

            {/* Feature 5 */}
            <div className="feature-card" style={{
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '20px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
              <div className="feature-icon" style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'rgba(27, 141, 187, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px', color: '#1B8DBB' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>User Consent & Privacy</h3>
              <p style={{ color: '#64748b' }}>We help clients manage their data-sharing preferences and privacy settings. We provide clear privacy
                policies that align with regulations and offer guidance for implementing best practices.</p>
            </div>

            {/* Feature 6 */}
            <div className="feature-card" style={{
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '20px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
              <div className="feature-icon" style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'rgba(27, 141, 187, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px', color: '#1B8DBB' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>Maintenance & Updates</h3>
              <p style={{ color: '#64748b' }}>We have a team dedicated to maintaining our CIAM system. We regularly patch security, update software, and
                scan for vulnerabilities. Our monitoring and alert systems detect issues and provide timely support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" style={{ backgroundColor: '#1B8DBB', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Leading with Integrity</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 30px', fontSize: '1.1rem' }}>Ready to secure your customer identity and access management with our cloud solutions? Contact us today to
            learn how we can help protect your data while providing a seamless user experience.</p>
          <div className="button-group" style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" className="btn btn-secondary" style={{
              display: 'inline-block',
              padding: '12px 24px',
              borderRadius: '6px',
              fontWeight: 600,
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: 'white',
              color: '#1B8DBB',
              border: '2px solid white',
              textDecoration: 'none'
            }}>Book a Meeting</a>
            <a href="#" className="btn btn-outline" style={{
              display: 'inline-block',
              padding: '12px 24px',
              borderRadius: '6px',
              fontWeight: 600,
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              textDecoration: 'none'
            }}>View Case Studies</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CIAM;


import React from 'react';
const BannerImage = '/assets/images/newBanner/cy16.webp';
const Rectangle27 = '/assets/images/Rectangle-27.webp';

const WorkforceIdentity = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="Workforce Identity Banner" className="banner-img" />
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

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(to bottom, hsl(210, 40%, 96.1%, 0.5), hsl(210, 40%, 96.1%))',
        padding: '3rem 0 6rem 0'
      }}>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center gap-4 text-center">
            <div style={{ marginBottom: '1rem' }}>
              <h1 style={{
                fontSize: '3rem',
                fontWeight: 800,
                lineHeight: 1.2,
                color: '#1B8DBB'
              }} className="tracking-tighter sm:text-4xl md:text-5xl">
                Workforce Identity Service to Ensure Secured Access Against Threats
              </h1>
              <p style={{
                margin: '0 auto 1.5rem',
                maxWidth: '700px',
                color: '#64748b'
              }} className="text-xl">
                Meticulously manage all your user identities' lifecycle, ensuring everyone has every necessary access to resources.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <button className="btn btn-primary" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem 2rem',
                borderRadius: '0.375rem',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: '#1B8DBB',
                color: 'white',
                border: '2px solid #1B8DBB'
              }}>
                Talk to Our Experts
                <svg style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <button className="btn btn-secondary" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem 2rem',
                borderRadius: '0.375rem',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: 'white',
                color: '#1B8DBB',
                border: '2px solid #64748b'
              }}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section style={{ padding: '3rem 0 4rem 0' }}>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '3rem',
                fontWeight: 800,
                lineHeight: 1.2,
                color: '#1B8DBB'
              }} className="tracking-tighter sm:text-4xl md:text-5xl">
                Cybersecurity Services
              </h2>
              <p style={{
                margin: '0 auto',
                maxWidth: '700px',
                color: '#64748b'
              }} className="text-xl">
                Implement adaptive authentication, centralized privilege access management, and seamless integration with Hrify Digital Workforce Identity solutions.
              </p>
            </div>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Feature 1 */}
            <div className="feature-card" style={{
              borderRadius: '0.5rem',
              border: '1px solid #e2e8f0',
              backgroundColor: 'white',
              color: 'black',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
              const icon = e.currentTarget.querySelector('svg');
              if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.color = '#15749A';
                icon.style.filter = 'drop-shadow(0 4px 8px rgba(27, 141, 187, 0.3))';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
              const icon = e.currentTarget.querySelector('svg');
              if (icon) {
                icon.style.transform = 'scale(1)';
                icon.style.color = '#1B8DBB';
                icon.style.filter = 'none';
              }
            }}>
              <div style={{ padding: '1.5rem 1.5rem 0.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#1B8DBB'
                }}>
                  <svg style={{ width: '1.25rem', height: '1.25rem', color: '#1B8DBB' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  Authentication
                </h3>
              </div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Secure your organization with adaptive and multi-factor authentication mechanisms for robust remote access security.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="feature-card" style={{
              borderRadius: '0.5rem',
              border: '1px solid #e2e8f0',
              backgroundColor: 'white',
              color: 'black',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
              const icon = e.currentTarget.querySelector('svg');
              if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.color = '#15749A';
                icon.style.filter = 'drop-shadow(0 4px 8px rgba(27, 141, 187, 0.3))';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
              const icon = e.currentTarget.querySelector('svg');
              if (icon) {
                icon.style.transform = 'scale(1)';
                icon.style.color = '#1B8DBB';
                icon.style.filter = 'none';
              }
            }}>
              <div style={{ padding: '1.5rem 1.5rem 0.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#1B8DBB'
                }}>
                  <svg style={{ width: '1.25rem', height: '1.25rem', color: '#1B8DBB' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Authorization
                </h3>
              </div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Implement granular control over who can access what resources, ensuring the right people have the right access.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="feature-card" style={{
              borderRadius: '0.5rem',
              border: '1px solid #e2e8f0',
              backgroundColor: 'white',
              color: 'black',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ padding: '1.5rem 1.5rem 0.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                color: '#1B8DBB'
                }}>
                  <svg style={{ width: '1.25rem', height: '1.25rem', color: '#1B8DBB' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  Access Control
                </h3>
              </div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Centralized privilege access management providing visibility and control over sensitive resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Hrify Digital */}
      <section style={{ backgroundColor: '#f8fafc', padding: '3rem 0 4rem 0' }}>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: 800,
                lineHeight: 1.2,
                color: '#1B8DBB'
              }} className="tracking-tighter sm:text-4xl">About Hrify Digital</h2>
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <div style={{ gap: '1rem', display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: '#64748b', textAlign: 'justify', marginBottom: '1rem' }}>
                  Hrify Digital, pioneering the way in workforce identity solutions, is revolutionizing the post-pandemic world by addressing the critical aspects of remote work security and identity management.
                </p>
                <p style={{ color: '#64748b', textAlign: 'justify', marginBottom: '1rem' }}>
                  Our expert team excels in implementing adaptive and multi-factor authentication mechanisms, ensuring robust security for remote access across applications and end-user devices.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div style={{ gap: '1rem', display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: '#64748b', textAlign: 'justify', marginBottom: '1rem' }}>
                  With centralized privilege access management, we provide granular control and visibility, safeguarding sensitive resources.
                </p>
                <p style={{ color: '#64748b', textAlign: 'justify', marginBottom: '2rem' }}>
                  Our customized solutions are designed to seamlessly integrate into remote work environments, enabling organizations to navigate the evolving cybersecurity landscape with confidence.
                </p>
                <div style={{ justifyContent: 'flex-start', marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', marginLeft: '-7rem' }}>
                  <button className="btn btn-primary" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                    backgroundColor: '#1B8DBB',
                    color: 'white'
                  }}>
                    Talk to Our Experts
                    <svg style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section style={{ padding: '3rem 0 6rem 0' }}>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#1B8DBB'
            }} className="tracking-tighter sm:text-4xl md:text-5xl">Support Features</h2>
            <p style={{
              margin: '0 auto',
              maxWidth: '700px',
              color: '#64748b'
            }} className="text-xl">
              Comprehensive cybersecurity solutions to protect your organization
            </p>
          </div>
          <div style={{
            marginTop: '3rem',
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
          }}>
            {/* Feature 1 */}
            <div className="feature-card" style={{
              borderRadius: '0.5rem',
              border: '1px solid #e2e8f0',
              backgroundColor: 'white',
              color: 'black',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#1B8DBB'
                }}>
                  <svg style={{ width: '1.25rem', height: '1.25rem', color: '#1B8DBB' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Identity & Access Management (IAM)
                </h3>
              </div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Hrify Digital improves digital security with IAM strategies, multi-factor authentication, and identity governance solutions. We monitor and prevent unauthorized access.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="feature-card" style={{
              borderRadius: '0.5rem',
              border: '1px solid #e2e8f0',
              backgroundColor: 'white',
              color: 'black',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#1B8DBB'
                }}>
                  <svg style={{ width: '1.25rem', height: '1.25rem', color: '#1B8DBB' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  Data Protection
                </h3>
              </div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Hrify Digitals offers robust data security measures, including encryption, classification frameworks, secure storage and backups, data retention policies, and disposal practices to prevent breaches.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="feature-card" style={{
              borderRadius: '0.5rem',
              border: '1px solid #e2e8f0',
              backgroundColor: 'white',
              color: 'black',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#1B8DBB'
                }}>
                  <svg style={{ width: '1.25rem', height: '1.25rem', color: '#1B8DBB' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                  </svg>
                  Threat Detection & Response
                </h3>
              </div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Hrify Digital provides security solutions that integrate advanced monitoring tools and technologies for proactive threat detection. We offer real-time alerts, incident response planning, and vulnerability assessments.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="feature-card" style={{
              borderRadius: '0.5rem',
              border: '1px solid #e2e8f0',
              backgroundColor: 'white',
              color: 'black',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#1B8DBB'
                }}>
                  <svg style={{ width: '1.25rem', height: '1.25rem', color: '#1B8DBB' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  User Awareness & Training
                </h3>
              </div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Hrify Digital offers customizable security awareness programs, training modules, and simulated phishing campaigns to mitigate social engineering and phishing risks.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="feature-card" style={{
              borderRadius: '0.5rem',
              border: '1px solid #e2e8f0',
              backgroundColor: 'white',
              color: 'black',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#1B8DBB'
                }}>
                  <svg style={{ width: '1.25rem', height: '1.25rem', color: '#1B8DBB' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  Privileged Access Management (PAM)
                </h3>
              </div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Hrify Digital offers PAM solutions to protect privileged accounts, enforce strong passwords, monitor sessions, employ just-in-time access controls, and implement least privilege principles.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="feature-card" style={{
              borderRadius: '0.5rem',
              border: '1px solid #e2e8f0',
              backgroundColor: 'white',
              color: 'black',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#1B8DBB'
                }}>
                  <svg style={{ width: '1.25rem', height: '1.25rem', color: '#1B8DBB' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Compliance & Regulatory Support
                </h3>
              </div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Hrify Digital ensures clients meet cybersecurity regulations and standards, including GDPR, HIPAA, and PCI DSS. We provide tools for compliance audits and stay up-to-date on the latest regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#1B8DBB', color: 'white', padding: '3rem 0 4rem 0', textAlign: 'center' }}>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 800,
              lineHeight: 1.2
            }} className="tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Secure Your Workforce?
            </h2>
            <p style={{
              margin: '0 auto 1.5rem',
              maxWidth: '700px',
              fontSize: '1.1rem'
            }}>
              Talk to our experts today and discover how Dimiour can transform your cybersecurity posture.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <button className="btn btn-secondary" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem 2rem',
                borderRadius: '0.375rem',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: 'white',
                color: '#1B8DBB'
              }}>
                <svg style={{ marginRight: '0.5rem', width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Contact Us
              </button>
              <button className="btn btn-outline" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem 2rem',
                borderRadius: '0.375rem',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white'
              }}>
                <svg style={{ marginRight: '0.5rem', width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkforceIdentity;

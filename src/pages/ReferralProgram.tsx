import React from 'react';
const Refferlbanner = '/assets/images/about-banner.webp';


const ReferralProgram = () => {
  return (
    <div>
        {/* Referral Program Banner */}
        <div className="container-fluid p-0">
          <img src="/assets/images/about-banner.webp" alt="Referral Program" className="img-fluid w-100" />
        </div>

        <div className="container py-5">
          {/* All custom styles from Internship page - fully reused/adapted */}
          <style>
            {`
              .internship-hero {
                background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                border-radius: 16px;
                padding: 4rem 2rem;
                margin-bottom: 4rem;
              }

              .internship-hero h2 {
                font-size: 2.8rem;
                font-weight: 700;
                color: #1e3a8a;
                margin-bottom: 1.5rem;
                line-height: 1.3;
              }

              .internship-hero p {
                font-size: 1.2rem;
                color: #555;
                line-height: 1.7;
                margin-bottom: 1.5rem;
              }

              .section-title {
                text-align: center;
                font-size: 2.5rem;
                font-weight: 700;
                color: #1e3a8a;
                margin-bottom: 3rem;
              }

              .section-subtitle {
                text-align: center;
                font-size: 1.2rem;
                color: #666;
                max-width: 800px;
                margin: -2rem auto 3rem;
              }

              .text-content p {
                font-size: 1.1rem;
                color: #555;
                line-height: 1.8;
                margin-bottom: 1.5rem;
                text-align: justify;
              }

              .text-content h2 {
                font-size: 1.8rem;
                font-weight: 700;
                color: #1e3a8a;
                margin: 2.5rem 0 1.5rem;
              }

              .application-section {
                background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
                border-radius: 16px;
                padding: 4rem 2rem;
                margin: 4rem 0;
              }

              .form-card {
                background: white;
                border-radius: 12px;
                box-shadow: 0 8px 24px rgba(0,0,0,0.06);
                padding: 1rem 1.25rem;
                max-width: 1200px;
                margin: 0 auto;
              }

              .form-section-title {
                font-size: 1.3rem;
                font-weight: 600;
                color: #1e3a8a;
                margin: 2rem 0 1.5rem;
                padding-bottom: 0.5rem;
                border-bottom: 2px solid #e0e0e0;
              }

              .form-section-title:first-of-type {
                margin-top: 0;
              }

              .form-label {
                color: #1e3a8a;
                font-weight: 600;
                margin-bottom: 0.5rem;
                font-size: 0.95rem;
              }

              .form-control, .form-select {
                border: 2px solid #e0e0e0;
                border-radius: 10px;
                padding: 0.75rem 1rem;
                font-size: 1rem;
                transition: all 0.3s ease;
              }

              .form-control:focus, .form-select:focus {
                border-color: #1e3a8a;
                box-shadow: 0 0 0 0.2rem rgba(30, 58, 138, 0.1);
              }

              textarea.form-control {
                min-height: 100px;
                resize: vertical;
              }

              .form-check-input:checked {
                background-color: #1e3a8a;
                border-color: #1e3a8a;
              }

              .form-check-input:focus {
                box-shadow: 0 0 0 0.2rem rgba(30, 58, 138, 0.1);
                border-color: #1e3a8a;
              }

              .submit-btn {
                background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
                color: white;
                border: none;
                border-radius: 8px;
                padding: 1rem 3rem;
                font-size: 1.1rem;
                font-weight: 600;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);
              }

              .submit-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(30, 58, 138, 0.4);
                background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
              }

              .upload-btn {
                background: white;
                border: 2px dashed #e0e0e0;
                border-radius: 12px;
                padding: 2rem;
                text-align: center;
                transition: all 0.3s ease;
                color: #1e3a8a;
                text-decoration: none;
                display: block;
              }

              .upload-btn:hover {
                border-color: #1e3a8a;
                background: #e3f2fd;
                color: #1e3a8a;
              }

              .privacy-notice, .confirmation-message {
                text-align: center;
                color: #666;
                font-size: 0.9rem;
                margin-top: 1.5rem;
                line-height: 1.6;
              }

              @media (max-width: 768px) {
                .internship-hero h2 {
                  font-size: 2.2rem;
                }
                .internship-hero p {
                  font-size: 1.1rem;
                }
                .section-title {
                  font-size: 2rem;
                }
                .form-card {
                  padding: 2rem 1.5rem;
                }
                .text-content h2 {
                  font-size: 1.6rem;
                }
              }
            `}
          </style>

          {/* Hero Intro Section - Replaces old header-section */}
          <section className="internship-hero">
            <div className="text-center">
              <h2>Spot Great Talent? Refer Them to JK Global IT Solutions!</h2>
              <p>
                We're always looking for talented individuals to join our dynamic team at JK Global IT Solutions.
                If you know someone who would thrive in our innovative environment and align with our vision,
                refer them to us! Let's work together to create incredible opportunities.
              </p>
            </div>
          </section>

          {/* Main Text Content - All original content preserved, only classes changed for styling */}
          <section className="mb-5">
            <div className="text-content">
              <h2 className="text-center section-title">JK Global IT Solutions Candidate Referral Program</h2>
              
              <p>Introduce us to exceptional talent! Refer a friend, former colleague, or family member with the right skills to join JK Global IT Solutions. We are always looking for skilled professionals across diverse fields, including IT and non-IT roles.</p>
              <p>By participating in our referral program, you play a vital role in helping us identify top candidates who align with our company's mission and values. Your recommendations contribute to building a stronger and more dynamic team at JK Global IT Solutions.</p>

              <h2>Specialized IT Talent</h2>
              <p>Access a pool of skilled IT professionals with expertise across various technologies, including software development, networking, cybersecurity, and cloud computing.</p>
              <p>We are constantly expanding our network of IT specialists who are proficient in modern frameworks and tools such as React, Angular, Python, Java, AWS, and DevOps practices. Your referrals can help us discover new talents that can innovate and drive technological advancements.</p>
              <p>Successfully referring a candidate can earn you a one-time bonus. Refer to the JK Global IT Solutions policy below for more details. It's our way of saying thank you for connecting us with high-quality candidates who fit our culture and contribute to our success.</p>
              <p>Your continued support in identifying and recommending candidates helps us maintain a robust pipeline of professionals ready to make an impact. Let's grow together!</p>

              <h2>Referral Bonus Policy</h2>
              <p>JK Global IT Solutions values your referrals! Earn a referral bonus when the candidate you refer is hired by JK Global IT Solutions or its clients, subject to the following conditions.</p>
              <p>The bonus structure is designed to reward you fairly for your contribution. Payouts are processed promptly upon successful completion of the candidate's employment milestones, ensuring transparency and trust in our process.</p>

              <h2>Eligibility</h2>
              <p>The referred candidate should not have been in contact with a JK Global IT Solutions recruiter in the past 3 months.</p>
              <p>This policy ensures that your referrals are unique and genuinely add to our candidate pool. We encourage you to refer professionals from your network who you believe will be a great fit for our organization.</p>

              <h2>Employment Duration</h2>
              <p>The referred candidate must successfully complete 90 days of active employment before the referral bonus is awarded.</p>
              <p>This time frame allows us to evaluate the candidate's performance and commitment while ensuring fair and consistent application of the referral bonus policy.</p>

              <h2>Policy Updates</h2>
              <p>JK Global IT Solutions reserves the right to modify, update, or discontinue this policy at any time.</p>
              <p>We are committed to keeping you informed of any changes in our referral program. Regular updates will be shared through official communication channels, ensuring you are always aware of the latest policies.</p>
              <p><strong>Note:</strong> The referral bonus currently applies only to candidates and referrers within the North America region. However, we encourage you to refer talented professionals from any location, as we are always eager to connect with exceptional individuals.</p>

              <p>Let's work together to build a stronger, more talented team! Your referrals help us find outstanding professionals who contribute to our shared success and drive JK Global IT Solutions's mission forward.</p>
              <p>If you have any questions about the referral process or need assistance, feel free to contact our HR team. We are here to support you every step of the way and make your experience seamless and rewarding.</p>
            </div>
          </section>

          {/* Referral Form Section - Fully restyled to match Internship form */}
          <section className="application-section">
            <div className="container">
              <h2 className="section-title">Submit a Referral</h2>
              <p className="section-subtitle">
                Know someone who would be a great fit? Share their details below and help us grow our team.
              </p>

              <div className="form-card">
                <form>
                  {/* Your Details Section */}
                  <h3 className="form-section-title">Your Details</h3>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name *</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email Address *</label>
                      <input type="email" className="form-control" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Phone Number *</label>
                      <input type="tel" className="form-control" required />
                    </div>
                  </div>

                  {/* Candidate Details Section */}
                  <h3 className="form-section-title">Candidate Details</h3>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name *</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email Address *</label>
                      <input type="email" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone Number *</label>
                      <input type="tel" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Current Job Title *</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Relevant Skills/Expertise *</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Preferred Role/Department *</label>
                      <select className="form-select" required>
                        <option value="" disabled selected>Select Department</option>
                        <option>IT</option>
                        <option>HR</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Legal</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">How do you know this candidate? *</label>
                      <textarea className="form-control" rows={4} required></textarea>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Any comments or notes about the candidate</label>
                      <textarea className="form-control" rows={4}></textarea>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Upload Resume (Optional)</label>
                      <a href="https://forms.google.com/your-form-link" target="_blank" className="upload-btn d-block text-decoration-none">
                        <i className="fas fa-cloud-upload-alt fa-2x mb-2"></i>
                        <p className="mb-0">Click to upload via Google Form</p>
                      </a>
                    </div>
                  </div>

                  {/* Confirmation Section */}
                  <div className="mt-4">
                    <div className="form-check mb-4">
                      <input className="form-check-input" type="checkbox" required id="confirmCheck" />
                      <label className="form-check-label" htmlFor="confirmCheck">
                        I confirm that the information provided is accurate and that I have obtained the candidate's consent to share their details with JK Global IT Solutions. *
                      </label>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="submit-btn">
                        Submit Referral
                      </button>
                      <p className="confirmation-message">
                        Thank you for your referral! We will review the candidate's details and get in touch if there's a suitable opportunity. Stay tuned for updates!
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Call to Action - Matching Internship final CTA */}
          <section className="text-center py-5">
            <div className="container">
              <div style={{
                background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
                color: 'white',
                padding: '3rem 2rem',
                borderRadius: '16px',
                boxShadow: '0 8px 30px rgba(30, 58, 138, 0.2)'
              }}>
                <h2 className="text-white mb-3" style={{ fontSize: '2.2rem', fontWeight: '700' }}>
                  Have Questions About Referrals?
                </h2>
                <p className="mb-4" style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2rem', opacity: '0.95' }}>
                  Contact our HR team for any clarification regarding the referral program or process.
                </p>
                <a
                  href="/contact"
                  style={{
                    background: 'white',
                    color: '#1e3a8a',
                    padding: '1rem 2.5rem',
                    borderRadius: '50px',
                    fontWeight: '600',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => (e.target as HTMLAnchorElement).style.background = '#f0f0f0'}
                  onMouseOut={(e) => (e.target as HTMLAnchorElement).style.background = 'white'}
                >
                  Contact HR
                </a>
              </div>
            </div>
          </section>
        </div>
    </div>
  );
};

export default ReferralProgram;


import React from 'react';
const InternImage2 = '/assets/images/Internship.png';

const Internship = () => {
  return (
    <>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={InternImage2} alt="Internship Program Banner" className="banner-img" />
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

      <div className="container py-5">
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
              color: #1B8DBB;
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
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .section-subtitle {
              text-align: center;
              font-size: 1.2rem;
              color: #666;
              max-width: 800px;
              margin: -2rem auto 3rem;
            }

            .program-card {
              background: white;
              border-radius: 12px;
              padding: 1rem 1.25rem;
              box-shadow: 0 8px 24px rgba(0,0,0,0.06);
              transition: all 0.3s ease;
              height: 100%;
              border-left: 4px solid #1B8DBB;
            }

            .program-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            }

            .program-card h3 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .program-card ul {
              padding-left: 1.25rem;
              margin: 0;
            }

            .program-card li {
              color: #666;
              line-height: 1.8;
              margin-bottom: 0.75rem;
            }

            .benefit-card {
              background: white;
              border-radius: 12px;
              padding: 1rem 1.25rem;
              text-align: center;
              box-shadow: 0 8px 24px rgba(0,0,0,0.06);
              transition: all 0.3s ease;
              height: 100%;
            }

            .benefit-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            }

            .icon-circle {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 1.5rem;
              transition: all 0.3s ease;
            }

            .icon-circle.orange {
              background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
            }

            .icon-circle.teal {
              background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
            }

            .icon-circle.pink {
              background: linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%);
            }

            .benefit-card:hover .icon-circle {
              transform: scale(1.1) rotate(5deg);
            }

            .icon-circle svg {
              width: 50px;
              height: 50px;
              stroke-width: 2;
            }

            .benefit-card h3 {
              font-size: 1.5rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .benefit-card p {
              color: #666;
              line-height: 1.7;
              font-size: 1rem;
            }

            .application-section {
              background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
              border-radius: 16px;
              padding: 4rem 2rem;
              margin: 4rem 0;
            }

            .form-card {
              background: white;
              border-radius: 20px;
              box-shadow: 0 8px 30px rgba(0,0,0,0.12);
              padding: 3rem;
              max-width: 1000px;
              margin: 0 auto;
            }

            .form-section-title {
              font-size: 1.3rem;
              font-weight: 600;
              color: #1B8DBB;
              margin: 2rem 0 1.5rem;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid #e0e0e0;
            }

            .form-section-title:first-of-type {
              margin-top: 0;
            }

            .form-label {
              color: #1B8DBB;
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
              border-color: #1B8DBB;
              box-shadow: 0 0 0 0.2rem rgba(27, 141, 187, 0.1);
            }

            textarea.form-control {
              min-height: 100px;
              resize: vertical;
            }

            .form-check-input:checked {
              background-color: #1B8DBB;
              border-color: #1B8DBB;
            }

            .form-check-input:focus {
              box-shadow: 0 0 0 0.2rem rgba(27, 141, 187, 0.1);
              border-color: #1B8DBB;
            }

            .submit-btn {
              background: linear-gradient(135deg, #1B8DBB 0%, #1B8DBB 100%);
              color: white;
              border: none;
              border-radius: 50px;
              padding: 1rem 3rem;
              font-size: 1.1rem;
              font-weight: 600;
              transition: all 0.3s ease;
              box-shadow: 0 4px 15px rgba(27, 141, 187, 0.3);
            }

            .submit-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 6px 20px rgba(27, 141, 187, 0.4);
              background: linear-gradient(135deg, #15749A 0%, #1B8DBB 100%);
            }

            .privacy-notice {
              text-align: center;
              color: #666;
              font-size: 0.9rem;
              margin-top: 1.5rem;
              line-height: 1.6;
            }

            .domain-badge {
              display: inline-block;
              background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
              color: #6a1b9a;
              padding: 0.5rem 1rem;
              border-radius: 20px;
              font-size: 0.9rem;
              font-weight: 500;
              margin: 0.25rem;
            }

            .success-story {
              background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
              border-left: 4px solid #388e3c;
              padding: 1.5rem;
              border-radius: 12px;
              margin-bottom: 1rem;
            }

            .success-story h4 {
              color: #388e3c;
              font-size: 1.1rem;
              font-weight: 600;
              margin-bottom: 0.5rem;
            }

            .success-story p {
              color: #555;
              margin: 0;
              line-height: 1.7;
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
              .benefit-card {
                margin-bottom: 1.5rem;
              }
            }
          `}
        </style>

        {/* Hero Section */}
        <section className="internship-hero">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8">
              <h2>Unlock Your Potential with Real-World Experience</h2>
              <p>
                At Hrify Digital, our internship program is designed to unlock the true potential of students and young professionals by providing hands-on learning experiences. We nurture talent, spark innovation, and help interns discover their strengths through structured training and real-world projects.
              </p>
              <p>
                Join us to transform your academic knowledge into practical skills while working alongside experienced professionals in a collaborative, growth-focused environment.
              </p>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <img
                src={InternImage2}
                alt="Internship Program"
                className="img-fluid rounded shadow-lg"
                style={{ maxWidth: '100%', borderRadius: '16px' }}
              />
            </div>
          </div>
        </section>

        {/* Program Highlights Section */}
        <section className="mb-5">
          <h2 className="section-title">Program Highlights</h2>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="program-card">
                <h3>🚀 Live Projects</h3>
                <p>Work on real-time projects in tech, design, marketing, or operations, gaining practical exposure to industry challenges.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="program-card">
                <h3>👨‍🏫 Mentorship</h3>
                <p>One-on-one sessions with experienced professionals to guide, refine your skills, and accelerate your growth.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="program-card">
                <h3>📊 Performance Reviews</h3>
                <p>Weekly feedback and assessments to track improvement, identify strengths, and ensure readiness for the job market.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="program-card">
                <h3>🎓 Certifications</h3>
                <p>Recognized certification of internship completion with individual performance insights and recommendations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Domains Offered Section */}
        <section className="mb-5">
          <h2 className="section-title">Internship Domains</h2>
          <p className="section-subtitle">
            We offer diverse internship opportunities across multiple domains to match your interests and career goals.
          </p>
          <div className="text-center">
            <span className="domain-badge">Frontend Development (React, HTML/CSS/JS)</span>
            <span className="domain-badge">Backend Development (Node.js, Express, MongoDB)</span>
            <span className="domain-badge">UI/UX Design (Figma, Adobe XD)</span>
            <span className="domain-badge">Data Analytics (Python, Power BI, Excel)</span>
            <span className="domain-badge">Digital Marketing (SEO, Google Ads, Social Media)</span>
            <span className="domain-badge">HR & Talent Acquisition</span>
            <span className="domain-badge">Mobile Development</span>
            <span className="domain-badge">Cloud Computing</span>
          </div>
        </section>

        {/* Why Intern With Us Section */}
        <section className="mb-5">
          <h2 className="section-title">Why Intern With Us?</h2>
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="benefit-card">
                <div className="icon-circle orange">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#f57c00">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3>Hands-On Learning</h3>
                <p>Work on real projects and build a portfolio that showcases your skills to future employers.</p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="benefit-card">
                <div className="icon-circle teal">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00897b">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <h3>Career Growth</h3>
                <p>Access to career-building webinars, workshops, and potential PPO opportunities from us or partner companies.</p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="benefit-card">
                <div className="icon-circle pink">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#c2185b">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>Flexible & Rewarding</h3>
                <p>Work-from-home flexibility with stipends for top performers and recognition for outstanding work.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="mb-5">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Many of our interns have transitioned into full-time roles at Hrify Digital or leading companies worldwide.
          </p>
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="success-story">
                <h4>Priya Kumar - Data Analytics</h4>
                <p>
                  "Joined as a Data Analytics intern and now working with a global analytics firm. The hands-on experience and mentorship I received were invaluable in preparing me for my career."
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="success-story">
                <h4>Arjun Menon - Frontend Developer</h4>
                <p>
                  "Started as a frontend intern and was hired by an ed-tech startup after showcasing my React-based portfolio built during my time here. Hrify Digital launched my career!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="application-section">
          <div className="container">
            <h2 className="section-title">Apply for Internship</h2>
            <p className="section-subtitle">
              Ready to kickstart your career with real-world experience? Fill out the form below and take the first step toward your future.
            </p>

            <div className="form-card">
              <form>
                {/* Candidate Information */}
                <h3 className="form-section-title">Personal Information</h3>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Current School/University</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="University Name"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Current Year/Semester</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g., 3rd Year"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Field of Study</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g., Computer Science"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">GPA/CGPA</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g., 8.5/10"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Country *</label>
                    <select className="form-select" required>
                      <option value="" disabled selected>Select Country</option>
                      <option>India</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Singapore</option>
                      <option>Germany</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Complete Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Street Address"
                    />
                  </div>

                  <div className="col-12 col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>

                  <div className="col-12 col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State/Province"
                    />
                  </div>

                  <div className="col-12 col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ZIP/Postal Code"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Time Zone</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g., IST, EST, GMT"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Previous Work Experience</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Any internships or jobs"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">How did you find out about us?</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g., LinkedIn, University Career Fair, etc."
                    />
                  </div>
                </div>

                {/* Internship Preferences */}
                <h3 className="form-section-title">Internship Preferences</h3>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label">Preferred Start Date *</label>
                    <input
                      type="date"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Preferred End Date *</label>
                    <input
                      type="date"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Is this your first internship? *</label>
                    <select className="form-select" required>
                      <option value="" disabled selected>Select</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Select Specialization *</label>
                    <select className="form-select" required>
                      <option value="" disabled selected>Choose Domain</option>
                      <option>Frontend Development</option>
                      <option>Backend Development</option>
                      <option>UI/UX Design</option>
                      <option>Data Analytics</option>
                      <option>Digital Marketing</option>
                      <option>HR & Talent Acquisition</option>
                      <option>Mobile Development</option>
                      <option>Cloud Computing</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label">What are you hoping to achieve in this internship? *</label>
                    <textarea
                      className="form-control"
                      placeholder="Describe your learning goals and what you want to accomplish..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <label className="form-label">What skills will you demonstrate?</label>
                    <textarea
                      className="form-control"
                      placeholder="List your technical and soft skills relevant to the internship..."
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Describe your work style</label>
                    <textarea
                      className="form-control"
                      placeholder="How do you approach tasks, collaborate with teams, and manage deadlines?"
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Anything specific you want to learn?</label>
                    <textarea
                      className="form-control"
                      placeholder="Any particular technologies, tools, or concepts you're eager to explore..."
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Resume Upload (Optional)</label>
                    <input
                      type="file"
                      className="form-control"
                      accept=".pdf,.doc,.docx"
                    />
                  </div>
                </div>

                {/* Agreement */}
                <div className="mt-4">
                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex align-items-start mb-3">
                        <input
                          className="form-check-input me-3 mt-1"
                          type="checkbox"
                          id="codeOfConduct"
                          required
                          style={{ flexShrink: 0 }}
                        />
                        <label className="form-check-label text-start" htmlFor="codeOfConduct">
                          I agree to follow Hrify Digital's code of conduct and professional standards *
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex align-items-start mb-4">
                        <input
                          className="form-check-input me-3 mt-1"
                          type="checkbox"
                          id="consent"
                          required
                          style={{ flexShrink: 0 }}
                        />
                        <label className="form-check-label text-start" htmlFor="consent">
                          I consent to the processing of my personal information for internship purposes *
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-4">
                  <button type="submit" className="submit-btn">
                    Submit Application
                  </button>
                  <p className="privacy-notice">
                    By submitting your application, you consent to the processing of your personal information as per our privacy policy. Your details will only be used for internship recruitment purposes and will be handled with the utmost confidentiality.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-5">
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, #1B8DBB, #1B8DBB)',
              color: 'white',
              padding: '3rem 2rem',
              borderRadius: '16px',
              boxShadow: '0 8px 30px rgba(27, 141, 187, 0.2)'
            }}>
              <h2 className="text-white mb-3" style={{ fontSize: '2.2rem', fontWeight: '700' }}>
                Questions About Our Internship Program?
              </h2>
              <p className="mb-4" style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2rem', opacity: '0.95' }}>
                Reach out to our internship coordinator at internships@jkglobalit.com or call us at +91 123-456-7890
              </p>
              <a
                href="/contact"
                style={{
                  background: 'white',
                  color: '#1B8DBB',
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
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Bootstrap JS Bundle */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Internship;

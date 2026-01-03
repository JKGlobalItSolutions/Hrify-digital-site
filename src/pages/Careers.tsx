import React from 'react';
const CareersBanner = '/assets/images/newBanner/enterprise.webp';

const Careers = () => {
  return (
    <main>
      {/* Hero Banner Section */}
      <div className="banner container-fluid d-flex align-items-center justify-content-center" style={{ backgroundColor: '#e6f7ff' }}>
        <div className="row w-100 h-100 gx-0">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center text-center px-4 py-5">
            <h1 className="fw-bolder mb-0" style={{ fontSize: '4rem', color: '#000', lineHeight: '1.2' }}>
              Join Our Team
            </h1>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center p-4">
            <img
              className="img-fluid"
              src={CareersBanner}
              alt="Careers at JK Global IT Solutions"
              style={{ maxHeight: '520px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      {/* Banner Responsive Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .banner {
            min-height: 600px;
            background-color: #e6f7ff;
          }

          @media (max-width: 992px) {
            .banner h1 {
              font-size: 3.2rem !important;
            }
          }

          @media (max-width: 768px) {
            .banner {
              min-height: 500px;
            }
            .banner h1 {
              font-size: 2.8rem !important;
            }
          }

          @media (max-width: 576px) {
            .banner {
              min-height: 450px;
            }
            .banner h1 {
              font-size: 2.3rem !important;
            }
            .banner img {
              max-height: 300px !important;
            }
          }
        `
      }} />

      <div className="container py-5">
        <style>
          {`
            .careers-hero {
              background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
              border-radius: 16px;
              padding: 4rem 2rem;
              margin-bottom: 4rem;
              text-align: center;
            }

            .careers-hero h2 {
              font-size: 2.8rem;
              font-weight: 700;
              color: white;
              margin-bottom: 1.5rem;
              line-height: 1.3;
            }

            .careers-hero p {
              font-size: 1.2rem;
              color: #555;
              max-width: 900px;
              margin: 0 auto 2rem;
              line-height: 1.7;
            }

            .values-section {
              padding: 4rem 0;
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

            .value-card {
              background: white;
              border-radius: 16px;
              padding: 2.5rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: all 0.3s ease;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .value-card:hover {
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

            .icon-circle.blue {
              background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
            }

            .icon-circle.green {
              background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
            }

            .icon-circle.purple {
              background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
            }

            .value-card:hover .icon-circle {
              transform: scale(1.1) rotate(5deg);
            }

            .icon-circle svg {
              width: 50px;
              height: 50px;
              stroke-width: 2;
            }

            .value-card h3 {
              font-size: 1.5rem;
              font-weight: 600;
              color: #1e3a8a;
              margin-bottom: 1rem;
            }

            .value-card p {
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
              max-width: 900px;
              margin: 0 auto;
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
              min-height: 120px;
              resize: vertical;
            }

            .submit-btn {
              background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
              color: white;
              border: none;
              border-radius: 50px;
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

            .privacy-notice {
              text-align: center;
              color: #666;
              font-size: 0.9rem;
              margin-top: 1.5rem;
              line-height: 1.6;
            }

            .upload-link {
              display: inline-block;
              background: #f8f9fa;
              border: 2px dashed #1e3a8a;
              border-radius: 10px;
              padding: 0.75rem 1.5rem;
              color: #1e3a8a;
              text-decoration: none;
              transition: all 0.3s ease;
              font-weight: 500;
            }

            .upload-link:hover {
              background: #1e3a8a;
              color: white;
              border-style: solid;
            }

            @media (max-width: 768px) {
              .careers-hero h2 {
                font-size: 2.2rem;
              }
              .careers-hero p {
                font-size: 1.1rem;
              }
              .section-title {
                font-size: 2rem;
              }
              .form-card {
                padding: 2rem 1.5rem;
              }
              .value-card {
                margin-bottom: 1.5rem;
              }
            }
          `}
        </style>

        {/* Hero Section */}
        <section className="careers-hero">
          <div className="container">
            <h2>Shape the Future of IT Excellence with Us</h2>
            <p style={{color:'black', fontWeight:'bold'}}>
              At Hrify Digital, we're building innovative technology solutions and connecting top talent with exceptional opportunities. Join a team that values growth, collaboration, and meaningful impact in the world of technology.
            </p>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="values-section">
          <h2 className="section-title">Why JK Global IT Solutions?</h2>
          <p className="section-subtitle">
            We believe in empowering our people to do their best work while making a meaningful difference in the tech industry.
          </p>
          
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="value-card">
                <div className="icon-circle blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#1976d2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3>Collaborative Culture</h3>
                <p>Work alongside talented professionals in an inclusive, supportive environment where your ideas matter and teamwork drives innovation.</p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="value-card">
                <div className="icon-circle green">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#388e3c">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3>Growth Opportunities</h3>
                <p>Continuous learning, skill development programs, and clear career progression paths to help you reach your full potential.</p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="value-card">
                <div className="icon-circle purple">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#7b1fa2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3>Innovation First</h3>
                <p>Tackle challenging problems using cutting-edge technology, creative thinking, and modern development practices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="application-section">
          <div className="container">
            <h2 className="section-title">Apply Today</h2>
            <p className="section-subtitle">
              We're excited to learn more about you and how you can contribute to our mission of delivering excellence in IT solutions.
            </p>

            <div className="form-card">
              <form>
                <div className="row g-4">
                  {/* Personal Information */}
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
                    <label className="form-label">LinkedIn Profile</label>
                    <input 
                      type="url" 
                      className="form-control" 
                      placeholder="https://linkedin.com/in/johndoe"
                    />
                  </div>

                  {/* Position & Location */}
                  <div className="col-12 col-md-6">
                    <label className="form-label">Position Interested In *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="e.g., Senior React Developer"
                      required 
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Preferred Location *</label>
                    <select className="form-select" required>
                      <option value="" disabled selected>Select Location</option>
                      <option>Remote</option>
                      <option>India</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Singapore</option>
                      <option>United Arab Emirates</option>
                      <option>Germany</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Job Type Preference *</label>
                    <select className="form-select" required>
                      <option value="" disabled selected>Select Job Type</option>
                      <option>Full-Time</option>
                      <option>Part-Time</option>
                      <option>Contract</option>
                      <option>Freelance</option>
                      <option>Internship</option>
                    </select>
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Resume Upload</label>
                    <a 
                      href="https://forms.google.com/your-form-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="upload-link d-block text-center"
                    >
                      📄 Upload via Google Form
                    </a>
                  </div>

                  {/* Experience & Motivation */}
                  <div className="col-12">
                    <label className="form-label">Professional Experience & Skills *</label>
                    <textarea 
                      className="form-control" 
                      placeholder="Tell us about your relevant experience, technical skills, achievements, and what makes you a great fit for this role..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Why JK Global IT Solutions? *</label>
                    <textarea 
                      className="form-control" 
                      placeholder="What excites you about joining our team? How do you see yourself contributing to our mission?"
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Additional Information</label>
                    <textarea 
                      className="form-control" 
                      placeholder="Any other information you'd like to share (e.g., availability, salary expectations, portfolio links)..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 text-center mt-4">
                    <button type="submit" className="submit-btn">
                      Submit Application
                    </button>
                    <p className="privacy-notice">
                      By submitting your application, you consent to the processing of your personal information as per our privacy policy. Your details will only be used for recruitment purposes and will be handled with the utmost confidentiality.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Call to Action */}
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
                Questions About Joining Our Team?
              </h2>
              <p className="mb-4" style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2rem', opacity: '0.95' }}>
                Reach out to our HR team at careers@jkglobalit.com or call us at +91 123-456-7890. We're here to help!
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
                Contact HR Team
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Bootstrap JS Bundle */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </main>
  );
};

export default Careers;

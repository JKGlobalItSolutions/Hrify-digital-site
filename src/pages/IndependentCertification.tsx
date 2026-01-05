import React from 'react';
import { getAssetPath } from '../utils/assetPath';

const HeroIndepcertbodiesRemovebgPreview1 = getAssetPath('/assets/images/newBanner/Qua.Eng.webp');

const IndependentCertification = () => {
  return (
    <main>
      {/* Static Banner Section - Similar to Home but Single Image */}
      <div className="slider">
        <div className="slides">
          <div className="slide">
            <img src={HeroIndepcertbodiesRemovebgPreview1} alt="Independent Certification Banner" />
          </div>
        </div>
      </div>

      {/* Font Awesome for icons */}
      <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>

      {/* Original styles preserved - only minor spacing fixes */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .bg-muted {
            background-color: #f5f5f5;
          }
          .text-primary {
            color: #1B8DBB;
          }
          .bg-primary {
            background-color: #1B8DBB;
          }
          .text-muted-foreground {
            color: #6b7280;
          }
          .card {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
            padding: 1rem 1.25rem;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .card-header {
            margin-bottom: 1rem;
          }
          .card-title {
            font-weight: 600;
            font-size: 1.125rem;
            margin-bottom: 0.5rem;
          }
          .card-description {
            color: #6b7280;
            font-size: 0.875rem;
          }
          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            font-weight: 500;
            padding: 0.75rem 1.5rem;
            transition: all 0.2s;
            cursor: pointer;
          }
          .btn-primary {
            background-color: #1B8DBB;
            color: white;
          }
          .btn-primary:hover {
            background-color: #15749A;
          }

          /* Fixed spacing between sections and inside cards */
          section {
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }
          .space-y-6 > * + * {
            margin-top: 1.5rem;
          }
          .grid-gap-6 {
            gap: 1.5rem;
          }
          .grid-gap-8 {
            gap: 2rem;
          }
        `
      }} />

      <main className="flex-1">
        {/* Hero section - Full original content restored with better spacing */}
        <section className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="space-y-6 text-left">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Get Unbiased Certification With Independent Certification
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Verify compliance with industry standards, regulations, best practices, and other benchmarks, ensuring your system meets the highest standards.
                </p>
                <div className="flex justify-center md:justify-start">
                  <a href="#contact" className="btn btn-primary">
                    Schedule a Consultation
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Objective Assessment</h3>
                  </div>
                  <div className="card-content">
                    <p className="text-sm text-muted-foreground">
                      Unbiased evaluation of your systems and processes
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Compliance & Standards</h3>
                  </div>
                  <div className="card-content">
                    <p className="text-sm text-muted-foreground">
                      Ensuring adherence to industry regulations and best practices
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Credibility & Trust</h3>
                  </div>
                  <div className="card-content">
                    <p className="text-sm text-muted-foreground">
                      Building confidence with stakeholders and customers
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Quality Engineering</h3>
                  </div>
                  <div className="card-content">
                    <p className="text-sm text-muted-foreground">
                      End-to-end quality assurance throughout development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section - Spacing fixed */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto max-w-3xl text-center space-y-8">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Approach</h2>
              <p className="text-muted-foreground md:text-xl">
                Hrify Digital's user-centric Independent Certification solutions excel with behavior-driven black box testing, effectively addressing context difficulty, time constraints, and test boundary ambiguity.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We at Hrify Digital offer cutting-edge, Independent Certification service with behavior-driven black box testing, ensuring feature completion and timely software deployment, regardless of mainframe or cloud-native platforms. Our user-centric approach, coupled with our in-depth understanding of the latest technologies and industry best practices, creates a compelling production environment that fosters business growth. Through thorough testing, we meet all requirements, unlocking your software's fullest potential for successful implementation, and empowering your development team to make informed decisions, leading to more robust and reliable software. Trust Hrify Digital for reliable, high-quality certification services that empower businesses to excel.
              </p>
            </div>
          </div>
        </section>

        {/* Support Features Section - Original cards with fixed spacing */}
        <section className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Support Features
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="card">
                <div className="card-header">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B8DBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-4">
                    <path d="M21 2H3v16h5v4l4-4h5l4-4V2z"></path>
                    <path d="M9 10h.01M12 10h.01M15 10h.01"></path>
                  </svg>
                  <h3 className="card-title">Tailored Implementation</h3>
                  <div className="card-description">Transparent Standards Development</div>
                </div>
                <div className="card-content">
                  <p className="text-sm text-muted-foreground">
                    We involve key stakeholders, including clients, experts, and industry representatives, in developing and reviewing our certification standards. This transparency ensures that the standards are widely accepted and meet the industry's evolving needs.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B8DBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-4">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                  <h3 className="card-title">Regulatory Compliance</h3>
                  <div className="card-description">Our Clear Conflict of Interest Policy</div>
                </div>
                <div className="card-content">
                  <p className="text-sm text-muted-foreground">
                    We have a strict policy that prohibits any conflicts of interest among our evaluators and clients and guarantees the independence and impartiality of the certification process.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B8DBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-4">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <h3 className="card-title">Regulatory & Legal Compliance</h3>
                  <div className="card-description">Legal Consultation</div>
                </div>
                <div className="card-content">
                  <p className="text-sm text-muted-foreground">
                    Hrify Digital has legal experts on board who guide to ensure that the certification process complies with all relevant laws and regulations. We also address any liability concerns professionally.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B8DBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-4">
                    <path d="M21 7v6h-6"></path>
                    <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"></path>
                  </svg>
                  <h3 className="card-title">Versioning & Mutable Data Management</h3>
                  <div className="card-description">Streamlined Processes</div>
                </div>
                <div className="card-content">
                  <p className="text-sm text-muted-foreground">
                    Our expert team continuously reviews and optimizes our certification processes to ensure efficiency and minimize unnecessary steps, resulting in faster certification turnaround times.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B8DBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-4">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                    <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                    <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                    <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
                    <path d="M12 8v8"></path>
                    <path d="M8 12h8"></path>
                  </svg>
                  <h3 className="card-title">Communication & Coordination</h3>
                  <div className="card-description">Periodic Reviews</div>
                </div>
                <div className="card-content">
                  <p className="text-sm text-muted-foreground">
                    We at Hrify Digital regularly review and update our certification procedures to adapt to industry advancements and emerging challenges, maintaining the highest level of credibility.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B8DBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-4">
                    <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                    <path d="M8 21h8"></path>
                    <path d="M12 17v4"></path>
                  </svg>
                  <h3 className="card-title">Vendor Consolidation</h3>
                  <div className="card-description">Technology Adoption</div>
                </div>
                <div className="card-content">
                  <p className="text-sm text-muted-foreground">
                    Hrify Digital has embraced cutting-edge technology to improve data management, monitoring, and reporting capabilities. This ensures accuracy, transparency, and efficiency in the certification process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies CTA Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8">
              Quality Engineering Case Studies
            </h2>
            <a href="#" className="btn btn-primary mx-auto">
              View Case Studies
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </section>
      </main>

      {/* Bootstrap JS Bundle with Popper */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </main>
  );
};

export default IndependentCertification;


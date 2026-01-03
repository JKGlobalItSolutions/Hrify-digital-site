import React from 'react';
const Cloudnativebanner = '/assets/images/cloud-native-banner.webp';
const AwsImage1 = '/assets/images/aws-image-1.webp';



const AWS = () => {
  return (
    <main>
      {/* Banner section */}
      <div className="banner container-fluid">
        <div className="row h-100">
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center text-light">
            <h2 className="fw-bolder text-center">AWS Services Implementation</h2>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={AwsImage1} alt="" />
          </div>
        </div>
      </div>
      <style>
        {`
          .banner {
            background-image: url(${Cloudnativebanner});
            height: 600px;
          }
          h2 {
            font-size: 36px;
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

      {/* Content Section */}
      <section className="py-5 bg-white text-center">
        <div className="container py-4">
          <h2 className="display-5 text-primary fw-bold mb-4">AWS Services Implementation</h2>
          <p className="lead text-muted mx-auto mb-3" style={{ maxWidth: '800px' }}>
            Leverage the Power of Amazon Web Services for Scalable Cloud Solutions
          </p>
          <p className="text-muted mx-auto mb-5" style={{ maxWidth: '900px' }}>
            AWS offers a comprehensive suite of cloud services that can transform your business operations. Our expert team helps you implement, migrate to, and optimize AWS services for maximum efficiency and cost savings.
          </p>

          <p className="text-dark mx-auto mb-5" style={{ maxWidth: '900px' }}>
            At JK Global IT Solutions, we provide end-to-end AWS implementation services, from initial assessment and migration planning to deployment and ongoing management. Our certified AWS professionals ensure your cloud infrastructure is secure, scalable, and cost-effective.
          </p>

          {/* Feature Section */}
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-cloud"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">Cloud Migration</h4>
                <p className="text-muted">Seamless migration of your applications and data to AWS cloud infrastructure.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-server"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">Infrastructure Setup</h4>
                <p className="text-muted">Design and implementation of scalable AWS infrastructure components.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">Security Implementation</h4>
                <p className="text-muted">AWS security best practices and compliance framework implementation.</p>
              </div>
            </div>
          </div>

          {/* Additional Content Section */}
          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">Cost Optimization</h4>
                <p className="text-muted">AWS cost management and optimization strategies for maximum ROI.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-tools"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">DevOps Integration</h4>
                <p className="text-muted">CI/CD pipeline setup and automation using AWS developer tools.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <div className="icon-wrapper">
                  <i className="fas fa-headset"></i>
                </div>
                <h4 className="text-primary fw-semibold mb-3">24/7 Monitoring</h4>
                <p className="text-muted">Continuous monitoring and support for your AWS environment.</p>
              </div>
            </div>
          </div>

          <p className="text-dark mx-auto mt-5" style={{ maxWidth: '900px' }}>
            Our AWS implementation services help businesses of all sizes harness the full potential of cloud computing. From startups to enterprises, we provide tailored solutions that drive innovation and growth.
          </p>

          {/* CTA Section */}
          <div className="mt-5">
            <a href="#" className="btn btn-danger btn-lg px-5 py-3 fw-bold rounded-pill">Implement AWS Solutions</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AWS;

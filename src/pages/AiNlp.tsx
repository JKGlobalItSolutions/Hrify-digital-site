import React from 'react';
const BannerImage = '/assets/images/newBanner/data.an1.webp';
const NlpAiImg = '/assets/images/Banner/newbanimg/NLP-ai.webp';


const AiNlp = () => {
  return (
    <main>
      {/* Full-width Banner Image */}
      <div className="banner-full-image">
        <img src={BannerImage} alt="AI & NLP Banner" className="banner-img" />
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
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .image-showcase {
              display: flex;
              justify-content: center;
              margin: 3rem 0;
            }

            .image-showcase img {
              max-width: 700px;
              width: 100%;
              height: auto;
              border-radius: 16px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            }

            @media (max-width: 768px) {
              .image-showcase img {
                max-width: 500px;
              }
            }

            @media (max-width: 576px) {
              .image-showcase img {
                max-width: 100%;
              }
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: white;
              border-radius: 16px;
              padding: 2.5rem 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
            }

            .icon-wrapper {
              width: 80px;
              height: 80px;
              background: #1B8DBB;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 1.5rem;
            }

            .icon-wrapper i {
              font-size: 2.2rem;
              color: white;
            }

            .feature-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}
        </style>

        {/* Hero Section Below Banner */}
        <div className="text-center">
          <h1 className="main-title">
            Elevate Your Business Success With AI & NLP
          </h1>
          <p className="main-subtitle">
            Empower your enterprise with AI-based intelligent automation and smarter insights.
          </p>

          <div className="image-showcase">
            <img src="https://via.placeholder.com/600x400" alt="AI & NLP Solutions" />
          </div>

          <p className="main-subtitle">
            Unlock the potential of AI with our advanced NLP services to automate data analytics, anomaly detection, and extract valuable insights from unstructured data. Our intelligent solutions improve efficiency and decision-making while maintaining data security and ethical AI practices.
          </p>

          <p className="main-subtitle">
            Our AI/NLP solutions enhance business capabilities by leveraging automation, real-time insights, and smart decision-making. Whether you're looking for AI-driven chatbots, fraud detection, or data privacy solutions, we ensure high accuracy, efficiency, and ethical AI standards.
          </p>
        </div>

        {/* Key Features Section */}
        <section className="section" style={{ backgroundColor: '#E8F4FA' }}>
          <div className="container">
            <h2 className="section-title">Key Capabilities</h2>

            <div className="features-grid">
              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-microchip"></i>
                </div>
                <h4>API & SDK</h4>
                <p>Seamlessly integrate AI capabilities into your business with easy-to-use APIs & SDKs.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-comment-alt"></i>
                </div>
                <h4>Language Generation</h4>
                <p>Generate high-quality text responses with advanced NLP models.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-brain"></i>
                </div>
                <h4>Cognitive AI Computing</h4>
                <p>Utilize AI-driven cognitive computing for smarter decision-making.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-comments"></i>
                </div>
                <h4>Multilingual Chatbot</h4>
                <p>Understand and respond in multiple languages with NLP-powered chatbots.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-eye"></i>
                </div>
                <h4>Visual Monitoring</h4>
                <p>Enhance security by analyzing real-time video feeds with AI.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-user-shield"></i>
                </div>
                <h4>Fake Content Detection</h4>
                <p>Identify fraudulent users and misinformation with AI-driven analysis.</p>
              </div>
            </div>

            <a href="#contact" className="cta-button">
              Book a Meeting
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready to Harness AI & NLP?</h2>
            <p>Let us build intelligent, language-powered solutions that transform your business.</p>
            <a href="#contact" className="btn-white">
              Schedule a Consultation
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AiNlp;

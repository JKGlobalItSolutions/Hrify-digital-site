import React, { useEffect } from 'react';
import './Home.css';
import { getAssetPath } from '../utils/assetPath';

const AIML = getAssetPath('assets/images/HomeSlider/AI&ML.png');
const BlockChain = getAssetPath('assets/images/HomeSlider/BlockChain.png');
const BusinessSolutions = getAssetPath('assets/images/HomeSlider/BusinessSolutions.png');
const CyberSecurity = getAssetPath('assets/images/HomeSlider/CyberSecurity.png');
const DesignDevelopment = getAssetPath('assets/images/HomeSlider/Design&Development.png');
const Enterprise = getAssetPath('assets/images/HomeSlider/Enterprise.png');
const ManagedService = getAssetPath('assets/images/HomeSlider/ManagedService.png');
const NetworkingSolutions = getAssetPath('assets/images/HomeSlider/NetworkingSolutions.png');
const QualityEngineering = getAssetPath('assets/images/HomeSlider/QualityEngineering.png');
const Img32 = getAssetPath('assets/images/Talent/img3-(2).webp');
const Im7 = getAssetPath('assets/images/Talent/im7.webp');
const Icon32 = getAssetPath('assets/images/Talent/icon3-(2).webp');
const Icon42 = getAssetPath('assets/images/Talent/icon4-(2).webp');
const Icon52 = getAssetPath('assets/images/Talent/icon5-(2).webp');
const Icon62 = getAssetPath('assets/images/Talent/icon6-(2).webp');
const OurDigitalImg = getAssetPath('assets/images/OurDigital.png');

const Home = () => {
  useEffect(() => {
    // Slider script
    const slides = document.querySelector('.slides') as HTMLElement;
    if (!slides) return;
    const slideCount = document.querySelectorAll('.slide').length;
    const slideWidth = 100;
    let currentIndex = 0;
    let slideInterval: ReturnType<typeof setInterval>;

    const goToSlide = (index: number) => {
      slides.style.transition = 'transform 0.5s ease';
      slides.style.transform = `translateX(-${index * slideWidth}%)`;
      currentIndex = index;
      if (index >= slideCount / 2) {
        setTimeout(() => {
          slides.style.transition = 'none';
          slides.style.transform = 'translateX(0)';
          currentIndex = 0;
        }, 500);
      }
    };

    const nextSlide = () => {
      goToSlide(currentIndex + 1);
    };

    const prevSlide = () => {
      if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
      } else {
        slides.style.transition = 'none';
        slides.style.transform = `translateX(-${(slideCount / 2 - 1) * slideWidth}%)`;
        currentIndex = slideCount / 2 - 1;
        setTimeout(() => {
          slides.style.transition = 'transform 0.5s ease';
          goToSlide(currentIndex - 1);
        }, 0);
      }
    };

    const startSlideShow = () => {
      slideInterval = setInterval(nextSlide, 6000);
    };

    const stopSlideShow = () => {
      clearInterval(slideInterval);
    };

    document.querySelector('.next')?.addEventListener('click', () => {
      nextSlide();
      stopSlideShow();
      startSlideShow();
    });

    document.querySelector('.prev')?.addEventListener('click', () => {
      prevSlide();
      stopSlideShow();
      startSlideShow();
    });

    startSlideShow();

    return () => {
      stopSlideShow();
    };
  }, []);

  return (
    <div>
      {/* Banner section */}
      <div className="slider">
        <div className="slides">
          <div className="slide"><img src={DesignDevelopment} alt="Design & Development" /></div>
          <div className="slide"><img src={BusinessSolutions} alt="Business Solutions" /></div>
          <div className="slide"><img src={CyberSecurity} alt="Cyber Security" /></div>
          <div className="slide"><img src={NetworkingSolutions} alt="Networking Solutions" /></div>
          <div className="slide"><img src={BlockChain} alt="Block Chain" /></div>
          <div className="slide"><img src={Enterprise} alt="Enterprise" /></div>
          <div className="slide"><img src={ManagedService} alt="Managed Service" /></div>
          <div className="slide"><img src={AIML} alt="AI & ML" /></div>
          <div className="slide"><img src={QualityEngineering} alt="Quality Engineering" /></div>
          {/* Duplicates for seamless scrolling */}
          <div className="slide"><img src={DesignDevelopment} alt="Design & Development" /></div>
          <div className="slide"><img src={BusinessSolutions} alt="Business Solutions" /></div>
          <div className="slide"><img src={CyberSecurity} alt="Cyber Security" /></div>
          <div className="slide"><img src={NetworkingSolutions} alt="Networking Solutions" /></div>
          <div className="slide"><img src={BlockChain} alt="Block Chain" /></div>
          <div className="slide"><img src={Enterprise} alt="Enterprise" /></div>
          <div className="slide"><img src={ManagedService} alt="Managed Service" /></div>
          <div className="slide"><img src={AIML} alt="AI & ML" /></div>
          <div className="slide"><img src={QualityEngineering} alt="Quality Engineering" /></div>
        </div>
        <button className="nav-button prev">&#10094;</button>
        <button className="nav-button next">&#10095;</button>
      </div>

      {/* Content Sections */}
      <div className="container p-4">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8">
            <h3 className="fw-bolder" style={{ color: '#1B8DBB' }}>Software Development</h3> <br/>
            <p style={{ fontFamily: 'urbanist' }}>
              Our Software Development Services turn your ideas into innovative, functional, and scalable solutions tailored to your business needs. We provide end-to-end services, including requirements analysis, design, development, testing, and deployment, ensuring a seamless process. Using the latest technologies and agile methodologies, we deliver secure, efficient, and user-friendly software. Whether you need custom applications, system integration, or software enhancements, our solutions are designed to streamline operations, boost productivity, and drive business success.
            </p>
          </div>
          <div className="col-12 col-lg-4">
            <img className="img-fluid" src={Img32} alt="" />
          </div>
        </div>
      </div>

      {/* More sections can be added here */}

      {/* Our Digital Services Image */}
      <div className="container mt-5">
        <img src={OurDigitalImg} alt="Our Digital Services" className="img-fluid" />
      </div>

      {/* Why Choose Us */}
      <div className="container p-lg-5 p-3">
        <h3 className="text-center fw-bolder" style={{ color: '#1B8DBB' }}>Why Choose Us?</h3>
        <div className="row align-items-center">
          <div className="col-12 col-lg-8">
            <p className="fw-bolder" style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', color: '#1B8DBB' }}></i> &nbsp;Commitment to core values and mission empowers clients with effective solutions.
            </p>
            <p className="fw-bolder" style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', color: '#1B8DBB' }}></i> &nbsp; Maintaining client trust and delivering exceptional results consistently.
            </p>
            <p className="fw-bolder" style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', color: '#1B8DBB' }}></i> &nbsp;Skilled experts and established processes ensure efficient business support.
            </p>
            <p className="fw-bolder" style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', color: '#1B8DBB' }}></i> &nbsp;Prioritizing clients' technological investments for optimal outcomes.
            </p>
            <p className="fw-bolder" style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', color: '#1B8DBB' }}></i> &nbsp;Leading software development company in Tiruvannamalai, dedicated to client satisfaction.
            </p>
          </div>
          <div className="col-12 col-lg-4 text-center">
            <img className="img-fluid col-9 text-end" src={Im7} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

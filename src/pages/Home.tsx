import React, { useEffect } from 'react';
import './Home.css';
import Frame1293 from '../../public/assets/images/HomeSlider/Frame 1293.png';
import Frame1291 from '../../public/assets/images/HomeSlider/Frame 1291.png';
import Frame1290 from '../../public/assets/images/HomeSlider/Frame 1290.png';
import Frame1292 from '../../public/assets/images/HomeSlider/Frame 1292.png';
import Frame1294 from '../../public/assets/images/HomeSlider/Frame 1294.png';
import Img32 from '../../public/assets/images/Talent/img3-(2).webp';
import Im7 from '../../public/assets/images/Talent/im7.webp';
import Icon32 from '../../public/assets/images/Talent/icon3-(2).webp';
import Icon42 from '../../public/assets/images/Talent/icon4-(2).webp';
import Icon52 from '../../public/assets/images/Talent/icon5-(2).webp';
import Icon62 from '../../public/assets/images/Talent/icon6-(2).webp';
import OurDigitalImg from '../../public/assets/images/OurDigital.png';

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
          <div className="slide"><img src={Frame1293} alt="Frame 1293" /></div>
          <div className="slide"><img src={Frame1291} alt="Frame 1291" /></div>
          <div className="slide"><img src={Frame1290} alt="Frame 1290" /></div>
          <div className="slide"><img src={Frame1292} alt="Frame 1292" /></div>
          <div className="slide"><img src={Frame1294} alt="Frame 1294" /></div>
          {/* Duplicates for seamless scrolling */}
          <div className="slide"><img src={Frame1293} alt="Frame 1293" /></div>
          <div className="slide"><img src={Frame1291} alt="Frame 1291" /></div>
          <div className="slide"><img src={Frame1290} alt="Frame 1290" /></div>
          <div className="slide"><img src={Frame1292} alt="Frame 1292" /></div>
          <div className="slide"><img src={Frame1294} alt="Frame 1294" /></div>
        </div>
        <button className="nav-button prev">&#10094;</button>
        <button className="nav-button next">&#10095;</button>
      </div>

      {/* Content Sections */}
      <div className="container p-4">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8">
            <h3 className="fw-bolder" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Software Development</h3>
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
        <h3 className="text-center fw-bolder" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Why Choose Us?</h3>
        <div className="row align-items-center">
          <div className="col-12 col-lg-8">
            <p className="fw-bolder" style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp;Commitment to core values and mission empowers clients with effective solutions.
            </p>
            <p className="fw-bolder" style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Maintaining client trust and delivering exceptional results consistently.
            </p>
            <p className="fw-bolder" style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp;Skilled experts and established processes ensure efficient business support.
            </p>
            <p className="fw-bolder" style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp;Prioritizing clients' technological investments for optimal outcomes.
            </p>
            <p className="fw-bolder" style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp;Leading software development company in Tiruvannamalai, dedicated to client satisfaction.
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


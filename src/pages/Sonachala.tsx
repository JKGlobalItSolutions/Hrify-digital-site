import React from 'react';
import './Sonachala.css'; // Assuming we might need CSS
const Logo = '/assets/images/sonachala/logo.webp';
const Revenue = '/assets/images/sonachala/revenune.webp';
const Engine = '/assets/images/sonachala/Engine.webp';
const Tech = '/assets/images/sonachala/tech.webp';
const Travel = '/assets/images/sonachala/traval.webp';
const Facility = '/assets/images/sonachala/Facility.webp';
const Ota = '/assets/images/sonachala/ota.webp';

const Sonachala = () => {
  return (
    <div className="sonachala-container">
      <div className="hero-section">
        <div className="hero-text">
          <h1 style={{ color: 'green' }}>Hotel Revenue Management Solutions</h1>
        </div>
        <div className="hero-logo">
          <img src={Logo} alt="Sonachala Logo" />
        </div>
      </div>

      <section className="section">
        <div className="content">
          <h2>Revenue Management</h2>
          <p>Sonachala equips hotels with intelligent pricing strategies to maximize revenue while maintaining high occupancy rates. Our system analyzes market demand, seasonal trends, and competitor pricing in real time.</p>
          <p>Whether it's peak season or a slow period, dynamic pricing ensures that your rooms are always competitively priced — attracting more guests without sacrificing profitability.</p>
          <p>Our platform empowers hoteliers to adjust rates instantly, run promotions, and monitor performance from a single dashboard. Make every room night count with data-driven decision-making.</p>
          <ul>
            <li>✅ Dynamic pricing based on demand and competition</li>
            <li>✅ Automated seasonal and event-based rate adjustments</li>
            <li>✅ Real-time performance tracking and insights</li>
            <li>✅ Maximize occupancy without undercutting revenue</li>
          </ul>
        </div>
        <img src={Revenue} alt="Revenue Management" />
      </section>

      <section className="section">
        <img src={Engine} alt="Hotel Booking Engine" />
        <div className="content">
          <h2>Hotel Booking Engine</h2>
          <p>Sonachala's next-generation booking engine helps hotels capture direct bookings with ease. From quick searches to instant reservations, every step is optimized for speed, convenience, and conversion.</p>
          <p>Guests can view real-time room availability, compare options, and lock in their stay within seconds. Transparent pricing, secure payments, and instant confirmations ensure a frictionless booking experience.</p>
          <p>Whether you run a boutique property or a chain of hotels, our booking engine integrates seamlessly into your website, allowing you to sell rooms 24/7 without relying solely on third-party platforms.</p>
          <ul>
            <li>⚡ Lightning-fast search & booking in under a minute</li>
            <li>📅 Live availability synced with hotel inventory</li>
            <li>🔐 Secure, multi-option payments (UPI, Cards, Wallets)</li>
            <li>📩 Instant confirmation via email & SMS</li>
            <li>📲 Fully responsive design for mobile & desktop users</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="content">
          <h2>Software</h2>
          <p>Sonachala's integrated Property Management System (PMS) and Channel Manager help hotels streamline operations, manage bookings, and boost revenue — all from a single platform.</p>
          <p>Our PMS handles reservations, guest profiles, billing, and housekeeping tasks with ease, while the Channel Manager syncs your inventory across OTAs like Booking.com, Expedia, and Agoda in real time — eliminating overbookings and manual updates.</p>
          <p>With automation, smart reporting, and a user-friendly dashboard, you can focus on delivering exceptional guest experiences while our software handles the heavy lifting.</p>
          <ul>
            <li>⚡ Centralized dashboard for all hotel operations</li>
            <li>🔄 Real-time OTA sync to avoid double bookings</li>
            <li>📊 Revenue reports, occupancy stats, and performance insights</li>
            <li>💳 Integrated billing & payment processing</li>
            <li>📱 Mobile-friendly interface for on-the-go management</li>
          </ul>
        </div>
        <img src={Tech} alt="Software" />
      </section>

      <section className="section">
        <img src={Travel} alt="Technology Services" />
        <div className="content">
          <h2>Technology Services</h2>
          <p>We provide businesses with cutting-edge technology services to help them grow, scale, and stay competitive in the digital era. From building powerful websites and mobile apps to creating impactful marketing campaigns, our solutions are designed for success.</p>
          <p>Our expert team delivers secure, scalable, and high-performance systems — ensuring your business operates smoothly, reaches the right audience, and stays ahead in the market.</p>
          <ul>
            <li>💻 Custom Website Design & Development</li>
            <li>📱 Android & iOS Mobile App Development</li>
            <li>📣 Digital Marketing (SEO, Social Media, Paid Ads)</li>
            <li>🌐 Networking & IT Infrastructure Solutions</li>
            <li>🛠️ Ongoing Maintenance & Technical Support</li>
            <li>📊 Data Analytics & Performance Tracking</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="content">
          <h2>Hotel Facility Booking Engine</h2>
          <p>Our advanced booking engine goes beyond room reservations — it lets guests instantly book hotel facilities like conference halls, banquet spaces, spas, gyms, and other amenities with ease.</p>
          <p>Designed for speed, transparency, and convenience, the system allows guests to view real-time availability, select services, and confirm their bookings in just a few clicks — whether on desktop or mobile.</p>
          <p>For hoteliers, the platform centralizes facility management, prevents double bookings, and provides analytics to optimize usage and maximize revenue from every service offered.</p>
          <ul>
            <li>🏨 Real-time facility availability and instant booking</li>
            <li>📅 Calendar-based scheduling for events and amenities</li>
            <li>💳 Secure payment integration for add-on services</li>
            <li>📊 Usage reports and revenue tracking for facilities</li>
            <li>📲 Mobile-friendly interface for guests and staff</li>
          </ul>
        </div>
        <img src={Facility} alt="Hotel Facility Booking Engine" />
      </section>

      <section className="section">
        <img src={Ota} alt="OTA Management" />
        <div className="content">
          <h2>OTA Management</h2>
          <p>Sonachala's OTA Management solution enables hotels, resorts, and homestays to efficiently manage their presence across multiple online travel agencies from a single, unified platform.</p>
          <p>Our system updates room rates, availability, and promotions in real-time, ensuring accuracy across all channels while preventing overbookings and missed opportunities.</p>
          <p>With detailed analytics, revenue optimization tools, and centralized communication, you can grow your bookings and maintain a consistent brand presence across global platforms.</p>
          <ul>
            <li>🌍 Multi-OTA connectivity from a single dashboard</li>
            <li>🔄 Real-time inventory & pricing synchronization</li>
            <li>📊 Channel performance reports & analytics</li>
            <li>💹 Revenue optimization & promotional tools</li>
            <li>✅ Automatic booking updates to prevent double bookings</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Sonachala;

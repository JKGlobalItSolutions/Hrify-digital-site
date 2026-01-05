import React from 'react';
import { getAssetPath } from '../utils/assetPath';

const SonachalaLogo = getAssetPath('assets/images/Products/sonachala-logo.png');
const Img2 = getAssetPath('assets/images/Products/img2.png');
const Img3 = getAssetPath('assets/images/Products/img3.png');
const Img4 = getAssetPath('assets/images/Products/img4.png');
const Img5 = getAssetPath('assets/images/Products/img5.png');
const Img6 = getAssetPath('assets/images/Products/img6.png');
const Img7 = getAssetPath('assets/images/Products/img7.png');
const Img8 = getAssetPath('assets/images/Products/img8.png');

const Sonachala: React.FC = () => {
    return (
        <>
            <div
                className="mb-5"
                style={{
                    background: "linear-gradient(135deg, #038A5F, #012419)",
                    minHeight: "clamp(300px, 45vh, 450px)",
                    padding: "2rem 0"
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-center">

                        {/* LEFT IMAGE */}
                        <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                            <img
                                src={SonachalaLogo}
                                alt="Hotel"
                                style={{
                                    width: "100%",
                                    maxWidth: "350px",
                                    height: "auto",
                                    objectFit: "contain",
                                    borderRadius: "12px"
                                }}
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="col-lg-6 col-md-12 d-flex align-items-center">
                            <div className="text-white text-center text-lg-start px-3 px-lg-0">
                                <h1 style={{
                                    fontWeight: "600",
                                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                                    lineHeight: "1.2"
                                }}>
                                    Hotel Revenue Management Solutions
                                </h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div
                style={{
                    minHeight: "clamp(300px, 45vh, 450px)",
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-start align-items-lg-center">

                        {/* LEFT CONTENT – 8 COLUMNS */}
                        <div className="col-lg-8 col-md-12 text-dark">
                            <h3 style={{ fontWeight: "600", marginBottom: "12px", color: "#038A5F" }}>
                                <b>Revenue Management</b>
                            </h3>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>
                                Sonachala equips hotels with intelligent pricing strategies
                                to maximize revenue while maintaining high occupancy rates.
                                Our system analyzes market demand, seasonal trends, and
                                competitor pricing in real time.
                            </p>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>
                                Whether it's peak season or a slow period, dynamic pricing
                                ensures that your rooms are always competitively priced —
                                attracting more guests without sacrificing profitability.
                            </p>

                            <p style={{ lineHeight: "1.7", opacity: 0.95, marginBottom: 0 }}>
                                Our platform empowers hoteliers to adjust rates instantly,
                                run promotions, and monitor performance from a single
                                dashboard. Make every room night count with data-driven
                                decision-making.
                            </p>
                        </div>

                        {/* RIGHT IMAGE – 4 COLUMNS */}
                        <div className="col-lg-4 col-md-12 text-center">
                            <img
                                src={Img2}
                                alt="Revenue Management"
                                style={{
                                    width: "100%",
                                    height: "clamp(200px, 25vh, 300px)",
                                    objectFit: "contain",
                                    borderRadius: "12px"
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid p-4 mb-5" style={{ color: "white", background: "linear-gradient(135deg, #038A5F, #012419)", }} >
                <p>
                    ✅ Dynamic pricing based on demand and competition ✅ Automated seasonal and event-based rate adjustments ✅ Real-time performance tracking and insights ✅ Maximize occupancy without undercutting revenue
                </p>
            </div>

            <div
                style={{
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-start align-items-lg-center">

                        {/* RIGHT IMAGE – 4 COLUMNS */}
                        <div className="col-lg-4 col-md-12 text-center">
                            <img
                                src={Img3}
                                alt="Revenue Management"
                                style={{
                                    width: "100%",
                                    height: "clamp(200px, 25vh, 300px)",
                                    objectFit: "contain",
                                    borderRadius: "12px"
                                }}
                            />
                        </div>

                        {/* LEFT CONTENT – 8 COLUMNS */}
                        <div className="col-lg-8 col-md-12 text-dark">
                            <h3 style={{ fontWeight: "600", marginBottom: "12px", color: "#038A5F" }}>
                                <b>Booking Engine</b>
                            </h3>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>
                                Sonachala's next-generation booking engine helps hotels capture direct bookings with ease. From quick searches to instant reservations, every step is optimized for speed, convenience, and conversion.
                            </p>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>Guests can view real-time room availability, compare options, and lock in their stay within seconds. Transparent pricing, secure payments, and instant confirmations ensure a frictionless booking experience.</p>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>Whether you run a boutique property or a chain of hotels, our booking engine integrates seamlessly into your website, allowing you to sell rooms 24/7 without relying solely on third-party platforms.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid p-4 mt-5 mb-5" style={{ color: "white", background: "linear-gradient(135deg, #038A5F, #012419)", }} >
                <p>
                    ⚡ Lightning-fast search & booking in under a minute    📅 Live availability synced with hotel inventory 🔐 Secure, multi-option payments (UPI, Cards, Wallets)📩 Instant confirmation via email & SMS 📲 Fully responsive design for mobile & desktop users
                </p>
            </div>

            <div
                style={{
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-start align-items-lg-center">

                        {/* LEFT CONTENT – 8 COLUMNS */}
                        <div className="col-lg-8 col-md-12 text-dark">
                            <h3 style={{ fontWeight: "600", marginBottom: "12px", color: "#038A5F" }}>
                                <b>Software</b>
                            </h3>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>
                                Sonachala's integrated Property Management System (PMS) and Channel Manager help hotels streamline operations, manage bookings, and boost revenue — all from a single platform.</p>
                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>Our PMS handles reservations, guest profiles, billing, and housekeeping tasks with ease, while the Channel Manager syncs your inventory across OTAs like Booking.com, Expedia, and Agoda in real time — eliminating overbookings and manual updates.</p>
                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>With automation, smart reporting, and a user-friendly dashboard, you can focus on delivering exceptional guest experiences while our software handles the heavy lifting.
                            </p>
                        </div>

                        {/* RIGHT IMAGE – 4 COLUMNS */}
                        <div className="col-lg-4 col-md-12 text-center">
                            <img
                                src={Img4}
                                alt="Revenue Management"
                                style={{
                                    width: "100%",
                                    height: "clamp(200px, 25vh, 300px)",
                                    objectFit: "contain",
                                    borderRadius: "12px"
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid p-4 mt-5 mb-5" style={{ color: "white", background: "linear-gradient(135deg, #038A5F, #012419)", }} >
                <p>
                    ⚡ Centralized dashboard for all hotel operations 🔄 Real-time OTA sync to avoid double bookings 📊 Revenue reports, occupancy stats, and performance insights💳 Integrated billing & payment processing 📱 Mobile-friendly interface for on-the-go management
                </p>
            </div>

            <div
                style={{
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-start align-items-lg-center">

                        {/* RIGHT IMAGE – 4 COLUMNS */}
                        <div className="col-lg-4 col-md-12 text-center">
                            <img
                                src={Img5}
                                alt="Revenue Management"
                                style={{
                                    width: "100%",
                                    height: "300px",
                                    objectFit: "contain",
                                    borderRadius: "12px"
                                }}
                            />
                        </div>

                        {/* LEFT CONTENT – 8 COLUMNS */}
                        <div className="col-lg-8 col-md-12 text-dark">
                            <h3 style={{ fontWeight: "600", marginBottom: "12px", color: "#038A5F" }}>
                                <b>Tech Solutions</b>
                            </h3>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>
                                We provide businesses with cutting-edge technology services to help them grow, scale, and stay competitive in the digital era. From building powerful websites and mobile apps to creating impactful marketing campaigns, our solutions are designed for success.</p>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>Our expert team delivers secure, scalable, and high-performance systems — ensuring your business operates smoothly, reaches the right audience, and stays ahead in the market.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid p-4 mt-5 mb-5" style={{ color: "white", background: "linear-gradient(135deg, #038A5F, #012419)", }} >
                <p>
                    💻 Custom Website Design & Development 📱 Android & iOS Mobile App  evelopment 📣 Digital Marketing (SEO, Social Media, Paid Ads)🌐 Networking & IT Infrastructure Solutions 🛠️ Ongoing Maintenance & Technical Support 📊 Data Analytics & Performance Tracking
                </p>
            </div>

            <div
                style={{
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-start align-items-lg-center">

                        {/* LEFT CONTENT – 8 COLUMNS */}
                        <div className="col-lg-8 col-md-12 text-dark">
                            <h3 style={{ fontWeight: "600", marginBottom: "12px", color: "#038A5F" }}>
                                <b>Hotel Facility Booking Engine</b>
                            </h3>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>
                                Our advanced booking engine goes beyond room reservations — it lets guests instantly book hotel facilities like conference halls, banquet spaces, spas, gyms, and other amenities with ease.</p>
                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>Designed for speed, transparency, and convenience, the system allows guests to view real-time availability, select services, and confirm their bookings in just a few clicks — whether on desktop or mobile.</p>
                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>For hoteliers, the platform centralizes facility management, prevents double bookings, and provides analytics to optimize usage and maximize revenue from every service offered.
                            </p>
                        </div>

                        {/* RIGHT IMAGE – 4 COLUMNS */}
                        <div className="col-lg-4 col-md-12 text-center">
                            <img
                                src={Img6}
                                alt="Revenue Management"
                                style={{
                                    width: "100%",
                                    height: "300px",
                                    objectFit: "contain",
                                    borderRadius: "12px"
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid p-4" style={{ color: "white", background: "linear-gradient(135deg, #038A5F, #012419)", }} >
                <p>
                    🏨 Real-time facility availability and instant booking 📅 Calendar-based scheduling for events and amenities 💳 Secure payment integration for add-on services 📊 Usage reports and revenue tracking for facilities 📲 Mobile-friendly interface for guests and staff
                </p>
            </div>

            <div
                style={{
                    height: "450px",
                    marginBottom: "20px"
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-start align-items-lg-center">

                        {/* RIGHT IMAGE – 4 COLUMNS */}
                        <div className="col-lg-4 col-md-12 text-center">
                            <img
                                src={Img7}
                                alt="Revenue Management"
                                style={{
                                    width: "100%",
                                    height: "300px",
                                    objectFit: "contain",
                                    borderRadius: "12px"
                                }}
                            />
                        </div>

                        {/* LEFT CONTENT – 8 COLUMNS */}
                        <div className="col-lg-8 col-md-12 text-dark">
                            <h3 style={{ fontWeight: "600", marginBottom: "12px", color: "#038A5F" }}>
                                <b>OTA Management</b>
                            </h3>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>
                                Sonachala provides a powerful OTA (Online Travel Agency) management system designed to help hotels and resorts efficiently manage listings, pricing, and availability across multiple online channels — all from one centralized platform.Our tools ensure real-time updates to room inventory, rates, and promotions, eliminating overbookings and manual updates. Whether you manage one property or a large chain, our OTA management system simplifies distribution while boosting bookings.</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid p-4" style={{ color: "white", background: "linear-gradient(135deg, #038A5F, #012419)", }} >
                <p>
                    🔄 Centralized control for all OTA listings 📊 Real-time rate & availability synchronization 💹 Dynamic pricing tools to maximize revenue 🌍 Increased visibility across global booking platforms ✅ Automated booking updates to prevent overbooking
                </p>
            </div>

            <div
                style={{
                    height: "450px",
                    marginBottom: "20px"
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-start align-items-lg-center">

                        {/* LEFT CONTENT – 8 COLUMNS */}
                        <div className="col-lg-8 col-md-12 text-dark">
                            <h3 style={{ fontWeight: "600", marginBottom: "12px", color: "#038A5F" }}>
                                <b>Online Travel Agent Management</b>
                            </h3>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>
                                Sonachala's OTA Management solution enables hotels, resorts, and homestays to efficiently manage their presence across multiple online travel agencies from a single, unified platform.Our system updates room rates, availability, and promotions in real-time, ensuring accuracy across all channels while preventing overbookings and missed opportunities. With detailed analytics, revenue optimization tools, and centralized communication, you can grow your bookings and maintain a consistent brand presence across global platforms.</p>
                        </div>

                        {/* RIGHT IMAGE – 4 COLUMNS */}
                        <div className="col-lg-4 col-md-12 text-center">
                            <img
                                src={Img8}
                                alt="Revenue Management"
                                style={{
                                    width: "100%",
                                    height: "300px",
                                    objectFit: "contain",
                                    borderRadius: "12px"
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid p-4" style={{ color: "white", background: "linear-gradient(135deg, #038A5F, #012419)", }} >
                <p>
                    🌍 Multi-OTA connectivity from a single dashboard 🔄 Real-time inventory & pricing synchronization 📊 Channel performance reports & analytics 💹 Revenue optimization & promotional tools ✅ Automatic booking updates to prevent double bookings
                </p>
            </div>

            <div className="text-center mt-5 mb-5 px-3">
                <h1 style={{
                    fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                    marginBottom: "1rem"
                }}>
                    <b>Want to Explore More?</b>
                </h1>
                <p style={{
                    textAlign:'center',
                    fontSize: "clamp(0.9rem, 3vw, 1.1rem)",
                    marginBottom: "2rem",
                    maxWidth: "600px",
                    margin: "0 auto 2rem"
                }}>
                    Visit our official website to browse properties, manage bookings, or become a partner
                </p>
                <a
                    href="https://sonachala.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "inline-block",
                        padding: "clamp(10px, 3vw, 15px) clamp(20px, 5vw, 40px)",
                        background: "linear-gradient(135deg, #038A5F, #012419)",
                        color: "#ffffff",
                        textDecoration: "none",
                        borderRadius: "50px",
                        fontWeight: "500",
                        fontSize: "clamp(0.9rem, 3vw, 1.1rem)",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                        transition: "all 0.3s ease",
                        minWidth: "200px"
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        const target = e.target as HTMLAnchorElement;
                        target.style.transform = "translateY(-2px)";
                        target.style.boxShadow = "0 6px 14px rgba(0,0,0,0.25)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        const target = e.target as HTMLAnchorElement;
                        target.style.transform = "translateY(0)";
                        target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
                    }}
                >
                    Go To Main Sonachala Site
                </a>
            </div>

            {/* Mobile Responsive Styles */}
            <style>{`
                /* Mobile Responsiveness */
                @media (max-width: 768px) {
                    /* Content sections padding and spacing */
                    .container h-100 .row {
                        padding: 1rem 0;
                    }

                    /* Section headings */
                    h3 {
                        font-size: clamp(1.2rem, 4vw, 1.5rem) !important;
                        margin-bottom: 1rem !important;
                    }

                    /* Paragraph text */
                    p {
                        font-size: clamp(0.85rem, 3vw, 1rem) !important;
                        line-height: 1.6 !important;
                    }

                    /* Feature list styling */
                    .container-fluid p {
                        font-size: clamp(0.8rem, 3vw, 0.95rem) !important;
                        line-height: 1.5 !important;
                        padding: 0.5rem 1rem !important;
                    }

                    /* Image containers */
                    .col-lg-4.col-md-12 {
                        margin-bottom: 2rem;
                    }

                    /* Content order adjustments for mobile */
                    .row.align-items-start.align-items-lg-center {
                        flex-direction: column-reverse;
                    }

                    .row.align-items-start.align-items-lg-center .col-lg-8 {
                        order: 2;
                        text-align: center !important;
                        margin-bottom: 2rem;
                    }

                    .row.align-items-start.align-items-lg-center .col-lg-4 {
                        order: 1;
                        margin-bottom: 2rem;
                    }

                    /* Specific adjustments for alternating layouts */
                    .row:nth-child(odd) .col-lg-8 {
                        order: 1 !important;
                    }

                    .row:nth-child(odd) .col-lg-4 {
                        order: 2 !important;
                    }

                    /* Banner section adjustments */
                    .mb-5 .container .row .col-lg-6 {
                        padding: 0 1rem;
                    }

                    /* Feature sections spacing */
                    .container-fluid.p-4.mb-5,
                    .container-fluid.p-4.mt-5.mb-5 {
                        padding: 2rem 1rem !important;
                    }

                    /* Section heights for mobile */
                    div[style*="minHeight"] {
                        min-height: auto !important;
                        padding: 3rem 0 !important;
                    }

                    /* Fixed height sections */
                    div[style*="height: 450px"] {
                        height: auto !important;
                        padding: 3rem 0 !important;
                    }

                    /* Image responsiveness */
                    img[style*="height: clamp"] {
                        height: clamp(150px, 30vh, 250px) !important;
                    }

                    img[style*="height: 300px"] {
                        height: clamp(150px, 25vh, 200px) !important;
                    }

                    /* Container padding adjustments */
                    .container.h-100 {
                        padding-left: 15px !important;
                        padding-right: 15px !important;
                    }
                }

                @media (max-width: 480px) {
                    /* Extra small screens */
                    .container-fluid p {
                        font-size: 0.8rem !important;
                        text-align: left !important;
                    }

                    /* Button full width on very small screens */
                    .text-center a[href="https://sonachala.com"] {
                        width: 100% !important;
                        max-width: 300px !important;
                        display: block !important;
                        margin: 0 auto !important;
                    }

                    /* Reduce padding further */
                    .container-fluid.p-4 {
                        padding: 1.5rem 1rem !important;
                    }

                    /* Banner section */
                    .mb-5 {
                        padding: 1rem 0 !important;
                    }

                    .mb-5 .container .row .col-lg-6 img {
                        max-width: 250px !important;
                    }
                }

                /* Tablet adjustments */
                @media (min-width: 769px) and (max-width: 1024px) {
                    .col-lg-8 {
                        padding: 0 2rem;
                    }

                    .col-lg-4 img {
                        max-height: 250px;
                    }
                }
            `}</style>
        </>
    );
};

export default Sonachala;

import React from "react";
const MobileAppImage = '/assets/images/mobile-app-image.webp';
const MobileImage2 = '/assets/images/mobile-image-2.webp';
const Rectangle27 = '/assets/images/Rectangle-27.webp';

const MobileApplication = () => {
  return (
    <main>
      {/* Banner section */}
      <div
        className="banner container-fluid"
        style={{
          backgroundImage: `url(${Rectangle27})`,
          height: "400px",
          backgroundColor: "#c2f379ff",
        }}
      >
        <div className="row h-100">
          <div className=" col-12 col-lg-6 d-flex justify-content-center align-items-center text-light">
            <h2 style={{ color: "black" }} className="fw-bolder">
              Mobile Application
            </h2>
            <style>
              {`
                h2 {
                  font-size: 50px;
                  color: black;
                }
                @media only screen and (max-width: 600px) {
                  h2 {
                    font-size: 30px;
                  }
                }
              `}
            </style>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              src={MobileAppImage}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Banner section */}
      {/* Content  Section*/}
      <div className="content container-fluid ">
        <div className="row h-100 justify-content-center align-items-center p-2 p-lg-2 mx-lg-5 mb-0">
          <div className="col-12 col-lg-8 d-flex flex-column justify-content-center ">
            <h1 style={{ textAlign: "justify" }}>
              Mobile Application Company In Chennai
            </h1>
            <p style={{ color: "#686D76" }}>
              JK Global IT Solutions, established in 2023, has emerged as a
              leading app development firm in Tiruvannamalai, serving a wide
              range of industries. With a proven track record of over 100+
              successful app development projects, we are recognized as a
              premier app development company in Tiruvannamalai. Our expertise
              extends to delivering innovative app solutions for startups,
              entrepreneurs, and enterprises worldwide.
              <br />
              <br />
              In today's digital age, mobile apps play a crucial role in
              connecting businesses with their customers and enhancing user
              experiences. For small businesses aiming to expand their reach and
              engage with users effectively, partnering with a reliable app
              development company like JK Global IT Solutions is essential. With
              our extensive experience in crafting high-quality, cost-effective
              app solutions, we are dedicated to helping your business excel in
              the mobile landscape.
            </p>
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-center">
            <img
              className="img-fluid"
              src={MobileImage2}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container" style={{ textAlign: "justify" }}>
        <h3 style={{ color: "#686D76" }}>
          Our three-step method is used in the development of mobile
          applications.
        </h3>
        <p style={{ color: "#686D76" }}>
          <i
            className="fa fa-circle-o"
            style={{ fontSize: "20px", background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          ></i>{""}
          Planning and Analysis This first phase entails gathering
          requirements, defining the scope of the project, performing market
          research and developing a thorough project plan. It comprises
          determining the app's goals, target audience, and important
          capabilities.
        </p>
        <p style={{ color: "#686D76"  }}>
          <i
            className="fa fa-circle-o"
            style={{ fontSize: "20px", background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          ></i>{""}
          Design & Development When the planning is finished, the design
          process begins. This involves UI/UX design, prototyping and developing
          wireframes. Development is the process of actually creating the
          software, integrating features, and assuring compatibility across
          various devices and platforms.
        </p>
        <p style={{ color: "#686D76" }}>
          <i
            className="fa fa-circle-o"
            style={{ fontSize: "20px", background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          ></i>{""}
          Testing and deployment. In this final phase, comprehensive
          testing is carried out to detect and resolve any faults or issues.
          This comprises functional and usability testing, performance testing,
          and security testing. Once testing is completed and the app fulfills
          quality standards, it is released to the appropriate app stores for
          customers to download and install.
        </p>
      </div>
    </main>
  );
};

export default MobileApplication;

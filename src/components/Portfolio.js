import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio py-5" id="portfolio">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5">Latest works</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="portfolio-item">
              <img
                src="../images/cv-app.png"
                className="2-100 img-thumbnail"
                alt="cv app"
              ></img>
              <h3 className="text-capitalize fs-5 my-2">CV app</h3>
              <p className="mb-4 ">
                <a href="#" className="text-danger text-decoration-none">
                  Live Demo
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="portfolio-item">
              <img
                src="./images/cv-app.png"
                className="2-100 img-thumbnail"
                alt="cv app"
              ></img>
              <h3 className="text-capitalize fs-5 my-2">CV app</h3>
              <p className="mb-4 ">
                <a href="#" className="text-danger text-decoration-none">
                  Live Demo
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="portfolio-item">
              <img
                src="./images/cv-app.png"
                className="2-100 img-thumbnail"
                alt="cv app"
              ></img>
              <h3 className="text-capitalize fs-5 my-2">CV app</h3>
              <p className="mb-4 ">
                <a href="#" className="text-danger text-decoration-none">
                  Live Demo
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="portfolio-item">
              <img
                src="./images/cv-app.png"
                className="2-100 img-thumbnail"
                alt="cv app"
              ></img>
              <h3 className="text-capitalize fs-5 my-2">CV app</h3>
              <p className="mb-4 ">
                <a href="#" className="text-danger text-decoration-none">
                  Live Demo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

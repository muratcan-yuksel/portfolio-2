import React from "react";

const About = () => {
  return (
    <section className="about  py-5" id="about">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5">About me</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="about-text">
              <h3 className="fs-4 mb-3">Lorem heyyo</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                quas cupiditate dolorum accusamus, possimus adipisci fugit
                deserunt natus obcaecati, assumenda inventore recusandae aliquam
                quam iusto accusantium corrupti voluptates, vero quia!
              </p>
            </div>
            <div className="row text-center text-uppercase my-3">
              <div className="col-sm-4">
                <div className="fact-item">
                  <h4>French</h4>
                  <p>Something</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="fact-item">
                  <h4>English</h4>
                  <p>Something</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="fact-item">
                  <h4 className="fact-item">Turkish</h4>
                  <p>Something</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex align-items-center">
                <a href="#" className="btn px-3 btn-danger me-5">
                  Download CV
                </a>
                <div className="social-links">
                  <a href="#" className="fab fa-twitter text-dark me-2"></a>
                  <a href="#" className="fab fa-github text-dark me-2"></a>
                  <a href="#" className="fab fa-linkedin-in text-dark me-2"></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <ul className="list-group">
              <li className="list-group-item bg-danger">HTML</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">JavaScript (ES6)</li>
              <li className="list-group-item">React.js</li>
              <li className="list-group-item">Bootstrap 5</li>
              <li className="list-group-item">Webpack</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

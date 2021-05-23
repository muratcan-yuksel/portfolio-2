import React from "react";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container-lg">
        <div className="row min-vh-100 mt-5">
          {/* <div className="col-md-6 mt-5 mt-md-0">
            <div className="home-img text-center">
              <img
                id="profile-img"
                className="rounded-circle "
                src="../images/pp.jpeg"
                alt="profile img"
              />
            </div>
          </div> */}
          <div className="col-md-12 mt-5 mt-md-0 order-md-first">
            <div className="home-text">
              <p className="text-muted mb-1">I'm a</p>
              <h1 className="text-danger text-uppercase fs-1 fw-bold">
                Web developer
              </h1>
              <h2 className="fs-4">Murat Can Yüksel</h2>
              <p className="mt-4 text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                officiis dolores et voluptates. Eos, dolor! Veniam, praesentium.
                Ab beatae enim porro dolores. Expedita repellendus nobis
                obcaecati voluptatem. Accusantium, fugit veniam?
              </p>
              <a className="btn btn-danger px-3 mt-3" href="#portfolio">
                My work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

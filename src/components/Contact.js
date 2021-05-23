import React from "react";

const Contact = () => {
  return (
    <section className="contact py-5" id="contact">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5">Contact Me</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="contact-item d-flex mb-3">
              <div className="icon fs-4 text-danger">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="text ms-3">
                <h3 className="fs-5">Email</h3>
                <p className="text-muted">muratcanyukselpro@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="contact-form">
              <form>
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control form-control-lg fs-6 border-0 shadow-sm"
                    />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="form-control form-control-lg fs-6 border-0 shadow-sm"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control form-control-lg fs-6 border-0 shadow-sm"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <textarea
                      rows="5"
                      placeholder="Your Message"
                      className="form-control form-control-lg fs-6 border-0 shadow-sm"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <button className="btn btn-danger px-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Contact;

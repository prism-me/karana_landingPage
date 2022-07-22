import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section id="howitworks" className="about-us ptb-100 gray-light-bg">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6">
                <div className="about-content-left section-heading">
                  <span className="featureHeading">
                    BEST FEATURES
                  </span>
                  <h5 className="h5 mb-5 featuresubHeading">
                    How It Works
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet. Sed quia labore qui magni sunt ut veritatis dolore vel ducimus commodi qui tenetur ipsum ad voluptatem quidem aut delectus saepe.{" "}
                  </p>

                  <div className="single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <span className="ti-vector rounded mr-3 icon icon-color-1"></span>
                      <h5 className="mb-0">Message us on our WhatsApp number</h5>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet. Sed quia labore qui magni sunt ut veritatis.
                    </p>
                  </div>
                  <div className="single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <span className="ti-dashboard rounded mr-3 icon icon-color-2"></span>
                      <h5 className="mb-0">Customer Satisfy guaranteed with all information</h5>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet. Sed quia labore qui magni sun.
                    </p>
                  </div>
                  <div className="single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <span className="ti-alarm-clock rounded mr-3 icon icon-color-3"></span>
                      <h5 className="mb-0">Start depositing & withdrawal instantly</h5>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet. Sed quia labore qui magni sunt ut veritatis dolore vel ducimus commodi qui tenetur ipsum ad voluptatem.
                    </p>
                  </div>

                  <div className="single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <span className="ti-dashboard rounded mr-3 icon icon-color-2"></span>
                      <h5 className="mb-0">Earn from your skills</h5>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet. Sed quia labore qui.
                    </p>
                  </div>
                  <a href="/#" className="btn solid-btn mt-2">
                    REGISTER NOW FOR FREE
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-content-right">
                  <img
                    src="img/karnaimg/howitworks.png"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;

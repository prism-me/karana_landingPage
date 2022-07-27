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
        <section id="about" className="about-us pt-100 pb-50">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7">
                <div className="about-content-left section-heading">
                  <span className="featureHeading">
                    We are Karna Online Book
                  </span>
                  <h5 className="h5 mb-5 mt-2 featuresubHeading">
                    The Most Trusted Platform Providing Online Sports IDs
                  </h5>
                  <p>
                    Karna Online Book is India's No 1 Exchange and the first of its kind providing a 24/7 withdrawal facility. We offer you a genuinely unique sports experience. We also offer global liquidity & the best industry pricing with a single click. Get Fantasy Sports IDs to play a variety of fantasy sports including fantasy cricket, fantasy football, fantasy baseball, fantasy basketball, fantasy hockey, fantasy soccer, fantasy golf as well as fantasy Esports.{" "}
                  </p>
                  <a href="https://wa.me/+919343463434" target="_blank" className="btn solid-btn mt-2 mr-3" style={{ borderRadius: "0" }}>
                    Whatsapp Us at +91 93434 63434
                  </a>
                  <a href="https://wa.me/+917999429998" target="_blank" className="btn solid-btn mt-2"
                    style={{ borderRadius: "0", background: "white", border: "1px solid #F69C06", color: "#F69C06" }}>
                    Get Your Demo ID Now
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="about-content-right">
                  <img
                    src="img/karnaimg/aboutkarna.png"
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

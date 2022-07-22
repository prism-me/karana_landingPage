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
        <section id="about" className="about-us pt-100">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7">
                <div className="about-content-left section-heading">
                  <span className="featureHeading">
                    We are Karna Book
                  </span>
                  <h5 className="h5 mb-5 featuresubHeading">
                    THE BIGGEST PLATFORM FOR PROVIDING ONLINE SPORTS ID's
                  </h5>
                  <p>
                    Welcome to Karna Book, We are India's No 1 Exchange and the First That Provide 24*7 Withdrawal Facility. We offer you a genuinely unique sports experience. Besides, We also offer global liquidity, best industry pricing with a single click. Get Fantasy Sports ID to Play fantasy Cricket, Play fantasy Football, Play fantasy Baseball, Play fantasy Basketball, Play fantasy Hockey, Play fantasy Soccer, Play fantasy Golf, Play fantasy Esports.{" "}
                  </p>
                  <a href="/#" className="btn solid-btn mt-2 mr-3">
                    Whatsapp Us On +919343463434
                  </a>
                  <a href="/#" className="btn solid-btn mt-2">
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

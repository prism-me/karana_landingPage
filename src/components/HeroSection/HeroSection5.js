import React from "react";
import { connect } from "react-redux";

class HeroSection extends React.Component {
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
        <section
          className="hero-section background-img"
          style={{
            backgroundImage: "url('img/karnaimg/banner/banner.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}
        >
          <div className="video-section-wrap">
            <div className="background-video-overly pt-100">
              {/* <div
                className="player"
                data-property="{videoURL:'https://www.youtube.com/watch?v=gOqlwlQjVis',containment:'.video-section-wrap', quality:'highres', autoPlay:true, showControls: false, startAt:0, mute:true, opacity: 1}"
              ></div> */}
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  {/* <div className="col-md-9 col-lg-7"> */}
                  <div className="col">
                    <div className="hero-content-left text-white text-center mt-5 pt-100">
                      <h3 className="text-white">Welcome to Karna Online Book</h3>
                      <h1 className="text-white text-uppercase">The Biggest & Most Trusted Sports Booking Platform</h1>
                      <p className="lead">
                        Since 2008
                        {/* |  for 18+ only */}
                      </p>
                      <p >
                        Most Trusted Platform for Sports News & Events{" "}
                      </p>
                      <a href="https://wa.me/+918999999904" target="_blank" className="btn google-play-btn">
                        REGISTER NOW FOR FREE
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row bannercounter-wrap d-none d-md-block d-lg-block">
                  <span className="shape-left"></span>
                  <span className="shape-right"></span>
                  <ul className="listwrape">
                    <li className="list-inline-item">
                      <div className="bannersingle-counter text-center">
                        <span>24/7 x 365</span>
                        <h6>Instant <br />
                          Withdrawal</h6>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="bannersingle-counter text-center">
                        <span style={{ color: "#E68401" }}>2.37 Lakhs & Counting</span>
                        <h6>Trusted <br />Customers
                        </h6>
                      </div>
                    </li>
                  </ul>
                  <center>
                    <a href="https://wa.me/+919300000457" target="_blank" className="btn solid-btn mt-4">
                      Create your Free Id
                    </a>
                  </center>
                  {/* <ul className="counter-wrap">
                    <li className="col-md-6">
                      <div className="single-counter text-center">
                        <span>24x7x365</span>
                        <h6>Instant
                          Withdrawal</h6>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="single-counter text-center">
                        <span>2.37 Lakhs+</span>
                        <h6>Trusted Customers
                          & Counting</h6>
                      </div>
                    </li>
                    <center>
                      <a href="#contact" className="btn solid-btn">
                        Create your Free Id
                      </a>
                    </center>
                  </ul> */}
                </div>

                {/* <div className="row justify-content-between">
                  <div className="col-md-12">
                    <div className="client-section-wrap d-flex flex-row align-items-center">
                      <p className="lead mr-5 mb-0 text-white">
                        Trusted by companies like:
                      </p>
                      <ul className="list-inline justify-content-between">
                        <li className="list-inline-item">
                          <img
                            src="img/client-1-gray.png"
                            width="85"
                            alt="client"
                            className="img-fluid"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="img/client-2-gray.png"
                            width="85"
                            alt="client"
                            className="img-fluid"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="img/client-3-gray.png"
                            width="85"
                            alt="client"
                            className="img-fluid"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="img/client-4-gray.png"
                            width="85"
                            alt="client"
                            className="img-fluid"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="img/client-5-gray.png"
                            width="85"
                            alt="client"
                            className="img-fluid"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state
}))(HeroSection);

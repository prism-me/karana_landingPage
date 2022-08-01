import React from "react";
import { connect } from "react-redux";
import { FaWhatsapp } from 'react-icons/fa';

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
          className="hero-section pt-100 background-img"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(47, 51, 131, 0.5) 50.56%, rgba(229, 131, 0, 0.5) 100%), url('img/karnaimg/banner/banner.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              {/* <div className="col-md-9 col-lg-7"> */}
              <div className="col">
                <div className="hero-content-left text-white text-center mt-5 pt-50">
                  <h3 className="text-white">Welcome to Karna Online Book</h3>
                  <h1 className="text-white">The Biggest & Most Trusted Sports Booking Platform</h1>
                  <p className="lead">
                    Since 2008
                    {/* |  for 18+ only */}
                  </p>
                  {/* <p >
                        Most Trusted Platform for Sports News & Events{" "}
                      </p> */}
                  <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                      <a href="https://wa.me/+918800000074" target="_blank" className="btn whatsapp-btn">
                        <FaWhatsapp className="mb-1" /> +91 88000 00074
                      </a>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                      <a href="https://wa.me/+918305555555" target="_blank" className="btn whatsapp-btn">
                        <FaWhatsapp className="mb-1" /> +91 83055 55555
                      </a>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                      <a href="https://wa.me/+917999429998" target="_blank" className="btn whatsapp-btn">
                        <FaWhatsapp className="mb-1" /> +91 79994 29998
                      </a>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                      <a href="https://wa.me/+919343463434" target="_blank" className="btn whatsapp-btn">
                        <FaWhatsapp className="mb-1" /> +91 93434 63434
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            <div className="row bannercounter-wrap d-none d-md-block d-lg-block">
              <span className="shape-left"></span>
              <span className="shape-right"></span>
              <ul className="listwrape">
                <li className="list-inline-item">
                  <div className="bannersingle-counter text-center">
                    <span>Instant <br />
                      Withdrawal</span>
                    <h6>24/7 x 365</h6>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="bannersingle-counter text-center">
                    <span style={{ color: "#E68401" }}>Trusted <br />Customers</span>
                    <h6>
                      2.37 Lakhs & Counting
                    </h6>

                  </div>
                </li>
              </ul>
              <center>
                <a href="https://wa.me/+918305555555" target="_blank" className="btn solid-btn mt-4">
                  Create your Free Id
                </a>
              </center>
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

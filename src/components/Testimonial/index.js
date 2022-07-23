import React from "react";
import { RiCustomerService2Line } from 'react-icons/ri';
import { FaStackExchange } from 'react-icons/fa';
import { TbAccessible } from 'react-icons/tb';
import { GiTakeMyMoney } from 'react-icons/gi';


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
        <section id="howitworks" className="about-us ptb-50 gray-light-bg">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6">
                <div className="about-content-left section-heading">
                  {/* <span className="featureHeading">
                    BEST FEATURES
                  </span> */}
                  <h5 className="h5 mb-3 featuresubHeading" style={{ color: "#F69C06" }}>
                    How Karna Online Book Works
                  </h5>
                  <p>
                    Karna Online Book has simplified the process so that you can start to play and earn almost immediately. Here is our process.{" "}
                  </p>

                  <div className="single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      {/* <span className="ti-vector rounded mr-3 icon icon-color-1"></span> */}
                      <RiCustomerService2Line className="rounded mr-3 icon icon-color-0" />
                      <h5 className="mb-0">Customer connects with us</h5>
                    </div>
                    <p>
                      You message us on our WhatsApp number.
                    </p>
                  </div>
                  <div className="single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      {/* <span className="ti-dashboard rounded mr-3 icon icon-color-2"></span> */}
                      <FaStackExchange className="rounded mr-3 icon icon-color-0" />
                      <h5 className="mb-0">We Exchange Information</h5>
                    </div>
                    <p>
                      We give you a walkthrough of the system and guarantee your satisfaction.
                    </p>
                  </div>
                  <div className="single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      {/* <span className="ti-alarm-clock rounded mr-3 icon icon-color-3"></span> */}
                      <TbAccessible className="rounded mr-3 icon icon-color-0" />
                      <h5 className="mb-0">We Share Instant Access</h5>
                    </div>
                    <p>
                      You can immediately start to deposit and withdraw.
                    </p>
                  </div>

                  <div className="single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      {/* <span className="ti-dashboard rounded mr-3 icon icon-color-2"></span> */}
                      <GiTakeMyMoney className="rounded mr-3 icon icon-color-0" />
                      <h5 className="mb-0">You Start Earning </h5>
                    </div>
                    <p>
                      You start playing and earn as much as you can depending on your skills.
                    </p>
                  </div>
                  <a href="https://wa.me/+919300000457" target={"_blank"} className="btn solid-btn mt-2">
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

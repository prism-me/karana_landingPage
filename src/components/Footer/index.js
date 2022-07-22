import React from "react";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import { BsArrowRightSquare } from 'react-icons/bs';



class Footer extends React.Component {
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
        <footer className="footer-section">
          <div
            className={"footer-top background-img-2 " + (this.props.noSubscription ? 'pt-5' : 'pt-150 pb-5')}
          // style={{
          //   backgroundImage: "url('img/footer-bg.png')",
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center top",
          //   backgroundSize: "cover"
          // }}
          >
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-6 mb-3 mb-lg-0">
                  <div className="footer-nav-wrap text-white">
                    <img
                      src="img/karnaimg/logo/karna-logo.png"
                      alt="footer logo"
                      width="80"
                      className="img-fluid mb-3"
                    />
                    <p className="mb-4">
                      We are India's No 1 Exchange and the First That Provide 24*7 Withdrawal Facility. We offer you a genuinely unique sports experience. Besides, We also offer global liquidity.
                    </p>

                    <div className="social-list-wrap">
                      <h5 className="mb-3 text-white">
                        Get Started Playing <BsArrowRightSquare className="ml-2" />
                      </h5>
                      <ul className="social-list list-inline list-unstyled">
                        <li className="list-inline-item">
                          <a href="/#" target="_blank" title="Instagram">
                            <FaInstagram className="footersocialicon" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="/#" target="_blank" title="Telegram">
                            <FaTelegramPlane className="footersocialicon" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="/#" target="_blank" title="WhatsApp">
                            <FaWhatsapp className="footersocialicon" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
                  <div className="footer-nav-wrap text-white">
                    <h5 className="mb-4 text-white">Whatsapp Us</h5>
                    <ul className="list-unstyled support-list">
                      <li className="mb-3 d-flex align-items-center">
                        <FaWhatsapp className="mr-2" />{" "}
                        <a href="tel:+919343463434">+91 9343463434</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <FaWhatsapp className="mr-2" />{" "}
                        <a href="tel:+9179093000014">+91 7909300001</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <FaWhatsapp className="mr-2" />{" "}
                        <a href="tel:+917262999994">+91 7262999994</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <FaWhatsapp className="mr-2" />{" "}
                        <a href="tel:+917261999994">+91 7261999994</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <FaWhatsapp className="mr-2" />{" "}
                        <a href="tel:+918305555555">+91 8305555555</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom pt-4 pb-4"
            style={{ background: "linear-gradient(90deg, #2F3383 0%, #E58300 100%)" }}
          >
            <div className="container">
              <hr style={{ border: "0.5px solid #FFFFFF", marginBottom: "2rem", opacity: "0.8" }} />
              <p className="text-white footerbottomtext">
                This game involves an element of financial risk and may be addictive. Please play responsibly at your own risk. T&C Apply, For 18+ Only.
              </p>
              <div className="d-flex justify-content-between align-items-center copyrightwrape">
                {/* <div className="col-md-6 col-lg-5"> */}
                <p className="copyright-text pb-0 mb-0">
                  Copyright © 2022 <a href="/">Karna Book</a>. All Rights Reserved  | Designed and managed by
                  <a href="/#"> Prism Digital</a>.
                </p>
                <p className="copyright-text pb-0 mb-0">
                  <a href="/#" className="mr-3">Terms</a> <a href="/#" className="mr-3">Security</a> <a href="/#"> Privacy Policy</a>
                </p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;

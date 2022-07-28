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
                    <p className="mb-2">
                      Karna Book is India's No 1 Exchange and the first of its kind providing a 24/7 withdrawal facility. We offer you a genuinely unique sports experience.
                    </p>

                    <p className="mb-4">
                      Get in touch with us now and get a step-by-step guide to help beginners start their journey.
                    </p>
                    <div className="social-list-wrap">
                      <h5 className="mb-3 text-white">
                        Start Playing Now <a href="https://wa.me/+918305555555" target="_blank" className="text-white"><BsArrowRightSquare className="ml-2" /></a>
                      </h5>
                      <ul className="social-list list-inline list-unstyled">
                        <li className="list-inline-item">
                          <a href="https://www.instagram.com/karnabook_official/" target="_blank" title="Instagram">
                            <FaInstagram className="footersocialicon" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://t.me/joinchat/VOtSBavdT4yuNzf9" target="_blank" title="Telegram">
                            <FaTelegramPlane className="footersocialicon" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://wa.me/+917999429998" target="_blank" title="WhatsApp">
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
                        <a href="https://wa.me/+918800000074" target="_blank">+91 88000 00074</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <FaWhatsapp className="mr-2" />{" "}
                        <a href="https://wa.me/+918305555555" target="_blank">+91 83055 55555</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <FaWhatsapp className="mr-2" />{" "}
                        <a href="https://wa.me/+917999429998" target="_blank">+91 79994 29998</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <FaWhatsapp className="mr-2" />{" "}
                        <a href="https://wa.me/+919343463434" target="_blank">+91 93434 63434</a>
                      </li>
                      {/* <li className="d-flex align-items-center">
                        <FaWhatsapp className="mr-2" />{" "}
                        <a href="https://wa.me/+918305555555" target="_blank">+91 8305555555</a>
                      </li> */}
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
              <p className="text-white text-center footerbottomtext">
                This game involves an element of financial risk and may be addictive. Please play responsibly at your own risk. T&C Apply, For 18+ Only.
              </p>
              <div className="row text-center justify-content-center">
                <div className="col-md-8 col-lg-8">
                  <p className="copyright-text pb-0 mb-0">
                    Copyright © 2022 <a href="/">Karna Book</a>. All Rights Reserved  | Designed and managed by
                    <a href="https://www.prism-me.com/" target="_blank"> Prism Digital</a>.
                  </p>
                  {/* <p className="copyright-text pb-0 mb-0">
                  <a href="/#" className="mr-3">Terms</a> <a href="/#" className="mr-3">Security</a> <a href="/#"> Privacy Policy</a>
                </p> */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;

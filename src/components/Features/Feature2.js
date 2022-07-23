import React from "react";
// import { BiUserCircle } from 'react-icons/bi';

class Feature extends React.Component {
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
        <div id="karnabook" className={"feature-section ptb-50 " + (this.props.bgColor && this.props.bgColor === 'gray' ? 'gray-light-bg' : '')}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center mb-5">
                  <span className="featureHeading">
                    Our Distinct Features
                  </span>
                  <h2 className="featuresubHeading">
                    Why Choose Karna Online Book
                  </h2>
                  {/* <p>
                    Lorem ipsum dolor sit amet. Sed quia labore qui magni sunt ut veritatis dolore vel ducimus commodi qui tenetur ipsum ad voluptatem quidem aut delectus saepe.
                  </p> */}
                </div>
              </div>
            </div>

            <div className="row row-grid align-items-center">
              <div className="col-lg-4">
                <div className="d-flex align-items-start mb-5">
                  <div className="pr-4">
                    {/* <div className="icon icon-shape icon-color-1 rounded-circle">
                      <span className="ti-face-smile"></span>
                    </div> */}
                    <img src="img/karnaimg/icon/userid.png" />
                  </div>
                  <div className="icon-text">
                    <h5>Online ID</h5>
                    <p className="mb-0">
                      Get your online cricket/sports ID and instantly start playing. Message us to get your ID now.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-5">
                  <div className="pr-4">
                    {/* <div className="icon icon-shape icon-color-2 rounded-circle">
                      <span className="ti-vector"></span>
                    </div> */}
                    <img src="img/karnaimg/icon/security.png" />
                  </div>
                  <div className="icon-text">
                    <h5>24 /7 Support</h5>
                    <p className="mb-0">
                      A dedicated team of experts is always available to guide you throughout the day via WhatsApp.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="pr-4">
                    {/* <div className="icon icon-shape icon-color-3 rounded-circle">
                      <span className="ti-headphone-alt"></span>
                    </div> */}
                    <img src="img/karnaimg/icon/service.png" />
                  </div>
                  <div className="icon-text">
                    <h5>100% Trustworthy Service</h5>
                    <p className="mb-0">
                      Transparency is paramount to us and our customers & we keep everything clear and transparent.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="position-relative" style={{ zIndex: 10 }}>
                  <img
                    alt="placeholder"
                    src="img/karnaimg/bestfeature.png"
                    className="img-center img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex align-items-start mb-5">
                  <div className="pr-4">
                    {/* <div className="icon icon-shape icon-color-4 rounded-circle">
                      <span className="ti-layout-media-right"></span>
                    </div> */}
                    <img src="img/karnaimg/icon/refil.png" />
                  </div>
                  <div className="icon-text">
                    <h5>Instant Withdrawal & Refill</h5>
                    <p className="mb-0">
                      We offer instant and unlimited withdrawal & refilling service.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-5">
                  <div className="pr-4">
                    {/* <div className="icon icon-shape icon-color-5 rounded-circle">
                      <span className="ti-layout-cta-right"></span>
                    </div> */}
                    <img src="img/karnaimg/icon/payment.png" />
                  </div>
                  <div className="icon-text">
                    <h5>Multiple Payment Methods</h5>
                    <p className="mb-0">
                      We offer convenient payment methods so you can pay via Net Banking, Bank Transfer, Paytm, Google pay, IMPS, PhonePe, etc.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="pr-4">
                    {/* <div className="icon icon-shape icon-color-6 rounded-circle">
                      <span className="ti-palette"></span>
                    </div> */}
                    <img src="img/karnaimg/icon/data.png" />
                  </div>
                  <div className="icon-text">
                    <h5>Data Protection & Security</h5>
                    <p className="mb-0">
                      We prioritize security, hence your data and your personal information is secure and is not shared at any point.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Feature;

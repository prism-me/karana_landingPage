import React from "react";

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
        <div id="features" className={"feature-section ptb-50 " + (this.props.bgColor && this.props.bgColor === 'gray' ? 'gray-light-bg' : '')}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center mb-5">
                  <span className="featureHeading">
                    BEST FEATURES
                  </span>
                  <h2 className="featuresubHeading">
                    Why Karna Book
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet. Sed quia labore qui magni sunt ut veritatis dolore vel ducimus commodi qui tenetur ipsum ad voluptatem quidem aut delectus saepe.
                  </p>
                </div>
              </div>
            </div>

            <div className="row row-grid align-items-center">
              <div className="col-lg-4">
                <div className="d-flex align-items-start mb-5">
                  <div className="pr-4">
                    <div className="icon icon-shape icon-color-1 rounded-circle">
                      <span className="ti-face-smile"></span>
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>ONLINE ID</h5>
                    <p className="mb-0">
                      Get your online cricket/sports id with us and instantly start Playing. Message us to get your ID now.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-5">
                  <div className="pr-4">
                    <div className="icon icon-shape icon-color-2 rounded-circle">
                      <span className="ti-vector"></span>
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>24 /7 SUPPORT</h5>
                    <p className="mb-0">
                      We have a team of experts who available 24/7 to guide you through our whatsApp chats.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="pr-4">
                    <div className="icon icon-shape icon-color-3 rounded-circle">
                      <span className="ti-headphone-alt"></span>
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>100% TRUSTED SERVICE</h5>
                    <p className="mb-0">
                      Transparency and accuracy is the most important for us and for our customer. We deal in the most transparent way.
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
                    <div className="icon icon-shape icon-color-4 rounded-circle">
                      <span className="ti-layout-media-right"></span>
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>INSTANT WITHDRAWAL & REFILL</h5>
                    <p className="mb-0">
                      Karna Book provides instant service of id withdrawal & refilling with min to max amount.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-5">
                  <div className="pr-4">
                    <div className="icon icon-shape icon-color-5 rounded-circle">
                      <span className="ti-layout-cta-right"></span>
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>AVAILABLE PAYMENT METHODS</h5>
                    <p className="mb-0">
                      Multiple methods are available for Paymetns. Customer can pay via Net Banking, Bank Transfer, Paytm, Google pay, IMPS, PhonePe etc.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="pr-4">
                    <div className="icon icon-shape icon-color-6 rounded-circle">
                      <span className="ti-palette"></span>
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>HIGH SECURITY</h5>
                    <p className="mb-0">
                      Security is our Top priority and hence your data and imformation is safe and is not shared at any Point!
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

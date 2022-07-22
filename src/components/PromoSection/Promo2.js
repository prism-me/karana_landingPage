import React from "react";
import { connect } from "react-redux";
import { FaWhatsapp } from 'react-icons/fa';

class PromoSection extends React.Component {
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
        <section className={"promo-section ptb-100 " + (this.props.removeTopMargin ? '' : 'mt-5')}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-10">
                <div className="section-heading mb-5">
                  <span className="featureHeading">
                    Key Features
                  </span>
                  <h5 className="h5 featuresubHeading">
                    Providing Online Sports ID's.
                  </h5>
                  <a href="/#" className="btn whatsapp-btn mt-4 mb-4">
                    <FaWhatsapp /> Whatsapp Now
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 mb-lg-0">
                <div className="card single-promo-card single-promo-hover">
                  <div className="card-body">
                    {/* <div className="pb-2">
                      <span className="ti-credit-card icon-md color-secondary"></span>
                    </div> */}
                    <div className="pt-2 pb-3">
                      <h5>Minimum Book ID</h5>
                      <p className="text-muted mb-0">
                        With Just Rs. 1000, you can get your ID and start your book journey with the most trusted platform in India.
                      </p>
                    </div>
                  </div>
                </div>
                <center>
                  <a href="/#" className="btn solid-btn mt-4">
                    REGISTER NOW FOR FREE
                  </a>
                </center>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card single-promo-card single-promo-hover mb-lg-0">
                  <div className="card-body">
                    {/* <div className="pb-2">
                      <span className="ti-control-record icon-md color-secondary"></span>
                    </div> */}
                    <div className="pt-2 pb-3">
                      <h5>Since 2008</h5>
                      <p className="text-muted mb-0">
                        Karna Online Book is established since 2008 and is India's Biggest and the Most Trusted Online Book.
                      </p>
                    </div>
                  </div>
                </div>
                <center>
                  <a href="/#" className="btn solid-btn mt-4">
                    REGISTER NOW FOR FREE
                  </a>
                </center>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card single-promo-card single-promo-hover mb-lg-0">
                  <div className="card-body">
                    {/* <div className="pb-2">
                      <span className="ti-vector icon-md color-secondary"></span>
                    </div> */}
                    <div className="pt-2 pb-3">
                      <h5>2.37 Lakhs+ Customers</h5>
                      <p className="text-muted mb-0">
                        Karna Online Book has trust of 2.37 Lakhs+ Customers all over India. We Offer Services With Transparency And Accuracy.
                      </p>
                    </div>
                  </div>
                </div>
                <center>
                  <a href="/#" className="btn solid-btn mt-4">
                    REGISTER NOW FOR FREE
                  </a>
                </center>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card single-promo-card single-promo-hover mb-lg-0">
                  <div className="card-body">
                    {/* <div className="pb-2">
                      <span className="ti-receipt icon-md color-secondary"></span>
                    </div> */}
                    <div className="pt-2 pb-3">
                      <h5>24 x 7 Withdrawal</h5>
                      <p className="text-muted mb-0">
                        With 24x7 Withdrawal Service, We offer high-speed deposit and withdrawal of unlimited amount
                      </p>
                    </div>
                  </div>
                </div>
                <center>
                  <a href="/#" className="btn solid-btn mt-4">
                    REGISTER NOW FOR FREE
                  </a>
                </center>
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
}))(PromoSection);

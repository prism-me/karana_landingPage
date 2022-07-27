import React from "react";
import { FaWhatsapp } from 'react-icons/fa';

class KarnaBook extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section id="contact" className="team-member-section ptb-50">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="section-heading text-center mb-5">
                  <span className="featureHeading">
                    Karna Online Book
                  </span>
                  <h2 className="featuresubHeading">
                    The Biggest Platform Offering Online Sports Betting IDs
                  </h2>
                  <p className="mb-0">
                    Reach Out to Us on WhatsApp and Get your betting ID Now!
                  </p>
                  <p>
                    We’re here to help 24/7. Connect with us for any queries, emergencies, feedback, or complaints.
                  </p>
                </div>
                <h4 className="text-center featuresubHeading">Whatsapp us on</h4>
                <div className="row mt-4">
                  <div className="col d-flex justify-content-center align-items-center">
                    <a href="https://wa.me/+918800000074" target="_blank" className="btn whatsapp-btn">
                      <FaWhatsapp className="mb-1" /> +91 88000 00074
                    </a>
                  </div>
                  <div className="col d-flex justify-content-center align-items-center">
                    <a href="https://wa.me/+917999299971" target="_blank" className="btn whatsapp-btn">
                      <FaWhatsapp className="mb-1" /> +91 79992 99971
                    </a>
                  </div>
                  <div className="col d-flex justify-content-center align-items-center">
                    <a href="https://wa.me/+917999429998" target="_blank" className="btn whatsapp-btn">
                      <FaWhatsapp className="mb-1" /> +91 79994 29998
                    </a>
                  </div>
                  {/* <div className="col">
                    <a href="https://wa.me/+917261999994" target="_blank" className="btn whatsapp-btn">
                      <FaWhatsapp className="mb-1" /> +91 7261999994
                    </a>
                  </div> */}
                  {/* <div className="col">
                    <a href="https://wa.me/+918305555555" target="_blank" className="btn whatsapp-btn">
                      <FaWhatsapp className="mb-1" /> +91 8305555555
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default KarnaBook;

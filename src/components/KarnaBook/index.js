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
        <section id="karnabook" className="team-member-section ptb-50">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="section-heading text-center mb-5">
                  <span className="featureHeading">
                    Karna Book
                  </span>
                  <h2 className="featuresubHeading">
                    The Biggest Platform For Providing Online Sports ID's.
                  </h2>
                  <p className="mb-0">
                    Get Your Sports Id Now. Contact Us On WhatsApp.
                  </p>
                  <p>
                    For Any Queries, Emergencies, Feedbacks or Complaints. We Are Here To Help You 24/7 With Our Online Services.
                  </p>
                </div>
                <h4 className="text-center featuresubHeading">Whatsapp us on</h4>
                <div className="row mt-4">
                  <div className="col">
                    <a href="/#" className="btn whatsapp-btn">
                      <FaWhatsapp className="mb-1" /> +91 9343463434
                    </a>
                  </div>
                  <div className="col">
                    <a href="/#" className="btn whatsapp-btn">
                      <FaWhatsapp className="mb-1" /> +91 7909300001
                    </a>
                  </div>
                  <div className="col">
                    <a href="/#" className="btn whatsapp-btn">
                      <FaWhatsapp className="mb-1" /> +91 7262999994
                    </a>
                  </div>
                  <div className="col">
                    <a href="/#" className="btn whatsapp-btn">
                      <FaWhatsapp className="mb-1" /> +91 7261999994
                    </a>
                  </div>
                  <div className="col">
                    <a href="/#" className="btn whatsapp-btn">
                      <FaWhatsapp className="mb-1" /> +91 8305555555
                    </a>
                  </div>
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

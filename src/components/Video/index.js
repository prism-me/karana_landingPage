import React from "react";
import { connect } from "react-redux";
import { FaWhatsapp } from 'react-icons/fa';


class Video extends React.Component {
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
          id="contact"
          className="video-promo py-4 background-img"
        // style={{
        //   backgroundImage: "url('img/video-bg.jpg')",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center center",
        //   backgroundSize: "cover"
        // }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col">
                <div className="video-promo-content text-center">
                  <h4 className="mt-4 text-white">Whatsapp us on</h4>
                  <div className="row my-5">
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
                  <h4 className="text-white">
                    {/* <span className="ti-location-arrow mr-2"></span> */}
                    <img
                      src="img/karnaimg/icon/telegramicon.png"
                      alt="telegramicon"
                      width="35"
                      className="mr-2 mb-n2"
                    />
                    Join Us On Telegram</h4>
                </div>
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
}))(Video);

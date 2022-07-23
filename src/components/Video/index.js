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
          // id="contact"
          className="video-promo ptb-50 background-img"
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
                  <h4 className="mt-4 text-white">WhatsApp Us Now</h4>
                  <div className="row my-5">
                    <div className="col">
                      <a href="https://wa.me/+919343463434" target="_blank" className="btn whatsapp-btn">
                        <FaWhatsapp className="mb-1" /> +91 9343463434
                      </a>
                    </div>
                    <div className="col">
                      <a href="https://wa.me/+917909300001" target="_blank" className="btn whatsapp-btn">
                        <FaWhatsapp className="mb-1" /> +91 7909300001
                      </a>
                    </div>
                    <div className="col">
                      <a href="https://wa.me/+917262999994" target="_blank" className="btn whatsapp-btn">
                        <FaWhatsapp className="mb-1" /> +91 7262999994
                      </a>
                    </div>
                    <div className="col">
                      <a href="https://wa.me/+917261999994" target="_blank" className="btn whatsapp-btn">
                        <FaWhatsapp className="mb-1" /> +91 7261999994
                      </a>
                    </div>
                    <div className="col">
                      <a href="https://wa.me/+918305555555" target="_blank" className="btn whatsapp-btn">
                        <FaWhatsapp className="mb-1" /> +91 8305555555
                      </a>
                    </div>
                  </div>
                  <h4 className="text-white">
                    {/* <span className="ti-location-arrow mr-2"></span> */}
                    <a href="https://t.me/joinchat/VOtSBavdT4yuNzf9" target={"_blank"}>
                      <img
                        src="img/karnaimg/icon/telegramicon.png"
                        alt="telegramicon"
                        width="35"
                        className="mr-2 mb-n2"
                      />
                    </a>

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

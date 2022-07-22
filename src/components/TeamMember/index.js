import React from "react";
import _data from "../../data";

class TeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMember: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
    this.setState({
      teamMember: _data.teamMember
    });
  }

  render() {
    return (
      <React.Fragment>
        <section id="team" className="team-member-section ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center mb-5">
                  <span className="featureHeading">
                    OUR TEAM
                  </span>
                  <h2 className="featuresubHeading">
                    OUR PARTNERS
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet. Sed quia labore qui magni sunt ut veritatis dolore vel ducimus commodi qui tenetur ipsum ad voluptatem quidem aut delectus saepe.
                  </p>
                </div>
              </div>
            </div>
            <div
              // className="row"
              className="owl-carousel owl-theme team-carousel arrow-indicator"
            >
              {(this.state.teamMember.members || []).map((member, index) => {
                return (
                  <div
                    className="item"
                    // className="col-lg-3 col-sm-6"
                    key={index}>
                    <div className="single-team-member position-relative">
                      <div className="team-image">
                        <img
                          src={member.image}
                          alt="Team Members"
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <div className="team-info text-white rounded-circle d-flex flex-column align-items-center justify-content-center">
                        <h5 className="mb-0">{member.name}</h5>
                        <h6>{member.designation}</h6>
                        <ul className="list-inline team-social social-icon mt-4 text-white">
                          <li className="list-inline-item">
                            <a href="/#">
                              <span className="ti-facebook"></span>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="/#">
                              <span className="ti-twitter"></span>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="/#">
                              <span className="ti-github"></span>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="/#">
                              <span className="ti-dribbble"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <center>
                      <a href="/#" className="btn team-btn mt-4">
                        {
                          member.btntxt
                        }
                      </a>
                    </center>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default TeamMember;

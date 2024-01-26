import React from "react";
import photo from "../assets/ee_logo.png";

const Stats = () => {
  return (
    <>
      <section className="growing-section">
        <div className="trapezoid-content">
          <div className="trapezoid">
            <div class="growing_blog">
              <div class="sub-title">
                <span>STATISTICS</span>
              </div>
              <div class="title">
                <span>Some Growing Facts</span>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
              </p>
            </div>
          </div>
        </div>
        <div className="tiles-container">
          <div className="tile icon-tile">
            <i class="bx bxs-group"></i>
            <h1>300+</h1>
            <p>ACTIVE CLIENT</p>
          </div>
          <div className="tile icon-tile">
            <i class="bx bxs-briefcase"></i>
            <h1>3200+</h1>
            <p>PROJECT COMPLETED</p>
          </div>
          <div className="tile" id="outlier">
            <img src={photo} alt="Description" />
            <h1>500+</h1>
            <p>EXPRESSION ENGINE</p>
          </div>
          <div className="tile icon-tile">
            <i class="bx bx-smile"></i>
            <h1>350+</h1>
            <p>HAPPY CLIENT</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;

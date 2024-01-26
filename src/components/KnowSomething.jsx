import React from "react";
import photo from "../assets/welcome_bg.jpg";

const KnowSomething = () => {
  return (
    <section className="photo-text-section">
      <div className="photo-with-text">
        <img src={photo} alt="Descriptive Alt Text" className="photo" />
        <div className="overlay-text">
          <h1>KNOW SOMETHING</h1>
          <h2>About Our Theme</h2>
          <p>
            We are process-driven organization and have applied our maturity,
            well honed project management skills and technical potential. We are
            a growing, active and dynamic organization focused on classic web
            design & development.
          </p>
          <p>
            Our objective is develop and deliver web based systems, which has
            been built do excellent standards while keeping the website cost
            effective Offshore web development at W3care safeguards the client’s
            intellectual property, proprietary software and project
            specifications with very high levels of security. Clients retain
            full ownership of all intellectual property rights and software
            source code at the completion of the project. We offer competitive
            hourly rates considerably lower than EU or US service providers
            while keeping upper-level standards of quality and reliability.
          </p>
          <p>
            W3care boasts an expert team with a vast spectrum of technical
            expertise, which has ensured each and every client to date, has
            supplied a brief that we have successfully executed. What’s more, we
            love the market we work in – we are in our element when utilizing
            cutting edge tech.
          </p>
          {/* More text elements as needed */}
        </div>
      </div>
    </section>
  );
};

export default KnowSomething;

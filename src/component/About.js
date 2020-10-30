import React from "react";
import fif26 from "../images/fif26.jpg";
import engineering from "../images/engineering.png";
import motivate from "../images/motivate.png";
import partnership from "../images/partnership.png";
import community from "../images/community.png";

import "../style/About.css";

function About() {
  return (
    <React.Fragment>
      <div className="about1">
        <div className="about-text">
          <h1> About Us. </h1>
        </div>
      </div>
      <div className="ui stackable two column grid">
        <div className="column">
          <h3 className="about2-h3">ABOUT US :</h3>
          <h1 className="about2-h1">
            FOLUKE IDOWU'S INDEPENDENT LIVING PROGRAM
          </h1>
          <p className="about2-p">
            Over the years has enabled disabled persons with Disabilities first
            to discover and then to do what they can do for themselves. The
            first step in her carefully worked-out program engages the person in
            a process of "self-advocacy" in order to come to terms with his or
            her particular condition. Once the person learns some effective
            techniques, he or she is encouraged to practice them in the next
            step of "independent living’.
          </p>
        </div>
        <div className="column">
          <img src={fif26} alt="image" className="fif26" />
        </div>
      </div>
      <div className="about3">
        <div>
          <h1 className="about3-h1">What is Foluke Idowu Foundation (FIF)?</h1>
        </div>
        <div className="ui stackable three column grid">
          <div className="column">
            <div className="ui segment">
              <img src={engineering} alt="image" className="about-icon" />
              <p className="ab3text">
                The big next step to build on the successes of ILP and integrate
                it into a Foundation in memory of this visionary woman as a way
                of keeping her legacy alive. It is an initiative of Fouke’s
                family, friends and supporters to replicate and integrate ILP’s
                partners and advance new frontiers in the care and management of
                PwD, their families and careers.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="ui segment">
              <img src={community} alt="image" className="about-icon" />
              <p className="ab3text">
                Towards this end, we are reaching out to institutions, Persons
                with Disabilities (PwD) and other existing groups that undertake
                projects this nature. This proposal envisions the creation of
                "community-based independent living groups," which will
                demonstrate to communities the concept of inclusion and
                community based care.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="ui segment">
              <img src={motivate} alt="image" className="about-icon" />
              <p className="ab3text">
                To form these "Independent Living Centers," as she called them,
                Foluke designed a model educational facility that will train
                People with various forms of Disabilities and the rest of the
                community - young and old, together.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="ui segment">
              <img src={partnership} alt="image" className="about-icon" />
              <p className="ab3text">
                The Foluke Idowu Foundation will continue partnerships
                especially with the holistic care unit department of
                neurosurgery university college hospital Ibadan and seek more
                social Research opportunities that can transform and make
                independent living for an optimal contribution to society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;


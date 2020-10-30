import React from "react";
import fif26 from "../images/fif26.jpg";
import donate from "../images/donate.png";
import volunteer from "../images/volunteer.png";
import partnership from "../images/partnership.png";

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
          <h3 className="about2-h3">LITTLE ABOUT US :</h3>
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
        <div className="ui stackable three column grid">
          <div className="column">
            <div className="ui segment">
              <img src={donate} alt="image" className="about-icon" />
              <p className="ab3text">
                Contribute by donating to FIF, you will make a difference in the
                lives of persons with spinal cord injuries, carers and families
                in need.{" "}
              </p>
            </div>
          </div>
          <div className="column">
            <div className="ui segment">
              <img src={volunteer} alt="image" className="about-icon" />
              <p className="ab3text">
                Contribute by volunteering your Skills, expertise and time.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="ui segment">
              <img src={partnership} alt="image" className="about-icon" />
              <p className="ab3text">
                Contribute by becoming our partner as we translate rigorous
                social research into practical tools and guidelines for
                families, professionals and policymakers, ensuring our research
                results make a real-world impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;

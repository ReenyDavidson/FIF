import React from "react";
import "../style/Home.css";
import donate from "../images/donate.png";
import volunteer from "../images/volunteer.png";
import partnership from "../images/partnership.png";
import fif7 from "../images/fif7.jpg";

function Home() {
  return (
    <>
      <div></div>
      <div className="home1">
        <div className="inner-home1">
          <h1 className="home1-1">Donate</h1>
          <h2 className="home1-2">for a better cause.</h2> <br />
          <p className="home1-3">
            Every little donation is part of a greater good.
          </p>
          <div>
            <button className="home1-button">Donate</button>
          </div>
        </div>
      </div>
      <div className="home2">
        <div>
          <h1 className="home2-h1">DO YOU WISH TO CONTRIBUTE?</h1>
        </div>

        <div className="home2">
          <div className="ui stackable three column grid">
            <div className="column">
              <div className="ui segment">
                <img src={donate} alt="image" className="about-icon" />
                <p className="home2text">
                  Contribute by donating to FIF, you will make a difference in
                  the lives of persons with spinal cord injuries, carers and
                  families in need.{" "}
                </p>
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                <img src={volunteer} alt="image" className="about-icon" />
                <p className="home2text">
                  Contribute by volunteering your Skills, expertise and time.
                  Skills like teaching is valuable, and your time is well
                  appreciated.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                <img src={partnership} alt="image" className="about-icon" />
                <p className="home2text">
                  Becoming our partner to translate rigorous social research
                  into practical tools and guidelines for families,
                  professionals, etc ensuring our research results make a
                  real-world impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home3">
        <div className="ui stackable two column grid">
          <div className="column">
            <img src={fif7} alt="image" className="home3-image" />
          </div>

          <div className="column">
            <h1 className="home3-h1">AIM </h1>
            <p className="home3-p">
              We aim to continue the legacy of a great visionary who set a path
              of beauty by helping people in need. The Foluke Idowu Foundation
              is aimed at helping people with disabilities achieve their dreams.
              The Foluke Idowu Foundation will continue partnerships with the
              holistic care unit department of neurosurgery university college
              hospital Ibadan and seek more social Research opportunities that
              can transform and make independent living for an optimal
              contribution to society.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

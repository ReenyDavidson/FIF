import React from "react";
import "../style/Footer.css";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <React.Fragment>
      <div className="ui stackable three column grid">
        <div className="column">
          <h1 className="footer-h1">FIF</h1>
          <p className="footer-p">
            Meeting the needs of the most vulnerable is the bane of an inclusive
            society.
          </p>
        </div>
        <div className="column">
          <h1 className="footer-h1">Links</h1>
          <ul>
            <li style={style1}>
              <Link to="/" style={style}>
                Home
              </Link>
            </li>
            <li style={style1}>
              <Link to="/about" style={style}>
                About
              </Link>
            </li>
            <li style={style1}>
              <Link to="/services" style={style}>
                Services
              </Link>
            </li>
            <li style={style1}>
              <Link to="/donate">
                <button
                  style={{
                    marginTop: "5%",
                    width: "50%",
                    height: "40px",
                    border: "none",
                    backgroundColor: "hotpink",
                    fontFamily: "Poppins",
                    fontSize: "1rem",
                    borderRadius: "7rem",
                  }}
                >
                  Donate
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h1 className="footer-h1">Reach Us On: </h1>
          <div className="footer-social-icon">
            <img src={twitter} alt="footer-image" className="footer-icon" />
            <img src={facebook} alt="footer-image" className="footer-icon" />
            <img src={instagram} alt="footer-image" className="footer-icon" />
          </div>
          <p className="footer-p">
            Copyright ©2020 All rights reserved | The Foluke Idowu Foundation{" "}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

const style = {
  marginTop: "5%",
  width: "30%",
  height: "40px",
  textDecoration: "none",
  marginLeft: "4px",
  fontSize: "1.4rem",
  color: "black",
};

const style1 = {
  listStyle: "none",
};

export default Footer;

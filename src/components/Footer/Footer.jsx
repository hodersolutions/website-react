import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="myFooter">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 myCols">
                <h6>Get started</h6>
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  {/*<li>
                    <Link to="/signup">Sign up</Link>
                  </li>
                  */}<li>
                    <Link to="/courses">Downloads</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 myCols">
                <h6>About us</h6>
                <ul>
                  <li>
                    <Link to="/about">Company Information</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/signup">Reviews</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 myCols">
                <h6>Support</h6>
                <ul>
                  <li>
                    <Link to="/faqs">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/contact">Help desk</Link>
                  </li>
                  <li>
                    <Link to="/signup">Forums</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 myCols">
                <h6>Legal</h6>
                <ul>
                  <li>
                    <Link to="/signup">Terms of Service</Link>
                  </li>
                  <li>
                    <Link to="/signup">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="/signup">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="social-networks">
            <Link to="/" className="twitter">
              <i className="fab fa-twitter" />
            </Link>
            <Link to="/" className="facebook">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link to="/" className="google">
              <i className="fab fa-google-plus" />
            </Link>
          </div>
          <div className="footer-copyright">
            <p>© 2019 Copyright www.hoder.in </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

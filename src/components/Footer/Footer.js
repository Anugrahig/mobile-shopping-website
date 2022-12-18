import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

import { ExternalLink } from "react-external-link";
import "./footer.scss";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container logo-container ">
        <ul className="social-links">
          <li>
            <ExternalLink
              href="https://www.instagram.com/"
              className="footer-link"
            >
              <InstagramIcon className="social-icon footer-link" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://www.facebook.com/"
              className="footer-link"
            >
              <FacebookIcon className="social-icon" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink className="footer-link" href="https://twitter.com/">
              <TwitterIcon className="social-icon" />
            </ExternalLink>
          </li>
        </ul>
        <Link to="/">
          <h3 className="heading-text">Smartprice</h3>
        </Link>
        <p className="copyright footer-text">
          Copyright &copy; <span className="year"> {date} </span> by Smartprice,
          Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

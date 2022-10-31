import React from "react";
import "./media.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { LINKS } from "../../const/const";

function Media() {
  return (
    <div className="media-wrapper">
      <a href={LINKS.media.facebook} className="icon facebook">
        <span className="tooltip">Facebook</span>
        <span>
          <FontAwesomeIcon icon={faFacebookF} />
        </span>
      </a>
      <a href={LINKS.media.instagram} className="icon instagram">
        <span className="tooltip">Instagram</span>
        <span>
          <FontAwesomeIcon icon={faInstagram} />
        </span>
      </a>
      <a href="/" className="icon linkedin">
        <span className="tooltip">LinkedIn</span>
        <span>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </span>
      </a>
      <a href={LINKS.media.youtube} className="icon youtube">
        <span className="tooltip">YouTube</span>
        <span>
          <FontAwesomeIcon icon={faYoutube} />
        </span>
      </a>
    </div>
  );
}

export default Media;

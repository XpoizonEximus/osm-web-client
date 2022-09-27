import React from "react";
import "./media.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Media() {
  return (
    <ul class="media-wrapper">
      <li class="icon facebook">
        <span class="tooltip">Facebook</span>
        <span>
          <FontAwesomeIcon icon={faFacebookF} />
        </span>
      </li>
      <li class="icon instagram">
        <span class="tooltip">Instagram</span>
        <span>
          <FontAwesomeIcon icon={faInstagram} />
        </span>
      </li>
      <li class="icon linkedin">
        <span class="tooltip">LinkedIn</span>
        <span>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </span>
      </li>
      <li class="icon youtube">
        <span class="tooltip">YouTube</span>
        <span>
          <FontAwesomeIcon icon={faYoutube} />
        </span>
      </li>
    </ul>
  );
}

export default Media;

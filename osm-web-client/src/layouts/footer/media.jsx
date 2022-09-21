import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./media.css";

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
    </ul>
  );
}

export default Media;

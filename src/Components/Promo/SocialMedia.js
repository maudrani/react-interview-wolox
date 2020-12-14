import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../SubComponents/fontawesome";
import WButton from "../SubComponents/W-Button";

const SocialMedia = ({
  containerClass,
  socialMedia,
  socialName,
  mainColor,
  fontSize,
  fontWeight,
  iconSize,
}) => {
  return (
    <div className={`${containerClass} socialmedia-container`}>
      <div className="row-center-center socialmedia-description">
        <div className="icon row-flex-end-center">
          <FontAwesomeIcon
            icon={["fab", socialMedia]}
            className={`fc-${mainColor} fs-${iconSize}`}
          />
        </div>

        <div className="name row-flex-start-center">
          <span className={`fc-${mainColor} fs-${fontSize} fw-${fontWeight}`}>
            {socialName}
          </span>
        </div>
      </div>

      <div className="btn-container row-center-center">
        <WButton
          btnClass="follow-btn"
          color="blue"
          content="Siguenos"
          textColor="white"
          btnStyle="outline"
          fontWeight={4}
        />
      </div>
    </div>
  );
};

export default SocialMedia;

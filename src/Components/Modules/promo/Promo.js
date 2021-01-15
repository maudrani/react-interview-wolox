import React from "react";
import img from "../../../Assets/img_social.jpg";
import XYText from "../../basics/XYText";
import XYButton from "../../basics/XYButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../basics/fontawesome";

const Promo = () => {

  return (
    <div className="promo">
      <div className="container r-c-c">
        <div className="img-container r-c-c">
          <div className="socialmedia-container c-sa-c">


            <XYText
              className="title c-c-c"
              size="1"
              content="white-1[We are more than ] aqua-1[450 + ]"
            />

            
            <div className="r-c-c socialmedia-description">
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                color="white"
                className="fs-2 icon"
              />
              <XYText
                className="username"
                content="@Xinergy"
                size="5"
                weight="3"
                color="white"
              />
            </div>
            <XYButton
              className="btn-follow"
              content="Follow us"
              fontColor="white"
              fontWeight="2"
              fontSize="5"
              outline
            />
          </div>

          <img alt="social-img" src={img} />
        </div>

        <div className="title-container r-c-c">
          <XYText
            size="3"
            weight="3"
            content="dark-[Our job is to ] blue-1[convert ] aqua-1[great ideas ] dark-[into experiences.]"
            className="title"
          />
        </div>
      </div>
    </div>
  );
};

export default Promo;

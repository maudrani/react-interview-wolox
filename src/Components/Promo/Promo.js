import React from "react";
import img from "../../Assets/img_woloxer@3x.png";
import WxText from "../basics/WxText";
import WxButton from "../basics/WxButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../basics/fontawesome";

const Promo = () => {
  return (
    <div className="promo">
      <div className="container r-c-c">
        <div className="img-container r-c-c">
          <div className="socialmedia-container c-sa-c">
            <WxText
              className="title"
              size="1"
              content="green-1[350 + ] blue-1[Woloxers]"
            />
            <div className="r-c-c socialmedia-description">
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                color="white"
                className="fs-2 icon"
              />
              <WxText
                className="username"
                content="@Wolox"
                size="5"
                weight="3"
                color="white"
              />
            </div>
            <WxButton
              className="btn-follow"
              content="Siguenos"
              fontColor="white"
              fontWeight="2"
              fontSize="5"
              outline
            />
          </div>

          <img alt="social-img" src={img} />
        </div>

        <div className="title-container r-c-c">
          <WxText
            size="3"
            weight="3"
            content="dark-[Trabajamos para ] blue-1[convertir ] green-1[ideas ] dark-[en productos.]"
            className="title"
          />
        </div>
      </div>
    </div>
  );
};

export default Promo;

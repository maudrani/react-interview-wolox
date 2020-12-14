import React from "react";
import Enunciate from "../SubComponents/Enunciate";
import Banner from "../SubComponents/Banner";
import SocialMedia from "./SocialMedia";
import image1 from "../../Assets/img_woloxer@3x.png";

const Promo = () => {
  return (
    <div className="promo">
      <div className="column-center-center banner">
        <Banner
          containerClass="row-center-center "
          imgClass="img-social"
          alt="woloxer"
          src={image1}
        />

        <div className="description-container">
          <Enunciate
            containerClass="row-center-flex-end title "
            content={
              <>
                <span className="fc-green fw-2 fs-3">350 +</span>
                <span className="fc-blue fw-3 fs-3"> Woloxers</span>
              </>
            }
          />

          <SocialMedia
            containerClass="column-flex-start-center "
            socialName="@Wolox"
            socialMedia="twitter"
            mainColor="white"
            fontWeight="4"
            iconSize="4"
          />
        </div>
      </div>

      <Enunciate
        containerClass=" row-center-center enunciate-container"
        enunciateClass=" promo-enunciate row-center-center"
        content={
          <span className="fw-4 fc-dark">
            Trabajamos para <span className="fw-2 fc-blue">convertir</span>{" "}
            <span className="fw-2 fc-green">ideas</span> en productos.
          </span>
        }
      />
    </div>
  );
};

export default Promo;

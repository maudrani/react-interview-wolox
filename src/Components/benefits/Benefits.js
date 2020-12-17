import React from "react";
import WxText from "../basics/WxText";
import BenefitList from "./benefit-list";

const Benefit = () => {
  return (
    <div class="benefits">
      <div className="container c-sa-c ">
        <WxText
          className=" promo-title"
          size="4"
          content="dark-3[Entre los beneficios que ofrecemos se encuentran ] blue-3[;)]"
        />
        <BenefitList className=" benefits-list" />
      </div>
    </div>
  );
};

export default Benefit;

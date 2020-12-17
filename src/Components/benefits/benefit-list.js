import React from "react";
import Benefit from "./benefit";
import benefitsDB from "./data/benefitsDB";

const BenefitList = ({ className }) => {
  return (
    <div className={"benefits-list r-sa-c " + className}>
      {benefitsDB.map((benefit, id) => {
        return <Benefit key={id} title={benefit.title} image={benefit.img} />;
      })}
    </div>
  );
};

export default BenefitList;

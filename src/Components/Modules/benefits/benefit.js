import React from "react";
import XYText from "../../basics/XYText";

const Benefit = ({ title, image, className }) => {
  return (
    <div className={"benefit c-c-c " + className}>
      <div className="img-container r-c-c">
        <img alt="benefit-img" className="image" src={image} />
      </div>
      <div className="title-container c-fs-c ">
        <XYText size="5" weight="3" content={title} className="title" />
      </div>
    </div>
  );
};

export default Benefit;

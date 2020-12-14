import React from "react";

const Banner = ({ containerClass, alt, src, imgClass }) => {
  return (
    <div className={containerClass}>
      <img alt={alt} src={src} className={imgClass} />
    </div>
  );
};

export default Banner;

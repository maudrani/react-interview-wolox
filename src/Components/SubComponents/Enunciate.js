import React from "react";

const Enunciate = ({ content, containerClass, enunciateClass }) => {
  return (
    <div className={containerClass}>
      <span className={enunciateClass}> {content} </span>
    </div>
  );
};

export default Enunciate;

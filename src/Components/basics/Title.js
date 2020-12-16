import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";

const Title = ({ content = "", size = 5, weight = 4, color = "dark" }) => {

  let classSearcher = new RegExp(/(?<=-)\w+-\w+-\w+/, "gmi");
  let contentSearcher = new RegExp(/(?<=\[)(.*?)(?=\])/, "gmi");
  let contentCleaner = new RegExp(/(\[)|(\])|(-)/, "gmi");

  let contentsArray = content.match(contentSearcher);
  let classesArray = content.match(classSearcher);

  const parseClass = (clase = "") => {
    const classData = clase.split("-");
    return `fc-${classData[0]} fw-${classData[1]} fs-${classData[2]}`;
  };

  const spanGenerator = () => {
   
  };

  return (
    <span className={`fs-${size} fw-${weight} fc-${color}`}>
      {content}
    </span>
  );
};

export default Title;

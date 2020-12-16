import React from "react";

const Title = ({ content = "", size = 5, weight = 4, color = "dark" }) => {
  let customContentFinder = new RegExp(/\w+-\w\[.*?\]/, "gmi");
  let stylesFinder = new RegExp(/(?<=)\w+-./, "gmi");
  let textsFinder = new RegExp(/(?<=\[)(.*?)(?=\])/, "gmi");

  function isCustomContent(content = "") {
    return content.match(customContentFinder) !== null ? true : false;
  }

  function decodeStyle(codedStyle = "") {
    let decodedStyle = codedStyle.replace(/-/, " fw-").replace(/^/, "fc-");

    return decodedStyle;
  }

  const createElementNormal = (content = "") => {
    return (
      <span className={`fs-${size} fw-${weight} fc-${color}`}>{content}</span>
    );
  };

  const createCustomElement = (content = "") => {
    const codedStyles = content.match(stylesFinder);
    const codedTexts = content.match(textsFinder);

    return (
      <span className={`fs-${size}`}>
        {" "}
        {codedTexts.map((text, id) => {
          return (
            <span key={id} className={decodeStyle(codedStyles[id])}>
              {text}
            </span>
          );
        })}{" "}
      </span>
    );
  };

  return isCustomContent(content)
    ? createCustomElement(content)
    : createElementNormal(content);
};

export default Title;

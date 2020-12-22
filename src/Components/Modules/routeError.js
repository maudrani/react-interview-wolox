import React from "react";
import WxText from "../Basics/WxText";
import WxButton from "../Basics/WxButton";
import { useHistory } from "react-router-dom";

const RouteError = () => {
    const history = useHistory();

  return (
    <div className="routeError r-c-c">
      <div className="container c-sa-c">
        <WxText
          size="1"
          weight="5"
          content="blue-1[¡] blue-1[Oh ] green-1[oh] green-1[!]"
        />

        <WxText
          size="3"
          weight="5"
          content="dark-4[No encontramos lo que buscabas ] blue-[:(]"
        />
        <div className="options c-sa-c">
          <WxText
            className="title"
            size="4"
            weight="5"
            content="blue-1[¿] dark-4[Quieres Volver] green-1[?]"
          />
          <WxButton
            className="btn-volver"
            fontWeight="3"
            content="Si :("
            onClick={()=> history.push("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default RouteError;

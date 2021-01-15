import React from "react";
import XYText from "../basics/XYText";
import XYButton from "../basics/XYButton";
import { useHistory } from "react-router-dom";

const RouteError = () => {
    const history = useHistory();

  return (
    <div className="routeError r-c-c">
      <div className="container c-sa-c">
        <XYText
          size="1"
          weight="5"
          content="blue-1[¡] blue-1[Oh ] aqua-1[oh] aqua-1[!]"
        />

        <XYText
          size="3"
          weight="5"
          content="dark-4[We did'nt found what you were looking for ] blue-[:(]"
        />
        <div className="options c-sa-c">
          <XYText
            className="title"
            size="4"
            weight="5"
            content="blue-1[¿] dark-4[Wanna come back] aqua-1[?]"
          />
          <XYButton
            className="btn-volver"
            fontWeight="3"
            content="Sure :("
            onClick={()=> history.push("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default RouteError;

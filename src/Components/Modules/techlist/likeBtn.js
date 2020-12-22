import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "../../Basics/fontawesome";
import { useLocalStorage } from "../../dB/useLocalStorage";

const LikeBtn = ({ saveFav, className, liked, key, name }) => {
  const [clicked, setClicked] = useState(liked);
  const [userData, setUserData] = useLocalStorage("user", "");

  useEffect(() => {
    if (userData) {
      try {
        if (userData.favList.includes(name)) {
          setClicked(true);
        }
      } catch (err)  {
        console.log(err)
      }   
    }
  }, []);

  return (
    <div onClick={() => setClicked(!clicked)}>
      <FontAwesomeIcon
        onClick={saveFav}
        icon={["fa", "heart"]}
        style={{ cursor: "pointer" }}
        className={`fc-${!clicked ? "gray" : "blue"} btn-like`}
      />
    </div>
  );
};

export default LikeBtn;

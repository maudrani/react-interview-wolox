import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LikeBtn = ({name, userData,setUserData }) => {
  const [clicked, setClicked] = useState(false);

  const saveFavInUser = () => {

    let existInFav = userData.favList.includes(name);

    if (!existInFav) {
      let newList = userData.favList;
      newList.push(name);
      setUserData({...userData,favList: newList});
    } else {
      let newList = userData.favList;
      let deleteIndex = newList.indexOf(name);
      newList.splice(deleteIndex, 1);
      setUserData({...userData, favList: newList});
    }
  }

  useEffect(() => {
    userData.favList.includes(name) ? setClicked(true) : setClicked(false);
  }, [userData.favList, setClicked, name]);

  return (
    <div>
      <FontAwesomeIcon
        onClick={() => saveFavInUser() || setClicked(!clicked)}
        icon={["fa", "heart"]}
        style={{ cursor: "pointer" }}
        className={`fc-${!clicked ? "gray" : "blue"} btn-like`}
      />
    </div>
  );
};

export default LikeBtn;

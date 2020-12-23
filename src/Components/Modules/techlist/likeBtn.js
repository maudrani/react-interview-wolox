import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LikeBtn = ({ className, key, name, favList, saveList }) => {
  const [clicked, setClicked] = useState(false);

  const saveFav = () => {
    let existInFav = favList.includes(name);

    if (!existInFav) {
      saveList([...favList, name]);
    } else {
      let newList = favList;
      let deleteIndex = newList.indexOf(name);
      newList.splice(deleteIndex, 1);
      saveList(newList);
    }
  };

  useEffect(() => {
    favList.includes(name) ? setClicked(true) : setClicked(false);
  }, [favList, setClicked, name]);

  return (
    <div>
      <FontAwesomeIcon
        onClick={() => saveFav() || setClicked(!clicked)}
        icon={["fa", "heart"]}
        style={{ cursor: "pointer" }}
        className={`fc-${!clicked ? "gray" : "blue"} btn-like`}
      />
    </div>
  );
};

export default LikeBtn;

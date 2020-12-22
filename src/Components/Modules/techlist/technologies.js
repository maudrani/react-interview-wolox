import React, { useState, useEffect } from "react";
import LikeBtn from "./likeBtn";
import { useLocalStorage } from "../../dB/useLocalStorage";

const Technologies = ({ className, dataToList, sorter, favList, setFavList }) => {
  const [hasData, setHasData] = useState(false);
  const [userData, setUserData] = useLocalStorage("user", "");

  const saveFav = (key) => {
    let techName = dataToList[key].tech;
    let existInFav = favList.includes(techName);

    if (!existInFav) {
      setFavList([...favList, techName]);
    } else {
      let newList = favList;
      let deleteIndex = newList.indexOf(techName);
      newList.splice(deleteIndex, 1);
      setFavList(newList);
    }

    setUserData({ ...userData, favList: favList });
  };  

  useEffect(() => {
    if (dataToList) {
      setHasData(true);
    }
  }, [dataToList]);

  useEffect(() => {
    try {
      setFavList(userData.favList);
    } catch (err){
      console.log(err);
    }
  }, [])

  return (
    <div className={`${className} `}>
      <ul className="r-sa-c fw-2 fs-5 fc-gray descriptions">
        <li>Logo</li>
        <li>
          <a onClick={sorter} className="fc-gray" href="#sort">
            Tecnología
          </a>
        </li>
        <li>Autor</li>
        <li>Lenguaje</li>
        <li>Sector</li>
        <li>Año</li>
        <li>Licencia</li>
      </ul>

      <div className="dataPanel">
        {!hasData
          ? null
          : dataToList.map((item, key) => {
              return (
                <div key={key} className="r-c-c tech-row">
                  <div className="r-c-c">
                    <LikeBtn name={item.tech} saveFav={() => saveFav(key)} />
                  </div>
                  <ul key={key} className="r-sa-c tech-data">
                    <li>
                      <span className="inset-description fw-2 fc-gray">
                        Logo:
                      </span>
                      <img src={item.logo} alt="logo-tech"></img>
                    </li>
                    <li>
                      <span className="inset-description fw-2 fc-gray">
                        Tecnoligía:
                      </span>
                      {item.tech}
                    </li>
                    <li>
                      {" "}
                      <span className="inset-description fw-2 fc-gray">
                        Autor:
                      </span>
                      {item.author}
                    </li>
                    <li>
                      {" "}
                      <span className="inset-description fw-2 fc-gray">
                        Lenguaje:
                      </span>
                      {item.language}
                    </li>
                    <li>
                      <span className="inset-description fw-2 fc-gray">
                        Sector:
                      </span>
                      {item.type}
                    </li>
                    <li>
                      <span className="inset-description fw-2 fc-gray">
                        Año:
                      </span>
                      {item.year}
                    </li>
                    <li>
                      {" "}
                      <span className="inset-description fw-2 fc-gray">
                        Licencia:
                      </span>
                      {item.license}
                    </li>
                  </ul>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Technologies;

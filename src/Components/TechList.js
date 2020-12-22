/* eslint-disable default-case */
import React, { useEffect, useState, lazy, Suspense } from "react";
import Axios from "axios";
import WxInput from "./Basics/WxInput";
import WxText from "./Basics/WxText";
import WxList from "./Basics/WxList";
import Loader from "./Basics/loader";
import Navbar from "./Layout/navbar/NavBar";

const Technologies = lazy(() => import("./Modules/techlist/technologies"));

const TechList = () => {
  const [techList, setTechList] = useState();
  const [sortedList, setSortedList] = useState();
  const [techTypes, setTechTypes] = useState([
    "Todos",
    "Back-End",
    "Front-End",
    "Mobile",
  ]);

  const [alreadySorted, setAlreadySorted] = useState(false);
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let apiData;

    Axios.get(
      "http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs"
    )
      .then(({ data }) => {
        setTechList(data);
        setSortedList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    return apiData;
  };

  const sortByType = (input) => {
    let list =
      input === "Todos"
        ? techList
        : techList.filter((tech) => tech["type"] === input);

    setSortedList(list);
  };

  const sortByOrder = (input) => {
    let list = sortedList ? sortedList : techList;

    function compare(a, b) {
      const dataA = a.tech.toUpperCase();
      const dataB = b.tech.toUpperCase();

      let comparison = 0;
      if (dataA > dataB) {
        comparison = 1;
      } else if (dataA < dataB) {
        comparison = -1;
      }
      return comparison;
    }

    alreadySorted ? list.reverse(compare) : list.sort(compare);

    setAlreadySorted(!alreadySorted);

    setSortedList(list);
  };

  const sortByInput = (input) => {
    let list = !input
      ? techList
      : techList.filter((tech) => {
          return tech["tech"].toUpperCase().search(input.toUpperCase()) !== -1;
        });

    setSortedList(list);
  };

  return (
    <div className="tech-list">
      <Suspense fallback={<Loader panel type="2" />}>
        <Navbar userFavs={favList} className="navbar" hideLinks />
        <div className="searchBar r-c-fe">
          <WxInput
            color="blue"
            label="Nombre"
            fontWeight="5"
            name="tech-name"
            className="input"
            onChange={(e) => sortByInput(e.target.value)}
          />
          <WxList
            labelContent="Sector"
            labelFontSize="5"
            listFontSize="4"
            listFontWeight="5"
            listItems={techTypes}
            className="listSelect"
            onChange={(e) => sortByType(e.target.value)}
          />
        </div>
        <Technologies
          favList={favList}
          setFavList={setFavList}
          sorter={(e) => sortByOrder(e)}
          className="list"
          dataToList={sortedList}
        />
      </Suspense>
    </div>
  );
};

export default TechList;

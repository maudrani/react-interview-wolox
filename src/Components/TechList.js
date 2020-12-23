/* eslint-disable default-case */
import React, { useEffect, useState, lazy, Suspense } from "react";
import Axios from "axios";
import WxInput from "./Basics/WxInput";
import WxList from "./Basics/WxList";
import Loader from "./Basics/loader";
import Navbar from "./Layout/navbar/NavBar";

const Technologies = lazy(() => import("./Modules/techlist/technologies"));

const TechList = () => {
  const [techList, setTechList] = useState();
  const [sortedList, setSortedList] = useState(['']);

  const [sortedBySelector, setSortedBySelector] = useState([]);
  const [sortedByInput, setSortedByInput] = useState([]);

  const techTypes = ["Todos", "Back-End", "Front-End", "Mobile"];
  const [alreadySorted, setAlreadySorted] = useState(false);

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

  const sortByOrder = () => {
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

  const typeFilter = (array, input) => {
    return array.filter((tech) => tech["type"] === input);
  };

  const inputFilter = (array, input) => {
    return array.filter(
      (tech) => tech["tech"].toUpperCase().search(input.toUpperCase()) !== -1
    );
  };

  const filterByType = (input) => {
    let newList = [];
    if (sortedByInput.length !== 0) {
      if (input === "Todos") {
        newList = sortedByInput;
        setSortedBySelector([]);
      } else {
        newList = typeFilter(sortedByInput, input);
        setSortedBySelector(typeFilter(techList, input));
      }
    } else {
      if (input === "Todos") {
        newList = techList;
        setSortedBySelector([]);
      } else {
        newList = typeFilter(techList, input);
        setSortedBySelector(newList);
      }
    }

    setSortedList(newList);
  };

  const filterByInput = (input) => {
    let newList = [];

    if (sortedBySelector.length !== 0) {
      newList = inputFilter(sortedBySelector, input);
      setSortedByInput(inputFilter(techList,input));
    } else {
      newList = inputFilter(techList, input);
      setSortedByInput(newList);  
    }

    setSortedList(newList);
  };

  return (
    <div className="tech-list">
      <Suspense fallback={<Loader panel type="2" />}>
        <Navbar className="navbar" hideLinks />
        <div className="searchBar r-c-fe">
          <WxInput
            color="blue"
            label="Nombre"
            fontWeight="5"
            name="tech-name"
            className="input"
            onChange={(e) => filterByInput(e.target.value)}
          />
          <WxList
            labelContent="Sector"
            labelFontSize="5"
            listFontSize="4"
            listFontWeight="5"
            listItems={techTypes}
            className="listSelect"
            onChange={(e) => filterByType(e.target.value)}
          />
        </div>
        <Technologies
          sorter={(e) => sortByOrder(e)}
          className="list"
          dataToList={sortedList}
        />
      </Suspense>
    </div>
  );
};

export default TechList;

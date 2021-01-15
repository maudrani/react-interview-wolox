import LikeBtn from "./likeBtn";
import { useLocalStorage } from "../../dB/useLocalStorage";
import XYText from "../../basics/XYText";

const Technologies = ({
  className,
  dataToList = [],
  sorter,
  userData,
  setUserData,
}) => {
  const [favList, setFavList] = useLocalStorage("favs", []);

  return (
    <div className={`${className} `}>
      <ul className="r-sa-c fw-2 fs-5 fc-blue descriptions">
        <li>Logo</li>
        <li>
          <a onClick={sorter} className="fc-blue" href="#sort">
            Tech Name
          </a>
        </li>
        <li>Author</li>
        <li>Language</li>
        <li>Type</li>
        <li>Year</li>
        <li>Licence</li>
      </ul>

      <div className="dataPanel">
        {dataToList.length !== 0 &&
          dataToList.map((item, key) => {
            return (
              <div key={key} className="r-c-c tech-row">
                <div className="r-c-c">
                  <LikeBtn
                    userData={userData}
                    setUserData={setUserData}
                    favList={favList}
                    name={item.tech}
                    saveList={setFavList}
                  />
                </div>
                <ul key={key} className="r-sa-c tech-data">
                  <li>
                    <span className="inset-description fw-2 fc-blue">
                      Logo:
                    </span>
                    <img src={item.logo} alt="logo-tech"></img>
                  </li>
                  <li>
                    <span className="inset-description fw-2 fc-blue">
                      Tech Name:
                    </span>
                    {item.tech}
                  </li>
                  <li>
                    {" "}
                    <span className="inset-description fw-2 fc-blue">
                      Author:
                    </span>
                    {item.author}
                  </li>
                  <li>
                    {" "}
                    <span className="inset-description fw-2 fc-blue">
                      Language:
                    </span>
                    {item.language}
                  </li>
                  <li>
                    <span className="inset-description fw-2 fc-blue">
                      Type:
                    </span>
                    {item.type}
                  </li>
                  <li>
                    <span className="inset-description fw-2 fc-blue">Año:</span>
                    {item.year}
                  </li>
                  <li>
                    {" "}
                    <span className="inset-description fw-2 fc-blue">
                      Licence:
                    </span>
                    {item.license}
                  </li>
                </ul>
              </div>
            );
          })}
      </div>
      <div className="results-amount r-c-c">
        <XYText
          size="4"
          weight="5"
          content={
            dataToList.length !== 0
              ? `blue-1[Results: ] dark-1[${dataToList.length}]`
              : "error-2[No Results]"
          }
        />
      </div>
    </div>
  );
};

export default Technologies;

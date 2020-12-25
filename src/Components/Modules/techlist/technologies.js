import LikeBtn from "./likeBtn";
import { useLocalStorage } from "../../dB/useLocalStorage";
import WxText from "../../Basics/WxText";

const Technologies = ({
  className,
  dataToList,
  sorter,
  userData,
  setUserData,
}) => {
  const [favList, setFavList] = useLocalStorage("favs", []);

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
        {dataToList.length === 0 ? (
          <div className="r-c-c">
            <WxText size="4" content="error-5[Sin resultados]" />
          </div>
        ) : (
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
                    <span className="inset-description fw-2 fc-gray">Año:</span>
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
          })
        )}
      </div>
      <div className="r-c-c">
        <WxText
          size="4"
          weight="5"
          content={`Total de tecnologías: ${dataToList.length}`}
        />
      </div>
    </div>
  );
};

export default Technologies;

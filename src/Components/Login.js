import React, { useEffect, useState } from "react";
import WxForm from "./Layout/form/WxForm";
import WxText from "./Basics/WxText";
import Loader from "./Basics/loader";
import { useLocalStorage } from "./dB/useLocalStorage";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [animation, setAnimation] = useState(0);
  const [userData, setUserData] = useLocalStorage("user", {});
  const [Loading, setLoading] = useState();

  const history = useHistory();

  const loadAndGo = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push("/");
    }, 2500 * Math.random());
  };

  const createUserData = async (data) => {
    const apiData = await fetch(
      "https://private-anon-4ce837f0c4-woloxfrontendinverview.apiary-mock.com/signup",
      {
        method: "POST",
        body: data,
      }
    );

    let { token } = await apiData.json();

    setUserData({ ...data, token: token });
    loadAndGo();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation(Math.floor(Math.random() * 3) + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="login c-c-c">
      {Loading ? <Loader panel type="2" className="loading-panel" /> : null}
      <div className="main-panel r-c-c">
        <div className="image-panel r-c-c">
          <svg
            viewBox="0 0 103 15"
            version="1.1"
            className={`svg-logo animation${animation}`}
          >
            <polygon points="9.4841881 0 5.77973816 9.66619885 2.23277905 0.65472665 0 0.65472665 5.78910564 15 9.44047317 5.44021837 12.9435222 14.9920815 19.0310213 0.65472665 16.7996083 0.65472665 13.0329036 9.66619885"></polygon>
            <path d="M28.5864363,7.12378255 C28.5864363,8.64669036 29.0926748,9.90256017 30.1074992,10.8866446 C31.1156728,11.8681576 32.2799432,12.3593098 33.5997234,12.3593098 C35.0341311,12.3593098 36.2428049,11.8574761 37.2255492,10.8591496 C38.2114233,9.8465811 38.7029911,8.61306335 38.7029911,7.15839859 C38.7029911,5.68731593 38.2174872,4.45439161 37.2445234,3.46061464 C36.2784059,2.45773861 35.0800994,1.9564984 33.6527337,1.9564984 C32.23241,1.9564984 31.0337123,2.45773861 30.0533152,3.46061464 C29.0754612,4.44924865 28.5864363,5.67149146 28.5864363,7.12378255 M26.5074939,7.10083706 C26.5074939,5.15759167 27.2116897,3.48870308 28.6218417,2.0933801 C30.0245606,0.698057106 31.7109139,0 33.6805103,0 C35.6260468,0 37.2944039,0.70320006 38.6847994,2.11078702 C40.0822368,3.51975861 40.7807598,5.20842779 40.7807598,7.18233311 C40.7807598,9.16731555 40.0802807,10.8504462 38.6756057,12.2331096 C37.2674098,13.6242786 35.5669726,14.3181818 33.5739029,14.3181818 C31.8108705,14.3181818 30.2277993,13.7026098 28.8270365,12.4665206 C27.2813268,11.1024509 26.5074939,9.31329633 26.5074939,7.10083706"></path>
            <polygon points="53.7304489 0.681818182 53.7304489 12.3847521 57.7727431 12.3847521 57.7727431 14.3181818 51.6556291 14.3181818 51.6556291 0.681818182"></polygon>
            <path d="M70.7263877,7.12378255 C70.7263877,8.64669036 71.2326332,9.90256017 72.2464934,10.8866446 C73.2538984,11.8681576 74.4199452,12.3593098 75.7403303,12.3593098 C77.1714323,12.3593098 78.3814919,11.8574761 79.3662058,10.8591496 C80.3515066,9.8465811 80.843668,8.61306335 80.843668,7.15839859 C80.843668,5.68731593 80.3569838,4.45439161 79.383811,3.46061464 C78.4157241,2.45773861 77.2201398,1.9564984 75.7941238,1.9564984 C74.3726069,1.9564984 73.1723279,2.45773861 72.193678,3.46061464 C71.2154193,4.44924865 70.7263877,5.67149146 70.7263877,7.12378255 M68.6476124,7.10083706 C68.6476124,5.15759167 69.351231,3.48870308 70.7600331,2.0933801 C72.1639448,0.698057106 73.8503212,0 75.8207271,0 C77.7660946,0 79.4336922,0.70320006 80.8266497,2.11078702 C82.2223457,3.51975861 82.9208784,5.20842779 82.9208784,7.18233311 C82.9208784,9.16731555 82.2194115,10.8504462 80.8160866,12.2331096 C79.4074801,13.6242786 77.706824,14.3181818 75.7135314,14.3181818 C73.9498881,14.3181818 72.367382,13.7026098 70.9638614,12.4665206 C69.4185217,11.1024509 68.6476124,9.31329633 68.6476124,7.10083706"></path>
            <polygon points="96.0844416 7.18941673 92.2925711 0.681818182 94.6552148 0.681818182 97.2887487 5.30013283 100.052302 0.681818182 102.433689 0.681818182 98.4652368 7.18941673 102.631579 14.3181818 100.301489 14.3181818 97.251854 9.09882017 94.1126453 14.3181818 91.7567097 14.3181818"></polygon>
          </svg>
        </div>

        <div className="data-panel">
          <div className="r-fs-c title">
            <WxText
              content="dark-5[Cre] blue-5[a] green-5[r ] dark-5[Cuen] blue-5[t] green-5[a]"
              size="3"
            />
          </div>

          <WxForm createPackage={createUserData} />
        </div>
      </div>
    </div>
  );
};

export default Login;

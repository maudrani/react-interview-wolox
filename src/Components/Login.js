import React, { useEffect, useState } from "react";
import XYForm from "./Layout/form/XYForm";
import XYText from "./basics/XYText";
import Loader from "./basics/loader";
import { useHistory } from "react-router-dom";

const Login = ({ setUserData }) => {
  const [animation, setAnimation] = useState(0);
  const [Loading, setLoading] = useState();

  const history = useHistory();

  const createUser = (where, data, token) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUserData({ ...data, token: token });
      where ? history.push(`/${where}`) : history.push("/");
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
    createUser("techlist", data, token);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation(Math.floor(Math.random() * 3) + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [animation]);

  return (
    <div className="login c-c-c">
      {Loading ? <Loader panel type="2" className="loading-panel" /> : null}
      <div className="main-panel r-c-c">
        <div className="image-panel r-c-c">
          <svg
            viewBox="0 0 126.9 76"
            version="1.1"
            className={`svg-logo animation${animation}`}
          >
            <polygon
              className="st0"
              points="113.6,2.1 90.5,39.9 90.1,39.3 67.6,2.1 56.6,2.1 84.6,48 85.1,48.9 85.1,73.9 95.2,73.9 95.2,49.1 
	123.8,2.1 "
            />
            <path
              className="st1"
              d="M57.7,73.9L36.2,44.3L15,73.9H3.2l27-36.8L4.8,2.1h11.7l20.1,27.6L56.5,2.1h11.2L42.4,36.8l27.2,37.1H57.7z"
            />
          </svg>
        </div>

        <div className="data-panel">
          <div className="r-fs-c title">
            <XYText
              content="dark-5[Cr] blue-5[ea] aqua-5[te ] dark-5[Acc] blue-5[ou] aqua-5[nt]"
              size="3"
            />
          </div>

          <XYForm getFormData={createUserData} />
        </div>
      </div>
    </div>
  );
};

export default Login;

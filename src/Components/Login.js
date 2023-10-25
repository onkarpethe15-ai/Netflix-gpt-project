import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSigin, setSignIn] = useState(true);
  const changeform = () => {
    setSignIn(!isSigin);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix-icon"
        />
      </div>
      <form className="p-9 w-3/12 absolute bg-black my-36 mx-auto right-0 left-0">
        <p className="text-white font-bold mx-3 text-xl">
          {isSigin ? "Sig In" : "Sing Up"}
        </p>
        {!isSigin && (
          <input
            type="text"
            placeholder="Enter Your Fullname "
            className="m-2 p-2 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="m-2 p-2 w-full"
        />
        <input
          type="password"
          placeholder="enter password"
          className="m-2 p-2 w-full"
        />
        <button className="p-3 m-3 bg-red-600 w-full">
          {" "}
          {isSigin ? "Sig In" : "Sing Up"}
        </button>
        <p className="text-white mx-3 cursor-pointer" onClick={changeform}>
          New To Netflix? <span className="font-bold">Signup</span>
        </p>
      </form>
    </div>
  );
};
export default Login;

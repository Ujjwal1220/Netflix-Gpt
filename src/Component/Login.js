import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../Utilish/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../Utilish/firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [issignform, setinsignform] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errormessage, seterrormessage] = useState(null);
  const navigate = useNavigate();

  const formvalidate = () => {
    const message = validate(email.current.value, password.current.value);
    seterrormessage(message);
    if (message) return;

    //signin / signup logic

    if (!issignform) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          seterrormessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignForm = () => {
    setinsignform(!issignform);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Page_logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 "
      >
        <h1 className="font-bold text-3xl  mb-2 ">
          {issignform ? "Sign in" : "Sign Up"}
        </h1>
        {!issignform && (
          <input
            type="text"
            placeholder=" Full Name "
            className="py-4 my-4 w-full rounded-lg bg-gray-700 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder=" Email address "
          className="py-4 my-4 w-full rounded-lg bg-gray-700 "
        />
        <input
          ref={password}
          type="Password"
          placeholder=" Password"
          className="py-4 my-4 w-full rounded-lg  bg-gray-700 "
        />
        <p className="font-3xl text-red-500">{errormessage}</p>
        <button
          className="py-4 my-4 w-full bg-red-800 rounded-lg"
          onClick={formvalidate}
        >
          {issignform ? "Sign in" : "Sign Up"}
        </button>
        <p className="text-center "> {issignform ? "Forgot Password?" : ""}</p>
        <p
          className="text-center mt-5 hover:cursor-pointer"
          onClick={toggleSignForm}
        >
          {issignform
            ? " New to Netflix? Sign up now"
            : "Already a User ? Sign In"}
        </p>
      </form>
    </div>
  );
}

export default Login;

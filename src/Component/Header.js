import { signOut } from "firebase/auth";
import { auth } from "../Utilish/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-0.5 bg-gradient-to-b from-black z-10 flex justify-between items-center w-full">
      <img
        className="w-32"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <button
        className="bg-red-800 px-4 py-2 text-white"
        onClick={handlesignout}
      >
        Signout
      </button>
    </div>
  );
};

export default Header;

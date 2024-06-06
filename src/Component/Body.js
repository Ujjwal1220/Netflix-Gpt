import React, { useEffect } from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utilish/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utilish/userslice";

const Body = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayname } = user;
        dispatch(addUser({ uid: uid, email: email, displayname: displayname }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;

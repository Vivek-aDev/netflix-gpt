import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "../Browse/Browse";
import Login from "../Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
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
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;

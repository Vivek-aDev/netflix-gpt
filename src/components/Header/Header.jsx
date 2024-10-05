import { signOut } from "firebase/auth";
import netflixLogo from "../../assets/Netflix-logo.png";
import userLogo from "../../assets/user.png";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  // console.log(user);
  
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-30">
      <img className="w-60" src={netflixLogo} alt="logo" />
      {/* <button className="bg-red-600 px-6 py-2 my-8 rounded-lg text-white font-semibold">
        Sign In
      </button> */}
      {user && (
        <div className="flex p-5 justify-between">
          <img className="w-12 h-12" src={userLogo} alt="userLogo" />
          <button
            onClick={handleSignOut}
            className="font-bold text-white h-12 px-2"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;

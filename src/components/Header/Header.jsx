import netflixLogo from "../../assets/Netflix-logo.png";

const Header = () => {
  return (
    <div className="flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-30">
      <img className="w-60" src={netflixLogo} alt="logo" />
      {/* <button className="bg-red-600 px-6 py-2 my-8 rounded-lg text-white font-semibold">
        Sign In
      </button> */}
    </div>
  );
};
export default Header;

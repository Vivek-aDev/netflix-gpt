import netflixLogo from "../../assets/Netflix-logo.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-60" src={netflixLogo} alt="logo" />
    </div>
  );
};
export default Header;

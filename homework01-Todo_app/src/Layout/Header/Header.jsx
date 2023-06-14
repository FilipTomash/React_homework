import Navbar from "../../Components/Navbar/Navbar";
import "./Header.css";

function Header(props) {
  return (
    <header className="Header">
      <h1>{props.appTitle}</h1>
      <Navbar navbarLinkData={props.navbarLinkData} />
    </header>
  );
}

export default Header;

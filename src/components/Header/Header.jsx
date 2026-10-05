import { Link } from "react-router-dom";
// import logo from "../../assets/react.svg";  // descomenta cuando tengas el logo
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to={"/"}>
                    {/* <img src={logo} alt="logo" /> */}
                    <span>🎸 Music Store MDA</span>
                </Link>
            </div>
            <Nav />
        </header>
    );
};

import { FaApple } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <a href="/">
        <FaApple style={{ fontSize: "50px", color: "white" }} />
      </a>
      <nav>
        <ul>
          <li>
            <a href=""></a>Mac
          </li>
          <li>
            <a href=""></a>iPhone
          </li>
          <li>
            <a href=""></a>iPad
          </li>
          <li>
            <a href=""></a>iWatch
          </li>
          <li>
            <a href=""></a>Support
          </li>
        </ul>
      </nav>
      <div className="icons">
        <IoSearch
          style={{
            paddingRight: "15px",
            fontSize: "40px",
            color: "white",
          }}
        />
        <p>|</p>
        <FiShoppingBag
          style={{ fontSize: "40px", paddingLeft: "15px", color: "white" }}
        />
      </div>
    </header>
  );
};

export default Header;

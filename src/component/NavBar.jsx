import navbarImage from "../images/CatLogo.webp";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ toggleBasket }, { show }) => {
  return (
    <div className="Basket">
      <img src={navbarImage} alt="Cat Logo" />
      <div className="Home">
        <a href="/#">Home</a>
      </div>
      <div className="Contact">
        <a href="/#">Contact</a>
      </div>
      <div className="About">
        <a href="/#">About</a>
      </div>
      <div className="BasketBtn">
        <button onClick={toggleBasket}>
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

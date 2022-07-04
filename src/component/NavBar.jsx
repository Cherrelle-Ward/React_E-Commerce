import navbarImage from "../images/CatLogo.webp";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ toggleBasket }, { show }) => {
  return (
    <div className="Basket">
      <img src={navbarImage} alt="Cat Logo" />
      <div className="nav_link_wrapper">
        <div className="Home">
          <a href="/#">Home</a>
        </div>
        <div className="Contact">
          <a href="/#">Contact</a>
        </div>
        <div className="About">
          <a href="/#">About</a>
        </div>
      </div>
      <div className="BasketBtn">
        <svg
          className="shopping_basket_svg"
          onClick={toggleBasket}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            id="shopping_basket_svg"
            d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;

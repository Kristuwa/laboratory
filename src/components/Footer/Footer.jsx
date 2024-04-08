import { NavLink } from "react-router-dom";
import logo from "../../images/logo-footer.svg";
import "./Footer.module.scss";

const Footer = () => {
	return <footer className="footer">
		<div className="container">
		<NavLink className="footer__logo" to="/"><img src={logo} alt="kapibaralab logo"/></NavLink>
		<p className="footer__text text">Все права защищены Российской Ассоциацией Капибар</p>
		</div>
	</footer>
};

export default Footer;
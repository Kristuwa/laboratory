import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Header.module.scss";

const Header = () => {
	return <header className="header">
		<nav className="nav">
		<NavLink className="headerLogo" to="/"><img src={logo} alt="kapibaralab logo"/>Современные методики диагностики</NavLink>
		<ul className="nav__list">
			<li className="nav__item"><NavLink className="nav__link" to="/aboutRef">Лаборатория</NavLink></li>
			<li className="nav__item"><NavLink className="nav__link" to="/galleryRef">Галерея</NavLink></li>
			<li className="nav__item"><NavLink className="nav__link" to="/requestRef">Оставить заявку</NavLink></li>
		</ul>
		</nav>
	</header>
}

export  default Header;
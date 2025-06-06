import { NavLink } from 'react-router-dom';
import './Header.css';

const icons = {
  home: 'public/icons8-home-100.png',
  contacts: 'public/icons8-phone-100.png',
  info: 'public/icons8-folder-100.png',
  telegram: 'public/icons8-telegram-100.png',
  message: 'public/icons8-mail-100.png'
};

export default function Header() {
  return (
    <header className="header">
      <nav>
        <NavLink to="/" end>
          <img src={icons.home} alt="Home" className="nav-icon" />
        </NavLink>
        <NavLink to="/info">
          <img src={icons.info} alt="Info" className="nav-icon" />
        </NavLink>
        <NavLink to="/contacts">
          <img src={icons.contacts} alt="Contacts" className="nav-icon" />
        </NavLink>
        <NavLink to="/message">
          <img src={icons.message} alt="Message" className="nav-icon" />
        </NavLink>
        <NavLink to="/telegram">
          <img src={icons.telegram} alt="Telegram" className="nav-icon" />
        </NavLink>
      </nav>
    </header>
  );
}

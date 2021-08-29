import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className={s.link}
            activeClassName={s.activeLink}
          >
            Index
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/cat"
            className={s.link}
            activeClassName={s.activeLink}
          >
            cat
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/dog"
            className={s.link}
            activeClassName={s.activeLink}
          >
            dog
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/fox"
            className={s.link}
            activeClassName={s.activeLink}
          >
            fox
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

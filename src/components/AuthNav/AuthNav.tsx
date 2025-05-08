import { NavLink } from 'react-router-dom';
import c from './AuthNav.module.css'

export default function AuthNav(){
  return (
    <div className={c.container}>
      <NavLink className={c.navText} to="/register">
        <h2>Register</h2>
      </NavLink>
      <NavLink className={c.navText} to="/login">
        <h2>Log In</h2>
      </NavLink>
    </div>
  );
};
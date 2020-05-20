import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.App_header}>
      <img src="https://fainaidea.com/wp-content/uploads/2017/08/f99e254baa9ba3df009dfd305cf10d9c.jpeg" />
      <div className={classes.loginBlock}>
        <NavLink to={"/login"}>
          {props.isAuch ? (
            <div>
              <button>{props.login} </button>
              <button onClick={props.logout}>logout</button>
            </div>
          ) : (
            <button>login</button>
          )}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

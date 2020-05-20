import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Frends from "./frends-component/Frends";
import Button from "@material-ui/core/Button";

const Navbar = props => {
  return (
    <nav className={classes.App_nav}>
      <Button variant="contained" className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>
          Profile
        </NavLink>
      </Button>
      <Button variant="contained" className={classes.item}>
        <NavLink to="/message" activeClassName={classes.activeLink}>
          Messages
        </NavLink>
      </Button>
      <Button variant="contained" className={classes.item}>
        <NavLink to="/users" activeClassName={classes.activeLink}>
          Users
        </NavLink>
      </Button>
      <Button variant="contained" className={classes.item}>
        <NavLink to="/news" activeClassName={classes.activeLink}>
          News
        </NavLink>
      </Button>
      <Button variant="contained" className={classes.item}>
        <NavLink to="music" activeClassName={classes.activeLink}>
          Music
        </NavLink>
      </Button>
      <Button variant="contained" className={classes.item}>
        <NavLink to="settings" activeClassName={classes.activeLink}>
          Settings
        </NavLink>
      </Button>

      <div className={classes.item}>
        <NavLink to="frends-content" className={classes.frendsContainer}>
          <h3>Frends</h3>
          <Frends store={props.store} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

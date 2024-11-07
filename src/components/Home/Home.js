import React, { Component } from "react";
import classes from "./Home.css";
import Guitars from "./../../assets/img/guitars.jpg";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <img src={Guitars} alt="home" className={classes.Img} />
        <div className={classes.Overlay} />
        <div className={classes.Headding}>
          <h1 className={classes.Title}>
            Create your own rythmn scales
          </h1>
          <NavLink to ="/shop">
            <button className={classes.Btn}>shop now</button>
          </NavLink>
        </div>
      </div>
    );
  }
}

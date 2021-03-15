import React, { useState } from "react";
import { withRouter } from "react-router";
import MenuIcon from "@material-ui/icons/Menu";
import NewAppLogo from "../../../assets/icons/new-app-logo.svg";
import menuItems from "./MenuItems";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Brightness5OutlinedIcon from "@material-ui/icons/Brightness5Outlined";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import { Turn as Hamburger } from "hamburger-react";
import { connect } from "react-redux";
import { TOGGLE_THEME } from "../../../modules/landing/redux/actionTypes";

const AppHeader = ({ isFooter, dispatch, theme }) => {
  const [mobileMenuState, setMobileMenuState] = useState(false);
  const toggleMenu = () => {
    setMobileMenuState((prev) => !prev);
  };

  const toggleTheme = (mode) => {
    dispatch({
      type: TOGGLE_THEME,
      payload: mode,
    });
  };
  return (
    <div className="app-header-container" id="app-header">
      <header className={`app-header `}>
        <div className="logo" id="app-logo">
          <img src={NewAppLogo} alt="fortress lending" />
        </div>

        <Hamburger
          toggled={mobileMenuState}
          className="menu-icon"
          toggle={toggleMenu}
          size={24}
          color="#f7c408"
          rounded
          style={{ display: "none" }}
        />
        <div className={`menu-items ${mobileMenuState && "visible"}`}>
          {menuItems.map((menuItem) => (
            <div
              className="menu-item"
              onClick={() => {
                setMobileMenuState(false);
                menuItem.scrollSection &&
                  document
                    .getElementById(menuItem.scrollSection)
                    .scrollIntoView({ block: "start", behavior: "smooth" });
              }}
            >
              {menuItem.name}
            </div>
          ))}
          <div className="menu-item">
            <Brightness5OutlinedIcon
              className="brightness"
              onClick={() => toggleTheme("light")}
              style={
                theme === "light" ? { color: "#f7c408" } : { color: "#FFFFFF" }
              }
            />
            <span
              style={{
                fontSize: "16px",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            >
              &#47;
            </span>
            <Brightness2OutlinedIcon
              onClick={() => toggleTheme("dark")}
              className="brightness"
              style={
                theme === "dark" ? { color: "#f7c408" } : { color: "#1E1E1E" }
              }
            />
          </div>
        </div>
        <div className={`whitepaper-wrapper ${mobileMenuState && "visible"}`}>
          <Button variant="contained" className="whitepaper-btn">
            White paper
          </Button>
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.landing.theme,
});

export default connect(mapStateToProps)(AppHeader);

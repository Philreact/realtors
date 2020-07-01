import React from "react";
import "./Header.scss";
import Logo from "../../img/logo.png";
import LogoBBC from "../../img/logo-bbc.png";
import LogoForbes from "../../img/logo-forbes.png";
import LogoTC from "../../img/logo-techcrunch.png";
import LogoBI from "../../img/logo-bi.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn">View our properties</button>
      <div className="header__seenon-text">As seen on</div>
      <div className="header__seenon-logos">
        <img src={LogoBBC} alt="" />
        <img src={LogoForbes} alt="" />
        <img src={LogoTC} alt="" />
        <img src={LogoBI} alt="" />
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router";
import "./Header.css";

const MenuItem = ({ active, children, to }) => (
  <Link to={to} className="menu-item">
    {children}
  </Link>
);

const Header = () => {
  return (
    <div>
      <div className="logo">PanGeun</div>
      <div className="menu">
        <MenuItem to={"/"}>홈</MenuItem>
        <MenuItem to={"/about"}>소개</MenuItem>
        <MenuItem to={"/post"}>포스트</MenuItem>
      </div>
    </div>
  );
};

export default Header;

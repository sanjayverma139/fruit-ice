import React from "react";
import "./navbar.css";

const nav_links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "#treats",
    display: "Treats",
  },
  {
    path: "#contact",
    display: "Contact",
  },
  {
    path: "#about",
    display: "About us",
  },
];

const Navebar = () => {
  return (
    <div className="section">
      <div className="nav-container">
        <div className="nav_wrapper">
          {/* =========== nav Logo =========== */}
          <div className="logo">
            <h2>Ice Cream</h2>
          </div>
          {/* =======================naogation menu ======================== */}
          <div className="menu">
            <ul className="menu_items">
              {nav_links.map((item) => [
                <li className="nav_item">
                  <a>{item.display}</a>
                </li>,
              ])}
            </ul>
          </div>

          {/* =============nav right================== */}

          <div className="nav_right">
            <button className="btn"> Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navebar;

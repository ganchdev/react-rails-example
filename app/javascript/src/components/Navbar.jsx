import React from "react";
import PropTypes from "prop-types";
import Jazzicon from "react-jazzicon";
import Card from "./Card";

/**
 * @param {String} menus
 * @param {String} homeUrl
 * @return {JSX.Element}
 */
function Navbar({ menus, homeUrl }) {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href={homeUrl} className="btn btn-ghost normal-case text-xl">Home</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {JSON.parse(menus).map((menu, index) => {
            return <li key={index}><a href={menu.href}>{menu.name}</a></li>;
          })}
        </ul>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Jazzicon diameter={40} seed={Math.round(Math.random() * 10000000)} />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  menus: PropTypes.string,
  homeUrl: PropTypes.string,
}

export default Navbar;

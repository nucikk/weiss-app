// eslint-disable-next-line no-unused-vars
import React from 'react'
import weissLogo from "../image/weiss-logo.svg";
import mailOutline from "../image/mail_outline.svg";
import "../style/Navbar.css";

const Navbar = () => {

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "Credentials", path: "/credentials" },
    { title: "About Us", path: "/about" },
  ];

  return (
    <div className="navbar_container">
      <img src={weissLogo} alt="weiss-logo" />
      <nav>
        <ul className="navbar_list">
          {navLinks.map((navitems, index) => (
            <li key={index}>
              <a href={navitems.url}>{navitems.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="contact_btn">
        contact <img src={mailOutline} alt="icon-mail" />
      </button>

    </div>
  );
};

export default Navbar;

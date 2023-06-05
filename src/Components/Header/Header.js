import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import Courses from "../cours-section/Courses";
import Home from "../../Pages/Home";
const navLinks = [
  {
    display: "Home",
    url: <Link to={Home}></Link>,
  },
  {
    display: "About",
    url: "/About",
  },

  {
    display: "Courses",
    url: <Link to={Courses}></Link>,
  },
  {
    display: "Pages",
    url: "/Page",
  },
  {
    display: "Blog",
    url: "/",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
            <i class="ri-door-lock-box-line"></i> ONLINE Education
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                     <a href={item.url}>{item.display}</a>
                    
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> 20 705 541
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
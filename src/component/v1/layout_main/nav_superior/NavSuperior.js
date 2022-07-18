import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "../../../../style/v1/scss/index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import _ from "lodash";
import { Nav } from "./NavLinks";
import navItemSuperior from "../../../../data/naviItemSuperior";

export default function NavSuperior() {
  const [scrollnav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY.toFixed(0) >= 800) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    Aos.init({ duration: 300 });
  }, []);

  const about = () => {
    return scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={scrollnav}>
      <div className="row w-100">
        <a href="/" onClick={about} className="col-md-2 col-sm-3">
          <img
            src="https://res.cloudinary.com/dtguzyae4/image/upload/v1658159111/pngwing.com_2_zb0mgo.png"
            style={{ width: "140px" }}
            alt=""
          />
        </a>
        <button
          className={"navbar-toggler"}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ width: "auto" }}
          // onClick={toggleMobileMenu}
        >
          <div className="gh-burger-box">
            <div className={`gh-burger-inner`}></div>
          </div>
          <i className="ri-menu-line"></i>
        </button>
        <div
          className="col-md-10 collapse navbar-collapse"
          id="navbarTogglerDemo02"
        >
          <div className="row w-100 justify-content-end">
            <div className="col-md-10 col-sm-12 d-flex lp-item-nav1 m-0">
              <div className="row w-100">
                <ul className=" navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">
                  {_.map(navItemSuperior, (dato, index) => {
                    return (
                      <>
                        <li className="nav-item me-5" key={index}>
                          <a href={dato.url}>{dato.name} <i className={dato.icon}></i></a>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* <div className="col-md-6 col-sm-12 d-flex lp-item-nav2">
              <a href="tel:+573108592884" className="d-flex me-3">
                <i className="ri-phone-fill"></i>
                <span>+57 3108592884</span>
              </a>
              <a href="#signin" className="d-flex ms-3">
                <button className="btn btn-primary px-3">
                  Prueba una Demo gratuita
                </button>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </Nav>
  );
}

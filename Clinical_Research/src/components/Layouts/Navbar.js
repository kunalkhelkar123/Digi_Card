"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NavbarTwo = () => {
  const pathname = usePathname();
  const [isSearchModalActive, setSearchModalActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSearchModal = () => setSearchModalActive(!isSearchModalActive);
  const toggleNavbar = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 170) {
        navbar.classList.add("is-sticky");
      } else {
        navbar.classList.remove("is-sticky");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="navbar" className="navbar-area bg-white shadow-md z-50 relative">
        <div className="evolta-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light flex items-center justify-between">
              <Link href="/" className="navbar-brand">
                <Image src="/images/black-logo.png" alt="logo" width={146} height={37} />
              </Link>
              
              {/* Mobile Toggle Button */}
              <button
                onClick={toggleNavbar}
                className="navbar-toggler block md:hidden"
                type="button"
                aria-label="Toggle navigation"
              >
                <span className="block w-6 h-0.5 bg-black my-1"></span>
                <span className="block w-6 h-0.5 bg-black my-1"></span>
                <span className="block w-6 h-0.5 bg-black my-1"></span>
              </button>
              
              {/* Navbar Links */}
              <div className={`absolute md:static top-16 left-0 w-full bg-white md:flex md:items-center md:space-x-6 px-4 md:px-0 ${menuOpen ? "block" : "hidden"}`}>
                <ul className="navbar-nav space-y-4 md:space-y-0 md:flex md:space-x-6">
                  {[
                    { path: "/", label: "Home" },
                    { path: "/services", label: "Services" },
                    { path: "/about", label: "About Us" },
                    { path: "/contact", label: "Contact" }
                  ].map(({ path, label }) => (
                    <li className="nav-item" key={path}>
                      <Link href={path} className={`nav-link text-black hover:text-blue-600 font-medium ${pathname === path ? "border-b-2 border-blue-600" : ""}`}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Button */}
              <div className="others-options hidden md:block">
               <div>
               <Link href="/contact" className="btn w-40 py-3   text-sm btn-primary">Contact Us</Link>
             
               </div>
             
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div className={`search-overlay ${isSearchModalActive ? "search-overlay-active" : ""}`}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            
            <div className="search-overlay-close" onClick={toggleSearchModal}>
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>
            
            <div className="search-overlay-form">
              <form>
                <input type="text" className="input-search" placeholder="Search here..." />
                <button type="submit">
                  <i className="bx bx-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTwo;

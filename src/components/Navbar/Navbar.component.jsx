import React, { useState, useEffect } from "react";
import "./Navbar.styles.css";
import Logo from "../../../public/assets/Logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="navbar-container flex justify-between p-12 px-20 align-middle z-20">
            <div className="navbar-logo-container">
                <img src={Logo} alt="" className="navbar-logo-img h-8" />
            </div>
            <div className="navbar-links-container flex justify-between">
                <div className="navbar-link text-gray-100">
                    <a
                        href=""
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("about");
                        }}
                        className="text-lg hover:text-gray-400 transition duration-300 ease-in-out"
                    >
                        About
                    </a>
                </div>
                <div className="navbar-link text-gray-100">
                    <a
                        href="https://medium.com/@saarthee"
                        to="/blog"
                        className="text-lg hover:text-gray-400 transition duration-300 ease-in-out"
                    >
                        Blog
                    </a>
                </div>
                <div className="navbar-link text-gray-100">
                    <a
                        href=""
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("footer");
                        }}
                        className="text-lg hover:text-gray-400 transition duration-300 ease-in-out"
                    >
                        Contact
                    </a>
                </div>
                <div className="navbar-link text-gray-100">
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            // scrollToSection("footer");
                        }}
                        href=""
                        className="text-lg hover:text-gray-400 transition duration-300 ease-in-out"
                    >
                        Buy me a coffee
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

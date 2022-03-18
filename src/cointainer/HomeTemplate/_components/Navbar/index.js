import React from 'react';

//Dùng NavLink hoặc Link từ "react-router-dom" để thay thế cho thẻ <a></a>, nhằm giải quyết vấn đề load lại trang làm cấu trúc singlePage bị phá vỡ
//NavLink dùng để active(giống hover)
import { Link, NavLink } from "react-router-dom";

//Chỉnh css cho Navbar
import "./style.css";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-md bg-light navbar-light">
            {/* Brand */}
            {/* NavLink đi với "to" */}
            <Link className="navbar-brand" to="/">
                <img src="./img/headTixLogo.png" alt="Logo" style={{ height: 50 }}></img>
            </Link>

            {/* Toggler/collapsibe Button */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon" />
            </button>

            {/* Navbar links */}
            <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item pl-2 pr-2">
                        <NavLink
                            exact //Không bị active 2 cái 
                            activeClassName="active" //thêm activeClassName mới active đc
                            className="nav-link"
                            to="/"
                        >
                            Lịch chiếu
                        </NavLink>
                    </li>
                    <li className="nav-item pl-2 pr-2">
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            to="/aa2"
                        >
                            Cụm rạp
                        </NavLink>
                    </li>
                    <li className="nav-item pl-2 pr-2">
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            to="/aa3"
                        >
                            Tin tức
                        </NavLink>
                    </li>
                    <li className="nav-item pl-2 pr-2">
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            to="/aa4"
                        >
                            Ứng dụng
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

import React from "react";
import { Link } from "react-router-dom";

export const SidebarCompt = () => {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link collapsed">
                        <i className="bi bi-grid" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="nav-heading">Master Data</li>
                {/* End Dashboard Nav */}
                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        data-bs-target="#components-nav"
                        data-bs-toggle="collapse"
                        href="#"
                    >
                        <i className="bi bi-menu-button-wide" />
                        <span>Master Data</span>
                        <i className="bi bi-chevron-down ms-auto" />
                    </a>
                    <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to="/admin/master-data/product">
                                <i className="bi bi-circle" />
                                <span>Product</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/master-data/room">
                                <i className="bi bi-circle" />
                                <span>Room</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/master-data/status">
                                <i className="bi bi-circle" />
                                <span>Status</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/master-data/role">
                                <i className="bi bi-circle" />
                                <span>role</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/admin/detail-product" className="nav-link collapsed">
                        <i className="bi bi-grid" />
                        <span>Detail Product</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/staff" className="nav-link collapsed">
                        <i className="bi bi-grid" />
                        <span>Staff</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/detail-product" className="nav-link collapsed">
                        <i className="bi bi-grid" />
                        <span>History</span>
                    </Link>
                </li>
                {/* End Components Nav */}
                {/* End Icons Nav */}
                {/* <li className="nav-heading">Pages</li> */}

                {/* End Error 404 Page Nav */}
                {/* <li className="nav-item">
                    <a className="nav-link " href="pages-blank.html">
                        <i className="bi bi-file-earmark" />
                        <span>Blank</span>
                    </a>
                </li> */}
                {/* End Blank Page Nav */}
            </ul>
        </aside>
    );
};

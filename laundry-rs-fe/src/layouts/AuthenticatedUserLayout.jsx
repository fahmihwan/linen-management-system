import React from "react";

import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/quill/quill.snow.css";
import "../assets/vendor/quill/quill.bubble.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/simple-datatables/style.css";

import "../assets/css/style.css";

export const AuthenticatedUserLayout = ({ children }) => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid ">
                    <div className="d-flex justify-content-between" style={{ width: "100%" }}>
                        <div className="">
                            <a className="navbar-brand" href="#">
                                LMS
                            </a>
                        </div>
                        <div className="">
                            <div className="d-flex justify-content-end">
                                <div className="dropdown">
                                    <button
                                        className="btn btn-secondary dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Fahmi Ichwanurrohm
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Setting Account
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div>{children}</div>
        </>
    );
};

import React, { useState } from "react";
import { GuestLayout } from "../../layouts/GuestLayout";
import { InputCompt } from "../../components/InputCompt";
import httpRequest from "../../utils/httpRequest";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setUser } from "./../../redux/user/userSlice";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        httpRequest({
            url: "/auth/login",
            method: "POST",
            data: {
                username: username,
                password: password,
            },
        }).then((res) => {
            dispatch(setUser(res?.data?.user));
            localStorage.setItem("token", res?.data?.authorisation?.token);
            navigate("/admin/master-data/product");
        });
    };
    return (
        <GuestLayout>
            <main>
                <div className="container">
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    <div className="d-flex justify-content-center py-4">
                                        <div className="logo d-flex align-items-center w-auto">
                                            <span className="d-none d-lg-block">Linen Management System</span>
                                        </div>
                                    </div>
                                    {/* End Logo */}
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">
                                                    Login Super Admin
                                                </h5>
                                                <p className="text-center small">
                                                    Enter your username &amp; password to login
                                                </p>
                                            </div>
                                            <form
                                                className="row g-3 needs-validation"
                                                onSubmit={handleSubmit}
                                            >
                                                <div className="col-12">
                                                    <div className="input-group has-validation">
                                                        <InputCompt
                                                            title="username"
                                                            value={username}
                                                            onChange={(e) => setUsername(e.target.value)}
                                                        />
                                                        <div className="invalid-feedback">
                                                            Please enter your username.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <InputCompt
                                                        title="password"
                                                        type="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter your password!
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100" type="submit">
                                                        Login
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </GuestLayout>
    );
};

export default Login;

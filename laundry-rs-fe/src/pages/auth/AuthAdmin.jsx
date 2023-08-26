import React, { useState } from "react";
import { GuestLayout } from "../../layouts/GuestLayout";
import { InputCompt } from "../../components/InputCompt";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import httpRequest from "../../utils/httpRequest";
import { setUser } from "../../redux/user/userSlice";

const AuthAdmin = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        httpRequest({
            url: "/auth/admin",
            method: "POST",
            data: {
                username: username,
                password: password,
            },
        }).then((res) => {
            dispatch(setUser(res?.data?.user));
            localStorage.setItem("token", res?.data?.authorisation?.token);
            navigate("/activity-menu");
        });
    };
    return (
        <GuestLayout title="admin">
            <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
                <div className="col-12">
                    <div className="input-group has-validation">
                        <InputCompt
                            title="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <div className="invalid-feedback">Please enter your username.</div>
                    </div>
                </div>
                <div className="col-12">
                    <InputCompt
                        title="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="invalid-feedback">Please enter your password!</div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary w-100" type="submit">
                        Login
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
};

export default AuthAdmin;

import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "../../layouts/AuthenticatedLayout";
import { Link, useNavigate } from "react-router-dom";
import { InputCompt, SelectCompt } from "../../components/InputCompt";
import httpRequest from "../../utils/httpRequest";
import Swal from "sweetalert2";
import Select from "react-select";

const Create = () => {
    const [isSubmit, setIsSubmit] = useState(false);
    const [optRole, setOptRole] = useState([]);

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [telp, setTelp] = useState("");
    const [role, setRole] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const dataView = {
        title: "Create Detail Product",
        linkBack: "/detail-product",
    };

    const fetchRole = () => {
        httpRequest({
            url: "/roles/list",
            method: "GET",
        }).then((res) => {
            setOptRole(res?.data?.data);
        });
    };

    useEffect(() => {
        fetchRole();
    }, []);

    const handleSubmit = (e) => {
        setIsSubmit(true);
        e.preventDefault();

        httpRequest({
            url: "/detail-product",
            method: "POST",
            data: {
                // product_id: productName?.value,
                // room_id: roomName?.value,
                // status_id: statusName,
                // qr_code: qrCode,
            },
        })
            .then((res) => {
                if (res.status == 201) {
                    Swal.fire("success", "Data berhasil di ditambah...", "success");
                    navigate(dataView?.linkBack);
                }
            })
            .catch((err) => {
                console.log(err);
                setIsSubmit(false);
            });
    };

    return (
        <AuthenticatedLayout>
            <div className="pagetitle">
                <h1>{dataView.title}</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">Master Data</li>
                        <li className="breadcrumb-item">
                            <Link to={dataView.linkBack}>List Detail Product</Link>
                        </li>
                        <li className="breadcrumb-item active">{dataView.title}</li>
                    </ol>
                </nav>
            </div>
            <section className="section">
                <div className="d-flex mb-2 justify-content-end">
                    <Link className="btn btn-primary" to={dataView?.linkBack}>
                        Kembali
                    </Link>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Form {dataView.title}</h5>
                                {/* Floating Labels Form */}
                                <form className="row g-3" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <InputCompt
                                                onChange={(e) => setName(e.target.value)}
                                                title="Name"
                                                value={name}
                                            />
                                            <InputCompt
                                                onChange={(e) => setAddress(e.target.value)}
                                                title="Address"
                                                value={address}
                                            />
                                            <InputCompt
                                                onChange={(e) => setTelp(e.target.value)}
                                                title="Telp"
                                                value={telp}
                                            />
                                            <fieldset className="row my-3">
                                                <legend className="col-form-label col-sm-3 pt-0">Role</legend>
                                                <div className="col-sm-9">
                                                    {optRole?.map((d, i) => (
                                                        <div key={i} className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="gridRadios"
                                                                id={`radio-${i}`}
                                                                defaultValue={d?.value}
                                                                onChange={(e) => setRole(e.target.value)}
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor={`radio-${i}`}
                                                            >
                                                                {d?.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="col-md-6">
                                            <InputCompt
                                                onChange={(e) => setUsername(e.target.value)}
                                                title="Username"
                                                value={username}
                                            />
                                            <InputCompt
                                                onChange={(e) => setPassword(e.target.value)}
                                                title="Password"
                                                value={password}
                                            />
                                            <div className="d-flex justify-content-end ">
                                                <button
                                                    disabled={isSubmit}
                                                    type="submit"
                                                    className="btn btn-primary me-2"
                                                >
                                                    Submit
                                                </button>
                                                <button type="reset" className="btn btn-secondary">
                                                    Reset
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/* End floating Labels Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
};

export default Create;
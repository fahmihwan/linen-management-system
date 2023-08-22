import React, { useState } from "react";
import AuthenticatedLayout from "../../../layouts/AuthenticatedLayout";
import { Link, useNavigate } from "react-router-dom";
import { InputCompt } from "../../../components/InputCompt";
import httpRequest from "../../../utils/httpRequest";
import Swal from "sweetalert2";

const Create = () => {
    const [name, setName] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const dataView = {
        title: "Tamabah Ruangan",
        linkBack: "/master-data/room",
    };

    const handleSubmit = (e) => {
        setIsSubmit(true);
        e.preventDefault();
        httpRequest({
            url: "/room",
            method: "POST",
            data: {
                room_name: name,
            },
        })
            .then((res) => {
                if (res.status == 201) {
                    Swal.fire("success", "Data berhasil di ditambah...", "success");
                    navigate("/master-data/room");
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
                            <Link to={dataView.linkBack}>List Product</Link>
                        </li>
                        <li className="breadcrumb-item active">{dataView.title}</li>
                    </ol>
                </nav>
            </div>
            <section className="section">
                <div className="d-flex mb-2 justify-content-end">
                    <Link className="btn btn-primary" to="/master-data/product">
                        Kembali
                    </Link>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Form {dataView.title}</h5>
                                {/* Floating Labels Form */}
                                <form className="row g-3" onSubmit={handleSubmit}>
                                    <InputCompt
                                        onChange={(e) => setName(e.target.value)}
                                        title="room name"
                                        value={name}
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

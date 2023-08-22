import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "../../../layouts/AuthenticatedLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { InputCompt } from "../../../components/InputCompt";
import httpRequest from "../../../utils/httpRequest";
import Swal from "sweetalert2";

const Edit = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const dataView = {
        title: "Room Edit",
        linkBack: "/master-data/room",
    };
    const fetchData = () => {
        httpRequest({
            url: `/room/${id}`,
            method: "GET",
        }).then((res) => {
            setName(res?.data?.data.product_name);
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        httpRequest({
            url: `/room/${id}`,
            method: "PUT",
            data: {
                room_name: name,
            },
        })
            .then((res) => {
                if (res.status == 200) {
                    Swal.fire("success", "Data berhasil di update...", "success");
                    navigate(dataView?.linkBack);
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AuthenticatedLayout>
            <div className="pagetitle">
                <h1>{dataView.title}</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">Master Data</li>
                        <li className="breadcrumb-item">
                            <Link to={dataView.linkBack}>List Room</Link>
                        </li>
                        <li className="breadcrumb-item active">{dataView.title}</li>
                    </ol>
                </nav>
            </div>
            <section className="section">
                <div className="d-flex mb-2 justify-content-end">
                    <Link className="btn btn-primary" to="/master-data/product">
                        back
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
                                        title="nama produk"
                                        value={name}
                                    />

                                    <div className="d-flex justify-content-end ">
                                        <button type="submit" className="btn btn-primary me-2">
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

export default Edit;

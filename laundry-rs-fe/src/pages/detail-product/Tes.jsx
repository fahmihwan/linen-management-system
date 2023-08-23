import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "../../layouts/AuthenticatedLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { InputCompt, SelectCompt } from "../../components/InputCompt";
import httpRequest from "../../utils/httpRequest";
import Swal from "sweetalert2";
import Select from "react-select";

const Tes = () => {
    const [name, setName] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [optProduct, setOptProduct] = useState([]);
    const [optRoom, setOptRoom] = useState([]);
    const [optStatus, setOptStatus] = useState([]);

    const [productName, setProductName] = useState({});
    const [roomName, setRoomName] = useState("");
    const [statusName, setStatusName] = useState("");
    const [qrCode, setQrCode] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const dataView = {
        title: "Edit Detail Product",
        linkBack: "/detail-product",
    };

    const fetchProduct = async () => {
        const response = await httpRequest({
            url: "/products/list",
            method: "GET",
        });
        setOptProduct(response?.data?.data);
    };
    const fetchData = async () => {
        const response = await httpRequest({
            url: `/detail-product/${id}`,
            method: "GET",
        });
        let data = response?.data?.data;
        setProductName({ value: data?.product?.id, label: data?.product?.product_name });
    };

    useEffect(() => {
        fetchProduct();
        fetchData();
    }, []);

    const handleSubmit = (e) => {
        setIsSubmit(true);
        e.preventDefault();

        httpRequest({
            url: "/detail-product",
            method: "POST",
            data: {
                product_id: productName?.value,
                room_id: roomName?.value,
                status_id: statusName,
                qr_code: qrCode,
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
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Form {dataView.title}</h5>
                                <form className="row g-3" onSubmit={handleSubmit}>
                                    {/* ITS WORK BUT THIS PAGE NOT USE, JUST EXAMPLE */}
                                    <select
                                        onChange={(e) => setOptProduct(e.target.value)}
                                        value={productName?.value}
                                    >
                                        {optProduct?.map((d, i) => (
                                            <option key={i} value={d?.value}>
                                                value: {d.value}, label : {d?.label}
                                            </option>
                                        ))}
                                    </select>

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

export default Tes;

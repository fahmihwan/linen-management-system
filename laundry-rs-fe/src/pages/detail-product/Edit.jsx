import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "../../layouts/AuthenticatedLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { InputCompt, SelectCompt } from "../../components/InputCompt";
import httpRequest from "../../utils/httpRequest";
import Swal from "sweetalert2";
import Select from "react-select";

const Edit = () => {
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
        linkBack: "/admin/detail-product",
    };

    const fetchProduct = () => {
        httpRequest({
            url: "/products/list",
            method: "GET",
        }).then((res) => {
            setOptProduct(res?.data?.data);
        });
    };

    const fetchRoom = () => {
        httpRequest({
            url: "/rooms/list",
            method: "GET",
        }).then((res) => {
            setOptRoom(res?.data?.data);
        });
    };
    const fetchStatus = () => {
        httpRequest({
            url: "/status/list",
            method: "GET",
        }).then((res) => {
            setOptStatus(res?.data?.data);
        });
    };

    const fetchData = () => {
        httpRequest({
            url: `/detail-product/${id}`,
            method: "GET",
        })
            .then((res) => {
                let data = res?.data?.data;
                setProductName({ value: data?.product?.id, label: data?.product?.product_name });
                setRoomName({ value: data?.room?.id, label: data?.room?.room_name });
                setStatusName(data?.status.id);
                setQrCode(data?.qr_code);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchProduct();
        fetchRoom();
        fetchData();
        fetchStatus();
    }, []);

    const handleSubmit = (e) => {
        setIsSubmit(true);
        e.preventDefault();

        httpRequest({
            url: `/detail-product/${id}`,
            method: "PUT",
            data: {
                product_id: productName?.value,
                room_id: roomName?.value,
                status_id: statusName,
                qr_code: qrCode,
            },
        })
            .then((res) => {
                if (res.status == 200) {
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
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Form {dataView.title}</h5>
                                {/* Floating Labels Form */}
                                <form className="row g-3" onSubmit={handleSubmit}>
                                    {/* SELECT IS WORKING! */}
                                    {/* <select name="" id="" value={productName?.value}>
                                        {optProduct?.map((d, i) => (
                                            <option key={i} value={d?.value}>
                                                {d?.label}
                                            </option>
                                        ))}
                                    </select> */}
                                    <SelectCompt
                                        placeholder="Product"
                                        onChange={(data) => setProductName(data)}
                                        options={optProduct}
                                        value={productName}
                                    />
                                    <SelectCompt
                                        placeholder="Room"
                                        onChange={(data) => setRoomName(data)}
                                        options={optRoom}
                                        value={roomName}
                                    />
                                    <InputCompt
                                        onChange={(e) => setQrCode(e.target.value)}
                                        title="Qr Code"
                                        value={qrCode}
                                    />

                                    <fieldset className="row my-3">
                                        <legend className="col-form-label col-sm-3 pt-0">Status</legend>
                                        <div className="col-sm-9">
                                            {optStatus?.map((d, i) => (
                                                <div key={i} className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="gridRadios"
                                                        id={`radio-${i}`}
                                                        // defaultValue={d?.value}
                                                        checked={d?.value == statusName}
                                                        value={d?.value}
                                                        onChange={(e) => setStatusName(e.target.value)}
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

export default Edit;

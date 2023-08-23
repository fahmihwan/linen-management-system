import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "../../layouts/AuthenticatedLayout";
import { Link } from "react-router-dom";
import httpRequest from "../../utils/httpRequest";
import Swal from "sweetalert2";
import { PaginationCompt } from "../../components/PaginationCompt";

const Index = () => {
    const [data, setData] = useState({});
    const [linkPage, setLinkPage] = useState("/detail-products");

    const dataView = {
        title: "List staff",
        linkCreate: "/staff/create",
    };

    const fetchData = () => {
        httpRequest({
            url: linkPage,
            method: "get",
        }).then((res) => {
            setData(res.data?.data);
        });
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Do you want to delete?",
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                httpRequest({
                    url: `/detail-product/${id}`,
                    method: "DELETE",
                }).then((res) => {
                    fetchData();
                    if (res.status == 200) {
                        Swal.fire("Saved!", "", "success");
                    }
                });
            }
        });
    };

    useEffect(() => {
        // fetchData();
    }, [linkPage]);

    return (
        <AuthenticatedLayout>
            <div className="pagetitle">
                <h1>{dataView.title}</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">Master Data</li>
                        <li className="breadcrumb-item active">{dataView.title}</li>
                    </ol>
                </nav>
            </div>
            <section className="section">
                <div className="d-flex mb-2 justify-content-end">
                    <Link className="btn btn-primary" to={dataView.linkCreate}>
                        Tambah Data
                    </Link>
                </div>
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Table {dataView.title}</h5>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nama</th>
                                        <th scope="col">username</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Telp</th>
                                        <th scope="col">role</th>
                                        <th scope="col">image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.data?.map((d, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{d?.product?.product_name}</td>
                                            <td>{d?.room?.room_name}</td>
                                            <td>{d?.qr_code}</td>
                                            <td>{d?.status?.status_name}</td>
                                            <td>
                                                <Link
                                                    to={`/detail-product/${d?.id}/edit`}
                                                    className="btn btn-warning me-2"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(d?.id)}
                                                    className="btn btn-danger"
                                                >
                                                    delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <PaginationCompt
                                total={data?.total}
                                links={data?.links}
                                setLinkPage={setLinkPage}
                            />
                            {/* End Table with hoverable rows */}
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
};

export default Index;
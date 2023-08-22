import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "../../../layouts/AuthenticatedLayout";
import { Link } from "react-router-dom";
import httpRequest from "../../../utils/httpRequest";
import Swal from "sweetalert2";
import { PaginationCompt } from "../../../components/PaginationCompt";

const Index = () => {
    const [data, setData] = useState();
    const [linkPage, setLinkPage] = useState("/products");

    const dataView = {
        title: "List Product ",
        linkCreate: "/master-data/product/create",
    };

    const fetchData = () => {
        httpRequest({
            url: linkPage,
            method: "get",
        }).then((res) => {
            setData(res.data);
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
                    url: `/product/${id}`,
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
        fetchData();
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
                                        <th scope="col">Product</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.data?.data?.map((d, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{d?.product_name}</td>
                                            <td>
                                                <Link
                                                    to={`/master-data/product/${d?.id}/edit`}
                                                    className="btn btn-warning me-2"
                                                >
                                                    Ubah
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
                                links={data?.data?.links}
                                total={data?.data?.total}
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

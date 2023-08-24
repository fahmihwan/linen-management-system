import React from "react";
import { AuthenticatedUserLayout } from "../../layouts/AuthenticatedUserLayout";
import { Link } from "react-router-dom";

const ActivityMenu = () => {
    return (
        <AuthenticatedUserLayout>
            <div className="container">
                <div
                    className="row justify-content-center align-items-center d-flex"
                    style={{ height: "80vh" }}
                >
                    <div className="col-md-12 ">
                        <div className="text-center">
                            <h1>Choose Menu : </h1>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                <Link
                                    type="button"
                                    to={`/activity-menu/1/scanqr`}
                                    className="btn btn-outline-primary"
                                >
                                    Receiving
                                </Link>
                                <Link
                                    type="button"
                                    to={`/activity-menu/1/scanqr`}
                                    className="btn btn-outline-primary"
                                >
                                    Ready to pickup
                                </Link>
                                <Link
                                    type="button"
                                    to={`/activity-menu/1/scanqr`}
                                    className="btn btn-outline-primary"
                                >
                                    Issuing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedUserLayout>
    );
};
export default ActivityMenu;

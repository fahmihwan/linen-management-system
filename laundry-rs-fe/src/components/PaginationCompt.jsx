import React from "react";

export const PaginationCompt = ({ links, total, setLinkPage }) => {
    const getClassName = (active) => {
        if (active) {
            return "page-link active";
        } else {
            return "page-link";
        }
    };
    return (
        <div className="d-flex justify-content-between">
            <div className="text-secondary">Total : {total}</div>
            <nav aria-label="...">
                <ul className="pagination">
                    {links?.map((link, key) =>
                        link?.url == null ? (
                            <li key={key} className="page-item">
                                <button className="page-link disabled">{link?.label}</button>
                            </li>
                        ) : (
                            <li key={key} className="page-item">
                                <button
                                    onClick={() => setLinkPage(link?.url)}
                                    className={getClassName(link?.active)}
                                >
                                    {link?.label}
                                </button>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        </div>
    );
};

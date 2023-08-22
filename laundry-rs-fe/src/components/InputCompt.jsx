import React from "react";

export const InputCompt = ({ value, title, onChange }) => {
    return (
        <div className="form-floating">
            <input
                value={value}
                onChange={onChange}
                type="text"
                className="form-control"
                id="floatingName"
                placeholder={title}
            />
            <label htmlFor="floatingName">{title}</label>
        </div>
    );
};

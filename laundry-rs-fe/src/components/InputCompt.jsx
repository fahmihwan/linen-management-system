import React from "react";
import Select from "react-select";

export const InputCompt = ({ value, title, onChange, type = "text" }) => {
    return (
        <div className="form-floating">
            <input
                value={value}
                onChange={onChange}
                type={type}
                className="form-control mb-2"
                id={"floatingName" + title}
                placeholder={title}
            />
            <label htmlFor={"floatingName" + title}>{title}</label>
        </div>
    );
};

export const InputFileCompt = ({ title, onChange, accept }) => {
    return (
        <div>
            <input
                onChange={onChange}
                accept={accept}
                type="file"
                className="form-control mb-2"
                id="floatingName"
                placeholder={title}
            />
        </div>
    );
};

export const SelectCompt = ({ placeholder, onChange, options, value }) => {
    return (
        <Select
            placeholder={placeholder}
            onChange={onChange}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    height: "60px",
                    borderColor: "#ccdbe4",
                }),
            }}
            options={options}
            value={value}
        />
    );
};

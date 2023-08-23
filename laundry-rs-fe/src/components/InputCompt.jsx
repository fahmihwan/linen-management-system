import React from "react";
import Select from "react-select";

export const InputCompt = ({ value, title, onChange }) => {
    return (
        <div className="form-floating">
            <input
                value={value}
                onChange={onChange}
                type="text"
                className="form-control mb-2"
                id="floatingName"
                placeholder={title}
            />
            <label htmlFor="floatingName">{title}</label>
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

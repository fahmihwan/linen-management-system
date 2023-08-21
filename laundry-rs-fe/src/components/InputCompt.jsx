import React from "react";

export const InputCompt = ({ register, title }) => {
    return (
        <div className="form-floating">
            <input {...register} type="text" className="form-control" id="floatingName" placeholder={title} />
            <label htmlFor="floatingName">{title}</label>
        </div>
    );
};

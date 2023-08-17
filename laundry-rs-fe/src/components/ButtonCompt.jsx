import React from "react";
import { Link } from "react-router-dom";

export const ButtonPrimary = ({ text, type }) => {
    return (
        <button type={type} class="btn btn-primary">
            {text}
        </button>
    );
};

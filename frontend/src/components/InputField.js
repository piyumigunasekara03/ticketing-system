import React from "react";

const InputField = ({ value, onChange, placeholder, disabled }) => {
    return (
        <input
            type="number"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            style={{
                padding: "10px",
                margin: "10px 0",
                borderRadius: "5px",
                border: "1px solid #ccc",
            }}
        />
    );
};

export default InputField;

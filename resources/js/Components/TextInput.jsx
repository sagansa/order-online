import clsx from "clsx";
import React, { useEffect, useRef } from "react";

export default function TextInput({
    type = "text",
    // name,
    // value,
    className,
    // autoComplete,
    // required,
    isFocused,
    // handleChange,
    ...props
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                // name={name}
                // value={value}
                className={clsx(
                    "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",
                    className
                )}
                ref={input}
                // autoComplete={autoComplete}
                // required={required}
                // onChange={(e) => handleChange(e)}
            />
        </div>
    );
}

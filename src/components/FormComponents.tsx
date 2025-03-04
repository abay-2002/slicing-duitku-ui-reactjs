import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

interface InputProps {
    id: string | null;
    type: string;
    label: string;
}

function Input({ id, type, label }: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const [checked, setChecked] = useState(false);

    return (
        <>
            {(type === "email" || type === "password" || type === "text") ? (
                <div className="relative w-full max-w-96">
                    <label
                        htmlFor={id || ""}
                        className={`text-lg capitalize absolute mt-2 transition-all duration-200 ${
                            isFocused || hasValue
                                ? "text-yellow-600 text-xs -top-2"
                                : "text-gray-500 text-base top-2"
                        }`}
                    >
                        {label}
                    </label>
                    <input
                        id={id || ""}
                        type={type}
                        className="w-full pt-6 pb-1 focus:border-none outline-none"
                        onFocus={() => setIsFocused(true)}
                        onBlur={(e) => {
                            setIsFocused(false);
                            setHasValue(e.target.value !== "");
                        }}
                    />
                    {/* Animated Underline */}
                    <span
                        className={`absolute left-0 bottom-1 bg-yellow-700 transition-all ${
                            isFocused ? "w-[90%] h-0.5" : "w-[90%] h-[1px]"
                        }`}
                    ></span>
                </div>
            ) : type === "checkbox" ? (
                <>
                    <input
                        id={id || undefined}
                        type="checkbox"
                        className="hidden"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    <div className={`w-5 h-5 border-2 border-gray-500 rounded-sm flex items-center justify-center transition-all ${checked ? "border-purple-600" : ""}`}>
                        {checked && (
                            <span
                                className="text-purple-600 text-lg transition-transform duration-500 ease-in-out"
                                style={{ transform: checked ? "rotate-90" : "rotate-0" }}
                            >
                                ✔
                            </span>
                        )}
                    </div>
                </>
            ) : (
                <input id={id || undefined} type={type} placeholder={type} />
            )}
        </>
    );
}

interface CheckboxProps {
    name: string
}

function Checkbox({ name }: CheckboxProps) {
    return (
        <div className='flex flex-row gap-2 items-center text-base text-gray-400 font-medium'>
            <Input
                label={name}
                id={`checkbox-${uuidv4}`}
                type="checkbox"
            />
            <label
                htmlFor={`checkbox-${uuidv4}`}
            >
                {name}
            </label>
        </div>
    )
}

interface ButtonProps {
    name: string,
    link: string | null
}

function Button({ name, link }: ButtonProps) {
    return (
        <>
            {link ?
                <Link
                    to={`${link}`}
                    className="w-fit cursor-pointer bg-green-500 text-white font-medium py-2 px-14 rounded-md transition-all duration-200 hover:bg-green-600 active:scale-95"
                >
                    {name}
                </Link>
            :
                <button
                    className="w-fit cursor-pointer bg-green-500 text-white font-medium py-2 px-14 rounded-md transition-all duration-200 hover:bg-green-600 active:scale-95"
                >
                    {name}
                </button>
            }
        </>
    )
}

export { Input, Button, Checkbox }
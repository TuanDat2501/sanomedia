import './style.scss'
import React from "react";

interface Props {
    text:string
    icon?:React.ReactElement,
}
const ButtonRed = ({text,icon}:Props) => {
    return (
        <div>
            <div className="button">
                <button className="flex items-center justify-center gap-1">
                    <strong>{text}</strong>
                    {icon && <span>{icon}</span>}
                </button>
            </div>
        </div>
    );
};

export default ButtonRed;
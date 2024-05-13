import './style.scss'
import React from "react";

interface Props {
    text: string
    icon?: React.ReactElement,
    disabled?: boolean,
    isLoading?: boolean,
}

const ButtonRed = ({text, icon, disabled, isLoading}: Props) => {
    return (
        <div>
            <div className="button">
                <button disabled={disabled} className="flex items-center justify-center gap-1">
                    {isLoading ? <span className="loader"></span> :
                        <>
                        <strong>{text}</strong>
                        {icon && <span>{icon}</span>}
                        </>
                    }

                </button>
            </div>
        </div>
    );
};

export default ButtonRed;
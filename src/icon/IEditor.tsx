import React from 'react';

interface Props {
    width?: number;
    height?: number;
}

const IEditor = ({width, height}: Props) => {
    return (
        <div style={{width: width || "150px", height: height || "150px"}}>
            <img src="/image/IEditor1.png" alt="icon"/>
        </div>
    );
};

export default IEditor;
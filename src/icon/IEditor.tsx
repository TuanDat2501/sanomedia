import React from 'react';
import Image from "next/image";

interface Props {
    width?: number;
    height?: number;
}

const IEditor = ({width, height}: Props) => {
    return (
        <div style={{width: width || "150px", height: height || "150px"}}>
            <Image width={width || 150}  height={height||150} src="./image/IEditor1.png" alt="icon"/>
        </div>
    );
};

export default IEditor;
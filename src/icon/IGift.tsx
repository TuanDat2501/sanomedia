import React from 'react';
import Image from "next/image";
interface Props {
    width?: number;
    height?: number;
}
const IGift = ({width, height}: Props) => {
    return (
        <div style={{width: width || 25, height: height || 25}}>
            <Image width={width || 25}  height={height||25} src="./image/IGift.png" alt=""/>
        </div>
    );
};

export default IGift;
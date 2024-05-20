import React from 'react';
import Image from "next/image";
interface Props {
    width?: number;
    height?: number;
}
const IHighFive = ({width, height}: Props) => {
    return (
        <div style={{width: width || 25, height: height || 25}}>
            <Image width={width || 100}  height={height||100} quality={100} src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/IHighFive.png?alt=media&token=b01cf60b-2d96-4707-a2f8-87bd3cbf9b01" alt=""/>
        </div>
    );
};

export default IHighFive;
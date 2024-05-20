import React from 'react';
import Image from "next/image";
interface Props {
    width?: number;
    height?: number;
}
const IGift = ({width, height}: Props) => {
    return (
        <div style={{width: width || 25, height: height || 25}}>
            <Image width={width || 100}  height={height||100} quality={100} src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/IGift.png?alt=media&token=0e2b6e8d-9c6e-40c8-bb66-632cd61fc3cc" alt=""/>
        </div>
    );
};

export default IGift;
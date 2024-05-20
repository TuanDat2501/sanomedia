import React from 'react';
import Image from "next/image";
interface Props {
    width?: number;
    height?: number;
}

const ICreative = ({width, height}: Props) => {
    return (
        <div style={{width: width || 25, height: height || 25}}>
            <Image  width={width || 100} height={height || 100} quality={100} src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/ICreative.png?alt=media&token=865bc749-d015-489f-8a84-2f5838cee25e" alt=""/>
        </div>
    );
};

export default ICreative;
import React from 'react';
interface Props {
    width?: number;
    height?: number;
}
const IHighFive = ({width, height}: Props) => {
    return (
        <div style={{width: width || 25, height: height || 25}}>
            <img src="/image/IHighFive.png" alt=""/>
        </div>
    );
};

export default IHighFive;
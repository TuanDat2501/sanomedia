import React from 'react';
interface Props {
    width?: number;
    height?: number;
}

const ICreative = ({width, height}: Props) => {
    return (
        <div style={{width: width || 25, height: height || 25}}>
            <img src="/image/ICreative.png" alt=""/>
        </div>
    );
};

export default ICreative;
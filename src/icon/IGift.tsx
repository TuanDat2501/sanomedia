import React from 'react';
interface Props {
    width?: number;
    height?: number;
}
const IGift = ({width, height}: Props) => {
    return (
        <div style={{width: width || 25, height: height || 25}}>
            <img src="/image/IGift.png" alt=""/>
        </div>
    );
};

export default IGift;
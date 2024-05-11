import React from 'react';
interface Props{
    width?:number;
    height?:number;
}
const IEditor = ({width,height}:Props) => {
    return (
        <div style={{width: width || "150px",height:height||"150px"}}>
            <img src="/image/IEditor.png" alt=""/>
        </div>
    );
};

export default IEditor;
import React from 'react';
interface Props{
    width?:number;
    height?:number;
}
const IYoutube = ({height,width}:Props) => {
    return (
        <div>
            <svg width={width || 32} height={height||32} viewBox="0 0 64.00 64.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff"
                 strokeWidth="2.6239999999999997">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M55.16 20.42A5.94 5.94 0 0 0 50 15.6c-6-.38-12-.69-18-.7s-12 .3-18 .68a5.94 5.94 0 0 0-5.17 4.82 79.25 79.25 0 0 0 0 22.88 6.17 6.17 0 0 0 5.19 5c6 .38 12 .77 18 .77s12-.34 18-.73a6.24 6.24 0 0 0 5.18-5.1 78.19 78.19 0 0 0 .8-11.38 78 78 0 0 0-.84-11.42z"></path>
                    <polygon points="26.56 38.73 26.56 24.79 39.55 31.76 26.56 38.73"></polygon>
                </g>
            </svg>
        </div>
    );
};

export default IYoutube;
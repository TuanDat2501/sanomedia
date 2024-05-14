import React from 'react';
interface Props{
    width?:number | string;
    height?:number | string;
}
const IFacebook1 = ({height,width}:Props) => {
    return (
        <div>
            <svg fill="#ffffff" height={height||'25px'} width={width || '25px'} version="1.1" id="Layer_1"
                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490"
                 xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <g id="XMLID_21_"> <g> <g> <path
                    d="M460,0H30C13.458,0,0,13.458,0,30v430c0,16.542,13.458,30,30,30h430c16.542,0,30-13.458,30-30V30 C490,13.458,476.542,0,460,0z M470,460c0,5.514-4.486,10-10,10H30c-5.514,0-10-4.486-10-10V30c0-5.514,4.486-10,10-10h430 c5.514,0,10,4.486,10,10V460z"></path>
                    <path
                        d="M345,180h-50v-49.965c0.076-0.015,0.151-0.027,0.219-0.035H335c5.523,0,10-4.477,10-10V50c0-5.522-4.477-10-10-10h-60 c-41.268,0-60.95,22.039-70.194,40.528C195.111,99.916,195,119.189,195,120v60h-50c-5.523,0-10,4.477-10,10v80 c0,5.523,4.477,10,10,10h40v155c0,5.523,4.477,10,10,10h90c5.523,0,10-4.477,10-10V270h40c4.977,0,9.196-3.659,9.899-8.586l10-70 c0.41-2.87-0.445-5.776-2.345-7.966C350.655,181.258,347.899,180,345,180z M326.327,250H285c-5.523,0-10,4.477-10,10v165h-70V270 c0-5.522-4.477-10-10-10h-40v-60h50c5.523,0,10-4.477,10-10v-69.969c0.001-0.158,0.189-15.92,7.977-31.119 C232.81,69.728,250.313,60,275,60h50v50h-30c-9.695,0-20,7.009-20,20v60c0,5.523,4.477,10,10,10h48.47L326.327,250z"></path> </g> </g> </g> </g></svg>
        </div>
    );
};

export default IFacebook1;
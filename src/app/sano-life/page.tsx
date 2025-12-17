
import React, {useEffect, useState} from 'react';
import './style.scss'
import SanoImg from './SanoImg';
import ImageMedia from './ImageMedia';
import BlogSec from './BlogSec';
import BlogSection from '../component/BlogSection';

export const dynamic = 'force-dynamic'; 
const  SanoLife =  () => {
    
    return (
        <div className="sano-wrapper">
            <SanoImg></SanoImg>
            {/* ------------Blog-------------- */}
            <BlogSection limit={4} className="bg-white" />
            {/* ------------------------------------------------------- */}
            <ImageMedia/>
        </div>
    );
};

export default SanoLife;
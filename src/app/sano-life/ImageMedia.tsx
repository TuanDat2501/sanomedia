import React from 'react';
import Image from "next/image";
import IFacebook1 from '@/icon/IFacebook1';
import IArrowRight from '@/icon/IArrowRight';
const ImageMedia= () => {
    return (

           <section className="images-media">
                <div className="images-media-wrapper">
                    <div className="sano-life-media" data-aos="flip-right">
                        <Image width={350} height={350}
                               src="./image/sanolife-6.webp"
                               alt="sanolife-6"/>
                        <div className="overlay">
                            <text>Sano’s life <br/>qua các <br/>tấm ảnh</text>
                            <div className="link-media">
                                <div className="icon-media">
                                    <IFacebook1/>
                                </div>
                                <a href={"https://www.facebook.com/sanomediavn/photos"} target="_blank"
                                   rel="noopener noreferrer">sanomediavn</a>
                                <IArrowRight/>
                            </div>
                        </div>
                    </div>
                    <Image width={1000} height={1000}
                           src="./image/sanolife-7.webp"
                           alt="sanolife-7"
                           data-aos="flip-right"/>
                    <Image width={1000} height={1000}
                           src="./image/sanolife-8.webp"
                           alt="sanolife-8"
                           data-aos="flip-right"/>
                    <Image width={1000} height={1000}
                           src="./image/sanolife-9.webp"
                           alt="sanolife-9"
                           data-aos="flip-left"/>
                    <Image width={1000} height={1000}
                           src="./image/sanolife-10.webp"
                           alt="sanolife-10"
                           data-aos="flip-right"/>
                    <Image width={1000} height={1000}
                           src="./image/sanolife-11.webp"
                           alt="sanolife-11"
                           data-aos="flip-left"/>
                </div>
            </section>
    );
};

export default ImageMedia;
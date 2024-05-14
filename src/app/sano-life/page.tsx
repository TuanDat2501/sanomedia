'use client'
import React from 'react';
import './style.scss'
import IArrowRight from "@/icon/IArrowRight";
import IFacebook1 from "@/icon/IFacebook1";
import {NEWS_SANOLIFE_DATA1} from "@/constant/const";
import {useRouter} from "next/navigation";
import Image from "next/image";

const SanoLife = () => {
    const router = useRouter();
    const navigate = (link:string)=>{
        router.push(link);
    }
    const arr = NEWS_SANOLIFE_DATA1;
    return (
        <div className="sano-wrapper">
            <section className="sano-life-img">
                <h1>Hoạt động tại Sano Media </h1>
                <div className="images">
                    <div className="image-left image-sub">
                        <div className="image-left-top " data-aos="fade-right">
                            <Image width={1000} height={1000} quality={100} src="./image/sanolife-4.jpg" alt="sanolife-4"/>
                        </div>
                        <div className="image-left-bottom" data-aos="fade-right">
                            <Image width={1000} height={1000} quality={100}  src="./image/sanolife-5.jpg" alt="sanolife-5"/>
                        </div>
                    </div>
                    <div className="image-center">
                        <div className="flex justify-end">
                            <div className="line-2"></div>
                        </div>
                        <Image width={1000} height={1000} quality={100} src="./image/sanolife-1.jpg" alt="sanolife-1" data-aos="zoom-in"/>
                        <div className="line-3"></div>
                    </div>
                    <div className="image-right image-sub">
                        <div className="image-right-top" data-aos="fade-left">
                            <Image width={1000} height={1000} quality={100} src="./image/sanolife-2.jpg" alt="sanolife-5"/>
                        </div>
                        <div className="image-right-bottom" data-aos="fade-left">
                            <Image width={1000} height={1000} quality={100} src="./image/sanolife-3.jpg" alt="sanolife-5"/>
                        </div>
                    </div>
                </div>
                <div className="images-mobile">
                    <div className="image-one">
                        <Image width={1000} height={1000} src="./image/sanolife-1.jpg" alt="sanolife-1" data-aos="zoom-in"/>
                    </div>
                    <div className="image-two" data-aos="fade-left">
                        <Image width={1000} height={1000} src="./image/sanolife-2.jpg" alt="sanolife-5"/>
                    </div>
                    <div className="image-sub">
                        <div className="image-left-top " data-aos="fade-right">
                            <Image width={1000} height={1000} src="./image/sanolife-4.jpg" alt="sanolife-4"/>
                        </div>
                        <div className="image-left-bottom" data-aos="fade-right">
                            <Image width={1000} height={1000} src="./image/sanolife-5.jpg" alt="sanolife-5"/>
                        </div>
                    </div>
                </div>
                <div className="images-tablet">
                    <div className="image-one">
                        <Image width={1000} height={1000} src="./image/sanolife-1.jpg" alt="sanolife-1" data-aos="zoom-in"/>
                    </div>
                    <div className="image-sub">
                        <div className="image" data-aos="fade-left">
                            <Image width={1000} height={1000} src="./image/sanolife-2.jpg" alt="sanolife-5"/>
                        </div>
                        <div className="image" data-aos="fade-right">
                            <Image width={1000} height={1000} src="./image/sanolife-4.jpg" alt="sanolife-4"/>
                        </div>
                        <div className="image" data-aos="fade-right">
                            <Image width={1000} height={1000} src="./image/sanolife-5.jpg" alt="sanolife-5"/>
                        </div>
                    </div>
                </div>
                <div className="text-sub">
                    <p>“Làm việc tại Sano, ngoài thời gian làm việc, bạn còn được tham gia rất nhiều hoạt động giải trí
                        đa dạng như chương trình giao lưu và các sự kiện văn hóa để tạo nên một môi trường làm việc tích
                        cực và gắn kết.” </p>
                </div>
            </section>
            <section className="sano-blog">
                <div className="blogs">
                    {arr.map(value => <>
                        <div className="item-blog">
                            <Image width={1000} height={1000} quality={100} src={value.image} alt="news-1" data-aos="fade-right"/>
                            <div className="content-blog">
                                <div className="title-blog" onClick={()=>navigate(`/SanoMedia${value.link}`)}>
                                    <h2>{value.title}</h2>
                                </div>
                                <div className="date-blog">
                                    <p>{value.date}</p>
                                </div>
                                <div className="sub-text">
                                    <p>
                                        {value.subText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>)}
                </div>
            </section>
            <section className="images-media">
                <div className="images-media-wrapper">
                    <div className="sano-life-media" data-aos="flip-right">
                        <Image width={350} height={350} src="./image/sanolife-6.jpg" alt="sanolife-6"/>
                        <div className="overlay">
                            <text>Sano’s life <br/>qua các <br/>tấm ảnh</text>
                            <div className="link-media">
                                <div className="icon-media">
                                    <IFacebook1/>
                                </div>
                                <p>sanomediavn</p>
                                <IArrowRight/>
                            </div>
                        </div>
                    </div>
                    <Image width={1000} height={1000} src="./image/sanolife-7.jpg" alt="sanolife-7" data-aos="flip-right"/>
                    <Image width={1000} height={1000}  src="./image/sanolife-8.jpg" alt="sanolife-8" data-aos="flip-right"/>
                    <Image width={1000} height={1000}  src="./image/sanolife-9.jpg" alt="sanolife-9" data-aos="flip-left"/>
                    <Image width={1000} height={1000}  src="./image/sanolife-10.jpg" alt="sanolife-10" data-aos="flip-right"/>
                    <Image width={1000} height={1000}  src="./image/sanolife-11.jpg" alt="sanolife-11" data-aos="flip-left"/>
                </div>
            </section>
        </div>
    );
};

export default SanoLife;
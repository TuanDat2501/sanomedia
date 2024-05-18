'use client'
import React, {useEffect} from 'react';
import './style.scss'
import IArrowRight from "@/icon/IArrowRight";
import IFacebook1 from "@/icon/IFacebook1";
import {NEWS_SANOLIFE_DATA1} from "@/constant/const";
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import Image from "next/image";

const SanoLife = () => {
    const urlImg = "https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o";
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()
    const flag = searchParams.get('flag')
    useEffect(() => {
        if (flag == "1") {
            const elemt = document.getElementById("sano-blog");
            elemt && elemt.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            });
        }
    });
    const navigate = (link: string) => {
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
                            <Image width={250} height={300} quality={100}
                                   src={`${urlImg}/sanolife-4.jpg?alt=media&token=b972dbd6-ca89-43a7-816a-6e2496bd8af3`}
                                   alt="sanolife-4"/>
                        </div>
                        <div className="image-left-bottom" data-aos="fade-right">
                            <Image width={250} height={300} quality={100}
                                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-5.jpg?alt=media&token=93f4cb6c-20cb-4aff-a7da-84242c395ae6"
                                   alt="sanolife-5"/>
                        </div>
                    </div>
                    <div className="image-center">
                        <div className="flex justify-end">
                            <div className="line-2"></div>
                        </div>
                        <Image width={700} height={400} quality={100}
                               src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-1.jpg?alt=media&token=7702de02-71a3-4e43-9fb5-88849946ffae"
                               alt="sanolife-1" data-aos="zoom-in"/>
                        <div className="line-3"></div>
                    </div>
                    <div className="image-right image-sub">
                        <div className="image-right-top" data-aos="fade-left">
                            <Image width={250} height={300} quality={100}
                                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-2.jpg?alt=media&token=20f283b4-87f9-47dd-87cc-d2ab55c3f47f"
                                   alt="sanolife-5"/>
                        </div>
                        <div className="image-right-bottom" data-aos="fade-left">
                            <Image width={250} height={300} quality={100}
                                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-3.jpg?alt=media&token=86d254dc-4d6b-4f7a-8f9a-9b8646456814"
                                   alt="sanolife-5"/>
                        </div>
                    </div>
                </div>
                <div className="images-mobile">
                    <div className="image-one">
                        <Image width={450} height={300}
                               src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-1.jpg?alt=media&token=7702de02-71a3-4e43-9fb5-88849946ffae"
                               alt="sanolife-1"
                               data-aos="zoom-in"/>
                    </div>
                    <div className="image-two" data-aos="fade-left">
                        <Image width={450} height={300}
                               src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-2.jpg?alt=media&token=20f283b4-87f9-47dd-87cc-d2ab55c3f47f"
                               alt="sanolife-5"/>
                    </div>
                    <div className="image-sub">
                        <div className="image-left-top " data-aos="fade-right">
                            <Image width={200} height={150}
                                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-4.jpg?alt=media&token=b972dbd6-ca89-43a7-816a-6e2496bd8af3"
                                   alt="sanolife-4"/>
                        </div>
                        <div className="image-left-bottom" data-aos="fade-right">
                            <Image width={200} height={150}
                                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-5.jpg?alt=media&token=93f4cb6c-20cb-4aff-a7da-84242c395ae6"
                                   alt="sanolife-5"/>
                        </div>
                    </div>
                </div>
                <div className="images-tablet">
                    <div className="image-one">
                        <Image width={150} height={150}
                               src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-1.jpg?alt=media&token=7702de02-71a3-4e43-9fb5-88849946ffae"
                               alt="sanolife-1"
                               data-aos="zoom-in"/>
                    </div>
                    <div className="image-sub">
                        <div className="image" data-aos="fade-left">
                            <Image width={150} height={150}
                                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-2.jpg?alt=media&token=20f283b4-87f9-47dd-87cc-d2ab55c3f47f"
                                   alt="sanolife-5"/>
                        </div>
                        <div className="image" data-aos="fade-right">
                            <Image width={150} height={150}
                                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-4.jpg?alt=media&token=b972dbd6-ca89-43a7-816a-6e2496bd8af3"
                                   alt="sanolife-4"/>
                        </div>
                        <div className="image" data-aos="fade-right">
                            <Image width={150} height={150}
                                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-5.jpg?alt=media&token=93f4cb6c-20cb-4aff-a7da-84242c395ae6"
                                   alt="sanolife-5"/>
                        </div>
                    </div>
                </div>
                <div className="text-sub">
                    <p>“Làm việc tại Sano, ngoài thời gian làm việc, bạn còn được tham gia rất nhiều hoạt động giải trí
                        đa dạng như chương trình giao lưu và các sự kiện văn hóa để tạo nên một môi trường làm việc tích
                        cực và gắn kết.” </p>
                </div>
            </section>
            <section className="sano-blog" id="sano-blog">
                <div className="blogs">
                    {arr.map(value => <>
                        <div className="item-blog">
                            <Image width={350} height={350} quality={100} src={value.image} alt="news-1"
                                   data-aos="fade-right"/>
                            <div className="content-blog">
                                <div className="title-blog" onClick={() => navigate(`${value.link}`)}>
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
                        <Image width={350} height={350} src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-6.jpg?alt=media&token=b9af1082-eb4d-4909-a3d5-6ce112c21e38" alt="sanolife-6"/>
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
                    <Image width={1000} height={1000} src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-7.jpg?alt=media&token=912be56c-d37a-4e9d-8fd1-32d5287ad36d" alt="sanolife-7"
                           data-aos="flip-right"/>
                    <Image width={1000} height={1000} src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-8.jpg?alt=media&token=9f4fdac7-afa6-41c6-8d07-419030a65b5f" alt="sanolife-8"
                           data-aos="flip-right"/>
                    <Image width={1000} height={1000} src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-9.jpg?alt=media&token=195169de-1e83-4a51-91bd-759e06475cc3" alt="sanolife-9"
                           data-aos="flip-left"/>
                    <Image width={1000} height={1000} src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-10.jpg?alt=media&token=58b70130-1541-43a5-83d0-cd5d6422901e" alt="sanolife-10"
                           data-aos="flip-right"/>
                    <Image width={1000} height={1000} src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/sanolife-11.jpg?alt=media&token=b45d74b0-6d8b-4941-b42b-46ab4639051e" alt="sanolife-11"
                           data-aos="flip-left"/>
                </div>
            </section>
        </div>
    );
};

export default SanoLife;
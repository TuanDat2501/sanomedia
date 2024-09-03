'use client'
import './style.scss'
import {NEWS_SANOLIFE_DATA, NEWS_SANOLIFE_DATA1, PRESENT_DATA} from "@/constant/const";
import IArrowRight from "@/icon/IArrowRight";
import ButtonRed from "@/app/component/button-red/ButtonRed";
import {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {useMediaQuery} from 'usehooks-ts';
// Import Swiper styles
import 'swiper/css';
import {Autoplay} from "swiper/modules";
import {useRouter} from "next/navigation";
import Image from "next/image";
import ButtonRed1 from "@/app/component/button-red1/ButtonRed1";

const AboutMe = () => {
    const dataPresent = PRESENT_DATA;
    const dataNews = NEWS_SANOLIFE_DATA;
    const myRef = useRef(null);
    const [year, setYear] = useState(0)
    const [member, setMember] = useState(0)
    const [yellow, setYellow] = useState(0)
    const [silver, setSilver] = useState(0)
    async function waitUntil(limit: number, ms: number, flag: number) {
        var count = 0;
        await new Promise(resolve => {
            const interval = setInterval(() => {
                if (count < limit) {
                    count++;
                    switch (flag) {
                        case 1:
                            setYear(count)
                            break;
                        case 2:
                            setMember(count)
                            break;
                        case 3:
                            setYellow(count)
                            break;
                        case 4:
                            setSilver(count)
                            break;
                    }
                }
                ;
            }, ms);
        });
        return count;
    }
    const urlImg = "https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o";
    const isMobile = useMediaQuery('(max-width: 430px)');
    const isTablet = useMediaQuery('(min-width: 430px) and (max-width: 830px)');
    const router = useRouter()
    const clickNew = (href: string) => {
        router.push(href);
    }
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry["isIntersecting"] && year === 0) {
                waitUntil(8, 200, 1);
                waitUntil(50, 20, 2);
                waitUntil(2, 1000, 3);
                waitUntil(30, 60, 4);
                observer.disconnect();
            }
        })
        // @ts-ignore
        observer.observe(myRef.current);
    })
    return (
        <main>
            <div className="main-about">
                <section className="intro-content">

                    <div className="intro-content-img" data-aos="fade-up">
                        <div className="overlay"></div>
                        <Image width={isMobile ? 430 : 1200} height={isMobile ? 430 : 1200} quality={100} 
                        src="./image/aboutme-1(1).webp" alt="aboutme-1"/>
                    </div>
                    <div className="intro-content-text">
                        <h1>Chào mừng đến với Sano Media</h1>
                        <p>Sano media là doanh nghiệp sản xuất sáng tạo Youtube số 1 tại Bắc Giang. </p>
                        <div onClick={()=>{router.push('/lien-he')}}>
                        <ButtonRed1 text={"Liên hệ"}/>
                        </div>
                    </div>
                </section>
                <section className="work-environment margin-center">
                    <div className="work-environment-text">
                        <h1>Môi trường làm việc</h1>
                        <p>Sano Media - một môi trường công ty tích cực không chỉ là nơi làm việc mà còn là nguồn cảm
                            hứng và động lực cho mỗi thành viên . Việc tạo ra không gian cho sự phát triển cá nhân, sự
                            sáng tạo và sự kết nối giữa các thành viên tạo ra một Sano năng động và mang lại hiệu suất
                            làm việc cao hơn. </p>

                    </div>
                    <div className="work-environment-img" data-aos="fade-left">
                        <Image width={1000} height={1000} quality={100} src={`${urlImg}/Group412.jpg?alt=media&token=30bd3578-1991-4691-b5a5-fcfd9f133036`} alt="Group-412"/>
                    </div>
                </section>
                <section className="present-data margin-center" ref={myRef}>
                    <div className="text flex flex-col justify-around items-center ">
                        <h1>Đến ngày hôm nay</h1>
                        <div className="line"></div>
                    </div>
                    <div className="data">
                        <div className="data-item flex flex-col items-center ">
                            <strong className="data-item-num">{year}</strong>
                            <strong className="data-item-text">Năm hoạt động</strong>
                        </div>
                        <div className="data-item flex flex-col items-center ">
                            <strong className="data-item-num">{member}+</strong>
                            <strong className="data-item-text">Thành viên</strong>
                        </div>
                        <div className="data-item flex flex-col items-center ">
                            <strong className="data-item-num">{yellow}</strong>
                            <strong className="data-item-text">Nút vàng</strong>
                        </div>
                        <div className="data-item flex flex-col items-center ">
                            <strong className="data-item-num">{silver}</strong>
                            <strong className="data-item-text">Nút bạc</strong>
                        </div>
                    </div>
                </section>
                <section className="sano-culture margin-center">
                    <div className="sano-culture-wrapper">
                        {isMobile &&
                            <div className="sano-culture-mobile">
                                <div className="icon-culture">
                                    <Image width={1000} height={1000} quality={100} src={`${urlImg}/icon_heart.png?alt=media&token=13e93d9f-69b1-4894-9bcc-841dbdbdaa73`}
                                           alt="icon-heart"/>
                                </div>
                                <h1>Giá trị cốt lỗi</h1>
                                <p>“Học tập - Phát triển - Hạnh phúc - Giàu có - Khoẻ mạnh”</p>
                            </div>
                        }
                        <div className="sano-culture-image" data-aos="fade-right">
                            <Image width={500} height={500} src={`${urlImg}/image-culture.jpg?alt=media&token=77de1b94-580e-49b3-9c3e-f488d7f08861`} alt="image"></Image>
                        </div>
                        <div className="sano-culture-content">
                            {!isMobile && <>
                                <div className="icon-culture">
                                    <Image width={100} height={100} quality={100} src={`${urlImg}/icon_heart.png?alt=media&token=13e93d9f-69b1-4894-9bcc-841dbdbdaa73`}
                                           alt="icon-heart"/>
                                </div>
                                <h1>Giá trị cốt lỗi</h1>
                                <p>“Học tập - Phát triển - Hạnh phúc - Giàu có - Khoẻ mạnh”</p>
                            </>}
                            {/*<div className="text-culture">Làm việc tại Sano, bạn không chỉ có cơ hội được thử thách, học
                            hỏi, sáng tạo, bạn còn phát triển bản thân để trở nên toàn diện hơn. Sano đã và đang xây
                            dựng một tập thể với các giá trị cốt lõi sau:
                        </div>*/}
                            <ul>
                                <li><span>Nhân sự:</span> Xây dựng chân dung nhân sự điểm hình Sano với 03 đặc điểm “khả
                                    năng xác
                                    lập mục tiêu”, “tính kỷ luật cao”, “sự sáng tạo”.
                                </li>

                                <li><span>Chính trực:</span> nhằm tạo nên sự thông suốt nhất quán của mỗi cá nhân và
                                    toàn tổ
                                    chức.
                                </li>

                                <li><span>Tôn trọng:</span> nhằm tạo ra động lực mạnh cho cá nhân và tổ chức.</li>
                                <li><span>Kết nối:</span> nhằm tạo ra nguồn lực mạnh mẽ thúc đẩy sự phát triển của cá
                                    nhân
                                    và tổ chức.
                                </li>

                                <li><span>Phát triển:</span> nhằm đáp ứng với nhu cầu phát triển và hạnh phúc hơn của
                                    con
                                    người.
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*<div className="sano-culture-wrapper">
                        <div className="sano-culture-content">
                            <div className="icon-culture">
                                <Image width={1000} height={1000} quality={100} src="./image/icon_heart.png"
                                       alt="icon-heart"/>
                            </div>
                            <h1>Giá trị văn hoá</h1>
                            <p>“Học tập - Phát triển - Hạnh phúc - Giàu có - Khoẻ mạnh”</p>
                            <div className="text-culture">Làm việc tại Sano, bạn không chỉ có cơ hội được thử thách, học
                            hỏi, sáng tạo, bạn còn phát triển bản thân để trở nên toàn diện hơn. Sano đã và đang xây
                            dựng một tập thể với các giá trị cốt lõi sau:
                        </div>
                            <ul>
                                <li><span>Nhân sự:</span> Xây dựng chân dung nhân sự điểm hình Sano với 03 đặc điểm “khả
                                    năng xác
                                    lập mục tiêu”, “tính kỷ luật cao”, “sự sáng tạo”.
                                </li>

                                <li><span>Chính trực:</span> nhằm tạo nên sự thông suốt nhất quán của mỗi cá nhân và
                                    toàn tổ
                                    chức.
                                </li>

                                <li><span>Tôn trọng:</span> nhằm tạo ra động lực mạnh cho cá nhân và tổ chức.</li>
                                <li><span>Kết nối:</span> nhằm tạo ra nguồn lực mạnh mẽ thúc đẩy sự phát triển của cá
                                    nhân
                                    và tổ chức.
                                </li>

                                <li><span>Phát triển:</span> nhằm đáp ứng với nhu cầu phát triển và hạnh phúc hơn của
                                    con
                                    người.
                                </li>
                            </ul>
                        </div>
                        <div className="sano-culture-image image-large">
                            <Image width={500} height={500} src="/image/image-culture.jpg" alt="image"></Image>
                        </div>
                    </div>*/}
                </section>
                <section className="image">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={isMobile ? 1 : isTablet ? 2 : 4}
                        autoplay={{
                            delay: 1500
                        }}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide><Image width={500} height={500} quality={100}
                                            style={{width: '100%', height: "350px", objectFit: 'cover'}}
                                            src={`${urlImg}/aboutme-6.jpg?alt=media&token=b60095f3-ce71-4809-a079-70d385ae68a7`} alt="aboutme-6"/></SwiperSlide>
                        <SwiperSlide><Image width={500} height={500} quality={100}
                                            style={{width: '100%', height: "350px", objectFit: 'cover'}}
                                            src={`${urlImg}/aboutme-4.jpg?alt=media&token=adeed954-e92b-4c8b-9c5b-3dd6c1a1d064`} alt="aboutme-5"/></SwiperSlide>
                        <SwiperSlide><Image width={500} height={500} quality={100}
                                            style={{width: '100%', height: "350px", objectFit: 'cover'}}
                                            src={`${urlImg}/aboutme-5.jpg?alt=media&token=e7fd4a79-0333-434d-bce4-5e9e572f7aba`} alt="aboutme-4"/></SwiperSlide>
                        <SwiperSlide><Image width={500} height={500} quality={100}
                                            style={{width: '100%', height: "350px", objectFit: 'cover'}}
                                            src={`${urlImg}/aboutme-8.jpg?alt=media&token=5c1dc5bc-ddbe-4903-bf9e-ae991b39374e`} alt="aboutme-4"/></SwiperSlide>
                        <SwiperSlide><Image width={500} height={500} quality={100}
                                            style={{width: '100%', height: "350px", objectFit: 'cover'}}
                                            src={`${urlImg}/aboutme-9.jpg?alt=media&token=e2dc5ed8-b3cd-419b-85a8-dabc8d3bff04`} alt="aboutme-4"/></SwiperSlide>
                        <SwiperSlide><Image width={500} height={500} quality={100}
                                            style={{width: '100%', height: "350px", objectFit: 'cover'}}
                                            src={`${urlImg}/aboutme-10.jpg?alt=media&token=1c2604f5-d00c-4387-8ac4-ff07096f77d2`} alt="aboutme-4"/></SwiperSlide>
                        <SwiperSlide><Image width={500} height={500} quality={100}
                                            style={{width: '100%', height: "350px", objectFit: 'cover'}}
                                            src={`${urlImg}/aboutme-11.jpg?alt=media&token=8da1db7e-82bc-4eaf-bd69-3d317ed75413`} alt="aboutme-4"/></SwiperSlide>
                        <SwiperSlide><Image width={500} height={500} quality={100}
                                            style={{width: '100%', height: "350px", objectFit: 'cover'}}
                                            src={`${urlImg}/aboutme-12.jpg?alt=media&token=d9336eda-e3ce-4538-ac01-e7bebea64117`} alt="aboutme-4"/></SwiperSlide>
                    </Swiper>
                </section>
                <section className="sano-life-news margin-center">
                    <div className="title-life">
                        <h1><span>Sano</span> Life</h1>
                        <div className="line-1"></div>
                    </div>
                    <div className="news">
                        {dataNews.map(value =>
                            <>
                                <div className="item-news" onClick={() => clickNew(`${value.link}`)}>
                                    <Image width={350} height={220} quality={100} src={value.image} alt="news-1"
                                           data-aos="fade-right"/>
                                    <div className="title-news">
                                        <h2>{value.title}</h2>
                                    </div>
                                    <div className="date-news">
                                        <p>{value.date}</p>
                                    </div>
                                    <div className="sub-text">
                                        <p>
                                            {value.subText}
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}

                    </div>
                    <div className="find-out-more" onClick={()=>router.push('/sano-life?flag=1')}>
                        <ButtonRed text="Tìm hiểu thêm" icon={<IArrowRight/>}></ButtonRed>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default AboutMe;
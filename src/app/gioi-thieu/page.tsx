'use client'
import './style.scss'
import {NEWS_SANOLIFE_DATA, NEWS_SANOLIFE_DATA1, PRESENT_DATA} from "@/constant/const";
import IArrowRight from "@/icon/IArrowRight";
import ButtonRed from "@/app/component/button-red/ButtonRed";
import {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { useMediaQuery } from 'usehooks-ts'
// Import Swiper styles
import 'swiper/css';
import {Autoplay} from "swiper/modules";
import {useRouter} from "next/navigation";
import Image from "next/image";

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
    const isMobile = useMediaQuery('(max-width: 430px)');
    const isTablet = useMediaQuery('(min-width: 430px) and (max-width: 830px)');
    const router = useRouter()
    const clickNew = (href:string)=>{
        router.push(href);
    }
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry["isIntersecting"] && year === 0) {
                waitUntil(5, 50, 1);
                waitUntil(50, 20, 2);
                waitUntil(5, 70, 3);
                waitUntil(5, 100, 4);
                observer.disconnect();
            }
        })
        // @ts-ignore☻◘
        observer.observe(myRef.current);
    })
    return (
        <main>
            <div className="main-about">
                <section className="intro-content">
                    <div className="intro-content-img" data-aos="fade-up">
                        <Image width={1000} height={1000} quality={100} src="./image/aboutme-1.jpg" alt="aboutme-1"/>
                    </div>
                    <div className="intro-content-text">
                        <h1>Giới thiệu</h1>
                        <h1><span>Sano</span> Media</h1>
                        <p>Sano Media là công ty về Youtube có trụ sở tại Bắc Giang, Sano Media không chỉ là một công ty
                            - chúng tôi là một cộng đồng sáng tạo đầy nhiệt huyết, đang chuyên về mảng YouTube. Chúng
                            tôi tin tưởng rằng mỗi video, mỗi ý tưởng đều có thể thay đổi thế giới. Với đội ngũ giàu
                            kinh nghiệm và tận tâm, chúng tôi đang chinh phục những ngóc ngách mới của nền kỹ thuật
                            số.</p>
                    </div>
                </section>
                <section className="work-environment">
                    <div className="work-environment-text">
                        <h1>Môi trường làm việc</h1>
                        <p>Sano Media - một môi trường công ty tích cực không chỉ là nơi làm việc mà còn là nguồn cảm
                            hứng và động lực cho mỗi thành viên . Việc tạo ra không gian cho sự phát triển cá nhân, sự
                            sáng tạo và sự kết nối giữa các thành viên tạo ra một Sano năng động và mang lại hiệu suất
                            làm việc cao hơn. </p>
                    </div>
                    <div className="work-environment-img" data-aos="fade-left">
                        <Image width={1000} height={1000} quality={100} src='./image/Group412.jpg' alt="Group-412"/>
                    </div>
                </section>
                <section className="present-data" ref={myRef}>
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
                <section className="sano-culture">
                    <div className="sano-culture-content">
                        <div className="icon-culture">
                            <Image width={1000} height={1000} quality={100} src="./image/icon_heart.png" alt="icon-heart"/>
                        </div>
                        <h1>Giá trị cốt lỗi - văn hoá <span>Sano</span></h1>
                        <p>“Phát triển - Sáng tạo - Thành công”</p>
                        <div className="text-culture">Làm việc tại Sano, bạn không chỉ có cơ hội được thử thách, học
                            hỏi, sáng tạo, bạn còn phát triển bản thân để trở nên toàn diện hơn. Sano đã và đang xây
                            dựng một tập thể với các giá trị cốt lõi sau:
                        </div>
                        <ul>
                            <li>Giá trị cốt lõi của chúng tôi bao gồm sự cống hiến, tôn trọng, trung thực và sự đổi mới.
                                Mỗi nhân viên đều được khuyến khích và hỗ trợ để phát triển khả năng sáng tạo và đóng
                                góp ý kiến mới mẻ.
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="image">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={isMobile? 1 : isTablet ? 2:3}
                        autoplay={{
                            delay:1500
                        }}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide><Image  width={1000} height={1000} quality={100} style={{width:'100%',height:"350px",objectFit:'cover'}} src="./image/aboutme-6.jpg" alt="aboutme-6"/></SwiperSlide>
                        <SwiperSlide><Image  width={1000} height={1000} quality={100} style={{width:'100%',height:"350px",objectFit:'cover'}} src="./image/aboutme-4.jpg" alt="aboutme-5"/></SwiperSlide>
                        <SwiperSlide><Image  width={1000} height={1000} quality={100} style={{width:'100%',height:"350px",objectFit:'cover'}} src="./image/aboutme-5.jpg" alt="aboutme-4"/></SwiperSlide>
                        <SwiperSlide><Image  width={1000} height={1000} quality={100} style={{width:'100%',height:"350px",objectFit:'cover'}} src="./image/aboutme-8.jpg" alt="aboutme-4"/></SwiperSlide>
                        <SwiperSlide><Image  width={1000} height={1000} quality={100} style={{width:'100%',height:"350px",objectFit:'cover'}} src="./image/aboutme-9.jpg" alt="aboutme-4"/></SwiperSlide>
                        <SwiperSlide><Image  width={1000} height={1000} quality={100} style={{width:'100%',height:"350px",objectFit:'cover'}} src="./image/aboutme-10.jpg" alt="aboutme-4"/></SwiperSlide>
                        <SwiperSlide><Image  width={1000} height={1000} quality={100} style={{width:'100%',height:"350px",objectFit:'cover'}} src="./image/aboutme-11.jpg" alt="aboutme-4"/></SwiperSlide>
                        <SwiperSlide><Image  width={1000} height={1000} quality={100} style={{width:'100%',height:"350px",objectFit:'cover'}} src="./image/aboutme-12.jpg" alt="aboutme-4"/></SwiperSlide>
                    </Swiper>
                </section>
                <section className="sano-life-news">
                    <div className="title-life">
                        <h1><span>Sano</span> Life</h1>
                        <div className="line-1"></div>
                    </div>
                    <div className="news">
                        {dataNews.map(value =>
                            <>
                                <div className="item-news" onClick={()=>clickNew(`${value.link}`)}>
                                    <Image width={1000} height={1000} quality={100} src={value.image} alt="news-1" data-aos="fade-right"/>
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
                    <div className="find-out-more">
                        <ButtonRed text="Tìm hiểu thêm" icon={<IArrowRight/>}></ButtonRed>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default AboutMe;
import React from 'react';
import './style.scss'
import IArrowRight from "@/icon/IArrowRight";
import IFacebook1 from "@/icon/IFacebook1";

const SanoLife = () => {
    const arr = [1, 2, 3, 4]
    return (
        <div className="sano-wrapper">
            <section className="sano-life-img">
                <h1>Hoạt động tại Sano Media </h1>
                <div className="images">
                    <div className="image-left image-sub">
                        <div className="image-left-top " data-aos="fade-right">
                            <img src="/image/sanolife-4.jpg" alt="sanolife-4"/>
                        </div>
                        <div className="image-left-bottom" data-aos="fade-right">
                            <img src="/image/sanolife-5.jpg" alt="sanolife-5"/>
                        </div>
                    </div>
                    <div className="image-center">
                        <div className="flex justify-end">
                            <div className="line-2"></div>
                        </div>
                        <img src="/image/sanolife-1.jpg" alt="sanolife-1" data-aos="zoom-in"/>
                        <div className="line-3"></div>
                    </div>
                    <div className="image-right image-sub">
                        <div className="image-right-top" data-aos="fade-left">
                            <img src="/image/sanolife-2.jpg" alt="sanolife-5"/>
                        </div>
                        <div className="image-right-bottom" data-aos="fade-left">
                            <img src="/image/sanolife-3.jpg" alt="sanolife-5"/>
                        </div>
                    </div>
                </div>
                <div className="images-mobile">
                    <div className="image-one">
                        <img src="/image/sanolife-1.jpg" alt="sanolife-1" data-aos="zoom-in"/>
                    </div>
                    <div className="image-two" data-aos="fade-left">
                        <img src="/image/sanolife-2.jpg" alt="sanolife-5"/>
                    </div>
                    <div className="image-sub">
                        <div className="image-left-top " data-aos="fade-right">
                            <img src="/image/sanolife-4.jpg" alt="sanolife-4"/>
                        </div>
                        <div className="image-left-bottom" data-aos="fade-right">
                            <img src="/image/sanolife-5.jpg" alt="sanolife-5"/>
                        </div>
                    </div>
                </div>
                <div className="images-tablet">
                    <div className="image-one">
                        <img src="/image/sanolife-1.jpg" alt="sanolife-1" data-aos="zoom-in"/>
                    </div>
                    <div className="image-sub">
                        <div className="image" data-aos="fade-left">
                            <img src="/image/sanolife-2.jpg" alt="sanolife-5"/>
                        </div>
                        <div className="image" data-aos="fade-right">
                            <img src="/image/sanolife-4.jpg" alt="sanolife-4"/>
                        </div>
                        <div className="image" data-aos="fade-right">
                            <img src="/image/sanolife-5.jpg" alt="sanolife-5"/>
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
                            <img src="https://i.ibb.co/X7jSHCd/news-1.jpg" alt="news-1" data-aos="fade-right"/>
                            <div className="content-blog">
                                <div className="title-blog">
                                    <h2>Chương trình hoạt động: Gala Dinner</h2>
                                </div>
                                <div className="date-blog">
                                    <p>02-11-2020</p>
                                </div>
                                <div className="sub-text">
                                    <p>
                                        Một đêm tiệc đầy niềm vui và ý nghĩa khi toàn thể nhân sự Công ty cùng gia đình
                                        cùng
                                        nhau nhìn lại hành trình một năm đầy biến động nhưng cũng không kém phần rực rỡ
                                        của
                                        Sano Media. Để rồi sau đó những giải thưởng vinh danh các cá nhân, tập thể xuất
                                        sắc
                                        trong năm qua đã được hô vang.
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
                        <img src="/image/sanolife-6.jpg" alt="sanolife-6"/>
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
                    <img src="/image/sanolife-7.jpg" alt="sanolife-7" data-aos="flip-right"/>
                    <img src="/image/sanolife-8.jpg" alt="sanolife-8" data-aos="flip-right"/>
                    <img src="/image/sanolife-9.jpg" alt="sanolife-9" data-aos="flip-left"/>
                    <img src="/image/sanolife-10.jpg" alt="sanolife-10" data-aos="flip-right"/>
                    <img src="/image/sanolife-11.jpg" alt="sanolife-11" data-aos="flip-left"/>
                </div>
            </section>
        </div>
    );
};

export default SanoLife;
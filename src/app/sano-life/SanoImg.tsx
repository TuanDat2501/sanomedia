import React from 'react';
import Image from "next/image";


const SanoImg = () => {
    return (
        <section className="sano-life-img">
            <h1>Hoạt động tại Sano Media </h1>
            <div className="images">
                <div className="image-left image-sub">
                    <div className="image-left-top " data-aos="fade-right">
                        <Image width={250} height={300} quality={100}
                            src="./image/sanolife-4.webp"
                            alt="sanolife-4" />
                    </div>
                    <div className="image-left-bottom" data-aos="fade-right">
                        <Image width={250} height={300} quality={100}
                            src="./image/sanolife-5.webp"
                            alt="sanolife-5" />
                    </div>
                </div>
                <div className="image-center">
                    <div className="flex justify-end">
                        <div className="line-2"></div>
                    </div>
                    <Image width={700} height={400} quality={100}
                        src="./image/sanolife-1.webp"
                        alt="sanolife-1" data-aos="zoom-in" />
                    <div className="line-3"></div>
                </div>
                <div className="image-right image-sub">
                    <div className="image-right-top" data-aos="fade-left">
                        <Image width={250} height={300} quality={100}
                            src="./image/sanolife-16.webp"
                            alt="sanolife-5" />
                    </div>
                    <div className="image-right-bottom" data-aos="fade-left">
                        <Image width={250} height={300} quality={100}
                            src="./image/sanolife-3.webp"
                            alt="sanolife-5" />
                    </div>
                </div>
            </div>
            <div className="images-mobile">
                <div className="image-one">
                    <Image width={450} height={300}
                        src="./image/sanolife-1.webp"
                        alt="sanolife-1"
                        data-aos="zoom-in" />
                </div>
                <div className="image-two" data-aos="fade-left">
                    <Image width={450} height={300}
                        src="./image/sanolife-16.webp"
                        alt="sanolife-5" />
                </div>
                <div className="image-sub">
                    <div className="image-left-top " data-aos="fade-right">
                        <Image width={200} height={150}
                            src="./image/sanolife-4.webp"
                            alt="sanolife-4" />
                    </div>
                    <div className="image-left-bottom" data-aos="fade-right">
                        <Image width={200} height={150}
                            src="./image/sanolife-5.webp"
                            alt="sanolife-5" />
                    </div>
                </div>
            </div>
            <div className="images-tablet">
                <div className="image-one">
                    <Image width={150} height={150}
                        src="./image/sanolife-1.webp"
                        alt="sanolife-1"
                        data-aos="zoom-in" />
                </div>
                <div className="image-sub">
                    <div className="image" data-aos="fade-left">
                        <Image width={150} height={150}
                            src="./image/sanolife-16.webp"
                            alt="sanolife-5" />
                    </div>
                    <div className="image" data-aos="fade-right">
                        <Image width={150} height={150}
                            src="./image/sanolife-4.webp"
                            alt="sanolife-4" />
                    </div>
                    <div className="image" data-aos="fade-right">
                        <Image width={150} height={150}
                            src="./image/sanolife-5.webp"
                            alt="sanolife-5" />
                    </div>
                </div>
            </div>
            <div className="text-sub">
                <p>“Làm việc tại Sano, ngoài thời gian làm việc, bạn còn được tham gia rất nhiều hoạt động giải trí
                    đa dạng như chương trình giao lưu và các sự kiện văn hóa để tạo nên một môi trường làm việc tích
                    cực và gắn kết.” </p>
            </div>
        </section>

    )

        ;
};

export default SanoImg;
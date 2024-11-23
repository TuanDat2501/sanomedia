'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const CuaLo = () => {
    const isMobile = useMediaQuery('(max-width: 430px)');
    return (
        <div style={{
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "100px",
            marginBottom: "100px",
            padding: "15px"
        }}>
            <h1>Du lịch hằng năm: Cửa Lò - Nghệ An</h1>
            <h3 style={{ fontSize: "20px" }}>14-08-2024</h3>
            <p>Chuyến du lịch thường niên luôn là dịp để các thành viên trong công ty cùng nhau trải nghiệm những giây phút thư giãn, vui vẻ bên nhau. Năm nay, công ty chúng tôi đã chọn Cửa Lò - một trong những bãi biển đẹp và nổi tiếng nhất khu vực miền Trung, làm điểm đến. Hãy cùng khám phá những khoảnh khắc đáng nhớ trong chuyến hành trình này!</p>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="/image/cua-lo/image1.webp"
                alt="image1" />
            <br />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="/image/cua-lo/image2.webp"
                alt="image1" />
            <br />
            <div className="paragraph">
                <h2>Tại Sao Lại Chọn Cửa Lò Cho Chuyến Du Lịch Công Ty?</h2>
                <p>Cửa Lò, thuộc tỉnh Nghệ An, được biết đến với bãi biển dài, cát trắng mịn và làn nước trong xanh. Nơi đây không chỉ thu hút bởi vẻ đẹp thiên nhiên mà còn có những điểm đặc sắc sau:</p>

                <ul style={{ paddingLeft: "15px" }}>
                    <li><b>Vị trí thuận lợi:</b> Cửa Lò nằm cách thành phố Vinh chỉ khoảng 15km, thuận tiện cho việc di chuyển.</li>
                    <li><b>Ẩm thực phong phú:</b>  Hải sản tươi ngon với giá cả hợp lý.</li>
                    <li><b>Địa điểm tham quan đa dạng: </b> Bên cạnh biển, Cửa Lò còn gần nhiều địa danh nổi tiếng như đảo Lan Châu, đảo Song Ngư, quê hương Bác Hồ tại Kim Liên.</li>
                </ul>
            </div>
            <br />
            <div className="paragraph">
                <h2>Chương Trình Chi Tiết Chuyến Du Lịch Cửa Lò Của Công Ty</h2>
                <h3>1. Khởi Hành Hứng Khởi</h3>
                <p>Chuyến xe khởi hành từ sáng sớm, tất cả mọi người đều háo hức với nụ cười rạng rỡ. Trên xe, không khí thêm phần sôi động với các trò chơi giao lưu và hoạt động chia sẻ đầy ý nghĩa.</p>
            </div>
            {/*   <div className="container-image">
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                    alt={"image"} style={{ maxWidth: "1200px" }}
                    src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2Fimage2.jpg?alt=media&token=ebba21de-9839-4c8f-be7e-088181c61336" />
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                    alt={"image"} style={{ maxWidth: "1200px" }}
                    src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2Fimage3.jpg?alt=media&token=01efae48-4318-4941-9b5f-0f958eb39e64" />
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                    alt={"image"} style={{ maxWidth: "1200px" }}
                    src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2Fimage4.jpg?alt=media&token=a3049f4d-e354-454f-8071-a6b3782b4db8" />
            </div> */}
            <div className="paragraph">
                <h3>2. Check-in Và Nghỉ Dưỡng</h3>
                <p>Khi đến nơi, công ty đã lựa chọn một khách sạn ven biển với view đẹp để mọi người tận hưởng không khí trong lành. Sau khi nhận phòng, mọi người có thời gian tự do dạo biển, check-in tại các địa điểm nổi bật như:</p>
                <ul style={{ paddingLeft: "15px" }}>
                    <li><b>Đảo Lan Châu:</b> Hòn đảo nhỏ mang vẻ đẹp hoang sơ, thích hợp để chụp ảnh.</li>
                    <li><b>Chợ Hải Sản Cửa Lò:</b>  Địa điểm lý tưởng để mua đặc sản về làm quà.</li>
                </ul>
            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cua-lo/image5.webp" />
            {/*  <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage8.jpg?alt=media&token=02ac3acb-db30-4420-a058-ed0b6a5ed070" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage10.jpg?alt=media&token=61874af1-0fea-4cb9-b838-b020ca23793d" /> */}
            <div className="paragraph">
                <h3>4. Gala Dinner Ấm Áp</h3>
                <p>Buổi tối, công ty tổ chức Gala Dinner tại nhà hàng ven biển. Đây là dịp để mọi người cùng thưởng thức hải sản tươi ngon như tôm, mực, ghẹ, sò huyết... Bữa tiệc còn thêm phần sôi động với các tiết mục văn nghệ “cây nhà lá vườn” và chương trình bốc thăm trúng thưởng hấp dẫn.</p>

            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cua-lo/image6.webp" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cua-lo/image7.webp" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cua-lo/image8.webp" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cua-lo/image9.webp" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cua-lo/image10.webp" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cua-lo/image11.webp" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cua-lo/image13.webp" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cua-lo/image14.webp" />
            <div className="paragraph">
                <h3>Kết Luận</h3>
                <p>Cửa Lò không chỉ là điểm đến tuyệt vời với phong cảnh đẹp và ẩm thực hấp dẫn, mà còn là nơi lý tưởng để tổ chức các chuyến du lịch gắn kết tập thể. Chuyến đi lần này không chỉ để lại nhiều kỷ niệm đẹp mà còn giúp các thành viên trong công ty thêm hiểu và đồng hành cùng nhau trên con đường phát triển.

                    Nếu bạn đang tìm kiếm một địa điểm cho chuyến du lịch công ty tiếp theo, đừng bỏ qua Cửa Lò - nơi hứa hẹn mang đến những trải nghiệm khó quên!</p>

            </div>
        </div>
    );
};

export default CuaLo;
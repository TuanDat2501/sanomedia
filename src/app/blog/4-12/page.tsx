'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const B412 = () => {
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
            <h1>Tổ Chức Sinh Nhật Nhân Viên: Lan Toả Niềm Vui Gắn Kết</h1>
            <h3 style={{ fontSize: "20px" }}>04-12-2024</h3>
            <p>Hôm nay, công ty vui mừng tổ chức sinh nhật cho các bạn có ngày sinh trong ngày hôm nay! Đây không chỉ là dịp để cùng nhau chia sẻ niềm vui, mà còn là cơ hội gắn kết các thành viên trong đại gia đình Sano.</p>
            {/* <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="/image/2010/image10.webp"
                alt="image1" />
            <br />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2711%2F2024_10_18_17_13_IMG_2429.png?alt=media&token=8e698ecb-096d-4249-a79a-3bdec6a36e2a"
                alt="image1" />
            <br /> */}
            <div className="paragraph">
                <h2>1. Tại sao tổ chức sinh nhật lại quan trọng??</h2>
                <p style={{fontSize:"1px"}}>Tại Sano, chúng tôi luôn xem mỗi nhân viên là một phần không thể thiếu trong hành trình phát triển. Việc tổ chức sinh nhật không chỉ là cách thể hiện sự quan tâm mà còn giúp:</p>
                <li>Xây dựng môi trường làm việc thân thiện, gắn bó.</li>
                <li>Tạo động lực làm việc qua những niềm vui nhỏ hàng ngày.</li>
                <li>Gắn kết mọi người, từ lãnh đạo đến nhân viên, qua những phút giây ấm áp bên nhau.</li>
            </div>
            <br/>
            <div className="paragraph">
                <h3>2. Nội dung chương trình:</h3>
                <li>Cùng chúc mừng sinh nhật với bánh kem và quà tặng bất ngờ!</li>
                <li>Các trò chơi nhỏ để khuấy động không khí.</li>
                <li>Phần chia sẻ lời chúc đặc biệt từ mọi người.</li>
                <li>Chụp ảnh kỷ niệm để lưu lại khoảnh khắc đáng nhớ.</li>
            </div>
            <br/>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F412%2Fz6095572829177_571f00a9e2280a2a1c7ba17ae9f84c0c.jpg?alt=media&token=7026f9ef-7e75-4773-bd0c-04a19cf4f44a" />
            {/*  <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage8.jpg?alt=media&token=02ac3acb-db30-4420-a058-ed0b6a5ed070" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage10.jpg?alt=media&token=61874af1-0fea-4cb9-b838-b020ca23793d" /> */}
            <br/>
            <div className="paragraph">
                <h3>3. Lời nhắn gửi từ công ty</h3>
                <p>
                "Chúc mừng sinh nhật đến tất cả các anh/chị/em sinh vào ngày hôm nay! Chúng ta không chỉ làm việc cùng nhau, mà còn là một gia đình gắn bó, sẻ chia. Hãy cùng nhau xây dựng thêm thật nhiều kỷ niệm đẹp và tạo nên những thành công lớn hơn nữa trong thời gian tới!"
                </p>

            </div>
            <div className="paragraph">
                <h3>Kết Luận</h3>
                <p>Sinh nhật không chỉ là một ngày kỷ niệm cá nhân mà tại Sano, đây còn là dịp để chúng ta cùng sẻ chia niềm vui và gắn kết tập thể. Mỗi nhân viên là một phần quan trọng, là nguồn động lực để công ty không ngừng phát triển.</p>
                <p>Hãy cùng nhau tham gia, lan tỏa niềm vui và tạo nên những khoảnh khắc đáng nhớ trong đại gia đình Sano!</p>
            </div>
        </div>
    );
};

export default B412;
'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const CuuTro = () => {
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
            <h1>Hành trình cứu trợ: Hiệp Hoà - Bắc Giang</h1>
            <h3 style={{ fontSize: "20px" }}>12-09-2024</h3>
            <p>Trong tinh thần “lá lành đùm lá rách,” công ty chúng tôi đã tổ chức chuyến đi cứu trợ vùng lũ với mong muốn chia sẻ khó khăn, giúp đỡ đồng bào tại các khu vực chịu ảnh hưởng nặng nề từ thiên tai. Đây không chỉ là hoạt động mang tính nhân văn mà còn thể hiện trách nhiệm xã hội của doanh nghiệp, góp phần lan tỏa những giá trị tích cực đến cộng đồng.</p>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="/image/cuu-tro/image1.webp"
                alt="image1" />
            <br />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="/image/cuu-tro/image2.webp"
                alt="image1" />
            <br />
            <div className="paragraph">
                <h2>Tình Hình Vùng Lũ Và Ý Nghĩa Của Chuyến Đi Cứu Trợ</h2>
                <p>Năm 2024, các tỉnh miền Bắc phải đối mặt với cơn bão Yagi, gây ra thiệt hại nghiêm trọng về người và tài sản. Năm nay, tình hình trở nên đặc biệt nghiêm trọng khi nhiều khu vực bị ngập sâu, giao thông chia cắt, đời sống của người dân lâm vào cảnh khốn khó.</p>
                <p>Trước thực trạng đó, công ty đã nhanh chóng phát động chương trình cứu trợ với mục tiêu:</p>

                <ul style={{ paddingLeft: "15px" }}>
                    <li>Hỗ trợ khẩn cấp nhu yếu phẩm cho người dân.</li>
                    <li>Mang lại hy vọng, động lực giúp bà con sớm ổn định cuộc sống.</li>
                    <li>Lan tỏa tinh thần tương thân tương ái trong cộng đồng doanh nghiệp và toàn xã hội.</li>
                </ul>
            </div>
            <br />
            <div className="paragraph">
                <h2>Hành Trình Chuẩn Bị Và Triển Khai Chuyến Cứu Trợ Vùng Lũ</h2>
                <h3>1. Các Nhân Viên Công Ty đi cứu trợ</h3>
                <p>Ngay sau khi tình hình lũ lụt được báo cáo, công ty đã phát động chiến dịch nội bộ. Chúng tôi đã nhận được sự ủng hộ nhiệt tình từ toàn bộ nhân viên.</p>
            </div>
              <div className="container-image">
              <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="/image/cuu-tro/image3.webp"
                alt="image1" />
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="/image/cuu-tro/image4.webp"
                alt="image1" />
            </div>
            <div className="paragraph">
                <h3>2. Chuẩn Bị Nhu Yếu Phẩm</h3>
                <p>Đội ngũ nhân viên của công ty đã làm việc không ngừng nghỉ để chuẩn bị các phần quà bao gồm:</p>
                <ul style={{ paddingLeft: "15px" }}>
                    <li><b>Lương thực:</b> Gạo, mì tôm, bánh mì, nước uống.</li>
                    <li><b>Vật dụng thiết yếu:</b> Đèn pin</li>
                </ul>
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="/image/cuu-tro/image10.webp"
                alt="image1" /><Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="/image/cuu-tro/image11.webp"
                alt="image11" /><Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="/image/cuu-tro/image12.webp"
                alt="image12" />
            </div>
            {/* <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cua-lo/image5.webp" /> */}
            {/*  <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage8.jpg?alt=media&token=02ac3acb-db30-4420-a058-ed0b6a5ed070" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage10.jpg?alt=media&token=61874af1-0fea-4cb9-b838-b020ca23793d" /> */}
            <div className="paragraph">
                <h3>3. Trực Tiếp Đến Vùng Lũ</h3>
                <p>Chuyến xe cứu trợ đã lăn bánh từ sáng sớm, mang theo tình yêu thương và hy vọng của toàn thể công ty. Đoàn cứu trợ đã vượt qua nhiều cung đường ngập nước, khó khăn để đến tận tay người dân tại các xã chịu thiệt hại nặng nề nhất.</p>

            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cuu-tro/image5.webp" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cuu-tro/image6.webp" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cuu-tro/image7.webp" />
           
            <div className="paragraph">
                <h3>Kết Luận</h3>
                <p>Chuyến đi cứu trợ vùng lũ của công ty không chỉ mang đến sự sẻ chia kịp thời về vật chất mà còn thắp lên hy vọng, niềm tin cho đồng bào đang gặp khó khăn. Đây là minh chứng rõ ràng cho tinh thần trách nhiệm xã hội của doanh nghiệp, thể hiện tấm lòng nhân ái và sự đoàn kết trong những lúc hoạn nạn.</p>
                <p>Những kỷ niệm trong hành trình này sẽ luôn là động lực để công ty tiếp tục thực hiện các hoạt động ý nghĩa, đồng hành cùng cộng đồng vượt qua khó khăn, hướng tới một tương lai tốt đẹp hơn. Và chúng tôi tin rằng, sự chung tay của mỗi cá nhân và tổ chức sẽ góp phần xây dựng một xã hội ngày càng ấm áp và nhân văn hơn.</p>
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cuu-tro/image8.webp" />
            </div>
        </div>
    );
};

export default CuuTro;
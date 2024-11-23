'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const E2010 = () => {
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
            <h1>Party Ngày 20/10 - Tôn Vinh Phái Đẹp Của Công Ty</h1>
            <h3 style={{ fontSize: "20px" }}>20-10-2024</h3>
            <p>Ngày 20/10 không chỉ là dịp đặc biệt để tôn vinh phụ nữ Việt Nam mà còn là cơ hội để các công ty thể hiện sự tri ân và ghi nhận đóng góp của những “bông hoa” rực rỡ trong đội ngũ nhân sự. Năm nay, công ty chúng tôi đã tổ chức một bữa tiệc ấm áp và đầy màu sắc để mừng ngày Phụ nữ Việt Nam, mang đến những kỷ niệm đáng nhớ cho toàn thể nhân viên.</p>
            <div className="paragraph">
                <h2>Ý Nghĩa Của Bữa Tiệc Ngày 20/10</h2>
                <p>Với sứ mệnh xây dựng một môi trường làm việc hạnh phúc và gắn kết, công ty luôn chú trọng việc tôn vinh giá trị của phái đẹp. Bữa tiệc 20/10 không chỉ là món quà tri ân mà còn là dịp để kết nối tinh thần đồng đội, tạo nên bầu không khí vui vẻ, tràn đầy năng lượng trong công ty.</p>

            </div>
            
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="/image/2010/image10.webp"
                alt="image1" />
            <br />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="/image/2010/image12.webp"
                alt="image1" />
            <br />
            <div className="paragraph">
                <h2>Chương Trình Party Ngày 20/10</h2>
                <h3>1. Không Gian Trang Trí Lung Linh</h3>
                <p>Toàn bộ khu vực tổ chức được thiết kế theo phong cách hiện đại với tông màu chủ đạo là trắng và hồng – tượng trưng cho sự thanh lịch và dịu dàng. Những bó hoa tươi thắm, ánh đèn lung linh và backdrop chụp ảnh ấn tượng đã tạo nên một không gian lãng mạn, thu hút mọi ánh nhìn.</p>
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
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="/image/2010/image15.webp"
                alt="image1" />
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="/image/2010/image14.webp"
                alt="image1" />
            <div className="paragraph">
                <h3>2. Lời Tri Ân Từ Ban Lãnh Đạo</h3>
                <p>Mở đầu buổi tiệc là bài phát biểu đầy cảm xúc từ đại diện ban lãnh đạo. Những lời tri ân chân thành dành cho các nữ nhân viên vì sự nỗ lực và cống hiến của họ đã mang lại bầu không khí ấm áp và ý nghĩa.</p>
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
                <h3>3. Hoạt Động Giải Trí Sôi Động</h3>
                <p>Không khí của bữa tiệc được khuấy động bởi hàng loạt hoạt động thú vị</p>

            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cua-lo/image1.webp" />
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cua-lo/image3.webp" />
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cua-lo/image4.webp" />
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="/image/cua-lo/image11.webp" />
            <div className="paragraph">
                <h3>Kết Luận</h3>
                <p>Party ngày 20/10 không chỉ là một bữa tiệc vui vẻ mà còn là cách để công ty thể hiện sự quan tâm, tôn vinh những giá trị của phụ nữ trong môi trường làm việc. Với không khí rộn ràng, những hoạt động ý nghĩa và những khoảnh khắc đáng nhớ, buổi tiệc đã để lại ấn tượng sâu sắc trong lòng mỗi nhân viên.</p>
                <p>Chúng tôi tin rằng, những sự kiện như thế này không chỉ giúp công ty thêm gắn kết mà còn lan tỏa giá trị nhân văn, góp phần tạo dựng một môi trường làm việc tràn đầy tình yêu thương và sự sẻ chia.</p>
            </div>
        </div>
    );
};

export default E2010;
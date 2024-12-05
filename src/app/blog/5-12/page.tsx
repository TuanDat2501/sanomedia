'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const B512 = () => {
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
            <h1>Tập Thể Dục Đầu Giờ: Giải Pháp Tăng Cường Sức Khỏe Và Năng Suất Công Việc</h1>
            <h3 style={{ fontSize: "20px" }}>05-12-2024</h3>
            <p>Trong môi trường công sở hiện đại, sức khỏe và tinh thần của nhân viên ngày càng trở nên quan trọng. Một trong những phương pháp hiệu quả để cải thiện cả thể chất và tinh thần là tập thể dục đầu giờ. Hoạt động này không chỉ giúp nhân viên duy trì sức khỏe mà còn nâng cao hiệu quả công việc và tạo ra một không khí làm việc tích cực. Hãy cùng tìm hiểu những lợi ích và cách tổ chức hoạt động thể dục đầu giờ trong công ty.</p>
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
            <br/>
            <div className="paragraph">
                <h3>1. Tập Thể Dục Đầu Giờ: Một Sự Khởi Đầu Tốt Cho Ngày Mới</h3>
                <p style={{fontSize:"16px",marginBottom:0}}>Tập thể dục đầu giờ không chỉ đơn thuần là một thói quen lành mạnh mà còn là cách giúp nhân viên khởi động lại cơ thể sau một đêm dài nghỉ ngơi. Những bài tập thể dục nhẹ nhàng vào buổi sáng có thể giúp giảm bớt căng thẳng, kích thích tuần hoàn máu, đồng thời mang lại sự sảng khoái và năng lượng cho cả ngày dài làm việc.</p>
            </div>
            <br/>
            <div className="paragraph">
                <h4>Lợi ích của tập thể dục đầu giờ bao gồm:</h4>
                <li>Tập thể dục giúp cơ thể giải phóng hormone hạnh phúc (endorphins), từ đó giảm căng thẳng và tạo ra cảm giác thoải mái.</li>
                <li>Các bài tập thể dục giúp cải thiện sức khỏe tim mạch, tăng cường sức mạnh cơ bắp và cải thiện sự linh hoạt.</li>
                <li>Khi cơ thể được thư giãn và nạp năng lượng, nhân viên sẽ cảm thấy tỉnh táo và sẵn sàng cho công việc, từ đó nâng cao hiệu quả công việc.</li>
                <li>Hoạt động tập thể giúp xây dựng tinh thần đồng đội và mối quan hệ gắn bó giữa các đồng nghiệp trong công ty.</li>
            </div>
            <br/>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F512%2FSequence%2001_152.jpg?alt=media&token=555647c0-44c6-42fe-857a-2f3c88084d4b" />
            {/*  <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage8.jpg?alt=media&token=02ac3acb-db30-4420-a058-ed0b6a5ed070" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage10.jpg?alt=media&token=61874af1-0fea-4cb9-b838-b020ca23793d" /> */}
            <br/>
            <div className="paragraph">
                <h3>2. Ý Nghĩa Tập Thể Dục Đầu Giờ Hiệu Quả?</h3>
                <p>
                    Khởi động ngày mới tràn đầy năng lượng,từ đó năng cao hiệu quả công việc hằng ngày của mỗi bản thân. Ngoài ra, cùng tham gia hoạt động tạo nên tính gắn kết giữa mọi người.
                </p>

            </div>
            <div className="paragraph">
                <h3>Kết Luận</h3>
                <p>Tập thể dục đầu giờ không chỉ là một hoạt động thể chất mà còn là chìa khóa giúp tăng cường sức khỏe, giảm stress và nâng cao hiệu quả công việc. Việc duy trì thói quen tập thể dục đầu giờ giúp nhân viên cảm thấy khỏe khoắn, sảng khoái và dễ dàng vượt qua các thách thức trong công việc. Đồng thời, hoạt động này còn tạo cơ hội để gắn kết các thành viên trong công ty, xây dựng môi trường làm việc tích cực và thân thiện. Nếu bạn là người quản lý, đừng ngần ngại áp dụng hoạt động này để mang lại lợi ích lâu dài cho cả công ty và nhân viên.</p>
            </div>
        </div>
    );
};

export default B512;
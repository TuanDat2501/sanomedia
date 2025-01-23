'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const E2301 = () => {
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
            <h1>Ai Là Người May Mắn Nhất YEP?</h1>
            <h3 style={{ fontSize: "20px" }}>23-1-2025</h3>
            <div className="paragraph">
                <p>Trong không khí rộn ràng của những ngày cuối năm, buổi tiệc Year-End Party (YEP) của công ty đã diễn ra với nhiều bất ngờ và cảm xúc khó quên. Tâm điểm của đêm tiệc chính là phần công bố "Ai là người may mắn nhất?" với những giải thưởng đặc biệt dành cho nhân viên.</p>
            </div>
            <div className="paragraph">
                <p>Không gian buổi tiệc được trang trí lộng lẫy, mang đậm sắc màu lễ hội. Từ khi bắt đầu, mọi người đã cùng nhau hòa mình vào những tiết mục văn nghệ sôi động và phần nhìn lại hành trình một năm đầy dấu ấn của công ty. Nhưng khoảnh khắc được chờ đợi nhất chính là khi chương trình quay số may mắn bắt đầu. Những ánh mắt háo hức, tiếng reo hò mỗi khi tên một người được xướng lên đã khiến không khí buổi tiệc thêm phần kịch tính.</p>
                <p>Người may mắn nhất trong đêm YEP năm nay chính là chị Trịnh Thị Hiền, Trưởng phòng, người đã giành được giải thưởng lớn là một chỉ vàng. Khi tên chị được xướng lên, cả khán phòng bùng nổ tiếng vỗ tay và những lời chúc mừng. Chị Hằng không giấu được sự xúc động khi chia sẻ: "Tôi thực sự bất ngờ và rất vui khi trở thành người may mắn nhất trong đêm nay. Đây không chỉ là món quà giá trị mà còn là sự động viên lớn lao dành cho tôi sau một năm làm việc chăm chỉ."</p>
            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2301%2F474475334_610264188428037_6443892017258163620_n.jpg?alt=media&token=8e5b3fa6-4682-4902-a04c-6262ce8f08e3"
                alt="image1" />
            <br />
            <div className="paragraph">
                <p>Buổi tiệc không chỉ là dịp để trao thưởng mà còn là cơ hội để mọi người gắn kết và chia sẻ những niềm vui cuối năm. Những câu chuyện bên bàn tiệc, những lời chúc tụng gửi trao đã tạo nên một bầu không khí gần gũi, đầy ắp tiếng cười. Đêm YEP khép lại với những kỷ niệm đẹp, những cảm xúc trọn vẹn và nguồn năng lượng tích cực để tất cả cùng hướng tới một năm mới với nhiều thành công hơn nữa.</p>
            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2301%2F474461797_610264401761349_6631118440650281072_n.jpg?alt=media&token=2daf91f9-0b4e-4731-b264-b09613b7c618"
                alt="image1" />
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2301%2F474478192_610264245094698_8904530140588373474_n.jpg?alt=media&token=5b850811-0e0a-436d-8ed5-101d9a54fee8"
                alt="image1" />
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2301%2F474578166_610264285094694_1836717089413918863_n.jpg?alt=media&token=8d4183ab-feb3-4ee8-a184-e5cdade0f0f5"
                alt="image1" />
        </div>
    );
};

export default E2301;
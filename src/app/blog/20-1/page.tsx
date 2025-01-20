'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const E2001 = () => {
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
            <h1>Year-End Party: Niềm Vui Kết Nối Cuối Năm</h1>
            <h3 style={{ fontSize: "20px" }}>20-1-2025</h3>
            <p>Khi năm cũ khép lại, các công ty thường tổ chức buổi Year-End Party đặc biệt để tôn vinh những đóng góp của nhân viên và chào đón một năm mới đầy háo hức. Buổi tiệc mang không khí trẻ trung, vui tươi và ấm áp, góp phần tạo nên sự gắn kết giữa các thành viên trong tập thể.</p>
            <div className="paragraph">
                <h2>Chương Trình Văn Nghệ Đầy Màu Sắc</h2>
                <p>Chương trình văn nghệ là một phần không thể thiếu, mang đến những giây phút đầy màu sắc và cảm hứng. Các tiết mục ca nhạc, hài kịch, và biểu diễn do chính nhân viên thực hiện đã mang lại tiếng cười và sự nhiệt tình cho khán giả.</p>
            </div>
            
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2001%2F01XL0041.JPG?alt=media&token=6dbf4641-eb04-4de7-b991-05651894556c"
                alt="image1" />
            <br />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2001%2F01XL0077.JPG?alt=media&token=45b658b5-86c1-4eca-9981-71f00c70efaf"
                alt="image1" />
            <br />
            <div className="paragraph">
                <h2>Minigame Kịch Tính Và Sôi Động</h2>
                <p>Những trò chơi minigame vui nhộn như “đáp nhạc giật quà”, “thi nhảy ngẫu hứng” đã thu hút được sự tham gia náo nhiệt từ tất cả các thành viên. Tiếng cười và khích lệ cổ vũ liên tục tạo nên một bầu không khí đầy sôi động và kết nối.</p>
            </div>
        
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2001%2F01XL0523.JPG?alt=media&token=086e5c82-cb50-4a42-9792-bee268adcf3c"
                alt="image1" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2001%2F01XL0440.JPG?alt=media&token=64c251ed-56df-4cbe-9116-6bd4b8416a62" />

            <div className="paragraph">
                <h3>Bữa Tiệc Đầm Áp Và Nghĩa Tình</h3>
                <p>Sau phần chơi vui, tập thể cùng nhau quây quần bên bữa tiệc đầm áp. Các món ăn ngon miệng được chuẩn bị chu đáo và trình bày bắt mắt, góp phần mang lại sự gần gũi và thân mật cho buổi tiệc. Những câu chuyện, kỷ niệm được chia sẻ trong bữa tiệc tạo nên khoảnh khắc khó quên.</p>

            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2001%2F01XL0559.JPG?alt=media&token=f72b6096-3942-469d-ba53-1368cb76e2c5" />
         
            <div className="paragraph">
                <h3>Kết Thúc Trong Niềm Vui</h3>
                <p>Buổi tiệc khép lại với những bức ảnh tập thể, những lời chúc nhau thành công trong năm mới. Đây không chỉ là dịp tổng kết, mà còn là một khoảnh khắc để tăng cường tinh thần đoàn kết, góp phần tạo nên sự thành công chung trong tương lai.</p>
            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2001%2F01XL0628.JPG?alt=media&token=01273345-8068-44e6-81a7-75a53499de26" />
        </div>
    );
};

export default E2001;
'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0502 = () => {
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
      <Head> 
        <title>Trao Thưởng KPI - Vinh Danh Những Chiến Binh Xuất Sắc</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Trao Thưởng KPI - Vinh Danh Những Chiến Binh Xuất Sắc</h1>
        <h3 style={{ fontSize: "20px" }}>05-02-2025</h3>
        <p>Không khí tại công ty hôm nay thật náo nhiệt khi buổi lễ trao thưởng KPI chính thức diễn ra! Đây là khoảnh khắc tuyệt vời để vinh danh những nhân viên đã bứt phá, vượt qua mọi thử thách và đóng góp quan trọng vào sự phát triển chung của công ty.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        alt={"image"} style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0502%2F2025_02_05_08_18_IMG_0500.JPG?alt=media&token=758c288d-71e4-4efe-b44c-c139f478b1c3" />
        <p>Ngay sau đó, những phần thưởng danh giá được trao tận tay những "chiến binh" xuất sắc nhất. Tiếng vỗ tay không ngớt, những nụ cười rạng rỡ và cả những cái ôm chúc mừng đã khiến bầu không khí trở nên vô cùng sôi động.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        alt={"image"} style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0502%2F2025_02_05_08_17_IMG_0495.JPG?alt=media&token=94ffdc36-6faa-4851-aa86-f278c25656b8" />
        <p>Buổi lễ không chỉ có trao thưởng mà còn là dịp để mọi người cùng nhau nhìn lại hành trình vừa qua, chia sẻ kinh nghiệm và tiếp thêm động lực. Các tiết mục văn nghệ bùng nổ, những trò chơi vui nhộn và cả những màn giao lưu hài hước đã làm cho sự kiện trở nên đáng nhớ hơn bao giờ hết.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        alt={"image"} style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0502%2F2025_02_05_08_18_IMG_0504.JPG?alt=media&token=d0eec08b-3e34-4c41-b010-5fe85e76baac" />
        <p>Sự ghi nhận này không chỉ là động lực giúp nhân viên tiếp tục cố gắng mà còn tạo nên một môi trường làm việc hứng khởi, nơi mà mọi sự cống hiến đều được tôn vinh. Cùng nhau, chúng ta sẽ tiếp tục chinh phục những thử thách mới và tạo ra những thành công rực rỡ hơn nữa!</p>

      </div>
    </div> 
  );
};

export default B0502;
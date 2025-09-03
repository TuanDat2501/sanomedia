'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0209 = () => {
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
        <title>Chào Mừng Ngày Quốc Khánh Việt Nam (2/9/1945 – 2/9/2025)</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Chào Mừng Ngày Quốc Khánh Việt Nam (2/9/1945 – 2/9/2025)</h1>
        <h3 style={{ fontSize: "20px" }}>02-09-2025</h3>
        <p>Ngày 2/9 hằng năm là một dấu mốc lịch sử thiêng liêng của dân tộc Việt Nam – ngày mà bản Tuyên ngôn Độc lập được vang lên tại Quảng trường Ba Đình lịch sử, khai sinh nước Việt Nam Dân chủ Cộng hòa. Từ giây phút ấy, dân tộc ta chính thức bước sang một trang mới: độc lập, tự do và quyền làm chủ đất nước thuộc về nhân dân.</p>
        <p>Trải qua 80 năm xây dựng và phát triển, Việt Nam đã không ngừng khẳng định vị thế trên trường quốc tế. Tinh thần đoàn kết, ý chí kiên cường và khát vọng vươn lên đã giúp đất nước vượt qua bao khó khăn, thử thách để đạt được những thành tựu đáng tự hào.</p>
        <p>Ngày Quốc khánh 2/9 không chỉ là dịp để mỗi người dân Việt Nam tưởng nhớ công lao của các bậc tiền nhân, mà còn là thời khắc để chúng ta thêm tự hào, tiếp nối truyền thống, phát huy tinh thần sáng tạo và trách nhiệm trong sự nghiệp xây dựng đất nước phồn vinh, hạnh phúc.</p>
        <p>Sano Media xin gửi lời chúc mừng nồng nhiệt đến toàn thể cán bộ, nhân viên và gia đình, cũng như tất cả người dân Việt Nam nhân ngày Quốc khánh 2/9!</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/z6942980230554_85e21865adf93815b8d73fb15177c5f4.jpg?alt=media&token=3932b529-a77b-4e56-9d93-d6cf7c9b356b"
          alt="image1" />
        <br/>

        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/542135843_779367741517680_6930047670904673805_n.jpg?alt=media&token=741cf162-94f4-4285-ad4c-ea666c666802"
          alt="image1" />
        <p>Hãy cùng nhau gìn giữ ngọn lửa nhiệt huyết, góp sức xây dựng một Việt Nam giàu đẹp, văn minh và phát triển bền vững.</p>
      </div>
    </div>
  );
};

export default B0209;
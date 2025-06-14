'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1306 = () => {
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
        <title>Mừng Sinh Nhật 'Thủ Lĩnh Nhân Sự' - Người Giữ Lửa Của Sano Media</title>
        
      </Head>
      <div className="container">
        <h1>Mừng Sinh Nhật 'Thủ Lĩnh Nhân Sự' - Người Giữ Lửa Của Sano Media</h1>
        <h3 style={{ fontSize: "20px" }}>13-06-2025</h3>
        <p>Không khí tại Sano Media hôm nay rộn ràng và ấm áp hơn hẳn thường lệ, bởi cả công ty vừa cùng nhau tạo bất ngờ nhỏ nhưng đầy yêu thương dành cho một người đặc biệt: chị Nguyễn Thị Liên – Trưởng phòng Nhân sự đáng mến của nhà Sano!</p>
        <p>Với nụ cười thân thiện, sự tận tâm và tinh thần luôn “giữ lửa” cho văn hóa công ty, chị chính là người đứng sau hàng loạt hoạt động gắn kết nội bộ, là người lắng nghe và đồng hành với từng thành viên từ những ngày đầu bước chân vào Sano.</p>
        <p>Buổi tiệc sinh nhật nhỏ gọn nhưng chan chứa tình cảm đã khiến chị không khỏi xúc động – từ chiếc bánh kem đáng yêu, tấm thiệp ghi lời chúc ngọt ngào cho đến bài hát sinh nhật đồng thanh vang lên từ cả đại gia đình Sano.cc</p>
        <p>Và tất nhiên, không thể thiếu phần “quà tặng bất ngờ” – những lời chúc siêu dễ thương từ các thành viên trong team, khiến “chị đẹp nhân sự” phải bật cười!</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/z6696470044742_1443cf1654fec4247daa53b2a2ebd0d7.jpg?alt=media&token=7dd4f3a9-cf6a-48fe-94ed-11b44d96ad2d"
          alt="image1" />
        <br />
        <p>Cảm ơn chị vì đã luôn là một phần quan trọng của hành trình phát triển tại Sano. Mong chị sẽ luôn rạng rỡ, tràn đầy năng lượng và tiếp tục lan tỏa tinh thần tích cực đến tất cả chúng em</p>
        <p>Sano Media không chỉ là nơi làm việc – mà còn là một gia đình, nơi mỗi cá nhân được quan tâm, sẻ chia và yêu thương từ những điều giản dị nhất.</p>
        <p>Một lần nữa – HAPPY BIRTHDAY TO OUR HR QUEEN! 💖</p>
      </div>
    </div>
  );
};

export default B1306;
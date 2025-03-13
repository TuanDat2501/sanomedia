'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1303 = () => {
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
        <title>
        Nhìn lại 8/3 Tràn Đầy Yêu Thương, Vui Vẻ</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Nhìn lại 8/3 Tràn Đầy Yêu Thương, Vui Vẻ </h1>
        <h3 style={{ fontSize: "20px" }}>13-03-2025
        </h3>
        <p>Ngày Quốc tế Phụ nữ 8/3 đã khép lại nhưng những khoảnh khắc ấm áp và tràn đầy niềm vui vẫn còn đọng lại trong lòng mỗi người. Hãy cùng nhìn lại một ngày đặc biệt với thật nhiều tiếng cười, những món quà ý nghĩa và những lời chúc chân thành dành tặng cho phái đẹp!</p>
        <p>Những món quà thay lời tri ân
        Không chỉ là những phần quà xinh xắn hay những đóa hoa tươi thắm, đó còn là sự trân trọng, yêu thương mà công ty dành tặng cho các chị em. Những ánh mắt lấp lánh, những nụ cười hạnh phúc khi nhận quà chính là minh chứng cho một ngày 8/3 thật đặc biệt.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1303%2F0308.mp4?alt=media&token=4b7dd32e-fb64-4020-afbc-9a1a2ab3c531" type="video/mp4" />
        </video>
        
        <p>Không khí ngập tràn niềm vui
        Từ sáng sớm, văn phòng đã rộn ràng hơn bao giờ hết với những lời chúc, những cái ôm thân thương. Không khí sôi động, ấm áp khiến ai cũng cảm nhận được sự gắn kết và tình cảm chân thành từ đồng nghiệp.</p>
        <p>Lan tỏa yêu thương – Cùng nhau tỏa sáng
        Ngày 8/3 không chỉ là một ngày lễ, mà còn là dịp để mọi người bày tỏ sự biết ơn và khích lệ phái đẹp tiếp tục tỏa sáng. Tinh thần tích cực và niềm vui ấy sẽ còn mãi, giúp mỗi ngày làm việc thêm tràn đầy cảm hứng.</p>
        <p>Cảm ơn tất cả những người phụ nữ tuyệt vời đã luôn cống hiến hết mình! Chúc chị em luôn rạng rỡ, hạnh phúc và thành công! </p>
      </div>
    </div>
  );
};

export default B1303;
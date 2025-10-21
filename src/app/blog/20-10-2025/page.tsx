'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B201025 = () => {
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
        Sano Media Rộn Ràng Ngày 20/10 – Tôn Vinh Một Nửa Xinh Đẹp Của Công Ty!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media Rộn Ràng Ngày 20/10 – Tôn Vinh Một Nửa Xinh Đẹp Của Công Ty!</h1>
        <h3 style={{ fontSize: "20px" }}>20-10-2025
        </h3>
        <p>Ngày 20/10 – Ngày Phụ nữ Việt Nam, là dịp để Sano Media gửi những lời chúc tốt đẹp nhất đến tất cả những “đóa hoa xinh đẹp” đang góp phần tạo nên sắc màu rực rỡ cho ngôi nhà chung này.</p>
        <p>Sáng nay, văn phòng Sano Media ngập tràn tiếng cười, hoa và những lời chúc ngọt ngào. Không chỉ là những món quà xinh xắn hay bó hoa rực rỡ, mà đó còn là tình cảm chân thành mà các đồng nghiệp nam muốn gửi tới những cô gái tài năng, nhiệt huyết và luôn tỏa sáng trong công việc lẫn cuộc sống.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          alt={"image"} style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2010%2F566212439_820403384080782_3758032469962314085_n.jpg?alt=media&token=8e3161e2-9ac2-4fed-b593-25f0bbccfcff" />
        <p>Buổi tiệc nhỏ nhưng ấm cúng được tổ chức trong không khí vui vẻ, thân mật. Mọi người cùng nhau thưởng thức bánh ngọt, trà thơm, cùng chia sẻ câu chuyện và nụ cười – như một lời cảm ơn chân thành dành cho “một nửa” luôn âm thầm cống hiến và lan tỏa năng lượng tích cực mỗi ngày.</p>
        <p>Những khoảnh khắc rạng rỡ, những bức ảnh đầy tiếng cười hôm nay không chỉ là kỷ niệm đẹp mà còn là minh chứng cho tinh thần gắn kết và yêu thương mà Sano Media luôn gìn giữ.</p>
        <p>Chúc tất cả các chị em Sano Media luôn xinh đẹp, mạnh mẽ và hạnh phúc – không chỉ trong ngày 20/10 mà trong mọi ngày của hành trình phía trước!</p>
      </div>
    </div>
  );
};

export default B201025;
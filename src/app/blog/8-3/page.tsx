'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0803 = () => {
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
        <title>Ngày 8/3: Tặng Quà, Tặng Yêu Thương</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Ngày 8/3: Tặng Quà, Tặng Yêu Thương</h1>
        <h3 style={{ fontSize: "20px" }}>08-03-2025</h3>
        <p>Ngày Quốc tế Phụ nữ 8/3 là dịp đặc biệt để tôn vinh phái đẹp – những người luôn cống hiến và lan tỏa nguồn năng lượng tích cực. Tại công ty, không khí ngày hôm nay ngập tràn niềm vui và bất ngờ khi các chị em được nhận những món quà đầy ý nghĩa từ đồng nghiệp và ban lãnh đạo.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                alt={"image"} style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0803%2F2025_03_08_08_13_IMG_0665.JPG?alt=media&token=ace5ed8b-93f4-45b1-91d1-d7babef542cf" />
        <p>Những món quà thay lời tri ân
        Những phần quà xinh xắn, những bó hoa tươi thắm được trao tận tay như một lời cảm ơn chân thành dành cho những người phụ nữ tuyệt vời. Không chỉ là quà tặng, đó còn là sự trân trọng, là lời chúc cho một ngày 8/3 ngập tràn niềm vui và hạnh phúc.</p>

        <p> Khoảnh khắc ngập tràn yêu thương
        Không khí rộn ràng, những nụ cười rạng rỡ và những lời chúc tốt đẹp khiến ngày hôm nay trở nên vô cùng ấm áp. Mỗi món quà không chỉ mang giá trị vật chất mà còn chứa đựng tình cảm chân thành, sự quan tâm đặc biệt dành cho phái đẹp.</p>
      
        <p>Tôn vinh phụ nữ – Lan tỏa yêu thương
        Ngày 8/3 không chỉ là ngày dành riêng cho chị em mà còn là cơ hội để mọi người cùng nhau thể hiện sự quan tâm, chia sẻ và gắn kết hơn. Đây chính là nguồn động lực để mỗi người phụ nữ tiếp tục tỏa sáng và cống hiến hết mình.</p>
        
        <p>Một lần nữa, chúc các chị em luôn xinh đẹp, hạnh phúc và thành công! 🌸</p>
      </div>
    </div> 
  );
};

export default B0803;
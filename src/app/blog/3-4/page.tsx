'use client'
import React from 'react';
import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0304 = () => {
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
          MỜI BẠN GHÉ THĂM "CUỘC ĐẠI CHIẾN" CỦA ĐẠI GIA ĐÌNH SANO MEDIA</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Mời Bạn Ghé Thăm "Cuộc Đại Chiến" Của Đại Gia Đình Sano Media</h1>
        <h3 style={{ fontSize: "20px" }}>03-04-2025
        </h3>
        <p>Chào tháng 4 bằng năng lượng rực rỡ và không khí sôi động, Sano Media chính thức phát động minigame nội bộ với tên gọi cực “chiến”: “CUỘC ĐẠI CHIẾN – AI LÀ CHIẾN THẦN THẬT SỰ?”</p>
        <p>Minigame không chỉ là hoạt động khởi động đầu tháng mà còn là sân chơi gắn kết, nơi các chiến binh nhà Sano thể hiện bản lĩnh, sự sáng tạo và tinh thần đồng đội. Với các thử thách đầy bất ngờ, hài hước và không kém phần “hại não”, “Cuộc Đại Chiến” hứa hẹn sẽ mang đến những tiếng cười sảng khoái và những khoảnh khắc không thể nào quên.</p>
        <p>Mỗi thành viên được tham gia theo team – cùng nhau giải mật thư, thực hiện nhiệm vụ “lầy lội” và tranh tài qua các vòng loại gay cấn. Đặc biệt, phần thưởng hấp dẫn đang chờ đón những chiến binh xuất sắc nhất.</p>
        <p>Đây không chỉ là dịp để mọi người thư giãn sau những giờ làm việc căng thẳng, mà còn là cơ hội để thể hiện cá tính, phát huy tinh thần đồng đội và gắn kết hơn trong mái nhà chung Sano.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0404%2F0402(4).mp4?alt=media&token=069a7955-b0b1-4f44-aa81-b720bc6f266a" type="video/mp4" />
        </video>

      </div>
    </div>
  );
};

export default B0304;
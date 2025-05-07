'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0605 = () => {
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
        CÙNG NHÌN LẠI NHỮNG KHOẢNH KHẮC ĐÁNG NHỚ CỦA SANO MEDIA</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Nghiêm túc trong công việc – Hết mình trong vui chơi
        </h1>
        <h3 style={{ fontSize: "20px" }}>04-05-2025
        </h3>
        <p>Tại Sano Media, chúng tôi tin rằng một môi trường làm việc lý tưởng không chỉ cần hiệu quả mà còn phải tràn đầy cảm hứng. Vì vậy, bên cạnh tinh thần làm việc nghiêm túc, đội ngũ Sano cũng luôn biết cách “xả hơi” đúng lúc để nạp lại năng lượng.</p>
        <p>Mỗi tuần, mỗi tháng đều có những khoảnh khắc đáng nhớ – từ những buổi minigame nội bộ, team-building nhỏ tại văn phòng đến các chuyến dã ngoại, ăn uống sau giờ làm. Những hoạt động này không chỉ là niềm vui, mà còn là chất keo gắn kết, giúp các thành viên hiểu nhau hơn, phối hợp tốt hơn trong công việc.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0303%2F0301%20(1)(1).mp4?alt=media&token=5642c64d-4de4-451c-9107-8d1dfee05d75" type="video/mp4" />
        </video>
        <p>Sự cân bằng giữa làm việc và giải trí đã tạo nên một Sano Media không chỉ chuyên nghiệp mà còn ấm áp và đầy sức sống. Đây chính là nơi bạn có thể nghiêm túc theo đuổi mục tiêu – và cũng sẵn sàng bật cười thật lớn cùng đồng đội.</p>
      </div>
    </div>
  );
};

export default B0605;
'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0912 = () => {
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
          Vinh Danh Team Xuất Sắc Của Tháng</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Vinh Danh Team Xuất Sắc Của Tháng
        </h1>
        <h3 style={{ fontSize: "20px" }}>09-12-2025
        </h3>
        <p>Mỗi tháng trôi qua đều mang theo những nỗ lực, cố gắng và dấu ấn riêng của từng đội nhóm. Và tháng này, chúng ta cùng chúc mừng Team Xuất Sắc Nhất Tháng – những người đã ghi dấu ấn mạnh mẽ bằng tinh thần làm việc nghiêm túc, trách nhiệm và bứt phá không ngừng.</p>
        <p>Để đạt được danh hiệu này, team không chỉ hoàn thành KPI, mà còn vượt lên bằng những hành động nhỏ nhưng đầy giá trị: hỗ trợ nhau khi khó khăn, phối hợp nhịp nhàng trong từng nhiệm vụ, và luôn giữ tinh thần chủ động trong mọi tình huống.
          Chính sự kết hợp giữa kỹ năng, tinh thần đoàn kết và kỷ luật đã tạo nên kết quả đầy ấn tượng.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://i.ibb.co/p6Kmvzx6/595146045-860013056786481-2102202801764208385-n.jpg"
          alt="image1" />
        <p>Giải thưởng không chỉ là món quà động viên, mà còn là lời cảm ơn chân thành từ công ty gửi đến toàn team.
          Đây là minh chứng rằng:
          “Nỗ lực của bạn luôn được nhìn thấy – và xứng đáng được trân trọng.”</p>
        <p>Thành tích hôm nay là niềm tự hào của tập thể, nhưng cũng là nguồn cảm hứng cho toàn công ty.
          Chúng ta hy vọng team sẽ tiếp tục giữ vững phong độ, lan tỏa tinh thần làm việc chuyên nghiệp, nhiệt huyết và tạo nên nhiều dấu ấn hơn nữa trong thời gian tới.</p>
      </div>
    </div>
  );
};

export default B0912;
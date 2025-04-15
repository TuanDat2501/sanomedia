'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1404 = () => {
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
        Sano Media – Là Nhà Khi Mình Cần Một Gia Đình</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media – Là Nhà Khi Mình Cần Một Gia Đình</h1>
        <h3 style={{ fontSize: "20px" }}>14-04-2025
        </h3>
        <p>Có bao giờ bạn cảm thấy… nơi làm việc cũng có thể mang đến cảm giác như một gia đình?</p>
        <p>Tại Sano Media, chúng tôi không chỉ cùng nhau làm việc, mà còn cùng nhau chia sẻ – từ những khoảnh khắc thành công rực rỡ, cho đến cả những ngày “mệt mỏi chẳng muốn nói gì”. Ở đây, bạn không bao giờ phải đối mặt với khó khăn một mình, vì luôn có đồng nghiệp sẵn sàng ngồi cạnh, lắng nghe, và hỗ trợ hết mình.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0303%2F0301%20(1)(1).mp4?alt=media&token=5642c64d-4de4-451c-9107-8d1dfee05d75" type="video/mp4" />
        </video>
                  
        <p>Là những bữa trưa vội nhưng ấm áp tiếng cười. Là lời động viên nhẹ nhàng vào những ngày “chạy deadline mệt lả”. Là một cái ôm, một tin nhắn hỏi thăm, hay chỉ đơn giản là một ánh mắt hiểu ý nhau khi bạn cần “nghỉ một nhịp”.</p>
        <p>Chúng tôi không hoàn hảo, nhưng chúng tôi đủ chân thành để yêu quý nhau như những người thân ruột thịt. Mỗi người là một mảnh ghép, và khi gắn kết lại, chúng tôi trở thành một tập thể mạnh mẽ – một đại gia đình thật sự.</p>
        <p>Với Sano, đi làm không chỉ là công việc – đó là một hành trình sống, học hỏi, và lớn lên cùng nhau.</p>
      </div>
    </div>
  );
};

export default B1404;
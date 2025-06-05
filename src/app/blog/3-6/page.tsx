'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0306 = () => {
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
        <title>Chọn làm ở Sano – Là chọn tinh thần máu chiến!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Chọn làm ở Sano – Là chọn tinh thần máu chiến!</h1>
        <h3 style={{ fontSize: "20px" }}>03-06-2025</h3>
        <p>Bạn có thể tìm thấy hàng trăm môi trường công sở “an toàn, nhàn tênh”. Nhưng nếu bạn muốn được sống trọn từng phút trong công việc, thì Sano Media chính là nơi dành cho bạn.</p>
        <p>Ở Sano, không có chuyện "đủ rồi là được". Chúng tôi chọn vượt kỳ vọng, bứt giới hạn, và chơi một cuộc chơi mà chỉ có sự chủ động mới dẫn đến đỉnh cao. Tinh thần máu chiến không đến từ deadline, mà đến từ khát khao được làm điều gì đó khác biệt mỗi ngày.</p>
        <p>Chúng tôi yêu những buổi brainstorm rộn ràng như hội chợ, nơi một câu nói vui cũng có thể bật ra một chiến dịch marketing. Yêu cả những lúc tăng ca cùng nhau, để rồi nhìn lại mà thấy: “Ủa, tụi mình vừa tạo ra cái gì đỉnh quá vậy?!”</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL0281.jpg?alt=media&token=0d3ee022-cb67-4db1-9921-123fd7cf8384"
                        alt="image1" />
                    <br />
        <p>Và dù mỗi người một cá tính, một phong cách làm việc, nhưng điều giữ chúng tôi cùng hướng – chính là sự máu lửa, quyết liệt và không ngừng học hỏi. Đó là thứ DNA riêng biệt mà bạn sẽ cảm nhận rõ chỉ sau một vài ngày làm việc tại đây.  </p>

        <p>Ở Sano Media, làm việc không phải để xong việc, mà để tạo dấu ấn. Chúng tôi không theo đuổi sự hoàn hảo – mà theo đuổi bản lĩnh để ngày mai làm tốt hơn hôm nay.</p>
        <p>Nếu bạn đang tìm kiếm một nơi không chờ thời cơ mà tự tạo cơ hội,Chúng tôi vẫn luôn chờ bạn tại Sano.</p>
      </div>
    </div> 
  );
};

export default B0306;
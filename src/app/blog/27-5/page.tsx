'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2705 = () => {
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
        Làm hết mình – Không chỉ vì deadline!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Làm hết mình – Không chỉ vì deadline!
        </h1>
        <h3 style={{ fontSize: "20px" }}>27-05-2025
        </h3>
        <p>Trong thế giới truyền thông tốc độ cao như ở Sano Media, mỗi ngày trôi qua không chỉ là một cuộc chạy đua với deadline. Đó còn là hành trình mà mỗi thành viên đang tự “chạy đua” với chính mình – để làm tốt hơn, sáng tạo hơn, và không ngừng vượt giới hạn.</p>
        <p>Ở đây, không ai nói bạn phải hoàn hảo. Nhưng tất cả đều chọn cách làm việc với tinh thần hết mình – vì công việc, vì tập thể, và đôi khi là vì… chính bản thân mình 1 năm trước.</p>
        <p>Có người đến sớm, có người về muộn. Có người ngồi gõ máy hàng giờ, dựng video xuyên đêm. Không phải vì ai ép – mà vì đã chọn làm nghề sáng tạo, thì đã xác định sống với đam mê và áp lực như hai người bạn thân.</p>
        <p>Ở Sano, tinh thần làm việc không đo bằng số giờ OT, mà đo bằng năng lượng bạn lan tỏa mỗi lần “cân team”, bằng thái độ “không ngại làm khó – chỉ sợ không đủ hay”.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/Screenshot%202025-05-30%20090051.png?alt=media&token=0b92a78a-ea19-479f-86fb-deb1345996c0"
                                alt="image1" />
                           
        <p>Và cũng vì thế, mỗi thành viên là một mảnh ghép có màu riêng, nhưng khi ghép lại, lại tạo nên một tập thể đầy màu sắc, trẻ trung – và không ngừng bùng nổ.</p>
      </div>
    </div>
  );
};

export default B2705;
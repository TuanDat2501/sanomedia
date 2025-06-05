'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0406 = () => {
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
        <title>Làm việc cùng nhau – Làm nên chuyện lớn!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Làm việc cùng nhau – Làm nên chuyện lớn!</h1>
        <h3 style={{ fontSize: "20px" }}>03-06-2025</h3>
        <p>Tại Sano Media, chúng tôi tin rằng: "Một người giỏi có thể đi nhanh, nhưng một tập thể đoàn kết sẽ đi thật xa."</p>
        <p>Và chính nhờ tinh thần gắn kết – sẻ chia – cùng phát triển, đại gia đình Sano đã tạo nên những điều không tưởng, từ những điều tưởng như bình thường nhất.</p>
        <h2>Ở Sano, không ai đi một mình.</h2>
        <p>Bạn sẽ luôn có một đồng đội sẵn sàng hỗ trợ bạn khi khó khăn, một người leader truyền động lực mỗi ngày, và một team luôn “chịu chơi – chịu làm – chịu bùng nổ ý tưởng”.</p>
        <p>Mỗi ngày làm việc không chỉ là trao đổi công việc, mà là chia sẻ, học hỏi và cùng nhau trưởng thành.
          Tại đây, bạn không cần phải là người giỏi nhất để được công nhận – bạn chỉ cần là người dám nỗ lực và dám không ngừng thay đổi.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL8986%20(1).jpg?alt=media&token=854ffa17-14df-4638-8817-0f1aa5464243"
          alt="image1" />
        <br />
        <p>Và điều khiến Sano đặc biệt, không chỉ là những dự án hoành tráng hay deadline cháy máy – mà là cái cách mỗi cá nhân gắn bó, hỗ trợ và truyền cảm hứng cho nhau từng ngày.</p>
        <p>Chúng tôi không chỉ làm việc để hoàn thành mục tiêu – mà làm việc để xây dựng một môi trường mà ai cũng muốn thuộc về.</p>
        <p>Sano Media – nơi công việc không chỉ là nhiệm vụ, mà là hành trình chinh phục những điều lớn lao cùng nhau!</p>
      </div>
    </div>
  );
};

export default B0406;
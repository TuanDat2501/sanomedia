'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1504 = () => {
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
        Sano Media – Những Kết Nối Làm Nên Sức Mạnh Tập Thể</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media – Những Kết Nối Làm Nên Sức Mạnh Tập Thể</h1>
        <h3 style={{ fontSize: "20px" }}>15-04-2025
        </h3>
        <p>Ở một nơi mà deadline luôn kề bên, brief đôi khi “xoắn não”, và lịch họp dày như mưa mùa hạ – vẫn luôn có điều gì đó khiến mỗi ngày tại Sano Media trở nên đặc biệt.</p>
        <p>Đó là những cái gật đầu ăn ý khi brainstorming. Là tiếng cười lan ra từ góc phòng khi một chiếc meme nội bộ được “tung thính”. Là những cái “vỗ vai” thầm lặng mà ấm áp mỗi khi một ai đó mệt mỏi.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                  alt={"image"} style={{ maxWidth: "1200px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL9751.jpg?alt=media&token=dca7eb22-e0fb-4a4c-9fdb-dcb76fb23617" />
                  
        <p>Sức mạnh của Sano Media không chỉ đến từ chiến lược, ý tưởng hay công nghệ. Nó đến từ con người – từ những kết nối thầm lặng, nhưng chân thành. Chúng tôi không phải là một tập thể hoàn hảo, nhưng chúng tôi là một đội ngũ biết cách cùng nhau tiến về phía trước.</p>
        <p>Khi một người chùng lại, cả team cùng đẩy. Khi một ý tưởng chưa kịp chín, cả nhóm cùng nuôi dưỡng. Và khi thành công gọi tên, đó là chiến thắng của cả đại gia đình.</p>
        <p>Ở Sano, điều giữ chân chúng tôi không chỉ là công việc – mà là những người đồng hành. Những người mà dù deadline có dí sát gáy, vẫn sẽ gửi bạn ly trà sữa đúng vị. Những người mà bạn có thể gọi là đồng nghiệp, bạn bè… và đôi khi, như một gia đình.</p>
      </div>
    </div>
  );
};

export default B1504;
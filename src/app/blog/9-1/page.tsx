'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0701 = () => {
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
        Đã bao lâu rồi bạn chưa chạy?</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Đã bao lâu rồi bạn chưa chạy? </h1>
        <h3 style={{ fontSize: "20px" }}>09-01-2025
        </h3>
        <p>Chạy không chỉ là một bài tập thể dục, mà còn là cách để giải tỏa căng thẳng, làm mới bản thân và tăng cường sức khỏe. Và không chỉ là chạy bộ, mà chạy theo những ước mơ, những mục tiêu trong cuộc sống.</p>
        <p>Đã bao lâu rồi bạn không dành 30 phút mỗi ngày để rời khỏi chiếc ghế văn phòng hay chiếc giường yêu dấu và vận động? Đã bao lâu rồi bạn không thử một điều gì mới, để thách thức giới hạn của bản thân?</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          alt={"image"} style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0901%2F472717366_600007529453703_5076841229387310821_n.jpg?alt=media&token=75711a68-2016-4dc3-b273-001c24846195" />
                  <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          alt={"image"} style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0901%2F472718583_600007359453720_1304544409523081240_n.jpg?alt=media&token=071e3fd0-7b94-401e-839a-0bb2b2baee7d" />
          <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          alt={"image"} style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0901%2F473013720_600010166120106_5921910348373601372_n.jpg?alt=media&token=ae693ca5-7cad-4fdd-900e-f05780809248" />
          <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          alt={"image"} style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0901%2F473046365_600007579453698_2671145816047045730_n.jpg?alt=media&token=bd21bdbb-ea27-4d9d-a587-9241a3dfc508" />
        <p>Ngoài ra, chạy Marathon còn giúp xây dựng mối quan hệ xã hội. Các giải chạy thường là cơ hội để kết nối với những người cùng sở thích, chia sẻ kinh nghiệm và động viên nhau. Không khí sôi động, tinh thần đồng đội tại các sự kiện này cũng là nguồn cảm hứng lớn lao cho tất cả những người tham gia.</p>
        <p>Với những lợi ích rõ ràng cả về thể chất lẫn tinh thần, chạy Marathon không chỉ là môn thể thao mà còn là một hành trình khám phá và phát triển bản thân. Đây thực sự là hoạt động đáng trải nghiệm cho bất kỳ ai muốn sống khỏe mạnh và tích cực hơn.</p>
      </div>
    </div>
  );
};

export default B0701;
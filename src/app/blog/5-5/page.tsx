'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0505 = () => {
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
  
        Văn Phòng Sano Media – Không Gian Truyền Cảm Hứng Mỗi Ngày
        </h1>
        <h3 style={{ fontSize: "20px" }}>05-05-2025
        </h3>
        <p>Bước chân vào văn phòng của Sano Media, bạn sẽ không chỉ thấy bàn ghế hay máy tính – mà còn cảm nhận được một nguồn năng lượng trẻ trung, sáng tạo và tràn đầy cảm hứng.</p>
        <p>Không gian được thiết kế mở, hiện đại và thân thiện giúp mỗi thành viên thoải mái thể hiện bản thân, dễ dàng kết nối và hợp tác cùng đồng đội. Từ góc cà phê nhỏ, nơi sẻ chia những câu chuyện đầu ngày, đến bàn làm việc ngập tràn ý tưởng và sticky notes sắc màu – mỗi chi tiết đều phản ánh rõ tinh thần năng động của đại gia đình Sano.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1802%2Fvideo123.mp4?alt=media&token=992deb75-057d-4a1c-ab0e-0878ecd5ecd0" type="video/mp4" />
        </video>
        <p>Văn phòng không chỉ là nơi làm việc, mà còn là “ngôi nhà thứ hai” – nơi mọi người cùng nhau ăn trưa, cùng nhau brainstorming, cùng nhau chia sẻ thành công và cả những thử thách. Không gian tạo nên văn hóa, và chính văn hóa ấy khiến mỗi ngày tại Sano Media đều tràn đầy cảm hứng và động lực để bứt phá.</p>
      </div>
    </div>
  );
};

export default B0505;
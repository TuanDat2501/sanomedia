'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2907 = () => {
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
        Sano Media – Hành trình du lịch đầy kỷ niệm và gắn kết</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Sano Media – Hành trình du lịch đầy kỷ niệm và gắn kết
        </h1>
        <h3 style={{ fontSize: "20px" }}>29-07-2025
        </h3>
        <p>Một chuyến đi không chỉ để thư giãn mà còn để sẻ chia, gắn kết và cùng nhau tạo nên những dấu ấn khó quên – đó chính là tinh thần mà tập thể Sano Media đã trải qua trong chuyến du lịch vừa qua.</p>
        <p><b>Ngày 1: Khởi đầu xanh mát, rộn ràng niềm vui</b></p>
        <p>Hành trình bắt đầu bằng chuyến tham quan vườn dừa xanh mát. Không khí trong lành, thiên nhiên trong trẻo đã giúp mọi người cảm thấy nhẹ nhàng, thoải mái, sẵn sàng cho những trải nghiệm sắp tới. Buổi tối, cả đoàn cùng nhau thưởng thức bữa ăn ấm áp, hòa mình trong những tiết mục âm nhạc sôi động, tạo nên khởi đầu thật rộn ràng.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2909%2FDSC07661.JPG?alt=media&token=22cfa4f6-c50c-429d-ab7e-fcdc21a1446f"
                                alt="image1" />
        <p><b>Ngày 2: Hòa mình vào biển xanh và đêm gala đáng nhớ</b></p>
        <p>Cả đoàn háo hức ra khơi đến Hòn Sơn – hòn đảo đẹp như tranh vẽ. Sau khi tham quan và nhận phòng khách sạn, mọi người nhanh chóng hòa mình vào làn nước trong xanh, bơi lội và trải nghiệm chèo SUP thú vị. Buổi tối, đêm gala do Sano Media tổ chức mang lại tiếng cười giòn giã, không khí rộn ràng cùng những khoảnh khắc sẻ chia đáng nhớ.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2909%2FDVK08102.JPG?alt=media&token=7b65d09c-9fd5-49a6-bf32-94db4b9b59a2"
                                alt="image1" />
        <p><b>Ngày 3: Vượt thử thách – Gắn kết sức mạnh tập thể</b></p>
        <p>Một điểm nhấn không thể quên là hành trình leo núi Ma Thiên Lãnh. Con đường núi đầy thử thách nhưng cũng tràn ngập tinh thần chinh phục. Sau đó, buổi chiều là chương trình teambuilding sôi động – nơi mọi người cùng nhau vượt qua thử thách, gắn kết và thêm hiểu nhau hơn.</p>                   
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2909%2FDVK08435.JPG?alt=media&token=e303b382-3bc0-438d-99d3-aa5ef15cdd17"
                                alt="image1" />

        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2909%2FDVK08455.JPG?alt=media&token=f3cf9e28-9463-4ab5-8a5e-5ef9b0f549df"
                                alt="image1" />         

        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2909%2FDVK08695.JPG?alt=media&token=a015ecb8-af6a-473a-ad45-04390b75faf5"
                                alt="image1" />                                             
        <p><b>Ngày 4: Khép lại bằng những khoảnh khắc lắng đọng</b></p>
        <p>Ngày cuối, mỗi thành viên tận hưởng khoảng thời gian tự do theo cách riêng: ngắm bình minh, dạo biển hay chỉ lặng nghe tiếng sóng. Những phút giây nhẹ nhàng ấy khép lại chuyến đi, để lại trong lòng mỗi người kỷ niệm thật trọn vẹn.</p>
      </div>
    </div>
  );
};  

export default B2907;
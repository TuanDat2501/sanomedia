'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1604 = () => {
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
        Cùng Nhau Vượt Sóng – Tinh Thần Chiến Binh Nhà Sano</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Cùng Nhau Vượt Sóng – Tinh Thần Chiến Binh Nhà Sano</h1>
        <h3 style={{ fontSize: "20px" }}>16-04-2025
        </h3>
        <p>Không phải lúc nào hành trình cũng êm ả, không phải mọi dự án đều suôn sẻ từ đầu. Nhưng điều khiến Sano Media luôn tiến về phía trước – chính là tinh thần chiến binh luôn bùng cháy trong mỗi thành viên.</p>
        <p>Ở Sano, “vượt sóng” không phải chỉ là khẩu hiệu. Đó là những lần cả team thức trắng để kịp deadline. Là khi một chiến dịch “fail nhẹ”, nhưng cả phòng vẫn ngồi lại cùng nhau tìm giải pháp, không ai bỏ lại ai. Là những cái “gật đầu đồng lòng” khi quyết định táo bạo cần được đưa ra.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                  alt={"image"} style={{ maxWidth: "1200px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/490267198_669673089153813_8648893672316917879_n.jpg?alt=media&token=d21ecc5f-2217-4b4c-8676-d6bbacdb578e" />
                  
        <p>Tinh thần chiến binh ấy không chỉ nằm ở sự kiên cường, mà còn là sự đoàn kết. Khi bạn mệt, sẽ có người tiếp sức. Khi bạn loay hoay, sẽ có người chỉ đường. Và khi bạn toả sáng, cả team sẽ là người vỗ tay đầu tiên.</p>
        <p>Sano Media không chỉ tạo ra giá trị cho khách hàng, mà còn xây dựng một môi trường nơi mỗi người có thể vững vàng vượt qua mọi thử thách. Bởi vì, chúng tôi tin rằng: “Đi một mình có thể đi nhanh – nhưng đi cùng nhau, mới đi được xa.”</p>
        <p>Hãy cùng nhau vượt sóng, cùng nhau chinh phục những đỉnh cao mới. Bởi vì, trong mỗi chúng ta đều có một chiến binh – và cùng nhau, chúng ta sẽ là một đội quân bất khả chiến bại.</p>
      </div>
    </div>
  );
};

export default B1604;
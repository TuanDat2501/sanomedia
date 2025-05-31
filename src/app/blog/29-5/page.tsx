'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2905 = () => {
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
          Ở Sano Media, chúng ta không chỉ đi làm – chúng ta đang xây giấc mơ.</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Ở Sano Media, chúng ta không chỉ đi làm – chúng ta đang xây giấc mơ.
        </h1>
        <h3 style={{ fontSize: "20px" }}>29-05-2025
        </h3>
        <p>Có thể mỗi sáng bạn đến công ty với chiếc balo lỉnh kỉnh, cốc cà phê còn chưa uống cạn, và cả đống deadline chờ sẵn. Nhưng tại Sano Media, mọi thứ không dừng lại ở công việc.</p>
        <p> Ở đây, bạn không chỉ làm để hoàn thành KPI – bạn làm vì muốn nhìn thấy thứ gì đó mình tạo ra chạm được vào cảm xúc của người khác.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL9917.jpg?alt=media&token=9b5a2889-e566-4451-a46c-2e574746157d"
                                alt="image1" />
        <p>Bạn không chỉ chạy dự án – bạn đang cùng cả team tạo nên một sản phẩm có giá trị, có dấu ấn, và có cả “chất” của mình trong đó.</p>
        <p>Và giữa những buổi họp bất chợt, deadline sát nút hay feedback “căng như dây đàn”, chúng ta vẫn cười. Vì chúng ta biết mình không làm việc một mình. Chúng ta có đồng đội, có những cái gật đầu ủng hộ, có những lần “vỗ vai” đầy tinh thần: “Ráng tí nữa thôi là xong!”</p>                   
      </div>
    </div>
  );
};

export default B2905;
'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1902 = () => {
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
        <title>KHI CÓ AI ĐÓ HỎI: ĐI LÀM CÓ GÌ VUI?</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Khi Có Ai Đó Hỏi: Đi Làm Có Gì Vui?</h1>
        <h3 style={{ fontSize: "20px" }}>19-02-2025</h3>
        <p>Nếu ai đó hỏi: "Đi làm có gì vui?" thì hãy để chúng tôi kể cho bạn nghe về một buổi giao lưu siêu bùng nổ tại Sano Media!</p>
        <p>Không chỉ đơn thuần là công việc, mỗi ngày tại đây còn là một hành trình đầy ắp tiếng cười, sự sáng tạo và những pha phối hợp “đỉnh kout” của cả team. Buổi giao lưu vừa qua chính là minh chứng rõ nhất – nơi mà tất cả được bung xõa hết mình, cùng nhau tạo nên những khoảnh khắc khó quên.</p>
        <p>Những thử thách đồng đội khiến ai cũng cười lăn cười bò. Những pha xử lý tình huống không thể lầy lội hơn. Những màn kết hợp ăn ý đến bất ngờ</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1902%2F0218(4).mp4?alt=media&token=bc775491-6f38-4313-b308-554016c70ffd" type="video/mp4" />
        </video>
        <p>Tất cả không chỉ mang đến tiếng cười mà còn giúp chúng tôi hiểu nhau hơn, phối hợp ăn ý hơn trong công việc. Vì làm việc hiệu quả không chỉ là những con số, mà còn là sự gắn kết, tinh thần đồng đội và niềm vui mỗi ngày.</p>
        <p>Vậy nên, nếu có ai hỏi đi làm có gì vui? Thì câu trả lời là: Có đồng đội chất, có môi trường sáng tạo, có những khoảnh khắc cực "cháy" – vậy là đủ để mỗi ngày đi làm đều trở thành một trải nghiệm đáng nhớ!</p>
        <p>Sano Media – Làm hết sức, vui hết mình!</p>
      </div>
    </div> 
  );
};

export default B1902;
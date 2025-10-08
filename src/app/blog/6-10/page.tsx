'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0610 = () => {
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
        Trung Thu Rộn Ràng – Gắn Kết Yêu Thương Cùng Sano Media!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
         Trung Thu Rộn Ràng – Gắn Kết Yêu Thương Cùng Sano Media!
        </h1>
        <h3 style={{ fontSize: "20px" }}>06-10-2025
        </h3>
        <p>Không khí Trung thu đã tràn ngập khắp Sano Media! Tối qua, đại gia đình chúng ta đã cùng nhau tận hưởng một đêm trăng thật đáng nhớ – nơi tiếng cười, niềm vui và tinh thần gắn kết hòa quyện thành một kỷ niệm ngọt ngào.</p>
        <p>Buổi tiệc bắt đầu bằng những trò chơi vui nhộn, thử thách “cười ra nước mắt” khiến ai cũng phải tham gia hết mình. Tiếp đó là phần rước đèn – phá cỗ, nơi mọi người cùng nhau chia sẻ bánh nướng, bánh dẻo, thưởng thức trà và trò chuyện rôm rả như một đại gia đình thật sự.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0610%2F1004(1).mp4?alt=media&token=1b370d5f-c32f-4177-91bd-0a7a1506c775" type="video/mp4" />
        </video>  
        <p>Điều đặc biệt nhất chính là màn trao quà Trung thu đầy bất ngờ và ý nghĩa. Những món quà nhỏ nhưng chứa đựng tình cảm lớn từ công ty, như lời chúc đến tất cả thành viên Sano Media – chúc mỗi người đều có một mùa trăng tròn vẹn, ấm áp và hạnh phúc bên đồng nghiệp thân thương.</p>
        <p>Buổi tối khép lại trong ánh đèn lung linh, tiếng cười rộn rã và cảm giác thân thuộc khó quên. Trung thu năm nay không chỉ là ngày hội, mà còn là dịp để mọi người gần nhau hơn, hiểu nhau hơn và thêm yêu công việc mình đang làm mỗi ngày</p>                   
      </div>
    </div>
  );
};  

export default B0610;
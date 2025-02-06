'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0502 = () => {
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
        <title>Recap Year End Party - Đại Tiệc Rộn Ràng, Cảm Xúc Tràn Đầy</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Recap Year End Party - Đại Tiệc Rộn Ràng, Cảm Xúc Tràn Đầy</h1>
        <h3 style={{ fontSize: "20px" }}>06-02-2025</h3>
        <p>Bầu không khí tại Year End Party của Sano Media thật sự bùng nổ và đáng nhớ! Chương trình được mở màn bằng những tiết mục văn nghệ sáng tạo, đầy năng lượng. Từ những màn nhảy sôi động đến những ca khúc tràn đầy cảm xúc, tất cả đã mang lại một dên dàn không thể tuyệt vời hơn.</p>
        <p>Khoảnh khắc vinh danh những cá nhân và đội nhóm xuất sắc chính là điểm nhấn đầy tự hào. Các gương mặt tiêu biểu được xưng tên trong những tràng vỗ tay không ngớt, ghi nhận những đóng góp to lớn và cống hiến hết mình của họ cho sự phát triển chung.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0602%2FFacebook.mp4?alt=media&token=9c088dc8-e2cd-43aa-abca-37d7357a1195" type="video/mp4" />
        </video>
        <p>Những trò chơi và phần bốc thăm trúng thưởng siêu hấp dẫn đã khuấy động không gian, mang đến những trận cười sảng khoái và những giây phút hào hứng bất ngờ. Các giải thưởng bất ngờ đã khiến ai nấy cũng hào hứng chờ đợi và hào hứng tham gia.</p>
        <p>Và tất nhiên, bữa tiệc đầm áp, rộn ràng tiếng cười từ đại gia đình Sano Media là một cái kết hoàn hảo cho một đêm đầy ấm áp và kết nối. Chúng ta đã cùng nhau nhìn lại những thành tựu, chia sẻ những kỷ niệm và cùng nhau hướng đến một năm mới với nhiều thành công hơn nữa. Cảm ơn tất cả các thành viên đã góp phần tạo nên một buổi tiệc tràn đầy cảm xúc và ký ức đẹp!</p>
        <p>Hãy cùng nhau bước vào năm mới với tâm thế hào hứng và quyết tâm chinh phục những thách thức mới!</p>

      </div>
    </div> 
  );
};

export default B0502;
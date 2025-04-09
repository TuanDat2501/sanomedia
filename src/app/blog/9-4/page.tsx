'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0904 = () => {
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
        Vinh Danh Những Chiến Binh Xuất Sắc</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Vinh Danh Những Chiến Binh Xuất Sắc</h1>
        <h3 style={{ fontSize: "20px" }}>08-04-2025
        </h3>
        <p>Một tập thể vững mạnh không thể thiếu những cá nhân nỗ lực bền bỉ – và tại Sano Media, chúng tôi luôn ghi nhớ điều đó.</p>
        <p> Ngày hôm nay, đại gia đình Sano cùng nhau dành thời gian để vinh danh những nhân sự xuất sắc nhất tháng – những người không chỉ hoàn thành công việc với kết quả ấn tượng, mà còn lan tỏa năng lượng tích cực, tinh thần trách nhiệm và tinh thần đồng đội đáng quý.</p>
       <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       style={{ maxWidth: "1200px" }}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/z6207464615119_10b9e9473c03fd46cb3046cc1393ac0d.jpg?alt=media&token=5b014d9b-86aa-4374-8f92-09d890e18a51"
                       alt="image1" />
                  
        <p>Mỗi phần thưởng được trao tay không chỉ là sự công nhận, mà còn là lời cảm ơn chân thành từ tập thể. Cảm ơn vì đã luôn cháy hết mình, vì đã không ngừng học hỏi, đổi mới và trở thành tấm gương truyền cảm hứng cho mọi người xung quanh.</p>
        <p>Và với những bạn chưa xuất hiện trong danh sách tháng này – đừng quên, nỗ lực hôm nay chính là bước đệm để tên bạn được xướng lên vào tháng sau. Mỗi người đều có cơ hội tỏa sáng – và Sano Media sẽ luôn đồng hành trên hành trình đó.</p>
        <p>Một lần nữa, chúc mừng những gương mặt vàng tháng này! Hãy tiếp tục bứt phá và làm nên những điều tuyệt vời hơn nữa trong tháng tới!</p>
      </div>
    </div>
  );
};

export default B0904;
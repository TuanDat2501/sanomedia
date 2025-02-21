'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2102 = () => {
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
        <title>Vẽ Ước Mơ - Chạm Tới Tương Lai</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Vẽ Ước Mơ - Chạm Tới Tương Lai</h1>
        <h3 style={{ fontSize: "20px" }}>20-02-2025</h3>
        <p>Cùng nhau thiết kế lá cờ đại diện cho team! Không chỉ đơn thuần là một phần thử thách, đây còn là cơ hội để mỗi thành viên thể hiện cá tính, sự sáng tạo và tinh thần đồng đội.</p>
        <p>Từng nét vẽ, từng màu sắc đều mang một ý nghĩa đặc biệt, thể hiện mục tiêu, hoài bão và tinh thần chiến đấu không ngừng nghỉ của mỗi team. Những lá cờ không chỉ đẹp mắt mà còn chứa đựng sự đoàn kết, niềm tin và ý chí vươn xa.</p>
        <p>Không khí sự kiện trở nên bùng nổ khi các đội lần lượt thuyết trình về ý tưởng thiết kế của mình. Những câu chuyện phía sau mỗi biểu tượng, mỗi họa tiết trên lá cờ đã tạo nên những khoảnh khắc đáng nhớ, giúp các thành viên hiểu nhau hơn và gắn kết hơn bao giờ hết.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1912%2F01XL8982.JPG?alt=media&token=850e5eb1-0d2e-4656-bcbc-0b4cb5c59175"
                        alt="image1" />
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1912%2F01XL8986.JPG?alt=media&token=9006b7ca-c861-424c-b840-f36c2692af88"
                        alt="image1" />
                    <br />
        <p>Hoạt động không chỉ là một cuộc thi mà còn là lời khẳng định rằng: khi cả team cùng chung chí hướng, cùng vẽ lên những ước mơ, thì tương lai tươi sáng không còn xa. Cùng nhau, chúng ta sẽ tiếp tục tiến về phía trước, chinh phục mọi thử thách và đạt được những thành tựu rực rỡ!</p>
        <p>Sẵn sàng giương cao lá cờ của mình và chinh phục những đỉnh cao mới chưa? Let’s go team!</p>
      </div>
    </div> 
  );
};

export default B2102;
'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1804 = () => {
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
        BEE MATCHING 2025 – NỐI LIỀN TƯƠNG LAI CÙNG SỰ NGHIỆP</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>

        Bee Matching 2025 - Nối Liền Tương Lai Cùng Sự Nghiệp </h1>
        <h3 style={{ fontSize: "20px" }}>18-04-2025
        </h3>
        <p>𝐒𝐚𝐧𝐨 𝐌𝐞𝐝𝐢𝐚 tự hào là đối tác đồng hành cùng Cao đẳng FPT Polytechnic Hà Nam trong Ngày hội phỏng vấn "𝐁𝐞𝐞 𝐌𝐚𝐭𝐜𝐡𝐢𝐧𝐠 𝟐𝟎𝟐𝟓", sự kiện đặc biệt tạo cơ hội cho sinh viên khám phá và kết nối trực tiếp với các cơ hội nghề nghiệp trong ngành truyền thông. </p>
        <p>𝐒𝐚𝐧𝐨 𝐌𝐞𝐝𝐢𝐚 luôn đặt sứ mệnh phát triển nhân tài lên hàng đầu. Chúng tôi cam kết không chỉ mang lại cơ hội thực tập trong môi trường làm việc chuyên nghiệp, mà còn tạo ra những trải nghiệm giúp các bạn có thể áp dụng lý thuyết vào thực tiễn, học hỏi những kỹ năng thực tế ngay từ khi còn ngồi trên ghế nhà trường.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                  alt={"image"} style={{ maxWidth: "1200px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1804%2Fz6503760837345_dc01ff423048e5f86c8305c886319115.jpg?alt=media&token=c85a53ac-f049-496e-93a6-31227c6893e6" />
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                  alt={"image"} style={{ maxWidth: "1200px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1804%2Fz6503760853820_cce040a49679830b35352aeed9cc3835.jpg?alt=media&token=7d17dba6-7b2b-4108-aa32-fe994512c421" />          
        <p>Sự kiện này không chỉ là cơ hội để các bạn sinh viên kết nối với các nhà tuyển dụng, mà còn là bước khởi đầu trong hành trình tạo dựng sự nghiệp vững chắc. Tại 𝐒𝐚𝐧𝐨 𝐌𝐞𝐝𝐢𝐚, chúng tôi luôn hướng tới việc tìm kiếm những tài năng trẻ, những con người có đam mê, sáng tạo và nỗ lực không ngừng nghỉ để cùng chúng tôi tạo ra những dự án đầy thử thách, đổi mới và đầy hứa hẹn.</p>
        <p>Ngày hội phỏng vấn “𝐁𝐞𝐞 𝐌𝐚𝐭𝐜𝐡𝐢𝐧𝐠 𝟐𝟎𝟐𝟓” là minh chứng cho cam kết của chúng tôi trong việc xây dựng và bồi dưỡng một thế hệ nhân lực chất lượng cao, góp phần nâng tầm ngành truyền thông và đóng góp vào sự phát triển bền vững của nền kinh tế.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                  alt={"image"} style={{ maxWidth: "1200px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1804%2Fz6503760870188_e5bf0c46b3236a26c6fbe0be812160bf.jpg?alt=media&token=da4ac7ff-3833-46ca-bb0b-6e905a88d234" />
        
        <p>Cảm ơn Cao Đẳng FPT Polytechnic Hà Nam đã cùng 𝐒𝐚𝐧𝐨 𝐌𝐞𝐝𝐢𝐚 thực hiện sự kiện này, đồng hành trong hành trình giúp sinh viên chuẩn bị tốt nhất cho tương lai nghề nghiệp!</p>
      </div>
    </div>
  );
};

export default B1804;
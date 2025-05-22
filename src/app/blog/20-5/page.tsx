'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2005 = () => {
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
        Một Ngày Ở Sano Media – Nơi Cảm Hứng Bắt Đầu Từ Những Điều Bình Dị</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Một Ngày Ở Sano Media – Nơi Cảm Hứng Bắt Đầu Từ Những Điều Bình Dị
        </h1>
        <h3 style={{ fontSize: "20px" }}>20-05-2025
        </h3>
        <p>Không cần những sự kiện hoành tráng hay lễ lạt rộn ràng, mỗi ngày tại Sano Media Việt Nam đều là một hành trình đặc biệt – nơi công việc không chỉ đơn thuần là nhiệm vụ, mà là cảm hứng, là đam mê, là động lực cùng nhau đi xa hơn.</p>
        <p>Bắt đầu buổi sáng bằng một vài động tác thể dục đơn giản, cả đại gia đình Sano cùng nhau khởi động tinh thần và thể lực. Dư âm của tiếng nhạc sôi động, nụ cười đầu ngày và không khí rộn ràng từ những bước nhảy tuy giản đơn nhưng đầy nhiệt huyết, chính là cách chúng tôi bắt đầu mọi thứ – nhẹ nhàng nhưng quyết liệt.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2209%2F0422.mp4?alt=media&token=d8da45d2-6b90-49ab-97b3-41589cb1a2f0" type="video/mp4" />
        </video>  
        <p>Sau đó là nghi thức đọc tuyên bố, một phần không thể thiếu của mỗi buổi sáng. Không phải để thể hiện hay trình diễn, mà là để cùng nhau nhắc lại lý do chúng tôi có mặt ở đây – vì sứ mệnh, vì giá trị và vì khát vọng phát triển không ngừng. Những câu chữ được đọc lên với sự tự hào, lan tỏa tinh thần đoàn kết và trách nhiệm đến từng thành viên.</p>
        <p>Cả ngày làm việc tại Sano là chuỗi những tương tác liên tục – nơi mọi ý tưởng đều được lắng nghe, mọi sự hỗ trợ đều kịp thời, và mọi nỗ lực đều được ghi nhận. Không gian mở khuyến khích sáng tạo, không khí thân thiện khiến mỗi người cảm thấy như đang làm việc cùng những người bạn thân, chứ không chỉ là đồng nghiệp.</p>
        <p>Và khi kết thúc một ngày, dù mệt mỏi hay tràn đầy năng lượng, ai nấy đều mang trong mình một cảm giác rất thật – rằng hôm nay, mình đã sống và làm việc hết mình.</p>
      </div>
    </div>
  );
};

export default B2005;
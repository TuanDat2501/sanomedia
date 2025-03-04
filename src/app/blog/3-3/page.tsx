'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0303 = () => {
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
        <title>KAi Nói Đi Làm Là Căng Thẳng?</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Ai Nói Đi Làm Là Căng Thẳng?</h1>
        <h3 style={{ fontSize: "20px" }}>03-03-2025</h3>
        <p>Mỗi buổi sáng tại công ty không chỉ là thời gian khởi động cho một ngày làm việc mới mà còn là cơ hội để anh chị em “xả stress” với những trò chơi đầu giờ đầy sôi động! Không khí rộn ràng, tiếng cười giòn tan và những pha xử lý "đỉnh kout" đã khiến văn phòng trở nên náo nhiệt hơn bao giờ hết.</p>
        <p>Game đầu giờ – Khởi động ngày làm việc đầy hứng khởi!
        Trước khi bước vào guồng quay công việc, các thành viên công ty sẽ cùng nhau tham gia những trò chơi vui nhộn, từ thử thách phản xạ nhanh, đoán chữ đến các màn đối kháng gay cấn. Đây không chỉ là phút giây thư giãn mà còn giúp gắn kết đội nhóm, nâng cao tinh thần làm việc.</p>
        <p>Cạnh tranh sôi động – Giải thưởng hấp dẫn!
        Không chỉ chơi cho vui, những trò chơi đầu giờ còn mang đến các phần thưởng siêu hấp dẫn dành cho người chiến thắng. Tinh thần thi đấu máu lửa, những chiến thuật đầy bất ngờ và những màn "lật kèo" ngoạn mục khiến ai cũng phấn khích!</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0303%2F0301%20(1)(1).mp4?alt=media&token=5642c64d-4de4-451c-9107-8d1dfee05d75" type="video/mp4" />
        </video>
        <p> Sẵn sàng bứt phá – Làm việc hiệu quả!
        Sau những phút giây giải trí sảng khoái, tất cả cùng bước vào công việc với năng lượng tích cực, tinh thần thoải mái và sự tập trung cao độ. Ai nói đi làm là căng thẳng khi mỗi ngày đều bắt đầu với niềm vui?</p>
        <p>Cùng nhau chinh phục KPI với tinh thần thoải mái và đầy hứng khởi nào! </p>
        <p>Sano Media – Làm hết sức, vui hết mình!</p>
      </div>
    </div> 
  );
};

export default B0303;
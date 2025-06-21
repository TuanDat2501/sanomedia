'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2006 = () => {
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
        <title>Nhiệt Huyết 200% – Tinh Thần Làm Hết Mình Của Nhà Sano!</title>
        
      </Head>
      <div className="container">
        <h1>Nhiệt Huyết 200% – Tinh Thần Làm Hết Mình Của Nhà Sano!</h1>
        <h3 style={{ fontSize: "20px" }}>20-06-2025</h3>
        <p>Tại Sano Media, công việc không đơn thuần là hoàn thành deadline hay xử lý checklist – mà là hành trình tạo ra giá trị bằng đam mê, sáng tạo và tinh thần máu lửa.</p>
        <p>Mỗi dự án là một “cuộc chơi lớn”, và từng thành viên đều mang trong mình năng lượng bền bỉ như những chiến binh thực thụ. Không sợ khó, không ngại thay đổi – nhà Sano sẵn sàng bắt tay vào việc với 200% tinh thần “chiến” ngay từ những giờ đầu của mỗi ngày làm việc.</p>
        <p>Khi một ý tưởng lóe lên – cả team cùng thảo luận, “brainstorm nổ não” để biến nó thành sản phẩm chất lượng.</p>
        <p>Khi deadline gõ cửa – tinh thần hỗ trợ, phối hợp giữa các thành viên lại càng được thể hiện rõ rệt.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/Screenshot%202025-06-21%20091059.png?alt=media&token=8619bbc2-ad20-4e7d-82fa-1d90bcba144f"
          alt="image1" />
        <br />
        <p>Và khi kết quả đến – đó là niềm vui chung, là thành quả của những đêm thức muộn, những lần chỉnh sửa đến từng chi tiết nhỏ.</p>
        <p>Làm việc tại Sano Media không chỉ là để hoàn thành KPI – mà là để cùng nhau vượt giới hạn, cùng nhau phát triển, cùng nhau tự hào vì những điều đã tạo nên!</p>
      </div>
    </div>
  );
};

export default B2006;
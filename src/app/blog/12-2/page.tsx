'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1202 = () => {
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
        <title>Vinh Danh Team Đạt KPI Hằng Ngày</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Vinh Danh Team Đạt KPI Hằng Ngày</h1>
        <h3 style={{ fontSize: "20px" }}>12-02-2025</h3>
        <p>Mỗi ngày trôi qua là một thử thách, nhưng với sự nỗ lực và quyết tâm không ngừng, các đội nhóm tại công ty đã liên tục đạt được những thành tích ấn tượng. Hôm nay, chúng ta cùng vinh danh những team đã xuất sắc hoàn thành KPI hằng ngày, góp phần quan trọng vào sự phát triển chung của công ty.</p>
        <p>Ban lãnh đạo công ty gửi lời chúc mừng đến các đội nhóm đã thể hiện tinh thần làm việc chuyên nghiệp, đoàn kết và sáng tạo trong từng nhiệm vụ. Những kết quả ấn tượng này chính là minh chứng cho sự đồng lòng và cống hiến hết mình của các thành viên.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        alt={"image"} style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1202%2F2025_02_12_08_14_IMG_0516.JPG?alt=media&token=ae9f8ac5-aff2-4ad7-bfe1-f978f865211e" />
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        alt={"image"} style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1202%2F2025_02_12_08_13_IMG_0509.JPG?alt=media&token=0ce131e1-8f0a-4e5a-86f8-0f21570fa13e" />
        <p>Việc đạt KPI không chỉ phản ánh hiệu suất làm việc hiệu quả mà còn tạo động lực để các team không ngừng bứt phá, cải thiện và nâng cao chất lượng công việc mỗi ngày. Đây chính là yếu tố quan trọng giúp công ty ngày càng phát triển vững mạnh.</p>
        <p>Buổi vinh danh không chỉ là sự ghi nhận mà còn là nguồn cảm hứng để toàn thể nhân viên tiếp tục nỗ lực, phấn đấu chinh phục những mục tiêu mới. Những tràng pháo tay, những lời chúc mừng chính là sự động viên mạnh mẽ để các đội nhóm tiếp tục phát huy tinh thần làm việc tích cực.</p>
        <p>Cùng nhau, chúng ta sẽ tiếp tục giữ vững phong độ, phát huy thế mạnh và cùng nhau hướng đến những cột mốc thành công hơn nữa trong thời gian tới!</p>
      </div>
    </div> 
  );
};

export default B1202;
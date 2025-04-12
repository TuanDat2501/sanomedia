'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1004 = () => {
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
        Sano Media – Nơi Mỗi Người Đều Là Một Mảnh Ghép Quan Trọng</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media – Nơi Mỗi Người Đều Là Một Mảnh Ghép Quan Trọng</h1>
        <h3 style={{ fontSize: "20px" }}>10-04-2025
        </h3>
        <p>Sano Media là nơi mỗi người đều có thể tìm thấy giá trị của chính mình.</p>
        <p>Ở đây, chúng tôi không cần bạn phải giỏi ngay lập tức. Chúng tôi cần bạn dám học, dám thử, dám sai và dám sửa. Bởi vì Sano tin rằng: “đi xa được hay không là do tập thể, nhưng khởi đầu luôn cần mỗi cá nhân dám bước”.</p>
       <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       style={{ maxWidth: "1200px" }}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/455817447_499605679493889_385086096986158533_n.jpg?alt=media&token=0a6a8c29-9c70-44bd-b584-13ef4e45c2fd"
                       alt="image1" />
                  
        <p>Mỗi người ở Sano – từ bạn nhân viên mới, bạn designer, bạn editor hay những người đã đồng hành lâu dài – đều là một mảnh ghép không thể thay thế. Có thể khác nhau về tính cách, kỹ năng hay phong cách làm việc, nhưng chúng tôi lại cùng nhau tạo nên một bức tranh chung: năng động, sáng tạo, và chan hòa tình cảm.</p>
        <p>Và chính điều đó làm nên cái “chất” rất riêng mà không đâu có được – chất Sano: vui vẻ nhưng nghiêm túc, trẻ trung nhưng chuyên nghiệp, thoải mái nhưng luôn có trách nhiệm với từng sản phẩm, từng dự án.</p>
        <p>Dù bạn đang ở vị trí nào, làm công việc gì – hãy nhớ rằng bạn luôn được trân trọng. Vì ở đây, mỗi người đều là trung tâm của sự phát triển chung. Không ai bị bỏ lại phía sau.</p>
      </div>
    </div>
  );
};

export default B1004;
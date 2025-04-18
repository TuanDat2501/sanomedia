'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1704 = () => {
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
        Làm Việc Ở Sano – Một Chặng Đường, Nhiều Hành Trình</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Làm Việc Ở Sano – Một Chặng Đường, Nhiều Hành Trình</h1>
        <h3 style={{ fontSize: "20px" }}>17-04-2025
        </h3>
        <p>Không ai giống ai, và ở Sano Media, mỗi người đều đang viết một hành trình riêng.</p>
        <p>Có người ngày đầu đến đây còn chưa biết “content là gì”, giờ đã tự tin brainstorm như vũ bão. Có người từng rụt rè trong các buổi họp, giờ thành “chủ xị” trình bày dự án cả team. Có bạn chuyển từ vị trí thực tập sang nhân viên chính thức, rồi vươn lên làm leader – tất cả đều bắt đầu từ những điều rất nhỏ.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                  alt={"image"} style={{ maxWidth: "1200px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL0264%20(1).jpg?alt=media&token=dd1c8719-2bf2-4803-b1d0-e2dfc68f8313" />
                  
        <p>Sano không chỉ là nơi làm việc. Đó là nơi bạn tìm thấy đồng đội – những người sẵn sàng “kèm bạn tới bến”, chia deadline như chia cơm. Đó là nơi bạn được thử sai, được học hỏi và được tin tưởng. Ở đây, mỗi tiếng cười trong giờ nghỉ, mỗi buổi họp team rộn ràng hay mỗi lần cùng nhau “chạy nước rút” đều trở thành một phần của tuổi trẻ đáng nhớ.</p>
        <p>Có thể bạn chưa xác định rõ đâu là “đích đến” sự nghiệp, nhưng yên tâm – ở Sano, bạn sẽ luôn có người đồng hành. Và trong từng bước đi đó, bạn không chỉ lớn lên về kỹ năng, mà còn trưởng thành cả trong suy nghĩ, cách làm và cách sống.</p>
        <p>Một công việc có thể bắt đầu từ một quyết định. Nhưng một hành trình tuyệt vời, đôi khi bắt đầu từ một nơi… thật ra cũng rất bình thường – như Sano.</p>
      </div>
    </div>
  );
};

export default B1704;
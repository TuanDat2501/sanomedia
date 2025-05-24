'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2305 = () => {
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
        Gen Z ở Sano Media: Sáng tạo, bùng nổ, và không ngừng khác biệt!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Gen Z ở Sano Media: Sáng tạo, bùng nổ, và không ngừng khác biệt!
        </h1>
        <h3 style={{ fontSize: "20px" }}>23-05-2025
        </h3>
        <p>Tại Sano Media, câu trả lời hiện lên rất rõ ràng: đó là sự bùng nổ. Là năng lượng. Là những giá trị thật sự.</p>
        <p>Ở đây, mỗi người không chỉ đơn thuần là “đi làm” – mà là đang sống với điều mình yêu thích. Từ những bạn trẻ đam mê thiết kế, quay dựng, nội dung… đến các anh chị dày dạn kinh nghiệm trong nghề truyền thông, tất cả đều đang mang đam mê của mình thổi hồn vào từng dự án.</p>
        <h2>Sano Media là nơi chắp cánh cho đam mê ấy</h2>
        <p>Không ai bị bó hẹp trong một “khuôn mẫu”. Thay vào đó, mọi người được khuyến khích thử – sai – sửa – rồi lại thử. Những ý tưởng tưởng chừng “điên rồ” có khi lại trở thành chiến dịch thành công nhất. Bởi tại đây, sáng tạo là không giới hạn.</p>
        <h2>Ở đây, mọi góc nhìn đều có giá trị</h2>
        <p>Sano không phân biệt “cấp bậc”, chỉ cần bạn có ý tưởng, có tinh thần đóng góp, bạn luôn được lắng nghe. Mỗi cá nhân là một sắc màu riêng biệt, nhưng cùng nhau hòa vào một bức tranh chung đầy cảm hứng.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/499970425_698257209628734_5679443522334471592_n.jpg?alt=media&token=937e7930-7b0b-4408-9262-bb3d49b68b14"
                                alt="image1" />
        <h2>Đam mê không chỉ được giữ lửa, mà còn được nuôi lớn</h2>
        <p>Qua từng dự án, từng ngày làm việc, mỗi người đều đang tiến lên một bước mới. Được học thêm, làm thêm, hiểu thêm – và từ đó, đam mê không còn là một ngọn lửa nhỏ mà trở thành động lực lớn lao để phát triển.</p>
      </div>
    </div>
  );
};

export default B2305;
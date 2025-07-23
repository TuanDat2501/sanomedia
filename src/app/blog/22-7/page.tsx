'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2207 = () => {
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
         Tháng 7 rực rỡ – Chúc mừng sinh nhật các thành viên nhà Sano!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
         Vinh danh đội nhóm xuất sắc – Chiến thần của ngày hôm nay là ai?
        </h1>
        <h3 style={{ fontSize: "20px" }}>22-07-2025
        </h3>
        <p>Chỉ cần nghe thôi là biết hôm nay đội nào đang “làm chủ cuộc chơi” rồi! Sano Media xin chúc mừng đội nhóm xuất sắc nhất ngày – những người không chỉ hoàn thành công việc mà còn truyền lửa và cảm hứng cho cả văn phòng.</p>
        <p> Với tinh thần không ngừng tiến về phía trước, các thành viên trong team đã phối hợp ăn ý, chủ động, linh hoạt và đầy sáng tạo để đạt hiệu suất vượt kỳ vọng. Từ lên ý tưởng, triển khai đến chốt kết quả – mọi bước đều thể hiện tinh thần làm việc chuyên nghiệp, chủ động và đầy máu lửa!</p>
        <p>Phần thưởng trong ngày hôm nay chính là sự ghi nhận xứng đáng cho nỗ lực bền bỉ, tinh thần đồng đội và kết quả tuyệt vời mà cả team đã mang lại.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/IMG_0982.JPG?alt=media&token=931228bf-b537-48e5-8360-8f5c7ece7a7f"
                                alt="image1" />
        <p>Không chỉ là một phần thưởng nhỏ, mà đó là động lực lớn để tất cả chúng ta cùng nhau nỗ lực hơn mỗi ngày, vì một tập thể không ai bị bỏ lại phía sau – nơi ai cũng có cơ hội tỏa sáng!</p>
        <p>Và nếu hôm nay chưa phải là tên bạn, đừng vội nản nhé – mỗi ngày là một cơ hội mới để cùng nhau “bật mood”, “bật performance” và “bật dậy” trên hành trình chinh phục mục tiêu.</p>
      </div>
    </div>
  );
};

export default B2207;
'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1507 = () => {
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
         Tháng 7 rực rỡ – Chúc mừng sinh nhật các thành viên nhà Sano!
        </h1>
        <h3 style={{ fontSize: "20px" }}>16-07-2025
        </h3>
        <p>Tháng 7 về mang theo nắng vàng, mang theo cả những lời chúc ngọt ngào nhất dành cho các thành viên đặc biệt của Sano Media!</p>
        <p>Trong không gian ấm cúng và rộn ràng tiếng cười, đại gia đình Sano đã cùng nhau tổ chức bữa tiệc sinh nhật chung dành cho những “chủ nhân” tháng 7 – những con người không chỉ tài năng, mà còn luôn lan tỏa năng lượng tích cực trong công việc lẫn đời sống hằng ngày.</p>
        <p>Bánh kem và cả những món quà nhỏ xinh được chuẩn bị tỉ mỉ, thay cho lời cảm ơn chân thành mà Sano muốn gửi đến mỗi cá nhân: Cảm ơn vì đã luôn đồng hành, nỗ lực và góp phần tạo nên một tập thể bền vững, sáng tạo và đầy sức sống.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/0716.mp4?alt=media&token=dc9835de-f5dd-4af7-82a6-17620fd55fa7" type="video/mp4" />
        </video>
        <p>Bữa tiệc tuy nhỏ, nhưng là dịp lớn để gắn kết. Chúng ta không chỉ cùng nhau thổi nến, hát mừng sinh nhật, mà còn cùng nhau lưu lại những khoảnh khắc đáng nhớ, khơi dậy tinh thần đồng đội và sự sẻ chia – những giá trị cốt lõi trong văn hóa của Sano Media.</p>
        <p>Chúc các bạn tuổi mới thật nhiều sức khỏe, nhiều niềm vui, và luôn giữ trong tim ngọn lửa đam mê rực cháy! Tháng 7 rồi sẽ trôi qua, nhưng những kỷ niệm hôm nay sẽ còn đọng mãi – như một dấu ấn đẹp trong hành trình cùng nhau lớn lên tại ngôi nhà Sano.</p>
      </div>
    </div>
  );
};

export default B1507;
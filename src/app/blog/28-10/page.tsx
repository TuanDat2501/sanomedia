'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2808 = () => {
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
          Hành trình truyền cảm hứng tại Sano Media</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Hành trình truyền cảm hứng tại Sano Media
        </h1>
        <h3 style={{ fontSize: "20px" }}>28-10-2025
        </h3>
        <p>Tuần vừa qua, đại gia đình Sano Media đã có một buổi đào tạo nội bộ thật đặc biệt với chủ đề: “Đánh thức con người phi thường trong bạn.”</p>
        <p>Đây không chỉ là một buổi học – mà là một hành trình giúp mỗi người nhìn lại chính mình, khám phá sức mạnh nội tại và khơi dậy tinh thần bứt phá để phát triển hơn mỗi ngày.</p>
         <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0311%2FDSC06267.jpg?alt=media&token=5863b3f2-31d9-46f4-a48c-20a3cbf582b0"
          alt="image1" />
        <p>Trong suốt buổi đào tạo, không khí tại Sano tràn đầy năng lượng tích cực. Các thành viên cùng nhau chia sẻ câu chuyện của bản thân, cùng cười, cùng lắng nghe, và cùng nhận ra rằng — mỗi người đều mang trong mình một “phiên bản phi thường”, chỉ cần đủ niềm tin và động lực để đánh thức nó.</p>
        <p>Từ những bài tập thực hành, những ví dụ thực tế đến những lời truyền cảm hứng từ diễn giả, tất cả đã tạo nên một làn sóng tinh thần mới: dám nghĩ lớn hơn, dám thử thách giới hạn, và dám trở thành phiên bản tốt hơn của chính mình.</p>
         <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0311%2FDSC06136.jpg?alt=media&token=347054d8-06d2-4019-87e9-9a68b3df97b7"
          alt="image1" />
        <p>Buổi đào tạo khép lại trong tiếng vỗ tay và những nụ cười – nhưng dư âm của nó vẫn còn vang mãi.
          Bởi tại Sano Media, chúng tôi tin rằng: “Phi thường không nằm ở những điều xa vời – mà bắt đầu từ việc bạn dám thay đổi hôm nay.”</p>
       
        <p><b>Cảm ơn ban lãnh đạo công ty đã tạo nên một buổi học đầy ý nghĩa. Cảm ơn mỗi thành viên Sano vì đã cùng nhau lan tỏa năng lượng tích cực, để ngọn lửa “phi thường” ấy không ngừng cháy sáng.</b></p>

      </div>
    </div>
  );
};

export default B2808;
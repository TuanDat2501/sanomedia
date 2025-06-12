'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1206 = () => {
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
        <title>SANO MEDIA – NHÂN VIÊN LÀ GIÁ TRỊ CỐT LÕI</title>
        
      </Head>
      <div className="container">
        <h1>Sano Media – Nhân Viên Là Giá Trị Cốt Lõi</h1>
        <h3 style={{ fontSize: "20px" }}>12-06-2025</h3>
        <p>Tại Sano Media, con người không chỉ là tài sản quý giá nhất – mà còn là nguồn cảm hứng bất tận cho mọi hành trình phát triển. Mỗi cá nhân, dù ở bất kỳ vị trí nào, đều là một mảnh ghép quan trọng góp phần tạo nên bức tranh rực rỡ của tập thể.</p>
        <p>Điểm đặc biệt tại Sano chính là sự đa dạng trong tính cách, kỹ năng và cách làm việc – nhưng tất cả đều được gắn kết bởi một giá trị chung: tinh thần trách nhiệm và khát khao phát triển không ngừng.</p>
        <p>Ở đây, mọi người cùng làm – cùng học – cùng lớn. Từ những ngày đầu chập chững, mỗi nhân viên đều được trao cơ hội để học hỏi, thử sức với những vai trò mới, va chạm với thử thách thực tế, và từng bước khẳng định bản thân.</p>
        <p>Không chỉ vậy, văn hóa tại Sano còn khuyến khích chia sẻ và gắn kết. Đó là những buổi họp ngắn đầu ngày đầy năng lượng, những lần hỗ trợ nhau vượt deadline trong gang tấc, hay chỉ đơn giản là một lời động viên đúng lúc, khiến ngày làm việc nhẹ nhàng hơn.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/sanolife-14.webp?alt=media&token=96f72776-45d7-4e83-a415-3cb542d78cef"
          alt="image1" />
        <br />
        <p>Tại Sano Media – bạn không chỉ đi làm, mà bạn đang trên một hành trình trưởng thành, phát triển và truyền cảm hứng.</p>
        <p>Chúng tôi tin rằng, khi nhân viên cảm thấy được ghi nhận và tin tưởng, họ sẽ mang lại những giá trị vượt xa mong đợi.</p>
      </div>
    </div>
  );
};

export default B1206;
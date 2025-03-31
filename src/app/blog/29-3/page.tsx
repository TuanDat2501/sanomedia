'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2903 = () => {
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
        Sano Media Việt Nam – Văn Hóa Doanh Nghiệp Gắn Kết Và Sáng Tạo</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media Việt Nam – Văn Hóa Doanh Nghiệp Gắn Kết Và Sáng Tạo</h1>
        <h3 style={{ fontSize: "20px" }}>29-03-2025
        </h3>
        <p>Tại Sano Media Việt Nam, văn hóa doanh nghiệp không chỉ là một yếu tố bổ trợ mà chính là nền tảng vững chắc giúp công ty phát triển bền vững. Với tinh thần gắn kết và sáng tạo, Sano Media luôn tạo ra một môi trường làm việc chuyên nghiệp, nơi mỗi nhân viên đều có cơ hội thể hiện bản thân, đóng góp ý tưởng và cùng nhau xây dựng những giá trị ý nghĩa.</p>
        <p>Sano Media chú trọng vào sự phát triển con người thông qua các hoạt động đào tạo, nâng cao kỹ năng chuyên môn cũng như các chương trình truyền cảm hứng. Công ty khuyến khích tư duy đổi mới, sự chủ động trong công việc và tạo điều kiện để mỗi cá nhân đều có thể phát huy tối đa tiềm năng của mình.</p>
       <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       style={{ maxWidth: "1200px" }}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL8986.jpg?alt=media&token=6f269bad-3673-4b1e-9729-545c3d41630f"
                       alt="image1" />
        <p>Một trong những điểm đặc biệt của Sano Media chính là tinh thần đồng đội. Sự gắn kết giữa các thành viên không chỉ thể hiện qua công việc mà còn trong các hoạt động nội bộ như team-building, du lịch, sự kiện kỷ niệm… Đây chính là chất keo gắn kết giúp công ty luôn duy trì sự nhiệt huyết và đoàn kết trong tập thể.</p>
        <p>Bên cạnh đó, Sano Media đề cao sự cân bằng giữa công việc và cuộc sống. Công ty tạo ra một môi trường làm việc cởi mở, thoải mái, nơi mọi người có thể chia sẻ ý tưởng, hợp tác một cách hiệu quả và luôn tìm thấy niềm vui trong công việc.</p>
        <p>Với văn hóa doanh nghiệp gắn kết và không ngừng sáng tạo, Sano Media Việt Nam tiếp tục phát triển mạnh mẽ, khẳng định vị thế trong ngành truyền thông và mở rộng cơ hội vươn xa hơn trong tương lai.</p>
      </div>
    </div>
  );
};

export default B2903;
'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0701 = () => {
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
        <title>Tuyên Dương Những Nhân Viên Xuất Sắc</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Tuyên Dương Những Nhân Viên Xuất Sắc Tháng 12</h1>
        <h3 style={{ fontSize: "20px" }}>06-01-2025
        </h3>
        <p>Trong hành trình phát triển bền vững của công ty, những cá nhân xuất sắc luôn là nguồn động lực quan trọng, góp phần tạo nên những thành công đáng tự hào. Để tri ân những nỗ lực ấy, công ty Sano vừa tổ chức buổi lễ tuyên dương nhằm vinh danh các nhân viên tiêu biểu đã đạt được những thành tích vượt trội trong công việc.</p>
        <p>Các cá nhân được tuyên dương lần này không chỉ thể hiện năng lực chuyên môn xuất sắc mà còn là những tấm gương về sự sáng tạo, tinh thần trách nhiệm và thái độ làm việc chuyên nghiệp. Họ đã vượt qua mọi thách thức, hoàn thành nhiệm vụ với chất lượng cao và mang lại những giá trị to lớn cho công ty.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          alt={"image"} style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0701%2F472137947_597869249667531_2584782907371255057_n.jpg?alt=media&token=9ed528a8-e313-42d9-b226-c0e5161e2334" />
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          alt={"image"} style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0701%2F472237059_597869169667539_6751762907964336290_n.jpg?alt=media&token=d58fb4f0-35fa-42fb-86e0-b113d773418a" />
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          alt={"image"} style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0701%2F472269604_597869089667547_4400976935841163366_n.jpg?alt=media&token=75db4a2b-a35e-44b4-bcc7-c36320d22d0f" />
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          alt={"image"} style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0701%2F472512121_597869219667534_7558363421309094289_n.jpg?alt=media&token=85f7dd3c-7eae-4ab6-8583-b5020f087907" />
        <p>Công ty đã gửi lời chúc mừng, cảm ơn sâu sắc và có chút quà gửi đến từng nhân viên được vinh danh. Những phần thưởng ý nghĩa không chỉ là sự công nhận mà còn là nguồn động viên để họ tiếp tục phát huy năng lực, đóng góp nhiều hơn vào sự phát triển chung của tổ chức.</p>
        <p>Những nhân viên xuất sắc chính là minh chứng sống động cho sức mạnh tập thể và tinh thần gắn kết tại công ty Sano. Ban lãnh đạo hy vọng rằng sự thành công của họ sẽ là nguồn cảm hứng để toàn bộ nhân viên cùng nhau phấn đấu, hướng đến những thành tựu mới trong tương lai.</p>
      </div>
    </div>
  );
};

export default B0701;
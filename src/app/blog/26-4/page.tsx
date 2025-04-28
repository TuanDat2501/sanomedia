'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2604 = () => {
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
        CHIA SẺ LÀ SỨC MẠNH – VĂN HÓA ĐẶC TRƯNG TẠI SANO MEDIA</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Sano Media – Mỗi Ngày Là Một Hành Trình Mới
        </h1>
        <h3 style={{ fontSize: "20px" }}>26-04-2025
        </h3>
        <p>Tại Sano Media, mỗi ngày không chỉ đơn thuần là đi làm – đó là một hành trình mới, đầy cảm hứng và khám phá.</p>
        <p>Bắt đầu từ những buổi sáng năng động với bài tập thể dục ngắn và lời tuyên bố mục tiêu, tất cả mọi người đều bước vào guồng quay công việc với tinh thần tràn đầy năng lượng. Dù là những dự án lớn hay những công việc nhỏ, chúng tôi luôn đối diện bằng sự đam mê và cam kết cao nhất.</p>

        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/AQMJUKnuaakKTiz4OFKhlxAEiYRUQkvmwz1EfmvMwl8J8hHbsPphpV1vy8VsBKK9ODtSnhzjdAF3zclhgDOlOJkz.mp4?alt=media&token=50bc6c28-e0af-45d0-a162-d9020e83c3fe" type="video/mp4" />
        </video>
        <p>Mỗi ngày trôi qua, chúng tôi cùng nhau học hỏi thêm điều mới, giải quyết bài toán mới, và vượt qua thách thức mới. Không có ngày nào giống ngày nào tại Sano – và chính điều đó khiến cho hành trình ở đây luôn thú vị và tràn đầy ý nghĩa.</p>
        <p>Hơn hết, hành trình đó luôn có những người đồng đội tuyệt vời đồng hành. Sự sẻ chia, hỗ trợ và tiếng cười vang lên khắp văn phòng chính là nguồn động lực để mỗi thành viên tiến bộ hơn từng ngày.</p>
        <p>Bởi vì ở Sano Media, chúng tôi tin: "Chỉ cần đi cùng nhau, mọi hành trình đều trở nên tuyệt vời."</p>
      </div>
    </div>
  );
};

export default B2604;
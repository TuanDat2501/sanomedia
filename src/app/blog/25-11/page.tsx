'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2511 = () => {
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
          Sức mạnh của sự nỗ lực mỗi ngày – Hành trình của chúng ta</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Sức mạnh của sự nỗ lực mỗi ngày – Hành trình của chúng ta
        </h1>
        <h3 style={{ fontSize: "20px" }}>25-11-2025
        </h3>
        <p>Có những điều tưởng nhỏ bé trong công việc hằng ngày, nhưng lại tạo nên giá trị lớn cho cả tập thể. Ở công ty chúng ta, mỗi thành viên đều là một mảnh ghép quan trọng, góp phần xây dựng môi trường làm việc tích cực, đoàn kết và không ngừng phát triển.</p>
        <p>Mỗi ngày bạn đến công ty, mang theo năng lượng, trách nhiệm và sự cố gắng của chính mình – điều đó đáng được trân trọng hơn bạn nghĩ. Dù chỉ là hoàn thành một task đúng hạn, hỗ trợ đồng nghiệp, chia sẻ góc nhìn mới hay đơn giản là nở một nụ cười đầu ngày, tất cả đều góp phần tạo nên một tập thể vững mạnh.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/DJI_20251106165420_0170_D.JPG?alt=media&token=adfb41cc-cadd-43be-bc2b-7b3359066c75"
          alt="image1" />
        <p>Chúng ta không cần phải làm điều gì quá lớn lao để tạo nên khác biệt. Chính sự nỗ lực đều đặn, tinh thần học hỏi, và thái độ làm việc tích cực đã là nền móng giúp công ty từng bước đi lên. Mỗi thành công – dù nhỏ – đều là bước đệm để chúng ta tiến gần hơn đến mục tiêu chung.</p>
        <p>Ở đây, chúng ta học cách tin tưởng đồng đội, lắng nghe nhau, phát huy thế mạnh cá nhân và cùng nhau vượt qua những thử thách mới. Khi mỗi cá nhân trở nên tốt hơn mỗi ngày, cả tập thể sẽ trở nên mạnh mẽ hơn.</p>
        <p>Chúng ta không chỉ đang làm việc.
          Chúng ta đang xây dựng tương lai, từng chút một.

          Hãy tiếp tục giữ vững tinh thần ấy – tinh thần của những con người luôn sẵn sàng thay đổi, sẵn sàng phát triển và sẵn sàng đồng hành cùng nhau.</p>
      </div>
    </div>
  );
};

export default B2511;
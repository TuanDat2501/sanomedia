'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2205 = () => {
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
        <h3 style={{ fontSize: "20px" }}>22-05-2025
        </h3>
        <p>Không ngại thử thách, không sợ khác biệt, và luôn tràn đầy năng lượng – đó chính là tinh thần của những người trẻ Gen Z đang góp phần tạo nên một Sano Media không ngừng chuyển động.</p>
        <h2>Sáng tạo là DNA</h2>
        <p>Từ ý tưởng cho một chiến dịch viral triệu view, đến từng đoạn content “chạm mood”, hay những khung hình đầy cảm xúc – Gen Z ở Sano không ngừng “nặn não” để biến mọi thứ trở nên mới mẻ. Họ không ngại đi ngược số đông, sẵn sàng thử – sai – sửa – và làm lại cho đến khi có thứ gì đó thật khác, thật hay.</p>
        <h2>Bùng nổ năng lượng</h2>
        <p>Bạn sẽ dễ dàng bắt gặp những buổi brainstorming sôi động với tiếng cười giòn tan, những buổi “làm quên giờ ăn” vì đam mê một ý tưởng nào đó, hay những hoạt động nội bộ nơi Gen Z “quẩy banh nóc” sau deadline. Họ làm hết mình và chơi cũng hết sức – đúng chất “trẻ nhưng không ngây thơ”.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL0281.jpg?alt=media&token=0d3ee022-cb67-4db1-9921-123fd7cf8384"
                                alt="image1" />
        <h2>Luôn khác biệt và không ngừng phát triển</h2>
        <p>Ở Sano, Gen Z không chỉ đơn thuần là nhân sự trẻ – họ là những người đặt câu hỏi, tạo xu hướng và dẫn đầu sự đổi mới. Sự khác biệt không bị bóp nghẹt mà được khuyến khích, được lắng nghe, và được biến thành hành động cụ thể. Chính điều đó làm nên một môi trường làm việc nơi bạn được là chính mình, được phát triển theo cách riêng nhất.</p>
      </div>
    </div>
  );
};

export default B2205;
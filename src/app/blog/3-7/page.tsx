'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0307 = () => {
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
        <title>Sano Media - Văn hóa giao tiếp cởi mở, lắng nghe và thấu hiểu</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Sano Media - Văn hóa giao tiếp cởi mở, lắng nghe và thấu hiểu</h1>
        <h3 style={{ fontSize: "20px" }}>03-07-2025</h3>
        <p>Tại Sano Media, chúng tôi tin rằng một môi trường làm việc hiệu quả không chỉ đến từ những quy trình chuẩn chỉnh, mà còn bắt nguồn từ cách con người giao tiếp và kết nối với nhau mỗi ngày. Văn hóa giao tiếp cởi mở và lắng nghe đã trở thành một phần cốt lõi, tạo nên sự khác biệt trong cách chúng tôi làm việc và phát triển.</p>
        <p>Ở Sano, mọi ý tưởng đều được chào đón – bất kể bạn là nhân viên mới hay đã gắn bó lâu năm. Những cuộc trò chuyện giữa các phòng ban không bị bó buộc bởi rào cản chức danh, mà diễn ra một cách chân thành, thẳng thắn và luôn hướng đến giải pháp. Chúng tôi tạo ra không gian để mỗi cá nhân có thể nói lên suy nghĩ của mình, đóng góp ý kiến, chia sẻ khó khăn và cùng nhau tháo gỡ.</p>
        <p>Không chỉ giao tiếp để hiểu công việc, mà còn để hiểu nhau. Lắng nghe trở thành một kỹ năng quan trọng mà mỗi thành viên đều học cách thực hành mỗi ngày – không chỉ nghe để trả lời, mà nghe để hiểu và đồng cảm. Chính điều này đã giúp tập thể Sano Media xây dựng được sự tin tưởng, gắn bó và tinh thần đồng đội bền vững.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/aboutme-3.jpg?alt=media&token=497c672e-9c11-452f-9273-34131251ed84"
                        alt="image1" />
                    <br />
        <p>Tại đây, mỗi cuộc họp không chỉ là nơi ra quyết định, mà còn là nơi kết nối cảm xúc. Mỗi cuộc trò chuyện không chỉ để truyền đạt thông tin, mà còn để truyền cảm hứng. Đó là lý do vì sao chúng tôi luôn tự hào khi nói rằng: Sano Media không chỉ là một công ty – đó là một cộng đồng, một mái nhà mà ở đó, sự thấu hiểu là nền tảng để cùng nhau phát triển.</p>
      </div>
    </div> 
  );
};

export default B0307;
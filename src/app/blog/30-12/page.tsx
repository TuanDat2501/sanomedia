'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2712 = () => {
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
        <title>Tôn Vinh Nỗ Lực: Các Team Đạt Thưởng KPI Hằng Ngày</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Tôn Vinh Nỗ Lực: Các Team Đạt Thưởng KPI Hằng Ngày Tại Công Ty</h1>
        <h3 style={{ fontSize: "20px" }}>30-12-2024</h3>
        <p>Trong môi trường làm việc hiện đại, hiệu suất và kết quả đạt được không chỉ phản ánh sự cống hiến của từng cá nhân mà còn là minh chứng cho sức mạnh của tinh thần làm việc nhóm. Để ghi nhận và khích lệ những nỗ lực đó, công ty đã triển khai chương trình thưởng KPI hằng ngày, giúp các team có thêm động lực đạt được mục tiêu chung.</p>
        <p>Hằng ngày, các phòng ban và đội nhóm tại công ty đều được giao những chỉ tiêu cụ thể phù hợp với năng lực và mục tiêu chiến lược. Các chỉ tiêu này không chỉ là kim chỉ nam cho hoạt động mà còn là thước đo để đánh giá hiệu quả công việc. Những đội nhóm xuất sắc hoàn thành hoặc vượt qua các KPI được giao sẽ được ghi nhận và trao thưởng ngay trong ngày, tạo nên không khí sôi động và tinh thần thi đua lành mạnh trong toàn công ty.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F3012%2FIMG_3382.JPG?alt=media&token=34cc9490-65e5-4124-a46a-f1ea166ae859"
                        alt="image1" />
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F3012%2FIMG_3378.JPG?alt=media&token=1ea79ba4-490c-4f39-b78d-e4b2b6cc3baa"
                        alt="image1" />
        <p>Việc trao thưởng hằng ngày không chỉ mang tính khích lệ mà còn giúp nhân viên nhận thấy giá trị của những nỗ lực nhỏ bé nhưng đều đặn. Những lời khen ngợi và phần thưởng không chỉ là sự ghi nhận mà còn là nguồn động lực giúp các đội nhóm không ngừng nâng cao hiệu suất làm việc, cùng nhau tiến về phía trước. Điều này đặc biệt quan trọng trong việc xây dựng văn hóa doanh nghiệp tích cực, nơi mọi người cùng nhau chia sẻ thành công và học hỏi từ những thách thức.</p>
        <p>Các đội nhóm nhận thưởng KPI thường có điểm chung là tinh thần đoàn kết cao, sự phối hợp nhịp nhàng giữa các thành viên và khả năng thích nghi nhanh chóng với thay đổi. Điều này không chỉ giúp họ hoàn thành nhiệm vụ mà còn góp phần thúc đẩy các dự án quan trọng, đóng góp tích cực vào sự phát triển bền vững của công ty.</p>
        <p>Những nụ cười rạng rỡ khi nhận thưởng, những lời chúc mừng giữa các đồng nghiệp, và niềm tự hào khi vượt qua thử thách đã trở thành những hình ảnh đẹp trong văn hóa công ty. Với chương trình này, mỗi ngày đều là một hành trình để chinh phục, học hỏi và khẳng định giá trị bản thân trong tập thể. Đây chính là minh chứng rõ nét nhất cho triết lý "Thành công đến từ những nỗ lực nhỏ mỗi ngày" mà công ty luôn hướng đến.</p>
      
      </div>
    </div> 
  );
};

export default B2712;
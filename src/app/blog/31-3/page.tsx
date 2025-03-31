'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B3103 = () => {
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
        Sano Media Việt Nam – Hành Trình Kiến Tạo Giá Trị Bền Vững</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media Việt Nam – Hành Trình Kiến Tạo Giá Trị Bền Vững</h1>
        <h3 style={{ fontSize: "20px" }}>29-03-2025
        </h3>
        <p>Sano Media Việt Nam không chỉ là một công ty truyền thông mà còn là một hệ sinh thái sáng tạo, nơi mỗi cá nhân đều có cơ hội phát triển và đóng góp vào sự thành công chung. Với tầm nhìn dài hạn, công ty không ngừng đổi mới để mang đến những sản phẩm và dịch vụ chất lượng cao, góp phần nâng tầm ngành truyền thông số.</p>
        <p>Điểm cốt lõi tạo nên sự khác biệt của Sano Media chính là sự tận tâm trong từng dự án. Công ty luôn khuyến khích tinh thần trách nhiệm và tư duy sáng tạo của nhân viên, tạo ra một môi trường làm việc năng động, cởi mở, nơi mọi ý tưởng đều được lắng nghe và hiện thực hóa. Tại đây, mỗi thành viên không chỉ là một nhân viên, mà còn là một mảnh ghép quan trọng trong bức tranh phát triển toàn diện của công ty.</p>
       <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       style={{ maxWidth: "1200px" }}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL9917.jpg?alt=media&token=9b5a2889-e566-4451-a46c-2e574746157d"
                       alt="image1" />
        <p>Sano Media cũng chú trọng đầu tư vào phát triển con người. Thông qua các chương trình đào tạo bài bản, các buổi workshop chuyên sâu và cơ hội hợp tác với những chuyên gia hàng đầu, công ty giúp nhân viên liên tục nâng cao năng lực và mở rộng kiến thức. Sự học hỏi không ngừng chính là nền tảng giúp Sano Media luôn đi đầu trong các xu hướng mới.</p>
        <p>Không chỉ tập trung vào công việc, Sano Media còn xây dựng một văn hóa doanh nghiệp gắn kết, nơi mọi người có thể cùng nhau trải nghiệm, chia sẻ và tạo dựng những kỷ niệm đáng nhớ. Các hoạt động nội bộ như du lịch, team-building, các sự kiện gắn kết không chỉ giúp nhân viên thư giãn mà còn củng cố tinh thần đồng đội, giúp tập thể công ty ngày càng vững mạnh.</p>
        <p>Bằng sự kết hợp giữa sáng tạo, đổi mới và phát triển con người, Sano Media Việt Nam đang khẳng định vị thế của mình trên thị trường truyền thông. Hành trình kiến tạo giá trị của công ty sẽ tiếp tục mở rộng, mang lại những bước tiến đột phá và tạo ra dấu ấn bền vững trong ngành.</p>
      </div>
    </div>
  );
};

export default B3103;
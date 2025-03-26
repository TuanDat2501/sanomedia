'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2603 = () => {
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
        Sano Media Việt Nam – Hành Trình Xây Dựng Và Phát Triển</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media Việt Nam – Hành Trình Xây Dựng Và Phát Triển</h1>
        <h3 style={{ fontSize: "20px" }}>25-03-2025
        </h3>
        <p>Sano Media Việt Nam không ngừng khẳng định mình là một đơn vị truyền thông sáng tạo, lấy tinh thần đổi mới làm kim chỉ nam cho sự phát triển. Với đội ngũ nhân sự trẻ trung, đầy nhiệt huyết và sáng tạo, công ty đang từng bước xây dựng vị thế vững chắc trong lĩnh vực truyền thông và nội dung số.</p>
        <p>Ngay từ những ngày đầu thành lập, Sano Media đã tập trung vào việc phát triển các sản phẩm chất lượng, mang lại giá trị thực sự cho cộng đồng. Công ty luôn chú trọng nghiên cứu xu hướng truyền thông mới, ứng dụng công nghệ hiện đại và thử nghiệm các phương pháp sáng tạo để tạo ra nội dung hấp dẫn, thu hút sự quan tâm của công chúng.</p>
       <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       style={{ maxWidth: "1200px" }}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/456457605_502764735844650_827711997439719184_n.jpg?alt=media&token=9b18ee22-8842-454c-8896-c119131d37d7"
                       alt="image1" />
        <p>Bên cạnh việc nâng cao chất lượng sản phẩm, Sano Media còn chú trọng đến việc phát triển đội ngũ nhân sự. Công ty luôn tạo điều kiện để nhân viên phát triển bản thân, học hỏi và cập nhật những kiến thức mới trong ngành. Môi trường làm việc năng động, cởi mở giúp mọi cá nhân có thể phát huy tối đa khả năng của mình và đóng góp vào sự phát triển chung.</p>
        <p>Ngoài ra, Sano Media cũng tích cực tham gia các hoạt động cộng đồng, xây dựng hình ảnh một doanh nghiệp trẻ nhưng đầy trách nhiệm. Công ty luôn tìm kiếm cơ hội hợp tác, mở rộng mạng lưới và mang đến những giá trị bền vững cho xã hội thông qua các dự án sáng tạo.</p>
        <p>Với tinh thần tiên phong và không ngừng đổi mới, Sano Media Việt Nam đang từng bước khẳng định vị thế của mình trong ngành truyền thông, sẵn sàng chinh phục những thử thách mới và vươn xa hơn trong tương lai.</p>
      </div>
    </div>
  );
};

export default B2603;
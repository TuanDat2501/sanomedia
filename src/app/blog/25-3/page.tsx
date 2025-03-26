'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2503 = () => {
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
        Sano Media Việt Nam – Sức Mạnh Của Sự Sáng Tạo Trong Truyền Thông</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media Việt Nam – Sức Mạnh Của Sự Sáng Tạo Trong Truyền Thông</h1>
        <h3 style={{ fontSize: "20px" }}>25-03-2025
        </h3>
        <p>Trong lĩnh vực truyền thông không ngừng phát triển, sáng tạo chính là yếu tố then chốt giúp doanh nghiệp tạo ra sự khác biệt và chinh phục khách hàng. Tại Sano Media Việt Nam, tinh thần sáng tạo không chỉ là một giá trị cốt lõi mà còn là kim chỉ nam cho mọi hoạt động, giúp công ty vươn xa và khẳng định vị thế trên thị trường.</p>
        <p>Sano Media không ngừng đổi mới trong cách tiếp cận, sản xuất nội dung và triển khai chiến lược truyền thông. Công ty luôn cập nhật những xu hướng mới nhất, ứng dụng công nghệ tiên tiến và tìm kiếm những ý tưởng độc đáo để mang đến các sản phẩm chất lượng cao</p>
       <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       style={{ maxWidth: "1200px" }}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/456669526_506182302169560_5279389693403216711_n.jpg?alt=media&token=82b173aa-b033-4ecf-a735-2f992c561fbc"
                       alt="image1" />
        <p>Bên cạnh đó, Sano Media tạo ra một môi trường làm việc khuyến khích sự sáng tạo, nơi mỗi nhân viên đều có cơ hội thể hiện ý tưởng và đóng góp vào sự phát triển chung. Công ty tổ chức các buổi brainstorming, workshop và các hoạt động đào tạo để nuôi dưỡng tinh thần sáng tạo, giúp đội ngũ nhân sự không ngừng học hỏi và đổi mới.</p>
        <p>Không chỉ chú trọng vào nội dung, Sano Media còn đầu tư mạnh vào công nghệ và phương pháp tiếp cận hiện đại. Việc áp dụng trí tuệ nhân tạo, phân tích dữ liệu và tối ưu hóa nội dung trên các nền tảng số giúp công ty tạo ra những chiến dịch truyền thông hiệu quả, lan tỏa mạnh mẽ thông điệp đến đối tượng mục tiêu.</p>
        <p>Với phương châm “Sáng tạo là chìa khóa thành công”, Sano Media Việt Nam không ngừng đổi mới để mang đến những giải pháp truyền thông đột phá, giúp khách hàng xây dựng thương hiệu mạnh mẽ và tạo ra sức ảnh hưởng lớn trên thị trường.</p>
      </div>
    </div>
  );
};

export default B2503;
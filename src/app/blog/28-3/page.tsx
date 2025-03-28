'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2803 = () => {
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
        Sano Media Việt Nam – Nơi Hội Tụ Đam Mê Và Sáng Tạo</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media Việt Nam – Nơi Hội Tụ Đam Mê Và Sáng Tạo</h1>
        <h3 style={{ fontSize: "20px" }}>25-03-2025
        </h3>
        <p>Sano Media Việt Nam không chỉ là một công ty truyền thông mà còn là một ngôi nhà chung của những con người đam mê sáng tạo. Tại đây, mỗi thành viên đều được khuyến khích thể hiện cá tính, đổi mới tư duy và cùng nhau tạo ra những sản phẩm truyền thông chất lượng, góp phần nâng tầm thương hiệu và nội dung số.</p>
        <p>Với đội ngũ trẻ trung, nhiệt huyết, Sano Media luôn không ngừng khám phá những ý tưởng mới, thử nghiệm những xu hướng tiên tiến để mang đến những sản phẩm đột phá. Công ty không chỉ tập trung vào công nghệ mà còn đề cao sự sáng tạo trong cách tiếp cận, giúp từng nội dung trở nên hấp dẫn, thu hút và có giá trị.</p>
       <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       style={{ maxWidth: "1200px" }}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2803%2F01XL0264.jpg?alt=media&token=aed2f0c4-d27f-4857-9b81-ca0f99073c40"
                       alt="image1" />
        <p>Môi trường làm việc tại Sano Media được xây dựng trên tinh thần cởi mở và hợp tác. Mỗi cá nhân đều có cơ hội phát triển bản thân, trau dồi kỹ năng và thử sức với nhiều lĩnh vực khác nhau trong ngành truyền thông. Sự hỗ trợ lẫn nhau, cùng hướng đến mục tiêu chung là điều tạo nên sức mạnh đoàn kết, giúp công ty phát triển bền vững.</p>
        <p>Ngoài ra, Sano Media không ngừng mở rộng mạng lưới hợp tác, kết nối với những chuyên gia, đối tác trong ngành để nâng cao chất lượng sản phẩm và dịch vụ. Công ty hướng đến việc tạo ra những nội dung truyền thông có sức lan tỏa mạnh mẽ, mang lại giá trị thực sự cho cộng đồng và xã hội.</p>
        <p>Với tinh thần sáng tạo và không ngừng đổi mới, Sano Media Việt Nam tiếp tục khẳng định vị thế của mình trong ngành truyền thông, sẵn sàng bứt phá và chinh phục những thử thách mới trên hành trình phát triển.</p>
      </div>
    </div>
  );
};

export default B2803;
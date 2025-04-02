'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0104 = () => {
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
        Sano Media Việt Nam – Đổi Mới Sáng Tạo Là Chìa Khóa Thành Công</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media Việt Nam – Đổi Mới Sáng Tạo Là Chìa Khóa Thành Công</h1>
        <h3 style={{ fontSize: "20px" }}>01-04-2025
        </h3>
        <p>Trong thời đại số hóa, đổi mới sáng tạo không chỉ là một lợi thế cạnh tranh mà còn là yếu tố sống còn đối với doanh nghiệp. Tại Sano Media Việt Nam, sáng tạo luôn được đặt lên hàng đầu, trở thành động lực thúc đẩy công ty phát triển và khẳng định vị thế trong ngành truyền thông.</p>
        <p>Sano Media không ngừng tìm kiếm những ý tưởng mới, áp dụng công nghệ hiện đại và thử nghiệm các phương pháp truyền thông tiên tiến để mang đến những sản phẩm chất lượng cao. Mỗi dự án đều là sự kết hợp giữa tư duy đổi mới và chiến lược tối ưu, giúp khách hàng đạt được hiệu quả truyền thông tốt nhất.</p>
       <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       style={{ maxWidth: "1200px" }}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL0281.jpg?alt=media&token=880f93e3-6327-4adb-a4a2-02f211080986"
                       alt="image1" />
        <p>Công ty khuyến khích nhân viên tư duy đột phá, dám thử nghiệm và không ngại thất bại. Các chương trình đào tạo, hội thảo nội bộ và hoạt động sáng tạo được tổ chức thường xuyên nhằm tạo điều kiện để đội ngũ phát triển tư duy linh hoạt và luôn bắt kịp xu hướng mới nhất.</p>
        <p>Bên cạnh đó, Sano Media còn hợp tác với nhiều đối tác chiến lược, học hỏi từ các chuyên gia hàng đầu để nâng cao chất lượng dịch vụ. Nhờ sự đổi mới liên tục, công ty luôn mang đến những giải pháp sáng tạo, giúp khách hàng xây dựng thương hiệu mạnh mẽ và thu hút sự chú ý của công chúng.</p>
        <p>Với tầm nhìn xa và cam kết không ngừng đổi mới, Sano Media Việt Nam đang vững bước trên hành trình chinh phục những đỉnh cao mới trong ngành truyền thông. Sáng tạo chính là chìa khóa giúp công ty tiếp tục phát triển và mang lại giá trị bền vững cho khách hàng cũng như cộng đồng.</p>
      </div>
    </div>
  );
};

export default B0104;
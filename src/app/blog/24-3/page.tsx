'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2403 = () => {
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
          Sano Media Việt Nam – Đổi Mới Không Ngừng Vì Thành Công Bền Vững</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Sano Media Việt Nam – Đổi Mới Không Ngừng Vì Thành Công Bền Vững</h1>
        <h3 style={{ fontSize: "20px" }}>24-03-2025
        </h3>
        <p>Trong một thế giới truyền thông không ngừng thay đổi, sự đổi mới chính là chìa khóa giúp doanh nghiệp duy trì vị thế và phát triển bền vững. Tại Sano Media Việt Nam, đổi mới không chỉ là một chiến lược mà còn là tư duy cốt lõi, giúp công ty tạo ra những sản phẩm sáng tạo, đón đầu xu hướng và mang lại giá trị thực sự cho khách hàng.</p>
        <p>Sano Media luôn cập nhật những công nghệ và phương pháp truyền thông mới nhất, đảm bảo mỗi sản phẩm đều đáp ứng được nhu cầu đa dạng của thị trường. Công ty đầu tư mạnh vào hệ thống công nghệ hiện đại, từ sản xuất nội dung đến phân tích dữ liệu, giúp tối ưu hóa hiệu quả truyền thông cho khách hàng.</p>
       <video controls>
                 <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1802%2Fvideo123.mp4?alt=media&token=992deb75-057d-4a1c-ab0e-0878ecd5ecd0" type="video/mp4" />
               </video>
        <p>Bên cạnh đó, Sano Media khuyến khích nhân viên thử nghiệm những ý tưởng mới, khám phá những phương pháp tiếp cận sáng tạo để nâng cao chất lượng sản phẩm. Văn hóa không ngại thử thách, sẵn sàng thay đổi chính là động lực giúp công ty luôn đi trước một bước trong ngành công nghiệp truyền thông.</p>
        <p>Ngoài ra, công ty còn hợp tác chặt chẽ với nhiều đối tác lớn trong và ngoài nước để cập nhật xu hướng toàn cầu, mang đến những giải pháp truyền thông đột phá. Sự đổi mới không chỉ thể hiện trong sản phẩm mà còn trong cách Sano Media vận hành và phát triển, luôn tìm kiếm cơ hội mở rộng thị trường và nâng cao chất lượng dịch vụ.</p>
        <p>Với phương châm “Luôn đổi mới, luôn phát triển”, Sano Media Việt Nam cam kết mang đến những giải pháp truyền thông tiên tiến nhất, góp phần tạo nên sự thành công bền vững cho khách hàng và đối tác. Chính tinh thần đổi mới không ngừng đã và đang giúp công ty vững vàng trên con đường trở thành đơn vị truyền thông hàng đầu.</p>
      </div>
    </div>
  );
};

export default B2403;
'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2203 = () => {
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
        Sano Media Việt Nam – Sáng Tạo Là Nền Tảng Thành Công</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media Việt Nam – Sáng Tạo Là Nền Tảng Thành Công</h1>
        <h3 style={{ fontSize: "20px" }}>21-03-2025
        </h3>
        <p>Trong lĩnh vực truyền thông, sáng tạo chính là yếu tố cốt lõi giúp doanh nghiệp tạo ra sự khác biệt và chinh phục khán giả. Tại Sano Media Việt Nam, tinh thần sáng tạo không chỉ là một giá trị cốt lõi mà còn là kim chỉ nam cho mọi hoạt động của công ty. Đội ngũ tại Sano Media không ngừng đổi mới, tìm kiếm ý tưởng độc đáo để mang đến những sản phẩm chất lượng, hấp dẫn và đậm dấu ấn riêng.</p>
        <p>Văn hóa sáng tạo tại Sano Media được nuôi dưỡng qua một môi trường làm việc mở, nơi mọi ý tưởng đều được lắng nghe và trân trọng. Công ty khuyến khích nhân viên thử nghiệm, dám nghĩ dám làm và sẵn sàng bứt phá giới hạn bản thân. Điều này giúp mỗi cá nhân không chỉ phát triển kỹ năng chuyên môn mà còn tìm thấy niềm đam mê trong công việc sáng tạo.</p>
         <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2203%2F01XL9029.jpg?alt=media&token=c1890bcd-dd59-414e-a826-d4b59949b02e"
                        alt="image1" />

                      
<Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2203%2F01XL9074.jpg?alt=media&token=ee39b041-707d-4bb6-b9c3-2da5d658cd87"
                alt="image1" />
        <p>Bên cạnh đó, Sano Media đầu tư mạnh vào công nghệ hiện đại và xu hướng truyền thông số, giúp đội ngũ sản xuất có thêm nhiều công cụ để biến ý tưởng thành hiện thực. Các phần mềm tiên tiến, kỹ thuật quay dựng chuyên nghiệp và hệ thống dữ liệu phân tích giúp công ty tạo ra những sản phẩm truyền thông đột phá, đáp ứng nhu cầu đa dạng của thị trường</p>
        <p>Không chỉ tập trung vào sản phẩm, Sano Media còn chú trọng xây dựng một môi trường truyền cảm hứng, nơi nhân viên được phát triển không ngừng. Công ty thường xuyên tổ chức các buổi brainstorming, workshop chuyên môn và hoạt động giao lưu nhằm kích thích tư duy sáng tạo và mở rộng góc nhìn. Nhờ đó, đội ngũ nhân sự luôn tràn đầy ý tưởng mới và sẵn sàng chinh phục những thử thách lớn hơn.</p>
        <p>Sano Media tin rằng, sự sáng tạo không chỉ đơn thuần là yếu tố giúp công ty phát triển mà còn là cầu nối mang đến những giá trị ý nghĩa cho khán giả và đối tác. Với phương châm “Sáng tạo không giới hạn, thành công bền vững”, Sano Media Việt Nam tiếp tục vững bước trên hành trình trở thành một trong những đơn vị truyền thông hàng đầu, mang đến những sản phẩm chất lượng và đầy cảm hứng.</p>
      </div>
    </div>
  );
};

export default B2203;
'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1503 = () => {
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
        Môi Trường Làm Việc Sáng Tạo tại Sano Media Việt Nam</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Môi Trường Làm Việc Sáng Tạo tại Sano Media Việt Nam</h1>
        <h3 style={{ fontSize: "20px" }}>15-03-2025
        </h3>
        <p>Sano Media Việt Nam là một đơn vị tiên phong trong lĩnh vực truyền thông số và sản xuất nội dung sáng tạo. Với sứ mệnh tạo ra những sản phẩm truyền thông chất lượng, công ty không ngừng đổi mới để mang đến những nội dung hấp dẫn và có giá trị cho khán giả. Sano Media hiểu rằng môi trường làm việc có tác động trực tiếp đến khả năng sáng tạo của nhân viên. Do đó, công ty đã đầu tư vào một không gian làm việc mở, hiện đại và đầy tính sáng tạo. Các khu vực làm việc được thiết kế thoải mái với nhiều không gian xanh, khu vực thư giãn, giúp nhân viên có thể tái tạo năng lượng và tìm cảm hứng bất cứ lúc nào.</p>
        <p>Tại Sano Media, mọi ý tưởng đều được lắng nghe và trân trọng. Công ty luôn khuyến khích nhân viên thử nghiệm những điều mới mẻ, từ cách kể chuyện sáng tạo trên YouTube đến các chiến dịch truyền thông độc đáo. Không có rào cản giữa các cấp bậc, nhân viên có thể dễ dàng trao đổi với ban lãnh đạo để phát triển ý tưởng của mình. Ngoài việc tạo ra môi trường làm việc thoải mái, Sano Media còn chú trọng đến việc nâng cao kỹ năng cho nhân viên. Công ty thường xuyên tổ chức các buổi đào tạo chuyên môn, workshop về sáng tạo nội dung, kỹ thuật quay dựng và tối ưu hóa nền tảng số. Nhờ vậy, mỗi cá nhân đều có cơ hội phát triển và nâng cao trình độ chuyên môn của mình.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1802%2Fvideo123.mp4?alt=media&token=992deb75-057d-4a1c-ab0e-0878ecd5ecd0" type="video/mp4" />
        </video>
        <p>Một trong những yếu tố giúp Sano Media phát triển mạnh mẽ là tinh thần đồng đội. Công ty tạo ra nhiều hoạt động gắn kết như team-building, các cuộc thi sáng tạo nội bộ và những buổi họp ý tưởng mở. Điều này giúp nhân viên không chỉ gắn bó hơn với công ty mà còn tạo ra những sản phẩm chất lượng, phản ánh tinh thần làm việc nhóm chuyên nghiệp. Sano Media Việt Nam không chỉ là nơi sản xuất nội dung truyền thông hàng đầu mà còn là môi trường làm việc lý tưởng cho những ai yêu thích sự sáng tạo. Với không gian làm việc hiện đại, văn hóa doanh nghiệp khuyến khích đổi mới và cơ hội học hỏi liên tục, Sano Media đang trở thành điểm đến mơ ước của nhiều người trẻ đam mê truyền thông và công nghệ. Nếu bạn đang tìm kiếm một nơi để phát triển bản thân trong lĩnh vực sáng tạo nội dung, Sano Media chắc chắn là lựa chọn hoàn hảo!</p>
      </div>
    </div>
  );
};

export default B1503;
'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1803 = () => {
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
        Sano Media Việt Nam – Đoàn Kết và Phát Triển Không Ngừng</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media Việt Nam – Đoàn Kết và Phát Triển Không Ngừng</h1>
        <h3 style={{ fontSize: "20px" }}>20-03-2025
        </h3>
        <p>Sano Media Việt Nam không chỉ là một công ty truyền thông sáng tạo mà còn là nơi làm việc lý tưởng cho những ai yêu thích sự đổi mới và năng động. Với tinh thần trẻ trung và cởi mở, công ty luôn khuyến khích nhân viên phát huy hết khả năng của mình, góp phần tạo nên những sản phẩm nội dung chất lượng và mang tính đột phá.</p>
        <p>Môi trường làm việc tại Sano Media được thiết kế theo phong cách hiện đại, tối ưu không gian mở để khuyến khích sự giao tiếp và hợp tác giữa các đội nhóm. Tại đây, mỗi nhân viên đều có thể thoải mái chia sẻ ý tưởng, đóng góp sáng kiến mà không bị giới hạn bởi bất kỳ khuôn khổ nào. Điều này giúp tạo ra một không khí làm việc sáng tạo, đầy cảm hứng và năng lượng tích cực.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1803%2F1220.mp4?alt=media&token=5f1784f7-bada-4654-a7f3-f7a92fec2ae0" type="video/mp4" />
        </video>
        <p>Bên cạnh đó, công ty thường xuyên tổ chức các hoạt động ngoại khóa như team-building, workshop chuyên môn, sự kiện nội bộ nhằm tăng cường sự gắn kết giữa các thành viên. Đây không chỉ là cơ hội để nhân viên thư giãn sau những giờ làm việc mà còn là dịp để phát triển kỹ năng mềm, học hỏi thêm kinh nghiệm từ đồng nghiệp và lãnh đạo.</p>
        <p>Tại Sano Media, tinh thần khởi nghiệp luôn được khuyến khích. Công ty tạo điều kiện để nhân viên trẻ có thể tự tin thử nghiệm ý tưởng mới, tham gia vào các dự án lớn và phát triển bản thân trong môi trường chuyên nghiệp. Sự hỗ trợ từ đồng nghiệp và ban lãnh đạo giúp mỗi cá nhân có thể vượt qua thử thách, không ngừng hoàn thiện và tiến bộ.</p>
        <p>Không chỉ chú trọng vào công việc, Sano Media còn đề cao sự cân bằng giữa công việc và cuộc sống. Công ty tạo ra không gian làm việc thân thiện, thoải mái với các khu vực thư giãn, giải trí ngay tại văn phòng. Nhờ đó, nhân viên luôn cảm thấy tràn đầy năng lượng, sáng tạo không ngừng và tận hưởng công việc mỗi ngày.</p>
        <p>Với môi trường làm việc trẻ trung, năng động và đầy cảm hứng, Sano Media Việt Nam đang thu hút ngày càng nhiều nhân tài trẻ gia nhập để cùng nhau xây dựng một thương hiệu truyền thông sáng tạo hàng đầu. Nếu bạn đang tìm kiếm một nơi để phát triển bản thân và thử thách chính mình, Sano Media chính là điểm đến lý tưởng!</p>
      </div>
    </div>
  );
};

export default B1803;
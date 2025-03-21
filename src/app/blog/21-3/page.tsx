'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2103 = () => {
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
        <h3 style={{ fontSize: "20px" }}>21-03-2025
        </h3>
        <p>Tại Sano Media Việt Nam, tinh thần đoàn kết và không ngừng phát triển bản thân là hai yếu tố cốt lõi giúp công ty vươn xa trong ngành truyền thông số. Với đội ngũ nhân sự trẻ trung, sáng tạo và luôn hỗ trợ lẫn nhau, Sano Media đã xây dựng một môi trường làm việc gắn kết, nơi mỗi cá nhân đều có cơ hội phát triển và đóng góp vào thành công chung.</p>
        <p>Tinh thần đoàn kết tại Sano Media không chỉ thể hiện qua sự hợp tác trong công việc mà còn được nuôi dưỡng qua các hoạt động tập thể. Công ty khuyến khích sự phối hợp giữa các phòng ban, giúp nhân viên phát huy thế mạnh cá nhân và bổ trợ cho nhau để đạt được kết quả tốt nhất. Những dự án thành công tại Sano Media luôn là thành quả của một tập thể đồng lòng, cùng chung chí hướng.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1803%2F1220.mp4?alt=media&token=5f1784f7-bada-4654-a7f3-f7a92fec2ae0" type="video/mp4" />
        </video>
        <p>Bên cạnh tinh thần đồng đội, Sano Media đặc biệt chú trọng đến sự phát triển cá nhân của từng nhân viên. Công ty thường xuyên tổ chức các chương trình đào tạo, hội thảo và các buổi chia sẻ kinh nghiệm để cập nhật xu hướng mới nhất trong ngành truyền thông. Nhờ đó, nhân viên không chỉ nâng cao kỹ năng chuyên môn mà còn phát triển tư duy sáng tạo, sẵn sàng thích nghi với những thay đổi trong môi trường công nghệ số.</p>
        <p>Không chỉ giới hạn trong phạm vi công việc, Sano Media còn tạo điều kiện để nhân viên thử thách bản thân thông qua các dự án mới, đảm nhận nhiều vai trò khác nhau và tham gia vào những sáng kiến mang tính chiến lược. Công ty tin rằng khi mỗi cá nhân không ngừng học hỏi và đổi mới, cả tập thể cũng sẽ phát triển mạnh mẽ hơn.</p>
        <p>Ngoài ra, để đảm bảo sự gắn kết bền vững, công ty thường xuyên tổ chức các hoạt động ngoại khóa, sự kiện nội bộ và chương trình teambuilding. Đây không chỉ là dịp để nhân viên thư giãn, mà còn là cơ hội để tăng cường sự thấu hiểu và đoàn kết trong tập thể, giúp môi trường làm việc trở nên thân thiện và tràn đầy năng lượng tích cực.</p>
        <p>Với triết lý “Đoàn kết là sức mạnh, phát triển là tương lai”, Sano Media Việt Nam không ngừng đầu tư vào nhân sự, tạo ra một môi trường làm việc chuyên nghiệp, sáng tạo và truyền cảm hứng. Đây chính là nền tảng giúp công ty không chỉ vững mạnh trong hiện tại mà còn tiếp tục vươn xa trong tương lai.</p>
      </div>
    </div>
  );
};

export default B2103;
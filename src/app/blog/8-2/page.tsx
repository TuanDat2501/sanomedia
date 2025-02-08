'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0802 = () => {
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
        <title>Trao Thưởng KPI Tháng 1</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Trao Thưởng KPI Tháng 1</h1>
        <h3 style={{ fontSize: "20px" }}>08-02-2025</h3>
        <p>Không khí tại công ty hôm nay vô cùng sôi động khi chương trình trao thưởng KPI tháng chính thức diễn ra! Đây là dịp đặc biệt để vinh danh những cá nhân đã xuất sắc hoàn thành và vượt chỉ tiêu công việc, đóng góp tích cực vào sự phát triển chung của công ty..</p>
        <p>Mở đầu chương trình, ban lãnh đạo gửi lời chúc mừng nồng nhiệt và ghi nhận những nỗ lực không ngừng của toàn thể nhân viên. Ngay sau đó, những phần thưởng danh giá được trao tận tay các cá nhân đạt thành tích cao, như một lời động viên và khích lệ họ tiếp tục bứt phá trong những tháng tiếp theo.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0802%2F0208.mp4?alt=media&token=72acfc40-4fe9-4594-a32f-a7115e27962e" type="video/mp4" />
        </video>
        <p>Những gương mặt tiêu biểu được xướng tên trong niềm vui và sự tự hào. Họ không chỉ hoàn thành xuất sắc KPI mà còn thể hiện tinh thần làm việc trách nhiệm, sáng tạo và đầy nhiệt huyết. Đây chính là những nhân tố quan trọng giúp công ty ngày càng vững mạnh và phát triển.</p>
        <p>Bên cạnh phần trao thưởng, buổi lễ còn có những giây phút giao lưu vui vẻ giữa các thành viên. Những câu chuyện truyền cảm hứng, những tràng pháo tay giòn giã và tinh thần đồng đội gắn kết đã tạo nên một không gian tràn đầy năng lượng tích cực.</p>
        <p>Sự ghi nhận kịp thời này không chỉ tiếp thêm động lực cho nhân viên mà còn góp phần xây dựng một môi trường làm việc chuyên nghiệp, nơi mà mọi cố gắng đều được trân trọng. Cùng nhau, chúng ta sẽ tiếp tục hướng tới những mục tiêu mới và chinh phục những đỉnh cao thành công!</p>
      </div>
    </div> 
  );
};

export default B0802;
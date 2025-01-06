'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0601 = () => {
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
        <title>Không Khí Ấm Áp Trong Bữa Tiệc Sinh Nhật</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Không Khí Ấm Áp Trong Bữa Tiệc Sinh Nhật</h1>
        <h3 style={{ fontSize: "20px" }}>06-01-2025
        </h3>
        <p>Với mong muốn mang lại niềm vui và sự gắn kết cho nhân viên, Công ty Sano vừa tổ chức một bữa tiệc sinh nhật đặc biệt dành cho những thành viên có ngày sinh trong tháng. Sự kiện diễn ra trong không khí ấm cúng tại phòng họp lớn, nơi được trang trí rực rỡ với bóng bay, hoa tươi và một chiếc bánh sinh nhật lớn đầy màu sắc.</p>
        <p>Điểm nhấn của buổi tiệc là khoảnh khắc các nhân viên có sinh nhật trong tháng cùng nhau thổi nến và cắt bánh. Những nụ cười rạng rỡ và tiếng vỗ tay không ngớt từ đồng nghiệp khiến không gian trở nên thân tình và tràn đầy năng lượng tích cực. Một số đồng nghiệp cũng chia sẻ những lời chúc và câu chuyện hài hước, làm cho bữa tiệc thêm phần sôi động.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0601%2Fsinh%20nh%E1%BA%ADt.mp4?alt=media&token=46a56e4b-5e63-4936-9dc2-e1dc3767796c" type="video/mp4" />
        </video>
        <p>Buổi tiệc khép lại trong sự hân hoan và những bức ảnh tập thể ý nghĩa. Mỗi nhân viên đều cảm nhận được sự trân trọng và động viên từ công ty, tiếp thêm động lực để họ gắn bó và cống hiến hơn nữa trong công việc.</p>
        <p>Bữa tiệc sinh nhật nhân viên không chỉ đơn thuần là một hoạt động thường niên, mà còn là biểu tượng cho sự quan tâm và coi trọng giá trị con người của Công ty Sano. Đây chính là động lực để mỗi nhân viên thêm yêu công việc và sẵn sàng cống hiến hết mình cho sự phát triển của tập thể.</p>
      </div>
    </div> 
  );
};

export default B0601;
'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0107 = () => {
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
        <title>Liên Hoan Cuối Tháng – Cùng Nhau Ăn Mừng, Cùng Nhau Vinh Danh! </title>

      </Head>
      <div className="container">
        <h1>Liên Hoan Cuối Tháng – Cùng Nhau Ăn Mừng, Cùng Nhau Vinh Danh! </h1>
        <h3 style={{ fontSize: "20px" }}>01-07-2025</h3>
        <p>Cuối tháng – không chỉ là thời điểm khép lại một hành trình làm việc, mà còn là dịp để cả đại gia đình Sano Media cùng nhau "dừng chân", nhìn lại và ăn mừng những kết quả tuyệt vời đã đạt được.</p>
        <p>Và như một “nghi lễ quen thuộc” mỗi tháng, buổi liên hoan cuối tháng luôn là sự kiện được mong chờ:</p>
        <ul>
          <li>Những món ăn ngon “hết sảy”</li>
          <li>Những tràng cười sảng khoái,</li>
          <li>Và quan trọng nhất: vinh danh team xuất sắc nhất tháng!</li>
        </ul>
        <p>Tháng này, ánh đèn sân khấu đã gọi tên Nova – những chiến binh không ngừng nỗ lực, bứt phá ngoạn mục, và mang về những con số, ý tưởng đầy cảm hứng. Từ tinh thần teamwork đến kết quả thực tế, tất cả đều xứng đáng nhận được sự công nhận rực rỡ này!</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/0701(2).mp4?alt=media&token=5c4b196d-a011-4028-ad27-eec0619a066c" type="video/mp4" />
        </video>
        <br />
        <p>Không khí của buổi liên hoan không chỉ rộn ràng vì đồ ăn ngon, mà còn vì sự tự hào – đoàn kết – và lan tỏa năng lượng tích cực. Mỗi tiếng cười vang lên, mỗi cái “cheers” giơ cao đều là lời khẳng định: “Ở Sano, nỗ lực luôn được ghi nhận – và thành công là của tất cả chúng ta!”</p>
        <p>Tháng sau, liệu ai sẽ là người bước lên sân khấu ấy? Hãy cùng giữ vững phong độ, tiếp tục bùng nổ để team mình là cái tên tiếp theo được xướng danh nhé!</p>
      </div>
    </div>
  );
};

export default B0107;
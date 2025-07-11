'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0907 = () => {
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
          Vinh danh Team Xuất Sắc Nhận Thưởng Hằng Ngày</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
         Trưởng thành từng ngày trong đại gia đình Sano Media
        </h1>
        <h3 style={{ fontSize: "20px" }}>09-07-2025
        </h3>
        <p>Trưởng thành không chỉ nằm ở tuổi tác, mà còn được đo bằng những bước tiến trong công việc, trong cách ta đối mặt với thử thách – và ở Sano Media, hành trình trưởng thành ấy luôn có đồng đội sát cánh bên cạnh.</p>
        <p>Tại Sano Media, mỗi ngày đi làm không chỉ là một ngày để hoàn thành nhiệm vụ, mà còn là một cơ hội để học thêm điều mới, để thử sức mình ở một vai trò khác, để dũng cảm sửa sai, và để ghi nhận chính mình đã đi được bao xa kể từ ngày đầu tiên bước vào công ty.</p>
        <ul>
          <li>Có bạn từng lúng túng trong buổi họp đầu tiên, giờ đã tự tin thuyết trình trước cả team.</li>
          <li>Có người từng chỉ quen làm theo, nay đã mạnh dạn dẫn dắt dự án.</li>
          <li>Có những bước đi chậm rãi nhưng vững vàng – và mỗi bước đều có dấu ấn của nỗ lực và tinh thần cầu tiến.</li>
        </ul>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/aboutme-4.jpg?alt=media&token=b69f2ec8-9c72-44a0-bbb0-edb7f3a5cdfc"
          alt="image1" />
        <p>Văn hoá ở Sano không phải cạnh tranh gắt gao để hơn thua, mà là hỗ trợ nhau cùng đi lên, là thấy người khác giỏi và học hỏi, là khi vấp ngã có người kéo bạn đứng dậy.</p>
        <p>Và đó là điều khiến chúng tôi tin rằng: Sano Media không chỉ là nơi để làm việc, mà là nơi để trưởng thành.</p>
      </div>
    </div>
  );
};

export default B0907;
'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1904 = () => {
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
        Một Ngày Ở Sano Media – Không Chỉ Là Làm Việc</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>

        Một Ngày Ở Sano Media – Không Chỉ Là Làm Việc </h1>
        <h3 style={{ fontSize: "20px" }}>19-04-2025
        </h3>
        <p>Nếu hỏi “Một ngày ở Sano Media như thế nào?”, có lẽ câu trả lời sẽ không chỉ gói gọn trong từ “bận rộn”. Bởi với chúng mình, mỗi ngày đi làm đều là một hành trình với đủ cung bậc cảm xúc – từ tiếng cười, những buổi brainstorm bùng nổ, đến cả những phút trầm lắng cùng nhau nhìn lại. </p>
        <p>Buổi sáng bắt đầu với tiếng “chào nhau” đầy năng lượng, mùi cà phê thoang thoảng khắp văn phòng. Ai nấy đều chuẩn bị tinh thần sẵn sàng cho một ngày làm việc hết mình.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0404%2F0402(4).mp4?alt=media&token=069a7955-b0b1-4f44-aa81-b720bc6f266a" type="video/mp4" />
        </video>  
        <p>Giữa những giờ họp căng não hay deadline rượt đuổi, thi thoảng lại vang lên một câu chuyện cười, một tiếng hú hét khi đội bạn vừa “tạch job”, hay một cái vỗ vai động viên: “Cố lên, sắp xong rồi!”</p>
        <p>Chiều đến là lúc năng lượng tụt dần… Nhưng cũng là lúc team ta kéo nhau ăn vặt, mở nhạc nhẹ hoặc rủ nhau ra ban công “xả stress” một chút rồi lại quay về với công việc bằng một tinh thần khác.</p>
        <p>Ở Sano, ngày làm việc không chỉ là về KPI, báo cáo hay kết quả – mà còn là khoảng thời gian được đồng hành, được san sẻ và được là chính mình.</p>
      </div>
    </div>
  );
};

export default B1904;
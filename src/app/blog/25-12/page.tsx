'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2512 = () => {
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
        <title>Tặng Quà Giáng Sinh Cho Nhân Viên: Mang Lại Không Khí Ấm Áp và Trẻ Trung</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Tặng Quà Giáng Sinh Cho Nhân Viên: Mang Lại Không Khí Ấm Áp và Trẻ Trung</h1>
        <h3 style={{ fontSize: "20px" }}>25-12-2024</h3>
        <p> Mùa Giáng Sinh đến cũng là thời điểm các công ty tổ chức những hoạt động nhằm tri ân và ghi nhận những đóng góp của nhân viên trong suốt một năm làm việc vất vả. Trong số đó, việc tặng quà Giáng Sinh cho nhân viên là một truyền thống không thể thiếu, mang lại không khí ấm áp và trẻ trung cho toàn thể công ty. </p>
        <p>Tặng quà Giáng Sinh không chỉ là một hành động mang tính hình thức, mà còn là cơ hội để công ty thể hiện sự quan tâm và trân trọng đối với từng cá nhân. Những món quà được chọn lựa kỹ lưỡng, thể hiện sự sáng tạo và tấm lòng của người tặng. Đó có thể là những món quà tinh tế hơn như cốc, gối, hoặc bình giữ nhiệt.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2512%2Fvideo.mp4?alt=media&token=13a5cd98-1303-4cb6-81ee-dcf18d8dcf94" type="video/mp4" />
        </video>
        <p>Khi nhận được những món quà này, nhân viên không chỉ cảm thấy được trân trọng mà còn cảm nhận được không khí ấm áp của Giáng Sinh lan tỏa khắp nơi. Không khí trong văn phòng bỗng trở nên vui tươi và trẻ trung hơn, mọi người cùng nhau chia sẻ niềm vui, cười nói và thậm chí còn tổ chức những trò chơi vui nhộn để tạo thêm niềm vui cho ngày lễ.</p>
        <p>Hơn thế nữa, việc tặng quà Giáng Sinh còn góp phần gắn kết tinh thần đồng đội, tạo nên sự gắn bó giữa các thành viên trong công ty. Những món quà, dù lớn hay nhỏ, đều mang trong mình thông điệp của sự đoàn kết và sẻ chia. Nhờ đó, mối quan hệ giữa đồng nghiệp cũng trở nên khăng khít hơn, tạo ra một môi trường làm việc đầy năng lượng và sáng tạo.</p>
        <p>Như vậy, tặng quà Giáng Sinh cho nhân viên không chỉ mang lại niềm vui mà còn là một cách để công ty thể hiện sự quan tâm và trân trọng đối với từng cá nhân. Hơn nữa, nó còn giúp tạo ra một không khí ấm áp, trẻ trung, và đầy ắp tình yêu thương trong dịp lễ cuối năm. 🎄🎁✨</p>
      </div>
    </div>
  );
};

export default B2512;
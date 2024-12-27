'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2712 = () => {
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
        <title>Tổ chức sinh nhật cho nhân viên</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Tổ chức sinh nhật cho nhân viên</h1>
        <h3 style={{ fontSize: "20px" }}>27-12-2024</h3>
        <p>Trong môi trường công sở hiện đại, không khí sinh nhật tại công ty luôn là dịp để mọi người cùng hòa mình vào những giây phút trẻ trung và vui nhộn. Hãy tưởng tượng văn phòng thường ngày được biến hóa thành một không gian lễ hội, nơi đầy ắp tiếng cười, âm nhạc sôi động và những bất ngờ thú vị dành riêng cho nhân viên.</p>
        <p>Sinh nhật không chỉ là cơ hội để cá nhân được chúc mừng mà còn là dịp để công ty thể hiện tinh thần "làm hết sức, chơi hết mình". Những buổi sinh nhật rộn ràng với bánh kem và những lời chúc vui tươi sẽ làm nhân viên cảm nhận được sự quan tâm chân thành từ công ty. Chính những hoạt động này góp phần giúp mọi người thư giãn, gần gũi nhau hơn và xây dựng một môi trường làm việc tràn đầy năng lượng tích cực.</p>
        
        <p>Không cần phải cầu kỳ, chỉ cần một chút sáng tạo là đủ để biến buổi sinh nhật thành một sự kiện đáng nhớ. Hãy thử tổ chức những trò chơi vui nhộn, như "truy tìm kho báu", đố vui hài hước hoặc thi hát karaoke. Những tiếng cười sảng khoái và sự cổ vũ nhiệt tình từ đồng nghiệp chắc chắn sẽ để lại kỷ niệm khó quên.</p>
        <p>Kết thúc buổi tiệc bằng một màn chụp ảnh tập thể với những biểu cảm hài hước, hay cùng nhau nhảy múa trên nền nhạc sôi động, sẽ là cách tuyệt vời để ghi lại khoảnh khắc vui vẻ này. Những hình ảnh và video ấy không chỉ lưu giữ kỷ niệm mà còn trở thành nguồn cảm hứng cho toàn bộ tập thể trong những ngày làm việc sắp tới.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2712%2F1211(5).mp4?alt=media&token=d236dd00-d1fd-43b3-8ee6-e875ce8c1b71" type="video/mp4" />
        </video>
      </div>
    </div> 
  );
};

export default B2712;
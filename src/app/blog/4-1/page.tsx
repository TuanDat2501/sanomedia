'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0401 = () => {
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
        <title>Khai Xuân Rộn Ràng, Hào Khí Tại Công Ty</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Khai Xuân Rộn Ràng, Hào Khí Tại Công Ty</h1>
        <h3 style={{ fontSize: "20px" }}>04-02-2025</h3>
        <p>Sau kỳ nghỉ Tết ấm áp, buổi khai xuân tại công ty đã mang đến không khí vui tươi và hứng khởi cho toàn thể nhân viên. Mở đầu năm mới, Ban lãnh đạo công ty đã gửi những lời chúc tốt lành, chúc tất cả các nhân viên một năm mới tràn đầy sức khỏe, thành công và may mắn.</p>
        <p>Hoạt động xông đất của nhân viên đã tăng thêm phần phấn khí, đón nhận những điều tốt đẹp ngay từ những giây phút đầu tiên trở lại làm việc. Tiếp theo đó, mọi người hân hoan tham gia hoạt động hái lì xì, nhận những phong bao đỏ may mắn từ ban giám đốc và đồng nghiệp, mang theo hy vọng về một năm mới tài lộc và thành công.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0402%2F0204(1).mp4?alt=media&token=a34a1186-217c-45ef-8281-076cf7c6815d" type="video/mp4" />
        </video>
        <p>Giây phút tất cả mọi người cùng nhau bật sâm panh chào mừng năm mới đã đẩy cảm xúc, khỏi đầu cho những tháng ngày làm việc hưng thịnh và phát triển. Trong khoảnh khắc đầy yêu thương đó, các nhân viên đã trao nhau những lời chúc tốt đẹp, khỏn gắn kết tinh thần đoàn kết và cùng nhau quyết tâm chinh phục những mục tiêu mới.</p>
        <p>Buổi khai xuân đã trở thành một ký ức đẹp, mang đến sự phấn khí và tràn đầy năng lượng cho tất cả mọi người, đánh dấu một năm làm việc đầy thành công và phát triển rực rỡ.</p>

      </div>
    </div> 
  );
};

export default B0401;
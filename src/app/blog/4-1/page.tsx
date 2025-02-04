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
        <title>Trao Thưởng Tết Dương Lịch</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Trao Thưởng Tết Dương Lịch</h1>
        <h3 style={{ fontSize: "20px" }}>04-01-2025</h3>
        <p>Không khí rộn ràng chào đón năm mới đã tràn ngập trong buổi lễ trao thưởng Tết Dương lịch của Công ty Sano, diễn ra vào chiều ngày 31/12 tại trụ sở chính. Đây là sự kiện thường niên nhằm tri ân những nỗ lực không ngừng nghỉ của toàn thể cán bộ, nhân viên trong suốt một năm qua, đồng thời tạo động lực để tập thể tiếp tục phấn đấu trong năm mới.</p>
        <p>Buổi trao thưởng bắt đầu với bài phát biểu đầy cảm hứng từ Phó Giám đốc điều hành công ty. Ông không chỉ chia sẻ về những thành tựu nổi bật mà công ty đạt được trong năm qua mà còn gửi lời cảm ơn chân thành đến từng nhân viên đã góp phần xây dựng một tập thể vững mạnh. "Những thành công của chúng ta không chỉ đến từ chiến lược hay tầm nhìn, mà còn là sự gắn bó, cống hiến của mỗi người trong đại gia đình Sano".</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0401%2F0104(1).mp4?alt=media&token=c8ea740d-51d3-4d20-a27f-c5d347ff7ac3" type="video/mp4" />
        </video>
        <p>Điểm nhấn của sự kiện là phần trao thưởng cho các cá nhân và tập thể xuất sắc. Những phần thưởng bao gồm tiền mặt, hiện vật giá trị, và các gói du lịch dành cho gia đình. Những gương mặt rạng rỡ bước lên sân khấu nhận thưởng không chỉ thể hiện sự tự hào cá nhân mà còn lan tỏa niềm vui đến toàn thể đồng nghiệp.</p>
        <p>Kết thúc chương trình, ban lãnh đạo công ty gửi lời chúc mừng năm mới và khẳng định cam kết đồng hành cùng nhân viên trong hành trình chinh phục những mục tiêu mới. Những khoảnh khắc ấm áp, đoàn kết tại buổi lễ đã để lại dấu ấn sâu sắc, tiếp thêm động lực để toàn thể công ty bước vào năm mới với khí thế mạnh mẽ hơn bao giờ hết.</p>

      </div>
    </div> 
  );
};

export default B0401;
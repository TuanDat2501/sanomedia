'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1307 = () => {
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
          Team Nhận Thưởng Hằng Ngày – Vinh Danh Những Nỗ Lực Không Ngừng!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
         Team Nhận Thưởng Hằng Ngày – Vinh Danh Những Nỗ Lực Không Ngừng!
        </h1>
        <h3 style={{ fontSize: "20px" }}>13-07-2025
        </h3>
        <p>Ở Sano Media, chúng tôi không đợi đến cuối tháng mới vinh danh, vì mỗi ngày trôi qua đều đáng để ghi nhận!</p>
        <p>Mỗi ngày trôi qua là một cơ hội để từng cá nhân, từng team khẳng định bản thân và tạo nên giá trị cho tập thể. Chính vì vậy, hoạt động vinh danh team xuất sắc hằng ngày đã trở thành một phần không thể thiếu trong văn hóa doanh nghiệp của Sano.</p>
        <p>Xin chúc mừng những người đã xuất sắc vượt chỉ tiêu, phối hợp ăn ý và mang lại kết quả đáng tự hào cho hôm nay! Không chỉ làm việc hiệu quả, team còn lan tỏa tinh thần lạc quan, sáng tạo và đầy nhiệt huyết trong từng hành động nhỏ nhất.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/IMG_1004.JPG?alt=media&token=6915e005-ad04-4e2a-9056-23f8ff1c8860"
          alt="image1" />
        <p><b>Tại sao lại có phần thưởng hằng ngày? </b>
          Bởi chúng tôi tin rằng sự công nhận kịp thời là liều thuốc tinh thần hiệu quả nhất. Mỗi phần thưởng – dù là một tấm vé xem phim, ly trà sữa hay chỉ đơn giản là lời khen ngợi công khai – đều mang ý nghĩa lớn: khích lệ, truyền cảm hứng, và gắn kết đội ngũ.</p>
        <p>Nó khiến mỗi người thêm tự hào, mỗi team thêm phấn chấn, và cả tập thể cùng hướng tới mục tiêu chung với tinh thần hừng hực hơn bao giờ hết. Những “bảng vàng mỗi ngày” tại Sano Media vì thế không chỉ là danh sách, mà là câu chuyện của sự nỗ lực, gắn bó và khẳng định bản thân.</p>
        <p>Hành trình vinh danh vẫn tiếp tục, và cơ hội vẫn rộng mở cho mọi chiến binh nhà Sano! Hãy giữ lửa, tiếp tục cố gắng, và biết đâu – ngày mai bảng vàng gọi tên bạn đấy!</p>
      
      </div>
    </div>
  );
};

export default B1307;
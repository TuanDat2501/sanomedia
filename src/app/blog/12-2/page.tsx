'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1702 = () => {
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
        <title>Chúc Mừng Team Xuất Sắc - Đạt KPI Ngày</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Chúc Mừng Team Xuất Sắc - Đạt KPI Ngày</h1>
        <h3 style={{ fontSize: "20px" }}>17-02-2025</h3>
        <p>Hôm nay lại là một ngày thật đặc biệt khi chúng ta cùng nhau vinh danh những đội nhóm xuất sắc đã chinh phục KPI hằng ngày một cách ngoạn mục! Không chỉ đơn thuần là những con số, đây chính là kết quả của sự nỗ lực, tinh thần đồng đội và thái độ làm việc đầy nhiệt huyết của các thành viên.</p>
        <p>Mỗi ngày trôi qua, mỗi thử thách đều là cơ hội để các team bứt phá và thể hiện bản lĩnh của mình. Và hôm nay, những cái tên xuất sắc nhất đã được xướng lên trong tiếng hò reo đầy phấn khích. Những tràng pháo tay, những nụ cười rạng rỡ chính là minh chứng cho tinh thần chiến đấu không ngừng nghỉ.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        alt={"image"} style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1702%2F2025_02_17_08_15_IMG_0525.JPG?alt=media&token=d30002d0-1c8f-47f3-be2a-e49358d63b3d" />
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        alt={"image"} style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1702%2F2025_02_17_08_14_IMG_0522.JPG?alt=media&token=e8e950a0-33c9-4714-bf02-00ab39ee4d28" />
        <p>Không chỉ có vinh danh, buổi lễ còn là cơ hội để cả công ty cùng nhau chia sẻ niềm vui, cùng nhìn lại những khoảnh khắc đáng nhớ và tiếp thêm động lực cho những ngày tiếp theo. Mỗi team được vinh danh không chỉ đạt KPI mà còn lan tỏa nguồn năng lượng tích cực, truyền cảm hứng để tất cả cùng tiến lên.</p>
        <p>Chúng ta hãy cùng nhau giữ vững phong độ, tiếp tục “bật mode chiến thần” mỗi ngày để chinh phục thêm nhiều cột mốc mới! Hành trình phía trước còn rất nhiều thử thách, nhưng với tinh thần đồng đội và sự quyết tâm, chắc chắn chúng ta sẽ còn bùng nổ hơn nữa!</p>
        <p>Cùng nhau cố gắng, cùng nhau thành công – Let’s go team!</p>
      </div>
    </div> 
  );
};

export default B1702;
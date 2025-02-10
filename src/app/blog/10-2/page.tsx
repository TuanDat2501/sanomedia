'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1002 = () => {
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
        <title>Vinh Danh Nhân Sự Xuất Sắc Tháng</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Vinh Danh Nhân Sự Xuất Sắc Tháng</h1>
        <h3 style={{ fontSize: "20px" }}>10-02-2025</h3>
        <p>Không khí tại công ty hôm nay tràn ngập sự phấn khởi khi chương trình vinh danh Nhân Sự Xuất Sắc Tháng chính thức diễn ra! Đây là dịp đặc biệt để công ty ghi nhận và tôn vinh những cá nhân có thành tích vượt trội, cống hiến hết mình cho sự phát triển chung.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        alt={"image"} style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1002%2F476836825_622072700580519_7349599138747831540_n.jpg?alt=media&token=2ee96cb8-cfe8-434b-806c-66bea622b32a" />
        <p>Mở đầu buổi lễ, ban lãnh đạo đã gửi lời chúc mừng và tri ân sâu sắc đến tất cả nhân viên vì những nỗ lực và đóng góp không ngừng. Những cái tên xuất sắc nhất đã được xướng lên trong tiếng vỗ tay chúc mừng của đồng nghiệp, thể hiện sự tự hào và trân trọng đối với những cá nhân đã tạo ra những bước tiến đáng kể trong công việc.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        alt={"image"} style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1002%2F476832880_622072637247192_6886673769675255046_n.jpg?alt=media&token=ec971bac-6799-4fff-83b2-4fd5db0d71d6" />
        <p>Mỗi cá nhân được vinh danh không chỉ đạt chỉ tiêu công việc mà còn thể hiện tinh thần làm việc trách nhiệm, sáng tạo và luôn sẵn sàng hỗ trợ đồng đội. Họ chính là nguồn cảm hứng, động lực để toàn bộ công ty cùng nhau phát triển mạnh mẽ hơn.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        alt={"image"} style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1002%2F476826246_622072540580535_165325034601619159_n.jpg?alt=media&token=34773ce9-4916-4e32-ad5a-df26698db46d" />
        <p>Bên cạnh phần vinh danh, buổi lễ còn là khoảnh khắc để các nhân viên cùng giao lưu, chia sẻ kinh nghiệm và tiếp thêm năng lượng tích cực. Những câu chuyện thành công, những bài học quý giá đã giúp tất cả có thêm động lực để bứt phá hơn trong thời gian tới.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        alt={"image"} style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1002%2F476230260_622072770580512_3900962281634793666_n.jpg?alt=media&token=fec3c1b2-1b25-4471-bbf9-970fd1759461" />
        <p>Sự ghi nhận kịp thời này không chỉ là lời động viên, khích lệ cho những cá nhân xuất sắc mà còn tạo ra một môi trường làm việc tích cực, nơi mọi sự cố gắng đều được trân trọng. Cùng nhau, chúng ta sẽ tiếp tục chinh phục những thử thách mới và vươn tới những thành công rực rỡ hơn nữa!</p>
      </div>
    </div> 
  );
};

export default B1002;
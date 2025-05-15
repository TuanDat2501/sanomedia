'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1305 = () => {
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
        SANO MEDIA VÀ BÍ QUYẾT GIỮ CHÂN NHÂN SỰ TRẺ</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media Và Bí Quyết Giữ Chân Nhân Sự Trẻ
        </h1>
        <h3 style={{ fontSize: "20px" }}>13-05-2025
        </h3>
        <p>Giữ chân nhân sự trẻ chưa bao giờ là chuyện dễ. Họ năng động, thích thử thách, và luôn tìm kiếm những giá trị mới mẻ trong công việc – không chỉ là lương hay chức danh. Thế nhưng, Sano Media lại là nơi mà rất nhiều bạn trẻ lựa chọn gắn bó lâu dài. Vì sao?</p>
        <h2>1. Môi trường mở – nói là được lắng nghe</h2>
        <p>Tại Sano, không có khoảng cách quá lớn giữa các cấp bậc. Ý tưởng của bạn – dù “non tay” hay “điên rồ” – đều có giá trị. Bạn không cần đợi 5 năm kinh nghiệm mới được thể hiện. Bạn chỉ cần dám nói, dám làm – còn việc tạo điều kiện, để Sano lo.</p>
        <br />
        <h2>2. Văn hóa công nhận – làm tốt là có spotlight</h2>             
        <p>Không chỉ khen cho có, Sano luôn có cơ chế ghi nhận rõ ràng: từ “Chiến binh của tháng”, lời cảm ơn trước team đến các phần thưởng thiết thực. Vì chúng tôi tin, ai cũng cần được nhìn thấy nỗ lực của mình.</p>
        <br />
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                               style={{ maxWidth: "1200px" }}
                               src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/455817447_499605679493889_385086096986158533_n.jpg?alt=media&token=0a6a8c29-9c70-44bd-b584-13ef4e45c2fd"
                               alt="image1" />
        <h2>3. Không chỉ làm – mà còn được học và lớn lên</h2>
        <p>Sano tạo cơ hội để bạn trẻ học từ chính công việc, từ người đi trước, từ những buổi chia sẻ nội bộ đến workshop bên ngoài. Và quan trọng nhất: bạn luôn có lộ trình phát triển rõ ràng, để không thấy mình “giậm chân tại chỗ”.</p>
        <br />
        <h2>4. Làm hết mình – chơi cũng hết cỡ</h2>
        <p>Đội ngũ trẻ thì phải vui! Các hoạt động team building, minigame nội bộ, sinh nhật, “quẩy nhẹ” cuối tuần – tất cả là để giữ cho tinh thần luôn tươi mới, đúng với tinh thần Gen Z: “Làm tốt, nhưng đừng quên vui!”</p>
      </div>
    </div>
  );
};

export default B1305;
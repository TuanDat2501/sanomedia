'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1403 = () => {
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
        SẮP HẾT TUẦN RỒI ĐẤY, BÙNG NỔ NĂNG LƯỢNG CHƯA NGƯỜI ĐẸP?</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Cuối Tuần Rồi, Bùng Nổ Gì Chưa Người Đẹp? </h1>
        <h3 style={{ fontSize: "20px" }}>14-03-2025
        </h3>
        <p>Mỗi ngày, bạn có thể chọn là một người bình thường hoặc là một người chiến thắng. Bạn có thể chọn ngủ thêm 5 phút hoặc là thức dậy và tạo ra điều gì đó phi thường. Bạn có thể chọn bỏ cuộc hoặc tiếp tục chiến đấu, vì chiến đấu chính là bản năng của một chiến binh!</p>
        <p>Vì thế, đừng để ai ngăn cản bạn. Đừng để bất kỳ khó khăn nào làm bạn lùi bước. Bạn được sinh ra để làm những điều tuyệt vời, để bùng nổ và chinh phục mọi đỉnh cao. Hãy đứng lên, xốc lại tinh thần, và bùng nổ với tất cả năng lượng trong bạn nhé! 🔥</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          alt={"image"} style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1403%2F484642183_646703864784069_1405889446189864779_n.jpg?alt=media&token=ed834d36-7947-4017-9140-473ebd998ff7" />
        
        <p>Chúc các thành viên Sanoers luôn giữ vững tinh thần chiến binh, bùng nổ năng lượng và đạt được mọi mục tiêu trong cuộc sống!</p>
      </div>
    </div>
  );
};

export default B1403;
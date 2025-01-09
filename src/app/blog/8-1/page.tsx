'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0701 = () => {
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
        Tuyên Dương Nhân Viên Đạt KPI Hằng Ngày Xuất Sắc</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Tuyên Dương Nhân Viên Đạt KPI Hằng Ngày Xuất Sắc</h1>
        <h3 style={{ fontSize: "20px" }}>08-01-2025
        </h3>
        <p>Để duy trì hiệu suất làm việc ổn định và đạt được các mục tiêu đã đề ra, việc ghi nhận và khích lệ nhân viên là yếu tố không thể thiếu. Vừa qua, công ty Sano đã tổ chức buổi tuyên dương nhằm vinh danh những nhân viên xuất sắc, luôn hoàn thành và vượt mức KPI hằng ngày.</p>
        <p>Những cá nhân được tuyên dương lần này là minh chứng cho tinh thần làm việc kỷ luật, năng động và tận tâm. Họ không chỉ đạt các chỉ số KPI một cách đều đặn mà còn luôn thể hiện thái độ làm việc tích cực, chủ động hỗ trợ đồng nghiệp và đóng góp vào hiệu quả chung của đội nhóm.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          alt={"image"} style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0801%2Fz6207464626849_69dbef8e4ed1eb11b752895810d004c0.jpg?alt=media&token=8f754d80-79b9-4b20-9bf1-1be10d16edaa" />
        <p>Ban lãnh đạo công ty đã gửi lời cảm ơn chân thành và trao tặng những phần quà ý nghĩa như một sự ghi nhận xứng đáng cho nỗ lực của từng cá nhân. Các nhân viên được tuyên dương đều chia sẻ rằng sự hỗ trợ từ đồng nghiệp và môi trường làm việc chuyên nghiệp chính là động lực giúp họ đạt được thành tích như ngày hôm nay.</p>
        <p>Sự thành công của các nhân viên đạt KPI hằng ngày không chỉ khẳng định chất lượng nhân sự của công ty mà còn truyền cảm hứng cho toàn thể đội ngũ. Công ty kỳ vọng rằng, tinh thần làm việc xuất sắc này sẽ tiếp tục lan tỏa, góp phần vào sự phát triển mạnh mẽ và bền vững trong tương lai.</p>
      </div>
    </div>
  );
};

export default B0701;
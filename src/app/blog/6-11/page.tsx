'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0610 = () => {
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
        Sano Media – Học Hỏi Không Ngừng Cùng Minh Travel</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media – Học Hỏi Không Ngừng Cùng Minh Travel
        </h1>
        <h3 style={{ fontSize: "20px" }}>06-10-2025
        </h3>
        <p>Tuần vừa qua, đại gia đình Sano Media đã có cơ hội tham gia buổi đào tạo nội bộ đặc biệt cùng diễn giả Minh Travel – một gương mặt quen thuộc trong lĩnh vực làm video và điện ảnh sáng tạo.</p>
        <p>Buổi học không chỉ đơn thuần là chia sẻ kiến thức, mà còn là hành trình khơi mở tư duy sáng tạo, giúp đội ngũ Sano Media nhìn nhận sâu hơn về nghệ thuật kể chuyện bằng hình ảnh – yếu tố cốt lõi trong mỗi sản phẩm truyền thông mà công ty thực hiện.</p>
           <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                  style={{ maxWidth: "1200px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0611%2FDSC04437.JPG?alt=media&token=c79fd114-5712-4e38-9295-7415ad85cce8"
                  alt="image1" /> 
        <p>Thông qua những chia sẻ chân thực, ví dụ sinh động và kinh nghiệm quý báu từ thực tế, anh Minh Travel đã mang đến cho mọi người một góc nhìn mới về cách xây dựng hình ảnh, cảm xúc và câu chuyện trong từng khung hình.</p>
        <p>Từ đó, các thành viên Sano Media không chỉ được trau dồi kỹ năng kỹ thuật, mà còn nuôi dưỡng cảm xúc và tư duy nghệ thuật – nền tảng quan trọng để tạo nên những sản phẩm sáng tạo và khác biệt.</p>                   
        <p>Buổi đào tạo kết thúc trong không khí hào hứng và tràn đầy cảm hứng. Ai nấy đều cảm thấy “được tiếp năng lượng”, sẵn sàng áp dụng những kiến thức mới vào công việc, để cùng nhau đưa chất lượng sản phẩm của Sano Media lên một tầm cao mới.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                  style={{ maxWidth: "1200px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0611%2FIMG_9201.JPG?alt=media&token=c67f1155-8f92-4711-89fc-b868e3fb06da"
                  alt="image1" /> 
        <p>Cảm ơn diễn giả Minh Travel đã mang đến buổi chia sẻ bổ ích và đầy cảm hứng. Cảm ơn ban lãnh đạo Sano Media đã luôn quan tâm, tạo điều kiện để mỗi thành viên được phát triển và sáng tạo không ngừng.</p>
      </div>
    </div>
  );
};  

export default B0610;
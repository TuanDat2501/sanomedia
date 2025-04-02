'use client'
import React from 'react';
import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0204 = () => {
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
        Sano Media Việt Nam – Hành Trình Phát Triển Của Mỗi Nhân Viên</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media Việt Nam – Hành Trình Phát Triển Của Mỗi Nhân Viên</h1>
        <h3 style={{ fontSize: "20px" }}>02-04-2025
        </h3>
        <p>Tại Sano Media Việt Nam, mỗi nhân viên đều có một hành trình phát triển riêng, đầy thử thách nhưng cũng ngập tràn cơ hội. Công ty luôn đặt sự trưởng thành của đội ngũ làm trọng tâm, tạo điều kiện để mỗi cá nhân không ngừng vươn lên và phát triển bản thân.</p>
        <p>Ngay từ khi gia nhập Sano Media, mỗi nhân viên đều được đào tạo bài bản, tiếp cận với những kiến thức mới nhất trong lĩnh vực truyền thông. Công ty không chỉ cung cấp công cụ làm việc mà còn mang đến môi trường học hỏi, giúp từng cá nhân nâng cao kỹ năng chuyên môn, phát triển tư duy sáng tạo và rèn luyện tinh thần trách nhiệm.</p>
       <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       style={{ maxWidth: "1200px" }}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL0281.jpg?alt=media&token=880f93e3-6327-4adb-a4a2-02f211080986"
                       alt="image1" />
        <p>Không chỉ có những lộ trình thăng tiến rõ ràng, Sano Media còn khuyến khích nhân viên tự định hướng con đường phát triển của mình. Dù là một chuyên viên trẻ đang chập chững bước vào nghề hay một quản lý dày dặn kinh nghiệm, mỗi người đều được tạo điều kiện để khám phá tiềm năng, thử nghiệm những ý tưởng mới và không ngừng nâng cao giá trị bản thân.</p>
        <p>Tinh thần học hỏi và phát triển không chỉ đến từ cá nhân mà còn từ sự hỗ trợ của cả tập thể. Các buổi đào tạo nội bộ, hội thảo chuyên môn, và những buổi chia sẻ kinh nghiệm từ các chuyên gia trong ngành giúp đội ngũ luôn cập nhật xu hướng và cải thiện kỹ năng không ngừng. Những thử thách mới không còn là rào cản mà trở thành cơ hội để mỗi nhân viên bứt phá, khẳng định bản thân và đóng góp cho sự phát triển chung của công ty.</p>
        <p>Với triết lý “Lớn mạnh cùng nhau”, Sano Media Việt Nam không chỉ là nơi làm việc mà còn là một môi trường truyền cảm hứng, nơi mỗi nhân viên có thể viết nên câu chuyện thành công của riêng mình. Hành trình phát triển tại Sano Media không chỉ là con đường sự nghiệp, mà còn là hành trình của sự khám phá, học hỏi và vươn xa hơn mỗi ngày.</p>
      </div>
    </div>
  );
};

export default B0204;
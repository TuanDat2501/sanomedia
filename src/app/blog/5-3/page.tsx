'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0503 = () => {
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
        <title>VINH DANH NHỮNG CHIẾN BINH XUẤT SẮC NHẤT THÁNG</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Vinh Danh Những Chiến Binh Xuất Sắc Nhất Tháng</h1>
        <h3 style={{ fontSize: "20px" }}>05-03-2025</h3>
        <p>Mỗi tháng trôi qua là một hành trình đầy thử thách, và hôm nay, chúng ta cùng vinh danh những chiến binh xuất sắc nhất – những người đã không ngừng nỗ lực, vượt qua mọi giới hạn để đạt được thành tích ấn tượng nhất!</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                alt={"image"} style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1002%2F476832880_622072637247192_6886673769675255046_n.jpg?alt=media&token=ec971bac-6799-4fff-83b2-4fd5db0d71d6" />
        <p>Gọi tên những ngôi sao sáng!
        Những cá nhân được vinh danh không chỉ hoàn thành xuất sắc công việc mà còn thể hiện tinh thần trách nhiệm, sự sáng tạo và nhiệt huyết trong từng nhiệm vụ. Họ chính là nguồn cảm hứng, là động lực giúp cả đội nhóm cùng nhau tiến lên.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                alt={"image"} style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1002%2F476826246_622072540580535_165325034601619159_n.jpg?alt=media&token=34773ce9-4916-4e32-ad5a-df26698db46d" />
        <p>Khoảnh khắc vinh danh đáng nhớ!
        Tiếng vỗ tay vang dội, những lời chúc mừng và những nụ cười rạng rỡ chính là minh chứng cho sự ghi nhận xứng đáng. Từng chiếc cúp, từng phần thưởng được trao tận tay như một lời cảm ơn sâu sắc dành cho sự cống hiến không mệt mỏi.</p>
       <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                               alt={"image"} style={{ maxWidth: "1200px" }}
                               src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1002%2F476230260_622072770580512_3900962281634793666_n.jpg?alt=media&token=fec3c1b2-1b25-4471-bbf9-970fd1759461" />
        <p>Tiếp tục bứt phá – Chinh phục những đỉnh cao mới!
        Vinh danh hôm nay không phải là đích đến mà là động lực để mỗi cá nhân tiếp tục phấn đấu, phát huy hết khả năng của mình. Hãy cùng nhau chinh phục những thử thách mới và tạo nên những kỷ lục ấn tượng hơn nữa!</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                alt={"image"} style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1002%2F476836825_622072700580519_7349599138747831540_n.jpg?alt=media&token=2ee96cb8-cfe8-434b-806c-66bea622b32a" />
        <p>Cùng nhau, chúng ta sẽ tiếp tục tỏa sáng và làm nên những thành công rực rỡ!</p>
      </div>
    </div> 
  );
};

export default B0503;
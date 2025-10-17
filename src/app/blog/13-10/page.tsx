'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1310 = () => {
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
          Chinh Phục Ma Thiên Lãnh – Tinh Thần Đồng Đội Vượt Qua Mọi Giới Hạn</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Chinh Phục Ma Thiên Lãnh – Tinh Thần Đồng Đội Vượt Qua Mọi Giới Hạn
        </h1>
        <h3 style={{ fontSize: "20px" }}>13-08-2025
        </h3>
        <p>Mỗi hành trình đều mang đến những trải nghiệm đáng nhớ, nhưng có lẽ, chuyến leo núi Ma Thiên Lãnh vừa qua đã để lại trong các thành viên Sano Media những cảm xúc thật đặc biệt — vừa thử thách, vừa tự hào.</p>
        <p>Con đường núi không hề dễ dàng. Mỗi bước đi là một thử thách, mỗi con dốc là một giới hạn mới. Có những lúc tưởng như muốn dừng lại, nhưng rồi những tiếng động viên, những cái nắm tay và nụ cười của đồng đội lại khiến mọi người thêm mạnh mẽ để bước tiếp.</p>
        <p>Không ai bị bỏ lại phía sau. Bởi trên đỉnh cao kia, thành công không thuộc về một cá nhân — mà là chiến thắng của tập thể, của tinh thần “Cùng nhau vượt qua – Cùng nhau chinh phục”.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1310%2F564124903_816631491124638_7776495035742307591_n.jpg?alt=media&token=867e35c2-bb7b-4629-9a7b-c35d000d28da"
          alt="image1" />
        
        <p>Khi cả team cùng nhau đứng trên đỉnh núi, nhìn xuống khung cảnh hùng vĩ phía dưới, ai cũng hiểu rằng: đôi khi, hành trình gian nan chính là cách tuyệt vời nhất để nhận ra sức mạnh thật sự của sự đoàn kết.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1310%2F565668874_816633631124424_8679581095368316313_n.jpg?alt=media&token=623eae0e-5588-4a8f-926a-7ab1727a0c0c"
          alt="image1" />
        <p>Hành trình Ma Thiên Lãnh khép lại, nhưng tinh thần bền bỉ, gắn bó và nhiệt huyết ấy sẽ luôn là nguồn năng lượng để Sano Media tiếp tục bứt phá trong những hành trình mới.</p>
        <p><b>Sano Media – Mỗi bước chân là một dấu ấn, mỗi hành trình là một câu chuyện đáng nhớ.</b></p>
      </div>
    </div>
  );
};

export default B1310;
'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2805 = () => {
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
        Ở Sano, không ai là người đứng ngoài cuộc chơi!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Ở Sano, không ai là người đứng ngoài cuộc chơi!
        </h1>
        <h3 style={{ fontSize: "20px" }}>28-05-2025
        </h3>
        <p>Sano Media không chỉ là nơi làm việc – mà là một cuộc chơi sáng tạo mà ai cũng có “slot”. Dù bạn là editor thức đêm dựng từng frame, hay là content ngồi bóp trán tìm idea cho một caption viral, thì bạn đều đang góp phần tạo nên điều gì đó tuyệt vời hơn bản thân mình.</p>
        <p>Ở Sano, mỗi người có một cá tính – nhưng không ai bị đứng ngoài cuộc. Tụi mình tin rằng: “Ý tưởng hay không đến từ chức danh, mà đến từ người dám mở lời”. Thế nên bạn là intern, là newbie, hay là senior kỳ cựu – cũng đều có tiếng nói và chỗ đứng ngang nhau.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL0264%20(1).jpg?alt=media&token=9ddef43c-ea94-4d90-a1ee-e6157ccbbf6d"
                                alt="image1" />
        <p>Không khí ở đây? Ồ, không phải lúc nào cũng chill. Nhưng lại đủ sôi nổi để truyền cảm hứng, đủ gắn kết để bạn cảm thấy mình thuộc về. Từ những buổi họp brainstorm cười sặc nước, đến những lần “lên brief” cháy deadline nhưng cả team vẫn xắn tay vào cùng làm – đó là thứ “teamwork máu lửa” mà không phải môi trường nào cũng có được.</p>
        <p> Và quan trọng nhất: Mỗi ngày ở đây là một lần tiến lên. Dù chỉ là một ý tưởng được đón nhận, một job hoàn thành đúng tiến độ, hay một lần dám nói điều mình nghĩ – đó đều là chiến thắng nhỏ mà bạn có quyền tự hào.</p>                   
      </div>
    </div>
  );
};

export default B2805;
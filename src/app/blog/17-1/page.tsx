'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1701 = () => {
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
        Tổ chức sinh nhật cho nhân viên</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Tổ chức sinh nhật cho nhân viên </h1>
        <h3 style={{ fontSize: "20px" }}>17-01-2025
        </h3>
        <p>Sinh nhật không chỉ là ngày đặc biệt đối với mỗi cá nhân mà còn là dịp để công ty thể hiện sự quan tâm đặc biệt tới nhân viên của mình. Mỗi năm, sinh nhật là cơ hội để ban lãnh đạo và đồng nghiệp cùng nhau gửi lời chúc tốt đẹp và những món quà ý nghĩa đến người được chúc mừng.</p>
        <p>Đối với nhân viên, một buổi sinh nhật tại công ty không chỉ đơn giản là một bữa tiệc nhỏ mà còn là sự ghi nhận từ tập thể. Những lời chúc từ trái tim, nụ cười từ đồng nghiệp, hay thậm chí là một chiếc bánh kem đơn giản cũng đủ để mang lại cảm giác ấm áp và gần gũi. Đó là khoảnh khắc mà mỗi người cảm nhận được sự trân trọng và giá trị của mình trong tổ chức.!</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1701%2F0116.mp4?alt=media&token=fcaef15f-7a2b-4035-94af-c6c61b9d08f2" type="video/mp4" />
        </video>
        
        <p>Không khí vui vẻ trong buổi tiệc sinh nhật chính là sợi dây gắn kết giữa các thành viên. Những trò chơi nhỏ, những câu chuyện chia sẻ đầy tiếng cười là cơ hội để mọi người hiểu nhau hơn, tạo nên một môi trường làm việc hòa đồng và thân thiện. Đó cũng là cách để xóa đi những căng thẳng thường ngày, giúp nhân viên cảm thấy thoải mái và tiếp thêm năng lượng cho những thử thách phía trước.</p>
        <p>Với nhân viên, sinh nhật tại công ty không chỉ là một ngày lễ cá nhân mà còn là ngày của sự gắn bó và sẻ chia. Đây là cách công ty khẳng định rằng mỗi nhân viên đều là một phần quan trọng trong tập thể, và sự cống hiến của họ luôn được ghi nhận. Một buổi tiệc sinh nhật đơn giản nhưng đầy ý nghĩa chính là động lực để mỗi người tiếp tục cố gắng, cùng nhau xây dựng một tập thể vững mạnh và đoàn kết.</p>
      </div>
    </div>
  );
};

export default B1701;
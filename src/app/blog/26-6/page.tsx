'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2606 = () => {
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
        <title>SANO MEDIA – LÀM NGHIÊM TÚC, VUI NGHIỆP DƯ!</title>
        
      </Head>
      <div className="container">
        <h1>Sano Media - Làm Nghiêm Túc, Vui Nghiệp Dư!</h1>
        <h3 style={{ fontSize: "20px" }}>26-06-2025</h3>
        <p>Nếu ai nghĩ làm việc ở Sano Media là ngày ngày cắm mặt vào màn hình thì… đúng rồi, nhưng mà còn rất nhiều tiếng cười và “trò con bò” phía sau nữa!</p>
        <p>Tại Sano, chúng tôi làm việc nghiêm túc – từ deadline gấp gáp, brief dày cộm cho đến những dự án chạy xuyên đêm. Nhưng song song đó, văn hóa “vui nghiệp dư” đã trở thành đặc sản:</p>
        <ul>
          <li>Từ những câu nói viral trong văn phòng</li>
          <li>Những màn cosplay nội bộ “có tâm không cần đạo cụ”</li>
          <li>Đến các pha "diễn sâu" lúc pitching – mà ai nhìn cũng phải gật gù: “Diễn vậy chắc Oscar gọi!”</li>
        </ul>
        <p>Chính những khoảnh khắc tưởng như vụn vặt ấy lại là chất keo gắn kết cả một tập thể trẻ, sáng tạo và "không ngại lầy". Bởi vì khi đã hết mình trong công việc, thì cũng đừng ngại… bung xõa với đồng đội!</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/0618%20(1)(1).mp4?alt=media&token=dad3d640-ec33-4d43-b793-58ea4fe29885" type="video/mp4" />
        </video>
        <br />
        <p>Sano Media – nơi không chỉ có việc, mà còn có vibe!</p>
      </div>
    </div>
  );
};

export default B2606;
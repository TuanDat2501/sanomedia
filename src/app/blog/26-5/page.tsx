'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2605 = () => {
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
        Hội Đồng Đam Mê – Những Người Thắp Lửa Từ Bên Trong</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Hội Đồng Đam Mê – Những Người Thắp Lửa Từ Bên Trong
        </h1>
        <h3 style={{ fontSize: "20px" }}>26-05-2025
        </h3>
        <p>Không cần danh hiệu “sếp lớn”, cũng chẳng cần tiếng vỗ tay rầm rộ, ở Sano Media luôn có một nhóm người đặc biệt – những “hội viên” thầm lặng của Hội Đồng Đam Mê.</p>
        <p>Họ là những người đến sớm nhất để chuẩn bị mọi thứ gọn gàng, là người ở lại sau cùng để đảm bảo không điều gì bị bỏ sót. Là những bạn trẻ sẵn sàng “xắn tay áo” với ánh mắt rực lửa mỗi khi công ty có dự án mới. Là người không ngần ngại chia sẻ kiến thức, giúp đỡ đồng đội, dù công việc của mình còn bộn bề.</p>
        <h2>Họ không chỉ làm việc – họ sống với công việc.</h2>
        <p>Tại Sano Media, những con người như vậy chính là nền móng vững chắc. Đam mê của họ là thứ không ai bắt buộc, nhưng tự nhiên lan tỏa. Và chính họ là người khiến môi trường làm việc không còn là áp lực, mà trở thành nơi “mỗi ngày đi làm là một ngày được sống với điều mình yêu”.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2805%2F456700735_504077172380073_7287893856803490776_n.jpg?alt=media&token=cefd6866-e64f-4ec1-95cd-801d5974af74"
                                alt="image1" />
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2805%2F456480667_504077282380062_5829766535894428739_n.jpg?alt=media&token=ee15af9b-dd8c-4f72-bddf-40b64d12291e"
                                alt="image1" />
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2805%2F456371311_504077052380085_5178064025443260817_n.jpg?alt=media&token=f7830c73-c33d-4742-bb21-c92c2cbf183f"
                                alt="image1" />                        
        <p> Có thể họ ít nói. Có thể họ không hay chia sẻ trên mạng. Nhưng đam mê của họ hiện rõ trong từng hành động, từng kết quả – và trong ánh mắt của những người làm cùng họ mỗi ngày.</p>
      </div>
    </div>
  );
};

export default B2605;
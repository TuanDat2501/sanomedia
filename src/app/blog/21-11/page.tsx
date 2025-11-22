'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2111 = () => {
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
         Sano Media – Văn Hóa Tạo Nên Sức Mạnh</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
       Sano Media – Văn Hóa Tạo Nên Sức Mạnh
        </h1>
        <h3 style={{ fontSize: "20px" }}>21-11-2025
        </h3>
        <p>Ở Sano Media, điều khiến mỗi nhân viên cảm thấy tự hào không chỉ là những dự án chất lượng hay các sản phẩm truyền thông ấn tượng. Thứ tạo nên bản sắc riêng của chúng tôi chính là văn hoá làm việc tích cực, nhân văn và đầy cảm hứng.</p>
        <p>Tại đây, mọi ý tưởng đều được trân trọng. Không ai quá nhỏ để lên tiếng, cũng không có giới hạn nào cho sáng tạo. Chúng tôi tin rằng một môi trường cởi mở sẽ giúp mỗi cá nhân tự tin thể hiện năng lực, mạnh dạn thử thách bản thân và tạo nên những giá trị thật sự.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                        style={{ maxWidth: "1200px" }}
                                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/585900853_844318668355920_6301779801000352808_n.jpg?alt=media&token=dfdfb10b-624f-4c3c-b848-70f59e5af571"
                                        alt="image1" />
        <p>Sano Media là nơi mỗi người được làm việc theo cách mà họ tỏa sáng nhất. Sự linh hoạt trong phong cách làm việc, sự trẻ trung trong tư duy và sự thẳng thắn trong giao tiếp đã tạo nên một tập thể luôn tràn đầy năng lượng. Chúng tôi không xem làm việc là trách nhiệm, mà xem đó là hành trình khám phá, học hỏi và trưởng thành mỗi ngày.</p>
        <p>Sano Media không chỉ xây dựng thương hiệu cho khách hàng, mà còn xây dựng giá trị bền vững cho chính đội ngũ của mình. Chúng tôi tạo môi trường để mỗi người phát triển, tạo cơ hội để mỗi người tỏa sáng và tạo động lực để mỗi người tiếp tục tiến về phía trước.</p>
        <p>Chúng tôi tự hào vì đã – đang – và sẽ luôn là một tập thể trẻ, hiện đại, cầu tiến và đầy nhiệt huyết. Và nếu bạn đang tìm kiếm một môi trường để phát triển, hoặc một đối tác truyền thông tận tâm, chân thành và sáng tạo — Sano Media luôn sẵn sàng đồng hành.</p>
      </div>
    </div>
  );
};

export default B2111;
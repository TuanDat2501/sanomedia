'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0508 = () => {
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
        Vinh Danh Những Team Xuất Sắc Nhất Tháng!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Vinh Danh Những Team Xuất Sắc Nhất Tháng!
        </h1>
        <h3 style={{ fontSize: "20px" }}>05-09-2025
        </h3>
        <p>Một tháng nỗ lực đã khép lại và giờ là lúc cùng nhìn lại những dấu ấn tuyệt vời mà các team tại Sano Media đã tạo nên. Với tinh thần làm việc bền bỉ, sáng tạo không ngừng và sự phối hợp ăn ý, các team xuất sắc nhất tháng đã chính thức được vinh danh cùng phần thưởng xứng đáng!</p>
        <p>Mỗi con số đạt được không chỉ phản ánh hiệu quả công việc, mà còn là minh chứng cho sự đoàn kết, tinh thần đồng đội và khát khao chinh phục mục tiêu.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                  style={{ maxWidth: "1200px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/z6978447369422_9759f3f9dee3b478048caccc696528e6.jpg?alt=media&token=cf23c0d6-3f8f-40cc-8b94-5925a4a11e07"
                  alt="image1" />
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                  style={{ maxWidth: "1200px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/z6978447387620_7898b5d1734f259302569ee0f108f67b.jpg?alt=media&token=a9f49a17-b03f-457d-b6f9-1ab13b158a4c"
                  alt="image1" />
        <p>Phần thưởng tháng này không chỉ là sự ghi nhận, mà còn là động lực để tất cả chúng ta tiếp tục bứt phá mạnh mẽ hơn trong chặng đường sắp tới.</p>
        <p>Ở Sano Media, chúng tôi luôn tin rằng: “Khi cùng nhau nỗ lực, thành công sẽ thuộc về tập thể.” Và các team xuất sắc tháng này chính là tấm gương sáng cho tinh thần đó.</p>                   
        <p>Một lần nữa, xin chúc mừng những chiến binh tài năng! Hãy tiếp tục giữ vững phong độ và lan tỏa nguồn năng lượng tích cực đến cả đại gia đình Sano nhé!</p>
      </div>
    </div>
  );
};  

export default B0508;
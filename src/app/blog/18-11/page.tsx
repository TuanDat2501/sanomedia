'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1811 = () => {
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
        <title>Sano Media – Mạnh Mẽ Vì Chúng Tôi Là Một Đội</title>

      </Head>
      <div className="container">
        <h1>Sano Media – Mạnh Mẽ Vì Chúng Tôi Là Một Đội</h1>
        <h3 style={{ fontSize: "20px" }}>18-11-2025</h3>
        <p>Sano Media không được tạo nên từ những điều hào nhoáng bên ngoài, mà từ chính những con người mang trong mình ngọn lửa sáng tạo và tinh thần không bao giờ bỏ cuộc. Điều làm chúng tôi đặc biệt không phải là văn phòng đẹp hay thiết bị hiện đại, mà là sức mạnh đến từ đội ngũ trẻ đầy nhiệt huyết.</p>
        <p>Tại Sano Media, mỗi ngày làm việc không chỉ là hoàn thành nhiệm vụ. Đó là những buổi gặp gỡ tràn đầy năng lượng, là hành trình khám phá ý tưởng mới, là những khoảnh khắc đồng đội cùng nhau vượt qua mọi thử thách. Mỗi thành viên đến công ty không chỉ để “làm việc”, mà để góp phần tạo nên điều gì đó lớn hơn – tạo nên giá trị thật.</p>
        <p>Chúng tôi tin rằng tinh thần mạnh mẽ sẽ tạo nên đội nhóm mạnh mẽ. Và chính đội nhóm mạnh mẽ ấy giúp Sano Media vững vàng tiến lên, đồng hành cùng mọi thương hiệu trên con đường phát triển. Chúng tôi luôn nghiêm túc trong từng sản phẩm, cầu tiến trong từng ngày và tận tâm trong từng chi tiết.</p>
        <p>Trong một ngành luôn thay đổi từng giờ như truyền thông, Sano Media chọn cách trưởng thành mỗi ngày bằng sự tử tế, chuyên môn vững chắc và niềm đam mê sáng tạo. Chúng tôi không chỉ làm nội dung, mà còn tạo nên câu chuyện, cảm xúc và dấu ấn cho từng khách hàng tin tưởng.</p>
         <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                          alt={"image"} style={{ maxWidth: "1200px" }}
                          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/585460997_844318591689261_6580625915479593595_n.jpg?alt=media&token=24c20a0a-6e3e-4fd9-9049-fc352c47f0c0" />
        <br />
        <p>Sano Media là nơi mà mỗi ý tưởng đều được lắng nghe, mỗi nỗ lực đều được ghi nhận và mỗi cá nhân đều có cơ hội để tỏa sáng. Chúng tôi tự hào khi được làm điều mình yêu, cùng những người mang chung nhiệt huyết, trong một môi trường nơi sáng tạo luôn được nuôi dưỡng.</p>
        <p>Với Sano Media, không ai bị bỏ lại phía sau. Chúng tôi là một đội. Một đội ngũ trẻ, mạnh mẽ và luôn sẵn sàng tạo nên những điều khác biệt</p>

      </div>
    </div>
  );
};

export default B1811;
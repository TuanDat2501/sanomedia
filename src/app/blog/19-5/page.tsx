'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1905 = () => {
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
        Lễ khởi công - Trường đẹp cho em</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Lễ khởi công - Trường đẹp cho em
        </h1>
        <h3 style={{ fontSize: "20px" }}>19-05-2025
        </h3>
        <p>Hành trình gieo mầm hy vọng của Sano Media tại điểm trường Mường Lống 02, xã Mường Lống, huyện Kỳ Sơn, tỉnh Nghệ An</p>
        <p>Trên những triền núi cao của xã Mường Lống, nơi mây vẫn lặng lẽ trôi qua mái nhà đơn sơ và tiếng cười trẻ nhỏ vang vọng giữa rừng núi, một buổi sáng đặc biệt đã diễn ra – lễ khởi công xây dựng điểm trường Mường Lống 02 do Sano Media đồng hành và thực hiện.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                          alt={"image"} style={{ maxWidth: "1200px" }}
                          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1905%2Fz6615846843462_c698da3938ff0dade5b10e3211550070.jpg?alt=media&token=1c36d491-b50d-426d-a1b5-860ccae0f615" />
        <p>Đây không đơn thuần là một công trình xây dựng. Đó là một cam kết thầm lặng nhưng mạnh mẽ của Sano Media – rằng trong hành trình phát triển của doanh nghiệp, không ai bị bỏ lại phía sau. Những viên gạch đầu tiên được đặt xuống hôm nay không chỉ để dựng nên tường lớp, mà là những viên gạch dựng lên ước mơ, lòng tin và tương lai cho các em nhỏ nơi vùng cao xa xôi.</p>
        <p>Tại điểm trường cũ, những lớp học dựng tạm bằng gỗ và tôn, không đủ che gió lạnh mùa đông, không đủ chắn nắng hè oi ả, càng khiến việc đến trường của trẻ thơ nơi đây trở thành một hành trình gian nan. Nhưng ánh mắt trong veo của các em – dù giữa khó khăn – vẫn ánh lên khát khao được học, được chơi, được lớn lên như bao đứa trẻ khác.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                  alt={"image"} style={{ maxWidth: "1200px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1905%2Fz6615846837564_5f7a801630980c7510bf51b4e0991d32.jpg?alt=media&token=0ba49e22-b3fa-4fed-b143-f1cce1c628f6" />
        <h2>Sano Media đến đây với mong muốn viết tiếp giấc mơ còn dang dở đó.</h2>
        <p>Bởi vì chúng tôi tin: khi một đứa trẻ được học trong mái trường tử tế, cả một cộng đồng sẽ có cơ hội thay đổi.</p>
        <p>Buổi lễ khởi công diễn ra không rộn ràng náo nhiệt, nhưng lại thấm đẫm tình người. Những cái bắt tay chân thành, những ánh mắt lặng lẽ dõi theo từng xẻng đất đầu tiên, và những tiếng cười trẻ thơ như xua tan cả cái giá lạnh miền sơn cước – tất cả như lời nhắc nhở rằng: hạnh phúc thật sự đến từ việc sống vì người khác.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                  alt={"image"} style={{ maxWidth: "1200px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1905%2Fz6615846843501_a0a5f026026cfdedbfa906d62c8004a8.jpg?alt=media&token=b9e190b2-1729-41da-947c-1ba2cf5d9b9a" />
        <p>Chúng tôi – những con người của Sano Media – không đến đây để trao đi, mà là để nhận lại: nhận lại bài học về lòng biết ơn, về sự sẻ chia và về một giá trị lớn lao hơn cả thành công – giá trị của những điều tử tế.</p>
        <p>Hành trình còn dài, nhưng hôm nay là một khởi đầu đẹp.</p>
        <p>Một điểm trường mới sẽ được dựng nên. Và cùng với đó, niềm tin sẽ nảy mầm. Ước mơ sẽ lớn lên.</p>
      </div>
    </div>
  );
};

export default B1905;
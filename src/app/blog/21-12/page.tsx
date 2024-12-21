'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2112 = () => {
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
      <Head> <title>Chuyến Thăm Quê Bác Hồ Của Công Ty Vào Buổi Chiều</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." /> 
        </Head> 
        <div className="container">
        <h1>Chuyến Thăm Quê Bác Hồ Của Công Ty Vào Buổi Chiều</h1>
        <h3 style={{ fontSize: "20px" }}>21-12-2024</h3>
        <p> Vào buổi chiều một ngày tháng 8, dưới ánh nắng dịu nhẹ và gió mát từ cánh đồng lúa, đoàn xe của công ty chúng tôi bắt đầu hành trình về quê Bác Hồ, làng Sen, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An. Đây không chỉ là một chuyến tham quan mà còn là một hành trình tìm về cội nguồn, để mỗi nhân viên hiểu hơn về cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh, vị lãnh tụ kính yêu của dân tộc. </p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                                          alt={"image"} style={{ maxWidth: "1200px" }}
                                                                          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2112%2FIMG_3045.jpg?alt=media&token=94db93ab-ae7a-4e0f-9c9a-cbd1b9ba7751" />
        
        <h2>Hành Trình Đầy Ý Nghĩa</h2>
        <p> Xuất phát từ trụ sở công ty vào đầu giờ chiều, với không khí háo hức và mong đợi, chúng tôi hướng về quê Bác, nơi đã ghi dấu biết bao kỷ niệm của Người. Đến nơi, chúng tôi được tham quan ngôi nhà tranh đơn sơ, nơi Bác Hồ đã sinh ra và lớn lên. Những kỷ vật đơn giản nhưng đầy ý nghĩa, từ chiếc chõng tre, bộ bàn ghế cũ, đến những bức ảnh trắng đen về thời thơ ấu của Bác, tất cả đều khiến chúng tôi không khỏi xúc động. </p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                                          alt={"image"} style={{ maxWidth: "1200px" }}
                                                                          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2112%2FIMG_3124.jpg?alt=media&token=da30bfa4-54d4-4a09-b8d1-29022cc5d01d" />
        
        <h2>Những Trải Nghiệm Đáng Nhớ</h2>
        <ul>
          <li><strong>Tham Quan Nhà Tưởng Niệm:</strong> Chúng tôi được lắng nghe những câu chuyện cảm động về những năm tháng sống và làm việc của Bác. Những câu chuyện về sự hy sinh, lòng kiên nhẫn và tình yêu quê hương đất nước của Người đã để lại ấn tượng sâu sắc trong lòng mỗi nhân viên.</li>
          <li><strong>Lắng Nghe Những Câu Chuyện Lịch Sử:</strong> Hướng dẫn viên đã chia sẻ những câu chuyện lịch sử về quá trình hoạt động cách mạng của Bác, từ những ngày đầu tiên đến khi giành được độc lập cho dân tộc. Những câu chuyện này không chỉ giúp chúng tôi hiểu rõ hơn về lịch sử mà còn khơi dậy niềm tự hào dân tộc.</li>
          <li><strong>Hoạt Động Tập Thể:</strong> Sau khi tham quan, chúng tôi cùng tham gia các hoạt động tập thể như chơi trò chơi, thi đố vui về kiến thức lịch sử. Những hoạt động này không chỉ giúp chúng tôi giải trí mà còn tăng cường tinh thần đoàn kết và gắn bó giữa các nhân viên.</li>
        </ul>
        <h2>Bài Học Quý Giá</h2>
        <p> Chuyến thăm quê Bác Hồ đã mang đến cho chúng tôi nhiều bài học quý giá về sự giản dị, kiên nhẫn và lòng yêu nước. Những kỷ niệm về cuộc đời và sự nghiệp của Bác đã khắc sâu trong lòng mỗi nhân viên, nhắc nhở chúng tôi về trách nhiệm và nghĩa vụ của mình đối với đất nước. Qua chuyến đi này, chúng tôi càng hiểu rõ hơn về tầm quan trọng của việc giữ gìn và phát huy những giá trị truyền thống tốt đẹp của dân tộc. </p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                                          alt={"image"} style={{ maxWidth: "1200px" }}
                                                                          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2112%2FIMG_3064.jpg?alt=media&token=7ca35f54-7941-49ff-8aab-64234a2877c6" />
        
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                                          alt={"image"} style={{ maxWidth: "1200px" }}
                                                                          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2112%2FIMG_3007.jpg?alt=media&token=a56f0a75-a8bf-40df-89c7-393df5f8317c" />
        <h2>Kết Luận</h2>
        <p> Chuyến thăm quê Bác Hồ vào buổi chiều không chỉ là một chuyến du lịch mà còn là một hành trình đầy ý nghĩa giúp tập thể công ty chúng tôi học hỏi và cảm nhận sâu sắc về tấm gương đạo đức của vị lãnh tụ kính yêu. Mỗi nhân viên đều cảm nhận được tình yêu quê hương đất nước, tự hào về lịch sử và văn hóa dân tộc. Đây cũng là cơ hội để chúng tôi gắn kết, xây dựng tinh thần đồng đội và phát triển tình cảm đồng nghiệp. Những giá trị tích cực từ chuyến thăm sẽ góp phần thúc đẩy sự phát triển và đoàn kết của toàn công ty, tạo nên một tập thể vững mạnh, sẵn sàng đối mặt với mọi thử thách và phát triển bền vững trong tương lai. </p>
      </div>
    </div>
  );
};

export default B2112;
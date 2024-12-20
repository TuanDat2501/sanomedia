'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1912 = () => {
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
      <Head> <title>Trò Chơi Xây Dựng Đội Ngũ Trong Buổi Đào Tạo Công Ty</title>
        <meta name="description" content="Đánh giá chi tiết về hiệu quả và lợi ích của trò chơi xây dựng đội ngũ trong buổi đào tạo công ty." />
      </Head>
      <div className="container">
        <h1>Trò Chơi Xây Dựng Đội Ngũ Trong Buổi Đào Tạo Công Ty</h1>
        <h3 style={{ fontSize: "20px" }}>19-12-2024</h3>
        <p> Trong buổi đào tạo gần đây tại công ty, chúng tôi đã triển khai trò chơi "Vẽ cờ và slogan". Đây là một hoạt động ngoài trời giúp tăng cường tinh thần đồng đội và phát triển kỹ năng lãnh đạo. Hãy cùng tìm hiểu xem trò chơi này đã mang lại những giá trị gì cho nhân viên. </p>
        <h2>Giới Thiệu Về Trò Chơi "Vẽ cờ và slogan"</h2>
        <p> Trò chơi "Vẽ cờ và slogan" yêu cầu các nhóm nhân viên phải sử dụng các vật liệu đơn giản như gỗ, dây thừng và bìa carton để xây dựng một cây cầu đủ chắc chắn cho một thành viên trong nhóm đi qua. Trò chơi này đòi hỏi sự sáng tạo, kỹ năng làm việc nhóm và khả năng giải quyết vấn đề. </p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                          alt={"image"} style={{ maxWidth: "1200px" }}
                                                          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1912%2F01XL8982.JPG?alt=media&token=850e5eb1-0d2e-4656-bcbc-0b4cb5c59175" />
        <h2>Ý Nghĩa Mang Lại</h2>
        <ul>
          <li><strong>Tăng Cường Tinh Thần Đồng Đội:</strong> Trò chơi yêu cầu sự phối hợp và hỗ trợ lẫn nhau, giúp nhân viên hiểu và tin tưởng lẫn nhau hơn.</li>
          <li><strong>Phát Triển Kỹ Năng Lãnh Đạo:</strong> Việc phân công nhiệm vụ và quản lý thời gian trong quá trình xây dựng giúp các nhân viên rèn luyện kỹ năng lãnh đạo.</li>
          <li><strong>Cải Thiện Kỹ Năng Giải Quyết Vấn Đề:</strong> Nhân viên phải tìm ra cách sử dụng tài nguyên hạn chế để xây dựng một cấu trúc chắc chắn, giúp phát triển kỹ năng giải quyết vấn đề.</li>
          <li><strong>Tạo Ra Sự Thú Vị và Hào Hứng:</strong> Hoạt động ngoài trời và thử thách mang lại sự hào hứng và năng lượng mới cho nhân viên.</li>
        </ul>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                  alt={"image"} style={{ maxWidth: "1200px" }}
                                                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1912%2F01XL8986.JPG?alt=media&token=9006b7ca-c861-424c-b840-f36c2692af88" />
        <h2>Đánh Giá Tổng Quan</h2>
        <p> Trò chơi "Vẽ cờ và slogan" đã chứng minh là một hoạt động hiệu quả trong việc xây dựng tinh thần đồng đội và phát triển kỹ năng lãnh đạo. Nhân viên tham gia đều cảm thấy hứng thú và đánh giá cao những lợi ích mà trò chơi mang lại. Đây là một phương pháp đào tạo sáng tạo và thú vị, giúp tăng cường sự gắn kết và hiệu quả làm việc của đội ngũ. </p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                  alt={"image"} style={{ maxWidth: "1200px" }}
                                                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1912%2F01XL8988.JPG?alt=media&token=dd893fc9-eab0-4b2d-a156-07e823895d09" />

        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                  alt={"image"} style={{ maxWidth: "1200px" }}
                                                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1912%2F01XL9218.JPG?alt=media&token=e070da9f-1eee-44c6-ab6b-1bfcf53f4fb4" />
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                  alt={"image"} style={{ maxWidth: "1200px" }}
                                                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1912%2F01XL9224.JPG?alt=media&token=c6a7e1c0-788e-4edc-9e33-626ae0d30056" />
        <h2>Kết Luận</h2>
        <p> Việc tích hợp các trò chơi xây dựng đội ngũ như "Vẽ cờ và slogan" vào các buổi đào tạo công ty không chỉ mang lại lợi ích về mặt kỹ năng mà còn giúp tạo nên một môi trường làm việc tích cực và gắn kết. Doanh nghiệp nên cân nhắc đưa các hoạt động tương tự vào chương trình đào tạo để thúc đẩy sự phát triển toàn diện của nhân viên. </p> </div>
    </div>
  );
};

export default B1912;
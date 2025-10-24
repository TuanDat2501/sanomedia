'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const E2711 = () => {
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
            <h1>Sano Media – Nơi Mỗi Ngày Là Một Hành Trình Cùng Nhau Phát Triển</h1>
            <h3 style={{ fontSize: "20px" }}>23-10-2025</h3>
            <p>Tại Sano Media, chúng tôi tin rằng: một môi trường làm việc tốt không chỉ là nơi có những dự án lớn, mà còn là nơi mọi người được lắng nghe, tôn trọng và cùng nhau trưởng thành.</p>
            <div className="paragraph">
                <p>Ở đây, năng lượng tích cực luôn tràn đầy trong từng khoảnh khắc — từ buổi họp brainstorming đầy sôi nổi, những giờ làm việc tập trung cao độ, cho đến các trò chơi “xả stress” giữa giờ trưa khiến văn phòng luôn rộn rã tiếng cười.</p>
            </div>
            
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/499970425_698257209628734_5679443522334471592_n.jpg?alt=media&token=937e7930-7b0b-4408-9262-bb3d49b68b14"
                alt="image1" />
            <br />
            <div className="paragraph">
                <p>Mỗi thành viên Sano đều mang một màu sắc riêng, nhưng khi hòa vào tập thể, tất cả tạo nên một bức tranh rực rỡ của tinh thần đoàn kết và sáng tạo không giới hạn. Chúng tôi cùng nhau chia sẻ, cùng nhau vượt qua áp lực và cùng nhau ăn mừng mỗi khi đạt được thành quả – dù lớn hay nhỏ.</p>
            </div>
            {/*   <div className="container-image">
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                    alt={"image"} style={{ maxWidth: "1200px" }}
                    src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2Fimage2.jpg?alt=media&token=ebba21de-9839-4c8f-be7e-088181c61336" />
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                    alt={"image"} style={{ maxWidth: "1200px" }}
                    src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2Fimage3.jpg?alt=media&token=01efae48-4318-4941-9b5f-0f958eb39e64" />
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                    alt={"image"} style={{ maxWidth: "1200px" }}
                    src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2Fimage4.jpg?alt=media&token=a3049f4d-e354-454f-8071-a6b3782b4db8" />
            </div> */}

            <div className="paragraph">
               <p>Không ai đơn độc trong hành trình phát triển của mình. Tại Sano Media, mỗi người đều có “đồng đội” luôn sẵn sàng hỗ trợ, truyền cảm hứng và cùng nhau tiến bước. Chính sự gắn kết ấy đã tạo nên nền văn hóa đặc trưng – nơi công việc là đam mê, đồng nghiệp là gia đình, và thành công là hành trình chung.</p>
            </div>
            <div className="paragraph">
                <p><b>Sano Media – Làm việc hết mình, tận hưởng từng khoảnh khắc, và cùng nhau đi xa hơn!</b></p>
            </div>
        </div>
    );
};

export default E2711;
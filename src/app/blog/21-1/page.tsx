'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const E2101 = () => {
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
            <h1>SANO MEDIA - Tôn Vinh Ngôi Sao Sáng 2024!</h1>
            <h3 style={{ fontSize: "20px" }}>21-1-2025</h3>
            <div className="paragraph">
                <p>Chúng ta vừa trải qua một năm đầy thử thách và thành công! Hôm nay, Sano Media tự hào vinh danh những cá nhân và đội nhóm xuất sắc nhất, những người đã góp phần tạo nên dấu ấn không thể quên trong hành trình phát triển của công ty.</p>
            </div>
            <div className="paragraph">
                <p>Ngoài những lời chúc mừng, các “Ngôi Sao Sáng” còn được trao tặng những phần thưởng giá trị, như lời cảm ơn chân thành từ ban lãnh đạo. Phát biểu tại buổi lễ, Tổng Giám đốc công ty nhấn mạnh: “Các bạn chính là nguồn cảm hứng và là động lực to lớn giúp Sano Media không ngừng phát triển. Thành công của các bạn cũng chính là thành công của chúng ta.”</p>
            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2101%2F473830496_609566941831095_2315901336108118290_n.jpg?alt=media&token=dd5df73e-a744-47c3-ac9b-42afd998a85a"
                alt="image1" />
            <br />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2101%2F474196033_609567045164418_3861581546226095196_n.jpg?alt=media&token=02d608f5-5aa1-4304-94d6-6d8ba2f2cba9"
                alt="image1" />
            <br />
            <div className="paragraph">
                <p>Sự kiện “Tôn Vinh Ngôi Sao Sáng 2024” không chỉ là lời tri ân mà còn là nguồn động lực để toàn thể nhân viên tiếp tục phấn đấu, sáng tạo và đoàn kết hơn nữa. Với những ngôi sao sáng này, Sano Media chắc chắn sẽ tiến xa hơn trên hành trình chinh phục những cột mốc mới trong tương lai.</p>
            </div>
        
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2101%2F474226762_609567185164404_8702303662378810472_n.jpg?alt=media&token=0fa2bb92-7743-49ed-8c1f-d07889d05e67"
                alt="image1" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2101%2F474476417_609567115164411_2796284593407294217_n.jpg?alt=media&token=012a149d-b381-4392-9dfd-2a66b73299fd" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2101%2F474655240_609567368497719_5654537436594549000_n.jpg?alt=media&token=d1c49538-21a6-4309-b68a-5dcceec7ed17" />
         
            <div className="paragraph">
                <p>Hãy cùng nhìn lại những khoảnh khắc đáng nhớ và đón chờ những thành công mới trong năm 2025! Cảm ơn tất cả các thành viên trong Sano Media đã luôn đồng hành cùng công ty! </p>
            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2101%2F474758359_609566878497768_4707830142696738169_n.jpg?alt=media&token=6f4b20a0-7a15-47e6-b8c2-e504796a63f0" />
        </div>
    );
};

export default E2101;
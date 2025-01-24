'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const E2301 = () => {
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
            <h1>Trao Thưởng Hằng Ngày Cho Nhân Viên</h1>
            <h3 style={{ fontSize: "20px" }}>23-1-2025</h3>
            <div className="paragraph">
                <p>Trong hiện đại, việc duy trì động lực làm việc cho nhân viên là một thách thức lớn. Một trong những cách hiệu quả nhất để giữ tinh thần phấn khởi và sự cam kết từ nhân viên là áp dụng chương trình trao thưởng hằng ngày. Hãy cùng khám phá tại sao cách làm này lại mang lại hiệu quả và làm thế nào để triển khai thành công trong công ty của bạn.</p>
            </div>
            <div className="paragraph">
                <p>Khi biết rằng công sức mình bỏ ra có thể được công nhận ngay lập tức, nhân viên sẽ cảm thấy hào hứng và có động lực hơn để hoàn thành tốt công việc. Những phần thưởng này không chỉ tạo ra niềm vui tức thời mà còn khuyến khích sự sáng tạo và đổi mới.</p>
                <p>Bên cạnh đó, việc trao thưởng thường xuyên giúp củng cố văn hóa ghi nhận trong công ty, tạo ra một môi trường làm việc tích cực, nơi mọi đóng góp đều được tôn trọng. Khi cảm thấy được ghi nhận, nhân viên sẽ có xu hướng gắn bó lâu dài hơn với công ty, góp phần xây dựng một đội ngũ vững mạnh.</p>
            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2201%2F2025_01_22_08_15_IMG_0480.JPG?alt=media&token=f40f2ca2-cb5a-4d9a-a705-281af0dd1938"
                alt="image1" />
            <br />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2201%2F2025_01_22_08_16_IMG_0484.JPG?alt=media&token=080c46da-e19c-4370-8a42-cfa894d54fbe"
                alt="image1" />
            <br />
            <div className="paragraph">
                <p>Các phần thưởng hằng ngày không cần quá lớn nhưng nên mang tính khích lệ và ý nghĩa. Chẳng hạn, thẻ quà tặng, một tách cà phê miễn phí, hay những vật dụng văn phòng dễ thương đều có thể trở thành động lực tuyệt vời.</p>
            </div>
         
            <div className="paragraph">
                <p>Chương trình trao thưởng hằng ngày không chỉ tạo động lực cho nhân viên mà còn xây dựng một văn hóa công ty tích cực và đoàn kết. Những phần thưởng nhỏ nhưng mang ý nghĩa lớn chính là chìa khóa để thúc đẩy hiệu suất làm việc và duy trì sự hài lòng trong công việc.</p>
            </div>
        </div>
    );
};

export default E2301;
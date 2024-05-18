'use client'
import React from 'react';

import Image from "next/image";
import './style.scss'
import {useMediaQuery} from "usehooks-ts";
const TeamBuilding = () => {
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
            <h1>Chương trình hoạt động: Team Building</h1>
            <h3 style={{fontSize: "20px"}}>19-10-2023</h3>
            <p>Vào ngày 19 tháng 10 năm 2023, Sano Media đã tổ chức hoạt động team building đầy niềm vui và ý nghĩa khi
                toàn thể nhân sự Công ty. Nhằm tạo sự gắn kết giữa người với người giữa các thành viên trong Công ty</p>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} style={{maxWidth: "1200px"}}
                   src="../image/team-building/image6.jpg" alt="image1"/>
            <div className="paragraph">
                <h3>Khám Phá Team Building: Xây Dựng Đội Ngũ Vững Mạnh và Đoàn Kết</h3>
                <p>Trong môi trường ngày càng cạnh tranh và biến động, việc xây dựng một đội ngũ làm việc đoàn kết và
                    hiệu quả trở nên quan trọng hơn bao giờ hết. Team building - xây dựng đội ngũ - đã trở thành một
                    hoạt động không thể thiếu đối với các công ty, tổ chức muốn thúc đẩy sự hợp tác, tinh thần đồng đội
                    và hiệu suất làm việc. Hãy cùng khám phá những lợi ích và ý nghĩa của các hoạt động team building
                    thông qua bài viết này.</p>
            </div>
            <div className="paragraph">
                <h3>Nâng cao tinh thần đồng đội</h3>
                <p>Team building giúp các thành viên trong nhóm hiểu rõ hơn về nhau, từ đó tăng cường sự tin tưởng và hỗ
                    trợ lẫn nhau. Qua các hoạt động chung, họ học cách làm việc cùng nhau, chia sẻ ý tưởng và giải quyết
                    vấn đề một cách hiệu quả.</p>
            </div>
            <div className="paragraph">
                <h3>Cải thiện kỹ năng giao tiếp</h3>
                <p>Với mỗi người tham dự, Gala Dinner không chỉ là một sự kiện sang trọng mà còn là một trải nghiệm
                    tuyệt vời và ý nghĩa. Từ việc được thưởng thức những món ăn ngon và hương vị độc đáo đến việc tham
                    gia vào các hoạt động giải trí mang lại không khí trẻ trung,năng động, đậm nét văn hoá của Công ty.
                    Mỗi khoảnh khắc trong Gala Dinner đều là một kỷ niệm đáng nhớ.</p>
            </div>
            <div className="paragraph">
                <h3>Tăng cường sự sáng tạo</h3>
                <p>Với mỗi người tham dự, Gala Dinner không chỉ là một sự kiện sang trọng mà còn là một trải nghiệm
                    tuyệt vời và ý nghĩa. Từ việc được thưởng thức những món ăn ngon và hương vị độc đáo đến việc tham
                    gia vào các hoạt động giải trí mang lại không khí trẻ trung,năng động, đậm nét văn hoá của Công ty.
                    Mỗi khoảnh khắc trong Gala Dinner đều là một kỷ niệm đáng nhớ.</p>
            </div>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="../image/team-building/image6.jpg"/>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="../image/team-building/image10.jpg"/>
            <div className="paragraph">
                <h3>Giảm căng thẳng và áp lực</h3>
                <p>Team building cung cấp một không gian thư giãn và vui vẻ, giúp giảm bớt căng thẳng và áp lực công
                    việc. Điều này không chỉ cải thiện tâm trạng của các thành viên mà còn tăng cường sự hài lòng và
                    động lực làm việc.</p>
            </div>
            <div className="paragraph">
                <h3>Xây dựng văn hóa công ty</h3>
                <p>Team building giúp xây dựng và củng cố văn hóa công ty, tạo ra một môi trường làm việc tích cực và
                    thân thiện. Văn hóa công ty mạnh mẽ không chỉ giúp thu hút và giữ chân nhân tài mà còn tăng cường
                    hiệu suất làm việc của toàn đội ngũ.</p>
            </div>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="../image/team-building/image8.jpg"/>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="../image//team-building/image12.jpg"/>
            <div className="paragraph">
                <h3>Kết Luận</h3>
                <p>Team building không chỉ là một hoạt động giải trí mà còn là một công cụ quan trọng để xây dựng một
                    đội ngũ vững mạnh và hiệu quả. Thông qua các hoạt động này, các thành viên có cơ hội để hiểu rõ hơn
                    về nhau, cải thiện kỹ năng làm việc nhóm và tạo ra một môi trường làm việc tích cực. Đầu tư vào team
                    building là đầu tư vào tương lai của doanh nghiệp, giúp tạo ra một đội ngũ đoàn kết, sáng tạo và
                    luôn sẵn sàng đối mặt với mọi thách thức.</p>

            </div>
        </div>
    );
};

export default TeamBuilding;
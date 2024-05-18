'use client'
import React from 'react';

import Image from "next/image";
import './style.scss'
import {useMediaQuery} from "usehooks-ts";
const Marathon = () => {
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
            <h1>Chương trình hoạt động: Chạy Marathon</h1>
            <h3 style={{fontSize: "20px"}}>19-08-2023</h3>
            <p>Vào ngày 19 tháng 08 năm 2023, Sano Media đã tổ chức hoạt động team building đầy niềm vui và ý nghĩa khi
                toàn thể nhân sự Công ty. Nhằm tạo sự gắn kết giữa người với người giữa các thành viên trong Công ty</p>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/marathon%2Fimage1.jpg?alt=media&token=40142cda-257d-4604-818d-b690c450c8ff" alt={"image"}/>
            <div className="paragraph">
                <h3>Khám Phá Hoạt Động Chạy Marathon Cho Công Ty: Kết Nối Đội Ngũ và Thúc Đẩy Sức Khỏe</h3>
                <p>Chạy Marathon 21km và Hành trình Team Building Đầy Ý Nghĩa tại SANO Media Việt Nam!</p>
            </div>
            <div className="paragraph">
                <h3>Nâng cao tinh thần đồng đội</h3>
                <p>Mỗi bước chạy là một sự kết nối, mỗi giọt mưa là một thử thách, nhưng tinh thần đồng đội và đội nhóm
                    của chúng ta đã vượt qua mọi khó khăn! Dưới những ngàn giọt mưa, chúng ta cùng nhau bước đi, tạo nên
                    những kỷ niệm không thể nào quên.</p>
            </div>
            <div className="paragraph">
                <h3>Cải thiện kỹ năng giao tiếp</h3>
                <p>Trải qua các trò chơi và hoạt động Team Building, chúng ta đã cùng nhau vượt qua những rào cản, xây
                    dựng sự gắn kết mạnh mẽ hơn và học hỏi từ nhau. Từ việc hoàn thành những thử thách đầy sáng tạo cho
                    đến việc hỗ trợ đồng đội, tinh thần đồng đội thực sự đã đánh bại mọi giới hạn!</p>
            </div>
            <div className="paragraph">
                <h3>Khuyến Khích Lối Sống Lành Mạnh</h3>
                <p>Hoạt động chạy marathon thúc đẩy lối sống lành mạnh, khuyến khích nhân viên duy trì chế độ tập luyện
                    và
                    dinh dưỡng hợp lý. Điều này không chỉ cải thiện sức khỏe cá nhân mà còn giảm thiểu các chi phí y tế
                    cho
                    công ty.</p>
            </div>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/marathon%2Fimage2.jpg?alt=media&token=83b51607-49b7-4742-92b0-ed0c98f20b53"/>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/marathon%2Fimage3.jpg?alt=media&token=739d898e-6737-4f00-89e1-ca52347ac17f"/>
            <div className="paragraph">
                <h3>Nâng Cao Hình Ảnh Công Ty</h3>
                <p>Tham gia các sự kiện cộng đồng như chạy marathon giúp nâng cao hình ảnh của công ty, thể hiện sự quan
                    tâm
                    đến sức khỏe và hạnh phúc của nhân viên cũng như cam kết đối với các hoạt động xã hội. Không chỉ
                    dừng
                    lại ở đó, chúng ta đã thể hiện sự kiên nhẫn và quyết tâm trong cuộc chạy Marathon 21km. Dù trời mưa
                    hay
                    trời nắng, chúng ta đã cùng nhau vượt qua từng dặm đường, từng bước chân. Đích đến không chỉ là về
                    nơi,
                    mà còn là sự thể hiện ý chí và sức mạnh bên trong chúng ta.</p>
            </div>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/marathon%2Fimage4.jpg?alt=media&token=5c90ce29-41f8-4684-81d6-7d4e80b68d36"/>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/marathon%2Fimage8.jpg?alt=media&token=c36e53b7-0b53-4843-ac78-91c32e0fc9ff"/>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/marathon%2Fimage9.jpg?alt=media&token=b31f0324-4a5e-4e9c-bf33-19602dda327d"/>
            <div className="paragraph">
                <h3>Xây dựng văn hóa công ty</h3>
                <p>Team building giúp xây dựng và củng cố văn hóa công ty, tạo ra một môi trường làm việc tích cực và
                    thân
                    thiện. Văn hóa công ty mạnh mẽ không chỉ giúp thu hút và giữ chân nhân tài mà còn tăng cường hiệu
                    suất
                    làm việc của toàn đội ngũ.</p>
            </div>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/marathon%2Fimage5.jpg?alt=media&token=02205584-c3fc-46e2-93e0-1e80c9e79aad"/>
            <Image width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/marathon%2Fimage10.jpg?alt=media&token=771e0d3b-c027-4bc5-ac1c-cc96d0aaea75"/>
            <div className="paragraph">
                <h3>Kết Luận</h3>
                <p>Hoạt động chạy marathon cho công ty không chỉ là một sự kiện thể thao mà còn là một công cụ mạnh mẽ
                    để
                    xây dựng đội ngũ, thúc đẩy sức khỏe và nâng cao tinh thần làm việc. Với sự chuẩn bị kỹ lưỡng và sự
                    tham
                    gia nhiệt tình của các nhân viên, công ty có thể tạo ra một sự kiện đáng nhớ, mang lại nhiều lợi ích
                    lâu
                    dài cho cả cá nhân và tổ chức. Hãy bắt đầu lên kế hoạch cho cuộc chạy marathon tiếp theo và tận
                    hưởng
                    những giá trị tuyệt vời mà nó mang lại!</p>

            </div>
        </div>
    );
};

export default Marathon;
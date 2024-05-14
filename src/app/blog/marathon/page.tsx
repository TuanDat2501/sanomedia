import React from 'react';

const Marathon = () => {
    const html = "<div style=\"max-width: 1200px;margin-left: auto;margin-right: auto; margin-top: 100px;margin-bottom: 100px\">\n" +
        "        <h1>Chương trình hoạt động: Chạy Marathon</h1>\n" +
        "        <h3 style=\"font-size: 20px;\">19-08-2023</h3>\n" +
        "        <p>Vào ngày 19 tháng 08 năm 2023, Sano Media đã tổ chức hoạt động team building đầy niềm vui và ý nghĩa khi toàn thể nhân sự Công ty. Nhằm tạo sự gắn kết giữa người với người giữa các thành viên trong Công ty</p>\n" +
        "        <img style=\"max-width: 1200px;\" src=\"../image/marathon/image1.jpg\">\n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Khám Phá Hoạt Động Chạy Marathon Cho Công Ty: Kết Nối Đội Ngũ và Thúc Đẩy Sức Khỏe</h3>\n" +
        "            <p>Chạy Marathon 21km và Hành trình Team Building Đầy Ý Nghĩa tại SANO Media Việt Nam!</p>\n" +
        "        </div>\n" +
        "        <style>\n" +
        "            .paragraph h3{\n" +
        "                font-size: 18px ;\n" +
        "                font-weight: bold;\n" +
        "            }\n" +
        "            .paragraph p{\n" +
        "                text-align: justify;\n" +
        "                text-indent: 30px;\n" +
        "                margin-bottom: 30px;\n" +
        "                margin-top: 10px\n" +
        "            }\n" +
        "            img{\n" +
        "                margin-bottom: 15px;\n" +
        "            }\n" +
        "        </style>\n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Nâng cao tinh thần đồng đội</h3>\n" +
        "            <p>Mỗi bước chạy là một sự kết nối, mỗi giọt mưa là một thử thách, nhưng tinh thần đồng đội và đội nhóm của chúng ta đã vượt qua mọi khó khăn! Dưới những ngàn giọt mưa, chúng ta cùng nhau bước đi, tạo nên những kỷ niệm không thể nào quên.</p>\n" +
        "        </div>\n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Cải thiện kỹ năng giao tiếp</h3>\n" +
        "            <p>Trải qua các trò chơi và hoạt động Team Building, chúng ta đã cùng nhau vượt qua những rào cản, xây dựng sự gắn kết mạnh mẽ hơn và học hỏi từ nhau. Từ việc hoàn thành những thử thách đầy sáng tạo cho đến việc hỗ trợ đồng đội, tinh thần đồng đội thực sự đã đánh bại mọi giới hạn!</p>\n" +
        "        </div>\n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Khuyến Khích Lối Sống Lành Mạnh</h3>\n" +
        "            <p>Hoạt động chạy marathon thúc đẩy lối sống lành mạnh, khuyến khích nhân viên duy trì chế độ tập luyện và dinh dưỡng hợp lý. Điều này không chỉ cải thiện sức khỏe cá nhân mà còn giảm thiểu các chi phí y tế cho công ty.</p>\n" +
        "        </div>\n" +
        "        <img style=\"max-width: 1200px;\" src=\"../image/marathon/image2.jpg\">\n" +
        "        <img style=\"max-width: 1200px;\" src=\"../image/marathon/image3.jpg\">\n" +
        "    \n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Nâng Cao Hình Ảnh Công Ty</h3>\n" +
        "            <p>Tham gia các sự kiện cộng đồng như chạy marathon giúp nâng cao hình ảnh của công ty, thể hiện sự quan tâm đến sức khỏe và hạnh phúc của nhân viên cũng như cam kết đối với các hoạt động xã hội. Không chỉ dừng lại ở đó, chúng ta đã thể hiện sự kiên nhẫn và quyết tâm trong cuộc chạy Marathon 21km. Dù trời mưa hay trời nắng, chúng ta đã cùng nhau vượt qua từng dặm đường, từng bước chân. Đích đến không chỉ là về nơi, mà còn là sự thể hiện ý chí và sức mạnh bên trong chúng ta.</p>\n" +
        "        </div>\n" +
        "        <img style=\"max-width: 1200px;\" src=\"../image/marathon/image4.jpg\">\n" +
        "        <img style=\"max-width: 1200px;\" src=\"../image/marathon/image8.jpg\">\n" +
        "        <img style=\"max-width: 1200px;\" src=\"../image/marathon/image9.jpg\">\n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Xây dựng văn hóa công ty</h3>\n" +
        "            <p>Team building giúp xây dựng và củng cố văn hóa công ty, tạo ra một môi trường làm việc tích cực và thân thiện. Văn hóa công ty mạnh mẽ không chỉ giúp thu hút và giữ chân nhân tài mà còn tăng cường hiệu suất làm việc của toàn đội ngũ.</p>\n" +
        "        </div>\n" +
        "        <img style=\"max-width: 1200px;\" src=\"../image/marathon/image5.jpg\">\n" +
        "        <img style=\"max-width: 1200px;\" src=\"../image/marathon/image10.jpg\">\n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Kết Luận</h3>\n" +
        "            <p>Hoạt động chạy marathon cho công ty không chỉ là một sự kiện thể thao mà còn là một công cụ mạnh mẽ để xây dựng đội ngũ, thúc đẩy sức khỏe và nâng cao tinh thần làm việc. Với sự chuẩn bị kỹ lưỡng và sự tham gia nhiệt tình của các nhân viên, công ty có thể tạo ra một sự kiện đáng nhớ, mang lại nhiều lợi ích lâu dài cho cả cá nhân và tổ chức. Hãy bắt đầu lên kế hoạch cho cuộc chạy marathon tiếp theo và tận hưởng những giá trị tuyệt vời mà nó mang lại!</p>\n" +
        "        </div>\n" +
        "    </div>"
    return (
        <div dangerouslySetInnerHTML={{ __html: html }}>
            
        </div>
    );
};

export default Marathon;
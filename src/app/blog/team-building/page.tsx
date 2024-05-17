import React from 'react';

const TeamBuilding = () => {
    const html = "<div style=\"max-width: 1200px;margin-left: auto;margin-right: auto; margin-top: 100px;margin-bottom: 100px;padding: 15px;\">\n" +
        "        <h1>Chương trình hoạt động: Team Building</h1>\n" +
        "        <h3 style=\"font-size: 20px;\">19-10-2023</h3>\n" +
        "        <p>Vào ngày 19 tháng 10 năm 2023, Sano Media đã tổ chức hoạt động team building đầy niềm vui và ý nghĩa khi toàn thể nhân sự Công ty. Nhằm tạo sự gắn kết giữa người với người giữa các thành viên trong Công ty</p>\n" +
        "        <img style=\"max-width: 1200px;\" src=\"../image/team-building/image6.jpg\">\n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Khám Phá Team Building: Xây Dựng Đội Ngũ Vững Mạnh và Đoàn Kết</h3>\n" +
        "            <p>Trong môi trường ngày càng cạnh tranh và biến động, việc xây dựng một đội ngũ làm việc đoàn kết và hiệu quả trở nên quan trọng hơn bao giờ hết. Team building - xây dựng đội ngũ - đã trở thành một hoạt động không thể thiếu đối với các công ty, tổ chức muốn thúc đẩy sự hợp tác, tinh thần đồng đội và hiệu suất làm việc. Hãy cùng khám phá những lợi ích và ý nghĩa của các hoạt động team building thông qua bài viết này.</p>\n" +
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
        "                margin-bottom: 15px;width: 100%\n" +
        "            }\n" +
        "        </style>\n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Nâng cao tinh thần đồng đội</h3>\n" +
        "            <p>Team building giúp các thành viên trong nhóm hiểu rõ hơn về nhau, từ đó tăng cường sự tin tưởng và hỗ trợ lẫn nhau. Qua các hoạt động chung, họ học cách làm việc cùng nhau, chia sẻ ý tưởng và giải quyết vấn đề một cách hiệu quả.</p>\n" +
        "        </div>\n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Cải thiện kỹ năng giao tiếp</h3>\n" +
        "            <p>Khi được tham gia vào các hoạt động sáng tạo và thách thức, các thành viên có cơ hội để phát huy sự sáng tạo và tìm ra những giải pháp mới mẻ cho các vấn đề. Team building khuyến khích tư duy sáng tạo và khám phá tiềm năng của mỗi cá nhân.</p>\n" +
        "        </div>\n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Tăng cường sự sáng tạo</h3>\n" +
        "            <p>Với mỗi người tham dự, Gala Dinner không chỉ là một sự kiện sang trọng mà còn là một trải nghiệm tuyệt vời và ý nghĩa. Từ việc được thưởng thức những món ăn ngon và hương vị độc đáo đến việc tham gia vào các hoạt động giải trí mang lại không khí trẻ trung,năng động, đậm nét văn hoá của Công ty. Mỗi khoảnh khắc trong Gala Dinner đều là một kỷ niệm đáng nhớ.</p>\n" +
        "        </div>\n" +
        "        <img style=\"max-width: 1200px;\" src=\"../image/team-building/image6.jpg\">\n" +
        "        <img style=\"max-width: 1200px;\" src=\"../image/team-building/image10.jpg\">\n" +
        "    \n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Giảm căng thẳng và áp lực</h3>\n" +
        "            <p>Team building cung cấp một không gian thư giãn và vui vẻ, giúp giảm bớt căng thẳng và áp lực công việc. Điều này không chỉ cải thiện tâm trạng của các thành viên mà còn tăng cường sự hài lòng và động lực làm việc.</p>\n" +
        "        </div>\n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Xây dựng văn hóa công ty</h3>\n" +
        "            <p>Team building giúp xây dựng và củng cố văn hóa công ty, tạo ra một môi trường làm việc tích cực và thân thiện. Văn hóa công ty mạnh mẽ không chỉ giúp thu hút và giữ chân nhân tài mà còn tăng cường hiệu suất làm việc của toàn đội ngũ.</p>\n" +
        "        </div>\n" +
        "        <img style=\"max-width: 1200px;\" src=\"../image//team-building/image8.jpg\">\n" +
        "        <img style=\"max-width: 1200px;\" src=\"../image//team-building/image12.jpg\">\n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Kết Luận</h3>\n" +
        "            <p>Team building không chỉ là một hoạt động giải trí mà còn là một công cụ quan trọng để xây dựng một đội ngũ vững mạnh và hiệu quả. Thông qua các hoạt động này, các thành viên có cơ hội để hiểu rõ hơn về nhau, cải thiện kỹ năng làm việc nhóm và tạo ra một môi trường làm việc tích cực. Đầu tư vào team building là đầu tư vào tương lai của doanh nghiệp, giúp tạo ra một đội ngũ đoàn kết, sáng tạo và luôn sẵn sàng đối mặt với mọi thách thức.</p>\n" +
        "        </div>\n" +
        "    </div>"
    return (
        <div dangerouslySetInnerHTML={{ __html: html }}>

        </div>
    );
};

export default TeamBuilding;
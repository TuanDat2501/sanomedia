import React from 'react';

const Training = () => {
    const html = "<div style=\"max-width: 1200px;margin-left: auto;margin-right: auto; margin-top: 100px;margin-bottom: 100px\">\n" +
        "        <h1>Chương trình hoạt động: Đào tạo nội bộ</h1>\n" +
        "        <h3 style=\"font-size: 20px;\">19-08-2023</h3>\n" +
        "        <p>Sano Media có tổ chức hoạt động đào tạo nội bộ thường niên cho toàn bộ thành viên trong Công ty nhằm nâng cao kiến thức, nhận thức cho mọi người.</p>\n" +
        "        <img style=\"max-width: 1200px;\" src=\"/image/training/image1.jpg\">\n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Khám Phá Hoạt Động Đào Tạo Nội Bộ Cho Công Ty: Nâng Cao Năng Lực và Gắn Kết Đội Ngũ</h3>\n" +
        "            <p>Trong bối cảnh cạnh tranh ngày càng gay gắt, việc đầu tư vào hoạt động đào tạo nội bộ cho công ty trở nên vô cùng quan trọng. Đào tạo nội bộ không chỉ giúp nâng cao năng lực chuyên môn của nhân viên mà còn tạo ra một môi trường làm việc tích cực, thúc đẩy sự gắn kết và lòng trung thành đối với công ty. Hãy cùng tìm hiểu về những lợi ích và cách tổ chức hiệu quả hoạt động đào tạo nội bộ qua bài viết này.</p>\n" +
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
        "            <h3>Nâng Cao Kỹ Năng Chuyên Môn</h3>\n" +
        "            <p>Đào tạo nội bộ giúp nhân viên cập nhật và nâng cao kỹ năng chuyên môn, từ đó cải thiện hiệu suất làm việc và chất lượng công việc. Các khóa đào tạo có thể bao gồm kỹ năng công nghệ, quản lý dự án, kỹ năng giao tiếp và làm việc nhóm.</p>\n" +
        "        </div>\n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Tạo Cơ Hội Phát Triển Cá Nhân</h3>\n" +
        "            <p>Thông qua các chương trình đào tạo, nhân viên có cơ hội phát triển bản thân, khám phá tiềm năng và định hướng sự nghiệp. Điều này giúp họ cảm thấy được đánh giá cao và có động lực cống hiến cho công ty.</p>\n" +
        "        </div>\n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Tăng Cường Sự Gắn Kết Đội Ngũ</h3>\n" +
        "            <p>Các hoạt động đào tạo nội bộ thường đòi hỏi sự tham gia và hợp tác của các thành viên, từ đó tăng cường tinh thần đồng đội và sự gắn kết trong công ty. Khi cùng nhau học hỏi và phát triển, mối quan hệ giữa các nhân viên sẽ trở nên chặt chẽ hơn.</p>\n" +
        "        </div>\n" +
        "        <img style=\"max-width: 1200px;\" src=\"/image/training/image2.jpg\">\n" +
        "        <img style=\"max-width: 1200px;\" src=\"/image/training/image3.jpg\">\n" +
        "    \n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Thích Nghi Nhanh Chóng Với Thay Đổi</h3>\n" +
        "            <p>Đào tạo nội bộ giúp nhân viên nhanh chóng thích nghi với những thay đổi trong công việc và thị trường. Các chương trình đào tạo liên tục và kịp thời sẽ giúp đội ngũ luôn sẵn sàng đối mặt với những thách thức mới.</p>\n" +
        "        </div>\n" +
        "        <img style=\"max-width: 1200px;\" src=\"/image/training/image4.jpg\">\n" +
        "        <img style=\"max-width: 1200px;\" src=\"/image/training/image8.jpg\">\n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Xây dựng văn hóa công ty</h3>\n" +
        "            <p>Team building giúp xây dựng và củng cố văn hóa công ty, tạo ra một môi trường làm việc tích cực và thân thiện. Văn hóa công ty mạnh mẽ không chỉ giúp thu hút và giữ chân nhân tài mà còn tăng cường hiệu suất làm việc của toàn đội ngũ.</p>\n" +
        "        </div>\n" +
        "        <div class=\"paragraph\">\n" +
        "            <h2>Cách Thức Tổ Chức Hoạt Động Đào Tạo Nội Bộ</h2>\n" +
        "            <div class=\"paragraph\">\n" +
        "                <h3>Xác Định Nhu Cầu Đào Tạo</h3>\n" +
        "                <p>Bắt đầu bằng việc đánh giá nhu cầu đào tạo của công ty. Xác định các kỹ năng và kiến thức cần thiết để đạt được mục tiêu kinh doanh. Điều này có thể thực hiện thông qua khảo sát, phỏng vấn và đánh giá hiệu suất làm việc của nhân viên.</p>\n" +
        "            </div>\n" +
        "            <img style=\"max-width: 1200px;\" src=\"/image/training/image2.jpg\">\n" +
        "            <div class=\"paragraph\">\n" +
        "                <h3>Lên Kế Hoạch Đào Tạo Chi Tiết</h3>\n" +
        "                <p>Dựa trên nhu cầu đào tạo, xây dựng kế hoạch chi tiết cho các chương trình đào tạo. Kế hoạch cần bao gồm mục tiêu, nội dung, phương pháp và thời gian đào tạo. Đảm bảo rằng các khóa học được thiết kế phù hợp với từng đối tượng nhân viên.</p>\n" +
        "            </div>\n" +
        "            <img style=\"max-width: 1200px;\" src=\"/image/training/image5.jpg\">\n" +
        "            <div class=\"paragraph\">\n" +
        "                <h3>Tận Dụng Nguồn Lực Nội Bộ</h3>\n" +
        "                <p>Tận dụng kiến thức và kinh nghiệm của các chuyên gia nội bộ để thực hiện đào tạo. Các quản lý, trưởng phòng và nhân viên giàu kinh nghiệm có thể chia sẻ kiến thức và hướng dẫn cho các đồng nghiệp, tạo ra môi trường học tập và phát triển liên tục.</p>\n" +
        "            </div>\n" +
        "            <div class=\"paragraph\">\n" +
        "                <h3>Đánh Giá và Điều Chỉnh</h3>\n" +
        "                <p>Sau mỗi khóa đào tạo, thực hiện đánh giá hiệu quả để xác định mức độ đạt được mục tiêu đề ra. Thu thập phản hồi từ nhân viên để điều chỉnh và cải tiến các chương trình đào tạo cho phù hợp hơn với nhu cầu thực tế.</p>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        \n" +
        "        <div class=\"paragraph\">\n" +
        "            <h3>Kết Luận</h3>\n" +
        "            <p>Hoạt động đào tạo nội bộ không chỉ là một yếu tố quan trọng để nâng cao năng lực chuyên môn mà còn góp phần xây dựng một đội ngũ nhân viên đoàn kết và hiệu quả. Với một kế hoạch đào tạo hợp lý và sự đầu tư đúng mức, công ty có thể tạo ra môi trường làm việc tích cực, thúc đẩy sự phát triển cá nhân và sự thành công chung. Đừng bỏ lỡ cơ hội để nâng cao năng lực và gắn kết đội ngũ của bạn thông qua các hoạt động đào tạo nội bộ.</p>\n" +
        "        </div>\n" +
        "    </div>"
    return (
        <div dangerouslySetInnerHTML={{__html:html}}>

        </div>
    );
};

export default Training;
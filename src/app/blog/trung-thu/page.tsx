'use client'
import React from 'react';
import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const Training = () => {
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
            <h1>Trao Quà Trung Thu: Gắn Kết Tình Cảm, Nâng Cao Tinh Thần Đoàn Kết</h1>
            <h3 style={{ fontSize: "20px" }}>15-09-2024</h3>
            <p>Trung thu không chỉ là dịp đặc biệt để gia đình sum họp, mà còn là cơ hội để các công ty thể hiện sự quan tâm và tri ân đối với nhân viên – những người đã góp phần tạo nên thành công cho doanh nghiệp. Trao quà trung thu cho nhân viên không chỉ là hành động ý nghĩa mà còn mang lại nhiều giá trị gắn kết trong văn hóa doanh nghiệp.</p>
            <Image width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/training%2Fimage1.jpg?alt=media&token=7ac82f3f-fd81-4ecf-b030-bcdbfe98ffc0"
                alt="image1" />
            <div className="paragraph">
                <h3>Khám Phá Hoạt Động Đào Tạo Nội Bộ Cho Công Ty: Nâng Cao Năng Lực và Gắn Kết Đội Ngũ</h3>
                <p>Trong bối cảnh cạnh tranh ngày càng gay gắt, việc đầu tư vào hoạt động đào tạo nội bộ cho công ty trở
                    nên vô cùng quan trọng. Đào tạo nội bộ không chỉ giúp nâng cao năng lực chuyên môn của nhân viên mà
                    còn tạo ra một môi trường làm việc tích cực, thúc đẩy sự gắn kết và lòng trung thành đối với công
                    ty. Hãy cùng tìm hiểu về những lợi ích và cách tổ chức hiệu quả hoạt động đào tạo nội bộ qua bài
                    viết này.</p>
            </div>
            <div className="paragraph">
                <h3>Nâng Cao Kỹ Năng Chuyên Môn</h3>
                <p>Đào tạo nội bộ giúp nhân viên cập nhật và nâng cao kỹ năng chuyên môn, từ đó cải thiện hiệu suất làm
                    việc và chất lượng công việc. Các khóa đào tạo có thể bao gồm kỹ năng công nghệ, quản lý dự án, kỹ
                    năng giao tiếp và làm việc nhóm.</p>
            </div>
            <div className="paragraph">
                <h3>Tạo Cơ Hội Phát Triển Cá Nhân</h3>
                <p>Thông qua các chương trình đào tạo, nhân viên có cơ hội phát triển bản thân, khám phá tiềm năng và
                    định hướng sự nghiệp. Điều này giúp họ cảm thấy được đánh giá cao và có động lực cống hiến cho công
                    ty.</p>
            </div>
            <div className="paragraph">
                <h3>Tăng Cường Sự Gắn Kết Đội Ngũ</h3>
                <p>Các hoạt động đào tạo nội bộ thường đòi hỏi sự tham gia và hợp tác của các thành viên, từ đó tăng
                    cường tinh thần đồng đội và sự gắn kết trong công ty. Khi cùng nhau học hỏi và phát triển, mối quan
                    hệ giữa các nhân viên sẽ trở nên chặt chẽ hơn.</p>
            </div>
            <Image alt="image" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }} src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/training%2Fimage2.jpg?alt=media&token=c761c021-7ed4-4e5d-8410-601097879f10" />
            <Image alt="image" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }} src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/training%2Fimage3.jpg?alt=media&token=239b52d2-bb59-4cd0-b1aa-34a4bd68967e" />

            <div className="paragraph">
                <h3>Thích Nghi Nhanh Chóng Với Thay Đổi</h3>
                <p>Đào tạo nội bộ giúp nhân viên nhanh chóng thích nghi với những thay đổi trong công việc và thị
                    trường. Các chương trình đào tạo liên tục và kịp thời sẽ giúp đội ngũ luôn sẵn sàng đối mặt với
                    những thách thức mới.</p>
            </div>
            <Image alt="image" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }} src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/training%2Fimage4.jpg?alt=media&token=6ba77ab5-69d4-44d3-ab84-13261eb9b7dc" />
            <Image alt="image" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }} src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/training%2Fimage8.jpg?alt=media&token=85612bdc-e08a-4ab8-af69-6242571f69f1" />
            <div className="paragraph">
                <h3>Xây dựng văn hóa công ty</h3>
                <p>Team building giúp xây dựng và củng cố văn hóa công ty, tạo ra một môi trường làm việc tích cực và
                    thân thiện. Văn hóa công ty mạnh mẽ không chỉ giúp thu hút và giữ chân nhân tài mà còn tăng cường
                    hiệu suất làm việc của toàn đội ngũ.</p>
            </div>
            <div className="paragraph">
                <h2>Cách Thức Tổ Chức Hoạt Động Đào Tạo Nội Bộ</h2>
                <div className="paragraph">
                    <h3>Xác Định Nhu Cầu Đào Tạo</h3>
                    <p>Bắt đầu bằng việc đánh giá nhu cầu đào tạo của công ty. Xác định các kỹ năng và kiến thức cần
                        thiết để đạt được mục tiêu kinh doanh. Điều này có thể thực hiện thông qua khảo sát, phỏng vấn
                        và đánh giá hiệu suất làm việc của nhân viên.</p>
                </div>
                <Image alt="image" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                    style={{ maxWidth: "1200px" }} src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/training%2Fimage2.jpg?alt=media&token=c761c021-7ed4-4e5d-8410-601097879f10" />
                <div className="paragraph">
                    <h3>Lên Kế Hoạch Đào Tạo Chi Tiết</h3>
                    <p>Dựa trên nhu cầu đào tạo, xây dựng kế hoạch chi tiết cho các chương trình đào tạo. Kế hoạch cần
                        bao gồm mục tiêu, nội dung, phương pháp và thời gian đào tạo. Đảm bảo rằng các khóa học được
                        thiết kế phù hợp với từng đối tượng nhân viên.</p>
                </div>
                <Image alt="image" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                    style={{ maxWidth: "1200px" }} src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/training%2Fimage5.jpg?alt=media&token=3f4d7c51-cc3d-49d9-91d1-f8e637fa6c8b" />
                <div className="paragraph">
                    <h3>Tận Dụng Nguồn Lực Nội Bộ</h3>
                    <p>Tận dụng kiến thức và kinh nghiệm của các chuyên gia nội bộ để thực hiện đào tạo. Các quản lý,
                        trưởng phòng và nhân viên giàu kinh nghiệm có thể chia sẻ kiến thức và hướng dẫn cho các đồng
                        nghiệp, tạo ra môi trường học tập và phát triển liên tục.</p>
                </div>
                <div className="paragraph">
                    <h3>Đánh Giá và Điều Chỉnh</h3>
                    <p>Sau mỗi khóa đào tạo, thực hiện đánh giá hiệu quả để xác định mức độ đạt được mục tiêu đề ra. Thu
                        thập phản hồi từ nhân viên để điều chỉnh và cải tiến các chương trình đào tạo cho phù hợp hơn
                        với nhu cầu thực tế.</p>
                </div>
            </div>

            <div className="paragraph">
                <h3>Kết Luận</h3>
                <p>Hoạt động đào tạo nội bộ không chỉ là một yếu tố quan trọng để nâng cao năng lực chuyên môn mà còn
                    góp phần xây dựng một đội ngũ nhân viên đoàn kết và hiệu quả. Với một kế hoạch đào tạo hợp lý và sự
                    đầu tư đúng mức, công ty có thể tạo ra môi trường làm việc tích cực, thúc đẩy sự phát triển cá nhân
                    và sự thành công chung. Đừng bỏ lỡ cơ hội để nâng cao năng lực và gắn kết đội ngũ của bạn thông qua
                    các hoạt động đào tạo nội bộ.</p>
            </div>
        </div>
    );
};

export default Training;
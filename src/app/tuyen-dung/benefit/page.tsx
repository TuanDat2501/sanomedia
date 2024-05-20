import React from 'react';
import './style.scss'
import ISalary from "@/icon/ISalary";
import IUser from "@/icon/IUser";
import ICalendar1 from "@/icon/ICalendar1";
import ILocate from "@/icon/ILocate";
import IEmail from "@/icon/IEmail";
import IEmail1 from "@/icon/IEmail1";
import IPhone from "@/icon/IPhone";
import IPhone1 from "@/icon/IPhone1";
import ButtonRed from "@/app/component/button-red/ButtonRed";

const Benefit = () => {
    return (
        <div className="main-benefit">
            <h1>Editor</h1>
            <section className="job-detail">
                <div className="items-job">
                    <div className="item-job-detail">
                        <div className="icon-item">
                            <ISalary></ISalary>
                        </div>
                        <text>Mức lương</text>
                        <p>8-15M</p>
                    </div>
                    <div className="item-job-detail">
                        <div className="icon-item">
                            <IUser></IUser>
                        </div>
                        <text>Số lượng</text>
                        <p>3</p>
                    </div>
                    <div className="item-job-detail">
                        <div className="icon-item">
                            <ICalendar1></ICalendar1>
                        </div>
                        <text>Hạn tuyển dụng</text>
                        <p>12/04/2024</p>
                    </div>
                    <div className="item-job-detail">
                        <div className="icon-item">
                            <ILocate color={"#f8cccc"}></ILocate>
                        </div>
                        <text>Địa chỉ làm việc</text>
                        <p>Hoàng Văn Thụ, Bắc Giang</p>
                    </div>
                </div>
            </section>
            <section className="job description-job">
                <h2>Mô tả công việc</h2>
                <ul>
                    <li>Dựng video, cắt ghép các video để tạo thành 1 video hoàn chỉnh theo kịch
                        bản có sẵn , nguồn có sẵn.
                    </li>
                    <li>
                        Định hướng nội dung và hình ảnh trong video<br/>
                        (Biên tập, chỉnh sửa video lồng ghép âm thanh, hình ảnh, hiệu ứng...cho phù hợp)
                    </li>
                </ul>
            </section>
            <section className="job required-job">
                <h2>yêu cầu công việc</h2>
                <ul>
                    <li>Nam/Nữ tuổi từ 20-25</li>
                    <li>Biết sử dụng cơ bản một số phần mềm chỉnh sửa video: phần mềm Adobe
                        Premiere, PTS ….
                    </li>
                    <li>Tư duy sáng tạo, nắm bắt các xu hướng nội dung video</li>
                    <li>Làm việc cẩn thận chỉn chu.</li>
                </ul>
            </section>
            <section className="job treatment">
                <h2>Đãi ngộ</h2>
                <ul>
                    <li>Lương thử việc 6.000.000</li>
                    <li>Lương Chính thức 8.000.000+ thưởng (theo doanh số kênh + thưởng game thi đua) +
                        lương thâm niên</li>
                    <li>Thu nhập trung bình 12.000.000 - 15.000.000đ/tháng</li>
                    <li>Môi trường làm việc năng động, nhân sự trẻ , teamwork tốt</li>
                    <li>Được thỏa sức học tập phát triển bản thân cũng như các kỹ năng chuyên môn</li>
                    <li>Chế độ bảo hiểm, phụ cấp đầy đủ</li>
                    <li>Được cấp máy tính làm việc</li>
                </ul>
            </section>
            <section className="job contact">
                <h2>Ứng tuyển</h2>
                <p>Ứng viên có thể liên hệ và gửi thông tin qua: </p>
                <div className="detail-contact">
                    <span><IEmail1></IEmail1></span>
                    <text>vanns@sanogroup.tv</text>
                </div>
                <div className="detail-contact">
                    <span><IPhone1 width="32px" height="32px"></IPhone1></span>
                    <text>033 576 4485</text>
                </div>
                <p>Hoặc điền thông tin tại đây:</p>
                <div className="btn-apply">
                <ButtonRed text="Ứng tuyển"></ButtonRed>
                </div>
            </section>
        </div>
    );
};

export default Benefit;
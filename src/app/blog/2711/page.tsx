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
            <h1>Nhận thưởng hằng ngày : Ghi nhận và trao thưởng dựa trên kết quả công việc</h1>
            <h3 style={{ fontSize: "20px" }}>27-11-2024</h3>
            <p>Nhận thưởng hằng ngày tại công ty không chỉ là một chính sách khích lệ mà còn là cách hiệu quả để thúc đẩy tinh thần làm việc, tạo động lực và xây dựng môi trường doanh nghiệp năng động. Vậy tại sao nhận thưởng hằng ngày lại quan trọng, và làm sao để áp dụng hiệu quả? Hãy cùng tìm hiểu qua bài viết này!</p>
            <div className="paragraph">
                <h2>1. Nhận Thưởng Hằng Ngày</h2>
                <p>Nhận thưởng hằng ngày là hình thức khuyến khích nhân viên thông qua việc ghi nhận và trao thưởng dựa trên kết quả công việc hoặc hành vi tích cực trong ngày.</p>
            </div>
            
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2711%2F2024_11_27_08_18_IMG_3087.JPG?alt=media&token=178847e0-b3c2-4473-a3c7-fe74e2986065"
                alt="image1" />
            <br />
            <div className="paragraph">
                <h3>1. Ý Nghĩa Của Việc Nhận Thưởng Hằng Ngày</h3>
                <p>Nhận thưởng hằng ngày là cách doanh nghiệp khen thưởng những cá nhân hoặc tập thể có đóng góp nổi bật trong ngày. Đây có thể là phần thưởng cho việc hoàn thành chỉ tiêu, đạt kết quả xuất sắc, hoặc thể hiện tinh thần làm việc tích cực.</p>
                <p>Không chỉ là một món quà vật chất, việc nhận thưởng hằng ngày còn mang lại giá trị tinh thần, khuyến khích nhân viên cố gắng hơn mỗi ngày.</p>
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
                <h2>2. Lợi Ích Vượt Trội Của Chính Sách Nhận Thưởng Hằng Ngày</h2>
                <h3>2.1. Tăng Tinh Thần Làm Việc</h3>
                <p>Khi nỗ lực được ghi nhận ngay lập tức, nhân viên sẽ cảm thấy được coi trọng, từ đó tạo động lực để tiếp tục phát huy. Từ đó giúp cho tinh thần từng cá nhân sẽ được cải thiện.</p>
                <br/>
                <h3>2.2. Gắn Kết Đội Ngũ</h3>
                <p>Phần thưởng không chỉ là sự công nhận cá nhân mà còn thúc đẩy tinh thần làm việc nhóm, tăng sự đoàn kết giữa các thành viên.</p>
                <br/>
                <h3>2.3. Nâng Cao Hiệu Quả</h3>
                <p>Với những mục tiêu ngắn hạn được khích lệ mỗi ngày, hiệu suất tổng thể của cả đội ngũ sẽ được cải thiện, góp phần thúc đẩy kết quả cho nhóm cũng như cả Công ty</p>
            </div>
            {/*  <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage8.jpg?alt=media&token=02ac3acb-db30-4420-a058-ed0b6a5ed070" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage10.jpg?alt=media&token=61874af1-0fea-4cb9-b838-b020ca23793d" /> */}
            <div className="paragraph">
                <h2>3. Cách Áp Dụng Chính Sách Nhận Thưởng Hằng Ngày Hiệu Quả</h2>
                <p>Không khí của làm việc được khuấy động bởi hoạt động trao thưởng hằng ngày. Để tạo ra một ngày làm việc đầy năng lượng và đạt hiệu quả cao nhất</p>
                <br/>
                <h3>3.1. Xác Định Rõ Ràng Tiêu Chí Thưởng</h3>
                <p>Các tiêu chí cần minh bạch, cụ thể để nhân viên biết được họ cần làm gì để đạt phần thưởng. Ví dụ:</p>
                <ul style={{ paddingLeft: "30px"}}>
                    <li>Hoàn thành KPI vượt mức.</li>
                    <li>Chất lượng công việc cải tiến</li>
                </ul>
                <br/>
                <h3>3.2. Tạo Sự Công Bằng</h3>
                <p>Đảm bảo việc trao thưởng được thực hiện công khai, minh bạch để tránh sự so sánh không đáng có trong nội bộ.</p>
                <br/>
            </div>
            <div className="paragraph">
                <h3>Kết Luận</h3>
                <p>Chính sách nhận thưởng hằng ngày là một công cụ tuyệt vời để nâng cao tinh thần làm việc và gắn kết đội ngũ nhân viên. Tuy nhiên, để đạt hiệu quả tối ưu, doanh nghiệp cần triển khai đúng cách, kết hợp sự sáng tạo và sự công bằng trong cách khen thưởng.</p>
                <p>Hãy bắt đầu xây dựng môi trường làm việc tích cực với chính sách này, và bạn sẽ thấy rõ sự thay đổi trong thái độ, hiệu suất của nhân viên, cũng như thành công chung của công ty.</p>
            </div>
        </div>
    );
};

export default E2711;
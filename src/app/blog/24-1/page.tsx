'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const E2401 = () => {
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
            <h1>Thưởng Tết Cuối Năm: Sự Trân Trọng Và Gắn Kết</h1>
            <h3 style={{ fontSize: "20px" }}>24-1-2025</h3>
            <div className="paragraph">
                <p>Khi những ngày cuối năm gần kề, việc trao thưởng Tết trở thành một phần quan trọng trong văn hóa doanh nghiệp. Đây không chỉ là cách thể hiện sự ghi nhận đóng góp của nhân viên mà còn mang lại động lực lớn lao cho họ bước sang năm mới.</p>
            </div>
            <div className="paragraph">
                <p>Thưởng Tết thể hiện sự trân trọng của công ty đối với những nỗ lực không ngừng nghỉ trong suốt năm. Khoản thưởng này, dù lớn hay nhỏ, đều mang theo thông điệp cổ vũ tinh thần và ghi nhận những đóng góp tích cực từ từng cá nhân trong tập thể.</p>
                <p>Một chính sách thưởng Tết công bằng, minh bạch sẽ giúp nhân viên cảm nhận được giá trị và địa vị của mình trong công ty. Nhiều doanh nghiệp đã linh hoạt áp dụng các tiêu chí như kết quả công việc, động góp nhóm và thời gian công hiến để đánh giá và trao thưởng một cách hợp lý.</p>
            </div>
            <video controls>
                <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2401%2F0122(1).mp4?alt=media&token=5bb3065d-b885-4eca-97ed-a78da76516ac" type="video/mp4" />
            </video>
            <br />
            <div className="paragraph">
                <p>Thưởng Tết còn mang theo một khía cảnh đặc biệt: lan tỏả nồng ấm và tinh thần đoàn kết. Bến cạnh đó, động lực được tháp lên khi nhân viên có thể nhìn lại những nỗ lực của họ đã được công nhận xứng đáng.</p>
            </div>

            <div className="paragraph">
                <p>Chính những khoản thưởng này là nguồn khích lệ giúp nhân viên bắt đầu năm mới với sự hào hức và tinh thần làm việc hết mình. Công ty về phấn mình chống nhìn thấy được tương lai được xây dựng bằng sự chung tay và đồng hành giữa lãnh đạo và tập thể.</p>
            </div>
        </div>
    );
};

export default E2401;
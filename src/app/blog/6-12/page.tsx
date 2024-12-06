'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const B612 = () => {
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
            <h1>Tuyên bố đầu giờ của công ty</h1>
            <h3 style={{ fontSize: "20px" }}>06-12-2024</h3>
            <p>Tuyên bố đầu giờ là một phần quan trọng trong văn hóa và chiến lược hoạt động của bất kỳ công ty nào. Đây là một cơ hội tuyệt vời để khởi động ngày làm việc mới, tạo động lực cho nhân viên và nhấn mạnh những mục tiêu trọng yếu. Vậy tuyên bố đầu giờ có vai trò như thế nào và làm thế nào để thực hiện hiệu quả? Cùng tìm hiểu ngay trong bài viết này!</p>
            {/* <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="/image/2010/image10.webp"
                alt="image1" />
            <br />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2711%2F2024_10_18_17_13_IMG_2429.png?alt=media&token=8e698ecb-096d-4249-a79a-3bdec6a36e2a"
                alt="image1" />
            <br /> */}
            <br/>
            <br/>
            <div className="paragraph">
                <h4>Lợi ích của tuyên bố đầu giờ đối với công ty:</h4>
                <li>Tuyên bố đầu giờ giúp tạo sự gắn kết giữa các nhân viên trong công ty. Khi mọi người cùng lắng nghe những mục tiêu chung, họ sẽ cảm thấy mình là một phần không thể thiếu trong sự thành công chung của công ty.</li>
                <li>Một tuyên bố tích cực sẽ giúp nhân viên bắt đầu ngày mới với tinh thần hứng khởi và quyết tâm. Điều này sẽ thúc đẩy hiệu suất làm việc và sự sáng tạo.</li>
                <li>Một tuyên bố đầu giờ thường xuyên nhắc lại những mục tiêu dài hạn của công ty, giúp nhân viên luôn nhớ và hướng tới những mục tiêu đó trong công việc hằng ngày.</li>
                <li>Đặc biệt trong môi trường làm việc căng thẳng, tuyên bố đầu giờ có thể giúp giảm bớt sự lo lắng của nhân viên, giúp họ cảm thấy thoải mái hơn khi bắt đầu một ngày mới.</li>
            </div>
            <br/>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F612%2FScreenshot%202024-12-06%20093833.png?alt=media&token=566fe9d7-f4e1-4f10-b647-8b0323819cff" />
            {/*  <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage8.jpg?alt=media&token=02ac3acb-db30-4420-a058-ed0b6a5ed070" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage10.jpg?alt=media&token=61874af1-0fea-4cb9-b838-b020ca23793d" /> */}
            <br/>
            <div className="paragraph">
                <h3>2. Ý Nghĩa Tuyên Bố Đầu Giờ</h3>
                <p>
                Tuyên bố đầu giờ là dịp để nhắc nhở nhân viên về những mục tiêu dài hạn và giá trị cốt lõi của công ty. Việc này giúp toàn bộ đội ngũ hướng tới một mục tiêu chung và duy trì sự đồng lòng trong công việc.
                </p>
                <p>Một tuyên bố đầu giờ giúp tạo ra sự gắn kết giữa các thành viên trong công ty. Khi nhân viên cùng nghe và cùng hướng đến những mục tiêu chung, họ cảm thấy mình là một phần của một tập thể lớn mạnh. Điều này không chỉ giúp tăng cường sự đoàn kết mà còn thúc đẩy sự hợp tác giữa các bộ phận và phòng ban trong công ty.</p>
                <p>Tuyên bố đầu giờ thường xuyên nhắc lại những giá trị cốt lõi và mục tiêu dài hạn của công ty. Điều này giúp nhân viên luôn nhớ về lý do họ đang làm việc và những mục tiêu lớn mà công ty đang hướng đến. Một tuyên bố rõ ràng về mục tiêu sẽ giúp mỗi cá nhân trong công ty cảm thấy rằng công việc của họ có ý nghĩa, dù là một công việc nhỏ hay lớn.</p>
            </div>
            <div className="paragraph">
                <h3>Kết Luận</h3>
                <p>Tuyên bố đầu giờ không chỉ là một hình thức giao tiếp thông thường mà là một phần quan trọng trong việc tạo dựng văn hóa công ty và động viên nhân viên. Bằng cách thực hiện tuyên bố đầu giờ một cách đúng đắn, các công ty không chỉ cải thiện hiệu quả làm việc mà còn tạo ra một môi trường làm việc gắn kết, tích cực. Hãy áp dụng tuyên bố đầu giờ vào công ty của bạn ngay hôm nay để thấy sự khác biệt trong năng suất và tinh thần làm việc của đội ngũ!</p>
            </div>
        </div>
    );
};

export default B612;
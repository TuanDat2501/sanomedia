'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const E2402 = () => {
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
            <h1>Năng Lượng Mỗi Sáng - Khởi Động Ngày Mới Đầy Hứng Khởi!</h1>
            <h3 style={{ fontSize: "20px" }}>24-2-2025</h3>
            <div className="paragraph">
                <p>Mỗi buổi sáng tại công ty không chỉ là khởi đầu cho một ngày làm việc mới mà còn là thời điểm để tất cả nhân viên cùng nhau nạp năng lượng, sẵn sàng bứt phá!</p>
            </div>
            <div className="paragraph">
                <p><strong>Tập thể dục – Đánh thức tinh thần, sẵn sàng chinh chiến!</strong>
                Chúng tôi bắt đầu ngày mới bằng những bài tập thể dục đơn giản nhưng đầy hứng khởi. Những động tác giãn cơ, khởi động nhẹ nhàng giúp tinh thần thoải mái, cơ thể tràn đầy năng lượng, và đặc biệt là kết nối mọi người lại gần nhau hơn.</p>
                <p><strong>Đọc tuyên bố – Cùng nhau khẳng định quyết tâm!</strong>
                Sau khi đã làm nóng cơ thể, cả công ty cùng nhau đọc tuyên bố về tinh thần làm việc và mục tiêu chung. Đây không chỉ là một nghi thức mà còn là lời nhắc nhở mỗi người về trách nhiệm, sự quyết tâm và khát vọng vươn xa. Khi tất cả cùng cất cao tiếng nói, năng lượng tích cực lan tỏa khắp văn phòng, tạo động lực mạnh mẽ để bắt đầu một ngày làm việc hiệu quả.</p>
            </div>
            <video controls>
                <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2402%2F0224(2).mp4?alt=media&token=4c4b65b8-6f6e-4f6a-96ca-3747884c8fa0" type="video/mp4" />
            </video>
            <br />
            <div className="paragraph">
                <p>Với những hoạt động đầy năng lượng này, mỗi ngày tại công ty không chỉ là làm việc mà còn là hành trình tràn đầy cảm hứng. Hãy cùng duy trì thói quen này và biến mỗi buổi sáng thành một bước đệm tuyệt vời để chinh phục mọi thử thách phía trước!</p>
            </div>
        </div>
    );
};

export default E2402;
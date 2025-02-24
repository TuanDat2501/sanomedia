'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const E2202 = () => {
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
            <h1>Thưởng Nóng Cực Cháy - Cho Những Chiến Binh Xuất Sắc</h1>
            <h3 style={{ fontSize: "20px" }}>22-2-2025</h3>
            <div className="paragraph">
                <p>Không gì tuyệt vời hơn khi những nỗ lực và cống hiến của anh chị em được ghi nhận một cách xứng đáng! Hôm nay, chúng ta cùng vinh danh những cá nhân xuất sắc với phần thưởng nóng cực cháy, dành riêng cho những nhân sự cực chất đã không ngừng bứt phá và đóng góp hết mình.</p>
            </div>
            <div className="paragraph">
                <p>Thành tích rực rỡ – Thưởng liền tay! Những cá nhân xuất sắc trong tháng đã chinh phục KPI ngoạn mục, mang lại những kết quả ấn tượng và góp phần tạo nên thành công chung của cả đội. Đây chính là phần thưởng xứng đáng cho những ngày làm việc hết công suất!</p>
                <p> Cống hiến hết mình – Nhận ngay phần thưởng! Mỗi nỗ lực đều đáng được trân trọng, và phần thưởng nóng lần này không chỉ là động lực mà còn là sự ghi nhận từ công ty dành cho những chiến binh luôn sẵn sàng "chiến" hết mình.</p>
            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2202%2F2025_02_22_08_14_IMG_0557.JPG?alt=media&token=3dc5afe9-57db-4e42-ab90-3a2c7daeee6b"
                alt="image1" />
            <br />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2202%2F2025_02_22_08_15_IMG_0558.JPG?alt=media&token=378c4741-b485-426c-abc7-9d972c17ee32"
                alt="image1" />
            <br />
            <div className="paragraph">
                <p>Buổi trao thưởng không chỉ ngập tràn niềm vui mà còn là nguồn động lực để toàn thể nhân viên tiếp tục bứt phá, nâng cao hiệu suất và hướng tới những thành công lớn hơn nữa. Hãy cùng nhau giữ vững tinh thần, tiếp tục gặt hái những thành tích rực rỡ và chinh phục mọi thử thách phía trước!</p>
            </div>
         
            <div className="paragraph">
                <p>Sẵn sàng bật chế độ “chiến binh” và rinh thưởng nóng chưa? Let’s go team!</p>
            </div>
        </div>
    );
};

export default E2202;
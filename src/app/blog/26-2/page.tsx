'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const E2602 = () => {
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
            <h1>Vinh Danh Nhân Viên Xuất Sắc – Thưởng KPI Mỗi Sáng!</h1>
            <h3 style={{ fontSize: "20px" }}>26-2-2025</h3>
            <div className="paragraph">
                <p>Mỗi buổi sáng tại công ty không chỉ là thời điểm khởi động một ngày làm việc mới mà còn là khoảnh khắc vinh danh những cá nhân xuất sắc đã hoàn thành và vượt chỉ tiêu KPI. Đây chính là nguồn động lực mạnh mẽ giúp cả tập thể thêm hứng khởi, sẵn sàng bứt phá!</p>
            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                                          alt={"image"} style={{ maxWidth: "1200px" }}
                                                                          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2602%2Fimg1.jpg?alt=media&token=77b93a82-bde6-468c-9a63-634176a1ad98" />
            <div className="paragraph">
                <p>
                <strong>Những gương mặt sáng giá của hôm nay!</strong>Từng cá nhân được xướng tên đều là những chiến binh thực thụ, không ngừng nỗ lực để đạt thành tích đáng tự hào. Họ không chỉ hoàn thành công việc xuất sắc mà còn lan tỏa tinh thần nhiệt huyết, thúc đẩy đồng đội cùng tiến lên.</p>
                <p>
                <strong>Phần thưởng xứng đáng cho sự cống hiến!</strong>
                Những phần thưởng KPI không chỉ là sự ghi nhận từ công ty mà còn là động lực để mỗi cá nhân tiếp tục bứt phá, đạt được những cột mốc cao hơn. Khoảnh khắc nhận thưởng với những nụ cười rạng rỡ, những tràng pháo tay vang lên chính là minh chứng cho tinh thần làm việc hăng say và cống hiến hết mình.</p>
            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                                                      alt={"image"} style={{ maxWidth: "1200px" }}
                                                                                      src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2602%2Fimg2.jpg?alt=media&token=9711e482-47e0-4019-9e67-a5ed73fe1c76" />
            <br />
            <div className="paragraph">
                <p>Mỗi ngày mới là một cơ hội để tỏa sáng, và ai cũng có thể trở thành người tiếp theo được vinh danh. Hãy cùng nhau nỗ lực, cùng nhau tiến lên và biến mỗi buổi sáng tại công ty thành một ngày đầy cảm hứng!</p>
            </div>
        </div>
    );
};

export default E2602;
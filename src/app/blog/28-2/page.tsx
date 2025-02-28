'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const E2802 = () => {
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
            <h1>Chúc mừng những gương mặt xuất sắc!</h1>
            <h3 style={{ fontSize: "20px" }}>28-2-2025</h3>
            <div className="paragraph">
                <p>Mỗi buổi sáng tại công ty là một hành trình mới đầy cảm hứng, và hôm nay chúng ta cùng vinh danh những cá nhân xuất sắc đã chinh phục KPI với kết quả ấn tượng! Đây chính là những chiến binh không ngừng nỗ lực, đóng góp tích cực vào sự phát triển chung của đội nhóm.</p>
            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                                          alt={"image"} style={{ maxWidth: "1200px" }}
                                                                          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2802%2F2025_02_28_08_10_IMG_0604.JPG?alt=media&token=b0f70471-83b7-4f23-87e9-7fbc22299b2b" />
            <div className="paragraph">
                <p>
                <strong> Gọi tên những ngôi sao sáng!</strong>Không chỉ hoàn thành công việc một cách xuất sắc, những gương mặt được vinh danh hôm nay còn thể hiện tinh thần trách nhiệm, sự sáng tạo và quyết tâm bứt phá. Họ chính là nguồn động lực mạnh mẽ, lan tỏa năng lượng tích cực đến tất cả mọi người.</p>
                <p>
                <strong>Phần thưởng xứng đáng!</strong>
                Với thành tích vượt trội, các cá nhân xuất sắc đã nhận được những phần thưởng xứng đáng. Những nụ cười rạng rỡ, những tràng pháo tay giòn giã là minh chứng rõ ràng nhất cho sự ghi nhận và khích lệ mà công ty dành cho họ.</p>
                <p>
                <strong>Ai sẽ là người tiếp theo?</strong>
                Mỗi ngày là một cơ hội để tỏa sáng. Hãy tiếp tục cố gắng, không ngừng phấn đấu để chinh phục mục tiêu và trở thành những gương mặt xuất sắc tiếp theo được vinh danh vào sáng mai!</p>
            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                                                      alt={"image"} style={{ maxWidth: "1200px" }}
                                                                                      src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2802%2F2025_02_28_08_11_IMG_0610.JPG?alt=media&token=b126f150-fc20-4b38-a781-a2d7488a1b77" />
            <br />
            <div className="paragraph">
                <p>Chúc mừng và cùng nhau hướng đến những thành tích ấn tượng hơn nữa!</p>
            </div>
        </div>
    );
};

export default E2802;
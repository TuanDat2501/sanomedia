'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const B312 = () => {
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
            <h1>Khen Thưởng Đội Ngũ Xuất Sắc: Tôn Vinh Những Cá Nhân Tạo Nên Thành Công Của Công Ty</h1>
            <h3 style={{ fontSize: "20px" }}>03-12-2024</h3>
            <p>Trong mỗi tổ chức, đội ngũ nhân viên là yếu tố quan trọng quyết định sự thành công và phát triển bền vững. Để ghi nhận những đóng góp xuất sắc và khích lệ tinh thần làm việc của nhân viên, việc tổ chức khen thưởng là một hoạt động không thể thiếu. Vào ngày đặc biệt này, công ty chúng tôi đã tổ chức lễ khen thưởng cho đội ngũ nhân viên xuất sắc, những người đã cống hiến không ngừng nghỉ để đưa công ty phát triển mạnh mẽ hơn.</p>
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
            <div className="paragraph">
                <h2>1. Tại sao khen thưởng đội ngũ xuất sắc lại quan trọng?</h2>
                <p>Khen thưởng là một phương thức hiệu quả để ghi nhận những nỗ lực và đóng góp của các cá nhân trong công ty. Điều này không chỉ giúp duy trì động lực làm việc mà còn thúc đẩy văn hóa công ty phát triển theo hướng tích cực. Khi nhân viên cảm thấy mình được công nhận và khen thưởng xứng đáng, họ sẽ càng nỗ lực hơn trong công việc và gắn bó lâu dài với công ty.</p>
            </div>
            <div className="container-image">
                {/*  <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                    alt={"image"} style={{ maxWidth: "1200px" }}
                    src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2Fimage2.jpg?alt=media&token=ebba21de-9839-4c8f-be7e-088181c61336" />
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                    alt={"image"} style={{ maxWidth: "1200px" }}
                    src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2Fimage3.jpg?alt=media&token=01efae48-4318-4941-9b5f-0f958eb39e64" /> */}
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                    alt={"image"} style={{ maxWidth: "1200px" }}
                    src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F312%2F2024_12_03_08_15_IMG_3133.JPG?alt=media&token=fca7625b-fc4e-4a3d-a950-314e6b0ef4fc" />
                <i>Vinh danh đội nhóm có thành tích vượt trội</i>
            </div>
            {/* <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2711%2FD78A837A-2EB7-4E81-952F-99339CA58CAD.JPG?alt=media&token=b163507d-184c-4241-9995-2dc063af0460"
                alt="image1" /> */}
            <div className="paragraph">
                <h3>2. Những thành tích nổi bật của đội ngũ xuất sắc</h3>
                <p>
                    Đội ngũ nhân viên của chúng tôi đã vượt qua nhiều thử thách và đạt được những thành tích đáng tự hào. Từ việc hoàn thành KPI đúng hạn đến việc cải thiện hiệu suất làm việc, mỗi cá nhân đều đóng góp vào sự thành công chung của công ty. Chính nhờ những đóng góp này, công ty chúng tôi đã đạt được những bước tiến vượt bậc trong ngành, không chỉ về doanh thu mà còn về uy tín thương hiệu.
                </p>
            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F312%2F2024_12_03_08_15_IMG_3136.JPG?alt=media&token=44c50777-487b-4fb8-8e17-7a787323ec7d" />
            {/*  <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage8.jpg?alt=media&token=02ac3acb-db30-4420-a058-ed0b6a5ed070" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage10.jpg?alt=media&token=61874af1-0fea-4cb9-b838-b020ca23793d" /> */}
                <i>Sự nỗ lực của cá nhân được ghi nhận hằng ngày</i>
            <div className="paragraph">
                <h3>3. Lễ khen thưởng ý nghĩa trong ngày hôm nay</h3>
                <p>Vào ngày hôm nay, chúng tôi tổ chức lễ khen thưởng để ghi nhận và tri ân các cá nhân xuất sắc. Những cá nhân này không chỉ thể hiện tài năng chuyên môn mà còn là những người luôn duy trì tinh thần làm việc tích cực, sáng tạo và cầu tiến. Các giải thưởng bao gồm chứng nhận, quà tặng giá trị và cơ hội thăng tiến, tất cả đều là sự công nhận xứng đáng cho những nỗ lực không mệt mỏi của họ.</p>

            </div>
            <div className="paragraph">
                <h3>Kết Luận</h3>
                <p>Lễ khen thưởng đội ngũ xuất sắc là dịp để công ty ghi nhận và tri ân những người đã đóng góp vào sự phát triển của tổ chức. Chúng tôi hy vọng rằng những phần thưởng này sẽ tiếp tục là động lực giúp các nhân viên phát huy tối đa năng lực và cống hiến cho sự thành công chung của công ty trong tương lai.</p>
                
            </div>
        </div>
    );
};

export default B312;
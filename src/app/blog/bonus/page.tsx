'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import {useMediaQuery} from "usehooks-ts";

const Bonus = () => {
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
            <h1>Chương Trình Khen Thưởng: Tôn Vinh Những Nỗ Lực Không Ngừng</h1>
            <h3 style={{fontSize: "20px"}}>22-05-2024</h3>
            <p>Khen thưởng là một phần không thể thiếu trong văn hóa doanh nghiệp của Sano Media. Đây không chỉ là cách
                để công ty ghi nhận và tôn vinh những nỗ lực và thành tích của nhân viên mà còn là động lực thúc đẩy
                tinh thần làm việc và sự cống hiến của toàn bộ đội ngũ. Chương trình khen thưởng định kỳ đã trở thành
                một hoạt động quan trọng, mang lại nhiều giá trị tích cực cho cả công ty và nhân viên.</p>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                   style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage1.jpg?alt=media&token=efcd8f56-9cba-4f36-b0c7-550ba6dd22e3"
                   alt="image1"/>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                   style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage7.jpg?alt=media&token=ed5b4caf-1405-405e-a07e-e3cccb78e3e3"
                   alt="image1"/>
            <div className="paragraph">
                <h3>Ghi nhận nỗ lực và thành tích của nhân viên:</h3>
                <p>Mỗi nhân viên đều có những đóng góp riêng biệt và chương trình khen thưởng giúp công ty ghi nhận
                    những đóng góp đó một cách xứng đáng.</p>
            </div>
            <div className="paragraph">
                <h3>Khuyến khích tinh thần làm việc:</h3>
                <p>Những phần thưởng là nguồn động viên to lớn, thúc đẩy nhân viên nỗ lực hơn trong công việc hàng
                    ngày.</p>
            </div>
            <div className="paragraph">
                <h2>Các Hình Thức Khen Thưởng</h2>
            </div>
            <div className="paragraph">
                <h3>1. Khen Thưởng Cá Nhân Xuất Sắc</h3>
                <p>Mỗi tháng, công ty sẽ tổ chức bình chọn và trao giải cho những cá nhân có thành tích xuất sắc nhất.
                    Tiêu chí đánh giá bao gồm hiệu suất làm việc, sự sáng tạo, và đóng góp tích cực cho dự án hoặc đội
                    nhóm.</p>
            </div>
            <div className="container-image">
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       alt={"image"} style={{maxWidth: "1200px"}}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2Fimage2.jpg?alt=media&token=ebba21de-9839-4c8f-be7e-088181c61336"/>
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       alt={"image"} style={{maxWidth: "1200px"}}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2Fimage3.jpg?alt=media&token=01efae48-4318-4941-9b5f-0f958eb39e64"/>
                <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       alt={"image"} style={{maxWidth: "1200px"}}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2Fimage4.jpg?alt=media&token=a3049f4d-e354-454f-8071-a6b3782b4db8"/>
            </div>
            <div className="paragraph">
                <h3>2. Khen Thưởng Đội Nhóm</h3>
                <p>Ngoài khen thưởng cá nhân, những đội nhóm có thành tích nổi bật trong các dự án lớn cũng sẽ được vinh
                    danh. Điều này giúp khích lệ tinh thần làm việc nhóm và sự hợp tác giữa các nhóm.</p>
            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                   alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage9.jpg?alt=media&token=86f65009-cd3a-45ce-8ea4-0d6e862c3416"/>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                   alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage8.jpg?alt=media&token=02ac3acb-db30-4420-a058-ed0b6a5ed070"/>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                   alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage10.jpg?alt=media&token=61874af1-0fea-4cb9-b838-b020ca23793d"/>
            <div className="paragraph">
                <h3>Kết Luận</h3>
                <p>Khen thưởng đội nhóm không chỉ là cách để Sano Media ghi nhận những nỗ lực và thành tích của các đội
                    nhóm mà còn là động lực thúc đẩy tinh thần làm việc và sự gắn kết giữa các thành viên. Chúng tôi tin
                    rằng, với sự đoàn kết và hợp tác, các đội nhóm tại Sano sẽ tiếp tục đạt được nhiều thành công
                    rực rỡ, góp phần vào sự phát triển bền vững của công ty. Chương trình khen thưởng đội nhóm sẽ luôn
                    là một phần quan trọng trong chiến lược phát triển và xây dựng văn hóa doanh nghiệp của chúng
                    tôi.</p>

            </div>
        </div>
    );
};

export default Bonus;
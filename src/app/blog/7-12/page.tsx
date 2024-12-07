'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const B712 = () => {
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
            <h1>Tổ Chức Sinh Nhật Cho Nhân Viên: Tăng Cường Gắn Kết Và Động Lực Làm Việc</h1>
            <h3 style={{ fontSize: "20px" }}>07-12-2024</h3>
            <p>Sinh nhật là một dịp đặc biệt trong cuộc đời mỗi người, và đối với nhân viên trong một công ty, việc tổ chức sinh nhật có thể là một cách tuyệt vời để thể hiện sự quan tâm, tôn trọng và xây dựng văn hóa công ty gắn kết. Việc tổ chức sinh nhật cho nhân viên không chỉ giúp họ cảm thấy được đánh giá cao mà còn đóng góp vào một môi trường làm việc tích cực, nơi mà mọi người cảm thấy vui vẻ, động viên và có động lực làm việc hơn.</p>
            {/* <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="/image/2010/image10.webp"
                alt="image1" />
            <br /> */}
            <br />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F712%2F2024_11_30_08_20_IMG_3114.JPG?alt=media&token=d1f8c5d6-9ef6-450f-af96-784abb1c2e7da"
                alt="image1" />
            <br />
            <div className="paragraph">
                <h4>Lợi Ích Của Việc Tổ Chức Sinh Nhật Cho Nhân Viên:</h4>
                <li>Khi một công ty tổ chức sinh nhật cho nhân viên, điều này không chỉ đơn giản là một dịp chúc mừng cá nhân mà còn là cơ hội để các nhân viên gắn kết với nhau. Buổi lễ sinh nhật sẽ giúp mọi người cảm thấy mình là một phần quan trọng của tổ chức, từ đó xây dựng tinh thần đồng đội vững mạnh.</li>
                <li>Việc tổ chức sinh nhật cho nhân viên cho thấy công ty không chỉ quan tâm đến công việc của họ mà còn chú ý đến những điều nhỏ nhặt, những yếu tố tạo nên hạnh phúc và sự hài lòng trong công việc. Đây là cách thể hiện sự tôn trọng và ghi nhận công sức của nhân viên trong suốt quá trình làm việc.</li>
                <li>Khi tổ chức sinh nhật cho nhân viên, công ty sẽ tạo ra một không gian làm việc thoải mái, vui vẻ. Đây là một dịp để mọi người nghỉ ngơi, thư giãn và có những giờ phút vui vẻ bên nhau. Một không khí vui vẻ sẽ giúp nhân viên có thể giảm bớt căng thẳng và làm việc hiệu quả hơn sau buổi lễ.</li>
                <li>Việc tổ chức sinh nhật cũng có thể là một cơ hội để công ty tôn vinh những đóng góp của nhân viên trong một năm qua. Ngoài phần quà sinh nhật, công ty cũng có thể kèm theo những lời khen ngợi, những đánh giá tích cực về thành tích công việc của nhân viên.</li>
            </div>
            <br/>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F712%2F2024_12_04_08_20_IMG_3149.JPG?alt=media&token=65d99838-a204-4cf1-8421-cec8c4f9c9ff" />
            {/*  <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage8.jpg?alt=media&token=02ac3acb-db30-4420-a058-ed0b6a5ed070" />
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                alt={"image"} style={{ maxWidth: "1200px" }}
                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/bonus%2F22-5%2Fimage10.jpg?alt=media&token=61874af1-0fea-4cb9-b838-b020ca23793d" /> */}
            <br/>
            {/* <div className="paragraph">
                <h3>2. Ý Nghĩa Tuyên Bố Đầu Giờ</h3>
                <p>
                Tuyên bố đầu giờ là dịp để nhắc nhở nhân viên về những mục tiêu dài hạn và giá trị cốt lõi của công ty. Việc này giúp toàn bộ đội ngũ hướng tới một mục tiêu chung và duy trì sự đồng lòng trong công việc.
                </p>
                <p>Một tuyên bố đầu giờ giúp tạo ra sự gắn kết giữa các thành viên trong công ty. Khi nhân viên cùng nghe và cùng hướng đến những mục tiêu chung, họ cảm thấy mình là một phần của một tập thể lớn mạnh. Điều này không chỉ giúp tăng cường sự đoàn kết mà còn thúc đẩy sự hợp tác giữa các bộ phận và phòng ban trong công ty.</p>
                <p>Tuyên bố đầu giờ thường xuyên nhắc lại những giá trị cốt lõi và mục tiêu dài hạn của công ty. Điều này giúp nhân viên luôn nhớ về lý do họ đang làm việc và những mục tiêu lớn mà công ty đang hướng đến. Một tuyên bố rõ ràng về mục tiêu sẽ giúp mỗi cá nhân trong công ty cảm thấy rằng công việc của họ có ý nghĩa, dù là một công việc nhỏ hay lớn.</p>
            </div> */}
            <div className="paragraph">
                <h3>Kết Luận</h3>
                <p>Tổ chức sinh nhật cho nhân viên không chỉ là một hoạt động vui nhộn mà còn là một chiến lược hiệu quả giúp nâng cao sự hài lòng và động lực làm việc trong công ty. Khi nhân viên cảm thấy mình được quan tâm và trân trọng, họ sẽ có xu hướng làm việc hết mình, gắn bó lâu dài với tổ chức. Chính vì vậy, mỗi công ty nên xem việc tổ chức sinh nhật cho nhân viên là một phần quan trọng trong chiến lược xây dựng môi trường làm việc tích cực và gắn kết.</p>
            </div>
        </div>
    );
};

export default B712;
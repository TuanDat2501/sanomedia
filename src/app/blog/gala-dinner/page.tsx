'use client'
import React from 'react';
import Image from "next/image";
import {useMediaQuery} from "usehooks-ts";
import './style.scss';
const GalaDinner = () => {
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
            <h1>Chương trình hoạt động: Gala Dinner</h1>
            <h3 style={{fontSize: "20px"}}>05-02-2024</h3>
            <p>Vào ngày 5 tháng 2 năm 2024, Sano Media đã tổ chức một đêm tiệc đầy niềm vui và ý nghĩa khi toàn thể
                nhân sự Công ty cùng gia đình cùng nhau nhìn lại hành trình một năm đầy biến động nhưng cũng không
                kém phần rực rỡ của Sano Media. Để rồi sau đó những giải thưởng vinh danh các cá nhân, tập thể xuất
                sắc trong năm qua đã được hô vang.</p>
            <Image loading="lazy" width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/gala-dinner%2Fimage19.jpg?alt=media&token=979253cb-49a1-4749-b515-cab87c4f10a2" alt="image1" />
            <Image loading="lazy" width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/gala-dinner%2Fimage24.jpg?alt=media&token=5242f4d1-3391-441d-8de3-e2dc63f2595b" alt="image1"/>
            <div className="paragraph">
                <h3>Khám phá Sự Kiện Gala Dinner: Một Tối Trọn Vẹn Sự Sang Trọng và Ý Nghĩa</h3>
                <p>Gala Dinner, những sự kiện lộng lẫy kết hợp giữa sự sang trọng và mục đích cao cả, là những buổi
                    tiệc thường diễn ra dưới ánh đèn lung linh, nơi mà mọi chi tiết, từ trang trí đến thực đơn, đều
                    được tỉ mỉ sắp xếp để tạo nên một trải nghiệm không thể quên. Hãy cùng khám phá sự quyến rũ bên
                    trong những bữa tiệc đặc biệt này.</p>
            </div>
            <div className="paragraph">
                <h3>Khám phá Sự Kiện Gala Dinner: Một Tối Trọn Vẹn Sự Sang Trọng và Ý Nghĩa</h3>
                <p>Gala Dinner, những sự kiện lộng lẫy kết hợp giữa sự sang trọng và mục đích cao cả, là những
                    buổi tiệc thường diễn ra dưới ánh đèn lung linh, nơi mà mọi chi tiết, từ trang trí đến thực đơn,
                    đều
                    được tỉ mỉ sắp xếp để tạo nên một trải nghiệm không thể quên. Hãy cùng khám phá sự quyến rũ bên
                    trong những bữa tiệc đặc biệt này.</p>
            </div>
            <div className="paragraph">
                <h3>Một Sự Kiện với Ý Nghĩa Sâu Sắc</h3>
                <p>Tuy nhiên, Gala Dinner không chỉ đơn thuần là một buổi tiệc sang trọng. Đằng sau sự sang trọng,
                    Gala Dinner
                    thường là cơ hội để nhân tố bí ẩn thể hiện các tài năng khác của bản thân. Việc tổ chức Gala
                    Dinner niềm vui
                    cho các vị khách mà còn là để lan tỏa tinh thần gắn kết giữa các thành viên trong Công
                    ty.</p>
            </div>
            <div className="paragraph">
                <h3>Nhiều Khoảnh Khắc Đáng Nhớ</h3>
                <p>Với mỗi người tham dự, Gala Dinner không chỉ là một sự kiện sang trọng mà còn là một trải nghiệm
                    tuyệt vời và ý nghĩa. Từ việc được thưởng thức những món ăn ngon và hương vị độc đáo đến việc
                    tham
                    gia vào các hoạt động giải trí mang lại không khí trẻ trung,năng động, đậm nét văn hoá của Công
                    ty.
                    Mỗi khoảnh khắc trong Gala Dinner đều là một kỷ niệm đáng nhớ.</p>
            </div>
            <Image loading="lazy" width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/gala-dinner%2Fimage6.jpg?alt=media&token=684e2fca-f1ae-4d82-8f30-66024dd79afb"/>
            <Image loading="lazy" width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/gala-dinner%2Fimage10.jpg?alt=media&token=139616be-cfe1-43ca-8e84-95b08beff8ab"/>
            <Image loading="lazy" width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/gala-dinner%2Fimage7.jpg?alt=media&token=63b1f58d-cdd1-42d3-9fb2-bcb5521aa2f6"/>
            <Image loading="lazy" width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/gala-dinner%2Fimage9.jpg?alt=media&token=6759ef73-233a-4601-a6de-5342266a606b"/>
            <div className="paragraph">
                <h3>Vinh danh thành viên cống hiến</h3>
                <p>Bên cạnh các hoạt động vui chơi giải trí, Sano vinh danh các thành viên có những thành tích nổi
                    bật trong năm. Sano cũng tổ chức min game với các phần thưởng cho thành viên may mắn nhất.</p>
            </div>
            <Image loading="lazy" width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/gala-dinner%2Fimage8.jpg?alt=media&token=ba3e00f2-e928-4e6d-ab28-65abc235c931"/>
            <Image loading="lazy" width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/gala-dinner%2Fimage12.jpg?alt=media&token=7f3e2c23-5464-4f6d-9578-b278407b4985"/>
            <Image loading="lazy" width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/gala-dinner%2Fimage11.jpg?alt=media&token=d44fb8b6-68e7-4da1-8a21-a2438f3b7514"/>
            <Image loading="lazy" width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/gala-dinner%2Fimage18.jpg?alt=media&token=f07940f8-12b9-48d9-9d41-b203e3c9f4be"/>
            <Image loading="lazy" width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/gala-dinner%2Fimage3.jpg?alt=media&token=c29e264a-eced-4b39-adf5-a0f85fafbee5"/>
            <Image loading="lazy" width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/gala-dinner%2Fimage4.jpg?alt=media&token=f0e3b6b5-8ca6-4200-a6e8-a1464ae2d57f"/>
            <Image loading="lazy" width={isMobile ? 430 :1000} height={isMobile ? 430 :1000} quality={100} alt={"image"} style={{maxWidth: "1200px"}}
                   src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/gala-dinner%2Fimage25.jpg?alt=media&token=8f162edd-0398-4911-a999-7ea5051471a8"/>
            <div className="paragraph">
                <h3>Kết Luận</h3>
                <p>Như vậy, Gala Dinner không chỉ là một sự kiện sang trọng mà còn là một cơ hội để kết nối cộng
                    đồng và lan tỏa tinh thần từ thiện. Đối với những người tham dự và tổ chức, Gala Dinner là một
                    dịp
                    để kỷ niệm và chia sẻ, mang lại những trải nghiệm không thể quên và ý nghĩa sâu sắc.</p>

            </div>
        </div>
    )
        ;
};

export default GalaDinner;
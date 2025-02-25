'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const E2502 = () => {
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
            <h1>Nhìn Lại 1 Hành Trình Đầy Cảm Hứng</h1>
            <h3 style={{ fontSize: "20px" }}>24-2-2025</h3>
            <div className="paragraph">
                <p>Chúng tôi, những thành viên của Sano, luôn biết ơn và trân trọng sự nỗ lực không ngừng của các Sếp – những người không chỉ là người lãnh đạo mà còn là nguồn cảm hứng quý giá trong cuộc sống. Mỗi lời khuyên, mỗi chia sẻ chân thành từ Sếp chính là ngọn lửa sưởi ấm, giúp chúng tôi tự tin vượt qua thử thách và tiến bước vững chắc trên con đường phát triển.</p>
            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                                          alt={"image"} style={{ maxWidth: "1200px" }}
                                                                          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2502%2F481293945_634397036014752_3740166466877808662_n.jpg?alt=media&token=460b5e67-16b3-4ac5-9eab-eaf3c89455eb" />
            <div className="paragraph">
                <p>
                Đặc biệt, hành trình 32 ngày ở Tây Tạng của các sếp đã chứng minh lòng dũng cảm và quyết tâm chinh phục giới hạn của bản thân. Dù chỉ là một phần nhỏ trong bức tranh chung, nhưng những ngày ấy đã thổi bùng niềm tin và cảm hứng cho các Sanoers – dạy chúng tôi biết rằng, với quyết tâm và nỗ lực, không có giới hạn nào có thể cản trở ước mơ.</p>
                <p>
                Chúng tôi xin gửi lời cảm ơn sâu sắc đến những người lãnh đạo tận tâm, đã không ngừng cống hiến và truyền lửa cho toàn bộ đội ngũ Sano. Chính nhờ sự đồng hành, chia sẻ và tâm huyết đó mà môi trường làm việc của chúng tôi trở nên gắn kết, đầy nhiệt huyết và luôn khát khao chinh phục những thành công mới.</p>
            </div>
            <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                                                      alt={"image"} style={{ maxWidth: "1200px" }}
                                                                                      src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2502%2F481900531_634396969348092_1786859076189830839_n.jpg?alt=media&token=97ff24a3-a73e-471a-8cd5-19b782978954" />
            <br />
            <div className="paragraph">
                <p>Cùng nhau, chúng ta sẽ tiếp tục viết nên những chương mới đầy cảm hứng trên hành trình của Sano Media!</p>
            </div>
        </div>
    );
};

export default E2502;
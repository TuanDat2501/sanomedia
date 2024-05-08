import './style.scss'
import {PRESENT_DATA} from "@/app/constant/const";

const AboutMe = () => {
    const dataPresent = PRESENT_DATA;
    return (
        <main>
            <div className="main-about">
                <section className="intro-content">
                    <div className="intro-content-img">
                        <img src="https://i.ibb.co/Y8QYQFP/aboutme-1.jpg" alt="aboutme-1"/>
                    </div>
                    <div className="intro-content-text">
                        <h1>Giới thiệu</h1>
                        <h1><span>Sano</span> Media</h1>
                        <p>Sano Media là công ty về Youtube có trụ sở tại Bắc Giang, Sano Media không chỉ là một công ty
                            - chúng tôi là một cộng đồng sáng tạo đầy nhiệt huyết, đang chuyên về mảng YouTube. Chúng
                            tôi tin tưởng rằng mỗi video, mỗi ý tưởng đều có thể thay đổi thế giới. Với đội ngũ giàu
                            kinh nghiệm và tận tâm, chúng tôi đang chinh phục những ngóc ngách mới của nền kỹ thuật
                            số.</p>
                    </div>
                </section>
                <section className="work-environment">
                    <div className="work-environment-text">
                        <h1>Môi trường làm việc</h1>
                        <p>Sano Media - một môi trường công ty tích cực không chỉ là nơi làm việc mà còn là nguồn cảm
                            hứng và động lực cho mỗi thành viên . Việc tạo ra không gian cho sự phát triển cá nhân, sự
                            sáng tạo và sự kết nối giữa các thành viên tạo ra một Sano năng động và mang lại hiệu suất
                            làm việc cao hơn. </p>
                    </div>
                    <div className="work-environment-img">
                        <img src="https://i.ibb.co/r2N3LbD/Group-412.jpg" alt="Group-412"/>
                    </div>
                </section>
                <section className="present-data ">
                    <div className="text flex flex-col justify-around items-center ">
                        <h1>Đến ngày hôm nay</h1>
                        <div className="line"></div>
                    </div>
                    <div className="data">
                        {dataPresent.map((value,index) =>
                            <>
                                <div key={index} className="data-item flex flex-col items-center ">
                                    <strong className="data-item-num">{value.num}</strong>
                                    <strong className="data-item-text">{value.name}</strong>
                                </div>
                            </>
                        )}
                    </div>
                </section>
                <section className="sano-culture">
                    <div className="sano-culture-content">
                        <div className="icon-culture">
                            <img src="https://i.ibb.co/fXVW33S/icon-heart.png" alt="icon-heart" />
                        </div>
                        <h1>Giá trị cốt lỗi - văn hoá <span>Sano</span></h1>
                        <p>“Phát triển - Sáng tạo - Thành công”</p>
                        <div className="text-culture">Làm việc tại Sano, bạn không chỉ có cơ hội được thử thách, học hỏi, sáng tạo, bạn còn phát triển bản thân để trở nên toàn diện hơn. Sano đã và đang xây dựng một tập thể với các giá trị cốt lõi sau: </div>
                        <ul>
                            <li>Giá trị cốt lõi của chúng tôi bao gồm sự cống hiến, tôn trọng, trung thực và sự đổi mới. Mỗi nhân viên đều được khuyến khích và hỗ trợ để phát triển khả năng sáng tạo và đóng góp ý kiến mới mẻ.</li>
                        </ul>
                    </div>
                </section>
                <section className="image">
                    <img src="https://i.ibb.co/LS7TmP9/aboutme-6.jpg" alt="aboutme-6"/>
                    <img src="https://i.ibb.co/N2Cz2dn/aboutme-5.jpg" alt="aboutme-5"/>
                    <img src="https://i.ibb.co/WDbT5K1/aboutme-4.jpg" alt="aboutme-4"/>
                </section>
            </div>
        </main>
    );
};

export default AboutMe;
'use client'
import React, {useEffect, useRef, useState} from 'react';
import './style.scss'
import IGraduate from "@/icon/IGraduate";
import ButtonRed from "@/app/component/button-red/ButtonRed";
import ISend from "@/icon/ISend";
import emailjs from '@emailjs/browser';
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import IEditor from "@/icon/IEditor";
const TREATMENT_DATA = [
    {
        icon: <IGraduate></IGraduate>,
        title: "Đào tạo toàn diện",
        description: "Sano chú trọng đào tạo không chỉ các kiến thức chuyên môn mà còn việc phát triển ngoại ngữ, kiến thức xã hội và các kỹ năng mềm.",
        animation:"fade-right"
    },
    {
        icon: <IGraduate></IGraduate>,
        title: "Đào tạo toàn diện",
        description: "Sano chú trọng đào tạo không chỉ các kiến thức chuyên môn mà còn việc phát triển ngoại ngữ, kiến thức xã hội và các kỹ năng mềm.",
        animation:"fade-left"
    },
    {
        icon: <IGraduate></IGraduate>,
        title: "Đào tạo toàn diện",
        description: "Sano chú trọng đào tạo không chỉ các kiến thức chuyên môn mà còn việc phát triển ngoại ngữ, kiến thức xã hội và các kỹ năng mềm.",
        animation: "fade-right"
    },
    {
        icon: <IGraduate></IGraduate>,
        title: "Đào tạo toàn diện",
        description: "Sano chú trọng đào tạo không chỉ các kiến thức chuyên môn mà còn việc phát triển ngoại ngữ, kiến thức xã hội và các kỹ năng mềm.",
        animation: "fade-left"
    }
]
const Recruitment = () => {
    const dataTreatment = TREATMENT_DATA;
    const form = useRef(null) as any;
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [position, setPosition] = useState()
    const sendEmail = (e:any) => {
        e.preventDefault();
        emailjs.send('sano-media', 'template_dixznx9', {
                to_name: name,
                from_name: email,
                message: `Bạn này đang quan tâm đến vị trí ${position}`,
            } as any, {
                publicKey: 'dPF4gXlQQdOsF8nkv',

            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    const getValueInput = (event:any,num:number) =>{
        switch (num){
            case 1:
                setName(event.target.value);
                break;
            case 2:
                setEmail(event.target.value);
                break;
            case 3:
                setPosition(event.target.value);
                break;
            default:
                setName(event.target.value);
        }
    }
    return (
        <div className="main-recruitment">
            <section className="recruitment-content">
                <div className="recruitment-content-text" >
                    <h1>Tuyển dụng <br/>Sano Media</h1>
                    <p>Trong suốt 07 năm hình thành và phát triển, Sano Media luôn mở rộng cánh cửa chào đón những nhân
                        sự xuất sắc để cùng đồng hành và chinh phục những đỉnh cao mới </p>
                    <p>Với môi trường làm việc năng động, trẻ trung và sáng tạo, chúng tôi tự hào mang đến cho các bạn
                        cơ hội phát triển nghề nghiệp và học hỏi không ngừng. Nếu bạn đam mê truyền thông và muốn thử
                        thách bản thân trong ngành công nghiệp đa phương tiện </p>
                </div>
                <div className="recruitment-content-video" data-aos="fade-left">
                    {/*<div style={{position: 'relative', width: '100%', height: '0px', paddingBottom: '56.250%'}}>
                        <iframe allow="fullscreen;autoplay" allowFullScreen height="100%"
                                src="https://streamable.com/e/57d5zc?autoplay=0" width="100%"
                                style={{
                                    border: 'none',
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    left: '0px',
                                    top: '0px',
                                    overflow: 'hidden'
                                }}></iframe>
                    </div>*/}
                    <video controls>
                        <source src="/video/video.mp4"/>
                    </video>
                </div>
            </section>
            <section className="recruiting">
                <h1>Các vị trí đang tuyển tại Sano Media</h1>
                <div className="position">
                    <div className="item-position">
                        <div className="icon">
                            <IEditor></IEditor>
                        </div>
                        <text>Editor</text>
                    </div>
                    <div className="item-position">
                        <div className="icon">
                            <IEditor></IEditor>
                        </div>
                        <text>Editor</text>
                    </div>
                    <div className="item-position">
                        <div className="icon">
                            <IEditor></IEditor>
                        </div>
                        <text>Editor</text>
                    </div>
                </div>
            </section>
            <section className="environment">
                <h1>Gia nhập đại gia đình Sano</h1>
                <p>Phát triển và tối ưu hóa năng lực của bản thân tại Sano</p>
                <div className="treatments">
                    {dataTreatment.map(value =>
                        <>
                            <div className="item-treatment flex flex-col justify-center items-center gap-5" data-aos={value.animation}>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="icon">{value.icon}</div>
                                    <div className="treatment">{value.title}</div>
                                </div>
                                <div className="sub-treatment">
                                    {value.description}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </section>
            <section className="newbie">
                <div className="polygon-2"></div>
                <div className="polygon-1">
                    <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M69.8104 58.2733C71.7953 65.7367 65.0167 72.5663 57.6088 70.5664L7.9153 57.1512C0.507437 55.1514 -1.97373 45.8221 3.4492 40.3585L39.8274 3.70752C45.2503 -1.75609 54.5101 0.743688 56.4951 8.20711L69.8104 58.2733Z"
                            fill="#D9D9D9" fill-opacity="0.38"/>
                    </svg>
                </div>
                <div className="ellipse-3"></div>
                <div className="subtract">
                    <svg width="96" height="101" viewBox="0 0 96 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M55.5639 0.285672C53.4282 1.08767 51.3289 2.07548 49.2868 3.25443C29.4377 14.7143 22.5249 39.9015 33.8468 59.5115C45.1686 79.1215 70.4377 85.7284 90.2868 74.2685C92.3289 73.0896 94.234 71.7654 95.9964 70.3168C91.8558 79.6553 84.8252 87.8141 75.3013 93.3127C51.3866 107.12 20.8071 98.9261 7 75.0115C-6.80713 51.0968 1.38665 20.5173 25.3013 6.71021C34.8252 1.21156 45.4062 -0.797717 55.5639 0.285672Z"
                              fill="#D9D9D9" fill-opacity="0.35"/>
                    </svg>

                </div>
                <h1>Cảm nhận của các <span>Newbies</span></h1>
                <div className="line-red"></div>
                <div className="feedback">
                    <div className="item-feedback flex gap-3" data-aos="flip-down">
                        <div className="member-img">
                            <img src="https://i.ibb.co/nPrNkL1/newbie.jpg" alt="newbie"/>
                        </div>
                        <div className="info-feedback">
                            <div className="name-member">Trịnh tuấn Đạt - <span>Editor</span></div>
                            <div className="cmt-member">
                                “ Mình vốn là người hướng nội và ít giao tiếp. Nhưng với một môi trường trẻ trung, năng
                                động như Adamo, mình như được "mở lòng" hơn với tất cả mọi người. Đặc biệt, điều tuyệt
                                vời với mình là được dẫn dắt bởi anh Leader có tâm nhất quả đất. So niceeeeeeeeeeeee! ”
                            </div>
                        </div>
                    </div>
                    <div className="item-feedback flex gap-3 justify-end colums-reverse" data-aos="flip-up">
                        <div className="info-feedback">
                            <div className="name-member name-right">Trịnh tuấn Đạt - <span>Editor</span></div>
                            <div className="cmt-member">
                                “ Mình vốn là người hướng nội và ít giao tiếp. Nhưng với một môi trường trẻ trung, năng
                                động như Adamo, mình như được "mở lòng" hơn với tất cả mọi người. Đặc biệt, điều tuyệt
                                vời với mình là được dẫn dắt bởi anh Leader có tâm nhất quả đất. So niceeeeeeeeeeeee! ”
                            </div>
                        </div>
                        <div className="member-img">
                            <img src="https://i.ibb.co/nPrNkL1/newbie.jpg" alt="newbie"/>
                        </div>
                    </div>
                    <div className="item-feedback flex gap-3" data-aos="flip-down">
                        <div className="member-img">
                            <img src="https://i.ibb.co/nPrNkL1/newbie.jpg" alt="newbie"/>
                        </div>
                        <div className="info-feedback">
                            <div className="name-member">Trịnh tuấn Đạt - <span>Editor</span></div>
                            <div className="cmt-member">
                                “ Mình vốn là người hướng nội và ít giao tiếp. Nhưng với một môi trường trẻ trung, năng
                                động như Adamo, mình như được "mở lòng" hơn với tất cả mọi người. Đặc biệt, điều tuyệt
                                vời với mình là được dẫn dắt bởi anh Leader có tâm nhất quả đất. So niceeeeeeeeeeeee! ”
                            </div>
                        </div>
                    </div>
                </div>
                <h1>...và giờ đến lượt bạn!</h1>
            </section>
            <section className="register">
                <h1>Đăng kí tuyển dụng</h1>
                <form>
                    <div className="input-name flex flex-col gap-2 mb-2" data-aos="fade-right">
                        <label htmlFor="name">Họ tên</label>
                        <input id="name" type="text" placeholder="Họ và tên" onChange={(e)=>{getValueInput(e,1)}}/>
                    </div>
                    <div className="input-email flex flex-col gap-2 mb-2" data-aos="fade-left">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" placeholder="Email" onChange={(e)=>{getValueInput(e,2)}}/>
                    </div>
                    <div className="input-position flex flex-col gap-2 " data-aos="fade-right">
                        <label htmlFor="position">Vị trí quan tâm</label>
                        <input id="position" type="text" placeholder="Vị trí bạn quan tâm" onChange={(e)=>{getValueInput(e,3)}}/>
                    </div>
                    <div className="submit flex justify-center mt-4" data-aos="flip-up" onClick={sendEmail}>
                        <ButtonRed text="Đăng ký" icon={<ISend/>}></ButtonRed>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Recruitment;
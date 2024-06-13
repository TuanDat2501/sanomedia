'use client'
import React, { useEffect, useRef, useState } from 'react';
import './style.scss'
import IGraduate from "@/icon/IGraduate";
import ButtonRed from "@/app/component/button-red/ButtonRed";
import ISend from "@/icon/ISend";
import emailjs from '@emailjs/browser';
import IEditor from "@/icon/IEditor";
import IContent from "@/icon/IContent";
import IUpload from "@/icon/IUpload";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { storage } from "@/app/firebase";
import { v4 } from "uuid";
import ITick from "@/icon/ITick";
import Toast from "@/app/component/toast/Toast";
import { useMediaQuery } from "usehooks-ts";
import IGift from "@/icon/IGift";
import IHighFive from "@/icon/IHighFive";
import ICreative from "@/icon/ICreative";
import Image from "next/image";
import IManager from "@/icon/IManager";
import { router } from "next/client";
import { useRouter } from "next/navigation";
import IArtist from "@/icon/IArtist";
import IAnimation from "@/icon/IAnimation";

const TREATMENT_DATA = [
    {
        icon: <IGraduate></IGraduate>,
        title: "Đào tạo toàn diện",
        description: "Sano chú trọng đào tạo không chỉ các kiến thức chuyên môn mà còn việc phát triển ngoại ngữ, kiến thức xã hội và các kỹ năng mềm.",
        animation: "fade-right"
    },
    {
        icon: <IGift></IGift>,
        title: "Đãi ngộ tuyệt vời",
        description: "Chính sách đãi ngộ hấp dẫn với các gói phúc lợi đa dạng, mức lương cạnh tranh, cùng những hoạt động, sự kiện thú vị để gắn kết thành viên. ",
        animation: "fade-left"
    },
    {
        icon: <IHighFive></IHighFive>,
        title: "Môi trường năng động",
        description: "Đội ngũ GenZ năng động trẻ trung, cơ sở vật chất tiện nghi, hiện đại cùng phong cách làm việc chuyên nghiệp.",
        animation: "fade-right"
    },
    {
        icon: <ICreative></ICreative>,
        title: "Thoả sức sáng tạo",
        description: "Luôn khuyến khích và tôn trọng sự thoả sức sáng tạo của mỗi thành viên trong tổ chức để đạt được sự đổi mới và tiến bộ liên tục.",
        animation: "fade-left"
    }
]
const Recruitment = () => {
    const router = useRouter();
    const urlImg = "https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o";
    const dataTreatment = TREATMENT_DATA;
    const form = useRef(null) as any;
    const isMobile = useMediaQuery('(max-width: 430px)');
    useEffect(() => {
        console.log("isMobile", isMobile)
    }, [isMobile])
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [position, setPosition] = useState()
    const [phone, setPhone] = useState()
    const [message, setMessage] = useState()
    const [file, setFile] = useState<any>()
    const [url, setUrl] = useState("")
    const [hover, setHover] = useState<boolean | null>(null)
    const [isLoadingFile, setIsLoadingFile] = useState(false)
    const [isLoadingFileIcon, setIsLoadingFileIcon] = useState(false)
    const [isShowToast, setIsShowToast] = useState(true);
    const [status, setStatus] = useState<string | null>(null)
    const [textToast, setTextToast] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const hoverBtn = () => {
        setHover(true);
    }
    const leaveBtn = () => {
        setHover(false);
    }
    const clickRecruiting = (path: string) => {
        router.push(path);
    }
    const showToast = (status: string, text: string) => {
        setIsLoading(false);
        setStatus(status);
        setTextToast(text);
        setIsShowToast(true);
        const x = setTimeout(() => {
            setIsShowToast(false);
            clearTimeout(x);
        }, 3000)
    }
    const sendEmail = (e: any) => {
        setIsLoading(true);
        if (name) {
            if (email) {
                if (position) {
                    if (file) {
                        e.preventDefault();
                        emailjs.send("sano_media", "template_lbrg7ip", {
                            to_name: name,
                            from_name: email,
                            message: message,
                            content: url,
                            position: position,
                            phone: phone,
                        } as any, {
                            publicKey: 'JKJJ2QEBu8pcj1d86',
                        })
                            .then(
                                () => {
                                    showToast("success", "Bạn đã ứng tuyển thành công!")
                                    console.log('SUCCESS!');
                                },
                                (error) => {
                                    showToast("failed", "Bạn ứng tuyển thất bại")
                                    console.log('FAILED...', error.text);
                                },
                            );
                    } else {
                        showToast("warning", "Bạn tải CV của bạn")
                    }
                } else {
                    showToast("warning", "Bạn cần chọn vị trí quan tâm")
                }
            } else {
                showToast("warning", "Bạn cần nhập email")
            }
        } else {
            showToast("warning", "Bạn cần nhập họ tên")
        }

    };
    const getValueInput = (event: any, num: number) => {
        switch (num) {
            case 1:
                setName(event.target.value);
                break;
            case 2:
                setEmail(event.target.value);
                break;
            case 3:
                setPosition(event.target.value);
                break;
            case 4:
                setFile(event.target.files[0]);
                break;
            case 5:
                setPhone(event.target.value);
                break;
            case 6:
                setMessage(event.target.value);
                break;
            default:
                setName(event.target.value);
        }
    }
    useEffect(() => {
        if (file == null) return;
        setIsLoadingFile(true);
        const imageRef = ref(storage, `cv/${file.name + v4()}`);
        uploadBytes(imageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setIsLoadingFile(false);
                setIsLoadingFileIcon(true);
                setUrl(url);
            });
        });
    }, [file]);
    const imagesListRef = ref(storage, "cv/");

    return (
        <div className="main-recruitment">
            <section className="recruitment-content">
                <div className="recruitment-content-text">
                    <h1>Tuyển dụng <br />Sano Media</h1>
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
                    {/*<video controls>
                        <source src="./video/video.mp4"/>
                    </video>*/}
                    <iframe src="https://www.youtube.com/embed/o9UR4QiiiLA?si=GLuOK2U_Y6Ut4teg"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </section>
            <section className="recruiting">
                <h1>Các vị trí đang tuyển tại Sano Media</h1>
                <div className="position">
                    <div className="item-position"
                        onClick={() => clickRecruiting('/tuyen-dung/benefit?position=editor')}>
                        <div className="icon">
                            <IEditor width={isMobile ? 50 : 150} height={isMobile ? 50 : 150}></IEditor>
                        </div>
                        <text>Editor</text>
                    </div>
                    <div className="item-position"
                        onClick={() => clickRecruiting('/tuyen-dung/benefit?position=content')}>
                        <div className="icon">
                            <IContent width={isMobile ? 50 : 150} height={isMobile ? 50 : 150} />
                        </div>
                        <text>Content</text>
                    </div>
                    <div className="item-position"
                        onClick={() => clickRecruiting('/tuyen-dung/benefit?position=manager')}>
                        <div className="icon">
                            <IManager width={isMobile ? 50 : 150} height={isMobile ? 50 : 150} />
                        </div>
                        <text>Manager</text>
                    </div>
                    <div className="item-position"
                        onClick={() => clickRecruiting('/tuyen-dung/benefit?position=artist')}>
                        <div className="icon">
                            <IArtist width={isMobile ? 50 : 150} height={isMobile ? 50 : 150} />
                        </div>
                        <text>Artist 2D</text>
                    </div>
                    <div className="item-position"
                        onClick={() => clickRecruiting('/tuyen-dung/benefit?position=animator')}>
                        <div className="icon">
                            <IAnimation width={isMobile ? 50 : 150} height={isMobile ? 50 : 150} />
                        </div>
                        <text>Animator 2D</text>
                    </div>
                </div>
            </section>
            <section className="environment">
                <h1>Gia nhập đại gia đình Sano</h1>
                <p>Phát triển và tối ưu hóa năng lực của bản thân tại Sano</p>
                <div className="treatments">
                    {dataTreatment.map(value =>
                        <>
                            <div className="item-treatment flex flex-col justify-center items-center gap-5"
                                data-aos={value.animation}>
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
                            fill="#D9D9D9" fillOpacity="0.38" />
                    </svg>
                </div>
                <div className="ellipse-3"></div>
                <div className="subtract">
                    <svg width="96" height="101" viewBox="0 0 96 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M55.5639 0.285672C53.4282 1.08767 51.3289 2.07548 49.2868 3.25443C29.4377 14.7143 22.5249 39.9015 33.8468 59.5115C45.1686 79.1215 70.4377 85.7284 90.2868 74.2685C92.3289 73.0896 94.234 71.7654 95.9964 70.3168C91.8558 79.6553 84.8252 87.8141 75.3013 93.3127C51.3866 107.12 20.8071 98.9261 7 75.0115C-6.80713 51.0968 1.38665 20.5173 25.3013 6.71021C34.8252 1.21156 45.4062 -0.797717 55.5639 0.285672Z"
                            fill="#D9D9D9" fillOpacity="0.35" />
                    </svg>

                </div>
                <h1>Cảm nhận của các <span>Member</span></h1>
                <div className="line-red"></div>
                <div className="feedback">
                    <div className="item-feedback flex gap-3" data-aos="flip-down">
                        <div className="member-img">
                            <Image width={150} height={150} quality={100}
                                src={`${urlImg}/anh-sano4.png?alt=media&token=719da060-a6c2-4106-8daa-7d9f1150c04e`}
                                alt="newbie" />
                        </div>
                        <div className="info-feedback">
                            <div className="name-member">Nguyễn An Hướng - <span>Trưởng nhóm</span></div>
                            <div className="cmt-member">
                                “ Mình vốn là người hướng nội và ít giao tiếp. Nhưng với một môi trường trẻ trung, năng
                                động như Sano, mình như được "mở lòng" hơn với tất cả mọi người. So niceee! ”
                            </div>
                        </div>
                    </div>
                    <div className="item-feedback flex gap-3 justify-end colums-reverse" data-aos="flip-up">
                        <div className="info-feedback">
                            <div className="name-member name-right">Khổng Thị Yến - <span>Trưởng nhóm</span></div>
                            <div className="cmt-member">
                                “ Công ty không chỉ cung cấp cho tôi một công việc ổn định mà còn tạo điều kiện để tôi học hỏi và phát triển bản thân qua các chương trình đào tạo và những thử thách mới. ”
                            </div>
                        </div>
                        <div className="member-img">
                            <Image width={150} height={150} quality={100}
                                src={`${urlImg}/anh-sano1.png?alt=media&token=33f9c068-8892-4e6a-abd4-b59d6642b10e`}
                                alt="newbie" />
                        </div>
                    </div>
                    <div className="item-feedback flex gap-3" data-aos="flip-down">
                        <div className="member-img">
                            <Image width={150} height={150}
                                src={`${urlImg}/anh-sano2.png?alt=media&token=9c17b2e6-39f1-4eff-821d-2a85ebc5a73b`}
                                alt="newbie" />
                        </div>
                        <div className="info-feedback">
                            <div className="name-member">Ngô Văn Đức - <span>Editor</span></div>
                            <div className="cmt-member">
                                “ Sau tuần đầu tiên làm việc tại công ty, tôi cảm nhận được một môi trường làm việc
                                chuyên nghiệp, thân thiện và đầy năng lượng tích cực. Mọi người luôn sẵn lòng hỗ trợ và
                                chia sẻ kinh nghiệm, giúp tôi nhanh chóng hòa nhập và phát triển kỹ năng. ”
                            </div>
                        </div>
                    </div>
                </div>
                <h1>...và giờ đến lượt bạn!</h1>
            </section>
            <section className="register">
                <h1>Đăng kí tuyển dụng</h1>
                <div className="form">
                    <div className="form-right">
                        <div className="container-input input-name flex flex-col gap-2 mb-2" data-aos="fade-right">
                            <label htmlFor="name">Họ tên</label>
                            <input id="name" type="text" placeholder="Họ và tên" onChange={(e) => {
                                getValueInput(e, 1)
                            }} />
                        </div>
                        <div className="container-input input-email flex flex-col gap-2 mb-2" data-aos="fade-left">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="text" placeholder="Email" onChange={(e) => {
                                getValueInput(e, 2)
                            }} />
                        </div>
                        <div className="container-input input-email flex flex-col gap-2 mb-2" data-aos="fade-left">
                            <label htmlFor="email">Số điện thoại</label>
                            <input id="email" type="text" placeholder="Số điện thoại" onChange={(e) => {
                                getValueInput(e, 5)
                            }} />
                        </div>
                        <div className="container-input input-position flex flex-col gap-2 " data-aos="fade-right">
                            <label htmlFor="position">Vị trí quan tâm</label>
                            <div className="custom-select">
                                <select onChange={(e) => getValueInput(e, 3)}>
                                    <option value="" disabled selected>Vị trí bạn quan tâm</option>
                                    <option value="Editor">Editor</option>
                                    <option value="Content">Content</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Artist">Artist 2D</option>
                                    <option value="Animator">Animator 2D</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-left">
                        <div className="container-input input-position flex flex-col gap-2 file" data-aos="fade-right">
                            <label htmlFor="position">CV</label>
                            <div className="input-file">
                                <span>
                                    {!isLoadingFileIcon ? <IUpload width={50} height={50}></IUpload> :
                                        <ITick width={50} height={50}></ITick>}
                                    {file ? <p>{file.name}</p> : <p>Chọn file CV của bạn</p>}
                                </span>
                                <input id="position" type="file" placeholder="Vị trí bạn quan tâm" onChange={(e) => {
                                    getValueInput(e, 4)
                                }} />
                            </div>
                        </div>
                        <div className="container-input textarea flex flex-col gap-2 mb-2" data-aos="fade-left">
                            <label htmlFor="message">Nội dung</label>
                            <textarea id="message" placeholder="Nội dung" onChange={(e) => {
                                getValueInput(e, 6)
                            }} rows={4} cols={20} style={{ padding: "5px" }}></textarea>
                        </div>
                    </div>
                </div>
                <div className="container-input submit flex justify-center mt-4" data-aos="flip-up"
                    onClick={sendEmail} onMouseEnter={hoverBtn} onMouseLeave={leaveBtn}>
                    <ButtonRed disabled={isLoadingFile} text="Đăng ký" icon={<ISend hover={hover} />}
                        isLoading={isLoading}></ButtonRed>
                </div>
                {isShowToast && <Toast status={status} text={textToast}></Toast>}
            </section>
        </div>
    );
};

export default Recruitment;
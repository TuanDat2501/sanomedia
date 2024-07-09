'use client'
import React, {useState} from 'react';
import IPhone from "@/icon/IPhone";
import ILocate from "@/icon/ILocate";
import ICalendar from "@/icon/ICalendar";
import IEmail from "@/icon/IEmail";
import './style.scss'
import IPhone1 from "@/icon/IPhone1";
import IEmail1 from "@/icon/IEmail1";
import emailjs from "@emailjs/browser";
import Toast from "@/app/component/toast/Toast";
import Loading from "@/app/component/loading/Loading";
import { EMAIL, SDT } from '@/constant/const';

const Contact = () => {
    const const_email = EMAIL
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [message, setMessage] = useState()
    const [isShowToast, setIsShowToast] = useState(true);
    const [status, setStatus] = useState<string | null>(null)
    const [textToast, setTextToast] = useState("")
    const [isLoading, setIsLoading] = useState(false)
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
    const getValueInput = (event: any, num: number) => {
        switch (num) {
            case 1:
                setName(event.target.value);
                break;
            case 2:
                setEmail(event.target.value);
                break;
            case 3:
                setPhone(event.target.value);
                break;
            case 4:
                setMessage(event.target.value);
                break;
            default:
                setName(event.target.value);
        }
    }
    const submit = () => {
        console.log(name, email, phone, message)
    }
    const sendEmail = (e: any) => {
        setIsLoading(true);
        if (name) {
            if (email) {
                if (message) {
                    e.preventDefault();
                    emailjs.send("sano_media", "template_9v64tsa", {
                        to_name: name,
                        from_name: email,
                        message: message,
                        phone: phone,
                    } as any, {
                        publicKey: 'JKJJ2QEpcj1d86',
                    })
                        .then(
                            () => {
                                showToast("success", "Bạn đã gửi thành công!")
                                console.log('SUCCESS!');
                            },
                            (error) => {
                                showToast("failed", "Bạn ứng gửi thất bại")
                                console.log('FAILED...', error.text);
                            },
                        );
                } else {
                    showToast("warning", "Bạn cần nội dung")
                }
            } else {
                showToast("warning", "Bạn cần nhập email")
            }
        } else {
            showToast("warning", "Bạn cần nhập họ tên")
        }

    };
    return (
        <div className="py-10 wrapper-contact">
            <div className="wrapbox-content-contact container mx-auto px-4 flex justify-center">
                <div className="contact flex-1">
                    <div className="box-info-contact">
                        <h2>Thông tin liên hệ</h2>
                        <div className="wrapbox-contact flex flex-col md:flex-row gap-10 p-5 rounded-lg">
                            <ul className="infoList-contact row flex-1">
                                <li>
                  <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                    >
                      <path
                          fill="currentColor"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13M6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75M8 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
                      />
                    </svg>
                  </span>
                                    <p>
                                        <strong>Tên Công ty</strong>
                                        <br></br>
                                        Công Ty TNHH Sano Media Việt Nam
                                    </p>
                                </li>
                                <li>
                  <span>
                    <ILocate color={"#000"} width="100%" height="100%"/>
                  </span>
                                    <p>
                                        <strong>Địa Chỉ</strong>
                                        <br></br>
                                        Tầng 9, Tòa nhà Việt Thắng, Hoàng Văn Thụ, Bắc Giang.
                                    </p>
                                </li>
                                {/*<li>
                  <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="0.88em"
                        height="1em"
                        viewBox="0 0 448 512"
                    >
                      <path
                          fill="currentColor"
                          d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8l-9.8 58.8h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8l-9.7 58.8H416c17.7 0 32 14.3 32 32s-14.3 32-32 32h-68.9l-21.3 128H384c17.7 0 32 14.3 32 32s-14.3 32-32 32h-68.9l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7h-95.2l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.7-58.9H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zm5.8 159.6l-21.3 128h95.1l21.3-128z"
                      />
                    </svg>
                  </span>
                                    <p>
                                        <strong>Mã Số Thuế</strong>
                                        <br></br>
                                        0110378179
                                    </p>
                                </li>*/}
                                {/*<li>
                  <span>
                    <ILocate width="100%" height="100%"/>
                  </span>
                                    <p>
                                        <strong>Địa chỉ Văn Phòng</strong>
                                        <br></br>
                                        Toà nhà EveryGolf, Số 63 Cổ Linh, Phường Thạch Bàn, Quận
                                        Long Biên, Thành phố Hà Nội
                                    </p>
                                </li>*/}
                            </ul>
                            <ul className="infoList-contact row flex-1">
                                <li>
                  <span>
                    <IPhone1 width="100%" height="100%"/>
                  </span>
                                    <p>
                                        <strong>Điện thoại</strong>
                                        <br></br>
                                       {SDT}
                                    </p>
                                </li>
                                <li>
                  <span>
                    <ICalendar width="100%" height="100%"/>
                  </span>
                                    <p>
                                        <strong>Thời gian làm việc</strong>
                                        <br></br>
                                        Thứ 2 đến Thứ 7: từ 8h00 đến 17h30
                                    </p>
                                </li>
                                <li>
                  <span>
                    <IEmail1/>
                  </span>
                                    <p>
                                        <strong>Email</strong>
                                        <br></br>
                                        {const_email}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="box-send-contact rounded-lg">
                        <h2>Gửi thắc mắc cho chúng tôi</h2>
                        <p>
                            Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng
                            tôi sẽ liên lạc lại với bạn sớm nhất có thể .
                        </p>
                        <div className="form-contact">
                            <div className="form flex flex-col gap-3">
                                <input type="text" placeholder="Tên của bạn" onChange={(e) => getValueInput(e, 1)}/>
                                <div className="email-phone flex gap-3">
                                    <input
                                        type="text"
                                        className="email flex-1"
                                        placeholder="Email" onChange={(e) => getValueInput(e, 2)}
                                    />
                                    <input
                                        type="text"
                                        className="phone flex-1"
                                        placeholder="Số điện thoại"
                                        onChange={(e) => getValueInput(e, 3)}
                                    />
                                </div>
                                <div className="content-contact">
                                    <textarea placeholder="Nội dung" onChange={(e) => getValueInput(e, 4)}></textarea>
                                </div>
                                <div>
                                    <button className="button submit" onClick={sendEmail}>
                                        {isLoading ? <Loading/> : "Gửi cho chúng tôi"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 block sm:hidden">
                        <iframe
                            className="maps"
                            style={{border: 0}}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJoRyG2ZurNTERqRfKcnt_iOc&key=AIzaSyCaLclliaLBcgu3keMOHAgVzUbJVftHzCs"
                        ></iframe>
                    </div>
                </div>
                <div className="flex-1 w-3 pl-10 hidden md:block">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.714705287559!2d106.2065878760384!3d21.282757779004807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31356da658a4a00b%3A0x8f52c7ea845700f1!2sC%C3%B4ng%20Ty%20TNHH%20Sano%20Media%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1715760457761!5m2!1svi!2s"
                        width="600" height="450" style={{border: 0}} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                {isShowToast && <Toast status={status} text={textToast}></Toast>}

            </div>
        </div>
    );
};

export default Contact;
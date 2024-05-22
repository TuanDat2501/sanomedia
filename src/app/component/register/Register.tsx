'use client'
import React, {useEffect, useState} from 'react';
import './style.scss';
import IUpload from "@/icon/IUpload";
import ITick from "@/icon/ITick";
import ButtonRed from "@/app/component/button-red/ButtonRed";
import ISend from "@/icon/ISend";
import Toast from "@/app/component/toast/Toast";
import emailjs from "@emailjs/browser";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "@/app/firebase";
import {v4} from "uuid";
const Register = () => {
    const [isLoadingFile, setIsLoadingFile] = useState(false)
    const [isLoadingFileIcon, setIsLoadingFileIcon] = useState(false)
    const [name, setName] = useState()
    const [url, setUrl] = useState("")
    const [email, setEmail] = useState()
    const [position, setPosition] = useState()
    const [phone, setPhone] = useState()
    const [message, setMessage] = useState()
    const [file, setFile] = useState<any>();
    const [hover, setHover] = useState<boolean | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isShowToast, setIsShowToast] = useState(true);
    const [status, setStatus] = useState<string | null>(null)
    const [textToast, setTextToast] = useState("")
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
    const hoverBtn = () => {
        setHover(true);
    }
    const leaveBtn = () => {
        setHover(false);
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
    return (
        <section className="register">
            <h1>Đăng kí tuyển dụng</h1>
            <div className="form">
                <div className="form-right">
                    <div className="container-input input-name flex flex-col gap-2 mb-2" >
                        <label htmlFor="name">Họ tên</label>
                        <input id="name" type="text" placeholder="Họ và tên" onChange={(e) => {
                            getValueInput(e, 1)
                        }}/>
                    </div>
                    <div className="container-input input-email flex flex-col gap-2 mb-2">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" placeholder="Email" onChange={(e) => {
                            getValueInput(e, 2)
                        }}/>
                    </div>
                    <div className="container-input input-email flex flex-col gap-2 mb-2" >
                        <label htmlFor="email">Số điện thoại</label>
                        <input id="email" type="text" placeholder="Số điện thoại" onChange={(e) => {
                            getValueInput(e, 5)
                        }}/>
                    </div>
                    <div className="container-input input-position flex flex-col gap-2 " >
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
                    <div className="container-input input-position flex flex-col gap-2 file">
                        <label htmlFor="position">CV</label>
                        <div className="input-file">
                            <span>
                                {!isLoadingFileIcon ? <IUpload width={50} height={50}></IUpload> :
                                    <ITick width={50} height={50}></ITick>}
                                {file ? <p>{file.name}</p> : <p>Chọn file CV của bạn</p>}
                            </span>
                            <input id="position" type="file" placeholder="Vị trí bạn quan tâm" onChange={(e) => {
                                getValueInput(e, 4)
                            }}/>
                        </div>
                    </div>
                    <div className="container-input textarea flex flex-col gap-2 mb-2">
                        <label htmlFor="message">Nội dung</label>
                        <textarea id="message" placeholder="Nội dung" onChange={(e) => {
                            getValueInput(e, 6)
                        }} rows={4} cols={20} style={{padding: "5px"}}></textarea>
                    </div>
                    <div className="container-input submit flex justify-center mt-4" data-aos="flip-up"
                         onClick={sendEmail} onMouseEnter={hoverBtn} onMouseLeave={leaveBtn}>
                        <ButtonRed disabled={isLoadingFile} text="Đăng ký" icon={<ISend hover={hover}/>}
                                   isLoading={isLoading}></ButtonRed>
                    </div>
                    {isShowToast && <Toast status={status} text={textToast}></Toast>}
                </div>
            </div>
        </section>
    );
};

export default Register;
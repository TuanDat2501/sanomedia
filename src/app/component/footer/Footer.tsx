'use client'
import React, {useEffect, useState} from 'react';
import './style.scss';
import IPhone from "@/icon/IPhone";
import IEmail from "@/icon/IEmail";
import IAddress from "@/icon/IAddress";
import IFacebook from "@/icon/IFacebook";
import IYoutube from "@/icon/IYoutube";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import { SDT } from '@/constant/const';
const Footer = () => {
    const sdt = SDT;
    const router = useRouter();
    const pathname = usePathname()
    const [isBlog, setIsBlog] = useState<boolean|undefined>()
    useEffect(() => {
        setIsBlog(pathname.includes('blog'));
    }, [pathname]);
    return (
        <div className="footer">
            <div className="wrapper-footer">
            <div className="menu">
                <div className="logo">
                    <Image width={100} height={100} quality={100} src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/logo.png?alt=media&token=1748ce5e-2cbc-4942-8657-7c9ba87abd09" alt="logo"/>
                </div>
                <div className="links-menu">
                    <a onClick={()=>router.push('/tuyen-dung')}>Tuyển dụng</a>
                    <a onClick={()=>router.push('/gioi-thieu')}>Giới thiệu</a>
                    <a onClick={()=>router.push('/sano-life')}>Sano life</a>
                </div>
            </div>
            <div className="contact">
                <div className="title-contact" >
                    <h2 className="cursor-pointer" onClick={()=>router.push('/lien-he')}>Liên hệ</h2>
                    <div className="line-white"></div>
                </div>
                <div className="contacts">
                    <div className="phone item-contacts">
                        <IPhone width={20} height={20}></IPhone>
                        <text>{SDT}</text>
                    </div>
                    <div className="email item-contacts">
                        <IEmail width={20} height={20}></IEmail>
                        <text>vanns@sanogroup.tv</text>
                    </div>
                    <div className="address item-contacts">
                        <IAddress width={20} height={20}></IAddress>
                        <text>Tầng 9, Tòa nhà Việt Thắng, Hoàng Văn Thụ, Bắc Giang.</text>
                    </div>
                </div>
            </div>
            <div className="fanpage">
                <iframe
                    src="./image/logo123.webp"
                    width="340" height="auto" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
                <div className="media">
                    <button className="btn-media btn-facebook">
                        <a href={"https://www.facebook.com/sanomediavn" } target="_blank" rel="noopener noreferrer"><IFacebook width={20} height={20}/></a>
                    </button>
                    <button className="btn-media btn-youtube">
                        <a href={"https://www.youtube.com/@sanomediavn" } target="_blank" rel="noopener noreferrer"><IYoutube width={30} height={30}/></a>
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;
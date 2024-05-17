'use client'
import React from 'react';
import './style.scss';
import IPhone from "@/icon/IPhone";
import IEmail from "@/icon/IEmail";
import IAddress from "@/icon/IAddress";
import IFacebook from "@/icon/IFacebook";
import IYoutube from "@/icon/IYoutube";
import Image from "next/image";
import {useRouter} from "next/navigation";
const Footer = () => {
    const router = useRouter();
    return (
        <div className="footer">
            <div className="wrapper-footer">
            <div className="menu">
                <div className="logo">
                    <Image width={100} height={100} quality={100} src="./image/logo.png" alt="logo"/>
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
                        <text>033 576 4485</text>
                    </div>
                    <div className="email item-contacts">
                        <IEmail width={20} height={20}></IEmail>
                        <text>sanonaturalteam@gmail.com</text>
                    </div>
                    <div className="address item-contacts">
                        <IAddress width={20} height={20}></IAddress>
                        <text>Tầng 9, Tòa nhà Việt Thắng, Hoàng Văn Thụ, Bắc Giang.</text>
                    </div>
                </div>
            </div>
            <div className="fanpage">
                <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsanomediavn&tabs=timeline&width=340&height=70&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="340" height="auto" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
                <div className="media">
                    <button className="btn-media btn-facebook">
                        <a href={"https://www.facebook.com/sanomediavn" } target="_blank" rel="noopener noreferrer"><IFacebook width={20} height={20}/></a>
                    </button>
                    <button className="btn-media btn-youtube">
                        <a><IYoutube width={30} height={30}/></a>
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;
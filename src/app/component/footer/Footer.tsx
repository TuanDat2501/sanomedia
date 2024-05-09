import React from 'react';
import './style.scss';
import IPhone from "@/icon/IPhone";
import IEmail from "@/icon/IEmail";
import IAddress from "@/icon/IAddress";
import IFacebook from "@/icon/IFacebook";
import IYoutube from "@/icon/IYoutube";
const Footer = () => {
    return (
        <div className="footer">
            <div className="menu">
                <div className="logo">
                    <img src="https://i.ibb.co/w4nyGx5/logo.png" alt="logo"/>
                </div>
                <div className="links-menu">
                    <a href="/tuyen-dung">Tuyển dụng</a>
                    <a href="/gioi-thieu">Giới thiệu</a>
                    <a>Sano life</a>
                </div>
            </div>
            <div className="contact">
                <div className="title-contact">
                    <h2>Liên hệ</h2>
                    <div className="line-white"></div>
                </div>
                <div className="contacts">
                    <div className="phone item-contacts">
                        <IPhone width={20} height={20}></IPhone>
                        <text>0123456789</text>
                    </div>
                    <div className="email item-contacts">
                        <IEmail width={20} height={20}></IEmail>
                        <text>Sanomedia@gmail.com</text>
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
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <div className="media">
                    <button className="btn-media btn-facebook">
                        <span><IFacebook width={20} height={20}/></span>
                    </button>
                    <button className="btn-media btn-youtube">
                        <span><IYoutube width={20} height={20}/></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
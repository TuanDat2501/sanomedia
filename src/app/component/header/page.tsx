'use client'
import './style.scss';
import ButtonRed from "@/app/component/button-red/ButtonRed";
import AOS from 'aos';
import "aos/dist/aos.css";
import {useEffect} from "react";
const Header = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <header className="header">
            <div className="wrapper">
                <div className="logo cursor-pointer">
                    <img src="https://i.ibb.co/w4nyGx5/logo.png" alt="logo"/>
                </div>
                <div className="nav">
                    <div className="link cursor-pointer">
                        <a href="/tuyen-dung">tuyển dụng</a>
                    </div>
                    <div className="link cursor-pointer">
                        <a href="/gioi-thieu">giới thiệu</a>
                    </div>
                    <div className="link cursor-pointer">
                        <a href="">sano life</a>
                    </div>
                </div>
                <ButtonRed text="Tuyển dụng"/>
            </div>
        </header>
    );
};

export default Header;
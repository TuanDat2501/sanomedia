'use client'
import './style.scss';
import ButtonRed from "@/app/component/button-red/ButtonRed";
import AOS from 'aos';
import "aos/dist/aos.css";
import React, {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import Image from "next/image";


const Header = () => {
    const router = useRouter();
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [pageActive, setPageActive] = useState(0)
    const pathname = usePathname()
    useEffect(() => {
        AOS.init();

    }, [])
    useEffect(() => {
        if(pathname.endsWith('tuyen-dung')){
            setPageActive(1);
        }
        if(pathname.endsWith('gioi-thieu')){
            setPageActive(0);
        }
        if(pathname.endsWith('sano-life')){
            setPageActive(2);
        }
    }, [pathname]);
    return (
        <header className="header">
            <div className="wrapper desktop">
                <div className="logo cursor-pointer" onClick={()=>router.push('/gioi-thieu')}>
                    <Image width={120} height={120} src="/image/logo.png" alt="logo"/>
                </div>
                <div className="nav">
                    <div className={pageActive == 0 ?"link cursor-pointer active":"link cursor-pointer"}>
                        <a href="/gioi-thieu">giới thiệu</a>
                        {pageActive === 0 && <div className="line-4"></div>}
                    </div>
                    <div className={pageActive == 1 ?"link cursor-pointer active":"link cursor-pointer"}>
                        <a href="/tuyen-dung">tuyển dụng</a>
                        {pageActive === 1 && <div className="line-4"></div>}
                    </div>
                    <div className={pageActive == 2 ?"link cursor-pointer active":"link cursor-pointer"}>
                        <a href="/sano-life">sano life</a>
                        {pageActive === 2 && <div className="line-4"></div>}
                    </div>
                </div>
                <span onClick={()=>router.push('/tuyen-dung')}>

                <ButtonRed text="Tuyển dụng"/>
                </span>
            </div>
            <div className=" mobile">
                <div className="logo cursor-pointer">
                    <Image width={1000} height={1000} quality={100} src="/image/logo.png" alt="logo"/>
                </div>
                <div className="menu-header" onClick={() => setIsOpenMenu(!isOpenMenu)}>
                    <text>Menu</text>
                    <div className="line-1"></div>
                </div>
                {isOpenMenu && <>
                    <div className="menus">
                        <div className="nav">
                            <div className="link cursor-pointer">
                                <a href="/gioi-thieu">giới thiệu</a>
                            </div>
                            <div className="link cursor-pointer">
                                <a href="/tuyen-dung">tuyển dụng</a>
                            </div>
                            <div className="link cursor-pointer">
                                <a href="/sano-life">sano life</a>
                            </div>
                        </div>

                    </div>
                    <div className="overlay"></div>
                </>
                }
            </div>
        </header>
    );
};

export default Header;
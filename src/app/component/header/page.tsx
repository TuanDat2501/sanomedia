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
    const [isBlog, setIsBlog] = useState<boolean|undefined>()
    useEffect(() => {
        AOS.init();
    }, [])
    useEffect(() => {
        setIsBlog(pathname.includes('blog'))
        if(pathname.endsWith('tuyen-dung')){
            setPageActive(1);
        }
        if(pathname.endsWith('gioi-thieu')){
            setPageActive(0);
        }
        if(pathname.endsWith('sano-life')){
            setPageActive(2);
        }
        if(pathname.endsWith('lien-he')){
            setPageActive(3);
        }
        if(pathname.includes('blog')){
            setPageActive(4);
        }
    }, [pathname]);
    return (
        <header className="header">
            <div className="wrapper desktop">
                <div className="logo cursor-pointer" onClick={()=>router.push('/gioi-thieu')}>
                    <Image width={120} height={120} quality={100} src="./image/logo123.webp" alt="logo"/>
                </div>
                <div className="nav">
                    <div onClick={() => router.push('/gioi-thieu')}
                         className={pageActive == 0 ? "link cursor-pointer active" : "link cursor-pointer"}>
                        <a>giới thiệu</a>
                        {pageActive === 0 && <div className="line-4"></div>}
                    </div>
                    <div onClick={() => router.push('/tuyen-dung')}
                         className={pageActive == 1 ? "link cursor-pointer active" : "link cursor-pointer"}>
                        <a>tuyển dụng</a>
                        {pageActive === 1 && <div className="line-4"></div>}
                    </div>
                    <div onClick={() => router.push('/sano-life')}
                         className={pageActive == 2 ? "link cursor-pointer active" : "link cursor-pointer"}>
                        <a>sano life</a>
                        {pageActive === 2 && <div className="line-4"></div>}
                    </div>
                    <div onClick={() => router.push('/lien-he')}
                         className={pageActive == 3 ? "link cursor-pointer active" : "link cursor-pointer"}>
                        <a>liên hệ</a>
                        {pageActive === 3 && <div className="line-4"></div>}
                    </div>
                </div>
                <span onClick={() => router.push('/tuyen-dung')}>

                <ButtonRed text="Tuyển dụng"/>
                </span>
            </div>
            <div className=" mobile">
                <div className="logo cursor-pointer" onClick={() => router.push('/gioi-thieu')}>
                    <Image width={120} height={120} quality={100} src="https://firebasestorage.googleapis.com/v0/b/sanomedia-4959a.appspot.com/o/logo.png?alt=media&token=1748ce5e-2cbc-4942-8657-7c9ba87abd09" alt="logo"/>
                </div>
                <div className="menu-header" onClick={() => setIsOpenMenu(!isOpenMenu)}>
                    <text>Menu</text>
                    <div className="line-1"></div>
                </div>
                {isOpenMenu && <>
                    <div className="menus">
                        <div className="nav">
                            <div className="link cursor-pointer" onClick={() => {router.push('/gioi-thieu');setIsOpenMenu(false)}}>
                                <a>giới thiệu</a>
                            </div>
                            <div className="link cursor-pointer" onClick={() => {router.push('/tuyen-dung');setIsOpenMenu(false)}}>
                                <a>tuyển dụng</a>
                            </div>
                            <div className="link cursor-pointer" onClick={() => {router.push('/sano-life');setIsOpenMenu(false)}}>
                                <a>sano life</a>
                            </div>
                            <div className="link cursor-pointer" onClick={() => {router.push('/lien-he');setIsOpenMenu(false)}}>
                                <a>liên hệ</a>
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
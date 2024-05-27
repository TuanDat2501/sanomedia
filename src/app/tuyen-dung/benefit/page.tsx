'use client'
import React, {useEffect, useState} from 'react';
import './style.scss'
import ISalary from "@/icon/ISalary";
import IUser from "@/icon/IUser";
import ICalendar1 from "@/icon/ICalendar1";
import ILocate from "@/icon/ILocate";
import IEmail1 from "@/icon/IEmail1";
import IPhone1 from "@/icon/IPhone1";
import ButtonRed from "@/app/component/button-red/ButtonRed";
import Register from "@/app/component/register/Register";
import {useMediaQuery} from "usehooks-ts";
import {useParams, usePathname, useSearchParams} from "next/navigation";
import {DATA_BENEFIT} from "@/constant/const";

const Benefit = () => {
    const dataDefault = DATA_BENEFIT;
    const pathname = usePathname()
    const [isShowPopup, setIsShowPopup] = useState(false);
    const [data, setData] = useState<any>()
    const clickShowPopup = () => {
        setIsShowPopup(!isShowPopup);
    }
    const searchParams = useSearchParams()
    useEffect(() => {
        var param = searchParams.get('position');
        switch (param) {
            case 'editor':
                setData(dataDefault['editor']);
                break;
            case 'content':
                setData(dataDefault['content']);
                break;
            case 'artist':
                setData(dataDefault['artist2D']);
                break;
            case 'animator':
                setData(dataDefault['animator2D']);
                break;
            default:
        }

    }, [dataDefault, searchParams]);
    return (
        <div className="main-benefit">
            <h1>{data?.title}</h1>
            <section className="job-detail">
                <div className="items-job">
                    <div className="item-job-detail">
                        <div className="icon-item">
                            <ISalary></ISalary>
                        </div>
                        <text>Mức lương</text>
                        <p>{data?.salary}</p>
                    </div>
                    <div className="item-job-detail">
                        <div className="icon-item">
                            <IUser></IUser>
                        </div>
                        <text>Số lượng</text>
                        <p>{data?.quantity}</p>
                    </div>
                    <div className="item-job-detail">
                        <div className="icon-item">
                            <ICalendar1></ICalendar1>
                        </div>
                        <text>Hạn tuyển dụng</text>
                        <p>{data?.date}</p>
                    </div>
                    <div className="item-job-detail">
                        <div className="icon-item">
                            <ILocate color={"#f8cccc"}></ILocate>
                        </div>
                        <text>Địa chỉ làm việc</text>
                        <p>Hoàng Văn Thụ, Bắc Giang</p>
                    </div>
                </div>
            </section>
            <section className="job description-job">
                <h2>Mô tả công việc</h2>
                <ul>
                    {data?.description.map((value:any,index:any)=><li key={index}>{value}</li>)}
                </ul>
            </section>
            <section className="job required-job">
                <h2>yêu cầu công việc</h2>
                <ul>
                    {data?.required.map((value:any,index:any)=><li key={index}>{value}</li>)}
                </ul>
            </section>
            <section className="job treatment">
                <h2>Đãi ngộ</h2>
                <ul>
                    {data?.treatment.map((value:any,index:any)=><li key={index}>{value}</li>)}
                </ul>
            </section>
            <section className="job contact">
                <h2>Ứng tuyển</h2>
                <p>Ứng viên có thể liên hệ và gửi thông tin qua: </p>
                <div className="detail-contact">
                    <span><IEmail1></IEmail1></span>
                    <text>vanns@sanogroup.tv</text>
                </div>
                <div className="detail-contact">
                    <span><IPhone1 width="32px" height="32px"></IPhone1></span>
                    <text>0522214201</text>
                </div>
                <p>Hoặc điền thông tin tại đây:</p>
                <div className="btn-apply" onClick={clickShowPopup}>
                    <ButtonRed text="Ứng tuyển"></ButtonRed>
                </div>
            </section>
            {isShowPopup && <section className="dialog">
                {/*<div className="overlay"></div>*/}
                <div className="popup">
                    <div className="close-popup" onClick={clickShowPopup}>
                        <svg width={20} height={20} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                             fill="#000000">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#000000"
                                      d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path>
                            </g>

                        </svg>
                    </div>
                    <Register></Register>
                </div>
            </section>}
        </div>
    );
};

export default Benefit;
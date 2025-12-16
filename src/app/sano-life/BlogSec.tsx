'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Pagination from '@mui/material/Pagination';
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import { NEWS_SANOLIFE_DATA1 } from '@/constant/const';
const BlogSec: React.FC = () => {
       const dataBlogs = NEWS_SANOLIFE_DATA1;
    const router = useRouter();
    const searchParams = useSearchParams()
    const flag = searchParams.get('flag')
    const [arr, setArr] = useState<any>([])
    const [totalPage, setTotalPage] = useState(0)
    const lengthPage = 4;
    useEffect(() => {
        if (dataBlogs.length % 4 > 0) {
            setTotalPage(Math.floor(NEWS_SANOLIFE_DATA1.length / lengthPage) + 1);
        }
        if (dataBlogs.length % 4 == 0) {
            setTotalPage(Math.floor(NEWS_SANOLIFE_DATA1.length / lengthPage));
        }
        let temp = [];
        for (let i = 0; i < 4; i++) {
            temp.push(dataBlogs[i]);
        }
        setArr(temp);
        if (flag == "1") {
            const elemt = document.getElementById("sano-blog");
            elemt && elemt.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            });
        }
    }, [dataBlogs, flag]);
    const navigate = (link: string) => {
        router.push(link);
    }
    const changePage = (e: any, currentPage: number) => {
        let temp = [];
        for (let i = currentPage * lengthPage - lengthPage; i < currentPage * lengthPage; i++) {
            if(dataBlogs[i]){
                temp.push(dataBlogs[i]);
            }
        }
        setArr(temp)
    }
    return (
        <section className="sano-blog" id="sano-blog1">
            <div className="blogs">
                {arr.map((value: any) => <>
                    <div key={value} className="item-blog">
                        <Image width={350} height={350} quality={70} src={value.image} alt="news-1"
                            data-aos="fade-right" />
                        <div className="content-blog">
                            <div className="title-blog" onClick={() => navigate(`${value.link}`)}>
                                <h2>{value.title}</h2>
                            </div>
                            <div className="date-blog">
                                <p>{value.date}</p>
                            </div>
                            <div className="sub-text">
                                <p>
                                    {value.subText}
                                </p>
                            </div>
                        </div>
                    </div>
                </>)}
            </div>
            <div className="pagination">
                <Pagination count={totalPage} onChange={(event, page) => changePage(event, page)} />
            </div>
        </section>
    );
};

export default BlogSec;
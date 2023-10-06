'use client'

import { useQuery } from "@tanstack/react-query";
import { BASE_API } from '@/helpers/constants'
import axios from 'axios'
import { IFooterRes } from "@/types/footerRes";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";

import Input from '@/components/UI/Input/Input'

export default function Footer() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['footer'],
        queryFn: async () => {
            const { data } = await axios.get(`${BASE_API}/footer`)
            return data as IFooterRes
        }
    })

    return (
        <footer className="max-w-screen-xl mx-auto px-7 py-10 mt-10 w-full rounded-t-xl font-medium text-footerTextColor bg-gradient-to-r from-gradientMainFirst to-gradientMainSecond md:mt-20 lg:px-28">
            <div>
                <div className="flex flex-col gap-y-5 p-5 rounded-lg border-2 border-white text-center md:p-10 xl:flex-row ">
                    <div className="flex flex-col justify-between items-center xl:items-start">
                        <h3 className="text-[20px]/[30px] text-white">Subscribe to <span>UGChub</span></h3>
                        <p>Get the newsletters and guides directly on your email from us</p>
                    </div>
                    <Input />

                    
                </div>

                <div className="flex gap-8 flex-wrap-reverse py-12">
                    <div className="text-white">
                        <div>
                            <a href="#" className="text-6 font-semibold"><span className="text-[40px] font-bold">UGC</span>hub</a>
                            <p>{data?.footer.footerTitle}</p>
                        </div>
                        <ul className="flex items-center gap-3 mt-10">
                            {data?.footer.socialIcons.map(social => {
                                return (
                                    <li
                                        key={social.id} className="flex justify-center items-center w-10 h-10 border-[1px] rounded-full">
                                        <a href={social.link} className=" rounded-full">
                                            <Image src={social.icon} alt='fgd' className="w-6 h-6" />
                                        </a>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                    {data?.footer.links.map(item => {
                        const title = item[0]
                        const list = item.slice(1)
                        return (
                            <Fragment key={title.id}>
                                < ul className="font-medium space-y-2" >
                                    <li className="mb-5 text-[20px]/[30px] text-white">{title.label}</li>
                                    {list.map(link => {
                                        return (
                                            <li key={link.id} className="font-medium leading-[22px]">
                                                

                                                <Link href="#" className="flex items-center gap-5">
                                                    {link.icon !== ''
                                                        ? <Image src={link.icon} alt="icon" />
                                                        : null
                                                    }
                                                    {link.label}
                                                </Link>
                                            </li>

                                        )
                                    })}
                                </ul>
                            </Fragment>
                        )
                    })
                    }

                </div>

                <div className="flex flex-col-reverse gap-5 items-center pt-6 border-t-[1px] border-bodyColor md:flex-row md:justify-between">
                    <span className="block text-white">{data?.footer.policy}</span>
                    <div className="flex items-center gap-6">
                        {data?.footer.oc.map(button => {
                            return (
                                <button key={button.id}  className="inline-block">
                                    <Link href="#">
                                        <Image src={button.pic} alt="alt"/>
                                    </Link>
                                </button>
                            )
                        })}

                    </div>
                </div>
            </div>
        </footer>
    )
}
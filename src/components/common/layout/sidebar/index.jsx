import React, { useEffect } from 'react'
import { LogoSvg } from '../../Svg/generalSvg'
import { ItemsSvg } from '../../Svg/headerSvg'
import { useAppContext } from '@/context/AppContext'
import Link from 'next/link'
import { ArrowSvg } from '../../Svg/dashboardSvg'
import { useRouter } from 'next/router'

const Sidebar = () => {
    const { ItemLogin } = useAppContext()
    const { push, pathname } = useRouter()

    useEffect(() => {
        console.log(pathname);
      }, [pathname])
      

    return (
        <div className='flex flex-col items-center pt-4'>
            <div className='px-4'>
                <LogoSvg />
            </div>
            <div className='px-4'>
                <div className='grid grid-cols-8 bg-[#F3F4F6] rounded-[12px] p-2 mt-6'>
                    <div className="col-start-3 col-span-4 flex flex-col items-center">
                        <img className='w-[72px] h-[72px] rounded-full border-[1.5px] border-[#9CA3AF]' src={false ? '' : "/assets/images/user-avatar.png"} alt="avatar" />
                        <h2 className='text-[#374151] font-[700] mt-2'>مدیر عامل پاراف</h2>
                        <h6 className='text-[#6B7280] font-[500]'>سامان کریمی</h6>
                    </div>
                    <div className='col-span-2 flex justify-end '>
                        <div className='cursor-pointer '><ItemsSvg /></div>
                    </div>
                </div>
            </div>

            <div className="mt-6 bg-white w-full px-6">
                {ItemLogin.map((x, i) => {
                    return (
                        <Link
                            href={x.url}
                            onClick={() => {
                                if (x.event) {
                                    x.event();
                                    push("/");
                                }
                            }}
                            key={i}
                            className="py-3 flex justify-between items-center mb-1 rounded-md cursor-pointer"
                        >
                            <div className="flex justify-between items-center">
                                {x.icon}
                                <p className={`${pathname === x.url? 'text-[#1C64F2]': 'text-[#4B5563]'} text-[11px] lg:text-[13px] font-semibold mx-[6px]`}>
                                    {x.title}
                                </p>
                            </div>
                            <div className="flex items-center justify-end">
                            <ArrowSvg color={pathname === x.url? '#1C64F2': '#6B7280'}/>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default Sidebar
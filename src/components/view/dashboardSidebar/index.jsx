import { useAppContext } from '@/context/AppContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { ArrowSvg } from '@/components/common/Svg/dashboardSvg'


const DashboardSidebar = ({ children, title, svg, marginBottom = 'mb-[60px]', className, link }) => {

    // const { user } = useAuthContext()

    const { push, pathname } = useRouter()
    

    const { ItemLogin } = useAppContext()

    // useEffect(() => {
    //     if (!user) {
    //         push({ pathname: '/login' })
    //     }
    // }, [user])

    // useEffect(() => {
    //     if (!show) {
    //         setShowFooter(false);
    //     } else {
    //         controlFooter('footerMobile', 'grid')
    //     }
    // }, [show])

    useEffect(() => {
      console.log(pathname);
    }, [pathname])
    



    return (
        <div className="grid grid-cols-10">
            <div className="sidebar lg:col-span-2 col-span-3 mt-6 bg-white px-7 lg:px-4">
                <div>
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
                                className="bg-gray_4 p-3 flex justify-between items-center mb-1 rounded-md cursor-pointer"
                            >
                                <div className="flex justify-between items-center">
                                    {x.icon}
                                    <p className="text-[11px] lg:text-[13px] font-semibold mx-[6px]">
                                        {x.title}
                                    </p>
                                </div>
                                <div className="flex items-center ml-3">
                                    <ArrowSvg color={pathname === x.url? '#1C64F2': null}/>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default DashboardSidebar
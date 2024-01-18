import { React, useState } from 'react'
import DateSvg, { ExitSvg, MassageSvg, Search, TimeSvg, Users } from '../../Svg/headerSvg'


const Header = ({ refHeader }) => {
    const [searchInput, setSearchInput] = useState();


    return (
        <>
            <header className="fixed w-full z-[5] top-0" ref={refHeader}>
                <div className="grid grid-cols-8 p-4 px-12 bg-white text-[#6B7280]">
                    <div className="col-span-2 flex items-center">
                        <DateSvg />
                        <p className='mx-2'>دوشنبه 1402/10/19</p>
                        <TimeSvg />
                        <p className='mx-2'>14:46</p>
                    </div>
                    <div className="col-span-3 flex justify-center">
                        <div className='flex items-center h-[40px] w-[400px] border focus-within:border-1.5 focus-within:border-blue-600 border-[#E5E7EB] rounded-[12px] p-4'>
                            <input
                                type="text"
                                placeholder="جستجو کنید ..."
                                className={`outline-none w-full h-[44px] bg-transparent`}
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                            <Search />
                        </div>
                    </div>
                    <div className="col-start-7 col-span-1 flex items-center justify-end">
                        <Users />
                        <MassageSvg />
                        <div className='flex items-center cursor-pointer mr-4 mt-1'>
                            <ExitSvg />
                            <p className='mr-1 font-[400]'>خروج از حساب</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
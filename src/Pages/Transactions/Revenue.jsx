import React from "react"
import { BiWallet } from "react-icons/bi";


const Revenue = () => {
    return (
        <section className="flex-1">
            <div className="border bg-white w-full h-full p-4 shadow-md text-[#32475CDE] rounded-lg relative flex flex-col justify-between">
                <BiWallet className="w-8 h-8 mb-4 text-[#03C3EC] bg-[#26C6F91F] p-1 rounded-lg" />
                <span>
                    <p className="text-base text-[#32475C99] font-bold">Revenue</p>
                    <h2 className="text-[1.5rem] text-[#32475CDE] font-black">N4,670,090</h2>
                    <p className="text-sm text-[#40DD7F] font-medium">↑ 28.14%</p>
                </span>
            </div>
        </section>
    )
}

export default Revenue
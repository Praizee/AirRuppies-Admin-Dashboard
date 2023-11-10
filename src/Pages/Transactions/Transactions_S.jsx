import React from "react"
import { BsCreditCardFill } from "react-icons/bs";


const Transaction_S = () => {
    return (
        <section className="flex-1">
            <div className="border bg-white p-4 w-full h-full shadow-md text-[#32475CDE] rounded-lg relative flex flex-col justify-between">
                <BsCreditCardFill className="w-8 h-8 mb-4 text-[#6563FF] bg-[#A2A1FF] p-1 rounded-lg" />
                <span>
                    <p className="text-base text-[#32475C99] font-bold">Transactions</p>
                    <h2 className="text-[1.5rem] text-[#32475CDE] font-black">N14,854</h2>
                    <p className="text-sm text-[#40DD7F] font-medium">↑ +62%</p>
                </span>
            </div>
        </section>
    )
}

export default Transaction_S
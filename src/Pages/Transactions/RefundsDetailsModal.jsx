import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Typography,
} from "@material-tailwind/react";


export function RefundsDetailsModal() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button onClick={handleOpen}
                className='btn text-sm rounded-none normal-case bg-transparent hover:bg-transparent text-[#3C1450] border border-[#3C1450] hover:border-[#3C1450] font-semibold'>
                View Details
            </Button>

            <Dialog open={open} handler={handleOpen}>
                <div className="text-right">
                    <button onClick={handleOpen} title="Close">
                        <h1 className="laptop:text-lg text-2xl px-4 py-2 font-bold">
                            X
                        </h1>
                    </button>
                </div>
                <DialogHeader className="pt-6 px-6">
                    <span className='flex justify-between gap- w-full'>
                        <h1 className="text-[1.5rem] text-[#242F57] leading-normal font-bold">
                            Transfer
                        </h1>
                        <span>
                            <p className='text-[#636E95] text-xs font-medium'>
                                Fund Transfer
                            </p>
                            <p className='text-[#E93C3C] text-xl font-medium'>
                                -₦5,000
                            </p>
                        </span>
                    </span>
                </DialogHeader>

                <hr className="mb-4" />

                <DialogBody className="pb-8">
                    <div className=" rounded-lg p-4 bg-[#EBF0F680] space-y-4">
                        <p className="text-center text-[#25324B] font-semibold">
                            Transaction Summary
                        </p>
                        <span className="flex justify-between">
                            <p className="text-center text-[#84818A]">
                                Account number
                            </p>
                            <p className="text-center text-[#25324B] font-semibold">
                                7045539220
                            </p>
                        </span>
                        <span className="flex justify-between">
                            <p className="text-center text-[#84818A]">
                                Account Name
                            </p>
                            <p className="text-center text-[#25324B] font-semibold">
                                Ola Prince
                            </p>
                        </span>
                        <span className="flex justify-between">
                            <p className="text-center text-[#84818A]">
                                Description
                            </p>
                            <p className="text-center text-[#25324B] font-semibold">
                                send the raba
                            </p>
                        </span>
                        <span className="flex justify-between">
                            <p className="text-center text-[#84818A]">
                                Transaction reference
                            </p>
                            <p className="text-center text-[#25324B] font-semibold">
                                NJU79273399334892HKS
                            </p>
                        </span>
                        <span className="flex justify-between">
                            <p className="text-center text-[#84818A]">
                                Transaction date
                            </p>
                            <p className="text-center text-[#25324B] font-semibold">
                                23 March,2022
                            </p>
                        </span>
                        <span className="flex justify-between">
                            <p className="text-center text-[#84818A]">
                                Previous account balance
                            </p>
                            <p className="text-center text-[#25324B] font-semibold">
                                ₦50,000
                            </p>
                        </span>
                        <span className="flex justify-between">
                            <p className="text-center text-[#84818A]">
                                Recent account balance
                            </p>
                            <p className="text-center text-[#25324B] font-semibold">
                                ₦55,000
                            </p>
                        </span>
                        <div className="col-span-6">
                            <button
                                className=" w-full mt-6 laptop:mt-4 rounded-md border border-[#E93C3C] bg-[#E93C3C] p-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#E93C3C] focus:outline-none focus:ring active:text-blue-500"
                            >Save
                            </button>
                        </div>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
}
export default RefundsDetailsModal
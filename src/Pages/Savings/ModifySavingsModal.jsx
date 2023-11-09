import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";

export function ModifySavingsModal() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button onClick={handleOpen}
                className=" px-4 py-2 normal-case rounded-md border border-[#3C1450] bg-[#3C1450] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-[#3C1450]">
                Modify Savings
            </Button>

            <Dialog open={open} handler={handleOpen}>
                <div className="text-right">
                    <button onClick={handleOpen} title="Close">
                        <h1 className="laptop:text-lg text-2xl px-4 py-2 font-bold">
                            X
                        </h1>
                    </button>
                </div>
                <DialogHeader className="py-0 px-6">
                    <span className=''>
                        <h1 className="text-[1.5rem] text-[#242F57] leading-normal font-bold">
                            Modify Savings
                        </h1>
                        <p className='text-[#636E95] font-medium'>
                            This information can be created and edited
                        </p>
                    </span>
                </DialogHeader>

                <hr className="my-4" />

                <DialogBody className="">
                    <form className=" rounded-lg grid grid-cols-6 px-2 space-y-4">

                        <div className="col-span-6 ">
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                                Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                placeholder=""
                                defaultValue="Air Flex"
                                required
                                autoFocus
                                className="input w-full mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div className="col-span-6 ">
                            <label htmlFor="Email" className="block text-sm font-semibold text-gray-700">
                                Description
                            </label>

                            <input
                                type="text"
                                id="description"
                                placeholder="Description"
                                defaultValue="Secure your savings"
                                required
                                autoFocus
                                className="input w-full mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div className="col-span-6 ">
                            <label htmlFor="interest-rate" className="block text-sm font-semibold text-gray-700">
                                Interest Rate
                            </label>

                            <select name="notifications" id="notifications"
                                defaultValue="3-months"
                                className="input w-full mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
                                <option value="1-month">1 Month</option>
                                <option value="2-months">2 Months</option>
                                <option value="3-months">3 Months</option>
                                <option value="4-months">4 Months</option>
                                <option value="5-months">5 Months</option>
                                <option value="6-months">6 Months</option>
                            </select>
                        </div>

                        <div className="col-span-6 ">
                            <label htmlFor="Email" className="block text-sm font-semibold text-[#515B6F]">
                                Percentage
                            </label>

                            <select name="percentage" id="percentage"
                                defaultValue="4.25%"
                                className="input w-full mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
                                <option value="4.25%">4.25%</option>
                                <option value="14.25%">14.25%</option>
                                <option value="18.25%">18.25%</option>
                                <option value="20.25%">20.25%</option>
                                <option value="25.25%">25.25%</option>
                            </select>
                        </div>

                        <div className="col-span-6">
                            <button
                                className=" w-full mt-6 laptop:mt-2 rounded-md border border-[#3C1450] bg-[#3C1450] p-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-blue-500"
                            >Save
                            </button>
                        </div>
                    </form>

                </DialogBody>
            </Dialog>
        </>
    );
}

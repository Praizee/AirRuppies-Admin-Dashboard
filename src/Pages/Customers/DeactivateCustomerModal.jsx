import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Typography,
} from "@material-tailwind/react";


export function DeactivateCustomerModal() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            {/* <Button onClick={handleOpen}
                className=" px-8 py-3 rounded-md border border-[#E93C3C] bg-[#E93C3C] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#E93C3C] focus:outline-none focus:ring active:text-[#E93C3C]">
                DELETE ADS
            </Button> */}
            <label
                htmlFor="AcceptConditions" title="Deactivate ADS"
                className="relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
            >
                <input onClick={handleOpen}
                    type="checkbox"
                    id="AcceptConditions"
                    // defaultChecked
                    className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
                />

                <span
                    className="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600"
                >
                    <svg
                        data-unchecked-icon
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>

                    <svg
                        data-checked-icon
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>

                <span
                    className="absolute inset-0 rounded-full bg-[#E93C3C] transition peer-checked:bg-green-500"
                ></span>
            </label>

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
                            Customer Deactivation
                        </h1>
                        <p className='text-[#636E95] font-medium'>
                            Deactivating this account will disable user from using it
                        </p>
                    </span>
                </DialogHeader>

                <hr className="my-4" />

                <DialogBody className="">
                    <form className=" rounded-lg grid grid-cols-6 px-2 space-y-4">

                        <div className="col-span-6 ">
                            <label htmlFor="Email" className="block text-sm font-semibold text-gray-700">
                                Give reason
                            </label>
                            <textarea
                                id="OrderNotes"
                                className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                                rows="4"
                                placeholder="Enter your reason..."
                            ></textarea>

                        </div>

                        <div className="col-span-6">
                            <button
                                className=" w-full mt-6 laptop:mt-2 rounded-md border border-[#E93C3C] bg-[#E93C3C] p-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#E93C3C] focus:outline-none focus:ring">
                                Customer Deactivation
                            </button>
                        </div>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}
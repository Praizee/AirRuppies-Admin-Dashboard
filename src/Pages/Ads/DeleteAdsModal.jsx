import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    Input,
} from "@material-tailwind/react";


export function DeleteAdsModal() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button onClick={handleOpen}
                className=" px-8 py-3 rounded-md border border-[#E93C3C] bg-[#E93C3C] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#E93C3C] focus:outline-none focus:ring active:text-[#E93C3C]">
                DELETE ADS
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
                            Delete ADS
                        </h1>
                        <p className='text-[#636E95] font-medium'>
                            Are you sure you want to delete this AD?
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
                                Delete ADS
                            </button>
                        </div>
                    </form>

                </DialogBody>
            </Dialog>
        </>
    );
}
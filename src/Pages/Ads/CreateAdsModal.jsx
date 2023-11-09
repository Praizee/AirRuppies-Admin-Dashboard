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
import BasicDatePicker from '../../Components/DatePicker/DatePicker';
import FileUpload from "../../Components/FileUploadInput/FileUpload";

export function CreateAdsModal() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button onClick={handleOpen}
                className=" px-6 py-3 uppercase rounded-md border border-[#3C1450] bg-[#3C1450] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-[#3C1450]">
                Create ads
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
                            Create ADS
                        </h1>
                        <p className='text-[#636E95] font-medium'>
                            This information can be created and edited
                        </p>
                    </span>
                </DialogHeader>

                <hr className="my-4" />

                <DialogBody className="">
                    <Typography>
                        <form className=" rounded-lg grid grid-cols-6 px-2 space-y-4">

                            <div className="col-span-6 ">
                                <label htmlFor="name-of-ads" className="block text-sm font-semibold text-gray-700">
                                    Name of  ADS
                                </label>

                                <input type="text" id="name-of-ads" placeholder="Admin" defaultValue="Admin" required
                                    autoFocus
                                    className="input w-full mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                            </div>

                            <div className="col-span-6 ">
                                <label htmlFor="Email" className="block text-sm font-semibold text-gray-700">
                                    Description
                                </label>

                                <input type="text" id="description" placeholder="Description" defaultValue="1" required
                                    autoFocus
                                    className="input w-full mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                            </div>

                            <div className="col-span-6 ">
                                <label htmlFor="Email" className="block text-sm font-semibold text-gray-700">
                                    Upload ADS
                                </label>

                                <span className="mt-1">
                                    <FileUpload />
                                </span>
                            </div>

                            <div className="col-span-6">
                                <button
                                    className=" w-full mt-6 laptop:mt-2 rounded-md border border-[#3C1450] bg-[#3C1450] p-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-blue-500">Save
                                </button>
                            </div>
                        </form>
                    </Typography>

                </DialogBody>
            </Dialog>
        </>
    );
}
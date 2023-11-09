import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    Input,
    Radio,
} from "@material-tailwind/react";
import BasicDatePicker from '../../Components/DatePicker/DatePicker';

export function AddRolesModal() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button onClick={handleOpen}
                className=" px-4 py-3 my-2 uppercase rounded-md border border-[#3C1450] bg-[#3C1450] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-[#3C1450]">
                Add Role
            </Button>

            <Dialog open={open} handler={handleOpen}>
                <div className="text-right">
                    <button onClick={handleOpen} title="Close">
                        <h1 className="laptop:text-lg text-2xl px-4 laptop:px-2 py-2 laptop:py-0  font-bold">
                            X
                        </h1>
                    </button>
                </div>
                <DialogHeader className="py-0 px-6">
                    <span className=''>
                        <h1 className="text-[1.5rem] text-[#3C1450] leading-normal font-bold">
                            Add Roles
                        </h1>
                        <p className='text-[#636E95] font-medium'>
                            Lorem ipsum dolor sit amet consectetur. Sollicitudin mauris sit
                            egestas gravida nisl nunc diam libero amet. Aliquam nunc.
                        </p>
                    </span>
                </DialogHeader>

                <hr className="my-2" />

                <DialogBody className="h-[42rem] overflow-scroll">
                    <Typography>
                        <form className=" rounded-lg grid grid-cols-6 px-2 space-y-2">

                            <div className="col-span-6 ">
                                <label htmlFor="Email" className="block laptop:text-xs text-sm font-semibold text-[#515B6F]">
                                    What do you want to call this role
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    placeholder="This is placeholder"
                                    required
                                    autoFocus
                                    className="input w-full mt-1 rounded-md border-gray-200 bg-white text-sm text-[#515B6F] shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 space-y-2 ">
                                <label htmlFor="Email" className="block laptop:text-xs text-sm font-semibold text-[#515B6F]">
                                    Payment and invoice
                                </label>

                                <span className="flex justify-between">
                                    <p className="block laptop:text-xs text-sm font-medium text-[#515B6F]">
                                        Prepare and manage payment and invoice
                                    </p>
                                    <span className="flex gap-2">
                                        <span>
                                            {/* <Radio name="type" label="HTML" /> */}
                                            <input type="radio" id="yes" value="yes" />
                                            <label for="yes" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">Yes</label>
                                        </span>
                                        <span>
                                            <input type="radio" id="no" value="no" />
                                            <label for="no" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">No</label>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div className="col-span-6 space-y-2">
                                <label htmlFor="Email" className="block laptop:text-xs text-sm font-semibold text-[#515B6F]">
                                    Account Privileges
                                </label>
                                <span className="flex justify-between">
                                    <label className="block laptop:text-xs text-sm font-medium text-[#515B6F]">
                                        Can View Account
                                    </label>
                                    <span className="flex gap-2">
                                        <span>
                                            {/* <Radio name="type" label="HTML" /> */}
                                            <input type="radio" id="yes" value="yes" />
                                            <label for="yes" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">Yes</label>
                                        </span>
                                        <span>
                                            <input type="radio" id="no" value="no" />
                                            <label for="no" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">No</label>
                                        </span>
                                    </span>
                                </span>
                                <span className="flex justify-between">
                                    <label className="block laptop:text-xs text-sm font-medium text-[#515B6F]">
                                        Can Download Statement
                                    </label>
                                    <span className="flex gap-2">
                                        <span>
                                            {/* <Radio name="type" label="HTML" /> */}
                                            <input type="radio" id="yes" value="yes" />
                                            <label for="yes" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">Yes</label>
                                        </span>
                                        <span>
                                            <input type="radio" id="no" value="no" />
                                            <label for="no" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">No</label>
                                        </span>
                                    </span>
                                </span>
                                <span className="flex justify-between">
                                    <label className="block laptop:text-xs text-sm font-medium text-[#515B6F]">
                                        Can Create Account
                                    </label>
                                    <span className="flex gap-2">
                                        <span>
                                            {/* <Radio name="type" label="HTML" /> */}
                                            <input type="radio" id="yes" value="yes" />
                                            <label for="yes" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">Yes</label>
                                        </span>
                                        <span>
                                            <input type="radio" id="no" value="no" />
                                            <label for="no" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">No</label>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div className="col-span-6 space-y-2">
                                <label htmlFor="Email" className="block laptop:text-xs text-sm font-semibold text-[#515B6F]">
                                    Administration Privileges
                                </label>
                                <span className="flex justify-between">
                                    <label className="block laptop:text-xs text-sm font-medium text-[#515B6F]">
                                        Team Mates
                                    </label>
                                    <span className="flex gap-2">
                                        <span>
                                            {/* <Radio name="type" label="HTML" /> */}
                                            <input type="radio" id="yes" value="yes" />
                                            <label for="yes" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">Yes</label>
                                        </span>
                                        <span>
                                            <input type="radio" id="no" value="no" />
                                            <label for="no" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">No</label>
                                        </span>
                                        <span>
                                            <input type="radio" id="hide" value="no" />
                                            <label for="no" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">Hide</label>
                                        </span>
                                    </span>
                                </span>
                                <span className="flex justify-between">
                                    <label className="block laptop:text-xs text-sm font-medium text-[#515B6F]">
                                        Role and Privileges
                                    </label>
                                    <span className="flex gap-2">
                                        <span>
                                            {/* <Radio name="type" label="HTML" /> */}
                                            <input type="radio" id="yes" value="yes" />
                                            <label for="yes" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">Yes</label>
                                        </span>
                                        <span>
                                            <input type="radio" id="no" value="no" />
                                            <label for="no" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">No</label>
                                        </span>
                                        <span>
                                            <input type="radio" id="hide" value="no" />
                                            <label for="no" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">Hide</label>
                                        </span>
                                    </span>
                                </span>
                            </div>

                            <div className="col-span-6 space-y-2">
                                <label htmlFor="Email" className="block laptop:text-xs text-sm font-semibold text-[#515B6F]">
                                    Settings Privileges
                                </label>
                                <span className="flex justify-between">
                                    <label className="block laptop:text-xs text-sm font-medium text-[#515B6F]">
                                        Company Settings
                                    </label>
                                    <span className="flex gap-2">
                                        <span>
                                            {/* <Radio name="type" label="HTML" /> */}
                                            <input type="radio" id="yes" value="yes" />
                                            <label for="yes" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">Yes</label>
                                        </span>
                                        <span>
                                            <input type="radio" id="no" value="no" />
                                            <label for="no" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">No</label>
                                        </span>
                                    </span>
                                </span>
                                <span className="flex justify-between">
                                    <label className="block laptop:text-xs text-sm font-medium text-[#515B6F]">
                                        Compliance Check
                                    </label>
                                    <span className="flex gap-2">
                                        <span>
                                            {/* <Radio name="type" label="HTML" /> */}
                                            <input type="radio" id="yes" value="yes" />
                                            <label for="yes" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">Yes</label>
                                        </span>
                                        <span>
                                            <input type="radio" id="no" value="no" />
                                            <label for="no" className="text-[#181336] px-2 font-semibold laptop:text-xs text-sm">No</label>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div className="col-span-6 ">
                                <label htmlFor="Email" className="block laptop:text-xs text-sm font-semibold text-[#515B6F]">
                                    Description
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    placeholder="This is placeholder"
                                    required
                                    autoFocus
                                    className="input w-full mt-1 rounded-md border-gray-200 bg-white text-sm text-[#515B6F] shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <button
                                    className=" w-full mt-6 laptop:mt-2 rounded-md border border-[#3C1450] bg-[#3C1450] p-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-blue-500"
                                >Save Role
                                </button>
                            </div>
                        </form>
                    </Typography>

                </DialogBody>
            </Dialog >
        </>
    );
}

import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";
import BasicDatePicker from '../../Components/DatePicker/DatePicker';

export function AddAdminModal() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button onClick={handleOpen}
                className=" laptop:px-12 normal-case font-medium px-6 mt-2 laptop:mt-0 py-2 rounded-md border border-[#3C1450] bg-[#3C1450] text-sm text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-[#3C1450]">
                Add Admins
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
                        <h1 className="text-[1.5rem] text-[#242F57] leading-normal font-bold">
                            Add Admin
                        </h1>
                        <p className='text-[#636E95] font-medium'>
                            This information can be created and edited
                        </p>
                    </span>
                </DialogHeader>

                <hr className="my-4" />

                <DialogBody className="h-[42rem] mt- overflow-scroll">
                    <form className=" rounded-lg grid grid-cols-6 px-2 space-y-2">

                        <div className="col-span-6 ">
                            <label htmlFor="Email" className="block laptop:text-xs text-sm font-medium text-gray-700">
                                Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                placeholder="Name"
                                defaultValue="Tope Hope"
                                required
                                autoFocus
                                className="input w-full mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div className="col-span-6 ">
                            <label htmlFor="Email" className="block laptop:text-xs text-sm font-medium text-gray-700">
                                Email Address
                            </label>

                            <input
                                type="email"
                                id="Email"
                                placeholder="Email address"
                                defaultValue="temi@gmail"
                                required
                                autoFocus
                                className="input w-full mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>
                        <div className="col-span-6 ">
                            <label htmlFor="Email" className="block laptop:text-xs text-sm font-medium text-gray-700">
                                Select Role
                            </label>
                            <select name="notifications" id="notifications"
                                defaultValue="admin"
                                className="input w-full mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
                                <option value="admin">Admin</option>
                                <option value="super-admin">Super Admin</option>
                            </select>
                        </div>
                        <div className="col-span-6 ">
                            <label htmlFor="Email" className="block laptop:text-xs text-sm font-medium text-gray-700">
                                Phone Number
                            </label>

                            <input
                                type="email"
                                id="Email"
                                placeholder="Phone Number"
                                defaultValue="089282819292"
                                required
                                autoFocus
                                className="input w-full mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>
                        <div className="col-span-6 ">
                            <label htmlFor="Email" className="block laptop:text-xs text-sm font-medium text-gray-700">
                                Nationality
                            </label>
                            {/* <Input label="Nationality" size="lg" /> */}
                            <select name="notifications" id="notifications"
                                defaultValue="nigerian"
                                className="input w-full mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
                                <option value="nigerian">Nigerian</option>
                                <option value="non-nigerian">Non-Nigerian</option>
                            </select>
                        </div>
                        <div className="col-span-6 ">
                            <label htmlFor="Email" className="block laptop:text-xs text-sm font-medium text-gray-700">
                                Date of birth
                            </label>


                            <div className="">
                                <BasicDatePicker />
                            </div>

                        </div>

                        <div className="col-span-6">
                            <button
                                className=" w-full mt-6 laptop:mt-2 rounded-md border border-[#3C1450] bg-[#3C1450] p-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-blue-500"
                            >Submit
                            </button>
                        </div>
                    </form>
                </DialogBody>
            </Dialog >
        </>
    );
}

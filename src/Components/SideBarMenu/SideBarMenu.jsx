import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase.js';

import {
    Card, List, ListItem, ListItemPrefix, Accordion,
    AccordionHeader, AccordionBody
} from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { LiaMoneyBillAltSolid } from "react-icons/lia";
import { LuLogOut } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { PiClipboardText } from "react-icons/pi";
import { RiLayout6Line, RiAccountBoxFill, RiAdminLine, RiAdvertisementFill } from "react-icons/ri";
import { GoMegaphone } from "react-icons/go";
import { GiPayMoney } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { BiUserCheck, BiCrown } from "react-icons/bi";
import { FiCreditCard } from "react-icons/fi";
import { BsDot } from "react-icons/bs";



export function SidebarWithSearch({ showSidebar }) {
    const navigate = useNavigate();
    // logout
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });
    }
    // end of logout

    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        // <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <Card
            className={`h-full ${showSidebar ? "block" : "hidden"
                } rounded-none border-none w-full max-w-[18rem] left-0 bg-transparent px-1 pt-[rem]`}
        >

            <List>
                {/* <div className=" mx-auto py-2">
                    <FaCircleUser size={60} />
                </div> */}

                <NavLink to="dashboard"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                            : 'bg-transparent'
                    }>
                    {/* to="/" */}
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <RiLayout6Line className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Dashboard
                        </p>
                    </ListItem>
                </NavLink>

                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <GrTransaction className="h-5 w-5" />
                            </ListItemPrefix>
                            <p className="mr-auto font-normal">
                                Transactions
                            </p>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <NavLink to="savings"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                                        : 'bg-transparent'
                                }>
                                <ListItem className="py-2">
                                    <ListItemPrefix>
                                        <BsDot strokeWidth={3} className="h-4 w-4" />
                                    </ListItemPrefix>
                                    Overview
                                </ListItem>
                            </NavLink>
                            <NavLink to="savings"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                                        : 'bg-transparent'
                                }>
                                <ListItem className="py-2">
                                    <ListItemPrefix>
                                        <BsDot strokeWidth={3} className="h-4 w-4" />
                                    </ListItemPrefix>
                                    Refunds
                                </ListItem>
                            </NavLink>
                        </List>
                    </AccordionBody>
                </Accordion>

                <NavLink to="savings"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <GiPayMoney className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Savings
                        </p>
                    </ListItem>
                </NavLink>

                <NavLink to="cards"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <FiCreditCard className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Cards
                        </p>
                    </ListItem>
                </NavLink>

                <NavLink to="account"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <RiAccountBoxFill className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Account
                        </p>
                    </ListItem>
                </NavLink>

                <NavLink to="customers"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <IoIosPeople className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Customers
                        </p>
                    </ListItem>
                </NavLink>

                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <LiaMoneyBillAltSolid className="h-5 w-5" />
                            </ListItemPrefix>
                            <p color="" className="mr-auto font-normal">
                                Bill Payment
                            </p>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <NavLink to="bill-payment/airtime"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                                        : 'bg-transparent'
                                }>
                                <ListItem className="py-2">
                                    <ListItemPrefix>
                                        <BsDot strokeWidth={3} className="h-4 w-4" />
                                    </ListItemPrefix>
                                    Airtime
                                </ListItem>
                            </NavLink>
                            <NavLink to="bill-payment/data"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                                        : 'bg-transparent'
                                }>
                                <ListItem className="py-2">
                                    <ListItemPrefix>
                                        <BsDot strokeWidth={3} className="h-4 w-4" />
                                    </ListItemPrefix>
                                    Data
                                </ListItem>
                            </NavLink>
                            <NavLink to="bill-payment/utility"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                                        : 'bg-transparent'
                                }>
                                <ListItem className="py-2">
                                    <ListItemPrefix>
                                        <BsDot strokeWidth={3} className="h-4 w-4" />
                                    </ListItemPrefix>
                                    Utility
                                </ListItem>
                            </NavLink>
                            <NavLink to="bill-payment/electricity"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                                        : 'bg-transparent'
                                }>
                                <ListItem className="py-2">
                                    <ListItemPrefix>
                                        <BsDot strokeWidth={3} className="h-4 w-4" />
                                    </ListItemPrefix>
                                    Electricity
                                </ListItem>
                            </NavLink>
                            <NavLink to="bill-payment/cabletv"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                                        : 'bg-transparent'
                                }>
                                <ListItem className="py-2">
                                    <ListItemPrefix>
                                        <BsDot strokeWidth={3} className="h-4 w-4" />
                                    </ListItemPrefix>
                                    Cable TV
                                </ListItem>
                            </NavLink>
                        </List>
                    </AccordionBody>
                </Accordion>

                <NavLink to="admin"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <RiAdminLine className="h-5 w-5" />
                        </ListItemPrefix>
                        Admin
                    </ListItem>
                </NavLink>

                <NavLink to="roles"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <PiClipboardText className="h-5 w-5" />
                        </ListItemPrefix>
                        Roles
                    </ListItem>
                </NavLink>

                <NavLink to="permissions"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <BiUserCheck className="h-5 w-5" />
                        </ListItemPrefix>
                        Permissions
                    </ListItem>
                </NavLink>

                <NavLink to="/profile"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <RxAvatar className="h-5 w-5" />
                        </ListItemPrefix>
                        Profile
                    </ListItem>
                </NavLink>

                <NavLink to="settings"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            {/* <Cog6ToothIcon className="h-5 w-5" /> */}
                            <IoSettingsOutline className="h-5 w-5" />
                        </ListItemPrefix>
                        Settings
                    </ListItem>
                </NavLink>

                <NavLink to="ads"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <RiAdvertisementFill className="h-5 w-5" />
                        </ListItemPrefix>
                        ADS
                    </ListItem>
                </NavLink>

                <NavLink to="promotions"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <GoMegaphone className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Promotion
                        </p>
                    </ListItem>
                </NavLink>

                <NavLink to="ota-update"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-[#F7EDFC] text-[#3C1450] font-bold rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <BiCrown className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            OTA Update
                        </p>
                    </ListItem>
                </NavLink>

                <Link to="">
                    <ListItem className="py-2" onClick={handleLogout}>
                        <ListItemPrefix>
                            {/* <PowerIcon className="h-5 w-5" /> */}
                            <LuLogOut className="h-5 w-5 transform scale-x-[-1]" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </Link>
            </List>

        </Card>
    );
}
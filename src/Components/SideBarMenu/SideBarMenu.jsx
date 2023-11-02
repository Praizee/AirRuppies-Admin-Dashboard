import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase.js';

import {
    Card, List, ListItem, ListItemPrefix, Accordion,
    AccordionHeader,
} from "@material-tailwind/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
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

                <Link to="dashboard">
                    {/* to="/" */}
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <RiLayout6Line className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Dashboard
                        </p>
                    </ListItem>
                </Link>

                <Link to="transactions">
                    <Accordion
                        icon={
                            <ChevronRightIcon strokeWidth={2.5} className="mx-auto h-4 w-4" />
                        }
                    >
                        <ListItem className="p-0">
                            <AccordionHeader className="border-b-0 py-2 px-3">
                                <ListItemPrefix>
                                    <GrTransaction className="h-5 w-5" />
                                </ListItemPrefix>
                                <p className="mr-auto font-normal">
                                    Transactions
                                </p>
                            </AccordionHeader>
                        </ListItem>
                    </Accordion>
                </Link>

                <Link to="savings">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <GiPayMoney className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Savings
                        </p>
                    </ListItem>
                </Link>

                <Link to="cards">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <FiCreditCard className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Cards
                        </p>
                    </ListItem>
                </Link>

                <Link to="account">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <RiAccountBoxFill className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Account
                        </p>
                    </ListItem>
                </Link>

                <Link to="customers">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <IoIosPeople className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Customers
                        </p>
                    </ListItem>
                </Link>

                <Link to="bill-payment">
                    <Accordion
                        icon={
                            <ChevronRightIcon strokeWidth={2.5} className="mx-auto h-4 w-4" />
                        }
                    >
                        <ListItem className="p-0">
                            <AccordionHeader className="border-b-0 py-2 px-3">
                                <ListItemPrefix>
                                    <LiaMoneyBillAltSolid className="h-5 w-5" />
                                </ListItemPrefix>
                                <p className="mr-auto font-normal">
                                    Bill Payment
                                </p>
                            </AccordionHeader>
                        </ListItem>
                    </Accordion>
                </Link>

                <Link to="admin">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <RiAdminLine className="h-5 w-5" />
                        </ListItemPrefix>
                        Admin
                    </ListItem>
                </Link>

                <Link to="roles">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <PiClipboardText className="h-5 w-5" />
                        </ListItemPrefix>
                        Roles
                    </ListItem>
                </Link>

                <Link to="permissions">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <BiUserCheck className="h-5 w-5" />
                        </ListItemPrefix>
                        Permissions
                    </ListItem>
                </Link>

                <Link to="/profile">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <RxAvatar className="h-5 w-5" />
                        </ListItemPrefix>
                        Profile
                    </ListItem>
                </Link>

                <Link to="settings">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            {/* <Cog6ToothIcon className="h-5 w-5" /> */}
                            <IoSettingsOutline className="h-5 w-5" />
                        </ListItemPrefix>
                        Settings
                    </ListItem>
                </Link>

                <Link to="ads">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <RiAdvertisementFill className="h-5 w-5" />
                        </ListItemPrefix>
                        ADS
                    </ListItem>
                </Link>

                <Link to="promotions">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <GoMegaphone className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Promotion
                        </p>
                    </ListItem>
                </Link>

                <Link to="ota-update">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <BiCrown className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            OTA Update
                        </p>
                    </ListItem>
                </Link>

                <Link to="">
                    <ListItem className="py-2" onClick={handleLogout}>
                        <ListItemPrefix>
                            {/* <PowerIcon className="h-5 w-5" /> */}
                            <LuLogOut className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </Link>
            </List>

        </Card>
    );
}
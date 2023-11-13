import React, { useState } from "react";
import { BiUser, BiUserVoice } from "react-icons/bi";
import { LuUserPlus, LuUsers } from "react-icons/lu";
import AddRoleImg from "../../assets/add-role-illustration-light 1.png"
import { AddRolesModal } from "./AddRolesModal";

const RolesList = () => {

    return (
        <section className="text-[#32475CDE]">
            <div className="">

                <div className="relative grid w-full laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-4">

                    <div className="border bg-white p-4 shadow-md rounded-lg relative">
                        <span className="">
                            <p className="text-sm mb-4 font-semibold text-[#32475C99]">
                                Total 4 users
                            </p>
                            <span className="">
                                <h2 className="text-xl font-black text-[#32475CDE]">
                                    Administrator
                                </h2>
                                <button className="text-sm font-semibold text-[#9310D4]">
                                    Edit Role
                                </button>
                            </span>
                        </span>
                    </div>

                    <div className="border bg-white p-4 shadow-md rounded-lg relative">
                        <span className="">
                            <p className="text-sm mb-4 font-semibold text-[#32475C99]">
                                Total 7 users
                            </p>
                            <span className="">
                                <h2 className="text-xl font-black text-[#32475CDE]">
                                    Administrator
                                </h2>
                                <button className="text-sm font-semibold text-[#9310D4]">
                                    Edit Role
                                </button>
                            </span>
                        </span>
                    </div>

                    <div className="border bg-white p-4 shadow-md rounded-lg relative">
                        <span className="">
                            <p className="text-sm mb-4 font-semibold text-[#32475C99]">
                                Total 5 users
                            </p>
                            <span className="">
                                <h2 className="text-xl font-black text-[#32475CDE]">
                                    Administrator
                                </h2>
                                <button className="text-sm font-semibold text-[#9310D4]">
                                    Edit Role
                                </button>
                            </span>
                        </span>
                    </div>

                    <div className="border bg-white p-4 shadow-md rounded-lg relative">
                        <span className="">
                            <p className="text-sm mb-4 font-semibold text-[#32475C99]">
                                Total 6 users
                            </p>
                            <span className="">
                                <h2 className="text-xl font-black text-[#32475CDE]">
                                    Support
                                </h2>
                                <button className="text-sm font-semibold text-[#9310D4]">
                                    Edit Role
                                </button>
                            </span>
                        </span>
                    </div>

                    <div className="border bg-white p-4 shadow-md rounded-lg relative">
                        <span className="">
                            <p className="text-sm mb-4 font-semibold text-[#32475C99]">
                                Total 10 users
                            </p>
                            <span className="">
                                <h2 className="text-xl font-black text-[#32475CDE]">
                                    Restricted User
                                </h2>
                                <button className="text-sm font-semibold text-[#9310D4]">
                                    Edit Role
                                </button>
                            </span>
                        </span>
                    </div>

                    <div className="border bg-white p-4 shadow-md rounded-lg relative">
                        <span className="flex justify-between">
                            <img src={AddRoleImg} className="w-1/4" alt="" />
                            <span className="text-right">
                                <AddRolesModal />

                                <p className="text-sm font-medium text-[#32475C99]">
                                    Add new role, if it doesn't
                                    exist.
                                </p>
                            </span>
                        </span>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default RolesList;

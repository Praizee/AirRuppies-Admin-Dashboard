import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import ProfileAvatar from "../../assets/Profile-Avatar.png"
import ProfileBackground from "../../assets/Profile-Bg.png"
import { LuPencilLine } from "react-icons/lu";
import { BiColorFill, BiUser, BiFlag, BiPhoneCall, BiEnvelope } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { BsCalendar, BsCheckLg, BsStar } from "react-icons/bs";
import TimeLine from '../../Components/Timeline/TimeLine';


const Profile = () => {
    const { user, setUser } = useAppContext(); // Use the user state from the context

    return (
        <div className="container pt-20 pb-0">

            <div className='bg-white rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>

                <img src={ProfileBackground} alt='profile-bg' className='w-full max-h-[15.625rem]' />
                {/* w-fit */}

                <div className='bg-white px-4 py-3 tablet:px-6 rounded-lg'>


                    <div className='flex w-full gap-2 text-[#32475CDE]'>
                        <span className='-mt-12'>
                            <img src={ProfileAvatar} alt='Profile Avatar' className='max-w-[7.5rem] max-h-[7.5rem]' />
                        </span>

                        <span className='w-full'>
                            <span className=''>
                                <h1 className='text-[1.5rem] font-black'>
                                    {user.firstName} {user.lastName}
                                </h1>
                            </span>

                            <span className='flex justify-between'>
                                <span className='flex gap-4'>
                                    <p className='py-3 flex gap-1 text-[1rem]'>
                                        <BiColorFill className='h-5 w-5' />
                                        Super Admin
                                    </p>
                                    <p className='py-3 flex gap-1 text-[1rem]'>
                                        <GrLocation className='h-5 w-5' />
                                        Lagos, Nigeria
                                    </p>
                                    <p className='py-3 flex gap-1 text-[1rem]'>
                                        <BsCalendar className='h-4 w-4' />
                                        Joined April 2021
                                    </p>
                                </span>
                                <span className='flex '>
                                    <Link to="/settings"
                                        className=" flex gap-2 px-4 py-3 uppercase rounded-md border border-[#3C1450] bg-[#3C1450] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-[#3C1450]">
                                        <LuPencilLine className='h-5 w-5' />
                                        Edit Profile
                                    </Link>
                                </span>
                            </span>
                        </span>
                    </div>

                </div>
            </div>

            <div className='laptop:flex mt-8 gap-10 justify-between'>
                {/* About */}
                <div className='bg-white laptop:max-w-[22.5rem] w-full max-h-[23rem] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <div className='px-4 py-6 tablet:p-6 text-[#32475CDE]'>
                        <h2 className='mb-4 text-[0.75rem]'>
                            ABOUT
                        </h2>
                        <span className='space-y-2'>
                            <p className='flex gap-2'>
                                <BiUser className='w-5 h-5' />
                                <b>Full Name: </b> {user && user.firstName ? user.firstName : 'Super'} {user && user.lastName ? user.lastName : 'Admin'}
                            </p>
                            <p className='flex gap-2'>
                                <BsCheckLg className='w-5 h-5' />
                                <b>Status: </b> Active
                            </p>
                            <p className='flex gap-2'>
                                <BsStar className='w-5 h-5' />
                                <b>Role: </b> Super Admin
                            </p>
                            <p className='flex gap-2'>
                                <BiFlag className='w-5 h-5' />
                                <b>Country: </b> Nigeria
                            </p>
                        </span>

                        <h2 className='mb-4 mt-8 text-[0.75rem]'>
                            CONTACT
                        </h2>
                        <span className='space-y-4'>
                            <p className='flex gap-2'>
                                <BiPhoneCall className='w-5 h-5' />
                                <b>Contact: </b> 08164636622
                            </p>
                            <p className='flex gap-2'>
                                <BiEnvelope className='w-5 h-5' />
                                <b>Email: </b> {user.email}
                            </p>
                        </span>
                    </div>
                </div>

                {/* Admin Activity Timeline */}
                <div className='bg-white mt-8 laptop:mt-0 w-full laptop:max-w-[46.6rem] min-h-[23rem] max-h-[24rem] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <div className='px-4 py-6 tablet:p-6 text-[#32475CDE]'>
                        <span className='space-y-2'>
                            <h1 className='font-black text-[1.2rem] mb-6'>
                                Admin Activity Timeline
                            </h1>
                        </span>
                        <TimeLine />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Profile
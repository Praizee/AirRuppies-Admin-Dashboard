import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import ProfileAvatar from "../../assets/Profile-Avatar.png"
import ProfileBackground from "../../assets/Profile-Bg.png"
import { LuPencilLine } from "react-icons/lu";
import { BiColorFill } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { BsCalendar } from "react-icons/bs";


const Profile = () => {
    const { user, setUser } = useAppContext(); // Use the user state from the context

    return (
        <div className="container pt-20 pb-0">

            <div className='bg-white rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>

                <img src={ProfileBackground} alt='profile-bg' className='max-h-[15.625rem]' />

                <div className='bg-white px-4 py-3 tablet:px-6 rounded-lg'>


                    <div className='flex w-full gap-2 text-[#32475CDE]'>
                        <span className='-mt-12'>
                            <img src={ProfileAvatar} alt='Profile Avatar' className='max-w-[7.5rem] max-h-[7.5rem]' />
                        </span>

                        <span className='w-full'>
                            <span className=''>
                                <h1 className='text-[1.5rem] font-black'>
                                    John Doe
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

            <div className='bg-white my-8 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>

                <div className='px-4 flex tablet:px-6 text-[#32475CDE]'>
                    <span className='space-y-2'>
                        <h2 className=''>
                            ABOUT
                        </h2>
                        <p>
                            <b>Full Name: </b> John Doe
                        </p>
                        <p>
                            <b>Full Name: </b> John Doe
                        </p>
                        <p>
                            <b>Full Name: </b> John Doe
                        </p>
                        <p>
                            <b>Full Name: </b> John Doe
                        </p>
                    </span>

                    <span className='space-y-2'>
                        <h2 className=''>
                            CONTACTS
                        </h2>
                        <p>
                            <b>Full Name: </b> John Doe
                        </p>
                        <p>
                            <b>Full Name: </b> John Doe
                        </p>
                    </span>
                </div>

            </div>

        </div >
    )
}

export default Profile
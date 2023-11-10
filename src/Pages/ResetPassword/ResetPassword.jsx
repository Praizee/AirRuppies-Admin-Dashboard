import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../Firebase/firebase.js'; // Import Firebase authentication
import { Spinner } from "@material-tailwind/react"; // Import the Spinner component
import AppLogo from "../../assets/App Logo.png";

const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [isSent, setIsSent] = useState(false);
    const [loading, setLoading] = useState(false); // Add loading state

    const handlePasswordReset = async () => {
        setLoading(true); // Start loading

        try {
            await sendPasswordResetEmail(auth, email);
            console.log("Password reset email sent successfully.");
            setIsSent(true); // Set isSent to true after successfully sending the email.

            // Automatically hide the message after 5 seconds (5000 milliseconds)
            setTimeout(() => {
                setIsSent(false);
            }, 5000);
        } catch (error) {
            console.error("Error sending password reset email:", error);
            // Handle the error, e.g., show an error message to the user.
        } finally {
            setLoading(false); // Stop loading
        }
    };




    return (
        <section className="text-black bg-[#F6F6F6]">
            <motion.div
                variants={animationConfiguration}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.8 }}
            >

                <section className="bg-white">

                    <main
                        className="flex items-center justify-center px-8 py-8"
                    >
                        <div className="">

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handlePasswordReset();
                                }}
                                className=" mt-8 rounded-lg grid grid-cols-6 gap-6 border-2 border-dotted border-[#551B73] p-10"
                            >

                                <div className="col-span-6 ">
                                    <img src={AppLogo} className="mx-auto py-4" alt="app-logo" />
                                    <h1 className="font-bold text-[1.5rem] text-[#32475CDE]">
                                        Reset Password 🔒
                                    </h1>
                                    <p className="text-[#32475C99]">
                                        Enter the email linked to your account. <br />
                                        We will send you a reset link.
                                    </p>
                                </div>

                                <div className="col-span-6 ">
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        id="Email"
                                        name="email"
                                        required
                                        autoFocus
                                        className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-6 sm:gap-4">
                                    <button
                                        onClick={handlePasswordReset}
                                        disabled={loading} // Disable the button while loading
                                        className="inline-block shrink-0 w-full rounded-md border border-[#551B73] bg-[#551B73] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#551B73] focus:outline-none focus:ring active:text-[#551B73]"
                                    >
                                        {loading ? (
                                            <span className="flex place-content-center gap-2">
                                                <Spinner color="blue" className="h-5 w-5 text-gray-500" />
                                                <span className="text-gray-800 text-sm">Sending Email... </span>
                                            </span>
                                        ) : (
                                            'Send Reset Link'
                                        )}
                                    </button>

                                </div>


                                <div className="col-span-6">
                                    {isSent &&
                                        <p className="text-sm sm:my-2 text-[#551B73]">
                                            Password reset email sent. Check your inbox.
                                        </p>
                                    }

                                    <p className="mt- text-sm sm:mt-0 text-center">
                                        <Link to="/" className="text-[#551B73] font-semibold text-sm link link-hover">
                                            Back to Login
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </form>
                        </div>
                    </main>
                </section>


            </motion.div>
        </section>
    );
};

export default ResetPassword;

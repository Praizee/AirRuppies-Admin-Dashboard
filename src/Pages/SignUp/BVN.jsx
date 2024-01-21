import React, { useState } from "react";
import { submitBVN, verifyOTP } from '../../Api/RegisterApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import AppLogo from "../../assets/App Logo.png";

const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const BVNForm = () => {
    const [bvn, setBVN] = useState('');
    const [otp, setOTP] = useState('');
    const [loading, setLoading] = useState(false);
    const [bvNSubmitted, setBVNSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous errors
        setError(null);
        setSuccess(null);

        // Start loading
        setLoading(true);

        try {
            // Validate BVN format
            const bvnNumber = parseInt(bvn, 10);

            if (isNaN(bvnNumber) || bvn.length !== 11) {
                throw new Error("Please enter a valid 11-digit BVN.");
            }

            if (bvNSubmitted) {
                // If BVN has been submitted, verify OTP
                const response = await verifyOTP(bvn, otp);

                // Handle the response as needed (e.g., show a success message)
                setSuccess(response.message);
                toast.success(response.message); // Show success toast
            } else {
                // Make the API call to submit BVN
                await submitBVN(bvn);
                setBVNSubmitted(true);
            }
        } catch (error) {
            // Handle different types of errors separately
            if (error.message === "This BVN has already been verified and used.") {
                // Handle case where BVN has already been verified and used
                setError(error.message);
                toast.error(error.message);
            } else if (error.message.includes("valid 11-digit BVN")) {
                // Handle validation errors for BVN length
                setError(error.message);
                toast.error(error.message);
            } else if (error instanceof TypeError && error.message === "Failed to fetch") {
                // Handle network-related errors (CORS, failed to fetch, etc.)
                setError("Network error occurred. Please try again.");
                toast.error("Network error occurred. Please try again.");
            } else {
                // Handle other types of errors
                setError("An unexpected error occurred.");
                toast.error("An unexpected error occurred.");
            }
        } finally {
            // Stop loading regardless of success or failure
            setLoading(false);
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
                    <ToastContainer autoClose={5000} />
                    <main className="flex items-center justify-center px-8 py-8">
                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 rounded-lg grid grid-cols-6 gap-6 shadow-xl p-6 md:p-10"
                        >
                            <div className="col-span-6 space-y-2">
                                <img src={AppLogo} className="mx-auto py-4" alt="app-logo" />
                                <h1 className="text-center font-bold text-[1.5rem] text-[#32475CDE]">
                                    Welcome to AirRuppies! 👋🏻
                                </h1>
                                <p className="text-[#32475C99]">
                                    {bvNSubmitted
                                        ? "Please enter the OTP sent to your phone"
                                        : "Please enter your 11-digit BVN"}
                                </p>
                            </div>

                            {/* BVN */}
                            {!bvNSubmitted && (
                                <div className="col-span-6 relative">
                                    <label
                                        htmlFor="BVN"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        BVN:
                                        <input
                                            type="number"
                                            value={bvn}
                                            id="BVN"
                                            required
                                            onChange={(e) => setBVN(e.target.value)}
                                            autoFocus
                                            className="w-full mt-1 input rounded-md border-gray-200 py-2.5 px-2.5 pe-10 shadow-sm text-sm"
                                        />
                                    </label>
                                </div>
                            )}

                            {/* OTP */}
                            {bvNSubmitted && (
                                <div className="col-span-6 relative">
                                    <label
                                        htmlFor="OTP"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        OTP:
                                        <input
                                            type="number"
                                            value={otp}
                                            id="OTP"
                                            required
                                            onChange={(e) => setOTP(e.target.value)}
                                            className="w-full mt-1 input rounded-md border-gray-200 py-2.5 px-2.5 pe-10 shadow-sm text-sm"
                                        />
                                    </label>
                                </div>
                            )}

                            <div className="col-span-6 sm:gap-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-block shrink-0 w-full rounded-md border border-[#551B73] bg-[#551B73] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#551B73] focus:outline-none focus:ring active:text-[#551B73]"
                                >
                                    {loading ? (
                                        <>
                                            <span className="flex place-content-center gap-2">
                                                <span className="loading loading-spinner loading-sm"></span>
                                                <span className="text-sm">
                                                    Submitting...{" "}
                                                </span>
                                            </span>
                                        </>
                                    ) : (
                                        bvNSubmitted ? 'Submit OTP' : 'Submit BVN'
                                    )}
                                </button>
                            </div>

                            <div className="col-span-6 sm:gap-4">
                                <p className="text-sm text-gray-500">
                                    Already have an account? &nbsp;
                                    <Link
                                        to="/"
                                        className="text-[#551B73] font-semibold text-sm link link-hover"
                                    >
                                        Login
                                    </Link>
                                    .
                                </p>
                            </div>
                        </form>
                    </main>
                </section>
            </motion.div>
        </section>
    );
};

export default BVNForm;

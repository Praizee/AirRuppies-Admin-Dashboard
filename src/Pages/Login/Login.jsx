import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.js';

import { motion } from "framer-motion";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import AppLogo from "../../assets/App Logo.png";
import { Spinner } from "@material-tailwind/react"; // Import the Spinner component
import Alerts from "../../Components/Alerts/Alerts.jsx";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const [errorMessages, setErrorMessages] = useState([]);



  const onLogin = (e) => {
    e.preventDefault();
    setErrorMessages([]); // Clear any previous error messages
    setLoading(true); // Start loading

    if (!email || !password) {
      setErrorMessages(['Email and password are required.']);
      setLoading(false);
      return;
    }

    let errorMessage = ''; // Use let instead of const

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/dashboard");
        console.log(user);
        console.log("Signed in!");
      })
      .catch((error) => {
        const errorCode = error.code;
        errorMessage = error.message; // Reassign errorMessage with let

        // delete this to continue using FirebaseError
        if (errorCode === "auth/invalid-login-credentials") {
          errorMessage = "Invalid login credentials. Check your email and password and try again.";
        }

        console.log(errorCode, errorMessage);
      })
      .finally(() => {
        // Set the error message to display to the user
        setErrorMessages([errorMessage]);
        setLoading(false); // Stop loading after success or failure
      });
  };



  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

              <form className="mt-8 rounded-lg grid grid-cols-6 gap-6 shadow-xl p-6 md:p-10">

                <div className="col-span-6 ">
                  <img src={AppLogo} className="mx-auto py-4" alt="app-logo" />
                  <h1 className="text-center font-bold text-[1.5rem] text-[#32475CDE]">
                    Welcome to AirRuppies! 👋🏻
                  </h1>
                  <p className="text-[#32475C99]">
                    Please sign-in to your account
                  </p>
                </div>

                <div className="col-span-6 ">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    required
                    autoFocus
                    className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                {/* password */}
                <div className="col-span-6 relative">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="Password"
                    required
                    className="w-full mt-1 input rounded-md border-gray-200 py-2.5 px-2.5 pe-10 shadow-sm text-sm"
                  />
                  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button type="button" className="text-gray-600 mt-6 hover:text-gray-700" onClick={togglePasswordVisibility}>
                      {showPassword ? <AiOutlineEyeInvisible size={23} title="Hide" /> : <AiOutlineEye size={23} title="Show" />}
                    </button>
                  </span>
                </div>
                {/* end of password */}

                <div className="col-span-6 flex justify-between">
                  <label htmlFor="MarketingAccept" className="flex gap-2">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className=" rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm font-medium">
                      Remember Me
                    </span>
                  </label>
                  <Link to="/reset-password"
                    className="mt-0 text-sm text-[#551B73] font-semibold link link-hover">
                    Forgot password?
                  </Link>

                </div>

                <div className="col-span-6 sm:gap-4">
                  <button
                    onClick={onLogin}
                    className="inline-block shrink-0 w-full rounded-md border border-[#551B73] bg-[#551B73] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#551B73] focus:outline-none focus:ring active:text-[#551B73]"
                    disabled={loading} // Disable the button while loading
                  >
                    {loading ? (
                      <>
                        <span className="flex place-content-center gap-2">
                          <Spinner color="blue" className="h-5 w-5 text-gray-500" />
                          <span className="text-gray-800 text-sm">Logging in... </span>
                        </span>
                      </>
                    ) : (
                      'LOGIN'
                    )}
                  </button>
                </div>

                <div className="col-span-6 sm:gap-4">
                  <p className="-mt-4 text-sm text-gray-500">
                    Don't have an account? &nbsp;
                    <Link to="/signup"
                      className="text-[#551B73] font-semibold text-sm link link-hover">
                      Sign up
                    </Link>.
                  </p>
                </div>

                {/* error alert message */}
                <Alerts errorMessages={errorMessages} />
              </form>
            </div>
          </main>
        </section>


      </motion.div>
    </section>
  );
};

export default Login;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase.js';

const AuthRoute = ({ children }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000); // Set the loading duration in milliseconds (e.g., 3000 for 3 seconds)

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is authenticated, allow access
                clearTimeout(timer); // Clear the timer if the user is authenticated before the timeout
                setLoading(false);
            } else {
                // User is not authenticated, redirect to the 'unauthorized' page
                navigate('/unauthorized');
            }
        });

        return () => {
            // Clean up the event listener and timer
            unsubscribe();
            clearTimeout(timer);
        };
    }, [navigate]);

    if (loading) {
        // Display a 'bouncing loader' loading indicator
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="circle animate-loader"></span>
                <span className="circle animate-loader animation-delay-200"></span>
                <span className="circle animate-loader animation-delay-400"></span>
            </div>
        );
    }

    // When the loading is complete, render the child components
    return children;
};

export default AuthRoute;

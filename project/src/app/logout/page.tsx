'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { isLoggedInTestBool } from '../utils/isLoggedInTestBool';

const LogoutPage = () => {
    const router = useRouter();
    

    useEffect(() => {
        localStorage.removeItem('token'); // Remove token from local storage
        router.push('/');
    }, [router]);

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    );
};

export default LogoutPage;
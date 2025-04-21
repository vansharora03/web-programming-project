"use client";

import Image from 'next/image';
import logo from '../assets/Logo1.png';
import Signin from './Signin';
import Register from './Register';
import Link from 'next/link';
import { isLoggedInTestBool } from '@/app/utils/isLoggedInTestBool';
import { useEffect, useState } from 'react';
import { set } from 'mongoose';

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            if (!localStorage.getItem('token')) {
                setIsLoggedIn(false);
            } else {
                setIsLoggedIn(true);
            }
        }, 500);
        return () => clearInterval(interval);
    }, []);
    return (
        <nav className='sticky top-0 w-full bg-white border-b border-black-200'>
            <div className='flex justify-between items-center h-20 px-6 md:px-16'>
            <div className='flex items-center text-black font-medium'>
                <Image 
                src={logo}
                alt='logo'
                className='h-24 w-auto'
                priority/>
                <Link className='cursor-pointer hover:underline' href='/'>
                Home
                </Link>
            </div>
               <div className='flex items-center gap-6 text-black font-medium'>
            <Link className='cursor-pointer hover:underline' href='/recipes' >
                Recipes
            </Link>
            <Link className='cursor-pointer hover:underline' href='/favorites' >
                Favorites
            </Link>
            <Link className='cursor-pointer hover:underline' href='/profile' >
                Profile
            </Link>
            {isLoggedIn ? (
                <>
                <span>Welcome, {localStorage.getItem('email')}</span>
                <Link href={'/logout'}>Log out</Link>
                </>
            ) : (
                <>
                <Signin></Signin>
                <Register></Register>
                </>
            )}
               </div>
            </div>
        </nav>
    );

};

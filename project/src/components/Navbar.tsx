import Image from 'next/image';
import logo from '../assets/Logo1.png';
import Signin from './Signin';
import Register from './Register';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='sticky top-0 w-full bg-white border-b border-black-200'>
            <div className='flex justify-between items-center h-20 px-6 md:px-16'>
                <div className='flex items-center'>
                    <Image 
                    src={logo}
                    alt='logo'
                    className='h-24 w-auto'
                    priority/>
                    <Link className='cursor-pointer' href='/'>
                        Home
                    </Link>
                </div>
               <div className='flex items-center gap-6 text-black font-medium'>
                <Link className='cursor-pointer' href='/recipes' >
                    Recipes
                </Link>
                <Signin/>
                <Register/>
               </div>
            </div>
        </nav>
    );

};

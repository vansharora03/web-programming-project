import Image from 'next/image';
import logo from '../assets/Logo1.png';
import Signin from './Signin';
import Register from './Register';
import Link from 'next/link';

export default function Navbar() {
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
                <Signin/>
                <Register/>
               </div>
            </div>
        </nav>
    );

};

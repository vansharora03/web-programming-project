import Image from 'next/image';
import logo from '../assets/Logo.png';

const Navbar = () => {
    return (
        <>
            <div className='w-full h-20 bg-white-800 sticky top-0'>
                <div className='container mx-auto px-4 h-full'>
                    <div className='flex justify-between items-center h-full'>
                        <Image className='h-24 w-auto'
                            src={logo}
                            alt='logo'
                        />
                        <ul className="hidden md:flex gap-x-6 text-black">
                            <li>
                                <p>Recipes</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    );

};

export default Navbar;
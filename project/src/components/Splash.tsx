import Image from "next/image";
import splash from "@/assets/splash3.png";
import styles from './Splash.module.css'

export default function Splash () {
    return (
        <div className='w-full'>
            <div className='relative w-full h-80 md:h-[500px]'>
                <Image 
                src={splash}
                alt='splash image'
                fill
                style={{objectFit:'cover'}}
                priority
                className={styles.fade}
                />

            </div>
        </div>
    )

}
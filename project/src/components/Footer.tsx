import Full from '@/assets/Full.png';
import Image from 'next/image';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Image
            src={Full}
            alt='logo'
            className='h-16 w-auto'
            priority />
        </footer>
    )
}

export default Footer;
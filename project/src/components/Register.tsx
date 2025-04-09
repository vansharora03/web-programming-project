import Link from "next/link";
import styles from './Buttons.module.css'

export default function Register () {
    return (
        <Link href='/project/src/app/signin.tsx'>
        <button className={styles.register}>
            Register
        </button>
        </Link>
    );

};

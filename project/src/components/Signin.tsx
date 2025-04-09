import Link from "next/link";
import styles from './Buttons.module.css'

export default function Signin () {
    return (
        <Link href='/project/src/app/signin.tsx'>
        <button className={styles.signin}>
            Sign In
        </button>
        </Link>
    );

};

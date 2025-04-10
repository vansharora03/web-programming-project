import Link from "next/link";
import styles from './Buttons.module.css'

export default function Signin () {
    return (
        <Link href='/loginpage'>
        <button className={styles.signin}>
            Sign In
        </button>
        </Link>
    );

};

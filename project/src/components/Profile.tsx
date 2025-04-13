import Image from "next/image";
import styles from "./Profile.module.css";
import Avatar from "@/assets/avatar.jpg";

const Profile = () => {
    /*
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    } */

    return (
        <>
            <div className={styles.top}>
                <Image
                    src={Avatar}
                    alt='Avatar'
                    className={styles.image}
                />
            </div>
            <div>
                <div className={styles.card}>
                    <div className={styles.header}>
                        User Profile
                    </div>
                    <div className={styles.settings}>
                        SETTINGS
                    </div>
                    <div>
                        <p className={styles.text}>Name</p>
                        <p className={styles.text}>Email</p>
                        <p className={styles.text}>Password</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
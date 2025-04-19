'use client';
import Image from "next/image";
import styles from "./Profile.module.css";
import Avatar from "@/assets/avatar.jpg";
import { useState } from "react";
import { FormEvent } from "react";

type ProfileProps = {
    onChange: (user: { email: string; password: string }) => void;
};

const Profile: React.FC<ProfileProps> = ({ onChange }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onChange({ email, password });
        setEmail("");
        setPassword("");
    };

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
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputs}>
                            <div>
                                <p className={styles.text}>Email</p>
                            </div>
                            <div className={styles.input}>
                                <input
                                    className="w-full px-4 py-2 placeholder:text-gray-500"
                                    type="email"
                                    placeholder="Change your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <p className={styles.text}>Password</p>
                            </div>
                            <div className={styles.input}>
                                <input
                                    className="w-full px-4 py-2 placeholder:text-gray-500"
                                    type="email"
                                    placeholder="Change your Password"
                                    value={email}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
export default Profile;
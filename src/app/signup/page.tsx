"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

interface IUser {
    email: string;
    password: string;
    username: string;
}

const SignupPage: React.FC = () => {
    const router = useRouter();
    const [user, setUser] = useState<IUser>({
        email: "",
        password: "",
        username: "",
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    const onSignUp = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success: ", response.data);
            toast.success("Signup successfull");
            router.push("/login");
        } catch (error: any) {
            console.log("Signup failed: ", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email && user.password && user.username) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="card">
                <h1 className="text-center">{loading ? "Processing..." : "Signup"}</h1>
                <hr />
                <label htmlFor="username">Username</label>
                <input
                    className="input"
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder="Username"
                />
                <label htmlFor="email">Email</label>
                <input
                    className="input"
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="Email"
                />
                <label htmlFor="password">Password</label>
                <input
                    className="input"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="Password"
                />
                <button
                    className="button"
                    onClick={onSignUp}
                    disabled={buttonDisabled || loading}
                >
                    {loading ? <span>Loading...</span> : "Signup"}
                </button>
                <Link href={"/login"}>Visit Login</Link>
            </div>
        </div>
    );
};

export default SignupPage;

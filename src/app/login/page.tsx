"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import '../signup/page.css';
import toast from "react-hot-toast";



const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', user);
      console.log("Login response", response);
      toast.success("Login success");
      router.push('/profile');
    } catch (error: any) {
      console.log(error);
      console.log("Login failed", error.message);
      toast.error(error.response.data.error || error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user.email && user.password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="card">
        <h1 className="text-center">Login</h1>
        <hr />

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
        <button className="button" onClick={onLogin} disabled={buttonDisabled}>Login</button>
        <Link href={"/signup"}>Signup</Link>
      </div>
    </div>
  );
};

export default LoginPage;

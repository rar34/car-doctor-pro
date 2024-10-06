"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { signIn } from 'next-auth/react'
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";

const page = () => {

    const handleLogin = async(e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const resp =await signIn('credentials', {
            email,
            password,
            redirect: false
        })
        console.log(resp)

    }
    return (
        <div className='container mx-auto my-14'>
            <div className='flex items-center justify-center gap-20'>
                <div>
                    <Image src={'/assets/images/login/login.svg'} height={500} width={500} alt='login image' />
                </div>
                <div className=' p-20 border rounded-lg'>
                    <h2 className='text-4xl font-semibold mb-12 text-center'>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div>
                            <label className='text-lg font-semibold' htmlFor="email">Email</label> <br />
                            <input name='email' type="text" placeholder="Enter Your email" className="input input-bordered mt-2 w-full" />
                        </div>
                        <div className='mt-6'>
                            <label className='text-lg font-semibold' htmlFor="password">Password</label> <br />
                            <input name='password' type="password" placeholder="Enter Your password" className="input input-bordered mt-2 w-full" />
                        </div>
                        <button className='btn btn-primary w-full mt-4'>Sign In</button>
                    </form>
                    <h4 className='text-lg font-medium text-center my-4'>Or Sign in with</h4>
                    <div className='flex gap-6 items-center justify-center'>
                        <button className='border-2 text-2xl p-2 rounded-full text-sky-700'><FaFacebookF /></button>
                        <button className='border-2 text-2xl p-2 rounded-full text-sky-700'><FaLinkedinIn /></button>
                        <button className='border-2 text-2xl p-2 rounded-full text-sky-700'><FaGoogle /></button>
                    </div>
                    <p className='mt-6'>No account ? Please <Link className='font-semibold text-primary' href={"/signup"}>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default page;
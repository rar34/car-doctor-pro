import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";

const page = () => {
    return (
        <div className='container mx-auto my-14'>
            <div className='flex items-center justify-center gap-20'>
                <div>
                    <Image src={'/assets/images/login/login.svg'} height={500} width={500} alt='login image' />
                </div>
                <div className=' p-20 border rounded-lg'>
                    <h2 className='text-4xl font-semibold mb-12 text-center'>Sign Up</h2>
                    <form>
                        <div>
                            <label className='text-lg font-semibold' htmlFor="name">Name</label> <br />
                            <input type="text" placeholder="Enter Your Name" className="input input-bordered my-2 w-full" />
                        </div>
                        <div>
                            <label className='text-lg font-semibold' htmlFor="email">Email</label> <br />
                            <input type="text" placeholder="Enter Your email" className="input input-bordered mt-2 w-full" />
                        </div>
                        <div className='mt-6'>
                            <label className='text-lg font-semibold' htmlFor="password">Password</label> <br />
                            <input type="text" placeholder="Enter Your password" className="input input-bordered mt-2 w-full" />
                        </div>
                        <button className='btn btn-primary w-full mt-4'>Sign In</button>
                    </form>

                    <p className='font-bold my-4 text-center'>Or Login with </p>
                    <div className='flex gap-6 items-center justify-center'>
                        <button className='border-2 text-2xl p-2 rounded-full text-sky-700'><FaFacebookF /></button>
                        <button className='border-2 text-2xl p-2 rounded-full text-sky-700'><FaLinkedinIn /></button>
                        <button className='border-2 text-2xl p-2 rounded-full text-sky-700'><FaGoogle /></button>
                    </div>
                    <h4 className='text-lg font-medium text-center my-4'>Already have an account ? <span className='font-semibold text-primary'><Link href={"/login"}>Login</Link></span></h4>
                </div>
            </div>
        </div>
    );
};

export default page;
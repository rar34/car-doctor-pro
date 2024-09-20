"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoMdCart, IoMdSearch } from "react-icons/io";

const Navbar = () => {

    const pathName = usePathname();

    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contacts",
            path: "/contacts"
        },

    ]

    return (
        <div className="bg-slate-200">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                navItems.map(items => <Link className={`font-semibold hover:text-orange-600 duration-300 ${pathName === items.path && 'text-orange-600 border-black border-b-2'}`} href={items.path} key={items.path}>{items.title}</Link>)
                            }
                        </ul>
                    </div>
                    <Link href={"/"}>
                        <Image src="/assets/logo.svg" height={60} width={100} alt='logo' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='flex items-center space-x-6'>
                        {
                            navItems.map(items => <Link className={`font-semibold hover:text-orange-600 duration-300 ${pathName === items.path && 'text-orange-600 border-black border-b-2'}`} href={items.path} key={items.path}>{items.title}</Link>)
                        }
                    </div>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center space-x-3'>
                        <IoMdCart className='text-xl'/>
                        <IoMdSearch className='text-xl'/>
                        <a className="btn btn-outline btn-primary px-8">Appointment</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
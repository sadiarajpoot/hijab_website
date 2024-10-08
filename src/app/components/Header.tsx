"use client"; 

import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image"
import logo from "../images/EDITLOGO.png"



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="fixed w-full h-24 shadow-xl bg-white  ">
                <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Image src={logo} alt="Logo" className="w-20 md:w-32 lg:w-25"/>
                    <div>
                        <ul className="hidden sm:flex ">
                            <Link  href="/">
                                <li className="ml-10 uppercase hover:border-b text-xl hover:active  hover:text-rose-300">Home</li>
                            </Link >
                            <Link href="/catagories">
                                <li className="ml-10 uppercase hover:border-b text-xl  hover:text-rose-300">Catagories</li>
                            </Link >

                            <Link href="/accessories">
                                <li className="ml-10 uppercase hover:border-b text-xl  hover:text-rose-300">Accessories</li>
                            </Link >
                            <Link href="/features">
                                <li className="ml-10 uppercase hover:border-b text-xl  hover:text-rose-300">Features</li>
                            </Link >
                            <Link href="/serivces">
                                <li className="ml-10 uppercase hover:border-b text-xl  hover:text-rose-300">Services</li>
                            </Link >
                            <Link href="/contact-us">
                                <li className="ml-10 uppercase hover:border-b text-xl  hover:text-rose-300">Contact Us</li>
                            </Link >
                        
                        </ul>
                    </div>
                    <div 
                        onClick={handleNav} 
                        className="md:hidden cursor-pointer pl-24" 
                        aria-expanded={menuOpen} 
                        aria-controls="mobile-menu"
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                    <div
                        id="mobile-menu"
                        className={`fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 ${
                            menuOpen ? 'translate-x-0' : 'translate-x-[-100%]'
                        }`}
                    >
                        <ul className="flex flex-col items-start">
                            <Link href="/">
                                <li className="py-4 text-xl  hover:text-rose-300" onClick={handleNav}>Home</li>
                            </Link>
                            <Link href="/catagories">
                                <li className="py-4 text-xl  hover:text-rose-300" onClick={handleNav}>Catagories</li>
                            </Link>
                            <Link href="/accessories">
                                <li className="py-4 text-xl  hover:text-rose-300" onClick={handleNav}>Accessories</li>
                            </Link>
                            <Link href="/features">
                                <li className="py-4 text-xl  hover:text-rose-300" onClick={handleNav}>Features</li>
                            </Link>
                            <Link href="/serivces">
                                <li className="py-4 text-xl  hover:text-rose-300" onClick={handleNav}>Services</li>
                            </Link>
                            <Link href="/contact-us">
                                <li className="py-4 text-xl  hover:text-rose-300" onClick={handleNav}>Contact Us</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

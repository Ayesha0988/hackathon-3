import Image from 'next/image';
import React from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Page = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            {/* Banner Section */}
            <div className="flex justify-center mb-4">
                <Image
                    src="/join.png"
                    alt="Shoes banner"
                    width={450}
                    height={200}
                />
            </div>

            {/* Form Section */}
            <div className="flex justify-center">
                <div className="form">
                    {/* Email Input */}
                    <label className=" text-sm font-medium text-gray-700">
                        Email Address
                        <br/>
                        <input
                            name="email"
                            className="w-96 px-5 py-2 my-2 border-2 border-gray-300"
                            type="email"
                            placeholder="Enter your email"
                        />
                    </label>
                    <br/>
                    {/* Password Input */}
                    <label className=" text-sm font-medium text-gray-700 ">
                        Password
                        <br/>
                        <input
                            name="password"
                            className="w-96 px-5 py-2 my-2 border-2 border-gray-300"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </label>
                    <br/>
                    {/* First Name Input */}
                    <label className=" text-sm font-medium text-gray-700">
                        First Name
                        <br/>
                        <input
                            name="firstName"
                            className="w-96 px-5 py-2 my-2 border-2 border-gray-300"
                            type="text"
                            placeholder="Enter your first name"
                        />
                    </label>
                    <br/>
                    {/* Last Name Input */}
                    <label className=" text-sm font-medium text-gray-700">
                        Last Name
                        <br/>
                        <input
                            name="lastName"
                            className="w-96 px-5 py-2 my-2 border-2 border-gray-300"
                            type="text"
                            placeholder="Enter your last name"
                        />
                    </label>
                    <br/>
                    {/* Date of Birth Input */}
                    <label className="block text-sm font-medium text-gray-700">
                        Date of Birth
                        <br/>
                        <input
                            name="dob"
                            className="w-96 px-5 py-2 my-2 border-2 border-gray-300"
                            type="date"
                        />
                    </label>
                    <span className="text-sm text-gray-500 pl-2">
                        Get a Nike Member Reward every year on your Birthday.
                    </span>

                    {/* Country Input */}
                    <label className="block text-sm font-medium text-gray-700 relative">
                        Country
                        <div className="relative">
                            <input
                                name="country"
                                className="w-96 px-5 py-2 my-2 border-2 border-gray-300"
                                type="text"
                                placeholder="Type here"
                            />
                            <div className="absolute inset-y-0 right-4 flex items-center text-gray-500">
                                <ChevronDown />
                            </div>
                        </div>
                    </label>

                    {/* Gender Input */}
                    <div className="flex justify-between">
                        <label className="block text-sm font-medium text-gray-700">
                            Gender
                            <br/>
                            <input
                                name="gender"
                                className="w-[180px] px-5 py-2 my-2 border-2 border-gray-300"
                                type="text"
                                placeholder="Type here"
                            />
                        </label>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-start py-4">
                        <input
                            id="email-updates"
                            type="checkbox"
                            className="relative top-[6px]"
                        />
                        <label htmlFor="email-updates" className="text-gray-500 px-2">
                            Sign up for emails to get updates from Nike on
                            <br />
                            products, offers, and your Member benefits.
                        </label>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex justify-center">
                        <p className="text-gray-600 text-center text-[13px] pl-1">
                            By Creating an Account you agree to Nike&apos;s{' '}
                            <span className="text-gray-500 underline">
                                Privacy Policy <br /> and Terms of Use.
                            </span>
                        </p>
                    </div>

                    {/* Join Us Button */}
                    <div className="flex justify-center">
                        <button
                            type="button"
                            className="w-96 bg-black text-white py-3 text-xl rounded-lg mt-6 mb-3"
                        >
                            Join Us
                        </button>
                    </div>

                    {/* Already a Member Section */}
                    <div className="flex justify-center items-center pb-5">
                        <span className="text-gray-500">
                            Already a member?
                            <Link href="/signIn">
                                <span className="text-black underline pl-1"> Sign In.</span>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;

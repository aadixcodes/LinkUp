'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission here
    // You can submit either username or email based on the input value in "login"
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="flex flex-row align-center justify-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-12">Welcome Back! to</h1>
            <img src="/assets/images/logoo.svg" alt="" className='w-[10rem] h-[3em] translate-y-[-0.5rem] translate-x-[0.5rem]' /> 
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username/Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Username or Email"
                className="block w-full pl-10 px-4 py-3 border-b border-gray-200 focus:border-blue-500 focus:outline-none"
                value={formData.login}
                onChange={(e) => setFormData({ ...formData, login: e.target.value })}
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="password"
                placeholder="Password"
                className="block w-full pl-10 px-4 py-3 border-b border-gray-200 focus:border-blue-500 focus:outline-none"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-white py-3 px-4 rounded-lg bg-[#07633c] hover:bg-[#128958] transition duration-200"
            >
              Login
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-8 text-center flex flex-col gap-[10px]">
            <a href="/signup" className="text-[#07633c] hover:text-[#128958]">
              Don't have an account? Sign up</a>
              <a href="/forgotpassword" className="text-[#07633c] hover:text-[#128958]">
              Forgot Password
            
            </a>
          </p>
          
        </div>

        {/* Image Section */}
        <div className="hidden md:block w-1/2 p-12">
          <div className="relative h-full">
            <Image
              src="/assets/images/login.jpg"
              alt="Login illustration"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

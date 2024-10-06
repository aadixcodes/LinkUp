'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ForgotPasswordForm() {
  const [step, setStep] = useState('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSendOTP = (e) => {
    e.preventDefault();
    // In a real application, you would send the OTP to the user's email here
    setMessage('OTP sent to your email. Please check your inbox.');
    setStep('otp');
    // For demonstration purposes, we're setting a default OTP
    setOtp('123456');
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (otp === '123456') {
      setMessage('OTP verified successfully.');
      setStep('newPassword');
    } else {
      setMessage('Invalid OTP. Please try again.');
    }
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      setShowPopup(true);
    } else {
      setMessage('Passwords do not match. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="flex flex-row align-center justify-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-12">Forgot Password</h1>
            <img src="/assets/images/logoo.svg" alt="" className='w-[10rem] h-[3em] translate-y-[-0.5rem] translate-x-[0.5rem]' />
          </div>
          
          {step === 'email' && (
            <form onSubmit={handleSendOTP} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="block w-full pl-10 px-4 py-3 border-b border-gray-200 focus:border-blue-500 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#07633c] hover:bg-[#128958] text-white py-3 px-4 rounded-lg transition duration-200"
              >
                Send Verification Code
              </button>
            </form>
          )}

          {step === 'otp' && (
            <form onSubmit={handleVerifyOTP} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="block w-full pl-10 px-4 py-3 border-b border-gray-200 focus:border-blue-500 focus:outline-none"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#07633c] hover:bg-[#128958] text-white py-3 px-4 rounded-lg transition duration-200"
              >
                Verify OTP
              </button>
            </form>
          )}

          {step === 'newPassword' && (
            <form onSubmit={handleUpdatePassword} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="New Password"
                  className="block w-full pl-10 px-4 py-3 border-b border-gray-200 focus:border-blue-500 focus:outline-none"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="block w-full pl-10 px-4 py-3 border-b border-gray-200 focus:border-blue-500 focus:outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#07633c] hover:bg-[#128958] text-white py-3 px-4 rounded-lg transition duration-200"
              >
                Update Password
              </button>
            </form>
          )}

          {message && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
              {message}
            </div>
          )}

          {showPopup && (
            <div className="fixed z-40 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
              <div className="bg-white p-5 rounded-lg shadow-xl">
                <h2 className="text-xl font-bold mb-4">Password Changed Successfully</h2>
                <Link href="/login">
                  <button className="bg-[#07633c] hover:bg-[#128958] text-white py-2 px-4 rounded">
                    Back to Login
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className="hidden md:block w-1/2 p-12">
          <div className="relative h-full">
            <img
              src="/assets/images/forgot.jpg"
              alt="Forgot password illustration"
              layout="fill"
              objectFit="contain"
              className="rounded-lg z-[-100]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
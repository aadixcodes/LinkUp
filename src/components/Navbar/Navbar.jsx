"use client";
import { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
// import { UserButton, useAuth } from "@clerk/nextjs";
import styles from "./Navbar.module.css";

const Navbar = () => {
  // const { userId } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1070);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div
          className={`${styles.navlinks} ${
            isMenuOpen && isMobile ? styles.show : ""
          }`}
        >
          <ul>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/earnmoney">Academia</a>
            </li>
            <li>
              <a href="/feedback">Industries</a>
            </li>
            <li>
              <a href="/notification">Projects</a>
            </li>
            {isMobile && (
              <>
                <li>
                  <a href="/AboutUs">About Us</a>
                </li>
                <li>
                  <a href="/ContactUs">Contact</a>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className={styles.logo}>
          <i className="bx bx-menu text-[2.5rem]" onClick={toggleMenu}></i>
          <a href="/" className="text-[2rem] cursor-pointer font-bold">
          <img src="/assets/images/Logo.svg" alt="" className="w-[150px] h-[150px]"/>
          </a>
          
        </div>
        <div className={styles.signinupbtn}>
          {/* {!userId && (
            <> */}
              <a href="/sign-in">Sign In</a>
              <a href="/sign-up">Sign Up</a>
            {/* </>
          )} */}
          {/* {userId && (
          // <a href='profile' className='text-gray-300 hover:text-white bg-black mr-4'>
          //   Profile
          // </a>
          <div>
          <UserButton afterSignOutUrl='/' />
        </div>
        )} */}
        
        </div>
      </div>
    </>
  );
};

export default Navbar;

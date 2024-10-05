import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-[#eaefee] text-[#04141e] pt-[20rem] md:pt-[2rem] lg:pt-[10rem]" style={{ minHeight: '90vh' }}>
      <div className="max-w-[93rem] mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:space-x-16"> {/* Centered items on responsive devices */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left"> {/* Center text on smaller screens */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"> {/* Increased space after heading */}
              Bridging Academia and Industry for Real-World Innovation
            </h1>
            <p className="text-lg md:text-xl mb-10"> {/* Increased space after paragraph */}
              Welcome to LinkUp! We connect students, educators, and industry professionals, fostering collaboration on cutting-edge projects. Whether you're looking to enhance your skills or solve real-world challenges, our platform empowers you to innovate and grow. Join us today and be part of the future!
            </p>
            <button className="bg-[#07633c] text-[#eaefee] px-8 py-3 rounded-full font-semibold hover:bg-[#043c24] transition duration-300 mt-6"> {/* Increased margin-top for button */}
              Join Industry-Academia Collaboration
            </button>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-gray-800 rounded-lg h-80 flex items-center justify-center overflow-hidden"> {/* Ensured image is responsive */}
              <img
                src="/assets/images/heroimg.jpg"
                alt="Hero"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute top-0 right-0 bg-gray-800 text-white p-3 rounded-bl-lg text-sm">
              5000+ Industries
              <br />
              See our top industries
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-16"> {/* Added more margin-top */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 md:mb-0 text-center">
            <h3 className="text-3xl font-bold">450+</h3>
            <p>Projects Done</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 md:mb-0 text-center">
            <h3 className="text-3xl font-bold">1.5k+</h3>
            <p>Active Students</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 md:mb-0 text-center">
            <h3 className="text-3xl font-bold">3k+</h3>
            <p>Industries Registered</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 text-center">
            <h3 className="text-3xl font-bold">5k+</h3>
            <p>Get Placed In Top Companies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

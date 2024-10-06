import React from 'react'

const ContactUs = () => {
  return (
    <section className="bg-white dark:bg-[#eaefee]">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#04141e] dark:text-[#04141e]">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-[#04141e] dark:text-[#04141e] sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
        <form action="#" className="space-y-8 p-6 bg-[#f5f7f6] rounded-lg">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#04141e] dark:text-[#04141e]">Your email</label>
            <input 
              type="email" 
              id="email" 
              className="bg-transparent border border-black text-[#04141e] text-sm rounded-lg focus:ring-[#07633c] focus:border-[#07633c] block w-full p-2.5 dark:text-[#04141e] dark:focus:ring-[#07633c] dark:focus:border-[#07633c]" 
              placeholder="name@hello.com" 
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-[#04141e] dark:text-[#04141e]">Subject</label>
            <input 
              type="text" 
              id="subject" 
              className="bg-transparent border border-black text-[#04141e] text-sm rounded-lg focus:ring-[#07633c] focus:border-[#07633c] block w-full p-2.5 dark:text-[#04141e] dark:focus:ring-[#07633c] dark:focus:border-[#07633c]" 
              placeholder="Let us know how we can help you" 
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#04141e] dark:text-[#04141e]">Your message</label>
            <textarea 
              id="message" 
              rows="6" 
              className="bg-transparent border border-black text-[#04141e] text-sm rounded-lg focus:ring-[#07633c] focus:border-[#07633c] block w-full p-2.5 dark:text-[#04141e] dark:focus:ring-[#07633c] dark:focus:border-[#07633c]" 
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="py-3 px-5 text-sm font-medium text-center text-[#eaefee] rounded-lg bg-[#07633c] hover:bg-[#128958] sm:w-fit focus:ring-4 focus:outline-none focus:ring-[#07633c] dark:bg-[#07633c] dark:hover:bg-[#128958] dark:focus:ring-[#07633c]"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs
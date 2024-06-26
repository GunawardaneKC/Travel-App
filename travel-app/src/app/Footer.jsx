import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-900 text-gray-200 footertext'>
         <div className='container mx-auto py-10 px-6'>
           <div className='grid md:grid-cols-12 grid-cols-1 gap-7'>
            
             <div className='lg:col-span-4 col-span-12'>
              <div className="flex flex-col items-center justify-center">
                <Image src="/logo.png" alt="logo" width={800} height={800} className='absolute  w-44 h-44' quality={100}  />  
                <p className="text-xl font-serif mt-24">ALEX DUNN TOURS</p>
              </div>
              <p className='mt-6'>
                Alex Dunn Tours isn&apos;t just a company; it&apos;s a culmination of Sri Lankan adventure woven from over 14 years of
                passion, expertise, and countless shared smiles. We weren&apos;t born in boardrooms,
                but on winding jungle trails, sun-drenched beaches, and bustling city streets.
              </p>
             </div>

             <div className='lg:col-span-2 md:col-span-4 col-span-12 mt-24'>
              <h5 className='tracking-wide text-gray-100 font-semibold text-3xl'>Company</h5>
              <ul className='list-none mt-6 space-y-2'>
                <li>
                  <a 
                  href='/AboutUs'
                  className='hover:text-gray-400 transition-all duration-300 ease-in-out'
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a 
                  href='/AboutUs'
                  className='hover:text-gray-400 transition-all duration-300 ease-in-out'
                  >
                    Tour
                  </a>
                </li>

                <li>
                  <a 
                  href='/AboutUs'
                  className='hover:text-gray-400 transition-all duration-300 ease-in-out'
                  >
                    Transport
                  </a>
                </li>

                <li>
                  <a 
                  href='/AboutUs'
                  className='hover:text-gray-400 transition-all duration-300 ease-in-out'
                  >
                    Blog
                  </a>
                </li>
              
              </ul>

             </div>
             <div className='lg:col-span-3 md:col-span-4 col-span-12 mt-24'>
                <h5 className='tracking-wide text-gray-100 font-semibold text-3xl'>
                  Important Links
                </h5>
                <ul className='list-none mt-6 space-y-2'>
                  <li>
                    <a
                    href='/AboutUs'
                    className='hover:text-gray-400 transition-all duration-300 ease-in-out'
                    >
                      Terms of Services
                    </a>
                  </li>
                  
                  <li>
                    <a
                    href='/AboutUs'
                    className='hover:text-gray-400 transition-all duration-300 ease-in-out'
                    >
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a
                    href='/AboutUs'
                    className='hover:text-gray-400 transition-all duration-300 ease-in-out'
                    >
                      Contact Us
                    </a>
                  </li>

                  <li>
                    <a
                    href='/AboutUs'
                    className='hover:text-gray-400 transition-all duration-300 ease-in-out'
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
             </div>
             <div className='lg:col-span-3 md:col-span-4 col-span-12 mt-24'>
              <h5 className='tracking-wide text-gray-100 font-semibold text-3xl'>
                Newsletter
              </h5>
              <p className='mt-6'>
                Subscribe to our newsletter and get the latest updates and offers.
              </p>
               <form action="">
                <div className='my-6'>
                  <label for='email-input'>Write Your Email<span className='text-red-600'>*</span></label>
                  <input
                    type='email'
                    id='email-input'
                    className='mt-3 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-500 focus:border-[#FFCDA3] focus'
                    placeholder='Your Email'
                  />
                </div>
                <button
                  type='submit'
                  className='py-2 px-5 tracking-wide border duration-500 text-base text-center bg-[#FFCDA3] hover:bg-[#FFCD88] border-[#FFCDA3] hover:border-[#FFCD88] text-black rounded-md w-full'
                >
                  Subscribe
                </button>
               </form>
             </div>
           </div>
          </div>

          <div className='border-t border-slate-700 '>
            {/**social media */}
     
            <div className='flex justify-center items-center gap-6 p-1 mt-12'>
              <a href='https://www.facebook.com/profile.php?id=61550251387026&mibextid=ZbWKwL'>
                <FaFacebook size={30} />
              </a>
              <a href='https://www.instagram.com/alexdunntours?utm_source=qr&igsh=MWNqZHk5NnU4bXZ6cg=='>
                <FaInstagram size={30} />
              </a>
              <a href='https://www.twitter.com/'>
                <FaTwitter size={30} />
              </a>
              <a href='https://www.linkedin.com/'>
                <FaLinkedin size={30} />
              </a>
            </div>

            <div className='md:text-left text-center container mx-auto py-7 px-6'>
              <p className='mb-0 text-center'>
                &copy;
                {new Date().getFullYear()} Alex Dunn Tours. All rights reserved.
                <p className='text-sm'>  Website Designed & Developed by <a href='https://gleits.com/' className='text-green-500'>Gleits</a></p>
              </p>
            </div>

          </div>


      </footer>
  </div>
  );
};

export default Footer;

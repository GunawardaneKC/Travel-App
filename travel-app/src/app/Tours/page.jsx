'use client'
import React, { useState, useEffect } from 'react'
import './toursstyle.css'
import Image from 'next/image'
import Link from 'next/link';
import axios from 'axios';
import { useParams } from 'next/navigation';

export default function Page() { // Renamed to 'Page'
    const [packages, setPackages] = useState([]);

    useEffect(() => {
      console.log("hellow");
  
      const fetchPackages = async () => {
        try {
          const response = await axios.get('https://apptravel-1.onrender.com/api/packages'); // Adjust URL as per your backend
          if (response.status === 200) {
            const data = response.data;
            setPackages(data);
            console.log(data);
          } else {
            throw new Error('Failed to fetch packages');
          }
        } catch (error) {
          console.error('Error fetching packages:', error);
        }
      };
  
      fetchPackages();
    }, []);

    return (
      <>
        <div>
          <div className="contact-bg">
            <h2>Tour Packages</h2>
            <div className="line">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <section className="hero">
            <div className="container">
              <div className="hero-content">
                <div className="heading mb-5">
                  <h1>Explore Our Island Adventures..</h1>
                </div>
                <p>Discover Exciting Tour Packages Tailored for You</p>
              </div>
            </div>
          </section>

          <div className="acontainer mx-auto p-4">
            {packages.map((pkg) => (
              <div key={pkg._id} className="border p-2 py-5 mt-5">
                <div className="abc">
                  <Link href={`/Tourpackages/${pkg._id}`}>
                    <div className="relative w-full h-fit border-3 border-orange-500 flex flex-wrap">
                      {pkg.images.slice(0, 4).map((image, index) => (
                        <Image
                          key={index}
                          width={300}
                          height={300}
                          src={image} // Assuming image is a URL returned from Cloudinary
                          alt={`Package Image ${index + 1}`}
                          className="responsive-img"
                        />
                      ))}
                      <div className="absolute inset-0 flex items-center justify-center flex-col adventure-overlay">
                        <span className="text-white text-2xl sm:text-4xl font-semibold">{pkg.packageName}</span>
                        <span className="second-span text-white text-lg md:text-xl">
                          ({pkg.packageDays} Nights / {parseInt(pkg.packageDays) + 1} Days)
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <br />
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

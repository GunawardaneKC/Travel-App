'use client'

import React from 'react'
import './aboutstyle.css';
import Image from 'next/image'

export default function AboutUs() {

  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>

<div className="contact-bg">
    <h3>Get in Know</h3>
    <h2>About Us</h2>
    <div className="line">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
      {/* <div className='h-96 bg-black relative overflow-hidden rounded-xl flex items-center justify-center mx-4'>
        <div className='absolute inset-0 opacity-80'>
          <Image src="/kc001.png" layout='fill' objectFit='cover' alt="here" className='object-cover object-center' />
        </div>
        <p className='absolute z-10 text-white ml-11 mt-36 text-4xl font-bold shadow-text'></p>
      </div> */}

      <section className="hero">
        {/* <div className="heading">
          <h1>About Us</h1>
          <h2>-------------</h2>
        </div> */}
        <div className="container">
          <div className="hero-content">
            <p>Alex Dunn Tours isn&apos;t just a company; it&apos;s a culmination of Sri Lankan adventure woven from over 14 years of
              passion, expertise, and countless shared smiles. We weren&apos;t born in boardrooms,
              but on winding jungle trails, sun-drenched beaches, and bustling city streets.
              Each of our guides is a veteran storyteller, a friend you haven&apos;t met yet, a walking encyclopedia of Sri Lankan wonders.
              Our journey began through personal connections, fueled by a fire to share the magic of this island nation with like-minded souls.
              Now, we&apos;re inviting you to join us in crafting your own Sri Lankan odyssey.
              Trust us, it&apos;s not just a tour, it&apos;s a homecoming - a return to the spirit of adventure, guided by those who know its every beat.
              Come, let&apos;s embark on a journey fueled by experience, fueled by passion, fueled by the very heartbeat of Sri Lanka.
              <br></br>
              <br></br>
            </p>
            {/* <h2>Welcome To Alex Dunn Tours</h2> */}
            {!isExpanded && (
              <button className=' mt-3' onClick={() => setIsExpanded(true)}>Read More</button>
            )}
          </div>


          <div class="hero-image">
            <Image className=' rounded-lg' width={600} height={600}  src='https://res.cloudinary.com/dj1uyme6s/image/upload/v1718741209/abc_or5xfi.jpg' alt='img' />
          </div>
        </div>

        {isExpanded && (
          <div class="expanded-content">
            <p>
              We understand that no two travelers are alike.
              Your wanderlust deserves an itinerary as unique as you are.
              That&apos;s why we don&apos;t believe in one-size-fits-all packages.
              We craft personalized experiences, meticulously woven from your dreams and desires.
              Whether you crave adrenaline-pumping adventure or seek serene cultural immersion,
              we&apos;ll be your travel architects, building tours that resonate with your every beat.
              Share your vision, your passions, your adventurous spirit, and watch as we unveil a journey tailored just for you.
              With Alex Dunn Tours, Sri Lanka unfolds as your personal masterpiece,
              painted in experiences that leave an indelible mark on your soul.
              <br></br>
              <br></br>
              we not only curate journeys, but we also nurture memories.
              And those memories deserve a backdrop as vibrant and enduring as your adventures.
              That&apos;s why sustainability isn&apos;t just a buzzword,
              it&apos;s woven into the fabric of every experience. We tread lightly,
              supporting local communities and preserving the natural wonders that draw you here.
              Imagine trekking through ancient forests where our eco-friendly practices leave nothing but footprints,
              or diving into coral reefs we actively protect. Safety and security are the cornerstones of your exploration.
              Expect meticulous planning, expert guides, and unwavering vigilance, so you can lose yourself in the moment,
              knowing you&apos;re in good hands. With Alex Dunn Tours, you don&apos;t just travel Sri Lanka,
              you become its mindful explorer, leaving a legacy of respect and awe in your wake.
              <br></br>
              <br></br>
              we believe in partnerships that elevate your journey.
              We&apos;ve hand-picked a network of stunning hotels and hidden-gem luxury villas,
              each chosen for their impeccable service, authentic charm,
              and perfect alignment with your curated itinerary. Our in-house product team,
              explorers at heart, are relentless in their pursuit of unique experiences.
              They forge close relationships with local hoteliers,
              unearthing hidden treasures and negotiating exclusive perks just for our guests.
              Imagine waking up to breathtaking views from an eco-lodge nestled in the mountains
              or retreating to a beachfront villa where the ocean whispers lullabies.
              With Alex Dunn Tours, your accommodation is more than just a place to rest;
              it&apos;s the canvas for unforgettable moments,
              crafted with the utmost care and curated to seamlessly blend with your personalized Sri Lankan adventure.
              <br></br>
              <br></br>
              Ready to explore beyond the ordinary? From adrenaline-pumping adventures to
              serene wildlife encounters, sun-kissed beaches to heartwarming family moments,
              we craft Sri Lankan journeys made just for you. Let Alex Dunn Tours be your map,
              your compass, your confidant - your journey awaits.
            </p>
          </div>
        )}

<div className='flex justify-center items-center'>
  <div className='w-[800px]'>
    <div className='down'>
      <h1 className='text-center'>Why we are special...</h1>
      <div className='mb-20 mt-12'>
        <div className='grid grid-cols-1 justify-center items-center gap-12 md:grid-cols-2'>
          <div className='flex flex-col items-center md:items-start'>
            <Image width={300} height={300} src="/kcw02.png" alt="Image" className="w-12 h-12 mb-2 md:mr-6" />
            <h3 className='text-center md:text-left'>Sustainability</h3>
          </div>
          <div className='flex flex-col items-center md:items-start'>
            <Image width={300} height={300} src="/kcw03.png" alt="Image" className="w-12 h-12 mb-2 md:mr-6" />
            <h3 className='text-center md:text-left'>Effortless Communication</h3>
          </div>
          <div className='flex flex-col items-center md:items-start'>
            <Image width={300} height={300} src="/kcw04.png" alt="Image" className="w-12 h-12 mb-2 md:mr-6" />
            <h3 className='text-center md:text-left'>Excellence value for money</h3>
          </div>
          <div className='flex flex-col items-center md:items-start'>
            <Image width={300} height={300} src="/kcw05.png" alt="Image" className="w-12 h-12 mb-2 md:mr-6" />
            <h3 className='text-center md:text-left'>Unsurpassed experience</h3>
          </div>
          <div className='flex flex-col items-center md:items-start'>
            <Image width={300} height={300} src="/kcw06.png" alt="Image" className="w-12 h-12 mb-2 md:mr-6" />
            <h3 className='text-center md:text-left'>Exceptional guiding</h3>
          </div>
          <div className='flex flex-col items-center md:items-start'>
            <Image width={300} height={300} src="/kcw07.png" alt="Image" className="w-12 h-12 mb-2 md:mr-6" />
            <h3 className='text-center md:text-left'>Safety and Security</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </section>
    </>
  )
}



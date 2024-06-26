'use client'
import React from 'react'
import './transstyle.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'

export default function Page() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [checkedId, setCheckedId] = React.useState('c1');

  console.log(checkedId); 

  return (
    <div>
      <div className="contact-bg">
        <h3></h3>
        <h2>Transport</h2>
        <div className="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <section className="hero">
        {/* <div className="heading">
          <h1>About Us</h1>
          <h2>-------------</h2>
        </div> */}
        <div className="container">
          <div className="hero-content">
            <p> At Alex Dunn Tours, transportation isn&apos;t just a transfer,
              it&apos;s an extension of your Sri Lankan adventure. Imagine sleek you are in luxury,
              comfortable Land Cruiser SUV vehicle weaving through vibrant landscapes,
              and expert drivers navigating every turn with unwavering focus.
              We believe comfort and safety are the cornerstones of exploration,
              so whether you&apos;re arriving at the airport, venturing to a hidden waterfall,
              or winding down after a day of discovery, trust us to transport you in style and serenity.
              Sit back, breathe in the island air, and let the rhythm of Sri Lanka carry you.
              Your journey unfolds beneath the open sky, every mile crafted with meticulous care - just another detail ensuring your
              Alex Dunn Tour is one to cherish.

              <br></br>
              <br></br>
            </p>
            {/* <h2>Welcome To Alex Dunn Tours</h2> */}
            {!isExpanded && (
              <button className=' mt-3' onClick={() => setIsExpanded(true)}>Read More</button>
            )}
          </div>


        </div>

        {isExpanded && (
          <div class="expanded-content">
            <p>
              As a well-established company, we have  enriched with any kind of transportation
              modes that are safest in Sri Lanka. All our vehicles are air conditioned.

              <br></br>
              <br></br>
              Our guests can choose between from primary mode of transport of sedan car to luxurious transport of Toyota Land Cruiser.
              From the experience gained through industry, as a very much customer care company we suggest to our guest to choose
              Toyota Land Cruiser, that is a  luxury vehicle very much comfortable with Sri Lanka Road and everywhere.

              <br></br>
              <br></br>
              Your Sri Lankan adventure starts with more than just a driver;
              it begins with a companion, a storyteller, and a window into the island&apos;s soul.
              Our licensed chauffeur-guides are not just masters of the winding roads,
              but also passionate experts who wear their knowledge of history, wildlife, and
              culture like a cherished badge. All our chauffer and national guides are members
              of Sri Lanka Tourism Board and also, they are fluent in English and eager to share their insights,
              they&apos;ll weave tales of ancient kingdoms and vibrant ecosystems as you journey. And for those with niche interests,
              fear not! So, buckle up, relax, and let our guides be your compass, your confidant, and your gateway to the magic of Sri Lanka.

            </p>
          </div>
        )}

        <div className="hidden lg:block">
        <div className='flex justify-center items-center'>
          <div className='w-[800px]'>
            <div className='down'>

              <div className="wrapper ">
                <div className="container1">

                  <input type="radio" name="slide" id="c1" checked={checkedId === 'c1'} onChange={() => setCheckedId('c1')} />
                  <label htmlFor="c1" className="card">
                    <div className="row">
                      <div className="icon">1</div>
                      <div className="description">
                        {/* <h4>Winter</h4>
                        <p>Winter has so much to offer -
                          creative activities</p> */}
                      </div>
                    </div>
                  </label>

                  <input type="radio" name="slide" id="c2" checked={checkedId === 'c2'} onChange={() => setCheckedId('c2')} />
                  <label htmlFor="c2" className="card">
                    <div className="row">
                      <div className="icon">2</div>
                      <div className="description">
                        {/* <h4>Digital Technology</h4>
                        <p>Gets better every day -
                          stay tuned</p> */}
                      </div>
                    </div>
                  </label>

                  <input type="radio" name="slide" id="c3" checked={checkedId === 'c3'} onChange={() => setCheckedId('c3')} />
                  <label htmlFor="c3" className="card">
                    <div className="row">
                      <div className="icon">3</div>
                      <div className="description">
                        {/* <h4>Globalization</h4>
                        <p>Help people all over the world</p> */}
                      </div>
                    </div>
                  </label>

                  <input type="radio" name="slide" id="c4" checked={checkedId === 'c4'} onChange={() => setCheckedId('c4')} />
                  <label htmlFor="c4" className="card">
                    <div className="row">
                      <div className="icon">4</div>
                      <div className="description">
                        {/* <h4>New technologies</h4>
                        <p>Space engineering becomes
                          more and more advanced</p> */}
                      </div>
                    </div>
                  </label>

                  <input type="radio" name="slide" id="c5" checked={checkedId === 'c5'} onChange={() => setCheckedId('c5')} />
                  <label htmlFor="c5" className="card">
                    <div className="row">
                      <div className="icon">5</div>
                      <div className="description">
                        {/* <h4>New technologies</h4>
                        <p>Space engineering becomes
                          more and more advanced</p> */}
                      </div>
                    </div>
                  </label>

                  <input type="radio" name="slide" id="c6" checked={checkedId === 'c6'} onChange={() => setCheckedId('c6')} />
                  <label htmlFor="c6" className="card">
                    <div className="row">
                      <div className="icon">6</div>
                      <div className="description">
                        {/* <h4>New technologies</h4>
                        <p>Space engineering becomes
                          more and more advanced</p> */}
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Medium and small screens */}
        <div className="lg:hidden p-4 ">
          <Slider autoplay autoplaySpeed={3000} >
          <div>
            <Image className='rounded-lg' width={600} height={600} src='/Transport/36D56035-5659-47FD-BA28-A050BE5D5231.JPG' alt='img1' />
          </div>
          <div>
            <Image className='rounded-lg' width={600} height={600} src='/Transport/FB_IMG_1708263552259.jpg' alt='img2' />
          </div>
          <div>
            <Image className='rounded-lg' width={600} height={600} src='/Transport/IMG_5210.jpg' alt='img3' />
          </div>
          <div>
            <Image className='rounded-lg' width={600} height={600} src='/Transport/IMG_4955.jpg' alt='img3' />
          </div>
          <div>
            <Image className='rounded-lg' width={600} height={600} src='/Transport/IMG_4902.jpg' alt='img3' />
          </div>
          <div>
            <Image className='rounded-lg' width={600} height={600} src='/Transport/IMG_3329.jpg' alt='img3' />
          </div>
          </Slider>
        </div>

      </section>

    </div>
  )
}

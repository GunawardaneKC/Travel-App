'use client'
// import $ from 'jquery';
import { useEffect, useState } from 'react';
import Image from "next/image";
import Carddesign from "./(components)/Carddesign";
import Video from 'next-video';
import Partnership from "./(components)/PartnerShip/Partnership";
// import ClientMsg from "./(components)/ClientMSG/ClientMsg";
import Clients from "./(components)/Customer feedback/Clients";
import styled from 'styled-components';
import './style.scss'
import Link from "next/link";

const Container = styled.div``;

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  

  useEffect(() => {
    const viewportWidth = window.innerWidth;
    setIsMediumScreen(viewportWidth >= 768);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* <div className="relative">
        
        <div className="overflow-hidden aspect-w-16 aspect-h-9 ">
          <Video
            src="/202402111202.mp4"
            alt="hero-banner"
            width="1920"
            height="1080"
            className="swing-in-top-bck absolute inset-0 z-0 "
            autoPlay
            muted
            loop
          />
        </div>
        <div className=" absolute inset-0 opacity-10"></div>

        
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 w-full max-w-4xl md:w-auto px-4">
          <h1 className={`tracking-in-expand-fwd text-2xl md:text-4xl lg:text-6xl font-bold text-center shadow-text`}>JOURNEY TO EXPLORE</h1>
          <h1 className={`tracking-in-expand-fwd text-2xl md:text-4xl lg:text-6xl font-bold text-center shadow-text`}>THE SRI LANKA</h1>
          
        </div>
      </div> */}

      <div className="relative">
        {/* Video background */}
        <div className="overflow-hidden aspect-w-16 aspect-h-9 ">
          <Video
            src="https://res.cloudinary.com/dj1uyme6s/video/upload/202402111202_jto5iu.mp4"
            alt="hero-banner"
            width="1920"
            height="1080"
            className="swing-in-top-bck absolute inset-0 z-0 "
            autoPlay
            muted
            loop
          />
        </div>
        <div className=" absolute inset-0 opacity-10"></div>

        {/* Slider content */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 w-full max-w-4xl md:w-auto px-4">
          <h1 className={`tracking-in-expand-fwd text-2xl md:text-4xl lg:text-6xl font-bold text-center shadow-text`}>JOURNEY TO EXPLORE</h1>
          <h1 className={`tracking-in-expand-fwd text-2xl md:text-4xl lg:text-6xl font-bold text-center shadow-text`}>THE SRI LANKA</h1>
          {/* Additional content here */}
        </div>
      </div>

      {/**second layer */}
      <div className=" mt-5">

        <div className='p-2'>
          <div className="flex justify-center  mb-16 ">
            <div className="imgs"></div>
          </div>
          <p className="text-center text-5xl font-extralight mb-4 shadow-text">Welcome to Sri Lanka.</p>
          <p className="text-center font-medium">see what&apos;s waiting for you on your next island getaway.</p>
          <p className="text-center font-medium mb-6">Savour the unique experiences this island treasure has to offer.</p>


          <div className={`flex justify-center p-2 `}>

            <Image className={`ml-8`} src="/Picture1.jpg" width={300} height={300} alt="here" quality={100} />
            <div className={`rd`}></div>
            <div className={`rd1 ml-20`}></div>

          </div>
        </div>

        <div className={` md:flex justify-center gap-20 mt-10 `}>
          <div className="p-4 ml-3">
            <p className="text-3xl font-extrabold">Explore Island Stories</p>
            <p className="font-light text-lg">Each place, and each smile in Sri Lanka has a story to tell.<br />
              We have so much to share with you, so come along to our island in paradise!</p>
          </div>
          <Link className=" flex justify-center" href="/Destination">
            <div className=" w-36 md:mt-14">
              <p className="aaa px-2 py-2 border-2 cursor-pointer transition-colors duration-300 hover-color rounded-lg" style={{ borderColor: '#ff4500' }}>EXPLORE MORE</p>
            </div>
          </Link>
        </div>


        <div className={`flex justify-center p-2 flex-wrap gap-3 `}>
          {[
            { imgNumber: "1", description: "A country with an amazing history" },
            { imgNumber: "6", description: "A paradise full of enchanting views" },
            { imgNumber: "3", description: "A green world full of biodiversity" },
            { imgNumber: "5", description: "A heaven surrounded by beaches" },
          ].map((img, index) => (
            <div key={index} className={`relative `}>
              <Image src={`/img${img.imgNumber}.jpg`} width={300} height={300} alt="here" quality={100} />
              <p className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full text-center">{img.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/**3rd layer */}

      <div className="">
        {/* <div className="p-6 rounded shadow-md text-white" style={{background: 'linear-gradient(90deg, #333 0%, #6B7280 100%)'}}>
            <h1 className="text-center mb-5 ">Why we are choose ?</h1>
             
            <ul className="space-y-5 text-center ">
              <li className="text-lg"><span className="font-bold">14 Years experience</span> in Sri Lanka Tourism Industry.</li>
              <li className="text-lg">With Alex Dunn Tours , you benefit from our long-lasting direct partnerships with hotels, activity providers, and local communities so that you will get the lowest rate anywhere else.</li>
              <li className="text-lg">We offer fully customized tailor-made tour packages for every client based on their preference.</li>
              <li className="text-lg">We eliminate the need for intermediaries, ensuring competitive pricing and exceptional value for our clients by eliminating intermediary chargers.</li>
              <li className="text-lg">We ensure your journey with experienced national and chauffer guides who are licensed under Sri Lanka Tourism Board.</li>
              <li className="text-lg">We are highly committing with hospitality services that provide complimentary Wi-Fi, snacks, water and beer during transportation free of charge</li>
              <li className="text-lg font-bold">24 x 7 customer care company.</li>
            </ul>
          </div> */}


        <div className='flex justify-center items-center p-5'>
          <div className='w-[1100px]'>
            <div className='down'>
              <h1 className={`text-center $`}>Why we are choose..?</h1>
              <div className='mb-20 mt-12'>
                <div className='grid grid-cols-1 justify-center items-center gap-12 md:grid-cols-2'>
                  <div className={`flex flex-col items-center md:items-start `}>
                    <Image width={300} height={300} src="/ch6.png" alt="Image" className="w-12 h-12 mb-2 md:mr-6" />
                    <h3 className='text-center md:text-left'>14 Years experience in Sri Lanka Tourism Industry.</h3>
                  </div>
                  <div className={`flex flex-col items-center md:items-start `}>
                    <Image width={300} height={300} src="/ch7.png" alt="Image" className="w-12 h-12 mb-2 md:mr-6" />
                    <h3 className='text-center md:text-left'>24 x 7 customer care company.</h3>
                  </div>
                  <div className={`flex flex-col items-center md:items-start `}>
                    <Image width={300} height={300} src="/ch4.png" alt="Image" className="w-12 h-12 mb-2 md:mr-6" />
                    <h3 className='text-center md:text-left'>With Alex Dunn Tours , you benefit from our long-lasting direct partnerships with hotels, activity providers, and local communities so that you will get the lowest rate anywhere else.</h3>
                  </div>
                  <div className={`flex flex-col items-center md:items-start `}>
                    <Image width={300} height={300} src="/ch5.png" alt="Image" className="w-12 h-12 mb-2 md:mr-6" />
                    <h3 className='text-center md:text-left'>We offer fully customized tailor-made tour packages for every client based on their preference.</h3>
                  </div>
                  <div className={`flex flex-col items-center md:items-start `}>
                    <Image width={300} height={300} src="/ch2.png" alt="Image" className="w-12 h-12 mb-2 md:mr-6" />
                    <h3 className='text-center md:text-left'>We eliminate the need for intermediaries, ensuring competitive pricing and exceptional value for our clients by eliminating intermediary chargers.</h3>
                  </div>
                  <div className={`flex flex-col items-center md:items-start `}>
                    <Image width={300} height={300} src="/ch3.png" alt="Image" className="w-12 h-12 mb-2 md:mr-6" />
                    <h3 className='text-center md:text-left'>We ensure your journey with experienced national and chauffer guides who are licensed under Sri Lanka Tourism Board.</h3>
                  </div>
                  <div className={`flex flex-col items-center md:items-start `}>
                    <Image width={300} height={300} src="/ch1.png" alt="Image" className="w-12 h-12 mb-2 md:mr-6" />
                    <h3 className='text-center md:text-left'>We are highly committing with hospitality services that provide complimentary Wi-Fi, snacks, water and beer during transportation free of charge</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className={``}>

          <div className={`flex flex-col items-center justify-center `}>
            <Image src="/logo.png" alt="logo" width={800} height={800} className='invert absolute  w-44 h-44' quality={100} />
            <p className="text-xl font-serif mt-24">ALEX DUNN TOURS</p>
          </div>

          <div className={`flex flex-col items-center md:flex-row md:justify-center gap-5 p-4 mt-5 mb-5 `}>
            <Carddesign imgSrc={"/IMG_9951a.jpg"}>A paradise to make your memorable honeymoon</Carddesign>
            <Carddesign imgSrc={"/IMG_10785a.jpg"}>A heaven to feel mental relaxation</Carddesign>
            <Carddesign imgSrc={"/IMG_12426a.jpg"}>A island to go anywhere without any hesitation</Carddesign>
          </div>

        </div>

        <Container>
        <Clients />
        </Container>

        <div className="justify-center text-center mt-16">
          <div className="flex justify-center gap-2">
            <Partnership />
          </div>
          <p className=" text-2xl font-serif font-semibold mt-4 mb-5">Our Partners</p>
        </div>

      </div>

    </>
  );
}

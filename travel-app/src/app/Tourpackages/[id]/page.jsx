// 'use client'
// import React, { useRef, useState } from 'react';
// import { cardData } from '../../(components)/tourData'
// import { useParams } from 'next/navigation'
// import Image from 'next/image'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from 'swiper/core'; // import Autoplay module from Swiper core
// import 'swiper/css';
// import 'swiper/css/pagination';
// // import './style.css'
// // import { Pagination,Autoplay } from 'swiper/modules';
// import { FaLocationDot } from "react-icons/fa6";
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/autoplay';
// import './tpstyle.css';

// SwiperCore.use([Autoplay]);

// export default function Page() {
//   const { id } = useParams();

//   const tourPackage = cardData.find((tourPackage) => tourPackage.id === Number(id));

//   const overlayStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: '40px',
//     textAlign: 'center',
//     padding: '10px',
//     textShadow: '1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000'
//   };

//   if (!tourPackage) {
//     return <div>No data found for ID 1</div>;
//   }

//   return (
//     <div>

//       <div className='bg-gray-900'>
//         <br></br>
//         <h1 className='text-center text-4xl font-bold text-gray-50'>{tourPackage.title}</h1>
//         <p className='text-center text-xl text-gray-50'>{tourPackage.overview}</p>
//         <br></br>
//         <div className='sdisplay'>
//           <FaLocationDot className='text-xl text-red-500 mt-6' /> &emsp;
//           {tourPackage.imageDescription.map((description, index) => (
//             <div key={index} className='text-center font-medium text-xl mt-5 text-gray-300'>
//               {description}
//               {index < tourPackage.imageDescription.length - 1 && ' -> '}
//             </div>
//           ))}
//         </div>
//         <br></br>

//         <Swiper
//           slidesPerView={'auto'}
//           centeredSlides={true}
//           spaceBetween={10}
//           pagination={{
//             clickable: true,
//           }}
//           autoplay={{ delay: 2000, disableOnInteraction: false }}
//           className="mySwiper"
//         >
//           {tourPackage.image.map((image, index) => (
//             <SwiperSlide key={index}>
//               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
//                 <Image width={600} height={600} style={{ width: '700px', height: '400px' }} src={image} alt={`Image ${index + 1}`} />
//                 <p style={overlayStyle}>
//                   {tourPackage.imageDescription[index]}
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>


//         <br></br>

//         <div className='bg-gray-900 text-white p-10'>
//           <div className='flex justify-center'>
//             <table className=' border border-white'>
//               <thead className='p-5 text-xl'>
//                 <tr>
//                   <th className='border border-white'>Night</th>
//                   <th className='border border-white'>Location</th>
//                   <th className='border border-white'>Experience</th>
//                 </tr>
//               </thead>
//               <tbody className='text-lg' >
//                 {tourPackage.Arrival.Night.map((night, index) => (
//                   <tr key={index}>
//                     <td className='border border-white p-3 w-32'>{night}</td>
//                     <td className='border border-white w-96 p-3'>{tourPackage.Arrival.Location[index]}</td>
//                     <td className='border border-white p-3'>{tourPackage.Arrival.Experience[index]}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <br></br>

//       </div>
//     </div>
//   );
// }

// pages/Tourpackages/[id].js
'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './tpstyle.css';
import { FaLocationDot } from "react-icons/fa6";

SwiperCore.use([Autoplay]);

export default function Page() {
  const { id } = useParams();
  const [tourPackage, setTourPackage] = useState(null);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await fetch(`https://apptravel-1.onrender.com/api/packages/${id}`); // Adjust URL as needed
        if (response.ok) {
          const data = await response.json();
          setTourPackage(data);
        } else {
          throw new Error('Failed to fetch package details');
        }
      } catch (error) {
        console.error('Error fetching package:', error);
      }
    };

    fetchPackage();
  }, [id]);

  const overlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '40px',
    textAlign: 'center',
    padding: '10px',
    textShadow: '1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000'
  };

  if (!tourPackage) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-gray-900'>
      <br></br>
      <h1 className='text-center text-4xl font-bold text-gray-50'>{tourPackage.packageName}</h1>
      <p className='text-center text-xl text-gray-50'>({tourPackage.packageDays} Nights / {parseInt(tourPackage.packageDays) + 1} Days)</p>
      <br></br>
      <div className='sdisplay'>
        <FaLocationDot className='text-xl text-red-500 mt-6' /> &emsp;
        {tourPackage.imageDescriptions.map((desc, index) => (
          <div key={index} className='text-center font-medium text-xl mt-5 text-gray-300'>
            {desc.description}
            {index < tourPackage.imageDescriptions.length - 1 && ' -> '}
          </div>
        ))}
      </div>
      <br></br>

      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {tourPackage.imageDescriptions.map((desc, index) => (
          <SwiperSlide key={index}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <Image width={600} height={600} style={{ width: '700px', height: '400px' }} src={desc.image} alt={`Image ${index + 1}`} />
              <p style={overlayStyle}>
                {desc.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <br></br>

      <div className='bg-gray-900 text-white p-10'>
        <div className='flex justify-center'>
          <table className=' border border-white'>
            <thead className='p-5 text-xl'>
              <tr>
                <th className='border border-white'>Night</th>
                <th className='border border-white'>Location</th>
                <th className='border border-white'>Experience</th>
              </tr>
            </thead>
            <tbody className='text-lg' >
              {tourPackage.Arrival.Night.map((night, index) => (
                <tr key={index}>
                  <td className='border border-white p-3 w-32'>{night}</td>
                  <td className='border border-white w-96 p-3'>{tourPackage.Arrival.Location[index]}</td>
                  <td className='border border-white p-3'>{tourPackage.Arrival.Experience[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <br></br>
    </div>
  );
}


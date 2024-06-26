'use client'
// import React from 'react'
// import Image from 'next/image'
// import './style.css';

// export default function Partnership() {
//   return (
//     <div className='slider'>
//         <div className='slide-track'>
//            <div className='slide'>
//              <Image src="/Partners/aitken spence.png" width={300} height={300} alt="here" quality={100} />
//            </div>

//            <div className='slide'>
//              <Image src="/Partners/Amaare.png" width={300} height={300} alt="here" quality={100} />
//            </div>

//            <div className='slide'>
//              <Image src="/Partners/Amaya.png" width={300} height={300} alt="here" quality={100} />
//            </div>

//            <div className='slide'>
//              <Image src="/Partners/Cinnamon.png" width={300} height={300} alt="here" quality={100} />
//            </div>

//            <div className='slide'>
//              <Image src="/Partners/Jetwing Hotels.png" width={300} height={300} alt="here" quality={100} />
//            </div>

//            <div className='slide'>
//              <Image src="/Partners/Resplendent logo brown on clear - Large.jpg" width={300} height={300} alt="here" quality={100} />
//             </div>

//             <div className='slide'>
//                 <Image src="/Partners/SANTANI.jpeg" width={300} height={300} alt="here" quality={100} />
//              </div>   

//             <div className='slide'>
//               <Image src="/Partners/TEARDROP.png" width={300} height={300} alt="here" quality={100} />
//              </div>

//              <div className='slide'>
//               <Image src="/Partners/Thema Collection.jpeg" width={300} height={300} alt="here" quality={100} />
//              </div>

//              <div className='slide'>
//               <Image src="/Partners/Uga-Escapes-Logo-200x200-1.png" width={300} height={300} alt="here" quality={100} />
//              </div>

//              <div className='slide'>
//               <Image src="/Partners/W 15 collection.jpg" width={300} height={300} alt="here" quality={100} />
//              </div>

//              <div className='slide'>
//               <Image src="/Partners/water garden.png" width={300} height={300} alt="here" quality={100} />
//              </div>

//              <div className='slide'>
//               <Image src="/Partners/Wowed events.png" width={300} height={300} alt="here" quality={100} />
//              </div>
         
//          </div> 

//     </div>
//   )
// }


import React from 'react';
import Image from 'next/image';
import './partnerstyle.css';

export default function Partnership() {
  // Array of image path
  const imagePaths = [
    "/Partners/aitken spence.png",
    "/Partners/Amaare.png",
    "/Partners/Amaya.png",
    "/Partners/Cinnamon.png",
    "/Partners/Jetwing Hotels.png",
    "/Partners/Resplendent logo brown on clear - Large.jpg",
    "/Partners/SANTANI.jpeg",
    "/Partners/TEARDROP.png",
    "/Partners/Thema Collection.jpeg",
    "/Partners/Uga-Escapes-Logo-200x200-1.png",
    "/Partners/W 15 collection.jpg",
    "/Partners/water garden.png",
    "/Partners/Wowed events.png"
  ];

  // Duplicate the image paths 5 times
  const repeatedImagePaths = [...Array(10)].flatMap(() => imagePaths);

  return (
    <div className='slider'>
      <div className='slide-track'>
        {repeatedImagePaths.map((path, index) => (
          <div className='slide' key={index}>
            <Image src={path} alt="here" width={300} height={300} quality={100} />
          </div>
        ))}
      </div>
    </div>
  );
}

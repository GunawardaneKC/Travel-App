'use client'
import React from 'react'
import './client.css'
import Image from 'next/image'

export default function ClientMsg() {
  return (
    <div>
      <div className='wrapper1'>
       <h1>Our Happy Customer Reviews</h1>
       <h5>Check what they say about us...</h5>

       <div className='cards1'>
           <div className='card1'>
             {/* <Image src='/R (2).jfif' alt='client' className='ccim' width={100} height={100}/> */}
             <p>“Thank you udaya for being such a great guide throughout our honeymoon. We had an awesome time with Alex Dunn Tours! We will remember this journey forever! Thank you everything.”</p>
             <h2>Jan & Sophie</h2>
             <h4>USA</h4>
              
          </div>

          <div className='card1'>
             {/* <Image src='/person-smiling-1.jpg' alt='client' className='ccim' width={100} height={100}/> */}
             <p>“It is not possible to put in just few words. All that Sri Lanaka have meant to us. Our visit to your peaceful, lovely country has beyond expectations. Thank you Alex Dunn Tours.”</p>
             <h2>Jean & Kleeges</h2>
             <h4>UK</h4>
              
          </div>

          <div className='card1'>
             {/* <Image src='/person_cc.jpg' alt='client' className='ccim' width={100} height={100}/> */}
             <p>“Thank you so much for everything you have done to make our Sri Lanka experience so much excellent. Your service has been perfect, 10 out of 10!”</p>
             <h2>Tom & Alice - </h2>
             <h4>USA</h4>
              
          </div>
       </div>
   </div>
  </div>
   
  )
}

// import React, { useEffect } from 'react';
// import $ from 'jquery';
// import Head from 'next/head';
// window.jQuery = $;
// window.$ = $;
// import 'owl.carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import styles from './style.css'; // Import your custom CSS module

// const TestimonialSlider = () => {
//    useEffect(() => {
//      const script = document.createElement('script');
//      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
//      script.async = true;
//      document.body.appendChild(script);
 
//      const owlCarouselScript = document.createElement('script');
//      owlCarouselScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.min.js';
//      owlCarouselScript.async = true;
//      document.body.appendChild(owlCarouselScript);
 
//      owlCarouselScript.onload = () => {
//        window.$('.testmonial_slider_area').owlCarousel({
//          autoplay: true,
//          slideSpeed: 1000,
//          items: 3,
//          loop: true,
//          nav: true,
//          navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
//          margin: 30,
//          dots: true,
//          responsive: {
//            320: {
//              items: 1
//            },
//            767: {
//              items: 2
//            },
//            600: {
//              items: 2
//            },
//            1000: {
//              items: 3
//            }
//          }
//        });
//      };
 
//     return () => {
//       document.body.removeChild(script);
//       document.body.removeChild(owlCarouselScript);
//     };
//   }, []);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       $(".testmonial_slider_area").owlCarousel({
//         autoplay: true,
//         slideSpeed: 1000,
//         items: 3,
//         loop: true,
//         nav: true,
//         navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
//         margin: 30,
//         dots: true,
//         responsive: {
//           320: {
//             items: 1
//           },
//           767: {
//             items: 2
//           },
//           600: {
//             items: 2
//           },
//           1000: {
//             items: 3
//           }
//         }
//       });
//     }
//   }, []);

//   return (
//     <div>
//       <Head>
//         <title>Responsive Testimonial Slider</title>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
//       </Head>
//       <section id="testimonial_area" className={styles.sectionPadding}>
//       <h1>Happy Customer Reviews</h1>
//         <div className="container mt-10">
//           <div className="row">
//             <div className="col-md-12">
//               <div className={`testmonial_slider_area text-center owl-carousel ${styles.carousel}`}>
//                 {/* Your testimonial items here */}
//                 <div className="box-area">	
// 									{/* <div class="img-area">
// 										<img src="img/1.jpg" alt="">
// 									</div>	 */}
// 									<h5>Jan & Sophie</h5>
// 									<span>USA</span>									
// 									<p className="content">
//                            “Thank you udaya for being such a great guide throughout our honeymoon. 
//                            We had an awesome time with Alex Dunn Tours! 
//                            We will remember this journey forever! Thank you everything.”
// 									</p>
// 									<h6 className="socials">
// 									    <i className="fa fa-instagram"></i>
// 									    <i className="fa fa-facebook"></i>
// 									    <i className="fa fa-linkedin"></i>
// 									    <i className="fa fa-youtube"></i>
// 									</h6>
// 								</div> 
							
// 								<div className="box-area">	
// 									{/* <div class="img-area">
// 										<img src="img/2.jpg" alt="">
// 									</div>	 */}
// 									<h5>Jean & Kleeges</h5>
// 									<span>UK</span>									
// 									<p className="content">
//                            “It is not possible to put in just few words. 
//                            All that Sri Lanaka have meant to us. 
//                            Our visit to your peaceful, lovely country has beyond expectations. 
//                            Thank you Alex Dunn Tours.”
// 									</p>
// 									<h6 className="socials">
// 									    <i className="fa fa-instagram"></i>
// 									    <i className="fa fa-facebook"></i>
// 									    <i className="fa fa-linkedin"></i>
// 									    <i className="fa fa-youtube"></i>
// 									</h6>
// 								</div> 

//                   <div className="box-area">	
// 									{/* <div class="img-area">
// 										<img src="img/2.jpg" alt="">
// 									</div>	 */}
// 									<h5>Tom & Alice</h5>
// 									<span>USA</span>									
// 									<p className="content">
//                            “Thank you so much for everything you have done to make our Sri Lanka experience so much excellent. 
//                            Your service has been perfect, 10 out of 10!”
// 									</p>
// 									<h6 className="socials">
// 									    <i className="fa fa-instagram"></i>
// 									    <i className="fa fa-facebook"></i>
// 									    <i className="fa fa-linkedin"></i>
// 									    <i className="fa fa-youtube"></i>
// 									</h6>
// 								</div> 
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default TestimonialSlider;






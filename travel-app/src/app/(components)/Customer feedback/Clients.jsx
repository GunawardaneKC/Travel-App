'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './feedback.css';

SwiperCore.use([Autoplay]);

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('https://apptravel-1.onrender.com/api/client');
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching client data:', error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
      <section className="max-w-[90%] rounded-lg">
        <div className="main">
          <div className="head"><p>Customer Values</p></div>
          <Swiper
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 0,
              stretch: 50,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 100,
              },
              1120: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1226: {
                slidesPerView: 3,
                spaceBetween: 120,
              },
            }}
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div style={{ paddingRight: 20, paddingLeft: 20 }}>
                  <div className="testimonials-profile-circle">
                    <Image
                      src={client.img}
                      alt="Customer image"
                      className="testimonial-avatar"
                      width={200} // Set appropriate width and height for Image component
                      height={200}
                      
                    />
                  </div>
                  <p className="mt-5">{client.messages}</p>
                  <h6 className="review-by">- {client.name} -</h6>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}

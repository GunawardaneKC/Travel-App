'use client'

import React from 'react'
import './acomstyle.css';
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dcard from '../(components)/Dcard';
import { useState } from 'react'
import Modal from 'react-modal';
import { useEffect } from 'react';
import axios from 'axios';

// const cards = [
//     { imgSrc: '/Hotels pic/01. Uga Chena Huts/Bar.jpg',  description: 'UGA CHENA HUTS' },
//     { imgSrc: '/Hotels pic/02. W15 Hanthana/_SDS1970.JPG',  description: 'W15 HANTHANA ESTATE' },
//     { imgSrc:'/Hotels pic/03.Nine Sike/Bungalow (2) [Panorama].JPG', description:'NINE SKIES'},
//     { imgSrc:'/Hotels pic/04. Goatfell/Bungalow (1).JPG',description:'GOATFELL'},
//     { imgSrc:'/Hotels pic/05. Camellia Hills/Aerial view (1).jpg',description:'CAMELLIA HILLS'},
//     { imgSrc: '/Hotels pic/06. Fort Bazzar/Courtyard (3).jpg',  description: 'FORT BAZAAR' },
//     { imgSrc: '/Hotels pic/07. Lunuganga/Property (1).jpg', description: 'LUNUGANGA' },
//     { imgSrc:'/Hotels pic/08. Kumu Beach/Property (1).jpg',description:'KUMU BEACH'},
//     { imgSrc:'/Hotels pic/09. Walawwa/SJP_8988-3245.jpg',description:'WALLAWWA'},
//     { imgSrc:'/Hotels pic/10. W15 Gegory Lake/8S8A5447.jpg',description:'W15 LAKE GREGORY'},
//     { imgSrc: '/Hotels pic/11. Aliya/PGP_4131.jpg', description: 'ALIYA RESORT & SPA – SIGIRIYA' },
//     { imgSrc: '/Hotels pic/12. malu malu/PGP_3351.jpg', description: 'MAALU MAALU RESORT & SPA' },
//     { imgSrc:'/Hotels pic/13. Malabar Hill/Luxury-Hotel-Malabar-Hill-Sri-Lanka-02.jpg',description:'MALABAR HILL'},
//     { imgSrc: '/Hotels pic/14. Uga Ulagalla/Nikawewa Villa - Aerial.JPG', description: 'UGA ULAGALLA' },
//     { imgSrc: '/Hotels pic/15. Uga Bay/Cluster Cabin Exterior.jpg', description: 'UGA BAY' },
//     { imgSrc:'/Hotels pic/16. Uga Jungle beach/Aerial 1.png',description:'UGA JUNGLE BEACH'},
//     { imgSrc: '/Hotels pic/17. W15 Weligama/DSC_0022.JPG', description: 'W15 WELIGAMA' },
//     { imgSrc: '/Hotels pic/18. Uga Riva/Exterior - Entrance 1.jpg', description: 'UGA RIVA' },
//     { imgSrc: '/Hotels pic/19. Santhani/DJI_0774-HDR-164.jpg', description: 'SANTANI WELLNESS KANDY' },
//     { imgSrc:'/Hotels pic/20. 98 acres/location-1.jpg',description:'98 ACRES RESORT & SPA'},
//     { imgSrc: '/Hotels pic/21. Amaya Lake/Copy-of-amaya-lakeDJI_001620160121-HDR-scaled.jpg', description: 'AMAYA LAKE' },
//     { imgSrc: '/Hotels pic/22. Tea Trails/Ceylon Tea Trails - Large (3).jpg', description: 'CEYLON TEA TRAILS' },
//     { imgSrc: '/Hotels pic/23. Wild Coast/Wild Coast Tented Lodge - Large.jpg', description: 'WILD COAST TENTED LODGE' },
//     { imgSrc: '/Hotels pic/24. Cape Weligama/Cape Weligama - Large (4).jpg', description: 'CAPE WELIGAMA' },
//     { imgSrc:'/Hotels pic/25. Ahu Bay/Ahu Bay public spaces - Large.jpg',description:'AHU BAY'},
//     { imgSrc: '/Hotels pic/26. Kayaam House/Kayaam House - Large.jpg', description: 'KAYAAM HOUSE' },
//     { imgSrc: '/Hotels pic/27. Amaya Beach/DJI_0763-Edit-1-scaled(1).jpg', description: 'AMAYA BEACH' },
//     { imgSrc: '/Hotels pic/28.Water Garden/_SDS9052.JPG', description: 'WATER GARDEN SIGIRIYA' },
    
//   ]

export default function AboutUs() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [cards, setCards] = React.useState([]);
    React.useEffect(() => {
        axios.get('https://apptravel-1.onrender.com/accom/getAccom')
            .then((response) => {
                console.log(response.data);
                setCards(response.data);
            })

    }, [])

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      window.scrollTo(0, 450);
    }

    const currentItems = cards.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    function openModal() {
        setModalIsOpen(true);
      }

      function closeModal() {
  setModalIsOpen(false);
}

    return (
        <>

            <div className="contact-bg">
                
                <h2>Accomadations</h2>
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
                            <h1>Mind blowing hotels and villas</h1>
                        </div>
                       <p>Experience Sri Lanka like an insider, not a tourist. At Alex Dunn Tours, we&apos;ve built strong, long-lasting partnerships with the finest hotels across the island. This means we can offer you access to exclusive rates and special deals that you won&apos;t find anywhere else, whether you&apos;re booking a luxurious beachfront resort, a charming boutique hotel, or any kind of hotel. Ready to unlock exclusive rates and experience Sri Lankan hospitality at its finest? Contact Alex Dunn Tours today and let us craft your dream Sri Lankan adventure.
                            <br></br>
                            <br></br>
                        </p>

                    </div>
                </div>
            </section>

            <section className="">
                <div>
                    <div className=' abc flex flex-wrap justify-between gap-y-36 p-8'>
                        {currentItems.map((card, index) => (
                            <div key={index} className='w-80 h-52 p-3'>
                                <div className="relative items-center justify-center flex"> {/*onClick={openModal}*/}
                                    <Dcard imgSrc={card.img} />
                                    <p className="absolute text-3xl shadow-text text-white text-center">{card.title}</p>
                                </div>
                                <p className=' mt-2 text-center font-semibold text-lg'>{card.description}</p>
                            </div>
                        ))}

                        {/* <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Image Details"
                        > */}
                        {/* Add your image details and other images here */}
                        {/* <button onClick={closeModal}>Close</button>
                        </Modal> */}
                    </div>

                    <div className="flex justify-center items-center space-x-2 mt-36 inset-0 mb-10">
                        {Array(Math.ceil(cards.length / itemsPerPage)).fill().map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-3 py-2 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}
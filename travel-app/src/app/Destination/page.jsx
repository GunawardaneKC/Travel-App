'use client'
import React, { useState } from 'react'
import Dcard from '../(components)/Dcard'
import './destistyle.css'
import axios from 'axios';

// const cards = [
//   { imgSrc: '/sigiriya/Sri Lanka general 26.jpeg', title: 'Sigiriya', description: 'Ascending the Lion\'s Rock: Unraveling the Wonder of Sigiriya' },
//   { imgSrc: '/dabulla/agnieszka-stankiewicz-bkfBxbI7a1g-unsplash.jpg', title: 'Dambulla', description: 'Where Gods and Kings Kissed Stone: Unveiling the Magic of Dambulla Cave Temple' },
//   { imgSrc:'/03. Temple of tooth relic/Sri Lanka general 52.jpg', title:'Temple of the Tooth Relic',description:'Where Myth Meets Majesty: Unveiling the Secrets of the Temple of the Tooth Relic'},
//   { imgSrc:'/04.Nine arch bridge/hendrik-cornelissen-jpTT_SAU034-unsplash.jpg',title:'Nine arch bridge',description:'Chasing Trains and Chasing Thrills: Dancing on the Nine Arch Bridge'},
//   { imgSrc:'/05. Little adams peak/dizy-thc1yy9cWJI-unsplash.jpg',title:'Little Adam\'s Peak',description:'Chasing Sunsets and Sweats: Conquering Little Adam\'s Peak in Ella'},
//   { imgSrc: '/06.Mirissa beach & surfing/croyde-bay-gqitVFrtkkY-unsplash.jpg', title: 'Mirissa', description: 'Catching Waves and Coconut Vibes: Surfing Nirvana in Mirissa' },
//   { imgSrc: '/07.Adams peak/dhanura-munasinghe-TsLIyTDgkkY-unsplash.jpg', title: 'Adam\'s Peak', description: 'Chasing Sunsets and Footprints: A Conquering Climb to Adam\'s Peak' },
//   { imgSrc:'/08.Ella rock/joe-roberts-cnHCgcdfMDI-unsplash.jpg',title:'Ella Rock',description:'Breathe Deep, Climb High: Conquering Ella Rock and Unearthing Sri Lanka\'s Soul'},
//   { imgSrc:'/09.yala national park/rohit-varma-1abfbakHeno-unsplash.jpg',title:'Yala',description:'Where Giants Roam and Nature Reigns: Adventures in Yala National Park'},
//   { imgSrc:'/10. Wilpattu/DSC_6317 copy.jpg',title:'Wilpattu',description:'Where Wild Whispers Take Flight: Unveiling the Wonders of Wilpattu National Park'},
//   { imgSrc: '/11. Hiriketiya Beach/hiriketiya beach .jpg', title: 'Hiriketiya Beach', description: 'Hiriketiya Beach: Where Palm Trees Sway and Surf Whispers Secrets' },
//   { imgSrc: '/12.Nilaveli/camille-minouflet-d7M5Xramf8g-unsplash.jpg', title: 'Nilaveli', description: 'Where Turquoise Kisses Sands: Unwinding in Nilaveli Paradise' },

//   { imgSrc:'/13.Pidurangala/damien-cornu-zVc1tGknLEI-unsplash.jpg',title:'Pidurangala',description:'Pidurangala: Where History and Nature Converge Under the Golden Sun'},
//   { imgSrc: '/14.Anuradhapura/julie-ricard-RmFX5bxHqCg-unsplash.jpg', title: 'Anuradhapura', description: 'Anuradhapura: A Timeless Journey Through Sri Lanka\'s Ancient Heart' },
//   { imgSrc: '/Galle/galle.jpg', title: 'Galle', description: 'Galle: Where Timeless Heritage Meets Coastal Charm' },

//   { imgSrc:'/16.kalpitiya/evgenii-ermakov-XqTXk-8Uo5E-unsplash.jpg',title:'Kalpitiya Beach',description:'Kalpitiya Beach: Where Windswept Shores Dance with Dolphins'},
//   { imgSrc: '/17.snorkeling/Sri Lanka general 33.jpg', title: 'Snorkeling', description: 'Snorkeling in Sri Lanka: Dive into a Kaleidoscope of Underwater Wonders' },
//   { imgSrc: '/18.Scuba Diving/turtle-588497.jpg', title: 'Scuba Diving', description: 'Scuba Diving in Sri Lanka: Immersing in the Ocean\’s Hidden Treasures' },

//   { imgSrc:'/19.Kithulgala rafting/Sri Lanka general 28.jpg',title:'Kithulgala',description:'Kithulgala Rafting: Conquer the Rapids in Sri Lanka\’s Adventure Playground'},
//   { imgSrc: '/22.Sinharaja Rain Forest/raashid-ahamed-MbjkTVwabAM-unsplash.jpg', title: 'Sinharaja Rain Forest', description: 'Sinharaja Rain Forest: Journey into the Heart of Sri Lanka\'s Living Green Jewel' },
  
// ]

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
      axios.get('https://apptravel-1.onrender.com/api/desti')
          .then((response) => {
              console.log(response.data);
              setCards(response.data);
          })

  }, [])

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 350);
  }

  const currentItems = cards.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
            <div className="contact-bg">
                
                <h2>Destinations</h2>
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
                            <h1>Know the destinations you love in the island..</h1>
                        </div>
                       {/* <p>Experience Sri Lanka like an insider, not a tourist. At Alex Dunn Tours, we&apos;ve built strong, long-lasting partnerships with the finest hotels across the island. This means we can offer you access to exclusive rates and special deals that you won&apos;t find anywhere else, whether you&apos;re booking a luxurious beachfront resort, a charming boutique hotel, or any kind of hotel. Ready to unlock exclusive rates and experience Sri Lankan hospitality at its finest? Contact Alex Dunn Tours today and let us craft your dream Sri Lankan adventure.
                            <br></br>
                            <br></br>
                        </p> */}

                    </div>
                </div>
            </section>

      {/* <h1 className='cde text-center text-5xl mt-10 font-bold shadow-text text-gray-900'>Know the destinations you love in the island</h1> */}
      {/* <p className='cde text-center text-lg font-light mb-5'>Read about the island culture and herritage in diffrent locations</p> */}

      <div className=' abc flex flex-wrap justify-between gap-y-36 p-8'>
        {currentItems.map((card, index) => (
          <div key={index} className=' w-80 h-52 p-3'>
            <div className="relative items-center justify-center flex">
              <Dcard imgSrc={card.image} />
              <p className="absolute text-3xl shadow-text text-white text-center">{card.title}</p>
            </div>
            <p className='ml-2  text-center'>{card.description}</p>
          </div>
        ))}
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
  )
}
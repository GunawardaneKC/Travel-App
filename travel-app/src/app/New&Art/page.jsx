'use client';
import React, { useState, useRef, useEffect } from 'react';
import './newsstyle.css';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

export default function AboutUs() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [articles, setArticles] = useState([]);
  const sectionRefs = useRef({});

  useEffect(() => {
    // Fetch data from the backend
    axios.get('https://apptravel-1.onrender.com/api/articles/getArticles')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('Error fetching article data:', error);
      });
  }, []);

  const handleToggle = (section) => {
    setExpandedSection(prevSection => (prevSection === section ? null : section));
    if (expandedSection === section && sectionRefs.current[section]) {
      sectionRefs.current[section].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="contact-bg">
        <h2>Get in Know About Sri Lanka</h2>
        <div className="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {articles.map((article, index) => (
        <section
          className="hero"
          key={index}
          ref={(el) => (sectionRefs.current[article._id] = el)}
        >
          <div className="container">
            <div className="hero-content">
              <div className="heading mb-5">
                <h1>{article.title}</h1>
              </div>
              <p className='para'>
                <b>{article.paragraphs[0].title}</b>
                <br></br>
                {article.paragraphs[0].content}
                <br></br>
                <br></br>{/* Short preview of the first paragraph */}
                </p>
              
                {expandedSection !== article._id && (
                  <p className='mt-2 cursor-pointer text-orange-600 text-lg' onClick={() => handleToggle(article._id)}>Read More...</p>
                )}
            </div>

            <div className="hero-image">
              <Slider autoplay autoplaySpeed={3000}>
                {article.images.map((image, imgIndex) => (
                  <div key={imgIndex}>
                    <Image className='rounded-lg' width={600} height={600} src={image} alt={`img${imgIndex + 1}`} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

            {expandedSection === article._id && (
  <div className="expanded-content flex-col">
    {article.paragraphs.slice(1).map((paragraph, paraIndex) => (
      <p key={paraIndex}>
        {paraIndex >= 1 && paragraph.title !== '' && <><br /></>}
        <b>{paragraph.title}</b>
        <br />
        {paragraph.content}
        <br />
      </p>
    ))}
    <br />
    <p className='mb-5 cursor-pointer text-orange-600 text-lg' onClick={() => handleToggle(article._id)}>Read Less...</p>
  </div>
)}
          
        </section>
      ))}
    </>
  );
}
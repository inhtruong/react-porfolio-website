/* eslint-disable no-unused-vars */
import React from 'react'
import './testimonials.css'
import Client from './Client'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Ernest Achiever",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo aut id expedita porro ad amet sed voluptatem eaque unde ut deserunt numquam quis ratione perspiciatis, dolore praesentium facere cum tempore."
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Ernest Achiever",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo aut id expedita porro ad amet sed voluptatem eaque unde ut deserunt numquam quis ratione perspiciatis, dolore praesentium facere cum tempore."
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Ernest Achiever",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo aut id expedita porro ad amet sed voluptatem eaque unde ut deserunt numquam quis ratione perspiciatis, dolore praesentium facere cum tempore."
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Ernest Achiever",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo aut id expedita porro ad amet sed voluptatem eaque unde ut deserunt numquam quis ratione perspiciatis, dolore praesentium facere cum tempore."
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }}
      >
      {
        testimonials.map((item) => (
          <SwiperSlide key={item.id} className="testimonial">
            <Client 
              avatar={item.avatar} 
              name={item.name}
              review={item.review}
            />
          </SwiperSlide>
        ))
      }
      </Swiper>
    </section>
  )
}

export default Testimonials
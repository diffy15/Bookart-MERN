import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//react icons
import {FaStar} from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Avatar } from 'flowbite-react';
import proPic from "../assets/profilee.jpg"

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

      <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                </div>

                {/*text*/}
                <div className='mt-7'>
                    <p className='mb-5'>This online bookstore is a literary gem! With a vast selection spanning genres,
                         finding my next read is effortless. Their stellar customer service, promptly resolving any issues,
                          earns my loyalty. Personalized recommendations and user reviews enhance the browsing experience.
                           I highly recommend this bookstore for all book lovers seeking quality service and a diverse collection.</p>
                           <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                           <h5 className='text-lg font-medium'>John Smith</h5>
                           <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>

            
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                </div>

                {/*text*/}
                <div className='mt-7'>
                    <p className='mb-5'>This online bookstore is a literary gem! With a vast selection spanning genres,
                         finding my next read is effortless. Their stellar customer service, promptly resolving any issues,
                          earns my loyalty. Personalized recommendations and user reviews enhance the browsing experience.
                           I highly recommend this bookstore for all book lovers seeking quality service and a diverse collection.</p>
                           <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                           <h5 className='text-lg font-medium'>John Smith</h5>
                           <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>

            
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                </div>

                {/*text*/}
                <div className='mt-7'>
                    <p className='mb-5'>This online bookstore is a literary gem! With a vast selection spanning genres,
                         finding my next read is effortless. Their stellar customer service, promptly resolving any issues,
                          earns my loyalty. Personalized recommendations and user reviews enhance the browsing experience.
                           I highly recommend this bookstore for all book lovers seeking quality service and a diverse collection.</p>
                           <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                           <h5 className='text-lg font-medium'>John Smith</h5>
                           <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>

            
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                </div>

                {/*text*/}
                <div className='mt-7'>
                    <p className='mb-5'>This online bookstore is a literary gem! With a vast selection spanning genres,
                         finding my next read is effortless. Their stellar customer service, promptly resolving any issues,
                          earns my loyalty. Personalized recommendations and user reviews enhance the browsing experience.
                           I highly recommend this bookstore for all book lovers seeking quality service and a diverse collection.</p>
                           <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                           <h5 className='text-lg font-medium'>John Smith</h5>
                           <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>

            
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                </div>

                {/*text*/}
                <div className='mt-7'>
                    <p className='mb-5'>This online bookstore is a literary gem! With a vast selection spanning genres,
                         finding my next read is effortless. Their stellar customer service, promptly resolving any issues,
                          earns my loyalty. Personalized recommendations and user reviews enhance the browsing experience.
                           I highly recommend this bookstore for all book lovers seeking quality service and a diverse collection.</p>
                           <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                           <h5 className='text-lg font-medium'>John Smith</h5>
                           <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>

            
        </SwiperSlide>



      </Swiper>
      </div>
    </div>
  )
}

export default Review
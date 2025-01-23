"use client";

import React from 'react';
import styles from "./StudentRev.module.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function StudentReview() {
    const reviews = [
        { text: "J'ai beaucoup appris.", author: "Ziad Jihane" },
        { text: "C'était une expérience incroyable.", author: "Ahmed Ali" },
        { text: "Les cours étaient très instructifs.", author: "Sara Ben" },
        { text: "Je recommande fortement.", author: "Mouna Karim" },
    ];

    return (
        <section className={styles.review}>
            <div className={styles.container}>
                <h2 className={styles.h2}>What Students Say</h2>
                <div className={styles.reviewContainer}>
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        className={`${styles.swiper} ${styles.swiperNavigation} ${styles.swiperPagination}`}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {reviews.map((review, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.reviewCard}>
                                    <p className={styles.reviewText}>
                                        "{review.text}"
                                    </p>
                                    <h3 className={styles.reviewAuthor}>
                                        -{review.author}
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
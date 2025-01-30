"use client";

import React from 'react';
import Image from 'next/image';
import styles from "./StudentRev.module.css";

export default function StudentReview() {
    const reviews = [
        {
            name: "Sarah Johnson",
            role: "Computer Science Student",
            review: "Being part of the tech community has been incredible. The workshops and events have helped me grow both technically and professionally.",
            image: "/images/student1.jpg"
        },
        {
            name: "Michael Chen",
            role: "Software Engineering Student",
            review: "The project collaborations and networking opportunities have been invaluable. I've made great connections and learned so much.",
            image: "/images/student2.jpg"
        },
        {
            name: "Emily Rodriguez",
            role: "Data Science Student",
            review: "The mentorship program has been transformative. The guidance from industry professionals has helped shape my career path.",
            image: "/images/student3.jpg"
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Student Reviews</h2>
                <p className={styles.subtitle}>Hear what our students have to say about their experience</p>
                
                <div className={styles.reviewGrid}>
                    {reviews.map((review, index) => (
                        <div key={index} className={styles.reviewCard}>
                            <div className={styles.reviewContent}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={review.image}
                                        alt={review.name}
                                        width={80}
                                        height={80}
                                        className={styles.studentImage}
                                    />
                                </div>
                                <div className={styles.reviewText}>
                                    <p className={styles.quote}>{review.review}</p>
                                    <div className={styles.reviewer}>
                                        <h4>{review.name}</h4>
                                        <p>{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
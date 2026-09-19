"use client"

import { reviews } from '@/config/reviews.config'
import { splideOptions } from '@/lib/splide'
import { ReviewCard } from '../Cards/ReviewCard/ReviewCard'
import { stableKey } from '@/utils/stableKeys'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/react-splide/css/core"
import "./ReviewsSliderList.css"

export default function ReviewsSliderList() {
    return (
        <Splide
            className="reviews__slider"
            aria-label="Отзывы клиентов"
            options={splideOptions}
        >
            {reviews.map((review) => (
                <SplideSlide key={stableKey(review)}>
                    <ReviewCard
                        rating={review.rating}
                        text={review.text}
                        client={review.client}
                    />
                </SplideSlide>
            ))}
        </Splide>
    )
}

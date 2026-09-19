import { Heading } from "@/components/atoms/Heading/Heading"
import { Section } from "@/components/atoms/Section/Section"
import ReviewsSliderList from "@/components/molecules/ReviewsSliderList/ReviewsSliderList"
import "./ReviewsSection.css"
import { CustomLink } from "@/components/atoms/CustomLink/CustomLink"
import { AvitoIcon } from "@/components/atoms/Icons/AvitoIcon"
import { Text } from "@/components/atoms/Text/Text"
import { contactsObject } from "@/config/contacts.config"

export default function ReviewsSection() {
    return (
        <Section className="reviews" id="reviews">
            <div className="reviews__head u-reveal">
                <Heading>Отзывы клиентов на Авито</Heading>
                <CustomLink
                    className="reviews__link"
                    href={contactsObject.avito.href}
                    variant="review"
                >
                    <AvitoIcon />
                    <Text>Смотрите все отзывы на Авито</Text>
                </CustomLink>
            </div>
            <div className="u-reveal">
                <ReviewsSliderList />
            </div>
        </Section>
    )
}
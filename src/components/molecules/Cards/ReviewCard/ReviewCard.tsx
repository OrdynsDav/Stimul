import { StarIcon } from "@/components/atoms/Icons/StarIcon"
import { ReviewCardProps } from "../../types"
import { cx } from "@/utils/cx"
import { Text } from "@/components/atoms/Text/Text"
import { CustomLink } from "@/components/atoms/CustomLink/CustomLink"
import "./ReviewCard.css"

export function ReviewCard({ rating, text, client }: ReviewCardProps) {
  return (
    <article className="review-card">
      <ul className="review-card__stars">
        {Array.from({ length: 5 }, (_, index) => {
          const isFilled = index < rating

          return (
            <li
              key={index}
              className={cx(
                "review-card__star",
                isFilled && "review-card__star--filled"
              )}
            >
              <StarIcon />
            </li>
          )
        })}
      </ul>
      <Text className="review-card__quote" as="blockquote" color="paper" size="lg">{text}</Text>
      <footer className="review-card__bottom">
        <Text weight="semibold">{client}</Text>
      </footer>
    </article>
  )
}

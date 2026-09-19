import Image from "next/image"
import type { TariffCardProps } from "../../types"
import "./TariffCard.css"
import { Heading } from "@/components/atoms/Heading/Heading"
import { Text } from "@/components/atoms/Text/Text"
import { CustomLink } from "@/components/atoms/CustomLink/CustomLink"
import { cx } from "@/utils/cx"

export function TariffCard({ imgUrl, title, cars, features, costs, hasBadge }: TariffCardProps) {
    return (
        <article className={cx(
            "tariff-card",
            hasBadge && "tariff-card--most-often"
        )}>
            {hasBadge && <Text className="tariff-card__badge" as="span">Чаще всего выбирают</Text>}
            <figure className="tariff-card__media">
                {imgUrl
                    ? <Image src={imgUrl} alt="Картинка машины" width={656} height={328} />
                    : <div className="tariff-card__empty"></div>
                }
            </figure>
            <div className="tariff-card__body">
                <Heading className="tariff-card__title" as="h3">{title}</Heading>
                {cars.map((car) => {
                    return <Text color="grayDark" key={car}>{car}</Text>
                })}
                <ul className="tariff-card__features">
                    {features.map((feature) => {
                        return (
                            <li key={feature} className="tariff-card__feature">
                                <Text color="grayDark">{feature}</Text>
                            </li>
                        )
                    })}
                </ul>
                <Text className="tariff-card__costs" size="lg" color="paper" weight="medium">{costs} ₽</Text>
                <CustomLink variant="secondary" href={"#contacts"}>Связаться</CustomLink>
            </div>
        </article>
    )
}

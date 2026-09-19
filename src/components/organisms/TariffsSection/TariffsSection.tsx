import { Section } from "@/components/atoms/Section/Section"
import "./TariffsSection.css"
import { Heading } from "@/components/atoms/Heading/Heading"
import { tariffs } from "@/config/tariffs.config"
import { TariffCard } from "@/components/molecules/Cards/TariffCard/TariffCard"

export function TariffsSection() {
    return (
        <Section className="tariffs" variant="inverted" id="tariffs">
            <Heading className="tariffs__title u-reveal" size="lg">Тарифы и автомобили</Heading>
            <ul className="tariffs__list u-reveal">
                {tariffs.map(({ imgUrl, title, cars, features, costs, hasBadge }) => {
                    return (
                        <li className="tariffs__item u-reveal" key={title}>
                            <TariffCard
                                imgUrl={imgUrl}
                                title={title}
                                cars={cars}
                                features={features}
                                costs={costs}
                                hasBadge={hasBadge}
                            />
                        </li>
                    )
                })}
            </ul>
        </Section>
    )
}

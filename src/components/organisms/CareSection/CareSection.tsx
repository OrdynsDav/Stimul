import { Heading } from "@/components/atoms/Heading/Heading";
import { Section } from "@/components/atoms/Section/Section";
import { Text } from "@/components/atoms/Text/Text";
import { cares } from "@/config/care.config";
import { stableKey } from "@/utils/stableKeys";
import "./CareSection.css"

export function CareSection() {
    return (
        <Section className="care" variant="inverted" id="care">
            <div className="care__inner u-reveal">
                <div className="care__description u-reveal">
                    <Heading>Что мы берём на себя</Heading>
                    <Text color="grayDark">Правила одинаковые для всех тарифов — от Стандарта до Бизнеса.</Text>
                </div>
                <ul className="care__list">
                    {cares.map(({ title, text }) => {
                        return (
                            <li className="care__item u-reveal" key={stableKey(title)}>
                                <Heading as="h3" className="care__title" size="xs">{title}</Heading>
                                <Text className="care__text" color="grayDark">{text}</Text>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Section>
    )
}

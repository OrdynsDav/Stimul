import { Section } from "@/components/atoms/Section/Section"
import "./TariffsSection.css"
import { Heading } from "@/components/atoms/Heading/Heading"
import { Text } from "@/components/atoms/Text/Text"
import { tariffs } from "@/config/tariffs.config"
import { TariffCard } from "@/components/molecules/Cards/TariffCard/TariffCard"
import { siteConfig } from "@/config/site.config"

const tariffsSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Тарифы на трансферы и автомобили",
    description: "Варианты автомобилей и тарифов для городских, междугородних поездок и трансферов в аэропорт.",
    url: `${siteConfig.url}/#tariffs`,
    itemListElement: tariffs.map((tariff, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
            "@type": "Service",
            name: `Тариф «${tariff.title}» — ${tariff.cars.join(", ")}`,
            description: tariff.description,
            serviceType: "Трансфер с водителем",
            provider: {
                "@id": `${siteConfig.url}/#organization`,
            },
            offers: {
                "@type": "Offer",
                priceCurrency: "RUB",
                price: Number.parseInt(tariff.costs.replace(/\D/g, ""), 10),
                priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "RUB",
                    minPrice: Number.parseInt(tariff.costs.replace(/\D/g, ""), 10),
                },
                availability: "https://schema.org/InStock",
            },
        },
    })),
}

export function TariffsSection() {
    return (
        <>
            <Section className="tariffs" variant="inverted" id="tariffs">
                <Heading className="tariffs__title u-reveal" size="lg">Тарифы и автомобили</Heading>
                <Text className="tariffs__description u-reveal" color="grayDark">
                    Выберите тариф или класс автомобиля для ваших нужд и соответствующий вашему бюджету. Точную стоимость поездки указываем при обращении.
                </Text>
                <ul className="tariffs__list u-reveal">
                    {tariffs.map(({ imgUrl, title, description, cars, features, costs, hasBadge }) => {
                        return (
                            <li className="tariffs__item u-reveal" key={title}>
                                <TariffCard
                                    imgUrl={imgUrl}
                                    title={title}
                                    description={description}
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(tariffsSchema) }}
            />
        </>
    )
}

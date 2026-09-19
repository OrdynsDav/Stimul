import { Section } from "@/components/atoms/Section/Section"
import "./ContactsSection.css"
import { Heading } from "@/components/atoms/Heading/Heading"
import { Text } from "@/components/atoms/Text/Text"
import { Container } from "@/components/atoms/Container/Container"
import Image from "next/image"
import { contacts } from "@/config/contacts.config"
import { stableKey } from "@/utils/stableKeys"
import { CustomLink } from "@/components/atoms/CustomLink/CustomLink"

export default function ContactsSection() {
    return (
        <Section className="contacts" id="contacts" container={false}>
            <div className="contacts__bg" aria-hidden="true">
                <Image className="contacts__img"
                    src="/images/bg/contacts-bg.jpeg"
                    alt="Задний фон для секции контактов"
                    width="2000"
                    height="1333"
                    loading="lazy"
                />
            </div>
            <Container>
                <div className="contacts__description u-reveal">
                    <Heading align="center"> Напишите — и машина будет ваша</Heading>
                    <Text color="grayDark" align="center">Маршрут, дата и время. Ответим с точной ценой и закрепим водителя.</Text>
                </div>
                <ul className="contacts__actions u-reveal">
                    {contacts.map(({ name, href, icon }) => {
                        return (
                            <li className="u-reveal" key={stableKey()}>
                                <CustomLink className="contacts__link" href={href} variant="secondary">
                                    <div className="contacts__icon">
                                        {icon}
                                    </div>
                                    <Text>{name}</Text>
                                </CustomLink>
                            </li>
                        )
                    })}
                </ul>
            </Container>
        </Section>
    )
}

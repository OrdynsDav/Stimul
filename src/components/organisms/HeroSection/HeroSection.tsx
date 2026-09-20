import { Container } from "@/components/atoms/Container/Container";
import { Heading } from "@/components/atoms/Heading/Heading";
import Image from "next/image";
import "./HeroSection.css"
import { Text } from "@/components/atoms/Text/Text";
import { CustomLink } from "@/components/atoms/CustomLink/CustomLink";
import { Pledges } from "@/components/molecules/Pledges/Pledges";

export function HeroSection() {
    return (
        <section className="hero">
            <div className="hero__bg">
                <Image
                    className="hero__img"
                    src={"/images/bg/hero-bg.avif"}
                    alt="Фон для главной секции"
                    width={2400} height={1600}
                    fetchPriority="high"
                />
            </div>
            <Container>
                <div className="hero__inner">
                    <div className="hero__content u-reveal">
                        <Heading className="hero__title" as="h1" size="xl" align="center" color="paper">
                            Машина подана. <br />Дальше — просто едем.
                        </Heading>
                        <Text color="gray" align="center">Трансфер на межгород, встречи в аэропорту и на вокзалах. Цена не меняется ни при каких обстоятельствах</Text>
                    </div>
                    <div className="hero__actions u-reveal">
                        <CustomLink className="hero__btn" href={"#tariffs"}>Посмотреть тарифы</CustomLink>
                        <CustomLink className="hero__btn" variant="outline" href={"#contacts"}>Контакты</CustomLink>
                    </div>
                    <div className="u-reveal">
                        <Pledges />
                    </div>
                </div>
            </Container>
        </section>
    )
}

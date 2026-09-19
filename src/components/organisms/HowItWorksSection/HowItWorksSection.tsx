import { Heading } from "@/components/atoms/Heading/Heading"
import { Section } from "@/components/atoms/Section/Section"
import "./HowItWorksSection.css"
import HIWSteps from "@/components/molecules/HIWSteps/HIWSteps"

export function HowItWorksSection() {
    return (
        <Section className="how-it-works" aria-labelledby="how-it-works">
            <Heading className="how-it-works__title u-reveal" id="how-it-works" size="lg">Как это работает</Heading>
            <div className="u-reveal">
                <HIWSteps />
            </div>
        </Section>
    )
}

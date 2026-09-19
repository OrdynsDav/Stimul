import { navigation } from "@/config/navigation.config"
import "./Navigation.css"
import { CustomLink } from "@/components/atoms/CustomLink/CustomLink"
import { Text } from "@/components/atoms/Text/Text"

export function Navigation() {
  return (
    <nav className="nav">
        <ul className="nav__list">
            {navigation.map(({href, name}) => {
                return (
                    <li key={name+href} className="nav__item">
                        <CustomLink href={href} variant="nav">
                            <Text size="md">{name}</Text>
                        </CustomLink>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

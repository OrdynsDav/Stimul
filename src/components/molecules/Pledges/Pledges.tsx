import { pledges } from "@/config/pledges.config"
import "./Pledges.css"
import { Text } from "@/components/atoms/Text/Text"

export function Pledges() {
  return (
    <ul className="pledges">
        {pledges.map(({title, note}) => {
            return (
                <li key={title} className="pledges__item">
                    <Text align="center" weight="semibold">{title}</Text>
                    <Text color="grayDark" size="sm" align="center">{note}</Text>
                </li>
            )
        })}
    </ul>
  )
}

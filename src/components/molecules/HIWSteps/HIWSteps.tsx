import { Heading } from '@/components/atoms/Heading/Heading'
import { Text } from '@/components/atoms/Text/Text'
import { howItWork } from '@/config/how-it-work.config'
import "./HIWSteps.css"

export default function HIWSteps() {
    return (
        <ul className='HIWSteps'>
            {howItWork.map(({ title, text }, idx) => {
                return (
                    <li key={title} className='HIWSteps__item'>
                        <Text color="brand" size='sm'>{idx + 1}</Text>
                        <div className="HIWSteps__content">
                            <Heading as='h3' size="sm">{title}</Heading>
                            <Text color="grayDark">{text}</Text>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

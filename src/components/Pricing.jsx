import Section from './Section'
import Heading from './Heading'
import { pricing } from '../constants'
import Button from './Button'
import check from '../assets/check.png'
import { BackgroundBurgers } from '../design/Hero'

const Pricing = () => {

  return (
    <Section className={'overflow-hidden'} id='pricing'>
        <div className='container relative z-2'>
            <Heading title={'Affordable Options'} className={'text-center'}/>
            <div className='flex gap-[1rem] max-lg:flex-wrap'>
                {pricing.map((item)=>(
                    <div key={item.id} className='w-[19rem] max-lg:w-full h-full odd:my-4
                     px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 [&>h4]:first:text-color-2 [&>h4]:even:text-color-4 [&>h4]:last:text-color-3'>
                        <h4 className='h4 mb-4'>{item.title}</h4>
                        <p className='body-2 min-h-[4rem] mb-3 text-n-1/50'>{item.description}</p>
                        <h3 className='flex items-center h-[5.5rem] h3'>{item.price}</h3>
                        <Button className={'w-full mb-6'} href={'/pricing'}>Reserve Now</Button>
                        <ul>{item.features.map((feature ,index)=>(
                            <li key={index} className='flex items-start py-5 border-t border-n-6'>
                                <img src={check} alt="check" width={24} height={24} />
                                <p className='body-2 ml-4'>{feature}</p>
                            </li>
                        ))}</ul>
                    </div>
                ))}
                <BackgroundBurgers/>
            </div>          
        </div>
    </Section>
  )
}

export default Pricing
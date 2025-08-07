import Section from './Section'
import { services, servicesContent, servicesText } from '../constants'
import check from '../assets/check.png'
import Button from './Button'
import mealora from '../assets/mealora-img.png'
import { BackgroundBurgers } from '../design/Hero'

const Services = () => {

  return (
    <Section crosses id={'services'}>
        <div className='container lg:flex '>
            <div className='max-w-[25rem]'>
             <h2 className='h2 mb-4 md:mb-8'> Explore Our Mealora Experience</h2>
             <ul className='max-w-[22rem] mb-10 md:mb-14'>
                {servicesContent.map((item)=>(
                    <li className='mb-3 py-3 ' key={item.id}>
                        <div className='flex items-center'>
                         <img src={check} alt="check" height={24} width={24} />
                         <h6 className='body-2 ml-5'>{item.title}</h6>
                        </div>
                         {item.text &&(
                            <p className='body-2 mt-3 text-n-4'>{item.text}</p>
                         )}
                    </li>
                ))}
             </ul>
             <Button >Taste it now</Button>
            </div>
            <div className='lg:ml-auto xl:w-[38rem] '>
                <p className='body-2 my-5 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto'>
                 {servicesText}
                </p>
                <div className='relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100'>
                 <div className='flex w-60 aspect-square m-auto border border-n-6 rounded-full'>
                    <div className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full'>
                        <div className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'>
                            <img src={mealora} alt="mealora" width={80} height={80}  />
                        </div>
                    </div>
                 </div>
                 <ul>
                    {services.map((service,index)=>(
                       <li key={service.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
                        <div className={` relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index *45}`}>
                            <img src={service.icon} alt={service.title} className='m-auto' width={service.width} height={service.height} />
                        </div>
                       </li> 
                    ))}
                 </ul>
                </div>
            </div>
            <BackgroundBurgers/>
        </div>
    </Section>
  )
}

export default Services
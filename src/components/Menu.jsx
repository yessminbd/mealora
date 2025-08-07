import Heading from './Heading'
import Section from './Section'
import dish1 from '../assets/dish1.jpg'
import dish2 from '../assets/dish2.jpg'
import { mealoraFoods, mealoraFoodsIcons } from '../constants'
import check from '../assets/check.png'
import Cooking from './Cooking'
import chef from '../assets/chef1.jpg'
import { BackgroundBurgers } from '../design/Hero'

const Menu = () => {

  return (
    <Section id={'menu'} className={"container"}>
      <Heading className={""} title={"Mealora is for those who live to eat"} text={"Whether you're craving something sweet, savory, or spicy, we've got it all"}/>
      <div className='relative'>
        <div className='relative z-1 flex items-center h-[39rem] mb-5 rounded-3xl overflow-hidden p-8 border border-n-1/10 lg:p-20 xl:h-[46rem] '>
         <div className='absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto'>
            <img src={dish1} alt="dish1" className='w-full h-full object-cover md:object-right'  width={800} height={730}/>
         </div>
         <div className='relative z-1 ml-auto max-w-[17rem]'>
            <h4 className='h4 mb-4'>Unique recipes</h4>
            <p className='body-2 mb-[3rem] text-n-1'>Crafted from traditional recipes passed down through generations.</p>
            <ul className='body-2'>
                {mealoraFoods.map((item,index)=>(
                    <li key={index} className='flex items-start py-4 border-t border-n-6'>
                        <img src={check} alt=""  width={24} height={24}/>
                        <p className='ml-4 text-n-1'>{item}</p>
                    </li>
                ))}
            </ul>
         </div>
          <BackgroundBurgers/>
         <Cooking className={'absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2'}/>
        </div>
        <div className=' relative z-1 grid gap-5 lg:grid-cols-2'>
          <div className='relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden'>
           <div className='absolute inset-0'>
            <img src={dish2} alt="dish2" className='w-full h-full object-cover' width={630} height={750}/>
           </div>
           <div className='absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15'>
            <h4 className='h4 mb-4'>Be part of your dish’s creation</h4>
            <p className='body-2 mb-[3rem] text-n-1'>At Mealora, you have the unique opportunity to customize your dish exactly how you like it.</p>
          </div>
          </div>
          <div className='p-4 bg-n-7 overflow-hidden rounded-3xl lg:min-h-[46rem] '>
            <div className='py-12 px-4 xl:px-8'>
                <h4 className='h4 mb-4'>Generations of traditional chefs.</h4>
                <p className='body-2 mb-[2rem]'>Our chefs come from generations skilled in crafting authentic traditional dishes with passion and expertise.</p>
                <ul className='flex items-center justify-between '>
                    {
                    mealoraFoodsIcons.map((item,index)=>(
                        <li key={index} className={`flex items-center justify-center rounded-2xl ${index ===2 ? 'w-[3rem] h-[3rem] p-0.5 bg-conic-gradient rounded-2xl md:w-[4.5rem] md:h-[4.5rem]':'flex w-10 h-10 bg-n-6 md:w-15 md:h-15'}`}>
                            <div className={`${index ===2 ? 'flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]':''}`}>
                                <img src={item} alt="" width={28} height={28}/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div >
                <img src={chef} alt="chef" className='w-full h-full object-cover rounded-3xl' width={520} height={400}  />
            </div>
          </div>
         </div>
      </div>
       <BackgroundBurgers/>
    </Section>
  )
}

export default Menu

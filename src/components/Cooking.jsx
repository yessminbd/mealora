import { GiCook } from 'react-icons/gi'

const Cooking = ({className}) => {
  
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ''} text-base`}>
        <GiCook  className='w-5 h-5 mr-4'  />
        Cooking before you click!
    </div>
  )
}

export default Cooking
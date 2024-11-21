// SVG icons
import AppliancesIcon from './icons/icons/appliances-icon'
import AwesomeIcon from './icons/icons/awesome-icon'
import LeaderIcon from './icons/icons/leader-icon'
import LifeLongIcon from './icons/icons/lifelong-icon'
import StrongIcon from './icons/icons/strong-icon'

const JoinUs = () => {
  const joinUsDetails = [
    { 
      title: '#1 in Appliances', 
      description: 'Grow your career with the Leader. Let’s bring happiness together through technology.',
      icon: <AppliancesIcon />
    },
    { 
      title: 'Awesome Benefits', 
      description: 'Enjoy good compensation package and exciting benefits.',
      icon: <AwesomeIcon /> 
    },
    { 
      title: 'Strong Values Culture', 
      description: 'Values are important to us. Service and Leadership guides our culture.',
      icon: <StrongIcon />
    },
    { 
      title: 'A Leader in Digital', 
      description: 'Abenson.com is the number one Filipino eRetailer. We are a winning team that continues to innovate.',
      icon: <LeaderIcon />
    },
    { 
      title: 'Lifelong Learning ', 
      description: 'We believe that if you grow, we grow. We have an industry leading career growth and retention rates.',
      icon: <LifeLongIcon />
    },

  ]
  return ( 
    <section className="text-primary-gray flex flex-col items-center gap-4 lg:gap-7 py-4 lg:py-10">
      <h1 className="text-lg font-poppins-semibold md:text-[28px]">Why join us?</h1>
      <ul className='flex gap-4 md:px-10 items-start w-full overflow-x-scroll scrollbar-hide cursor-pointer'>
        {joinUsDetails.map((detail) => (
          <li
            key={detail.title}
            className='flex flex-col items-center justify-center gap-2 p-2
            lg:gap-4 min-w-[140px] max-w-[216px] rounded-primary hover:shadow-2xl'
          >
            {detail.icon}
            <h1 className='text-center font-poppins-semibold text-sm lg:text-xl'>{detail.title}</h1>
            <p className='text-xs text-center lg:text-base'>{detail.description}</p>
          </li>
        ))}
      </ul>
    </section>
   );
}
 
export default JoinUs;
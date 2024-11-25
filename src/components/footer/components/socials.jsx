import IgIcon from "../icon/ig-icon";
import TiktokIcon from "../icon/tiktok-icon";

import WhiteFbIcon from "../icon/white-fb";
import YtIcon from "../icon/yt-icon";
import ViberIcon from "../icon/viber-icon"


const socialsData = [
  { icon: <WhiteFbIcon />, url: 'https://www.facebook.com/abensonappliances'   },
  { icon: <YtIcon />, url: 'https://www.youtube.com/@AbensonAppliance' },
  { icon: <IgIcon />, url: 'https://www.instagram.com/abensonph/?hl=en' },
  { icon: <TiktokIcon />, url: 'https://www.tiktok.com/@abenson.ph?lang=en' },
  { icon: <ViberIcon />,  url: 'https://invite.viber.com/?g2=AQA%2FrOMbQxvrF0tybHeEp1es31o6D21wtsUiB08bc9GxqXFrA7LvA7GD%2FNAImffU&lang=en' },
]

const Socials = () => {
  return ( 
    <ul className="flex items-center gap-[32.3px] max-w-[254px] mx-auto lg:mx-0">
      {socialsData.map((social, index) => (
        <li key={index} className="flex-1">
          <a href={social.url} target="_blank">
            {social.icon}
          </a>         
        </li>
      ))}
    </ul>
   );
}
 
export default Socials;
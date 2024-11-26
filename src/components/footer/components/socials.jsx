import { socialsData } from "../data/socials-data";
const Socials = () => {
  return ( 
    <ul className="flex items-center gap-[32.3px] max-w-[254px] mx-auto lg:mx-0">
      {socialsData.map((social, index) => (
        <li key={index} className="flex-1">
          <a href={social.url} target="_blank">
            {<social.icon/>}
          </a>         
        </li>
      ))}
    </ul>
   );
}
 
export default Socials;
import PropTypes from "prop-types";

const FooterInfo = ({ details }) => {
  return (
    <ul className="flex text-white gap-1 md:gap-[18px] lg:gap-[42px]">
      {details.map((detail, index) => (
        <li key={index} className="font-work-sans-regular md:font-poppins-regular">
          <a 
            href={detail.url} 
            target="_blank" 
            className="
              text-xs leading-[14.08px] underline
              md:hover:underline md:no-underline md:leading-[18px]
            "
          >
            {detail.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

FooterInfo.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired, 
    })
  ).isRequired,
};

export default FooterInfo;

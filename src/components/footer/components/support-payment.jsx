import { supportPaymentDetails } from "../data/support-payment-details";
import PaymentImagesGrid from "./payment-images-grid";


const SupportPayment = () => {

  return ( 
    <div
     className="
        hidden md:block relative z-10 mx-auto max-w-[668.39px] 
        xl:w-[378px]
      "
    >
      <div className="flex xl:gap-[75px] gap-6 items-start flex-1 lg:justify-center xl:justify-between w-full">
        <div className="flex gap-[75px] lg:flex-col lg:min-w-[123px] lg:max-w-[160px] lg:gap-[50px]">
          {supportPaymentDetails.slice(0,2).map((detail, index) => (
            <div 
              key={index} 
              className="
                flex flex-col items-center gap-6
                text-xs
                lg:items-start lg:gap-4
              "
            >
              <h1 
                className="
                text-primary-yellow font-poppins-semibold
                  leading-6  
                  lg:text-base lg:leading-[32px]
                "
              >
                {detail.title}
              </h1>
              <div className="flex flex-col gap-1">
                {detail.descriptions.map((item, index) => (
                  <a 
                    key={index}
                    className="
                      text-white text-center 
                      lg:text-start
                      lg:text-xs lg:leading-[18px]
                      hover:underline
                    "
                    href={item.url}
                    target="_blank"
                  >
                  {item.description}
                </a>
                ))}
              </div>
              
            </div>
          ))}
        </div>
        <div className="flex gap-[75px] lg:flex-col lg:gap-[52px]">
          {supportPaymentDetails.slice(2).map((detail, index) => {
            const isLastElement = index === supportPaymentDetails.slice(2).length - 1;
            return (
              <div 
                key={index} 
                className="
                  flex flex-col items-center
                  text-xs min-w-[92px] w-[112px]
                  gap-5 lg:items-start lg:gap-4
                  lg:w-[151px]
                "
              >
                <h1 
                  className={`
                    text-primary-yellow leading-6 text-wrap
                    lg:text-base lg:leading-[32px]
                    ${
                      isLastElement 
                        ? "md:font-works-sans-semibold lg:font-poppins-semibold" 
                        : "font-poppins-semibold"
                    }
                  `}
                >
                  {detail.title}
                </h1>

                {detail.descriptions 
                  ? <div className="flex flex-col gap-1">
                      {detail.descriptions.map((item, index) => (
                        <a 
                          key={index}
                          className="
                            text-white text-center 
                            lg:text-start
                            lg:text-xs lg:leading-[18px]
                            hover:underline
                          "
                          href={item.url}
                          target="_blank"
                        >
                        {item.description}
                      </a>
                      ))}
                    </div>
                  : <PaymentImagesGrid />
                }
              </div>
            );
          })}
        </div>
      </div>
    </div>
   );
}
 
export default SupportPayment;
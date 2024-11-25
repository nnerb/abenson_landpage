import PaymentImagesGrid from "./payment-images-grid";


const SupportPayment = () => {

  const supportPaymentDetails = [
    {
      title: 'Discover',
      description: 'Why Abenson Awesomeness Blog Buyer’s Guide'
    },
    {
      title: 'Our Services',
      description: 'Click and Collect Business Solutions Appliance Padala New Home Solutions Easy Ink'
    },
    {
      title: 'Support',
      description: 'Store Locator Order Tracker Safety Advisory'
    },
    {
      title: 'Payment methods',
      description: false,
    },
  ]

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
              <p 
                className="
                  text-white text-center 
                  lg:text-start
                  lg:text-xs lg:leading-[18px]
                "
              >
                {detail.description}</p>
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

                {detail.description 
                  ? <p 
                      className="
                        text-white text-center 
                        lg:text-start
                        lg:text-xs lg:leading-[18px]
                        lg:max-w-[92px]
                      "
                    > 
                      {detail.description}
                    </p> 
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
import american from "../../../assets/images/footer/american.png"
import bdo from "../../../assets/images/footer/bdo.png"
import grab from "../../../assets/images/footer/grab.png"
import hsbc from "../../../assets/images/footer/hsbc.png"
import visa from "../../../assets/images/footer/visa.png"

const PaymentImagesGrid = () => {

  const paymentMethodsImages = [
    visa, american, bdo, hsbc, grab
  ]

  return ( 
    <a 
      className="
        grid grid-cols-2 grid-rows-3 h-[92px] 
        max-w-[274px] md:max-w-[133px] mx-auto
        place-items-center items-center
      "
      href="https://www.abenson.com/promos/payment-offers"
      target="_blank"
    >
    {paymentMethodsImages.map((image, index) => (
      <img key={index} 
        src={image} 
        alt="payments images"
        className={`${
          index === 4 ? "col-span-2 place-self-center" : ""
        }`} /* Last item spans two columns */
      />
    ))}
  </a>
   );
}
 
export default PaymentImagesGrid;
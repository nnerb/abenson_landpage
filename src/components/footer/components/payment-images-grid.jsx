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
    <div 
      className="
        flex gap-1 max-w-[133px] flex-wrap
      "
    >
    {paymentMethodsImages.map((image, index) => (
      <img key={index} src={image} alt="payments images"/>
    ))}
  </div>
   );
}
 
export default PaymentImagesGrid;
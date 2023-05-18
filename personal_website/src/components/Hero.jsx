import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      {/* <div className={`flex flex-row items-center py-[16px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
        <img src={discount} alt="discount"  className="w-[32px] h-[32px]"/>
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For {" "}
          <span className="text-white">1 Month</span> Account  
        </p>
      </div> */}

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Dionysios <br className="sm:block hidden"/> {" "}
          <span className="text-gradient">Basdanis</span> {" "}
        </h1>
        {/* <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div> */}
      </div>

      {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Payment Method.
      </h1> */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Highly skilled software engineer with experience in full stack development, implementing
applications using Flask, Camunda and Appsmith. Deep knowledge of deployment using
Kubernetes and Docker. Adept at writing C# applications, and working with databases in R, Weka
and Python. Collaborative and productive with excellent planning and communication abilities.
Well-disciplined, self-motivated and with great adaptability.</p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
      <div className="absolute z-[0] w-[40%] h-[35%] bottom-20 pink__gradient"/>
      <div className="absolute z-[1] w-[60%] h-[60%] rounded-full bottom-20 white__gradient"/>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
    </div>
    {/* <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div> */}
  </section>
)

export default Hero
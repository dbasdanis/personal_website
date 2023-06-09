import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Dionysios {" "}
          <span className="text-gradient">Basdanis</span> {" "}
        </h1>
      </div>

      <p className={`${styles.paragraph} max-w-[800px] mt-5`}>Highly skilled software engineer with experience in full stack development, implementing
applications using Flask, Camunda and Appsmith. Deep knowledge of deployment using
Kubernetes and Docker. Adept at writing C# applications, and working with databases in R, Weka
and Python. Collaborative and productive with excellent planning and communication abilities.
Well-disciplined, self-motivated and with great adaptability.</p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="billing" className="w-[230px] h-[300px] relative z-[5] rounded-full"/>
    </div>
  </section>
)

export default Hero
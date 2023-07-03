import { apple, bill, google } from '../assets';
import styles, {layout}  from '../style';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Education <br className="sm:block hidden"/></h2>
      <p className={`${styles.paragraph} max-w-[1000px] mt-5`}>
        <h3 className={styles.heading3}> • University of Thessaly</h3>
        Minor in Electrical and Computer Engineering. <br />
        • Cumulative GPA: 8.28 / 10.00<br />
        • Thesis work: Predictive Model of Motion Picture Success using Machine Learning Algorithms<br />
            - Developed a predictive model using machine learning algorithms to forecast the success of<br />
            motion pictures.<br />
            - Achieved a grade of 10/10, for the thesis work, demonstrating exceptional research and<br />
            analytical skills.<br />
        • Developed projects in fields as: hardware programming, operating systems, parallel programming, <br />
web development, networks, machine learning, databases, and algorithms. <br />
          
        <h3 className={styles.heading3}> • Music High School of Volos</h3>
        • Cumulative GPA: 19.13 / 20.00 <br />
        • Proficient in playing the accordion, and piano. <br />
        • Received comprehensive training in musical theory, composition, and performance. <br />
      </p>
    </div>
    
  </section>
)

export default Billing
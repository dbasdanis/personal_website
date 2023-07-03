import { apple, bill, google } from '../assets';
import styles, {layout}  from '../style';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>University of Thessaly <br className="sm:block hidden"/></h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <pre>
        Minor in Electrical and Computer Engineering. <br />
        • Cumulative GPA: 8.28 / 10.00<br />
        • Thesis work: Predictive Model of Motion Picture Success using Machine Learning Algorithms<br />
            - Developed a predictive model using machine learning algorithms to forecast the success of<br />
            motion pictures.<br />
            - Achieved a grade of 10/10, for the thesis work, demonstrating exceptional research and<br />
            analytical skills.<br />
        </pre>
      </p>
    </div>
    
  </section>
)

export default Billing
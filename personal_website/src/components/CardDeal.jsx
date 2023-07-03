import { card } from '../assets';
import styles, { layout } from '../style'; 
import Button from './Button';

const CardDeal = () => (
  <section id="clients" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Honors and Awards<br className="sm:block hidden"/>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <pre>
        Sprint Canoe Kayak (N.O.V.A) - Volos, Greece | 09.2007 – 11.2019 <br /><br />
        - Former national team member with many distinctions in national championships and <br/>  participation in European and World championships. <br />
        </pre>
      
      </p>
    </div>
  </section>
)

export default CardDeal
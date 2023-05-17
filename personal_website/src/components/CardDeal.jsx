import { card } from '../assets';
import styles, { layout } from '../style'; 
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden"/> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Elit enim sed massa etiam, Mauris eu adipiscing ultices ametodio aenean neque. Fusce ipsum orci rhomcus aliporttitor integer platea placerat.
      </p>
      <Button styles="mt-10"/> 
    </div>

  </section>
)

export default CardDeal
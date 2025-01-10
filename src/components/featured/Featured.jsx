import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Stev Dev</b> Découvrez mes histoires et mes idées créatives
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            eveniet possimus nemo dicta, nisi est praesentium tenetur veritatis
            similique labore ad placeat error qui illum, harum provident facilis
            architecto amet!
          </p>

          <button className={styles.button}>En Savoir plus</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

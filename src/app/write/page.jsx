import Image from "next/image";
import styles from "./write.module.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <input type="text" placeholder="title" />
      <div className={styles.editor}>
        <button className={styles.button}>
          <Image src="/plus.png" width={16} height={16} alt="plus" />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" width={16} height={16} alt="image" />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" width={16} height={16} alt="image" />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" width={16} height={16} alt="image" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WritePage;

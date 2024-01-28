import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Transforming Ideas into Captivating Blogs.
        </h1>
        <p className={styles.desc}>
          Let us weave your ideas and stories into compelling narratives that
          captivate and inspire
        </p>
        <div className={styles.buttons}>
          <Link href="/about">
            <button className={styles.button}>Learn More</button>
          </Link>
          <Link href="/contact">
            <button className={styles.button}>Contact</button>
          </Link>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image
          src="/hero.gif"
          alt="image"
          width={500}
          height={500}
          className={styles.heroImg}
          priority
        />
      </div>
    </div>
  );
};

export default Home;

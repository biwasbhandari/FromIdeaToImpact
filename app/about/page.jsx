import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "Our Story",
  description:
    "Discover the journey of transforming ideas into captivating blogs.",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>Our Journey</h2>
        <h1 className={styles.title}>
          Turning Ideas into Engaging Blog Narratives.
        </h1>
        <p className={styles.desc}>
          Embark on a journey with Creative Thoughts Agency, where we specialize
          in transforming your unique ideas and stories into captivating blog
          narratives. Our commitment to creativity and precision ensures that
          each blog we create is not just informative but also engaging and
          thought-provoking. Explore the power of storytelling with us and let
          your ideas resonate in the digital space.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>Passionate Writers</h1>
            <p>Crafting Compelling Narratives</p>
          </div>
          <div className={styles.box}>
            <h1>1000+</h1>
            <p>Blogs Written and Published</p>
          </div>
          <div className={styles.box}>
            <h1>Custom Solutions</h1>
            <p>Tailored to Your Unique Ideas</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          height={500}
          width={500}
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;

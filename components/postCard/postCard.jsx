import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image
              src={post.img}
              alt="image"
              height={600}
              width={600}
              className={styles.img}
              priority
            />
          </div>
        )}
      </div>
      <div className={styles.bottom}>
        <span className={styles.date}>
          {post.createdAt?.toLocaleString().slice(0, 10)}
        </span>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

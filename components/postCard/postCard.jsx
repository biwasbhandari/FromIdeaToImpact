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
              // src={post.img}
              src="https://i.pinimg.com/564x/6b/fb/e6/6bfbe6832fe1e55f1a4e8b90c3ffdf95.jpg"
              alt="image"
              height={400}
              width={600}
              className={styles.img}
            />
          </div>
        )}
        <span className={styles.date}>
          {post.createdAt?.toLocaleString().slice(0, 10)}
        </span>
      </div>
      <div className={styles.bottom}>
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

import styles from './PostCard.module.css';

export const PostCard=({posts})=>{

    return(
        <ul>
            {posts.map(post=>(
                <li key={post.id} className={styles.post_item}>
                    <h5 className={styles.post_title}>№{post.id} {post.title}</h5>
                    <p>{post.body}</p>
                </li>
                ))}
        </ul>
    )
}
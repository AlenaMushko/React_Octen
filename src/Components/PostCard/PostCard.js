import styles from './PostCard.module.css';

export const PostCard = ({post, handleSeePost}) => {
    const handleClick = (event) => {
        const rect = event.target.getBoundingClientRect();
        handleSeePost(post, {
            top: rect.top + rect.height + window.scrollY,
            left: rect.left + window.scrollX
        });
    };

    return (
        <li>
            <h4>{post.id}) {post.title}</h4>
            <button type="button" className={styles.postBtn} onClick={handleClick}>See post</button>
        </li>
    )
}




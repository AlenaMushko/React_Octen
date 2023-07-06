import {useState} from "react";

import {PostCard} from "../PostCard/PostCard";
import styles from './Posts.module.css';

export const Posts = ({owenPosts, setShowPostCard, showPostCard}) => {
    const [postInfo, setPostInfo] = useState(null);
    const [postPosition, setPostPosition] = useState(null);

    const handleSeePost = (info, position) => {
        setPostInfo(info);
        setPostPosition(position);
        setShowPostCard(true)
    }

    return (
        <div>
            <ul className={styles.postList}>
                {owenPosts?.map(post => (
                    <PostCard key={post.id} post={post} handleSeePost={handleSeePost} position={postPosition}
                              showPostCard={showPostCard}/>
                ))}
            </ul>
            {postInfo && showPostCard && (
                <div className={styles.postBox}
                     style={{top: postPosition?.top - 100}}>
                    <h4>{postInfo.id}) {postInfo.title}</h4>
                    <hr/>
                    <p>{postInfo.body}</p>
                </div>)}
        </div>
    )
}



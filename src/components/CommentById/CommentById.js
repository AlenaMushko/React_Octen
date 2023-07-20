import {useEffect, useState} from 'react';

import styles from './CommentById.module.css';
import {commentsService} from "../../services";

export const CommentById = ({setIsLoading, id}) => {
    const [comment, setComment] = useState(null);

    const getCommentById = async (id) => {
        setIsLoading(true);
        try {
            const {data} = await commentsService.getById(id);
            return data;
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getCommentById(id)
            .then(res => setComment(res));
    }, [id]);

    return (
        <section>
            {comment && (
                <>
                    <h2 className={styles.title}>Comment - ''{comment.name}''</h2>
                    <b>{comment.email}</b>
                    <p>{comment.body}</p>
                </>
            )}
        </section>
    );
};


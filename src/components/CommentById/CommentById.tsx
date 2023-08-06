import React, {useEffect, useState} from 'react';

import styles from './CommentById.module.css';
import {commentsService} from "../../services";

type TComment={
    name:string;
    email:string;
    body:string;
}
interface IProps{
    id:string,
    setIsLoading:(isLoading: boolean)=>void,
}

export const CommentById:React.FC<IProps> = ({setIsLoading, id}) => {
    const [comment, setComment] = useState<TComment | null>(null);

    const getCommentById = async (id:string) => {
        setIsLoading(true);
        try {
            const {data} = await commentsService.getById(id);
            return data;
        } catch (err) {
            const error = err as Error;
            console.log(error.message);
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


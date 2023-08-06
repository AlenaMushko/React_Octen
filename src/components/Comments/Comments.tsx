import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import styles from './Comments.module.css';
import {commentsService} from "../../services";
import {AppRoutes} from "../../routing/appRoutes";

interface IProps{
    setIsLoading:(isLoading: boolean)=>void,
}

type TComment = {
    id:number;
    email:string;
    name:string;
}

export const Comments:React.FC<IProps> = ({setIsLoading}) => {
    const [comments, setComments] = useState <TComment[] | null>(null);

    const getAllComments = async () => {
        setIsLoading(true);
        try {
            const {data} = await commentsService.getAll();
            return data;
        } catch (err) {
            const error = err as Error;
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getAllComments()
            .then(res => setComments(res));
    }, []);

    return (
        <section>
            <h2 className={styles.title}>Comments</h2>
            <ul className={styles.list}>
                {comments?.map(({id, email, name}) => (
                    <li key={id} className={styles.item}>
                        <Link to={`${AppRoutes.COMMENTS}/${id}`} className={styles.link}>
                            {name}
                        </Link>
                        <h6>{email}</h6>
                    </li>
                ))}
            </ul>
        </section>
    );
};

import React, {Component} from 'react';

import styles from './Comments.module.css';
import {getFromService} from "../../services";
import {Loader} from "../Loader";

type TComments = {
    id:number,
    name:string,
    email:string,
    body:string
}

interface IState{
    comments: TComments[],
    isLoading: boolean,
    error:any,
}
export class Comments extends Component<{}, IState>{
    constructor(props:{}) {
        super(props);
        this.state = {
            comments: [],
            isLoading: false,
            error: null,
        }
    }

    async componentDidMount() {
        this.setState({
            isLoading: true,
        });
        try {
            const res = await getFromService.getAllComments();
            if (res.status !== 200) {
                throw new Error(res.status.toString());
            }
            const data = res.data;
            this.setState({
                isLoading: false,
                comments: data
            });
        } catch (error) {
            this.setState({
                isLoading: false,
                error: error
            });
        }
    }

    render() {
        const commentsArr = this.state.comments;
        const loader = this.state.isLoading;

        return (
            <section>
                <h2 className={styles.title}>Comments</h2>
                {loader && <Loader/>}
                <ul>
                    {
                        commentsArr && commentsArr.map(({id, name, email, body}) => (
                            <li key={id} className={styles.item}>
                                <h3>{id}) {name}</h3>
                                <p className={styles.b}>Email: <span className={styles.span}>{email}</span></p>
                                <p>{body}</p>
                            </li>
                        ))
                    }
                </ul>
            </section>
        )
    }
}
